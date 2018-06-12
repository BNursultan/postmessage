var FRAME_NAME = 'theFionce';

var statuses = {
  disconnected: 'disconnected',
  connecting: 'connecting',
  connected: 'connected'
};

function attachListener(_ref) {
  var origin = _ref.origin,
      data = _ref.data;

  if (!this.whitelist.includes(origin)) {
    throw new Error(origin + ' - is not included in whitelist');
  }

  this.origin = origin;

  if (this.events[data]) {
    this.events[data]();
  }
}

// Create connection function
// creates iFrame and trying to connect inside with interval
function createConnection() {
  var _this = this;

  var frame = document.createElement('iframe');
  frame.style.display = 'none';
  frame.name = FRAME_NAME;
  frame.src = this.url;

  document.body.append(frame);

  this.status = statuses.connecting;
  this.frame = frame;

  frame.onload = function () {
    console.info('Frame loaded');

    _this.connectionInterval = setInterval(function () {
      _this.emit('connection:start');
    }, 1000);
  };
}

// Create connection listner on window
function createConnectionListener() {
  if (window.addEventListener) {
    window.addEventListener('message', attachListener.bind(this), false);
  } else {
    window.attachEvent('onmessage', attachListener.bind(this));
  }
}

// Validations
function validateConstructor(isConnecter, url, whitelist) {
  if (isConnecter && url === '') {
    throw new Error('Please provide correct url for connections');
  }

  if (whitelist.length === 0) {
    throw new Error('Please provide whitelist for connections');
  }

  if (typeof isConnecter !== 'boolean') {
    throw new Error('isConnecter - argument should be a boolean');
  }

  if (typeof url !== 'string') {
    throw new Error('url - argument should be a string');
  }

  if (!Array.isArray(whitelist)) {
    throw new Error('whitelist - argument should be an array of url strings');
  }
}

// Default events
function initEvents() {
  var _this2 = this;

  this.on('connection:start', function () {
    _this2.emit('connection:finished');
    _this2.emit('start');
  });

  this.on('connection:finished', function () {
    clearInterval(_this2.connectionInterval);
    _this2.status = statuses.connected;

    console.info('Connection established');
  });
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Emitter = function () {
  function Emitter() {
    classCallCheck(this, Emitter);
  }

  Emitter.prototype.on = function on(name, fn) {
    var _babelHelpers$extends;

    if (this.events[name]) {
      throw new Error(name + ' - event listner already exists');
    }

    this.events = _extends(this.events, (_babelHelpers$extends = {}, _babelHelpers$extends[name] = fn, _babelHelpers$extends));
  };

  Emitter.prototype.emit = function emit(name) {
    try {
      if (this.isConnecter) {
        window.frames[FRAME_NAME].postMessage(name, this.url);
      } else {
        window.parent.postMessage(name, this.origin);
      }

      if (this.log) {
        console.info(name + ' - event is emitted');
      }
    } catch (e) {
      throw new Error(e + ' - Postmessage error on emit');
    }
  };

  Emitter.prototype.off = function off(name) {
    var _babelHelpers$extends2;

    if (!this.events[name]) {
      throw new Error(name + ' - event listner does not exists');
    }

    this.events = _extends({}, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[name] = undefined, _babelHelpers$extends2));
  };

  return Emitter;
}();

var Postmessage = function (_Emitter) {
  inherits(Postmessage, _Emitter);

  function Postmessage(_ref) {
    var isConnecter = _ref.isConnecter,
        url = _ref.url,
        whitelist = _ref.whitelist,
        log = _ref.log;
    classCallCheck(this, Postmessage);

    var _this = possibleConstructorReturn(this, _Emitter.call(this));

    _extends(_this, {
      isConnecter: isConnecter,
      url: url,
      whitelist: whitelist,
      log: log,
      events: Object.create(null),
      origin: '',
      frame: null,
      connectionInterval: null,
      status: statuses.disconnected
    });

    createConnectionListener.call(_this);
    initEvents.call(_this);
    return _this;
  }

  Postmessage.prototype.connect = function connect() {
    var onStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    if (!this.isConnecter) {
      throw new Error('This is not a connector');
    }

    console.info('Initializing connection');

    this.on('start', onStart);
    createConnection.call(this);
  };

  return Postmessage;
}(Emitter);

var main = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$isConnecter = _ref.isConnecter,
      isConnecter = _ref$isConnecter === undefined ? false : _ref$isConnecter,
      _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      _ref$whitelist = _ref.whitelist,
      whitelist = _ref$whitelist === undefined ? [] : _ref$whitelist,
      _ref$log = _ref.log,
      log = _ref$log === undefined ? false : _ref$log;

  if (typeof window === 'undefined') {
    console.error('Connector does not work in SSR');
    return null;
  }

  // Validate before construct
  validateConstructor(isConnecter, url, whitelist);

  return new Postmessage({
    isConnecter: isConnecter,
    url: url,
    whitelist: whitelist,
    log: log
  });
});

export default main;
