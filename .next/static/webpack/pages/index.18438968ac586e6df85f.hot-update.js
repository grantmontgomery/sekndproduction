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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dC50c3giXSwibmFtZXMiOlsicGFydHNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGFydHMiLCJsZW5ndGgiLCJwYXlsb2FkIiwicGFydCIsImZpbHRlciIsImlkIiwibWFwIiwiZGV0YWlscyIsIlBhcnRzU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJ1bmRlZmluZWQiLCJQYXJ0c0Rpc3BhdGNoQ29udGV4dCIsIlBhcnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImluaXRpYWxQYXJ0c1N0YXRlIiwiZGlzcGF0Y2giLCJDb29raWUiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwiZ2V0IiwidXNlUGFydHNTdGF0ZSIsImNvbnRleHQiLCJFcnJvciIsInVzZVBhcnRzRGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWNBLElBQU1BLFlBQStDLEdBQUcsU0FBbERBLFlBQWtELENBQ3REQyxLQURzRCxFQUV0REMsTUFGc0QsRUFHbkQ7QUFDSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRSxhQUFPRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixDQUFyQixHQUNIO0FBQUVELGFBQUsseUdBQU1ILEtBQUssQ0FBQ0csS0FBWixJQUFtQkYsTUFBTSxDQUFDSSxPQUFQLENBQWVDLElBQWxDO0FBQVAsT0FERyxHQUVILElBRko7O0FBR0YsU0FBSyxhQUFMO0FBQ0UsYUFBTztBQUNMSCxhQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBTixDQUFZSSxNQUFaLENBQW1CLFVBQUNELElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxDQUFDRSxFQUFMLEtBQVlQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRyxFQUFyQztBQUFBLFNBQW5CO0FBREYsT0FBUDs7QUFHRixTQUFLLHNCQUFMO0FBQ0UsYUFBTztBQUNMTCxhQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBTixDQUFZTSxHQUFaLENBQWdCLFVBQUNILElBQUQsRUFBVTtBQUMvQixjQUFJQSxJQUFJLENBQUNFLEVBQUwsS0FBWVAsTUFBTSxDQUFDSSxPQUFQLENBQWVHLEVBQS9CLEVBQW1DLE9BQU9GLElBQVA7QUFFbkMsaURBQVlBLElBQVo7QUFBa0JJLG1CQUFPLEVBQUVULE1BQU0sQ0FBQ0ksT0FBUCxDQUFlSztBQUExQztBQUNELFNBSk07QUFERixPQUFQOztBQU9GLFNBQUssbUJBQUw7QUFDRSxhQUFPO0FBQUVQLGFBQUssRUFBRUYsTUFBTSxDQUFDSSxPQUFQLENBQWVGO0FBQXhCLE9BQVA7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBcEJKO0FBc0JELENBMUJEOztBQTRCQSxJQUFNVyxpQkFBNEMsZ0JBQUdDLG1EQUFBLENBQ25EQyxTQURtRCxDQUFyRDtBQUlBLElBQU1DLG9CQUVMLGdCQUFHRixtREFBQSxDQUFvQkMsU0FBcEIsQ0FGSjtBQUlPLElBQU1FLGFBTUksR0FBRyxTQU5QQSxhQU1PLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUFBLE1BQXhCQyxpQkFBd0IsUUFBeEJBLGlCQUF3Qjs7QUFBQSwwQkFDN0JMLGdEQUFBLENBQ3hCYixZQUR3QixFQUV4QmtCLGlCQUFpQixHQUFHQSxpQkFBSCxHQUF1QjtBQUFFZCxTQUFLLEVBQUU7QUFBVCxHQUZoQixDQUQ2QjtBQUFBO0FBQUEsTUFDaERILEtBRGdEO0FBQUEsTUFDekNrQixRQUR5Qzs7QUFNdkROLGlEQUFBLENBQWdCLFlBQU07QUFDcEJPLG9EQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CcEIsS0FBcEI7QUFDQXFCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsZ0RBQU0sQ0FBQ00sR0FBUCxDQUFXLE9BQVgsQ0FBWCxDQUFaO0FBQ0QsR0FIRCxFQUdHLENBQUN6QixLQUFELENBSEg7QUFLQSxTQUNFLE1BQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFQSxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvQkFBRCxDQUFzQixRQUF0QjtBQUErQixTQUFLLEVBQUVrQixRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBREgsQ0FERixDQURGO0FBT0QsQ0F4Qk07O0dBQU1ELGE7O0tBQUFBLGE7QUEwQk4sSUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFrQjtBQUFBOztBQUM3QyxNQUFNQyxPQUFtQixHQUFHZixnREFBQSxDQUFpQkQsaUJBQWpCLENBQTVCOztBQUNBLE1BQUlnQixPQUFPLEtBQUtkLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWUsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FOTTs7SUFBTUQsYTs7QUFRTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQThCO0FBQUE7O0FBQzVELE1BQU1GLE9BQU8sR0FBR2YsZ0RBQUEsQ0FBaUJFLG9CQUFqQixDQUFoQjs7QUFDQSxNQUFJYSxPQUFPLEtBQUtkLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWUsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FOTTs7SUFBTUUsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTg0Mzg5NjhhYzU4NmU2ZGY4NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgUGFydHNTdGF0ZSA9IHtcclxuICBwYXJ0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBwYXJ0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGRldGFpbHM/OiBzdHJpbmc7XHJcbiAgICBwYXJ0cz86IFBhcnRzU3RhdGVbXCJwYXJ0c1wiXTtcclxuICB9O1xyXG59O1xyXG5jb25zdCBwYXJ0c1JlZHVjZXI6IFJlYWN0LlJlZHVjZXI8UGFydHNTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogUGFydHNTdGF0ZSxcclxuICBhY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9QQVJUXCI6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5wYXJ0cy5sZW5ndGggPCA3XHJcbiAgICAgICAgPyB7IHBhcnRzOiBbLi4uc3RhdGUucGFydHMsIGFjdGlvbi5wYXlsb2FkLnBhcnRdIH1cclxuICAgICAgICA6IG51bGw7XHJcbiAgICBjYXNlIFwiUkVNT1ZFX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0czogc3RhdGUucGFydHMuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQ0hBTkdFX0NVU1RPTV9ERVRBSUxcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0czogc3RhdGUucGFydHMubWFwKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocGFydC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpIHJldHVybiBwYXJ0O1xyXG5cclxuICAgICAgICAgIHJldHVybiB7IC4uLnBhcnQsIGRldGFpbHM6IGFjdGlvbi5wYXlsb2FkLmRldGFpbHMgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJVUERBVEVfRlJPTV9DQUNIRVwiOlxyXG4gICAgICByZXR1cm4geyBwYXJ0czogYWN0aW9uLnBheWxvYWQucGFydHMgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYXJ0c1N0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxQYXJ0c1N0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXHJcbiAgdW5kZWZpbmVkXHJcbik7XHJcblxyXG5jb25zdCBQYXJ0c0Rpc3BhdGNoQ29udGV4dDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgUGFydHNQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxuICBpbml0aWFsUGFydHNTdGF0ZSxcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgaW5pdGlhbFBhcnRzU3RhdGU/OiBQYXJ0c1N0YXRlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsUGFydHNTdGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgcGFydHNSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFBhcnRzU3RhdGUgPyBpbml0aWFsUGFydHNTdGF0ZSA6IHsgcGFydHM6IFtdIH1cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcInBhcnRzXCIsIHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoQ29va2llLmdldChcInBhcnRzXCIpKSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFydHNTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFBhcnRzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1BhcnRzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9QYXJ0c1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhcnRzU3RhdGUgPSAoKTogUGFydHNTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dDogUGFydHNTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUGFydHNTdGF0ZUNvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFBhcnRzUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhcnRzRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUGFydHNEaXNwYXRjaENvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFBhcnRzUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9