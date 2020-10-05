webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./state/DatePartsContext.tsx":
/*!************************************!*\
  !*** ./state/DatePartsContext.tsx ***!
  \************************************/
/*! exports provided: PartsProvider, usePartsState, usePartsDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsProvider", function() { return PartsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePartsState", function() { return usePartsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePartsDispatch", function() { return usePartsDispatch; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\state\\DatePartsContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var partsReducer = function partsReducer(state, action) {
  switch (action.type) {
    case "ADD_PART":
      return state.parts.length < 7 ? {
        parts: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.parts), [action.payload.part])
      } : null;

    case "REMOVE_PART":
      return {
        parts: state.parts.filter(function (part) {
          return part.id !== action.payload.id;
        })
      };

    case "CHANGE_CUSTOM_DETAIL":
      return {
        parts: state.parts.map(function (part) {
          if (part.id !== action.payload.id) return part;
          return _objectSpread(_objectSpread({}, part), {}, {
            details: action.payload.details
          });
        })
      };

    case "UPDATE_FROM_CACHE":
      return {
        parts: action.payload.parts
      };

    default:
      return state;
  }
};

var PartsStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createContext"](undefined);
var PartsDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createContext"](undefined);
var PartsProvider = function PartsProvider(_ref) {
  _s();

  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_3__["useReducer"](partsReducer, {
    parts: []
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("parts", state);
  }, [state]);
  return __jsx(PartsStateContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx(PartsDispatchContext.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, children));
};

_s(PartsProvider, "dn8ZpA+wMttbBldx3iPMU8kB/90=");

_c = PartsProvider;
var usePartsState = function usePartsState() {
  _s2();

  var context = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](PartsStateContext);

  if (context === undefined) {
    throw new Error("Please use within PartsProvider");
  }

  return context;
};

_s2(usePartsState, "LryiO+jz3qgcMP+0uXVPI23dn1o=");

var usePartsDispatch = function usePartsDispatch() {
  _s3();

  var context = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](PartsDispatchContext);

  if (context === undefined) {
    throw new Error("Please use within PartsProvider");
  }

  return context;
};

_s3(usePartsDispatch, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c;

$RefreshReg$(_c, "PartsProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovL19OX0UvLi9zdGF0ZS9EYXRlUGFydHNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJwYXJ0c1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXJ0cyIsImxlbmd0aCIsInBheWxvYWQiLCJwYXJ0IiwiZmlsdGVyIiwiaWQiLCJtYXAiLCJkZXRhaWxzIiwiUGFydHNTdGF0ZUNvbnRleHQiLCJSZWFjdCIsInVuZGVmaW5lZCIsIlBhcnRzRGlzcGF0Y2hDb250ZXh0IiwiUGFydHNQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJ1c2VQYXJ0c1N0YXRlIiwiY29udGV4dCIsIkVycm9yIiwidXNlUGFydHNEaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxLQUFLLElBQTBDO0FBQy9DLEVBQUUsb0NBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLLElBQTJCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQkFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsRUFBRTtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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dEI7QUFBK0IsU0FBSyxFQUFFaUIsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQURILENBREYsQ0FERjtBQU9ELENBbEJNOztHQUFNRCxhOztLQUFBQSxhO0FBb0JOLElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBa0I7QUFBQTs7QUFDN0MsTUFBTUMsT0FBbUIsR0FBR1QsZ0RBQUEsQ0FBaUJELGlCQUFqQixDQUE1Qjs7QUFDQSxNQUFJVSxPQUFPLEtBQUtSLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVMsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FOTTs7SUFBTUQsYTs7QUFRTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQThCO0FBQUE7O0FBQzVELE1BQU1GLE9BQU8sR0FBR1QsZ0RBQUEsQ0FBaUJFLG9CQUFqQixDQUFoQjs7QUFDQSxNQUFJTyxPQUFPLEtBQUtSLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVMsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FOTTs7SUFBTUUsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZWY3NWJjMWFiODhkMzJmZjc3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXI7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAoIXJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcikge1xuXHRcdHZhciBPbGRDb29raWVzID0gd2luZG93LkNvb2tpZXM7XG5cdFx0dmFyIGFwaSA9IHdpbmRvdy5Db29raWVzID0gZmFjdG9yeSgpO1xuXHRcdGFwaS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LkNvb2tpZXMgPSBPbGRDb29raWVzO1xuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9O1xuXHR9XG59KGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gZXh0ZW5kICgpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWNvZGUgKHMpIHtcblx0XHRyZXR1cm4gcy5yZXBsYWNlKC8oJVswLTlBLVpdezJ9KSsvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSgpIHt9XG5cblx0XHRmdW5jdGlvbiBzZXQgKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0fSwgYXBpLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IG5ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBhdHRyaWJ1dGVzLmV4cGlyZXMgPyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlID9cblx0XHRcdFx0Y29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpIDpcblx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSlcblx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudClcblx0XHRcdFx0LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcblx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDb25zaWRlcnMgUkZDIDYyNjUgc2VjdGlvbiA1LjI6XG5cdFx0XHRcdC8vIC4uLlxuXHRcdFx0XHQvLyAzLiAgSWYgdGhlIHJlbWFpbmluZyB1bnBhcnNlZC1hdHRyaWJ1dGVzIGNvbnRhaW5zIGEgJXgzQiAoXCI7XCIpXG5cdFx0XHRcdC8vICAgICBjaGFyYWN0ZXI6XG5cdFx0XHRcdC8vIENvbnN1bWUgdGhlIGNoYXJhY3RlcnMgb2YgdGhlIHVucGFyc2VkLWF0dHJpYnV0ZXMgdXAgdG8sXG5cdFx0XHRcdC8vIG5vdCBpbmNsdWRpbmcsIHRoZSBmaXJzdCAleDNCIChcIjtcIikgY2hhcmFjdGVyLlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0uc3BsaXQoJzsnKVswXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0IChrZXksIGpzb24pIHtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGphciA9IHt9O1xuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG5cdFx0XHRcdGlmICghanNvbiAmJiBjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBkZWNvZGUocGFydHNbMF0pO1xuXHRcdFx0XHRcdGNvb2tpZSA9IChjb252ZXJ0ZXIucmVhZCB8fCBjb252ZXJ0ZXIpKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGRlY29kZShjb29raWUpO1xuXG5cdFx0XHRcdFx0aWYgKGpzb24pIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0amFyW25hbWVdID0gY29va2llO1xuXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ga2V5ID8gamFyW2tleV0gOiBqYXI7XG5cdFx0fVxuXG5cdFx0YXBpLnNldCA9IHNldDtcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGdldChrZXksIGZhbHNlIC8qIHJlYWQgYXMgcmF3ICovKTtcblx0XHR9O1xuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGdldChrZXksIHRydWUgLyogcmVhZCBhcyBqc29uICovKTtcblx0XHR9O1xuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRzZXQoa2V5LCAnJywgZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcblx0XHRcdFx0ZXhwaXJlczogLTFcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkud2l0aENvbnZlcnRlciA9IGluaXQ7XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9XG5cblx0cmV0dXJuIGluaXQoZnVuY3Rpb24gKCkge30pO1xufSkpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBQYXJ0c1N0YXRlID0ge1xyXG4gIHBhcnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbn07XHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgZGV0YWlscz86IHN0cmluZztcclxuICAgIHBhcnRzPzogUGFydHNTdGF0ZVtcInBhcnRzXCJdO1xyXG4gIH07XHJcbn07XHJcbmNvbnN0IHBhcnRzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxQYXJ0c1N0YXRlLCBBY3Rpb24+ID0gKFxyXG4gIHN0YXRlOiBQYXJ0c1N0YXRlLFxyXG4gIGFjdGlvblxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHN0YXRlLnBhcnRzLmxlbmd0aCA8IDdcclxuICAgICAgICA/IHsgcGFydHM6IFsuLi5zdGF0ZS5wYXJ0cywgYWN0aW9uLnBheWxvYWQucGFydF0gfVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIGNhc2UgXCJSRU1PVkVfUEFSVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5maWx0ZXIoKHBhcnQpID0+IHBhcnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJDSEFOR0VfQ1VTVE9NX0RFVEFJTFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5tYXAoKHBhcnQpID0+IHtcclxuICAgICAgICAgIGlmIChwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCkgcmV0dXJuIHBhcnQ7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGFydCwgZGV0YWlsczogYWN0aW9uLnBheWxvYWQuZGV0YWlscyB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9GUk9NX0NBQ0hFXCI6XHJcbiAgICAgIHJldHVybiB7IHBhcnRzOiBhY3Rpb24ucGF5bG9hZC5wYXJ0cyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhcnRzU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PFBhcnRzU3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcclxuICB1bmRlZmluZWRcclxuKTtcclxuXHJcbmNvbnN0IFBhcnRzRGlzcGF0Y2hDb250ZXh0OiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJ0c1Byb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkgPT4gSlNYLkVsZW1lbnQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihwYXJ0c1JlZHVjZXIsIHsgcGFydHM6IFtdIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcInBhcnRzXCIsIHN0YXRlKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXJ0c1N0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8UGFydHNEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUGFydHNEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1BhcnRzU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFydHNTdGF0ZSA9ICgpOiBQYXJ0c1N0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0OiBQYXJ0c1N0YXRlID0gUmVhY3QudXNlQ29udGV4dChQYXJ0c1N0YXRlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gUGFydHNQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFydHNEaXNwYXRjaCA9ICgpOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+ID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChQYXJ0c0Rpc3BhdGNoQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gUGFydHNQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=