webpackHotUpdate_N_E("pages/index",{

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

  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](gridReducer, {
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
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(GridDispatchContext.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, children));
};

_s(GridProvider, "4NF94DhX7m+R1mYCSFRwiB92PNE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvU2VhcmNoR3JpZENvbnRleHQudHN4Il0sIm5hbWVzIjpbImdyaWRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaG91clN0cmluZ3MiLCJwYXlsb2FkIiwiZ3JpZFRlbXBsYXRlIiwiR3JpZFN0YXRlQ29udGV4dCIsIlJlYWN0IiwidW5kZWZpbmVkIiwiR3JpZERpc3BhdGNoQ29udGV4dCIsIkdyaWRQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJ1c2VHcmlkU3RhdGUiLCJjb250ZXh0IiwiRXJyb3IiLCJ1c2VHcmlkRGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVBLElBQU1BLFdBQXlDLEdBQUcsU0FBNUNBLFdBQTRDLENBQUNDLEtBQUQsRUFBZUMsTUFBZixFQUEwQjtBQUMxRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLG1CQUFMO0FBQ0UsYUFBTztBQUNMQyxtQkFBVyxFQUFFRixNQUFNLENBQUNHLE9BQVAsQ0FBZUQsV0FEdkI7QUFFTEUsb0JBQVksRUFBRUosTUFBTSxDQUFDRyxPQUFQLENBQWVDO0FBRnhCLE9BQVA7O0FBS0Y7QUFDRSxhQUFPTCxLQUFQO0FBUko7QUFVRCxDQVhEOztBQWFBLElBQU1NLGdCQUFzQyxnQkFBR0MsbURBQUEsQ0FBb0JDLFNBQXBCLENBQS9DO0FBRUEsSUFBTUMsbUJBRUwsZ0JBQUdGLG1EQUFBLENBQW9CQyxTQUFwQixDQUZKO0FBSU8sSUFBTUUsWUFJSSxHQUFHLFNBSlBBLFlBSU8sT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDOztBQUFBLDBCQUN6Q0osZ0RBQUEsQ0FBaUJSLFdBQWpCLEVBQThCO0FBQ3RETSxnQkFBWSxFQUFFLEVBRHdDO0FBRXRERixlQUFXLEVBQUU7QUFGeUMsR0FBOUIsQ0FEeUM7QUFBQTtBQUFBLE1BQzVESCxLQUQ0RDtBQUFBLE1BQ3JEWSxRQURxRDs7QUFNbkVMLGlEQUFBLENBQWdCLFlBQU07QUFDcEJNLG9EQUFNLENBQUNDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CZCxLQUFuQjtBQUNELEdBRkQsRUFFRyxDQUFDQSxLQUFELENBRkg7QUFJQSxTQUNFLE1BQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUVZLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFESCxDQURGLENBREY7QUFPRCxDQXJCTTs7R0FBTUQsWTs7S0FBQUEsWTtBQXVCTixJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFhO0FBQUE7O0FBQ3ZDLE1BQU1DLE9BQU8sR0FBR1QsZ0RBQUEsQ0FBaUJELGdCQUFqQixDQUFoQjs7QUFFQSxNQUFJVSxPQUFPLEtBQUtSLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVMsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTUQsWTs7QUFTTixJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQThCO0FBQUE7O0FBQzNELE1BQU1GLE9BQU8sR0FBR1QsZ0RBQUEsQ0FBaUJFLG1CQUFqQixDQUFoQjs7QUFFQSxNQUFJTyxPQUFPLEtBQUtSLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVMsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTUUsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43Zjg3MjE4NzM0ZjBjY2NkNWFkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBob3VyU3RyaW5nczogc3RyaW5nW107XHJcbiAgZ3JpZFRlbXBsYXRlOiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZ3JpZFRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBob3VyU3RyaW5nczogc3RyaW5nW107XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdyaWRSZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFN0YXRlLCBBY3Rpb24+ID0gKHN0YXRlOiBTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9HUklEX1RFTVBMQVRFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaG91clN0cmluZ3M6IGFjdGlvbi5wYXlsb2FkLmhvdXJTdHJpbmdzLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZTogYWN0aW9uLnBheWxvYWQuZ3JpZFRlbXBsYXRlLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBHcmlkU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PFN0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IEdyaWREaXNwYXRjaENvbnRleHQ6IFJlYWN0LkNvbnRleHQ8XHJcbiAgUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiB8IHVuZGVmaW5lZFxyXG4+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn0pID0+IEpTWC5FbGVtZW50ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoZ3JpZFJlZHVjZXIsIHtcclxuICAgIGdyaWRUZW1wbGF0ZTogXCJcIixcclxuICAgIGhvdXJTdHJpbmdzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZS5zZXQoXCJncmlkXCIsIHN0YXRlKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgIDxHcmlkRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0dyaWREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L0dyaWRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHcmlkU3RhdGUgPSAoKTogU3RhdGUgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdyaWRTdGF0ZUNvbnRleHQpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBHcmlkUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdyaWREaXNwYXRjaCA9ICgpOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+ID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChHcmlkRGlzcGF0Y2hDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gR3JpZFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==