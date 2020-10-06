module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.min.css":
/*!*********************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.min.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.min.css */ "./node_modules/react-datepicker/dist/react-datepicker.min.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_DatePartsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/DatePartsContext */ "./state/DatePartsContext.tsx");
/* harmony import */ var _state_SearchGridContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/SearchGridContext */ "./state/SearchGridContext.tsx");
/* harmony import */ var _state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/GridSquaresContext */ "./state/GridSquaresContext.tsx");
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\pages\\_app.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function MyApp({
  Component,
  pageProps,
  router
}) {
  return __jsx(_state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_7__["SquaresProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_state_SearchGridContext__WEBPACK_IMPORTED_MODULE_6__["GridProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_5__["PartsProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    key: router.route,
    className: "jsx-271327588" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "271327588",
    __self: this
  }, ".page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.loading-indicator-enter{opacity:0;}.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity 300ms;transition:opacity 300ms;}.loading-indicator-exit{opacity:1;}.loading-indicator-exit-active{opacity:0;-webkit-transition:opacity 300ms;transition:opacity 300ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ21vbnRcXHNla25kcHJvZHVjdGlvblxccGFnZXNcXF9hcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCNkIsQUFHeUIsQUFHQSxBQUlBLEFBR0EsQUFJQSxBQUdBLEFBSUEsQUFHQSxVQXZCWixBQUcyQixBQUkzQixBQUcyQixBQUkzQixBQUcyQixBQUkzQixBQUcyQiwwREFwQjNCLEFBT0EsQUFPQSxBQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ21vbnRcXHNla25kcHJvZHVjdGlvblxccGFnZXNcXF9hcHAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5taW4uY3NzXCI7XHJcbmltcG9ydCB7IFBhZ2VUcmFuc2l0aW9uIH0gZnJvbSBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiO1xyXG5pbXBvcnQgeyBTZWtuZExvYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFBhcnRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBHcmlkUHJvdmlkZXIgfSBmcm9tIFwiLi4vc3RhdGUvU2VhcmNoR3JpZENvbnRleHRcIjtcclxuaW1wb3J0IHsgU3F1YXJlc1Byb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL0dyaWRTcXVhcmVzQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3F1YXJlc1Byb3ZpZGVyPlxyXG4gICAgICA8R3JpZFByb3ZpZGVyPlxyXG4gICAgICAgIDxQYXJ0c1Byb3ZpZGVyPlxyXG4gICAgICAgICAgey8qIDxQYWdlVHJhbnNpdGlvblxyXG4gICAgICAgICAgdGltZW91dD17NDAwfVxyXG4gICAgICAgICAgbG9hZGluZ0NvbXBvbmVudD17PFNla25kTG9hZGVyPjwvU2VrbmRMb2FkZXI+fVxyXG4gICAgICAgICAgbG9hZGluZ0RlbGF5PXs1MDB9XHJcbiAgICAgICAgICBsb2FkaW5nVGltZW91dD17e1xyXG4gICAgICAgICAgICBlbnRlcjogNTAwLFxyXG4gICAgICAgICAgICBleGl0OiAwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgbG9hZGluZ0NsYXNzTmFtZXM9XCJsb2FkaW5nLWluZGljYXRvclwiXHJcbiAgICAgICAgPiAqL31cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgICAgICB7LyogPC9QYWdlVHJhbnNpdGlvbj4gKi99XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0IHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9QYXJ0c1Byb3ZpZGVyPlxyXG4gICAgICA8L0dyaWRQcm92aWRlcj5cclxuICAgIDwvU3F1YXJlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\gmont\\\\sekndproduction\\\\pages\\\\_app.tsx */"))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./state/DatePartsContext.tsx":
/*!************************************!*\
  !*** ./state/DatePartsContext.tsx ***!
  \************************************/
/*! exports provided: PartsProvider, usePartsState, usePartsDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsProvider", function() { return PartsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePartsState", function() { return usePartsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePartsDispatch", function() { return usePartsDispatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\state\\DatePartsContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const partsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PART":
      return state.parts.length < 7 ? {
        parts: [...state.parts, action.payload.part]
      } : null;

    case "REMOVE_PART":
      return {
        parts: state.parts.filter(part => part.id !== action.payload.id)
      };

    case "CHANGE_CUSTOM_DETAIL":
      return {
        parts: state.parts.map(part => {
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

const PartsStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
const PartsDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
const PartsProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](partsReducer, {
    parts: []
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("parts", state);
    console.log(JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("parts")));
  }, [state]);
  return __jsx(PartsStateContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(PartsDispatchContext.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, children));
};
const usePartsState = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](PartsStateContext);

  if (context === undefined) {
    throw new Error("Please use within PartsProvider");
  }

  return context;
};
const usePartsDispatch = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](PartsDispatchContext);

  if (context === undefined) {
    throw new Error("Please use within PartsProvider");
  }

  return context;
};

/***/ }),

/***/ "./state/GridSquaresContext.tsx":
/*!**************************************!*\
  !*** ./state/GridSquaresContext.tsx ***!
  \**************************************/
/*! exports provided: SquaresProvider, useSquaresState, useSquaresDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquaresProvider", function() { return SquaresProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSquaresState", function() { return useSquaresState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSquaresDispatch", function() { return useSquaresDispatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\state\\GridSquaresContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const squaresReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SQUARES":
      return {
        squares: [...new Array(action.payload.numberOfSquares)].map(() => ({
          part: null
        }))
      };

    case "ADD_PART_TO_SQUARE":
      return {
        squares: state.squares.map((square, i) => {
          return i !== action.payload.index ? square : {
            part: action.payload.part
          };
        })
      };

    case "REMOVE_PART_FROM_SQUARE":
      return {
        squares: state.squares.map((square, i) => {
          return i !== action.payload.index ? {
            part: action.payload.part
          } : square;
        })
      };

    default:
      return state;
  }
};

const SquaresContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
const SquaresDispatch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
const SquaresProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](squaresReducer, {
    squares: []
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("squares", state);
    console.log(js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("squares"));
  }, [state]);
  return __jsx(SquaresContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(SquaresDispatch.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, children));
};
const useSquaresState = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](SquaresContext);

  if (context === undefined) {
    throw new Error("Please use within Squares Provider");
  }

  return context;
};
const useSquaresDispatch = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](SquaresDispatch);

  if (context === undefined) {
    throw new Error("Please use within Squares Provider");
  }

  return context;
};

/***/ }),

/***/ "./state/SearchGridContext.tsx":
/*!*************************************!*\
  !*** ./state/SearchGridContext.tsx ***!
  \*************************************/
/*! exports provided: GridProvider, useGridState, useGridDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridProvider", function() { return GridProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGridState", function() { return useGridState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGridDispatch", function() { return useGridDispatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\state\\SearchGridContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const gridReducer = (state, action) => {
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

const GridStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
const GridDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);
const GridProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](gridReducer, {
    gridTemplate: "",
    hourStrings: []
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("grid", state);
  }, [state]);
  return __jsx(GridStateContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(GridDispatchContext.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, children));
};
const useGridState = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](GridStateContext);

  if (context === undefined) {
    throw new Error("Please use within GridProvider");
  }

  return context;
};
const useGridDispatch = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](GridDispatchContext);

  if (context === undefined) {
    throw new Error("Please use within GridProvider");
  }

  return context;
};

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zdGF0ZS9TZWFyY2hHcmlkQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJyb3V0ZSIsInBhcnRzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBhcnRzIiwibGVuZ3RoIiwicGF5bG9hZCIsInBhcnQiLCJmaWx0ZXIiLCJpZCIsIm1hcCIsImRldGFpbHMiLCJQYXJ0c1N0YXRlQ29udGV4dCIsIlJlYWN0IiwidW5kZWZpbmVkIiwiUGFydHNEaXNwYXRjaENvbnRleHQiLCJQYXJ0c1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsIkNvb2tpZSIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJnZXQiLCJ1c2VQYXJ0c1N0YXRlIiwiY29udGV4dCIsIkVycm9yIiwidXNlUGFydHNEaXNwYXRjaCIsInNxdWFyZXNSZWR1Y2VyIiwic3F1YXJlcyIsIkFycmF5IiwibnVtYmVyT2ZTcXVhcmVzIiwic3F1YXJlIiwiaSIsImluZGV4IiwiU3F1YXJlc0NvbnRleHQiLCJTcXVhcmVzRGlzcGF0Y2giLCJTcXVhcmVzUHJvdmlkZXIiLCJ1c2VTcXVhcmVzU3RhdGUiLCJ1c2VTcXVhcmVzRGlzcGF0Y2giLCJncmlkUmVkdWNlciIsImhvdXJTdHJpbmdzIiwiZ3JpZFRlbXBsYXRlIiwiR3JpZFN0YXRlQ29udGV4dCIsIkdyaWREaXNwYXRjaENvbnRleHQiLCJHcmlkUHJvdmlkZXIiLCJ1c2VHcmlkU3RhdGUiLCJ1c2VHcmlkRGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQyxXQUFiO0FBQXdCQztBQUF4QixDQUFmLEVBQWlEO0FBQy9DLFNBQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFB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QUFJQSxTQUNFLE1BQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUVpQixRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FERixDQURGO0FBT0QsQ0FyQk07QUF1QkEsTUFBTStCLFlBQVksR0FBRyxNQUFhO0FBQ3ZDLFFBQU1yQixPQUFPLEdBQUdkLGdEQUFBLENBQWlCZ0MsZ0JBQWpCLENBQWhCOztBQUVBLE1BQUlsQixPQUFPLEtBQUtiLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWMsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FQTTtBQVNBLE1BQU1zQixlQUFlLEdBQUcsTUFBOEI7QUFDM0QsUUFBTXRCLE9BQU8sR0FBR2QsZ0RBQUEsQ0FBaUJpQyxtQkFBakIsQ0FBaEI7O0FBRUEsTUFBSW5CLE9BQU8sS0FBS2IsU0FBaEIsRUFBMkI7QUFDekIsVUFBTSxJQUFJYyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNEOztBQUNELFNBQU9ELE9BQVA7QUFDRCxDQVBNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRVAsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiO1xyXG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIjtcclxuaW1wb3J0IHsgU2VrbmRMb2FkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBQYXJ0c1Byb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL0RhdGVQYXJ0c0NvbnRleHRcIjtcclxuaW1wb3J0IHsgR3JpZFByb3ZpZGVyIH0gZnJvbSBcIi4uL3N0YXRlL1NlYXJjaEdyaWRDb250ZXh0XCI7XHJcbmltcG9ydCB7IFNxdWFyZXNQcm92aWRlciB9IGZyb20gXCIuLi9zdGF0ZS9HcmlkU3F1YXJlc0NvbnRleHRcIjtcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNxdWFyZXNQcm92aWRlcj5cclxuICAgICAgPEdyaWRQcm92aWRlcj5cclxuICAgICAgICA8UGFydHNQcm92aWRlcj5cclxuICAgICAgICAgIHsvKiA8UGFnZVRyYW5zaXRpb25cclxuICAgICAgICAgIHRpbWVvdXQ9ezQwMH1cclxuICAgICAgICAgIGxvYWRpbmdDb21wb25lbnQ9ezxTZWtuZExvYWRlcj48L1Nla25kTG9hZGVyPn1cclxuICAgICAgICAgIGxvYWRpbmdEZWxheT17NTAwfVxyXG4gICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuICAgICAgICAgICAgZW50ZXI6IDUwMCxcclxuICAgICAgICAgICAgZXhpdDogMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4gICAgICAgID4gKi99XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICAgICAgey8qIDwvUGFnZVRyYW5zaXRpb24+ICovfVxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZXhpdCB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvUGFydHNQcm92aWRlcj5cclxuICAgICAgPC9HcmlkUHJvdmlkZXI+XHJcbiAgICA8L1NxdWFyZXNQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBQYXJ0c1N0YXRlID0ge1xyXG4gIHBhcnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbn07XHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgZGV0YWlscz86IHN0cmluZztcclxuICAgIHBhcnRzPzogUGFydHNTdGF0ZVtcInBhcnRzXCJdO1xyXG4gIH07XHJcbn07XHJcbmNvbnN0IHBhcnRzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxQYXJ0c1N0YXRlLCBBY3Rpb24+ID0gKFxyXG4gIHN0YXRlOiBQYXJ0c1N0YXRlLFxyXG4gIGFjdGlvblxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHN0YXRlLnBhcnRzLmxlbmd0aCA8IDdcclxuICAgICAgICA/IHsgcGFydHM6IFsuLi5zdGF0ZS5wYXJ0cywgYWN0aW9uLnBheWxvYWQucGFydF0gfVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIGNhc2UgXCJSRU1PVkVfUEFSVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5maWx0ZXIoKHBhcnQpID0+IHBhcnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJDSEFOR0VfQ1VTVE9NX0RFVEFJTFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5tYXAoKHBhcnQpID0+IHtcclxuICAgICAgICAgIGlmIChwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCkgcmV0dXJuIHBhcnQ7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGFydCwgZGV0YWlsczogYWN0aW9uLnBheWxvYWQuZGV0YWlscyB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9GUk9NX0NBQ0hFXCI6XHJcbiAgICAgIHJldHVybiB7IHBhcnRzOiBhY3Rpb24ucGF5bG9hZC5wYXJ0cyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhcnRzU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PFBhcnRzU3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcclxuICB1bmRlZmluZWRcclxuKTtcclxuXHJcbmNvbnN0IFBhcnRzRGlzcGF0Y2hDb250ZXh0OiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJ0c1Byb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkgPT4gSlNYLkVsZW1lbnQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihwYXJ0c1JlZHVjZXIsIHsgcGFydHM6IFtdIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcInBhcnRzXCIsIHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoQ29va2llLmdldChcInBhcnRzXCIpKSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFydHNTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFBhcnRzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1BhcnRzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9QYXJ0c1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhcnRzU3RhdGUgPSAoKTogUGFydHNTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dDogUGFydHNTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUGFydHNTdGF0ZUNvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFBhcnRzUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhcnRzRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUGFydHNEaXNwYXRjaENvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFBhcnRzUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIHNxdWFyZXM6IHsgcGFydDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbnVtYmVyT2ZTcXVhcmVzPzogbnVtYmVyO1xyXG4gICAgcGFydD86IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzcXVhcmVzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogU3RhdGUsXHJcbiAgYWN0aW9uOiBBY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9TUVVBUkVTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLm5ldyBBcnJheShhY3Rpb24ucGF5bG9hZC5udW1iZXJPZlNxdWFyZXMpXS5tYXAoKCkgPT4gKHtcclxuICAgICAgICAgIHBhcnQ6IG51bGwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkFERF9QQVJUX1RPX1NRVUFSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IHN0YXRlLnNxdWFyZXMubWFwKChzcXVhcmUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpICE9PSBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICA/IHNxdWFyZVxyXG4gICAgICAgICAgICA6IHsgcGFydDogYWN0aW9uLnBheWxvYWQucGFydCB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlJFTU9WRV9QQVJUX0ZST01fU1FVQVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogc3RhdGUuc3F1YXJlcy5tYXAoKHNxdWFyZSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgID8geyBwYXJ0OiBhY3Rpb24ucGF5bG9hZC5wYXJ0IH1cclxuICAgICAgICAgICAgOiBzcXVhcmU7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU3F1YXJlc0NvbnRleHQ6IFJlYWN0LkNvbnRleHQ8U3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgU3F1YXJlc0Rpc3BhdGNoOiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTcXVhcmVzUHJvdmlkZXI6ICh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHNxdWFyZXNSZWR1Y2VyLCB7XHJcbiAgICBzcXVhcmVzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZS5zZXQoXCJzcXVhcmVzXCIsIHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKENvb2tpZS5nZXQoXCJzcXVhcmVzXCIpKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTcXVhcmVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8U3F1YXJlc0Rpc3BhdGNoLlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1NxdWFyZXNEaXNwYXRjaC5Qcm92aWRlcj5cclxuICAgIDwvU3F1YXJlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTcXVhcmVzU3RhdGUgPSAoKTogU3RhdGUgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBTcXVhcmVzIFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTcXVhcmVzRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoU3F1YXJlc0Rpc3BhdGNoKTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIGdyaWRUZW1wbGF0ZTogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb24gPSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IHtcclxuICAgIGdyaWRUZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBncmlkUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJBRERfR1JJRF9URU1QTEFURVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhvdXJTdHJpbmdzOiBhY3Rpb24ucGF5bG9hZC5ob3VyU3RyaW5ncyxcclxuICAgICAgICBncmlkVGVtcGxhdGU6IGFjdGlvbi5wYXlsb2FkLmdyaWRUZW1wbGF0ZSxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgR3JpZFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxTdGF0ZT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBHcmlkRGlzcGF0Y2hDb250ZXh0OiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUHJvdmlkZXI6ICh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKGdyaWRSZWR1Y2VyLCB7XHJcbiAgICBncmlkVGVtcGxhdGU6IFwiXCIsXHJcbiAgICBob3VyU3RyaW5nczogW10sXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWUuc2V0KFwiZ3JpZFwiLCBzdGF0ZSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8R3JpZERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9HcmlkRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9HcmlkU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR3JpZFN0YXRlID0gKCk6IFN0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChHcmlkU3RhdGVDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gR3JpZFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHcmlkRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoR3JpZERpc3BhdGNoQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIEdyaWRQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=