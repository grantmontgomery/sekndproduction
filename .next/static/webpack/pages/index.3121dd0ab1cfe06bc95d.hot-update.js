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
    console.log(JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("parts")));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dC50c3giXSwibmFtZXMiOlsicGFydHNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGFydHMiLCJsZW5ndGgiLCJwYXlsb2FkIiwicGFydCIsImZpbHRlciIsImlkIiwibWFwIiwiZGV0YWlscyIsIlBhcnRzU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJ1bmRlZmluZWQiLCJQYXJ0c0Rpc3BhdGNoQ29udGV4dCIsIlBhcnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiQ29va2llIiwic2V0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImdldCIsInVzZVBhcnRzU3RhdGUiLCJjb250ZXh0IiwiRXJyb3IiLCJ1c2VQYXJ0c0Rpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFjQSxJQUFNQSxZQUErQyxHQUFHLFNBQWxEQSxZQUFrRCxDQUN0REMsS0FEc0QsRUFFdERDLE1BRnNELEVBR25EO0FBQ0gsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsYUFBT0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLE1BQVosR0FBcUIsQ0FBckIsR0FDSDtBQUFFRCxhQUFLLHlHQUFNSCxLQUFLLENBQUNHLEtBQVosSUFBbUJGLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxJQUFsQztBQUFQLE9BREcsR0FFSCxJQUZKOztBQUdGLFNBQUssYUFBTDtBQUNFLGFBQU87QUFDTEgsYUFBSyxFQUFFSCxLQUFLLENBQUNHLEtBQU4sQ0FBWUksTUFBWixDQUFtQixVQUFDRCxJQUFEO0FBQUEsaUJBQVVBLElBQUksQ0FBQ0UsRUFBTCxLQUFZUCxNQUFNLENBQUNJLE9BQVAsQ0FBZUcsRUFBckM7QUFBQSxTQUFuQjtBQURGLE9BQVA7O0FBR0YsU0FBSyxzQkFBTDtBQUNFLGFBQU87QUFDTEwsYUFBSyxFQUFFSCxLQUFLLENBQUNHLEtBQU4sQ0FBWU0sR0FBWixDQUFnQixVQUFDSCxJQUFELEVBQVU7QUFDL0IsY0FBSUEsSUFBSSxDQUFDRSxFQUFMLEtBQVlQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRyxFQUEvQixFQUFtQyxPQUFPRixJQUFQO0FBRW5DLGlEQUFZQSxJQUFaO0FBQWtCSSxtQkFBTyxFQUFFVCxNQUFNLENBQUNJLE9BQVAsQ0FBZUs7QUFBMUM7QUFDRCxTQUpNO0FBREYsT0FBUDs7QUFPRixTQUFLLG1CQUFMO0FBQ0UsYUFBTztBQUFFUCxhQUFLLEVBQUVGLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRjtBQUF4QixPQUFQOztBQUNGO0FBQ0UsYUFBT0gsS0FBUDtBQXBCSjtBQXNCRCxDQTFCRDs7QUE0QkEsSUFBTVcsaUJBQTRDLGdCQUFHQyxtREFBQSxDQUNuREMsU0FEbUQsQ0FBckQ7QUFJQSxJQUFNQyxvQkFFTCxnQkFBR0YsbURBQUEsQ0FBb0JDLFNBQXBCLENBRko7QUFJTyxJQUFNRSxhQUlJLEdBQUcsU0FKUEEsYUFJTyxPQUFpRDtBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7O0FBQUEsMEJBQ3pDSixnREFBQSxDQUFpQmIsWUFBakIsRUFBK0I7QUFBRUksU0FBSyxFQUFFO0FBQVQsR0FBL0IsQ0FEeUM7QUFBQTtBQUFBLE1BQzVESCxLQUQ0RDtBQUFBLE1BQ3JEaUIsUUFEcUQ7O0FBR25FTCxpREFBQSxDQUFnQixZQUFNO0FBQ3BCTSxvREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxFQUFvQm5CLEtBQXBCO0FBQ0FvQixXQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxLQUFMLENBQVdMLGdEQUFNLENBQUNNLEdBQVAsQ0FBVyxPQUFYLENBQVgsQ0FBWjtBQUNELEdBSEQsRUFHRyxDQUFDeEIsS0FBRCxDQUhIO0FBS0EsU0FDRSxNQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLFNBQUssRUFBRUEsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0JBQUQsQ0FBc0IsUUFBdEI7QUFBK0IsU0FBSyxFQUFFaUIsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQURILENBREYsQ0FERjtBQU9ELENBbkJNOztHQUFNRCxhOztLQUFBQSxhO0FBcUJOLElBQU1VLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBa0I7QUFBQTs7QUFDN0MsTUFBTUMsT0FBbUIsR0FBR2QsZ0RBQUEsQ0FBaUJELGlCQUFqQixDQUE1Qjs7QUFDQSxNQUFJZSxPQUFPLEtBQUtiLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWMsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FOTTs7SUFBTUQsYTs7QUFRTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQThCO0FBQUE7O0FBQzVELE1BQU1GLE9BQU8sR0FBR2QsZ0RBQUEsQ0FBaUJFLG9CQUFqQixDQUFoQjs7QUFDQSxNQUFJWSxPQUFPLEtBQUtiLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWMsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FOTTs7SUFBTUUsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzEyMWRkMGFiMWNmZTA2YmM5NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgUGFydHNTdGF0ZSA9IHtcclxuICBwYXJ0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBwYXJ0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGRldGFpbHM/OiBzdHJpbmc7XHJcbiAgICBwYXJ0cz86IFBhcnRzU3RhdGVbXCJwYXJ0c1wiXTtcclxuICB9O1xyXG59O1xyXG5jb25zdCBwYXJ0c1JlZHVjZXI6IFJlYWN0LlJlZHVjZXI8UGFydHNTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogUGFydHNTdGF0ZSxcclxuICBhY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9QQVJUXCI6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5wYXJ0cy5sZW5ndGggPCA3XHJcbiAgICAgICAgPyB7IHBhcnRzOiBbLi4uc3RhdGUucGFydHMsIGFjdGlvbi5wYXlsb2FkLnBhcnRdIH1cclxuICAgICAgICA6IG51bGw7XHJcbiAgICBjYXNlIFwiUkVNT1ZFX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0czogc3RhdGUucGFydHMuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQ0hBTkdFX0NVU1RPTV9ERVRBSUxcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0czogc3RhdGUucGFydHMubWFwKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocGFydC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpIHJldHVybiBwYXJ0O1xyXG5cclxuICAgICAgICAgIHJldHVybiB7IC4uLnBhcnQsIGRldGFpbHM6IGFjdGlvbi5wYXlsb2FkLmRldGFpbHMgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJVUERBVEVfRlJPTV9DQUNIRVwiOlxyXG4gICAgICByZXR1cm4geyBwYXJ0czogYWN0aW9uLnBheWxvYWQucGFydHMgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYXJ0c1N0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxQYXJ0c1N0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXHJcbiAgdW5kZWZpbmVkXHJcbik7XHJcblxyXG5jb25zdCBQYXJ0c0Rpc3BhdGNoQ29udGV4dDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgUGFydHNQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn0pID0+IEpTWC5FbGVtZW50ID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocGFydHNSZWR1Y2VyLCB7IHBhcnRzOiBbXSB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZS5zZXQoXCJwYXJ0c1wiLCBzdGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKENvb2tpZS5nZXQoXCJwYXJ0c1wiKSkpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcnRzU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgIDxQYXJ0c0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9QYXJ0c0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvUGFydHNTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYXJ0c1N0YXRlID0gKCk6IFBhcnRzU3RhdGUgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQ6IFBhcnRzU3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFBhcnRzU3RhdGVDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBQYXJ0c1Byb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYXJ0c0Rpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFBhcnRzRGlzcGF0Y2hDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBQYXJ0c1Byb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==