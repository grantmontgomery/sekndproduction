webpackHotUpdate_N_E("pages/index",{

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

  var children = _ref.children,
      initialSquaresState = _ref.initialSquaresState;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](squaresReducer, initialSquaresState ? initialSquaresState : {
    squares: []
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("squares", state);
  }, [state]);
  return __jsx(SquaresContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(SquaresDispatch.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, children));
};

_s(SquaresProvider, "soCohUMuW/BlO/b8wG3TC28L7ik=");

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

/***/ }),

/***/ "./state/SearchGridContext.tsx":
/*!*************************************!*\
  !*** ./state/SearchGridContext.tsx ***!
  \*************************************/
/*! exports provided: GridProvider, useGridState, useGridDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridProvider", function() { return GridProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGridState", function() { return useGridState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGridDispatch", function() { return useGridDispatch; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\state\\SearchGridContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



var gridReducer = function gridReducer(state, action) {
  switch (action.type) {
    case "ADD_GRID_TEMPLATE":
      return {
        hourStrings: action.payload.hourStrings,
        gridTemplate: action.payload.gridTemplate
      };

    default:
      return state;
  }
};

var GridStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createContext"](undefined);
var GridDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createContext"](undefined);
var GridProvider = function GridProvider(_ref) {
  _s();

  var children = _ref.children,
      initialGridState = _ref.initialGridState;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](gridReducer, initialGridState ? initialGridState : {
    gridTemplate: "",
    hourStrings: []
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("grid", state);
  }, [state]);
  return __jsx(GridStateContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(GridDispatchContext.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, children));
};

_s(GridProvider, "X+Nb16jO2RC5J0WQdSVy4Pt7aCI=");

_c = GridProvider;
var useGridState = function useGridState() {
  _s2();

  var context = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](GridStateContext);

  if (context === undefined) {
    throw new Error("Please use within GridProvider");
  }

  return context;
};

_s2(useGridState, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var useGridDispatch = function useGridDispatch() {
  _s3();

  var context = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](GridDispatchContext);

  if (context === undefined) {
    throw new Error("Please use within GridProvider");
  }

  return context;
};

_s3(useGridDispatch, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c;

$RefreshReg$(_c, "GridProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvU2VhcmNoR3JpZENvbnRleHQudHN4Il0sIm5hbWVzIjpbInNxdWFyZXNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3F1YXJlcyIsIkFycmF5IiwicGF5bG9hZCIsIm51bWJlck9mU3F1YXJlcyIsIm1hcCIsInBhcnQiLCJzcXVhcmUiLCJpIiwiaW5kZXgiLCJTcXVhcmVzQ29udGV4dCIsIlJlYWN0IiwidW5kZWZpbmVkIiwiU3F1YXJlc0Rpc3BhdGNoIiwiU3F1YXJlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbml0aWFsU3F1YXJlc1N0YXRlIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJ1c2VTcXVhcmVzU3RhdGUiLCJjb250ZXh0IiwiRXJyb3IiLCJ1c2VTcXVhcmVzRGlzcGF0Y2giLCJncmlkUmVkdWNlciIsImhvdXJTdHJpbmdzIiwiZ3JpZFRlbXBsYXRlIiwiR3JpZFN0YXRlQ29udGV4dCIsIkdyaWREaXNwYXRjaENvbnRleHQiLCJHcmlkUHJvdmlkZXIiLCJpbml0aWFsR3JpZFN0YXRlIiwidXNlR3JpZFN0YXRlIiwidXNlR3JpZERpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVBLElBQU1BLGNBQTRDLEdBQUcsU0FBL0NBLGNBQStDLENBQ25EQyxLQURtRCxFQUVuREMsTUFGbUQsRUFHaEQ7QUFDSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGFBQUw7QUFDRSxhQUFPO0FBQ0xDLGVBQU8sRUFBRSw2RkFBSSxJQUFJQyxLQUFKLENBQVVILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxlQUF6QixDQUFKLEVBQStDQyxHQUEvQyxDQUFtRDtBQUFBLGlCQUFPO0FBQ2pFQyxnQkFBSSxFQUFFO0FBRDJELFdBQVA7QUFBQSxT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QUFBLFk7QUE4Qk4sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBYTtBQUFBOztBQUN2QyxNQUFNVixPQUFPLEdBQUdWLGdEQUFBLENBQWlCZ0IsZ0JBQWpCLENBQWhCOztBQUVBLE1BQUlOLE9BQU8sS0FBS1QsU0FBaEIsRUFBMkI7QUFDekIsVUFBTSxJQUFJVSxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU9ELE9BQVA7QUFDRCxDQVBNOztJQUFNVSxZOztBQVNOLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBOEI7QUFBQTs7QUFDM0QsTUFBTVgsT0FBTyxHQUFHVixnREFBQSxDQUFpQmlCLG1CQUFqQixDQUFoQjs7QUFFQSxNQUFJUCxPQUFPLEtBQUtULFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVUsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTVcsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yODljNGJhNThhM2E0NDg2ZGYxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBzcXVhcmVzOiB7IHBhcnQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsIH1bXTtcclxufTtcclxudHlwZSBBY3Rpb24gPSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IHtcclxuICAgIG51bWJlck9mU3F1YXJlcz86IG51bWJlcjtcclxuICAgIHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgaW5kZXg/OiBudW1iZXI7XHJcbiAgICBpZD86IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3Qgc3F1YXJlc1JlZHVjZXI6IFJlYWN0LlJlZHVjZXI8U3RhdGUsIEFjdGlvbj4gPSAoXHJcbiAgc3RhdGU6IFN0YXRlLFxyXG4gIGFjdGlvbjogQWN0aW9uXHJcbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJBRERfU1FVQVJFU1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5uZXcgQXJyYXkoYWN0aW9uLnBheWxvYWQubnVtYmVyT2ZTcXVhcmVzKV0ubWFwKCgpID0+ICh7XHJcbiAgICAgICAgICBwYXJ0OiBudWxsLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJBRERfUEFSVF9UT19TUVVBUkVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBzdGF0ZS5zcXVhcmVzLm1hcCgoc3F1YXJlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaSAhPT0gYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgPyBzcXVhcmVcclxuICAgICAgICAgICAgOiB7IHBhcnQ6IGFjdGlvbi5wYXlsb2FkLnBhcnQgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJSRU1PVkVfUEFSVF9GUk9NX1NRVUFSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IHN0YXRlLnNxdWFyZXMubWFwKChzcXVhcmUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpICE9PSBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICA/IHsgcGFydDogYWN0aW9uLnBheWxvYWQucGFydCB9XHJcbiAgICAgICAgICAgIDogc3F1YXJlO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNxdWFyZXNDb250ZXh0OiBSZWFjdC5Db250ZXh0PFN0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IFNxdWFyZXNEaXNwYXRjaDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgU3F1YXJlc1Byb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGluaXRpYWxTcXVhcmVzU3RhdGUsXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGluaXRpYWxTcXVhcmVzU3RhdGU/OiBTdGF0ZTtcclxufSkgPT4gSlNYLkVsZW1lbnQgPSAoeyBjaGlsZHJlbiwgaW5pdGlhbFNxdWFyZXNTdGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgc3F1YXJlc1JlZHVjZXIsXHJcbiAgICBpbml0aWFsU3F1YXJlc1N0YXRlXHJcbiAgICAgID8gaW5pdGlhbFNxdWFyZXNTdGF0ZVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHNxdWFyZXM6IFtdLFxyXG4gICAgICAgIH1cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcInNxdWFyZXNcIiwgc3RhdGUpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNxdWFyZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgIDxTcXVhcmVzRGlzcGF0Y2guUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvU3F1YXJlc0Rpc3BhdGNoLlByb3ZpZGVyPlxyXG4gICAgPC9TcXVhcmVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNxdWFyZXNTdGF0ZSA9ICgpOiBTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoU3F1YXJlc0NvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFNxdWFyZXMgUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNxdWFyZXNEaXNwYXRjaCA9ICgpOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+ID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTcXVhcmVzRGlzcGF0Y2gpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBTcXVhcmVzIFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBob3VyU3RyaW5nczogc3RyaW5nW107XHJcbiAgZ3JpZFRlbXBsYXRlOiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZ3JpZFRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBob3VyU3RyaW5nczogc3RyaW5nW107XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdyaWRSZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFN0YXRlLCBBY3Rpb24+ID0gKHN0YXRlOiBTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9HUklEX1RFTVBMQVRFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaG91clN0cmluZ3M6IGFjdGlvbi5wYXlsb2FkLmhvdXJTdHJpbmdzLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZTogYWN0aW9uLnBheWxvYWQuZ3JpZFRlbXBsYXRlLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBHcmlkU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PFN0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IEdyaWREaXNwYXRjaENvbnRleHQ6IFJlYWN0LkNvbnRleHQ8XHJcbiAgUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiB8IHVuZGVmaW5lZFxyXG4+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxuICBpbml0aWFsR3JpZFN0YXRlLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBpbml0aWFsR3JpZFN0YXRlOiBTdGF0ZTtcclxufSkgPT4gSlNYLkVsZW1lbnQgPSAoeyBjaGlsZHJlbiwgaW5pdGlhbEdyaWRTdGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgZ3JpZFJlZHVjZXIsXHJcbiAgICBpbml0aWFsR3JpZFN0YXRlXHJcbiAgICAgID8gaW5pdGlhbEdyaWRTdGF0ZVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZTogXCJcIixcclxuICAgICAgICAgIGhvdXJTdHJpbmdzOiBbXSxcclxuICAgICAgICB9XHJcbiAgKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZS5zZXQoXCJncmlkXCIsIHN0YXRlKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgIDxHcmlkRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0dyaWREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L0dyaWRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHcmlkU3RhdGUgPSAoKTogU3RhdGUgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdyaWRTdGF0ZUNvbnRleHQpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBHcmlkUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdyaWREaXNwYXRjaCA9ICgpOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+ID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChHcmlkRGlzcGF0Y2hDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gR3JpZFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==