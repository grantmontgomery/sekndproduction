webpackHotUpdate_N_E("pages/index",{

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
    console.log(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("parts"));
  }, [state]);
  return __jsx(PartsStateContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(PartsDispatchContext.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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

/***/ }),

/***/ "./state/GridSquaresContext.tsx":
/*!**************************************!*\
  !*** ./state/GridSquaresContext.tsx ***!
  \**************************************/
/*! exports provided: SquaresProvider, useSquaresState, useSquaresDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquaresProvider", function() { return SquaresProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSquaresState", function() { return useSquaresState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSquaresDispatch", function() { return useSquaresDispatch; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\state\\GridSquaresContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];



var squaresReducer = function squaresReducer(state, action) {
  switch (action.type) {
    case "ADD_SQUARES":
      return {
        squares: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(action.payload.numberOfSquares)).map(function () {
          return {
            part: null
          };
        })
      };

    case "ADD_PART_TO_SQUARE":
      return {
        squares: state.squares.map(function (square, i) {
          return i !== action.payload.index ? square : {
            part: action.payload.part
          };
        })
      };

    case "REMOVE_PART_FROM_SQUARE":
      return {
        squares: state.squares.map(function (square, i) {
          return i !== action.payload.index ? {
            part: action.payload.part
          } : square;
        })
      };

    default:
      return state;
  }
};

var SquaresContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createContext"](undefined);
var SquaresDispatch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createContext"](undefined);
var SquaresProvider = function SquaresProvider(_ref) {
  _s();

  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](squaresReducer, {
    squares: []
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("squares", state);
    console.log(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("squares"));
  }, [state]);
  return __jsx(SquaresContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(SquaresDispatch.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, children));
};

_s(SquaresProvider, "tkXSYkFIADBOdzG9gVoZUfLddm8=");

_c = SquaresProvider;
var useSquaresState = function useSquaresState() {
  _s2();

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](SquaresContext);

  if (context === undefined) {
    throw new Error("Please use within Squares Provider");
  }

  return context;
};

_s2(useSquaresState, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var useSquaresDispatch = function useSquaresDispatch() {
  _s3();

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](SquaresDispatch);

  if (context === undefined) {
    throw new Error("Please use within Squares Provider");
  }

  return context;
};

_s3(useSquaresDispatch, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c;

$RefreshReg$(_c, "SquaresProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0YXRlL0dyaWRTcXVhcmVzQ29udGV4dC50c3giXSwibmFtZXMiOlsicGFydHNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGFydHMiLCJsZW5ndGgiLCJwYXlsb2FkIiwicGFydCIsImZpbHRlciIsImlkIiwibWFwIiwiZGV0YWlscyIsIlBhcnRzU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJ1bmRlZmluZWQiLCJQYXJ0c0Rpc3BhdGNoQ29udGV4dCIsIlBhcnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiQ29va2llIiwic2V0IiwiY29uc29sZSIsImxvZyIsImdldCIsInVzZVBhcnRzU3RhdGUiLCJjb250ZXh0IiwiRXJyb3IiLCJ1c2VQYXJ0c0Rpc3BhdGNoIiwic3F1YXJlc1JlZHVjZXIiLCJzcXVhcmVzIiwiQXJyYXkiLCJudW1iZXJPZlNxdWFyZXMiLCJzcXVhcmUiLCJpIiwiaW5kZXgiLCJTcXVhcmVzQ29udGV4dCIsIlNxdWFyZXNEaXNwYXRjaCIsIlNxdWFyZXNQcm92aWRlciIsInVzZVNxdWFyZXNTdGF0ZSIsInVzZVNxdWFyZXNEaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBY0EsSUFBTUEsWUFBK0MsR0FBRyxTQUFsREEsWUFBa0QsQ0FDdERDLEtBRHNELEVBRXREQyxNQUZzRCxFQUduRDtBQUNILFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssVUFBTDtBQUNFLGFBQU9GLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxNQUFaLEdBQXFCLENBQXJCLEdBQ0g7QUFBRUQsYUFBSyx5R0FBTUgsS0FBSyxDQUFDRyxLQUFaLElBQW1CRixNQUFNLENBQUNJLE9BQVAsQ0FBZUMsSUFBbEM7QUFBUCxPQURHLEdBRUgsSUFG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QWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVksS0FBSixDQUFVLG9DQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTWMsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjhjZGYyMTgyMWU2ZTIwODNlZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgUGFydHNTdGF0ZSA9IHtcclxuICBwYXJ0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBwYXJ0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGRldGFpbHM/OiBzdHJpbmc7XHJcbiAgICBwYXJ0cz86IFBhcnRzU3RhdGVbXCJwYXJ0c1wiXTtcclxuICB9O1xyXG59O1xyXG5jb25zdCBwYXJ0c1JlZHVjZXI6IFJlYWN0LlJlZHVjZXI8UGFydHNTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogUGFydHNTdGF0ZSxcclxuICBhY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9QQVJUXCI6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5wYXJ0cy5sZW5ndGggPCA3XHJcbiAgICAgICAgPyB7IHBhcnRzOiBbLi4uc3RhdGUucGFydHMsIGFjdGlvbi5wYXlsb2FkLnBhcnRdIH1cclxuICAgICAgICA6IG51bGw7XHJcbiAgICBjYXNlIFwiUkVNT1ZFX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0czogc3RhdGUucGFydHMuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQ0hBTkdFX0NVU1RPTV9ERVRBSUxcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0czogc3RhdGUucGFydHMubWFwKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocGFydC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpIHJldHVybiBwYXJ0O1xyXG5cclxuICAgICAgICAgIHJldHVybiB7IC4uLnBhcnQsIGRldGFpbHM6IGFjdGlvbi5wYXlsb2FkLmRldGFpbHMgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJVUERBVEVfRlJPTV9DQUNIRVwiOlxyXG4gICAgICByZXR1cm4geyBwYXJ0czogYWN0aW9uLnBheWxvYWQucGFydHMgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYXJ0c1N0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxQYXJ0c1N0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXHJcbiAgdW5kZWZpbmVkXHJcbik7XHJcblxyXG5jb25zdCBQYXJ0c0Rpc3BhdGNoQ29udGV4dDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgUGFydHNQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn0pID0+IEpTWC5FbGVtZW50ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocGFydHNSZWR1Y2VyLCB7IHBhcnRzOiBbXSB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZS5zZXQoXCJwYXJ0c1wiLCBzdGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhDb29raWUuZ2V0KFwicGFydHNcIikpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcnRzU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgIDxQYXJ0c0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9QYXJ0c0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvUGFydHNTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYXJ0c1N0YXRlID0gKCk6IFBhcnRzU3RhdGUgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQ6IFBhcnRzU3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFBhcnRzU3RhdGVDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBQYXJ0c1Byb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYXJ0c0Rpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFBhcnRzRGlzcGF0Y2hDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBQYXJ0c1Byb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBzcXVhcmVzOiB7IHBhcnQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsIH1bXTtcclxufTtcclxudHlwZSBBY3Rpb24gPSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IHtcclxuICAgIG51bWJlck9mU3F1YXJlcz86IG51bWJlcjtcclxuICAgIHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgaW5kZXg/OiBudW1iZXI7XHJcbiAgICBpZD86IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3Qgc3F1YXJlc1JlZHVjZXI6IFJlYWN0LlJlZHVjZXI8U3RhdGUsIEFjdGlvbj4gPSAoXHJcbiAgc3RhdGU6IFN0YXRlLFxyXG4gIGFjdGlvbjogQWN0aW9uXHJcbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJBRERfU1FVQVJFU1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5uZXcgQXJyYXkoYWN0aW9uLnBheWxvYWQubnVtYmVyT2ZTcXVhcmVzKV0ubWFwKCgpID0+ICh7XHJcbiAgICAgICAgICBwYXJ0OiBudWxsLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJBRERfUEFSVF9UT19TUVVBUkVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBzdGF0ZS5zcXVhcmVzLm1hcCgoc3F1YXJlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaSAhPT0gYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgPyBzcXVhcmVcclxuICAgICAgICAgICAgOiB7IHBhcnQ6IGFjdGlvbi5wYXlsb2FkLnBhcnQgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJSRU1PVkVfUEFSVF9GUk9NX1NRVUFSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IHN0YXRlLnNxdWFyZXMubWFwKChzcXVhcmUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpICE9PSBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICA/IHsgcGFydDogYWN0aW9uLnBheWxvYWQucGFydCB9XHJcbiAgICAgICAgICAgIDogc3F1YXJlO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNxdWFyZXNDb250ZXh0OiBSZWFjdC5Db250ZXh0PFN0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IFNxdWFyZXNEaXNwYXRjaDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgU3F1YXJlc1Byb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkgPT4gSlNYLkVsZW1lbnQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihzcXVhcmVzUmVkdWNlciwge1xyXG4gICAgc3F1YXJlczogW10sXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWUuc2V0KFwic3F1YXJlc1wiLCBzdGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhDb29raWUuZ2V0KFwic3F1YXJlc1wiKSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3F1YXJlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFNxdWFyZXNEaXNwYXRjaC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9TcXVhcmVzRGlzcGF0Y2guUHJvdmlkZXI+XHJcbiAgICA8L1NxdWFyZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc1N0YXRlID0gKCk6IFN0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTcXVhcmVzQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc0Rpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNEaXNwYXRjaCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFNxdWFyZXMgUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9