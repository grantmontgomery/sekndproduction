webpackHotUpdate_N_E("pages/_app",{

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

  var children = _ref.children,
      initialPartsState = _ref.initialPartsState;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_3__["useReducer"](partsReducer, initialPartsState ? initialPartsState : {
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
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(PartsDispatchContext.Provider, {
    value: dispatch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, children));
};

_s(PartsProvider, "SQy1V5MVOIS9LdggJOhlDodWKp4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dC50c3giXSwibmFtZXMiOlsicGFydHNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGFydHMiLCJsZW5ndGgiLCJwYXlsb2FkIiwicGFydCIsImZpbHRlciIsImlkIiwibWFwIiwiZGV0YWlscyIsIlBhcnRzU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJ1bmRlZmluZWQiLCJQYXJ0c0Rpc3BhdGNoQ29udGV4dCIsIlBhcnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImluaXRpYWxQYXJ0c1N0YXRlIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwiZ2V0IiwidXNlUGFydHNTdGF0ZSIsImNvbnRleHQiLCJFcnJvciIsInVzZVBhcnRzRGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWNBLElBQU1BLFlBQStDLEdBQUcsU0FBbERBLFlBQWtELENBQ3REQyxLQURzRCxFQUV0REMsTUFGc0QsRUFHbkQ7QUFDSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRSxhQUFPRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixDQUFyQixHQUNIO0FBQUVELGFBQUsseUdBQU1ILEtBQUssQ0FBQ0csS0FBWixJQUFtQkYsTUFBTSxDQUFDSSxPQUFQLENBQWVDLElBQWxDO0FBQVAsT0FERyxHQUVILElBRko7O0FBR0YsU0FBSyxhQUFMO0FBQ0UsYUFBTztBQUNMSCxhQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBTixDQUFZSSxNQUFaLENBQW1CLFVBQUNELElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxDQUFDRSxFQUFMLEtBQVlQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRyxFQUFyQztBQUFBLFNBQW5CO0FBREYsT0FBUDs7QUFHRixTQUFLLHNCQUFMO0FBQ0UsYUFBTztBQUNMTCxhQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBTixDQUFZTSxHQUFaLENBQWdCLFVBQUNILElBQUQsRUFBVTtBQUMvQixjQUFJQSxJQUFJLENBQUNFLEVBQUwsS0FBWVAsTUFBTSxDQUFDSSxPQUFQLENBQWVHLEVBQS9CLEVBQW1DLE9BQU9GLElBQVA7QUFFbkMsaURBQVlBLElBQVo7QUFBa0JJLG1CQUFPLEVBQUVULE1BQU0sQ0FBQ0ksT0FBUCxDQUFlSztBQUExQztBQUNELFNBSk07QUFERixPQUFQOztBQU9GLFNBQUssbUJBQUw7QUFDRSxhQUFPO0FBQUVQLGFBQUssRUFBRUYsTUFBTSxDQUFDSSxPQUFQLENBQWVGO0FBQXhCLE9BQVA7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBcEJKO0FBc0JELENBMUJEOztBQTRCQSxJQUFNVyxpQkFBNEMsZ0JBQUdDLG1EQUFBLENBQ25EQyxTQURtRCxDQUFyRDtBQUlBLElBQU1DLG9CQUVMLGdCQUFHRixtREFBQSxDQUFvQkMsU0FBcEIsQ0FGSjtBQUlPLElBQU1FLGFBTUksR0FBRyxTQU5QQSxhQU1PLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUFBLE1BQXhCQyxpQkFBd0IsUUFBeEJBLGlCQUF3Qjs7QUFBQSwwQkFDN0JMLGdEQUFBLENBQ3hCYixZQUR3QixFQUV4QmtCLGlCQUFpQixHQUFHQSxpQkFBSCxHQUF1QjtBQUFFZCxTQUFLLEVBQUU7QUFBVCxHQUZoQixDQUQ2QjtBQUFBO0FBQUEsTUFDaERILEtBRGdEO0FBQUEsTUFDekNrQixRQUR5Qzs7QUFNdkROLGlEQUFBLENBQWdCLFlBQU07QUFDcEJPLG9EQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CcEIsS0FBcEI7QUFDQXFCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsZ0RBQU0sQ0FBQ00sR0FBUCxDQUFXLE9BQVgsQ0FBWCxDQUFaO0FBQ0QsR0FIRCxFQUdHLENBQUN6QixLQUFELENBSEg7QUFLQSxTQUNFLE1BQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFQSxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvQkFBRCxDQUFzQixRQUF0QjtBQUErQixTQUFLLEVBQUVrQixRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBREgsQ0FERixDQURGO0FBT0QsQ0F4Qk07O0dBQU1ELGE7O0tBQUFBLGE7QUEwQk4sSUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFrQjtBQUFBOztBQUM3QyxNQUFNQyxPQUFtQixHQUFHZixnREFBQSxDQUFpQkQsaUJBQWpCLENBQTVCOztBQUNBLE1BQUlnQixPQUFPLEtBQUtkLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWUsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FOTTs7SUFBTUQsYTs7QUFRTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQThCO0FBQUE7O0FBQzVELE1BQU1GLE9BQU8sR0FBR2YsZ0RBQUEsQ0FBaUJFLG9CQUFqQixDQUFoQjs7QUFDQSxNQUFJYSxPQUFPLEtBQUtkLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWUsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FOTTs7SUFBTUUsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xODQzODk2OGFjNTg2ZTZkZjg1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBQYXJ0c1N0YXRlID0ge1xyXG4gIHBhcnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbn07XHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgZGV0YWlscz86IHN0cmluZztcclxuICAgIHBhcnRzPzogUGFydHNTdGF0ZVtcInBhcnRzXCJdO1xyXG4gIH07XHJcbn07XHJcbmNvbnN0IHBhcnRzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxQYXJ0c1N0YXRlLCBBY3Rpb24+ID0gKFxyXG4gIHN0YXRlOiBQYXJ0c1N0YXRlLFxyXG4gIGFjdGlvblxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHN0YXRlLnBhcnRzLmxlbmd0aCA8IDdcclxuICAgICAgICA/IHsgcGFydHM6IFsuLi5zdGF0ZS5wYXJ0cywgYWN0aW9uLnBheWxvYWQucGFydF0gfVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIGNhc2UgXCJSRU1PVkVfUEFSVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5maWx0ZXIoKHBhcnQpID0+IHBhcnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJDSEFOR0VfQ1VTVE9NX0RFVEFJTFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5tYXAoKHBhcnQpID0+IHtcclxuICAgICAgICAgIGlmIChwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCkgcmV0dXJuIHBhcnQ7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGFydCwgZGV0YWlsczogYWN0aW9uLnBheWxvYWQuZGV0YWlscyB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9GUk9NX0NBQ0hFXCI6XHJcbiAgICAgIHJldHVybiB7IHBhcnRzOiBhY3Rpb24ucGF5bG9hZC5wYXJ0cyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhcnRzU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PFBhcnRzU3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcclxuICB1bmRlZmluZWRcclxuKTtcclxuXHJcbmNvbnN0IFBhcnRzRGlzcGF0Y2hDb250ZXh0OiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJ0c1Byb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGluaXRpYWxQYXJ0c1N0YXRlLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBpbml0aWFsUGFydHNTdGF0ZT86IFBhcnRzU3RhdGU7XHJcbn0pID0+IEpTWC5FbGVtZW50ID0gKHsgY2hpbGRyZW4sIGluaXRpYWxQYXJ0c1N0YXRlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBwYXJ0c1JlZHVjZXIsXHJcbiAgICBpbml0aWFsUGFydHNTdGF0ZSA/IGluaXRpYWxQYXJ0c1N0YXRlIDogeyBwYXJ0czogW10gfVxyXG4gICk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWUuc2V0KFwicGFydHNcIiwgc3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShDb29raWUuZ2V0KFwicGFydHNcIikpKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXJ0c1N0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8UGFydHNEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUGFydHNEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1BhcnRzU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFydHNTdGF0ZSA9ICgpOiBQYXJ0c1N0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0OiBQYXJ0c1N0YXRlID0gUmVhY3QudXNlQ29udGV4dChQYXJ0c1N0YXRlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gUGFydHNQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFydHNEaXNwYXRjaCA9ICgpOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+ID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChQYXJ0c0Rpc3BhdGNoQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gUGFydHNQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=