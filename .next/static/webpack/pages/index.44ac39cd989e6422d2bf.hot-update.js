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
      initialValue = _ref.initialValue;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](squaresReducer, initialValue ? initialValue : {
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

_s(SquaresProvider, "Qi3PFzhMrtugUndPz4kIZb5xt9g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJzcXVhcmVzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNxdWFyZXMiLCJBcnJheSIsInBheWxvYWQiLCJudW1iZXJPZlNxdWFyZXMiLCJtYXAiLCJwYXJ0Iiwic3F1YXJlIiwiaSIsImluZGV4IiwiU3F1YXJlc0NvbnRleHQiLCJSZWFjdCIsInVuZGVmaW5lZCIsIlNxdWFyZXNEaXNwYXRjaCIsIlNxdWFyZXNQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFZhbHVlIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJ1c2VTcXVhcmVzU3RhdGUiLCJjb250ZXh0IiwiRXJyb3IiLCJ1c2VTcXVhcmVzRGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBZUEsSUFBTUEsY0FBNEMsR0FBRyxTQUEvQ0EsY0FBK0MsQ0FDbkRDLEtBRG1ELEVBRW5EQyxNQUZtRCxFQUdoRDtBQUNILFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssYUFBTDtBQUNFLGFBQU87QUFDTEMsZUFBTyxFQUFFLDZGQUFJLElBQUlDLEtBQUosQ0FBVUgsTUFBTSxDQUFDSSxPQUFQLENBQWVDLGVBQXpCLENBQUosRUFBK0NDLEdBQS9DLENBQW1EO0FBQUEsaUJBQU87QUFDakVDLGdCQUFJLEVBQUU7QUFEMkQsV0FBUDtBQUFBLFNBQW5EO0FBREosT0FBUDs7QUFLRixTQUFLLG9CQUFMO0FBQ0UsYUFBTztBQUNMTCxlQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FBTixDQUFjSSxHQUFkLENBQWtCLFVBQUNFLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3hDLGlCQUFPQSxDQUFDLEtBQUtULE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTSxLQUFyQixHQUNIRixNQURHLEdBRUg7QUFBRUQsZ0JBQUksRUFBRVAsTUFBTSxDQUFDSSxPQUFQLENBQWVHO0FBQXZCLFdBRko7QUFHRCxTQUpRO0FBREosT0FBUDs7QUFPRixTQUFLLHlCQUFMO0FBQ0UsYUFBTztBQUNMTCxlQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FBTixDQUFjSSxHQUFkLENBQWtCLFVBQUNFLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3hDLGlCQUFPQSxDQUFDLEtBQUtULE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTSxLQUFyQixHQUNIO0FBQUVILGdCQUFJLEVBQUVQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRztBQUF2QixXQURHLEdBRUhDLE1BRko7QUFHRCxTQUpRO0FBREosT0FBUDs7QUFPRjtBQUNFLGFBQU9ULEtBQVA7QUF4Qko7QUEwQkQsQ0E5QkQ7O0FBZ0NBLElBQU1ZLGNBQW9DLGdCQUFHQyxtREFBQSxDQUFvQkMsU0FBcEIsQ0FBN0M7QUFFQSxJQUFNQyxlQUVMLGdCQUFHRixtREFBQSxDQUFvQkMsU0FBcEIsQ0FGSjtBQUlPLElBQU1FLGVBTUksR0FBRyxTQU5QQSxlQU1PLE9BQWdDO0FBQUE7O0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsMEJBQ3hCTCxnREFBQSxDQUN4QmQsY0FEd0IsRUFFeEJtQixZQUFZLEdBQ1JBLFlBRFEsR0FFUjtBQUNFZixXQUFPLEVBQUU7QUFEWCxHQUpvQixDQUR3QjtBQUFBO0FBQUEsTUFDM0NILEtBRDJDO0FBQUEsTUFDcENtQixRQURvQzs7QUFVbEROLGlEQUFBLENBQWdCLFlBQU07QUFDcEJPLG9EQUFNLENBQUNDLEdBQVAsQ0FBVyxTQUFYLEVBQXNCckIsS0FBdEI7QUFDRCxHQUZELEVBRUcsQ0FBQ0EsS0FBRCxDQUZIO0FBSUEsU0FDRSxNQUFDLGNBQUQsQ0FBZ0IsUUFBaEI7QUFBeUIsU0FBSyxFQUFFQSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFELENBQWlCLFFBQWpCO0FBQTBCLFNBQUssRUFBRW1CLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsUUFESCxDQURGLENBREY7QUFPRCxDQTNCTTs7R0FBTUQsZTs7S0FBQUEsZTtBQTZCTixJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQWE7QUFBQTs7QUFDMUMsTUFBTUMsT0FBTyxHQUFHVixnREFBQSxDQUFpQkQsY0FBakIsQ0FBaEI7O0FBQ0EsTUFBSVcsT0FBTyxLQUFLVCxTQUFoQixFQUEyQjtBQUN6QixVQUFNLElBQUlVLEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNELENBTk07O0lBQU1ELGU7O0FBUU4sSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUE4QjtBQUFBOztBQUM5RCxNQUFNRixPQUFPLEdBQUdWLGdEQUFBLENBQWlCRSxlQUFqQixDQUFoQjs7QUFFQSxNQUFJUSxPQUFPLEtBQUtULFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVUsS0FBSixDQUFVLG9DQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTUUsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDRhYzM5Y2Q5ODllNjQyMmQyYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgc3F1YXJlczogeyBwYXJ0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCB9W107XHJcbn07XHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBudW1iZXJPZlNxdWFyZXM/OiBudW1iZXI7XHJcbiAgICBwYXJ0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGluZGV4PzogbnVtYmVyO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHNxdWFyZXNSZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFN0YXRlLCBBY3Rpb24+ID0gKFxyXG4gIHN0YXRlOiBTdGF0ZSxcclxuICBhY3Rpb246IEFjdGlvblxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1NRVUFSRVNcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4ubmV3IEFycmF5KGFjdGlvbi5wYXlsb2FkLm51bWJlck9mU3F1YXJlcyldLm1hcCgoKSA9PiAoe1xyXG4gICAgICAgICAgcGFydDogbnVsbCxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQUREX1BBUlRfVE9fU1FVQVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogc3RhdGUuc3F1YXJlcy5tYXAoKHNxdWFyZSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgID8gc3F1YXJlXHJcbiAgICAgICAgICAgIDogeyBwYXJ0OiBhY3Rpb24ucGF5bG9hZC5wYXJ0IH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiUkVNT1ZFX1BBUlRfRlJPTV9TUVVBUkVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBzdGF0ZS5zcXVhcmVzLm1hcCgoc3F1YXJlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaSAhPT0gYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgPyB7IHBhcnQ6IGFjdGlvbi5wYXlsb2FkLnBhcnQgfVxyXG4gICAgICAgICAgICA6IHNxdWFyZTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTcXVhcmVzQ29udGV4dDogUmVhY3QuQ29udGV4dDxTdGF0ZT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBTcXVhcmVzRGlzcGF0Y2g6IFJlYWN0LkNvbnRleHQ8XHJcbiAgUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiB8IHVuZGVmaW5lZFxyXG4+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNxdWFyZXNQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxuICBpbml0aWFsVmFsdWUsXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGluaXRpYWxWYWx1ZT86IHsgc3F1YXJlczogeyBwYXJ0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCB9W10gfTtcclxufSkgPT4gSlNYLkVsZW1lbnQgPSAoeyBjaGlsZHJlbiwgaW5pdGlhbFZhbHVlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBzcXVhcmVzUmVkdWNlcixcclxuICAgIGluaXRpYWxWYWx1ZVxyXG4gICAgICA/IGluaXRpYWxWYWx1ZVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHNxdWFyZXM6IFtdLFxyXG4gICAgICAgIH1cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcInNxdWFyZXNcIiwgc3RhdGUpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNxdWFyZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgIDxTcXVhcmVzRGlzcGF0Y2guUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvU3F1YXJlc0Rpc3BhdGNoLlByb3ZpZGVyPlxyXG4gICAgPC9TcXVhcmVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNxdWFyZXNTdGF0ZSA9ICgpOiBTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoU3F1YXJlc0NvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFNxdWFyZXMgUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNxdWFyZXNEaXNwYXRjaCA9ICgpOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+ID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTcXVhcmVzRGlzcGF0Y2gpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBTcXVhcmVzIFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==