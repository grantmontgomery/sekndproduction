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

  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](squaresReducer, js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("parts") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("parts")) : {
    squares: []
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("squares", state);
    console.log(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("parts"));
  }, [state]);
  return __jsx(SquaresContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(SquaresDispatch.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, children));
};

_s(SquaresProvider, "gE8uCATCaGB3Ai4Nh2oDb9p+k1w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJzcXVhcmVzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNxdWFyZXMiLCJBcnJheSIsInBheWxvYWQiLCJudW1iZXJPZlNxdWFyZXMiLCJtYXAiLCJwYXJ0Iiwic3F1YXJlIiwiaSIsImluZGV4IiwiU3F1YXJlc0NvbnRleHQiLCJSZWFjdCIsInVuZGVmaW5lZCIsIlNxdWFyZXNEaXNwYXRjaCIsIlNxdWFyZXNQcm92aWRlciIsImNoaWxkcmVuIiwiQ29va2llIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwiZGlzcGF0Y2giLCJzZXQiLCJjb25zb2xlIiwibG9nIiwidXNlU3F1YXJlc1N0YXRlIiwiY29udGV4dCIsIkVycm9yIiwidXNlU3F1YXJlc0Rpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVBLElBQU1BLGNBQTRDLEdBQUcsU0FBL0NBLGNBQStDLENBQ25EQyxLQURtRCxFQUVuREMsTUFGbUQsRUFHaEQ7QUFDSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGFBQUw7QUFDRSxhQUFPO0FBQ0xDLGVBQU8sRUFBRSw2RkFBSSxJQUFJQyxLQUFKLENBQVVILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxlQUF6QixDQUFKLEVBQStDQyxHQUEvQyxDQUFtRDtBQUFBLGlCQUFPO0FBQ2pFQyxnQkFBSSxFQUFFO0FBRDJELFdBQVA7QUFBQSxTQUFuRDtBQURKLE9BQVA7O0FBS0YsU0FBSyxvQkFBTDtBQUNFLGFBQU87QUFDTEwsZUFBTyxFQUFFSCxLQUFLLENBQUNHLE9BQU4sQ0FBY0ksR0FBZCxDQUFrQixVQUFDRSxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUN4QyxpQkFBT0EsQ0FBQyxLQUFLVCxNQUFNLENBQUNJLE9BQVAsQ0FBZU0sS0FBckIsR0FDSEYsTUFERyxHQUVIO0FBQUVELGdCQUFJLEVBQUVQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRztBQUF2QixXQUZKO0FBR0QsU0FKUTtBQURKLE9BQVA7O0FBT0YsU0FBSyx5QkFBTDtBQUNFLGFBQU87QUFDTEwsZUFBTyxFQUFFSCxLQUFLLENBQUNHLE9BQU4sQ0FBY0ksR0FBZCxDQUFrQixVQUFDRSxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUN4QyxpQkFBT0EsQ0FBQyxLQUFLVCxNQUFNLENBQUNJLE9BQVAsQ0FBZU0sS0FBckIsR0FDSDtBQUFFSCxnQkFBSSxFQUFFUCxNQUFNLENBQUNJLE9BQVAsQ0FBZUc7QUFBdkIsV0FERyxHQUVIQyxNQUZKO0FBR0QsU0FKUTtBQURKLE9BQVA7O0FBT0Y7QUFDRSxhQUFPVCxLQUFQO0FBeEJKO0FBMEJELENBOUJEOztBQWdDQSxJQUFNWSxjQUFvQyxnQkFBR0MsbURBQUEsQ0FBb0JDLFNBQXBCLENBQTdDO0FBRUEsSUFBTUMsZUFFTCxnQkFBR0YsbURBQUEsQ0FBb0JDLFNBQXBCLENBRko7QUFJTyxJQUFNRSxlQUlJLEdBQUcsU0FKUEEsZUFJTyxPQUFpRDtBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7O0FBQUEsMEJBQ3pDSixnREFBQSxDQUN4QmQsY0FEd0IsRUFFeEJtQixnREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxJQUNJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBWCxDQURKLEdBRUk7QUFDRWhCLFdBQU8sRUFBRTtBQURYLEdBSm9CLENBRHlDO0FBQUE7QUFBQSxNQUM1REgsS0FENEQ7QUFBQSxNQUNyRHNCLFFBRHFEOztBQVVuRVQsaURBQUEsQ0FBZ0IsWUFBTTtBQUNwQkssb0RBQU0sQ0FBQ0ssR0FBUCxDQUFXLFNBQVgsRUFBc0J2QixLQUF0QjtBQUNBd0IsV0FBTyxDQUFDQyxHQUFSLENBQVlQLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLENBQVo7QUFDRCxHQUhELEVBR0csQ0FBQ25CLEtBQUQsQ0FISDtBQUtBLFNBQ0UsTUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRUEsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUVzQixRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFFBREgsQ0FERixDQURGO0FBT0QsQ0ExQk07O0dBQU1ELGU7O0tBQUFBLGU7QUE0Qk4sSUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFhO0FBQUE7O0FBQzFDLE1BQU1DLE9BQU8sR0FBR2QsZ0RBQUEsQ0FBaUJELGNBQWpCLENBQWhCOztBQUNBLE1BQUllLE9BQU8sS0FBS2IsU0FBaEIsRUFBMkI7QUFDekIsVUFBTSxJQUFJYyxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU9ELE9BQVA7QUFDRCxDQU5NOztJQUFNRCxlOztBQVFOLElBQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBOEI7QUFBQTs7QUFDOUQsTUFBTUYsT0FBTyxHQUFHZCxnREFBQSxDQUFpQkUsZUFBakIsQ0FBaEI7O0FBRUEsTUFBSVksT0FBTyxLQUFLYixTQUFoQixFQUEyQjtBQUN6QixVQUFNLElBQUljLEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNELENBUE07O0lBQU1FLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWU4OTliMjU1ZGU0NTE0NDRjNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgc3F1YXJlczogeyBwYXJ0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCB9W107XHJcbn07XHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBudW1iZXJPZlNxdWFyZXM/OiBudW1iZXI7XHJcbiAgICBwYXJ0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGluZGV4PzogbnVtYmVyO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHNxdWFyZXNSZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFN0YXRlLCBBY3Rpb24+ID0gKFxyXG4gIHN0YXRlOiBTdGF0ZSxcclxuICBhY3Rpb246IEFjdGlvblxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1NRVUFSRVNcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4ubmV3IEFycmF5KGFjdGlvbi5wYXlsb2FkLm51bWJlck9mU3F1YXJlcyldLm1hcCgoKSA9PiAoe1xyXG4gICAgICAgICAgcGFydDogbnVsbCxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQUREX1BBUlRfVE9fU1FVQVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogc3RhdGUuc3F1YXJlcy5tYXAoKHNxdWFyZSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgID8gc3F1YXJlXHJcbiAgICAgICAgICAgIDogeyBwYXJ0OiBhY3Rpb24ucGF5bG9hZC5wYXJ0IH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiUkVNT1ZFX1BBUlRfRlJPTV9TUVVBUkVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBzdGF0ZS5zcXVhcmVzLm1hcCgoc3F1YXJlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaSAhPT0gYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgPyB7IHBhcnQ6IGFjdGlvbi5wYXlsb2FkLnBhcnQgfVxyXG4gICAgICAgICAgICA6IHNxdWFyZTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTcXVhcmVzQ29udGV4dDogUmVhY3QuQ29udGV4dDxTdGF0ZT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBTcXVhcmVzRGlzcGF0Y2g6IFJlYWN0LkNvbnRleHQ8XHJcbiAgUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiB8IHVuZGVmaW5lZFxyXG4+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNxdWFyZXNQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn0pID0+IEpTWC5FbGVtZW50ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBzcXVhcmVzUmVkdWNlcixcclxuICAgIENvb2tpZS5nZXQoXCJwYXJ0c1wiKVxyXG4gICAgICA/IEpTT04ucGFyc2UoQ29va2llLmdldChcInBhcnRzXCIpKVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIHNxdWFyZXM6IFtdLFxyXG4gICAgICAgIH1cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcInNxdWFyZXNcIiwgc3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2coQ29va2llLmdldChcInBhcnRzXCIpKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTcXVhcmVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8U3F1YXJlc0Rpc3BhdGNoLlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1NxdWFyZXNEaXNwYXRjaC5Qcm92aWRlcj5cclxuICAgIDwvU3F1YXJlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTcXVhcmVzU3RhdGUgPSAoKTogU3RhdGUgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBTcXVhcmVzIFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTcXVhcmVzRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoU3F1YXJlc0Rpc3BhdGNoKTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=