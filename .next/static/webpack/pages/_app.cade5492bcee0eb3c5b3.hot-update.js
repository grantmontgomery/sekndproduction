webpackHotUpdate_N_E("pages/_app",{

/***/ "./cookies/parseCookies.ts":
/*!*********************************!*\
  !*** ./cookies/parseCookies.ts ***!
  \*********************************/
/*! exports provided: parseCookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookies", function() { return parseCookies; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookies(req) {
  return cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req ? req.headers.cookie || "" : document.cookie);
}

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

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
/* harmony import */ var _state_DatePartsContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../state/DatePartsContext */ "./state/DatePartsContext.tsx");
/* harmony import */ var _state_SearchGridContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../state/SearchGridContext */ "./state/SearchGridContext.tsx");
/* harmony import */ var _state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../state/GridSquaresContext */ "./state/GridSquaresContext.tsx");
/* harmony import */ var _cookies_parseCookies__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cookies/parseCookies */ "./cookies/parseCookies.ts");








var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\pages\\_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








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
      return __jsx(_state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_16__["SquaresProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }
      }, __jsx(_state_SearchGridContext__WEBPACK_IMPORTED_MODULE_15__["GridProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }, __jsx(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_14__["PartsProvider"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        key: router.route,
        className: "jsx-977060076" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "977060076",
        __self: this
      }, ".page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.loading-indicator-enter{opacity:0;}.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.loading-indicator-exit{opacity:1;}.loading-indicator-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ21vbnRcXHNla25kcHJvZHVjdGlvblxccGFnZXNcXF9hcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHK0IsQUFHMkIsQUFHQSxBQUlBLEFBR0EsQUFJQSxBQUdBLEFBSUEsQUFHQSxVQXZCWixBQUcyQixBQUkzQixBQUcyQixBQUkzQixBQUcyQixBQUkzQixBQUcyQiwwREFwQjNCLEFBT0EsQUFPQSxBQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ21vbnRcXHNla25kcHJvZHVjdGlvblxccGFnZXNcXF9hcHAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5taW4uY3NzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgU2VrbmRMb2FkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBQYXJ0c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL0RhdGVQYXJ0c0NvbnRleHRcIjtcclxuaW1wb3J0IHsgR3JpZFByb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL1NlYXJjaEdyaWRDb250ZXh0XCI7XHJcbmltcG9ydCB7IFNxdWFyZXNQcm92aWRlciB9IGZyb20gXCIuLi9zdGF0ZS9HcmlkU3F1YXJlc0NvbnRleHRcIjtcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwiLi4vY29va2llcy9wYXJzZUNvb2tpZXNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxTcXVhcmVzUHJvdmlkZXI+XHJcbi8vICAgICAgIDxHcmlkUHJvdmlkZXI+XHJcbi8vICAgICAgICAgPFBhcnRzUHJvdmlkZXI+XHJcbi8vICAgICAgICAgICB7LyogPFBhZ2VUcmFuc2l0aW9uXHJcbi8vICAgICAgICAgICB0aW1lb3V0PXs0MDB9XHJcbi8vICAgICAgICAgICBsb2FkaW5nQ29tcG9uZW50PXs8U2VrbmRMb2FkZXI+PC9TZWtuZExvYWRlcj59XHJcbi8vICAgICAgICAgICBsb2FkaW5nRGVsYXk9ezUwMH1cclxuLy8gICAgICAgICAgIGxvYWRpbmdUaW1lb3V0PXt7XHJcbi8vICAgICAgICAgICAgIGVudGVyOiA1MDAsXHJcbi8vICAgICAgICAgICAgIGV4aXQ6IDAsXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiXHJcbi8vICAgICAgICAgICBsb2FkaW5nQ2xhc3NOYW1lcz1cImxvYWRpbmctaW5kaWNhdG9yXCJcclxuLy8gICAgICAgICA+ICovfVxyXG4vLyAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cclxuLy8gICAgICAgICAgIHsvKiA8L1BhZ2VUcmFuc2l0aW9uPiAqL31cclxuLy8gICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbi8vICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWV4aXQge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWV4aXQtYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIGB9PC9zdHlsZT5cclxuLy8gICAgICAgICA8L1BhcnRzUHJvdmlkZXI+XHJcbi8vICAgICAgIDwvR3JpZFByb3ZpZGVyPlxyXG4vLyAgICAgPC9TcXVhcmVzUHJvdmlkZXI+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHA8e1xyXG4gIHBhcnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbiAgZ3JpZFRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIHNxdWFyZXM6IHsgcGFydDogbnVsbCB8IHsgW2tleTogc3RyaW5nXTogYW55IH1bXSB9O1xyXG59PiB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XHJcbiAgICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKHJlcSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coY29va2llcyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbml0aWFsU3RhdGU6IGNvb2tpZXMsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNxdWFyZXNQcm92aWRlcj5cclxuICAgICAgICA8R3JpZFByb3ZpZGVyPlxyXG4gICAgICAgICAgPFBhcnRzUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIHsvKiA8UGFnZVRyYW5zaXRpb25cclxuICAgICAgICAgIHRpbWVvdXQ9ezQwMH1cclxuICAgICAgICAgIGxvYWRpbmdDb21wb25lbnQ9ezxTZWtuZExvYWRlcj48L1Nla25kTG9hZGVyPn1cclxuICAgICAgICAgIGxvYWRpbmdEZWxheT17NTAwfVxyXG4gICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuICAgICAgICAgICAgZW50ZXI6IDUwMCxcclxuICAgICAgICAgICAgZXhpdDogMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4gICAgICAgID4gKi99XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8L1BhZ2VUcmFuc2l0aW9uPiAqL31cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvUGFydHNQcm92aWRlcj5cclxuICAgICAgICA8L0dyaWRQcm92aWRlcj5cclxuICAgICAgPC9TcXVhcmVzUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\gmont\\\\sekndproduction\\\\pages\\\\_app.tsx */"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                cookies = Object(_cookies_parseCookies__WEBPACK_IMPORTED_MODULE_17__["parseCookies"])(req);
                console.log(cookies);
                return _context.abrupt("return", {
                  initialState: cookies
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29va2llcy9wYXJzZUNvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCJdLCJuYW1lcyI6WyJwYXJzZUNvb2tpZXMiLCJyZXEiLCJjb29raWUiLCJwYXJzZSIsImhlYWRlcnMiLCJkb2N1bWVudCIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJyb3V0ZSIsImNvb2tpZXMiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbFN0YXRlIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLFNBQVNBLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJDO0FBQ2hELFNBQU9DLDZDQUFNLENBQUNDLEtBQVAsQ0FBYUYsR0FBRyxHQUFHQSxHQUFHLENBQUNHLE9BQUosQ0FBWUYsTUFBWixJQUFzQixFQUF6QixHQUE4QkcsUUFBUSxDQUFDSCxNQUF2RCxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVh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RixDQURGO0FBbUREOzs7Ozs7Ozs7O0FBOUQ4QlYsbUIsUUFBQUEsRztBQUN2QlcsdUIsR0FBVVosMkVBQVksQ0FBQ0MsR0FBRCxDO0FBRTVCWSx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7aURBQ087QUFDTEcsOEJBQVksRUFBRUg7QUFEVCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVZTSSxnRDs7QUF1RUxWLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2FkZTU0OTJiY2VlMGViM2M1YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcTogTmV4dEFwaVJlcXVlc3QpIHtcclxuICByZXR1cm4gY29va2llLnBhcnNlKHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZSB8fCBcIlwiIDogZG9jdW1lbnQuY29va2llKTtcclxufVxyXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCIvKiFcbiAqIGNvb2tpZVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5leHBvcnRzLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xudmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbnZhciBwYWlyU3BsaXRSZWdFeHAgPSAvOyAqLztcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggZmllbGQtY29udGVudCBpbiBSRkMgNzIzMCBzZWMgMy4yXG4gKlxuICogZmllbGQtY29udGVudCA9IGZpZWxkLXZjaGFyIFsgMSooIFNQIC8gSFRBQiApIGZpZWxkLXZjaGFyIF1cbiAqIGZpZWxkLXZjaGFyICAgPSBWQ0hBUiAvIG9icy10ZXh0XG4gKiBvYnMtdGV4dCAgICAgID0gJXg4MC1GRlxuICovXG5cbnZhciBmaWVsZENvbnRlbnRSZWdFeHAgPSAvXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztcblxuLyoqXG4gKiBQYXJzZSBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogUGFyc2UgdGhlIGdpdmVuIGNvb2tpZSBoZWFkZXIgc3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKiBUaGUgb2JqZWN0IGhhcyB0aGUgdmFyaW91cyBjb29raWVzIGFzIGtleXMobmFtZXMpID0+IHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIHZhciBvYmogPSB7fVxuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KHBhaXJTcGxpdFJlZ0V4cCk7XG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICB2YXIgZXFfaWR4ID0gcGFpci5pbmRleE9mKCc9Jyk7XG5cbiAgICAvLyBza2lwIHRoaW5ncyB0aGF0IGRvbid0IGxvb2sgbGlrZSBrZXk9dmFsdWVcbiAgICBpZiAoZXFfaWR4IDwgMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxX2lkeCkudHJpbSgpXG4gICAgdmFyIHZhbCA9IHBhaXIuc3Vic3RyKCsrZXFfaWR4LCBwYWlyLmxlbmd0aCkudHJpbSgpO1xuXG4gICAgLy8gcXVvdGVkIHZhbHVlc1xuICAgIGlmICgnXCInID09IHZhbFswXSkge1xuICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IGFzc2lnbiBvbmNlXG4gICAgaWYgKHVuZGVmaW5lZCA9PSBvYmpba2V5XSkge1xuICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGRhdGEgaW50byBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogU2VyaWFsaXplIHRoZSBhIG5hbWUgdmFsdWUgcGFpciBpbnRvIGEgY29va2llIHN0cmluZyBzdWl0YWJsZSBmb3JcbiAqIGh0dHAgaGVhZGVycy4gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVkIGNvb2tpZSBwYXJhbWV0ZXJzLlxuICpcbiAqIHNlcmlhbGl6ZSgnZm9vJywgJ2JhcicsIHsgaHR0cE9ubHk6IHRydWUgfSlcbiAqICAgPT4gXCJmb289YmFyOyBodHRwT25seVwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUobmFtZSwgdmFsLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZW5jID0gb3B0LmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHR5cGVvZiBlbmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZW5jb2RlIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVuYyh2YWwpO1xuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdmFsIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciBzdHIgPSBuYW1lICsgJz0nICsgdmFsdWU7XG5cbiAgaWYgKG51bGwgIT0gb3B0Lm1heEFnZSkge1xuICAgIHZhciBtYXhBZ2UgPSBvcHQubWF4QWdlIC0gMDtcblxuICAgIGlmIChpc05hTihtYXhBZ2UpIHx8ICFpc0Zpbml0ZShtYXhBZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gbWF4QWdlIGlzIGludmFsaWQnKVxuICAgIH1cblxuICAgIHN0ciArPSAnOyBNYXgtQWdlPScgKyBNYXRoLmZsb29yKG1heEFnZSk7XG4gIH1cblxuICBpZiAob3B0LmRvbWFpbikge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LmRvbWFpbikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBkb21haW4gaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBEb21haW49JyArIG9wdC5kb21haW47XG4gIH1cblxuICBpZiAob3B0LnBhdGgpIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5wYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBQYXRoPScgKyBvcHQucGF0aDtcbiAgfVxuXG4gIGlmIChvcHQuZXhwaXJlcykge1xuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMudG9VVENTdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBleHBpcmVzIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRXhwaXJlcz0nICsgb3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgfVxuXG4gIGlmIChvcHQuaHR0cE9ubHkpIHtcbiAgICBzdHIgKz0gJzsgSHR0cE9ubHknO1xuICB9XG5cbiAgaWYgKG9wdC5zZWN1cmUpIHtcbiAgICBzdHIgKz0gJzsgU2VjdXJlJztcbiAgfVxuXG4gIGlmIChvcHQuc2FtZVNpdGUpIHtcbiAgICB2YXIgc2FtZVNpdGUgPSB0eXBlb2Ygb3B0LnNhbWVTaXRlID09PSAnc3RyaW5nJ1xuICAgICAgPyBvcHQuc2FtZVNpdGUudG9Mb3dlckNhc2UoKSA6IG9wdC5zYW1lU2l0ZTtcblxuICAgIHN3aXRjaCAoc2FtZVNpdGUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGF4JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPUxheCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaWN0JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1Ob25lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gc2FtZVNpdGUgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogVHJ5IGRlY29kaW5nIGEgc3RyaW5nIHVzaW5nIGEgZGVjb2RpbmcgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtmdW5jdGlvbn0gZGVjb2RlXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRyeURlY29kZShzdHIsIGRlY29kZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGUoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFNla25kTG9hZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUGFydHNQcm92aWRlciB9IGZyb20gXCIuLi9zdGF0ZS9EYXRlUGFydHNDb250ZXh0XCI7XHJcbmltcG9ydCB7IEdyaWRQcm92aWRlciB9IGZyb20gXCIuLi9zdGF0ZS9TZWFyY2hHcmlkQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBTcXVhcmVzUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIi4uL2Nvb2tpZXMvcGFyc2VDb29raWVzXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8U3F1YXJlc1Byb3ZpZGVyPlxyXG4vLyAgICAgICA8R3JpZFByb3ZpZGVyPlxyXG4vLyAgICAgICAgIDxQYXJ0c1Byb3ZpZGVyPlxyXG4vLyAgICAgICAgICAgey8qIDxQYWdlVHJhbnNpdGlvblxyXG4vLyAgICAgICAgICAgdGltZW91dD17NDAwfVxyXG4vLyAgICAgICAgICAgbG9hZGluZ0NvbXBvbmVudD17PFNla25kTG9hZGVyPjwvU2VrbmRMb2FkZXI+fVxyXG4vLyAgICAgICAgICAgbG9hZGluZ0RlbGF5PXs1MDB9XHJcbi8vICAgICAgICAgICBsb2FkaW5nVGltZW91dD17e1xyXG4vLyAgICAgICAgICAgICBlbnRlcjogNTAwLFxyXG4vLyAgICAgICAgICAgICBleGl0OiAwLFxyXG4vLyAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgIGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIlxyXG4vLyAgICAgICAgICAgbG9hZGluZ0NsYXNzTmFtZXM9XCJsb2FkaW5nLWluZGljYXRvclwiXHJcbi8vICAgICAgICAgPiAqL31cclxuLy8gICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbi8vICAgICAgICAgICB7LyogPC9QYWdlVHJhbnNpdGlvbj4gKi99XHJcbi8vICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4vLyAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xyXG4vLyAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyLWFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0IHtcclxuLy8gICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0LWFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICBgfTwvc3R5bGU+XHJcbi8vICAgICAgICAgPC9QYXJ0c1Byb3ZpZGVyPlxyXG4vLyAgICAgICA8L0dyaWRQcm92aWRlcj5cclxuLy8gICAgIDwvU3F1YXJlc1Byb3ZpZGVyPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwPHtcclxuICBwYXJ0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdO1xyXG4gIGdyaWRUZW1wbGF0ZTogc3RyaW5nO1xyXG4gIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuICBzcXVhcmVzOiB7IHBhcnQ6IG51bGwgfCB7IFtrZXk6IHN0cmluZ106IGFueSB9W10gfTtcclxufT4ge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xyXG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXEpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvb2tpZXMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5pdGlhbFN0YXRlOiBjb29raWVzLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTcXVhcmVzUHJvdmlkZXI+XHJcbiAgICAgICAgPEdyaWRQcm92aWRlcj5cclxuICAgICAgICAgIDxQYXJ0c1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICB7LyogPFBhZ2VUcmFuc2l0aW9uXHJcbiAgICAgICAgICB0aW1lb3V0PXs0MDB9XHJcbiAgICAgICAgICBsb2FkaW5nQ29tcG9uZW50PXs8U2VrbmRMb2FkZXI+PC9TZWtuZExvYWRlcj59XHJcbiAgICAgICAgICBsb2FkaW5nRGVsYXk9ezUwMH1cclxuICAgICAgICAgIGxvYWRpbmdUaW1lb3V0PXt7XHJcbiAgICAgICAgICAgIGVudGVyOiA1MDAsXHJcbiAgICAgICAgICAgIGV4aXQ6IDAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lcz1cInBhZ2UtdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICBsb2FkaW5nQ2xhc3NOYW1lcz1cImxvYWRpbmctaW5kaWNhdG9yXCJcclxuICAgICAgICA+ICovfVxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICAgICAgICB7LyogPC9QYWdlVHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZXhpdCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8L1BhcnRzUHJvdmlkZXI+XHJcbiAgICAgICAgPC9HcmlkUHJvdmlkZXI+XHJcbiAgICAgIDwvU3F1YXJlc1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9