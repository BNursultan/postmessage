!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Wedding=e():n.Wedding=e()}(window,function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n};var r=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.events=Object.create(null)}return n.prototype.on=function(n,e){var t;this.events[n]?console.error("This event listner already exists"):this.events=o(this.events,((t={})[n]=e,t))},n.prototype.emit=function(n){this.isConnecter?this.frame.contentWindow.postMessage(n,this.url):window.parent.postMessage(n,this.url)},n.prototype.off=function(n){var e;this.events[n]?this.events=o({},((e={})[n]=void 0,e)):console.error("This event listner doesnt exists")},n}(),i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n};function c(n,e,t){return function(n,e){return!n||""!==e||(console.error("Please provide correct url for connections"),!1)}(n,e)&&function(n){return 0!==n.length||(console.error("Please provide whitelist for connections"),!1)}(t)}var s={disconnected:"disconnected",connecting:"connecting",connected:"connected"};function a(){this.emit("connection:finished")}function u(){clearInterval(this.connectionInterval),this.status=s.connected,console.info("Connection established")}var l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n};var f=function(n){function e(t){var o=t.isConnecter,r=t.url,i=t.whitelist;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var c=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,n.call(this));return l(c,{isConnecter:o,url:r,whitelist:i,frame:null,connectionInterval:null,status:s.disconnected}),function(n,e){window.addEventListener("message",function(t){n.includes(t.origin)?e.events[t.data]():console.error("Origin is not included in whitelist")},!1)}(c.whitelist),function(){this.on("connection:start",a),this.on("connection:finished",u)}.call(c),c}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),e.prototype.connect=function(){var n,e,t=this;this.isConnecter?(console.info("Initializing connection"),this.frame=(n=this.url,e=document.createElement("iframe"),i(e,{name:"theFionce",src:n,style:{display:"none"}}),document.body.append(e),e),this.connectionInterval=setInterval(function(){t.emit("connection:start")},1e3),this.status=s.connecting):console.error("This is not a connector")},e}(r);e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.isConnecter,t=void 0!==e&&e,o=n.url,r=void 0===o?"":o,i=n.whitelist,s=void 0===i?[]:i;return c(t,r,s)?new f({isConnecter:t,url:r,whitelist:s}):null}}]).default});
//# sourceMappingURL=wedding.umd.js.map