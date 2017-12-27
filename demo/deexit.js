/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expect = exports.it = exports.describe = undefined;

var _describe = __webpack_require__(1);

var _describe2 = _interopRequireDefault(_describe);

var _it = __webpack_require__(3);

var _it2 = _interopRequireDefault(_it);

var _expect = __webpack_require__(4);

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose to window
window.describe = _describe2.default;
window.it = _it2.default;
window.expect = _expect2.default;

exports.describe = _describe2.default;
exports.it = _it2.default;
exports.expect = _expect2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(2);

var $target = (0, _dom.$)('main');

var describe = function describe(section, callback) {
  var errorMessages = [];

  if (!callback) {
    return;
  }

  try {
    callback();
    (0, _dom.displaySuccessfulTests)(section, $target);
  } catch (err) {
    errorMessages.push(err.message);
  } finally {
    if (errorMessages.length) {
      (0, _dom.displayFailedTests)(section, errorMessages, $target);
    }
  }
};

exports.default = describe;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var $ = function $(tag) {
  return document.querySelector(tag);
};
var $$ = function $$(tag) {
  return document.createElement(tag);
};

var displaySuccessfulTests = function displaySuccessfulTests(module, target) {
  var div = $$('div');
  div.classList.add("success");
  div.textContent = module;
  target.appendChild(div);
  return div;
};

var displayFailedTests = function displayFailedTests(module, errors, target) {
  var div = $$('div');
  var ul = $$('ul');

  div.classList.add('error');
  div.textContent = module;

  errors.forEach(function (error) {
    var li = $$('li');
    li.textContent = error;
    ul.appendChild(li);
  });

  div.appendChild(ul);
  target.appendChild(div);
  return div;
};

exports.$ = $;
exports.$$ = $$;
exports.displaySuccessfulTests = displaySuccessfulTests;
exports.displayFailedTests = displayFailedTests;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var it = function it(testName, callback) {
  if (!callback) {
    return;
  }

  try {
    callback();
  } catch (err) {
    throw new Error(err.stack);
  }
};

exports.default = it;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fastDeepEqual = __webpack_require__(5);

var _fastDeepEqual2 = _interopRequireDefault(_fastDeepEqual);

var _arrayEqual = __webpack_require__(6);

var _arrayEqual2 = _interopRequireDefault(_arrayEqual);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Expect = function () {
  function Expect(value) {
    _classCallCheck(this, Expect);

    this.actualValue = value;
    this.value = JSON.stringify(value);
    this.shouldBeEqual = true;
  }

  _createClass(Expect, [{
    key: "_typeCheck",
    value: function _typeCheck(type) {
      var _this = this;

      return function () {
        if (_this.shouldBeEqual) {
          if (_typeof(_this.actualValue) === type) {
            return true;
          }
        } else {
          if (_typeof(_this.actualValue) !== type) {
            return true;
          }
        }

        var actualType = _typeof(_this.actualValue);
        (0, _utils.error)(_this.shouldBeEqual ? "expected " + type + " instead got " + actualType : "expected " + _this.value + " not to be " + type);
      };
    }
  }, {
    key: "equal",
    value: function equal(testValue) {

      if (this.shouldBeEqual) {
        if (this.actualValue === testValue) {
          return true;
        }
      } else {
        if (this.actualValue !== testValue) {
          return true;
        }
      }

      testValue = JSON.stringify(testValue);

      (0, _utils.error)(this.shouldBeEqual ? "expected " + testValue + " instead got " + this.value : "expected " + this.value + " to not be equal to " + testValue);
    }
  }, {
    key: "deepEqual",
    value: function deepEqual(testValue) {
      if (this.shouldBeEqual) {
        if ((0, _fastDeepEqual2.default)(this.actualValue, testValue)) {
          return true;
        }
      } else {
        if (!(0, _fastDeepEqual2.default)(this.actualValue, testValue)) {
          return true;
        }
      }

      (0, _utils.error)(this.shouldBeEqual ? "expected " + testValue + " instead got " + this.value : "expected " + this.value + " to not be equal to " + testValue);
    }
  }, {
    key: "arraysEqual",
    value: function arraysEqual(testValue) {
      if (this.shouldBeEqual) {
        if ((0, _arrayEqual2.default)(this.actualValue, testValue)) {
          return true;
        }
      } else {
        if (!(0, _arrayEqual2.default)(this.actualValue, testValue)) {
          return true;
        }
      }

      (0, _utils.error)(this.shouldBeEqual ? "expected " + testValue + " instead got " + this.value : "expected " + this.value + " to not be equal to " + testValue);
    }
  }, {
    key: "not",
    get: function get() {
      this.shouldBeTrue = false;
      return this;
    }
  }, {
    key: "ok",
    get: function get() {
      if (this.shouldBeEqual) {
        if (!!this.actualValue) {
          return true;
        }
      } else {
        if (!!this.actualValue === false) {
          return true;
        }
      }

      (0, _utils.error)("expected " + this.value + " to be " + (this.shouldBeEqual ? "truthy" : "falsy"));
    }
  }, {
    key: "to",
    get: function get() {
      return this;
    }
  }, {
    key: "should",
    get: function get() {
      return this;
    }
  }, {
    key: "be",
    get: function get() {
      return this;
    }
  }, {
    key: "string",
    get: function get() {
      this._typeCheck("string")();
    }
  }, {
    key: "number",
    get: function get() {
      this._typeCheck("number")();
    }
  }, {
    key: "boolean",
    get: function get() {
      this._typeCheck("boolean")();
    }
  }, {
    key: "bool",
    get: function get() {
      this._typeCheck("boolean")();
    }
  }, {
    key: "undefined",
    get: function get() {
      this._typeCheck("undefined")();
    }
  }, {
    key: "symbol",
    get: function get() {
      this._typeCheck("symbol")();
    }
  }, {
    key: "func",
    get: function get() {
      this._typeCheck("function")();
    }
  }, {
    key: "object",
    get: function get() {
      if (this.actualValue && this._typeCheck("object")() && !Array.isArray(this.actualValue)) {
        return true;
      }

      (0, _utils.error)("expected object instead got " + _typeof(this.actualValue));
    }
  }, {
    key: "array",
    get: function get() {
      if (this.shouldBeEqual) {
        if (this._typeCheck("object")() && Array.isArray(this.actualValue)) {
          return true;
        }
      } else {
        if (!this._typeCheck("object")() || !Array.isArray(this.actualValue)) {
          return true;
        }
      }

      var type = _typeof(this.actualValue);
      (0, _utils.error)(this.shouldBeEqual ? "expected array instead got " + type : "expected " + this.value + " to not be array");
    }
  }]);

  return Expect;
}();

exports.default = function (value) {
  return new Expect(value);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function equal(a, b) {
  if (a === b) return true;

  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (!equal(a[i], b[i])) return false;
    }return true;
  }

  if (arrA != arrB) return false;

  if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
    var keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;

    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;

    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }for (i = 0; i < keys.length; i++) {
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }return true;
  }

  return false;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function equal(arr1, arr2) {
  var length = arr1.length;
  if (length !== arr2.length) return false;
  for (var i = 0; i < length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }return true;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var define = function define(obj, name, descriptor) {
  Object.defineProperty(obj, name, descriptor);
};

var isObject = function isObject(arg) {
  return arg && (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && !Array.isArray(arg);
};

var extend = function extend(obj, proto) {
  for (var prop in proto) {
    if (proto.hasOwnProperty(prop) && isObject(proto[prop])) {
      obj[prop] = define(obj, prop, proto[prop]);
    } else {
      obj[prop] = proto[prop];
    }
  }
};

var error = function error(message) {
  throw new Error(message);
};

exports.define = define;
exports.isObject = isObject;
exports.extend = extend;
exports.error = error;

/***/ })
/******/ ]);