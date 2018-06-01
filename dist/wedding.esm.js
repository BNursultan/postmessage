var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Emitter = function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  Emitter.prototype.on = function on(name, fn) {
    var _extends2;

    if (this.events[name]) {
      throw new Error(name + ' - event listner already exists');
    }

    this.events = _extends(this.events, (_extends2 = {}, _extends2[name] = fn, _extends2));
  };

  Emitter.prototype.emit = function emit(name) {
    try {
      if (this.isConnecter) {
        this.frame.contentWindow.postMessage(name, this.url);
      } else {
        window.parent.postMessage(name, this.origin);
      }
    } catch (e) {
      throw new Error(e + ' - Postmessage error on emit');
    }
  };

  Emitter.prototype.off = function off(name) {
    var _extends3;

    if (!this.events[name]) {
      throw new Error(name + ' - event listner does not exists');
    }

    this.events = _extends({}, (_extends3 = {}, _extends3[name] = undefined, _extends3));
  };

  return Emitter;
}();

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  _extends$1(frame, {
    name: 'theFionce',
    src: this.url
  });

  frame.style.display = 'none';

  document.body.append(frame);
  var frameDoc = frame.contentDocument || frame.contentWindow.document;

  if (frameDoc.readyState === 'complete') {
    console.info('Frame loaded');

    this.frame = frame;

    this.connectionInterval = setInterval(function () {
      _this.emit('connection:start');
    }, 1000);

    this.status = statuses.connecting;
    return;
  }

  setTimeout(createConnection.bind(this), 500);
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

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wedding = function (_Emitter) {
  _inherits(Wedding, _Emitter);

  function Wedding(_ref) {
    var isConnecter = _ref.isConnecter,
        url = _ref.url,
        whitelist = _ref.whitelist;

    _classCallCheck$1(this, Wedding);

    var _this = _possibleConstructorReturn(this, _Emitter.call(this));

    _extends$2(_this, {
      events: Object.create(null),
      isConnecter: isConnecter,
      url: url,
      whitelist: whitelist,
      origin: '',
      frame: null,
      connectionInterval: null,
      status: statuses.disconnected
    });

    createConnectionListener.call(_this);
    initEvents.call(_this);
    return _this;
  }

  Wedding.prototype.connect = function connect() {
    var onStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    if (!this.isConnecter) {
      throw new Error('This is not a connector');
    }

    console.info('Initializing connection');

    this.on('start', onStart);
    createConnection.call(this);
  };

  return Wedding;
}(Emitter);

var main = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$isConnecter = _ref.isConnecter,
      isConnecter = _ref$isConnecter === undefined ? false : _ref$isConnecter,
      _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      _ref$whitelist = _ref.whitelist,
      whitelist = _ref$whitelist === undefined ? [] : _ref$whitelist;

  if (typeof window === 'undefined') {
    console.error('Connector does not work in SSR');
    return null;
  }

  // Validate before construct
  validateConstructor(isConnecter, url, whitelist);

  return new Wedding({ isConnecter: isConnecter, url: url, whitelist: whitelist });
});

export default main;
