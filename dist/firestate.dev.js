(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fireState"] = factory();
	else
		root["fireState"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dispatch.js":
/*!*************************!*\
  !*** ./src/dispatch.js ***!
  \*************************/
/*! exports provided: dispatch, reducers, use, clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");


function dispatch (actionName, data) {
  console.log('Dispatching event "' + actionName + '"')
  if (typeof _listeners__WEBPACK_IMPORTED_MODULE_0__["listeners"][actionName] === 'object') {
    var shallowListeners = _listeners__WEBPACK_IMPORTED_MODULE_0__["listeners"][actionName].slice()
    var numOfCallbacks = shallowListeners.length
    for (var i = 0; i < numOfCallbacks; i++) {
      var currentListener = shallowListeners[i]
      if (currentListener && currentListener.callback) {
        currentListener.callback(data)
      }
    }
  }
  reducers[actionName](data)
}

var reducers = {

}

function use (reducerObject) {
  console.log('Using reducers')
  for (var key in reducerObject) {
    if (reducerObject.hasOwnProperty(key)) {
      reducers[key] = reducerObject[key]
    }
  }
}

function clear () {
  reducers = {}
  console.log('Cleared all reducers')
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: dispatch, use, clear, reducers, listeners, subscribe, unsubscribe, subscribed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch */ "./src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "use", function() { return _dispatch__WEBPACK_IMPORTED_MODULE_0__["use"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return _dispatch__WEBPACK_IMPORTED_MODULE_0__["clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _dispatch__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listeners", function() { return _listeners__WEBPACK_IMPORTED_MODULE_1__["listeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return _listeners__WEBPACK_IMPORTED_MODULE_1__["subscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsubscribe", function() { return _listeners__WEBPACK_IMPORTED_MODULE_1__["unsubscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribed", function() { return _listeners__WEBPACK_IMPORTED_MODULE_1__["subscribed"]; });





/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/*! exports provided: listeners, subscribe, unsubscribe, subscribed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeners", function() { return listeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribe", function() { return unsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribed", function() { return subscribed; });
// This code is largely derived from krasimir's EventBus. All credit goes to them.

var listeners = {

}

function subscribe (eventName, callback) {
  if (typeof listeners[eventName] !== 'undefined') {
    listeners[eventName].push({ callback: callback }) // Storing it in an object, just in case new features are added
  } else {
    listeners[eventName] = [{ callback: callback }]
  }
}

function unsubscribe (eventName, callback) {
  if (typeof listeners[eventName] !== 'undefined') {
    var eventListenersLength = listeners[eventName].length
    var newArray = []
    for (var i = 0; i < eventListenersLength; i++) {
      var currentListener = listeners[eventName][i]
      if (currentListener.callback == callback) { // eslint-disable-line eqeqeq
        // Then this is the listener we want to remove
        // We won't push it to the new array
      } else {
        newArray.push(currentListener)
      }
    }
    listeners[eventName] = newArray
  }
}

function subscribed (eventName, callback) {
  if (typeof listeners[eventName] !== 'undefined') {
    var numOfCallbacks = listeners[eventName].length
    if (callback === undefined) { // If we're just checking if it has listeners, like subscribed("EVENT")
      return numOfCallbacks > 0
    }
    for (var i = 0; i < numOfCallbacks; i++) {
      var currentListener = listeners[eventName][i]
      if (currentListener.callback == callback) { // eslint-disable-line eqeqeq
        return true
      }
    }
  }
  return false // There are no listeners for this event
}


/***/ })

/******/ });
});
//# sourceMappingURL=firestate.dev.js.map