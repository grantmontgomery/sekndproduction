webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.min.css */ "./node_modules/react-datepicker/dist/react-datepicker.min.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _state_DatePartsContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../state/DatePartsContext */ "./state/DatePartsContext.tsx");
/* harmony import */ var _state_SearchGridContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../state/SearchGridContext */ "./state/SearchGridContext.tsx");
/* harmony import */ var _state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../state/GridSquaresContext */ "./state/GridSquaresContext.tsx");






var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\pages\\_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









// import { parseCookies } from "../cookies/parseCookies";
// function MyApp({ Component, pageProps, router }) {
//   return (
//     <SquaresProvider>
//       <GridProvider>
//         <PartsProvider>
//           {/* <PageTransition
//           timeout={400}
//           loadingComponent={<SekndLoader></SekndLoader>}
//           loadingDelay={500}
//           loadingTimeout={{
//             enter: 500,
//             exit: 0,
//           }}
//           classNames="page-transition"
//           loadingClassNames="loading-indicator"
//         > */}
//           <Component {...pageProps} key={router.route} />
//           {/* </PageTransition> */}
//           <style jsx global>{`
//             .page-transition-enter {
//               opacity: 0;
//             }
//             .page-transition-enter-active {
//               opacity: 1;
//               transition: opacity 300ms;
//             }
//             .page-transition-exit {
//               opacity: 1;
//             }
//             .page-transition-exit-active {
//               opacity: 0;
//               transition: opacity 300ms;
//             }
//             .loading-indicator-enter {
//               opacity: 0;
//             }
//             .loading-indicator-enter-active {
//               opacity: 1;
//               transition: opacity 300ms;
//             }
//             .loading-indicator-exit {
//               opacity: 1;
//             }
//             .loading-indicator-exit-active {
//               opacity: 0;
//               transition: opacity 300ms;
//             }
//           `}</style>
//         </PartsProvider>
//       </GridProvider>
//     </SquaresProvider>
//   );
// }
var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      return __jsx(_state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_14__["SquaresProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }
      }, __jsx(_state_SearchGridContext__WEBPACK_IMPORTED_MODULE_13__["GridProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_12__["PartsProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        key: router.route,
        className: "jsx-977060076" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "977060076",
        __self: this
      }, ".page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.loading-indicator-enter{opacity:0;}.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.loading-indicator-exit{opacity:1;}.loading-indicator-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ21vbnRcXHNla25kcHJvZHVjdGlvblxccGFnZXNcXF9hcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGK0IsQUFHMkIsQUFHQSxBQUlBLEFBR0EsQUFJQSxBQUdBLEFBSUEsQUFHQSxVQXZCWixBQUcyQixBQUkzQixBQUcyQixBQUkzQixBQUcyQixBQUkzQixBQUcyQiwwREFwQjNCLEFBT0EsQUFPQSxBQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ21vbnRcXHNla25kcHJvZHVjdGlvblxccGFnZXNcXF9hcHAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5taW4uY3NzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgU2VrbmRMb2FkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBQYXJ0c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL0RhdGVQYXJ0c0NvbnRleHRcIjtcclxuaW1wb3J0IHsgR3JpZFByb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL1NlYXJjaEdyaWRDb250ZXh0XCI7XHJcbmltcG9ydCB7IFNxdWFyZXNQcm92aWRlciB9IGZyb20gXCIuLi9zdGF0ZS9HcmlkU3F1YXJlc0NvbnRleHRcIjtcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vY29va2llcy9wYXJzZUNvb2tpZXNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxTcXVhcmVzUHJvdmlkZXI+XHJcbi8vICAgICAgIDxHcmlkUHJvdmlkZXI+XHJcbi8vICAgICAgICAgPFBhcnRzUHJvdmlkZXI+XHJcbi8vICAgICAgICAgICB7LyogPFBhZ2VUcmFuc2l0aW9uXHJcbi8vICAgICAgICAgICB0aW1lb3V0PXs0MDB9XHJcbi8vICAgICAgICAgICBsb2FkaW5nQ29tcG9uZW50PXs8U2VrbmRMb2FkZXI+PC9TZWtuZExvYWRlcj59XHJcbi8vICAgICAgICAgICBsb2FkaW5nRGVsYXk9ezUwMH1cclxuLy8gICAgICAgICAgIGxvYWRpbmdUaW1lb3V0PXt7XHJcbi8vICAgICAgICAgICAgIGVudGVyOiA1MDAsXHJcbi8vICAgICAgICAgICAgIGV4aXQ6IDAsXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiXHJcbi8vICAgICAgICAgICBsb2FkaW5nQ2xhc3NOYW1lcz1cImxvYWRpbmctaW5kaWNhdG9yXCJcclxuLy8gICAgICAgICA+ICovfVxyXG4vLyAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cclxuLy8gICAgICAgICAgIHsvKiA8L1BhZ2VUcmFuc2l0aW9uPiAqL31cclxuLy8gICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbi8vICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWV4aXQge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWV4aXQtYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIGB9PC9zdHlsZT5cclxuLy8gICAgICAgICA8L1BhcnRzUHJvdmlkZXI+XHJcbi8vICAgICAgIDwvR3JpZFByb3ZpZGVyPlxyXG4vLyAgICAgPC9TcXVhcmVzUHJvdmlkZXI+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHA8e1xyXG4gIHBhcnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbiAgZ3JpZFRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIHNxdWFyZXM6IHsgcGFydDogbnVsbCB8IHsgW2tleTogc3RyaW5nXTogYW55IH1bXSB9O1xyXG59PiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNxdWFyZXNQcm92aWRlcj5cclxuICAgICAgICA8R3JpZFByb3ZpZGVyPlxyXG4gICAgICAgICAgPFBhcnRzUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIHsvKiA8UGFnZVRyYW5zaXRpb25cclxuICAgICAgICAgIHRpbWVvdXQ9ezQwMH1cclxuICAgICAgICAgIGxvYWRpbmdDb21wb25lbnQ9ezxTZWtuZExvYWRlcj48L1Nla25kTG9hZGVyPn1cclxuICAgICAgICAgIGxvYWRpbmdEZWxheT17NTAwfVxyXG4gICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuICAgICAgICAgICAgZW50ZXI6IDUwMCxcclxuICAgICAgICAgICAgZXhpdDogMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4gICAgICAgID4gKi99XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8L1BhZ2VUcmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvUGFydHNQcm92aWRlcj5cclxuICAgICAgICA8L0dyaWRQcm92aWRlcj5cclxuICAgICAgPC9TcXVhcmVzUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\gmont\\\\sekndproduction\\\\pages\\\\_app.tsx */"))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_11___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInJvdXRlIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVNQSxLOzs7Ozs7Ozs7Ozs7OzZCQU1LO0FBQUEsd0JBQ2tDLEtBQUtDLEtBRHZDO0FBQUEsVUFDQ0MsU0FERCxlQUNDQSxTQUREO0FBQUEsVUFDWUMsU0FEWixlQUNZQSxTQURaO0FBQUEsVUFDdUJDLE1BRHZCLGVBQ3VCQSxNQUR2QjtBQUVQLGFBQ0UsTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBWUUsTUFBQyxTQUFELHlGQUFlRCxTQUFmO0FBQTBCLFdBQUcsRUFBRUMsTUFBTSxDQUFDQyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FaRjtBQUFBO0FBQUE7QUFBQSxxM05BREYsQ0FERixDQURGO0FBbUREOzs7O0VBM0RpQkMsZ0Q7O0FBOERMTixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQyYmNiYTI2ZTIzOTFlZDQzMWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLm1pbi5jc3NcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tIFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBTZWtuZExvYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFBhcnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBHcmlkUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3RhdGUvU2VhcmNoR3JpZENvbnRleHRcIjtcclxuaW1wb3J0IHsgU3F1YXJlc1Byb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL0dyaWRTcXVhcmVzQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCIuLi9jb29raWVzL3BhcnNlQ29va2llc1wiO1xyXG5cclxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pIHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPFNxdWFyZXNQcm92aWRlcj5cclxuLy8gICAgICAgPEdyaWRQcm92aWRlcj5cclxuLy8gICAgICAgICA8UGFydHNQcm92aWRlcj5cclxuLy8gICAgICAgICAgIHsvKiA8UGFnZVRyYW5zaXRpb25cclxuLy8gICAgICAgICAgIHRpbWVvdXQ9ezQwMH1cclxuLy8gICAgICAgICAgIGxvYWRpbmdDb21wb25lbnQ9ezxTZWtuZExvYWRlcj48L1Nla25kTG9hZGVyPn1cclxuLy8gICAgICAgICAgIGxvYWRpbmdEZWxheT17NTAwfVxyXG4vLyAgICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuLy8gICAgICAgICAgICAgZW50ZXI6IDUwMCxcclxuLy8gICAgICAgICAgICAgZXhpdDogMCxcclxuLy8gICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuLy8gICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4vLyAgICAgICAgID4gKi99XHJcbi8vICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4vLyAgICAgICAgICAgey8qIDwvUGFnZVRyYW5zaXRpb24+ICovfVxyXG4vLyAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyLWFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZXhpdCB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZXhpdC1hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgYH08L3N0eWxlPlxyXG4vLyAgICAgICAgIDwvUGFydHNQcm92aWRlcj5cclxuLy8gICAgICAgPC9HcmlkUHJvdmlkZXI+XHJcbi8vICAgICA8L1NxdWFyZXNQcm92aWRlcj5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcDx7XHJcbiAgcGFydHM6IHsgW2tleTogc3RyaW5nXTogYW55IH1bXTtcclxuICBncmlkVGVtcGxhdGU6IHN0cmluZztcclxuICBob3VyU3RyaW5nczogc3RyaW5nW107XHJcbiAgc3F1YXJlczogeyBwYXJ0OiBudWxsIHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdIH07XHJcbn0+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3F1YXJlc1Byb3ZpZGVyPlxyXG4gICAgICAgIDxHcmlkUHJvdmlkZXI+XHJcbiAgICAgICAgICA8UGFydHNQcm92aWRlcj5cclxuICAgICAgICAgICAgey8qIDxQYWdlVHJhbnNpdGlvblxyXG4gICAgICAgICAgdGltZW91dD17NDAwfVxyXG4gICAgICAgICAgbG9hZGluZ0NvbXBvbmVudD17PFNla25kTG9hZGVyPjwvU2VrbmRMb2FkZXI+fVxyXG4gICAgICAgICAgbG9hZGluZ0RlbGF5PXs1MDB9XHJcbiAgICAgICAgICBsb2FkaW5nVGltZW91dD17e1xyXG4gICAgICAgICAgICBlbnRlcjogNTAwLFxyXG4gICAgICAgICAgICBleGl0OiAwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgbG9hZGluZ0NsYXNzTmFtZXM9XCJsb2FkaW5nLWluZGljYXRvclwiXHJcbiAgICAgICAgPiAqL31cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cclxuICAgICAgICAgICAgey8qIDwvUGFnZVRyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWV4aXQge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPC9QYXJ0c1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvR3JpZFByb3ZpZGVyPlxyXG4gICAgICA8L1NxdWFyZXNQcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==