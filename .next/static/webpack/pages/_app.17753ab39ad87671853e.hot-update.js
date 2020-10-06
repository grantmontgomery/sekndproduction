webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.min.css */ "./node_modules/react-datepicker/dist/react-datepicker.min.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _state_DatePartsContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../state/DatePartsContext */ "./state/DatePartsContext.tsx");
/* harmony import */ var _state_SearchGridContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../state/SearchGridContext */ "./state/SearchGridContext.tsx");
/* harmony import */ var _state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../state/GridSquaresContext */ "./state/GridSquaresContext.tsx");








var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\pages\\_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

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
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      return __jsx(_state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_17__["SquaresProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 7
        }
      }, __jsx(_state_SearchGridContext__WEBPACK_IMPORTED_MODULE_16__["GridProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }, __jsx(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_15__["PartsProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        key: router.route,
        className: "jsx-977060076" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "977060076",
        __self: this
      }, ".page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.loading-indicator-enter{opacity:0;}.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.loading-indicator-exit{opacity:1;}.loading-indicator-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ21vbnRcXHNla25kcHJvZHVjdGlvblxccGFnZXNcXF9hcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HK0IsQUFHMkIsQUFHQSxBQUlBLEFBR0EsQUFJQSxBQUdBLEFBSUEsQUFHQSxVQXZCWixBQUcyQixBQUkzQixBQUcyQixBQUkzQixBQUcyQixBQUkzQixBQUcyQiwwREFwQjNCLEFBT0EsQUFPQSxBQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ21vbnRcXHNla25kcHJvZHVjdGlvblxccGFnZXNcXF9hcHAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5taW4uY3NzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgU2VrbmRMb2FkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBQYXJ0c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL0RhdGVQYXJ0c0NvbnRleHRcIjtcclxuaW1wb3J0IHsgR3JpZFByb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL1NlYXJjaEdyaWRDb250ZXh0XCI7XHJcbmltcG9ydCB7IFNxdWFyZXNQcm92aWRlciB9IGZyb20gXCIuLi9zdGF0ZS9HcmlkU3F1YXJlc0NvbnRleHRcIjtcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vY29va2llcy9wYXJzZUNvb2tpZXNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxTcXVhcmVzUHJvdmlkZXI+XHJcbi8vICAgICAgIDxHcmlkUHJvdmlkZXI+XHJcbi8vICAgICAgICAgPFBhcnRzUHJvdmlkZXI+XHJcbi8vICAgICAgICAgICB7LyogPFBhZ2VUcmFuc2l0aW9uXHJcbi8vICAgICAgICAgICB0aW1lb3V0PXs0MDB9XHJcbi8vICAgICAgICAgICBsb2FkaW5nQ29tcG9uZW50PXs8U2VrbmRMb2FkZXI+PC9TZWtuZExvYWRlcj59XHJcbi8vICAgICAgICAgICBsb2FkaW5nRGVsYXk9ezUwMH1cclxuLy8gICAgICAgICAgIGxvYWRpbmdUaW1lb3V0PXt7XHJcbi8vICAgICAgICAgICAgIGVudGVyOiA1MDAsXHJcbi8vICAgICAgICAgICAgIGV4aXQ6IDAsXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiXHJcbi8vICAgICAgICAgICBsb2FkaW5nQ2xhc3NOYW1lcz1cImxvYWRpbmctaW5kaWNhdG9yXCJcclxuLy8gICAgICAgICA+ICovfVxyXG4vLyAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cclxuLy8gICAgICAgICAgIHsvKiA8L1BhZ2VUcmFuc2l0aW9uPiAqL31cclxuLy8gICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbi8vICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWV4aXQge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWV4aXQtYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIGB9PC9zdHlsZT5cclxuLy8gICAgICAgICA8L1BhcnRzUHJvdmlkZXI+XHJcbi8vICAgICAgIDwvR3JpZFByb3ZpZGVyPlxyXG4vLyAgICAgPC9TcXVhcmVzUHJvdmlkZXI+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHA8e1xyXG4gIHBhcnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbiAgZ3JpZFRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIHNxdWFyZXM6IHsgcGFydDogbnVsbCB8IHsgW2tleTogc3RyaW5nXTogYW55IH1bXSB9O1xyXG59PiB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnNvbGUubG9nKENvb2tpZS5nZXQoXCJwYXJ0c1wiKSk7XHJcblxyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNxdWFyZXNQcm92aWRlcj5cclxuICAgICAgICA8R3JpZFByb3ZpZGVyPlxyXG4gICAgICAgICAgPFBhcnRzUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIHsvKiA8UGFnZVRyYW5zaXRpb25cclxuICAgICAgICAgIHRpbWVvdXQ9ezQwMH1cclxuICAgICAgICAgIGxvYWRpbmdDb21wb25lbnQ9ezxTZWtuZExvYWRlcj48L1Nla25kTG9hZGVyPn1cclxuICAgICAgICAgIGxvYWRpbmdEZWxheT17NTAwfVxyXG4gICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuICAgICAgICAgICAgZW50ZXI6IDUwMCxcclxuICAgICAgICAgICAgZXhpdDogMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4gICAgICAgID4gKi99XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8L1BhZ2VUcmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvUGFydHNQcm92aWRlcj5cclxuICAgICAgICA8L0dyaWRQcm92aWRlcj5cclxuICAgICAgPC9TcXVhcmVzUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\gmont\\\\sekndproduction\\\\pages\\\\_app.tsx */"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("parts"));
                return _context.abrupt("return", {});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_13___default.a);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInJvdXRlIiwiY29uc29sZSIsImxvZyIsIkNvb2tpZSIsImdldCIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs2QkFZSztBQUFBLHdCQUNrQyxLQUFLQyxLQUR2QztBQUFBLFVBQ0NDLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lDLFNBRFosZUFDWUEsU0FEWjtBQUFBLFVBQ3VCQyxNQUR2QixlQUN1QkEsTUFEdkI7QUFFUCxhQUNFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVlFLE1BQUMsU0FBRCx5RkFBZUQsU0FBZjtBQUEwQixXQUFHLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBWkY7QUFBQTtBQUFBO0FBQUEsNmdPQURGLENBREYsQ0FERjtBQW1ERDs7Ozs7Ozs7O0FBMURDQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlDLGlEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLENBQVo7aURBRU8sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVRTQyxnRDs7QUFvRUxWLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTc3NTNhYjM5YWQ4NzY3MTg1M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFNla25kTG9hZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUGFydHNQcm92aWRlciB9IGZyb20gXCIuLi9zdGF0ZS9EYXRlUGFydHNDb250ZXh0XCI7XHJcbmltcG9ydCB7IEdyaWRQcm92aWRlciB9IGZyb20gXCIuLi9zdGF0ZS9TZWFyY2hHcmlkQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBTcXVhcmVzUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIi4uL2Nvb2tpZXMvcGFyc2VDb29raWVzXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8U3F1YXJlc1Byb3ZpZGVyPlxyXG4vLyAgICAgICA8R3JpZFByb3ZpZGVyPlxyXG4vLyAgICAgICAgIDxQYXJ0c1Byb3ZpZGVyPlxyXG4vLyAgICAgICAgICAgey8qIDxQYWdlVHJhbnNpdGlvblxyXG4vLyAgICAgICAgICAgdGltZW91dD17NDAwfVxyXG4vLyAgICAgICAgICAgbG9hZGluZ0NvbXBvbmVudD17PFNla25kTG9hZGVyPjwvU2VrbmRMb2FkZXI+fVxyXG4vLyAgICAgICAgICAgbG9hZGluZ0RlbGF5PXs1MDB9XHJcbi8vICAgICAgICAgICBsb2FkaW5nVGltZW91dD17e1xyXG4vLyAgICAgICAgICAgICBlbnRlcjogNTAwLFxyXG4vLyAgICAgICAgICAgICBleGl0OiAwLFxyXG4vLyAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIlxyXG4vLyAgICAgICAgICAgbG9hZGluZ0NsYXNzTmFtZXM9XCJsb2FkaW5nLWluZGljYXRvclwiXHJcbi8vICAgICAgICAgPiAqL31cclxuLy8gICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbi8vICAgICAgICAgICB7LyogPC9QYWdlVHJhbnNpdGlvbj4gKi99XHJcbi8vICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4vLyAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyLWFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0IHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0LWFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICBgfTwvc3R5bGU+XHJcbi8vICAgICAgICAgPC9QYXJ0c1Byb3ZpZGVyPlxyXG4vLyAgICAgICA8L0dyaWRQcm92aWRlcj5cclxuLy8gICAgIDwvU3F1YXJlc1Byb3ZpZGVyPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwPHtcclxuICBwYXJ0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdO1xyXG4gIGdyaWRUZW1wbGF0ZTogc3RyaW5nO1xyXG4gIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuICBzcXVhcmVzOiB7IHBhcnQ6IG51bGwgfCB7IFtrZXk6IHN0cmluZ106IGFueSB9W10gfTtcclxufT4ge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhDb29raWUuZ2V0KFwicGFydHNcIikpO1xyXG5cclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTcXVhcmVzUHJvdmlkZXI+XHJcbiAgICAgICAgPEdyaWRQcm92aWRlcj5cclxuICAgICAgICAgIDxQYXJ0c1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICB7LyogPFBhZ2VUcmFuc2l0aW9uXHJcbiAgICAgICAgICB0aW1lb3V0PXs0MDB9XHJcbiAgICAgICAgICBsb2FkaW5nQ29tcG9uZW50PXs8U2VrbmRMb2FkZXI+PC9TZWtuZExvYWRlcj59XHJcbiAgICAgICAgICBsb2FkaW5nRGVsYXk9ezUwMH1cclxuICAgICAgICAgIGxvYWRpbmdUaW1lb3V0PXt7XHJcbiAgICAgICAgICAgIGVudGVyOiA1MDAsXHJcbiAgICAgICAgICAgIGV4aXQ6IDAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICBsb2FkaW5nQ2xhc3NOYW1lcz1cImxvYWRpbmctaW5kaWNhdG9yXCJcclxuICAgICAgICA+ICovfVxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICAgICAgICB7LyogPC9QYWdlVHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZXhpdCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8L1BhcnRzUHJvdmlkZXI+XHJcbiAgICAgICAgPC9HcmlkUHJvdmlkZXI+XHJcbiAgICAgIDwvU3F1YXJlc1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9