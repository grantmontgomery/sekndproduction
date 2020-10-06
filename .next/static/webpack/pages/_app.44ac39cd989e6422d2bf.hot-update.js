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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJzcXVhcmVzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNxdWFyZXMiLCJBcnJheSIsInBheWxvYWQiLCJudW1iZXJPZlNxdWFyZXMiLCJtYXAiLCJwYXJ0Iiwic3F1YXJlIiwiaSIsImluZGV4IiwiU3F1YXJlc0NvbnRleHQiLCJSZWFjdCIsInVuZGVmaW5lZCIsIlNxdWFyZXNEaXNwYXRjaCIsIlNxdWFyZXNQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFZhbHVlIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJ1c2VTcXVhcmVzU3RhdGUiLCJjb250ZXh0IiwiRXJyb3IiLCJ1c2VTcXVhcmVzRGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBZUEsSUFBTUEsY0FBNEMsR0FBRyxTQUEvQ0EsY0FBK0MsQ0FDbkRDLEtBRG1ELEVBRW5EQyxNQUZtRCxFQUdoRDtBQUNILFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssYUFBTDtBQUNFLGFBQU87QUFDTEMsZUFBTyxFQUFFLDZGQUFJLElBQUlDLEtBQUosQ0FBVUgsTUFBTSxDQUFDSSxPQUFQLENBQWVDLGVBQXpCLENBQUosRUFBK0NDLEdBQS9DLENBQW1EO0FBQUEsaUJBQU87QUFDakVDLGdCQUFJLEVBQUU7QUFEMkQsV0FBUDtBQUFBLFNBQW5EO0FBREosT0FBUDs7QUFLRixTQUFLLG9CQUFMO0FBQ0UsYUFBTztBQUNMTCxlQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FBTixDQUFjSSxHQUFkLENBQWtCLFVBQUNFLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3hDLGlCQUFPQSxDQUFDLEtBQUtULE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTSxLQUFyQixHQUNIRixNQURHLEdBRUg7QUFBRUQsZ0JBQUksRUFBRVAsTUFBTSxDQUFDSSxPQUFQLENBQWVHO0FBQXZCLFdBRko7QUFHRCxTQUpRO0FBREosT0FBUDs7QUFPRixTQUFLLHlCQUFMO0FBQ0UsYUFBTztBQUNMTCxlQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FBTixDQUFjSSxHQUFkLENBQWtCLFVBQUNFLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3hDLGlCQUFPQSxDQUFDLEtBQUtULE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTSxLQUFyQixHQUNIO0FBQUVILGdCQUFJLEVBQUVQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRztBQUF2QixXQURHLEdBRUhDLE1BRko7QUFHRCxTQUpRO0FBREosT0FBUDs7QUFPRjtBQUNFLGFBQU9ULEtBQVA7QUF4Qko7QUEwQkQsQ0E5QkQ7O0FBZ0NBLElBQU1ZLGNBQW9DLGdCQUFHQyxtREFBQSxDQUFvQkMsU0FBcEIsQ0FBN0M7QUFFQSxJQUFNQyxlQUVMLGdCQUFHRixtREFBQSxDQUFvQkMsU0FBcEIsQ0FGSjtBQUlPLElBQU1FLGVBTUksR0FBRyxTQU5QQSxlQU1PLE9BQWdDO0FBQUE7O0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsMEJBQ3hCTCxnREFBQSxDQUN4QmQsY0FEd0IsRUFFeEJtQixZQUFZLEdBQ1JBLFlBRFEsR0FFUjtBQUNFZixXQUFPLEVBQUU7QUFEWCxHQUpvQixDQUR3QjtBQUFBO0FBQUEsTUFDM0NILEtBRDJDO0FBQUEsTUFDcENtQixRQURvQzs7QUFVbEROLGlEQUFBLENBQWdCLFlBQU07QUFDcEJPLG9EQUFNLENBQUNDLEdBQVAsQ0FBVyxTQUFYLEVBQXNCckIsS0FBdEI7QUFDRCxHQUZELEVBRUcsQ0FBQ0EsS0FBRCxDQUZIO0FBSUEsU0FDRSxNQUFDLGNBQUQsQ0FBZ0IsUUFBaEI7QUFBeUIsU0FBSyxFQUFFQSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFELENBQWlCLFFBQWpCO0FBQTBCLFNBQUssRUFBRW1CLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsUUFESCxDQURGLENBREY7QUFPRCxDQTNCTTs7R0FBTUQsZTs7S0FBQUEsZTtBQTZCTixJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQWE7QUFBQTs7QUFDMUMsTUFBTUMsT0FBTyxHQUFHVixnREFBQSxDQUFpQkQsY0FBakIsQ0FBaEI7O0FBQ0EsTUFBSVcsT0FBTyxLQUFLVCxTQUFoQixFQUEyQjtBQUN6QixVQUFNLElBQUlVLEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNELENBTk07O0lBQU1ELGU7O0FBUU4sSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUE4QjtBQUFBOztBQUM5RCxNQUFNRixPQUFPLEdBQUdWLGdEQUFBLENBQWlCRSxlQUFqQixDQUFoQjs7QUFFQSxNQUFJUSxPQUFPLEtBQUtULFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVUsS0FBSixDQUFVLG9DQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTUUsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NGFjMzljZDk4OWU2NDIyZDJiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBzcXVhcmVzOiB7IHBhcnQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsIH1bXTtcclxufTtcclxudHlwZSBBY3Rpb24gPSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IHtcclxuICAgIG51bWJlck9mU3F1YXJlcz86IG51bWJlcjtcclxuICAgIHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgaW5kZXg/OiBudW1iZXI7XHJcbiAgICBpZD86IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3Qgc3F1YXJlc1JlZHVjZXI6IFJlYWN0LlJlZHVjZXI8U3RhdGUsIEFjdGlvbj4gPSAoXHJcbiAgc3RhdGU6IFN0YXRlLFxyXG4gIGFjdGlvbjogQWN0aW9uXHJcbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJBRERfU1FVQVJFU1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IFsuLi5uZXcgQXJyYXkoYWN0aW9uLnBheWxvYWQubnVtYmVyT2ZTcXVhcmVzKV0ubWFwKCgpID0+ICh7XHJcbiAgICAgICAgICBwYXJ0OiBudWxsLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJBRERfUEFSVF9UT19TUVVBUkVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBzdGF0ZS5zcXVhcmVzLm1hcCgoc3F1YXJlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaSAhPT0gYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgPyBzcXVhcmVcclxuICAgICAgICAgICAgOiB7IHBhcnQ6IGFjdGlvbi5wYXlsb2FkLnBhcnQgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJSRU1PVkVfUEFSVF9GUk9NX1NRVUFSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IHN0YXRlLnNxdWFyZXMubWFwKChzcXVhcmUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpICE9PSBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICA/IHsgcGFydDogYWN0aW9uLnBheWxvYWQucGFydCB9XHJcbiAgICAgICAgICAgIDogc3F1YXJlO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNxdWFyZXNDb250ZXh0OiBSZWFjdC5Db250ZXh0PFN0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IFNxdWFyZXNEaXNwYXRjaDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgU3F1YXJlc1Byb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGluaXRpYWxWYWx1ZSxcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgaW5pdGlhbFZhbHVlPzogeyBzcXVhcmVzOiB7IHBhcnQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsIH1bXSB9O1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsVmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgIHNxdWFyZXNSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFZhbHVlXHJcbiAgICAgID8gaW5pdGlhbFZhbHVlXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgc3F1YXJlczogW10sXHJcbiAgICAgICAgfVxyXG4gICk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWUuc2V0KFwic3F1YXJlc1wiLCBzdGF0ZSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3F1YXJlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFNxdWFyZXNEaXNwYXRjaC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9TcXVhcmVzRGlzcGF0Y2guUHJvdmlkZXI+XHJcbiAgICA8L1NxdWFyZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc1N0YXRlID0gKCk6IFN0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTcXVhcmVzQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc0Rpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNEaXNwYXRjaCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFNxdWFyZXMgUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9