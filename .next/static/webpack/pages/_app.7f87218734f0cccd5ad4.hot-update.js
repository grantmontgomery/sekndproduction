webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvU2VhcmNoR3JpZENvbnRleHQudHN4Il0sIm5hbWVzIjpbImdyaWRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaG91clN0cmluZ3MiLCJwYXlsb2FkIiwiZ3JpZFRlbXBsYXRlIiwiR3JpZFN0YXRlQ29udGV4dCIsIlJlYWN0IiwidW5kZWZpbmVkIiwiR3JpZERpc3BhdGNoQ29udGV4dCIsIkdyaWRQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJ1c2VHcmlkU3RhdGUiLCJjb250ZXh0IiwiRXJyb3IiLCJ1c2VHcmlkRGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVBLElBQU1BLFdBQXlDLEdBQUcsU0FBNUNBLFdBQTRDLENBQUNDLEtBQUQsRUFBZUMsTUFBZixFQUEwQjtBQUMxRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLG1CQUFMO0FBQ0UsYUFBTztBQUNMQyxtQkFBVyxFQUFFRixNQUFNLENBQUNHLE9BQVAsQ0FBZUQsV0FEdkI7QUFFTEUsb0JBQVksRUFBRUosTUFBTSxDQUFDRyxPQUFQLENBQWVDO0FBRnhCLE9BQVA7O0FBS0Y7QUFDRSxhQUFPTCxLQUFQO0FBUko7QUFVRCxDQVhEOztBQWFBLElBQU1NLGdCQUFzQyxnQkFBR0MsbURBQUEsQ0FBb0JDLFNBQXBCLENBQS9DO0FBRUEsSUFBTUMsbUJBRUwsZ0JBQUdGLG1EQUFBLENBQW9CQyxTQUFwQixDQUZKO0FBSU8sSUFBTUUsWUFJSSxHQUFHLFNBSlBBLFlBSU8sT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDOztBQUFBLDBCQUN6Q0osZ0RBQUEsQ0FBaUJSLFdBQWpCLEVBQThCO0FBQ3RETSxnQkFBWSxFQUFFLEVBRHdDO0FBRXRERixlQUFXLEVBQUU7QUFGeUMsR0FBOUIsQ0FEeUM7QUFBQTtBQUFBLE1BQzVESCxLQUQ0RDtBQUFBLE1BQ3JEWSxRQURxRDs7QUFNbkVMLGlEQUFBLENBQWdCLFlBQU07QUFDcEJNLG9EQUFNLENBQUNDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CZCxLQUFuQjtBQUNELEdBRkQsRUFFRyxDQUFDQSxLQUFELENBRkg7QUFJQSxTQUNFLE1BQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUVZLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsUUFESCxDQURGLENBREY7QUFPRCxDQXJCTTs7R0FBTUQsWTs7S0FBQUEsWTtBQXVCTixJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFhO0FBQUE7O0FBQ3ZDLE1BQU1DLE9BQU8sR0FBR1QsZ0RBQUEsQ0FBaUJELGdCQUFqQixDQUFoQjs7QUFFQSxNQUFJVSxPQUFPLEtBQUtSLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVMsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTUQsWTs7QUFTTixJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQThCO0FBQUE7O0FBQzNELE1BQU1GLE9BQU8sR0FBR1QsZ0RBQUEsQ0FBaUJFLG1CQUFqQixDQUFoQjs7QUFFQSxNQUFJTyxPQUFPLEtBQUtSLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSVMsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTs7SUFBTUUsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdmODcyMTg3MzRmMGNjY2Q1YWQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuICBncmlkVGVtcGxhdGU6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBncmlkVGVtcGxhdGU6IHN0cmluZztcclxuICAgIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ3JpZFJlZHVjZXI6IFJlYWN0LlJlZHVjZXI8U3RhdGUsIEFjdGlvbj4gPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX0dSSURfVEVNUExBVEVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBob3VyU3RyaW5nczogYWN0aW9uLnBheWxvYWQuaG91clN0cmluZ3MsXHJcbiAgICAgICAgZ3JpZFRlbXBsYXRlOiBhY3Rpb24ucGF5bG9hZC5ncmlkVGVtcGxhdGUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEdyaWRTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8U3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgR3JpZERpc3BhdGNoQ29udGV4dDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZFByb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkgPT4gSlNYLkVsZW1lbnQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihncmlkUmVkdWNlciwge1xyXG4gICAgZ3JpZFRlbXBsYXRlOiBcIlwiLFxyXG4gICAgaG91clN0cmluZ3M6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcImdyaWRcIiwgc3RhdGUpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPEdyaWREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvR3JpZERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvR3JpZFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdyaWRTdGF0ZSA9ICgpOiBTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoR3JpZFN0YXRlQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIEdyaWRQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR3JpZERpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdyaWREaXNwYXRjaENvbnRleHQpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBHcmlkUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9