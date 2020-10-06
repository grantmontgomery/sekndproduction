webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvU2VhcmNoR3JpZENvbnRleHQudHN4Il0sIm5hbWVzIjpbInNxdWFyZXNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3F1YXJlcyIsIkFycmF5IiwicGF5bG9hZCIsIm51bWJlck9mU3F1YXJlcyIsIm1hcCIsInBhcnQiLCJzcXVhcmUiLCJpIiwiaW5kZXgiLCJTcXVhcmVzQ29udGV4dCIsIlJlYWN0IiwidW5kZWZpbmVkIiwiU3F1YXJlc0Rpc3BhdGNoIiwiU3F1YXJlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbml0aWFsU3F1YXJlc1N0YXRlIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJ1c2VTcXVhcmVzU3RhdGUiLCJjb250ZXh0IiwiRXJyb3IiLCJ1c2VTcXVhcmVzRGlzcGF0Y2giLCJncmlkUmVkdWNlciIsImhvdXJTdHJpbmdzIiwiZ3JpZFRlbXBsYXRlIiwiR3JpZFN0YXRlQ29udGV4dCIsIkdyaWREaXNwYXRjaENvbnRleHQiLCJHcmlkUHJvdmlkZXIiLCJpbml0aWFsR3JpZFN0YXRlIiwidXNlR3JpZFN0YXRlIiwidXNlR3JpZERpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVBLElBQU1BLGNBQTRDLEdBQUcsU0FBL0NBLGNBQStDLENBQ25EQyxLQURtRCxFQUVuREMsTUFGbUQsRUFHaEQ7QUFDSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGFBQUw7QUFDRSxhQUFPO0FBQ0xDLGVBQU8sRUFBRSw2RkFBSSxJQUFJQyxLQUFKLENBQVVILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxlQUF6QixDQUFKLEVBQStDQyxHQUEvQyxDQUFtRDtBQUFBLGlCQUFPO0FBQ2pFQyxnQkFBSSxFQUFFO0FBRDJELFdBQVA7QUFBQSxT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QUFBLFk7QUE4Qk4sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBYTtBQUFBOztBQUN2QyxNQUFNVixPQUFPLEdBQUdWLGdEQUFBLENBQWlCZ0IsZ0JBQWpCLENBQWhCOztBQUVBLE1BQUlOLE9BQU8sS0FBS1QsU0FBaEIsRUFBMkI7QUFDekIsVUFBTSxJQUFJVSxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU9ELE9BQVA7QUFDRCxDQVBNOztJQUFNVSxZOztBQVNOLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBOEI7QUFBQTs7QUFDM0QsTUFBTVgsT0FBTyxHQUFHVixnREFBQSxDQUFpQmlCLG1CQUFqQixDQUFoQjs7QUFFQSxNQUFJUCxPQUFPLEtBQUtULFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVUsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTVcsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI4OWM0YmE1OGEzYTQ0ODZkZjE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIHNxdWFyZXM6IHsgcGFydDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbnVtYmVyT2ZTcXVhcmVzPzogbnVtYmVyO1xyXG4gICAgcGFydD86IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzcXVhcmVzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogU3RhdGUsXHJcbiAgYWN0aW9uOiBBY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9TUVVBUkVTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLm5ldyBBcnJheShhY3Rpb24ucGF5bG9hZC5udW1iZXJPZlNxdWFyZXMpXS5tYXAoKCkgPT4gKHtcclxuICAgICAgICAgIHBhcnQ6IG51bGwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkFERF9QQVJUX1RPX1NRVUFSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IHN0YXRlLnNxdWFyZXMubWFwKChzcXVhcmUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpICE9PSBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICA/IHNxdWFyZVxyXG4gICAgICAgICAgICA6IHsgcGFydDogYWN0aW9uLnBheWxvYWQucGFydCB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlJFTU9WRV9QQVJUX0ZST01fU1FVQVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogc3RhdGUuc3F1YXJlcy5tYXAoKHNxdWFyZSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgID8geyBwYXJ0OiBhY3Rpb24ucGF5bG9hZC5wYXJ0IH1cclxuICAgICAgICAgICAgOiBzcXVhcmU7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU3F1YXJlc0NvbnRleHQ6IFJlYWN0LkNvbnRleHQ8U3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgU3F1YXJlc0Rpc3BhdGNoOiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTcXVhcmVzUHJvdmlkZXI6ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgaW5pdGlhbFNxdWFyZXNTdGF0ZSxcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgaW5pdGlhbFNxdWFyZXNTdGF0ZT86IFN0YXRlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsU3F1YXJlc1N0YXRlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBzcXVhcmVzUmVkdWNlcixcclxuICAgIGluaXRpYWxTcXVhcmVzU3RhdGVcclxuICAgICAgPyBpbml0aWFsU3F1YXJlc1N0YXRlXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgc3F1YXJlczogW10sXHJcbiAgICAgICAgfVxyXG4gICk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWUuc2V0KFwic3F1YXJlc1wiLCBzdGF0ZSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3F1YXJlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFNxdWFyZXNEaXNwYXRjaC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9TcXVhcmVzRGlzcGF0Y2guUHJvdmlkZXI+XHJcbiAgICA8L1NxdWFyZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc1N0YXRlID0gKCk6IFN0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTcXVhcmVzQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc0Rpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNEaXNwYXRjaCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFNxdWFyZXMgUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuICBncmlkVGVtcGxhdGU6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBncmlkVGVtcGxhdGU6IHN0cmluZztcclxuICAgIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ3JpZFJlZHVjZXI6IFJlYWN0LlJlZHVjZXI8U3RhdGUsIEFjdGlvbj4gPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX0dSSURfVEVNUExBVEVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBob3VyU3RyaW5nczogYWN0aW9uLnBheWxvYWQuaG91clN0cmluZ3MsXHJcbiAgICAgICAgZ3JpZFRlbXBsYXRlOiBhY3Rpb24ucGF5bG9hZC5ncmlkVGVtcGxhdGUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEdyaWRTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8U3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgR3JpZERpc3BhdGNoQ29udGV4dDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZFByb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGluaXRpYWxHcmlkU3RhdGUsXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGluaXRpYWxHcmlkU3RhdGU6IFN0YXRlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsR3JpZFN0YXRlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBncmlkUmVkdWNlcixcclxuICAgIGluaXRpYWxHcmlkU3RhdGVcclxuICAgICAgPyBpbml0aWFsR3JpZFN0YXRlXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlOiBcIlwiLFxyXG4gICAgICAgICAgaG91clN0cmluZ3M6IFtdLFxyXG4gICAgICAgIH1cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcImdyaWRcIiwgc3RhdGUpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPEdyaWREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvR3JpZERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvR3JpZFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdyaWRTdGF0ZSA9ICgpOiBTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoR3JpZFN0YXRlQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIEdyaWRQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR3JpZERpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdyaWREaXNwYXRjaENvbnRleHQpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBHcmlkUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9