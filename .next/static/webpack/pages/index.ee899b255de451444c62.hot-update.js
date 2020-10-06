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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJzcXVhcmVzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNxdWFyZXMiLCJBcnJheSIsInBheWxvYWQiLCJudW1iZXJPZlNxdWFyZXMiLCJtYXAiLCJwYXJ0Iiwic3F1YXJlIiwiaSIsImluZGV4IiwiU3F1YXJlc0NvbnRleHQiLCJSZWFjdCIsInVuZGVmaW5lZCIsIlNxdWFyZXNEaXNwYXRjaCIsIlNxdWFyZXNQcm92aWRlciIsImNoaWxkcmVuIiwiQ29va2llIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwiZGlzcGF0Y2giLCJzZXQiLCJjb25zb2xlIiwibG9nIiwidXNlU3F1YXJlc1N0YXRlIiwiY29udGV4dCIsIkVycm9yIiwidXNlU3F1YXJlc0Rpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVBLElBQU1BLGNBQTRDLEdBQUcsU0FBL0NBLGNBQStDLENBQ25EQyxLQURtRCxFQUVuREMsTUFGbUQsRUFHaEQ7QUFDSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGFBQUw7QUFDRSxhQUFPO0FBQ0xDLGVBQU8sRUFBRSw2RkFBSSxJQUFJQyxLQUFKLENBQVVILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxlQUF6QixDQUFKLEVBQStDQyxHQUEvQyxDQUFtRDtBQUFBLGlCQUFPO0FBQ2pFQyxnQkFBSSxFQUFFO0FBRDJELFdBQVA7QUFBQSxTQUFuRDtBQURKLE9BQVA7O0FBS0YsU0FBSyxvQkFBTDtBQUNFLGFBQU87QUFDTEwsZUFBTyxFQUFFSCxLQUFLLENBQUNHLE9BQU4sQ0FBY0ksR0FBZCxDQUFrQixVQUFDRSxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUN4QyxpQkFBT0EsQ0FBQyxLQUFLVCxNQUFNLENBQUNJLE9BQVAsQ0FBZU0sS0FBckIsR0FDSEYsTUFERyxHQUVIO0FBQUVELGdCQUFJLEVBQUVQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRztBQUF2QixXQUZKO0FBR0QsU0FKUTtBQURKLE9BQVA7O0FBT0YsU0FBSyx5QkFBTDtBQUNFLGFBQU87QUFDTEwsZUFBTyxFQUFFSCxLQUFLLENBQUNHLE9BQU4sQ0FBY0ksR0FBZCxDQUFrQixVQUFDRSxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUN4QyxpQkFBT0EsQ0FBQyxLQUFLVCxNQUFNLENBQUNJLE9BQVAsQ0FBZU0sS0FBckIsR0FDSDtBQUFFSCxnQkFBSSxFQUFFUCxNQUFNLENBQUNJLE9BQVAsQ0FBZUc7QUFBdkIsV0FERyxHQUVIQyxNQUZKO0FBR0QsU0FKUTtBQURKLE9BQVA7O0FBT0Y7QUFDRSxhQUFPVCxLQUFQO0FBeEJKO0FBMEJELENBOUJEOztBQWdDQSxJQUFNWSxjQUFvQyxnQkFBR0MsbURBQUEsQ0FBb0JDLFNBQXBCLENBQTdDO0FBRUEsSUFBTUMsZUFFTCxnQkFBR0YsbURBQUEsQ0FBb0JDLFNBQXBCLENBRko7QUFJTyxJQUFNRSxlQUlJLEdBQUcsU0FKUEEsZUFJTyxPQUFpRDtBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7O0FBQUEsMEJBQ3pDSixnREFBQSxDQUN4QmQsY0FEd0IsRUFFeEJtQixnREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxJQUNJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBWCxDQURKLEdBRUk7QUFDRWhCLFdBQU8sRUFBRTtBQURYLEdBSm9CLENBRHlDO0FBQUE7QUFBQSxNQUM1REgsS0FENEQ7QUFBQSxNQUNyRHNCLFFBRHFEOztBQVVuRVQsaURBQUEsQ0FBZ0IsWUFBTTtBQUNwQkssb0RBQU0sQ0FBQ0ssR0FBUCxDQUFXLFNBQVgsRUFBc0J2QixLQUF0QjtBQUNBd0IsV0FBTyxDQUFDQyxHQUFSLENBQVlQLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLENBQVo7QUFDRCxHQUhELEVBR0csQ0FBQ25CLEtBQUQsQ0FISDtBQUtBLFNBQ0UsTUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRUEsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUVzQixRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFFBREgsQ0FERixDQURGO0FBT0QsQ0ExQk07O0dBQU1ELGU7O0tBQUFBLGU7QUE0Qk4sSUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFhO0FBQUE7O0FBQzFDLE1BQU1DLE9BQU8sR0FBR2QsZ0RBQUEsQ0FBaUJELGNBQWpCLENBQWhCOztBQUNBLE1BQUllLE9BQU8sS0FBS2IsU0FBaEIsRUFBMkI7QUFDekIsVUFBTSxJQUFJYyxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU9ELE9BQVA7QUFDRCxDQU5NOztJQUFNRCxlOztBQVFOLElBQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBOEI7QUFBQTs7QUFDOUQsTUFBTUYsT0FBTyxHQUFHZCxnREFBQSxDQUFpQkUsZUFBakIsQ0FBaEI7O0FBRUEsTUFBSVksT0FBTyxLQUFLYixTQUFoQixFQUEyQjtBQUN6QixVQUFNLElBQUljLEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNELENBUE07O0lBQU1FLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlODk5YjI1NWRlNDUxNDQ0YzYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIHNxdWFyZXM6IHsgcGFydDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbnVtYmVyT2ZTcXVhcmVzPzogbnVtYmVyO1xyXG4gICAgcGFydD86IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzcXVhcmVzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogU3RhdGUsXHJcbiAgYWN0aW9uOiBBY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9TUVVBUkVTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLm5ldyBBcnJheShhY3Rpb24ucGF5bG9hZC5udW1iZXJPZlNxdWFyZXMpXS5tYXAoKCkgPT4gKHtcclxuICAgICAgICAgIHBhcnQ6IG51bGwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkFERF9QQVJUX1RPX1NRVUFSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IHN0YXRlLnNxdWFyZXMubWFwKChzcXVhcmUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpICE9PSBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICA/IHNxdWFyZVxyXG4gICAgICAgICAgICA6IHsgcGFydDogYWN0aW9uLnBheWxvYWQucGFydCB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlJFTU9WRV9QQVJUX0ZST01fU1FVQVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogc3RhdGUuc3F1YXJlcy5tYXAoKHNxdWFyZSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgID8geyBwYXJ0OiBhY3Rpb24ucGF5bG9hZC5wYXJ0IH1cclxuICAgICAgICAgICAgOiBzcXVhcmU7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU3F1YXJlc0NvbnRleHQ6IFJlYWN0LkNvbnRleHQ8U3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgU3F1YXJlc0Rpc3BhdGNoOiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTcXVhcmVzUHJvdmlkZXI6ICh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgc3F1YXJlc1JlZHVjZXIsXHJcbiAgICBDb29raWUuZ2V0KFwicGFydHNcIilcclxuICAgICAgPyBKU09OLnBhcnNlKENvb2tpZS5nZXQoXCJwYXJ0c1wiKSlcclxuICAgICAgOiB7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbXSxcclxuICAgICAgICB9XHJcbiAgKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZS5zZXQoXCJzcXVhcmVzXCIsIHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKENvb2tpZS5nZXQoXCJwYXJ0c1wiKSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3F1YXJlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFNxdWFyZXNEaXNwYXRjaC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9TcXVhcmVzRGlzcGF0Y2guUHJvdmlkZXI+XHJcbiAgICA8L1NxdWFyZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc1N0YXRlID0gKCk6IFN0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTcXVhcmVzQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc0Rpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNEaXNwYXRjaCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFNxdWFyZXMgUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9