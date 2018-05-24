!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.Wedding=o():e.Wedding=o()}(window,function(){return function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}({"./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */function(e,o,n){"use strict";o.__esModule=!0;var t,r=n(/*! ./src/index */"./src/index.js"),s=(t=r)&&t.__esModule?t:{"default":t},c=n(/*! ./src/helpers */"./src/helpers.js");o["default"]=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},o=e.isConnecter,n=o!==undefined&&o,t=e.url,r=t===undefined?"":t,u=e.whitelist,i=u===undefined?[]:u;return(0,c.validateConstructor)(n,r,i)?new s["default"]({isConnecter:n,url:r,whitelist:i}):null}},"./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */function(e,o){var n=e.exports={version:"2.5.6"};"number"==typeof __e&&(__e=n)},"./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js");e.exports=function(e,o,n){if(t(e),o===undefined)return e;switch(n){case 1:return function(n){return e.call(o,n)};case 2:return function(n,t){return e.call(o,n,t)};case 3:return function(n,t,r){return e.call(o,n,t,r)}}return function(){return e.apply(o,arguments)}}},"./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,n){e.exports=!n(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),r=n(/*! ./_global */"./node_modules/core-js/modules/_global.js").document,s=t(r)&&t(r.createElement);e.exports=function(e){return s?r.createElement(e):{}}},"./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r=n(/*! ./_core */"./node_modules/core-js/modules/_core.js"),s=n(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),c=n(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),u=n(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),i=function(e,o,n){var d,l,f,a,j=e&i.F,p=e&i.G,m=e&i.S,_=e&i.P,h=e&i.B,v=p?t:m?t[o]||(t[o]={}):(t[o]||{}).prototype,y=p?r:r[o]||(r[o]={}),b=y.prototype||(y.prototype={});for(d in p&&(n=o),n)f=((l=!j&&v&&v[d]!==undefined)?v:n)[d],a=h&&l?u(f,t):_&&"function"==typeof f?u(Function.call,f):f,v&&c(v,d,f,e&i.U),y[d]!=f&&s(y,d,a),_&&b[d]!=f&&(b[d]=f)};t.core=r,i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,e.exports=i},"./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return!!e()}catch(o){return!0}}},"./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */function(e,o){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var n={}.hasOwnProperty;e.exports=function(e,o){return n.call(e,o)}},"./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),r=n(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js");e.exports=n(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?function(e,o,n){return t.f(e,o,r(1,n))}:function(e,o,n){return e[o]=n,e}},"./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,n){e.exports=!n(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&!n(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty(n(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=n(/*! ./_ie8-dom-define */"./node_modules/core-js/modules/_ie8-dom-define.js"),s=n(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),c=Object.defineProperty;o.f=n(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?Object.defineProperty:function(e,o,n){if(t(e),o=s(o,!0),t(n),r)try{return c(e,o,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[o]=n.value),e}},"./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r=n(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),s=n(/*! ./_has */"./node_modules/core-js/modules/_has.js"),c=n(/*! ./_uid */"./node_modules/core-js/modules/_uid.js")("src"),u=Function.toString,i=(""+u).split("toString");n(/*! ./_core */"./node_modules/core-js/modules/_core.js").inspectSource=function(e){return u.call(e)},(e.exports=function(e,o,n,u){var d="function"==typeof n;d&&(s(n,"name")||r(n,"name",o)),e[o]!==n&&(d&&(s(n,c)||r(n,c,e[o]?""+e[o]:i.join(String(o)))),e===t?e[o]=n:u?e[o]?e[o]=n:r(e,o,n):(delete e[o],r(e,o,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},"./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e,o){if(!t(e))return e;var n,r;if(o&&"function"==typeof(n=e.toString)&&!t(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!t(r=n.call(e)))return r;if(!o&&"function"==typeof(n=e.toString)&&!t(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var n=0,t=Math.random();e.exports=function(e){return"Symbol(".concat(e===undefined?"":e,")_",(++n+t).toString(36))}},"./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */function(e,o,n){var t=n(/*! ./_export */"./node_modules/core-js/modules/_export.js");t(t.S+t.F*!n(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),"Object",{defineProperty:n(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f})},"./src/emitter.js":
/*!************************!*\
  !*** ./src/emitter.js ***!
  \************************/
/*! no static exports found */function(e,o,n){"use strict";o.__esModule=!0;var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};var r=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.events=Object.create(null)}return e.prototype.on=function(e,o){var n;this.events[e]?console.error("This event listner already exists"):this.events=t(this.events,((n={})[e]=o,n))},e.prototype.emit=function(e){this.isConnecter?this.frame.contentWindow.postMessage(e,this.url):window.parent.postMessage(e,this.url)},e.prototype.off=function(e){var o;this.events[e]?this.events=t({},((o={})[e]=undefined,o)):console.error("This event listner doesnt exists")},e}();o["default"]=r},"./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no static exports found */function(e,o,n){"use strict";o.__esModule=!0,o["default"]=function(){this.on("connection:start",r),this.on("connection:finished",s)};var t=n(/*! ./helpers */"./src/helpers.js");function r(){this.emit("connection:finished")}function s(){clearInterval(this.connectionInterval),this.status=t.statuses.connected,console.info("Connection established")}},"./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */function(e,o,n){"use strict";o.__esModule=!0;var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};o.createConnection=function(e){var o=document.createElement("iframe");return t(o,{name:"theFionce",src:e,style:{display:"none"}}),document.body.append(o),o},o.createConnectionListener=function(e,o){window.addEventListener("message",function(n){e.includes(n.origin)?o.events[n.data]():console.error("Origin is not included in whitelist")},!1)},o.validateConstructor=function(e,o,n){return function(e,o){if(e&&""===o)return console.error("Please provide correct url for connections"),!1;return!0}(e,o)&&function(e){if(0===e.length)return console.error("Please provide whitelist for connections"),!1;return!0}(n)};o.statuses={disconnected:"disconnected",connecting:"connecting",connected:"connected"}},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,o,n){"use strict";o.__esModule=!0;var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r=u(n(/*! ./emitter */"./src/emitter.js")),s=u(n(/*! ./events */"./src/events.js")),c=n(/*! ./helpers */"./src/helpers.js");function u(e){return e&&e.__esModule?e:{"default":e}}var i=function(e){function o(n){var r=n.isConnecter,u=n.url,i=n.whitelist;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);var d=function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,e.call(this));return t(d,{isConnecter:r,url:u,whitelist:i,frame:null,connectionInterval:null,status:c.statuses.disconnected}),(0,c.createConnectionListener)(d.whitelist),s["default"].call(d),d}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,e),o.prototype.connect=function(){var e=this;this.isConnecter?(console.info("Initializing connection"),this.frame=(0,c.createConnection)(this.url),this.connectionInterval=setInterval(function(){e.emit("connection:start")},1e3),this.status=c.statuses.connecting):console.error("This is not a connector")},o}(r["default"]);o["default"]=i},0:
/*!******************************************************************!*\
  !*** multi core-js/modules/es6.object.define-property ./main.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,n){n(/*! core-js/modules/es6.object.define-property */"./node_modules/core-js/modules/es6.object.define-property.js"),e.exports=n(/*! ./main.js */"./main.js")}})["default"]});