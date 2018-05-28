define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _index = __webpack_require__(/*! ./src/index */ "./src/index.js");

var _index2 = _interopRequireDefault(_index);

var _helpers = __webpack_require__(/*! ./src/helpers */ "./src/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
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
  (0, _helpers.validateConstructor)(isConnecter, url, whitelist);

  return new _index2.default({ isConnecter: isConnecter, url: url, whitelist: whitelist });
};

/***/ }),

/***/ "./src/emitter.js":
/*!************************!*\
  !*** ./src/emitter.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

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

exports.default = Emitter;

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.attachListener = attachListener;
exports.createConnection = createConnection;
exports.createConnectionListener = createConnectionListener;
exports.validateConstructor = validateConstructor;
exports.initEvents = initEvents;
var statuses = exports.statuses = {
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

  _extends(frame, {
    name: 'theFionce',
    src: this.url,
    style: {
      display: 'none'
    }
  });

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _emitter = __webpack_require__(/*! ./emitter */ "./src/emitter.js");

var _emitter2 = _interopRequireDefault(_emitter);

var _helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wedding = function (_Emitter) {
  _inherits(Wedding, _Emitter);

  function Wedding(_ref) {
    var isConnecter = _ref.isConnecter,
        url = _ref.url,
        whitelist = _ref.whitelist;

    _classCallCheck(this, Wedding);

    var _this = _possibleConstructorReturn(this, _Emitter.call(this));

    _extends(_this, {
      events: Object.create(null),
      isConnecter: isConnecter,
      url: url,
      whitelist: whitelist,
      origin: '',
      frame: null,
      connectionInterval: null,
      status: _helpers.statuses.disconnected
    });

    _helpers.createConnectionListener.call(_this);
    _helpers.initEvents.call(_this);
    return _this;
  }

  Wedding.prototype.connect = function connect() {
    var onStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (!this.isConnecter) {
      throw new Error('This is not a connector');
    }

    if (typeof onStart !== 'function') {
      throw new Error('Please provide onStart callback');
    }

    console.info('Initializing connection');

    this.on('start', onStart);
    _helpers.createConnection.call(this);
  };

  return Wedding;
}(_emitter2.default);

exports.default = Wedding;

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main.js */"./main.js");


/***/ })

/******/ })});;
//# sourceMappingURL=wedding.amd.js.map