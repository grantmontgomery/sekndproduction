module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/search/[queried].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AccountDisplay/AccountDisplay.module.scss":
/*!**************************************************************!*\
  !*** ./components/AccountDisplay/AccountDisplay.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"accountDisplay": "AccountDisplay_accountDisplay__1MCnu"
};


/***/ }),

/***/ "./components/AccountDisplay/AccountDisplay.tsx":
/*!******************************************************!*\
  !*** ./components/AccountDisplay/AccountDisplay.tsx ***!
  \******************************************************/
/*! exports provided: AccountDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDisplay", function() { return AccountDisplay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountDisplay_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountDisplay.module.scss */ "./components/AccountDisplay/AccountDisplay.module.scss");
/* harmony import */ var _AccountDisplay_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AccountDisplay_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\AccountDisplay\\AccountDisplay.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const AccountDisplay = () => {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    loggedIn: false
  });
  return __jsx("div", {
    className: _AccountDisplay_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.accountDisplay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, " ", state.loggedIn ? "Grant" : "Sign In"));
};

/***/ }),

/***/ "./components/AccountDisplay/index.ts":
/*!********************************************!*\
  !*** ./components/AccountDisplay/index.ts ***!
  \********************************************/
/*! exports provided: AccountDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountDisplay */ "./components/AccountDisplay/AccountDisplay.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountDisplay", function() { return _AccountDisplay__WEBPACK_IMPORTED_MODULE_0__["AccountDisplay"]; });



/***/ }),

/***/ "./components/DatePart/DatePart.tsx":
/*!******************************************!*\
  !*** ./components/DatePart/DatePart.tsx ***!
  \******************************************/
/*! exports provided: DatePart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePart", function() { return DatePart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NormalPiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NormalPiece */ "./components/DatePart/NormalPiece/index.ts");
/* harmony import */ var _DragPiece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragPiece */ "./components/DatePart/DragPiece/index.ts");
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\DatePart\\DatePart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const DatePart = ({
  location,
  part,
  gridIndex
}) => {
  return location === "list" ? __jsx(_NormalPiece__WEBPACK_IMPORTED_MODULE_1__["NormalPiece"], {
    key: part.id,
    part: part,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }) : __jsx(_DragPiece__WEBPACK_IMPORTED_MODULE_2__["DragPiece"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  });
};

/***/ }),

/***/ "./components/DatePart/DragPiece/DragPiece.tsx":
/*!*****************************************************!*\
  !*** ./components/DatePart/DragPiece/DragPiece.tsx ***!
  \*****************************************************/
/*! exports provided: DragPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragPiece", function() { return DragPiece; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\DatePart\\DragPiece\\DragPiece.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

class DragPiece extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 12
      }
    });
  }

}

/***/ }),

/***/ "./components/DatePart/DragPiece/index.ts":
/*!************************************************!*\
  !*** ./components/DatePart/DragPiece/index.ts ***!
  \************************************************/
/*! exports provided: DragPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DragPiece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragPiece */ "./components/DatePart/DragPiece/DragPiece.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragPiece", function() { return _DragPiece__WEBPACK_IMPORTED_MODULE_0__["DragPiece"]; });



/***/ }),

/***/ "./components/DatePart/NormalPiece/DetailsSection/DetailsSection.module.scss":
/*!***********************************************************************************!*\
  !*** ./components/DatePart/NormalPiece/DetailsSection/DetailsSection.module.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"customDetails": "DetailsSection_customDetails__1LL4Z"
};


/***/ }),

/***/ "./components/DatePart/NormalPiece/DetailsSection/DetailsSection.tsx":
/*!***************************************************************************!*\
  !*** ./components/DatePart/NormalPiece/DetailsSection/DetailsSection.tsx ***!
  \***************************************************************************/
/*! exports provided: DetailsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSection", function() { return DetailsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_DatePartsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../state/DatePartsContext */ "./state/DatePartsContext.tsx");
/* harmony import */ var _DetailsSection_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsSection.module.scss */ "./components/DatePart/NormalPiece/DetailsSection/DetailsSection.module.scss");
/* harmony import */ var _DetailsSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DetailsSection_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\DatePart\\NormalPiece\\DetailsSection\\DetailsSection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const DetailsSection = ({
  location,
  price,
  date,
  id,
  details
}) => {
  const dispatch = Object(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_1__["usePartsDispatch"])();

  const defineSections = () => {
    if (!location && !price && !date) {
      return __jsx("textarea", {
        className: _DetailsSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.customDetails,
        value: details,
        placeholder: details === "" ? "Enter in some details" : details,
        onChange: ({
          target
        }) => dispatch({
          type: "CHANGE_CUSTOM_DETAIL",
          payload: {
            id,
            details: target.value
          }
        }),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      });
    } else {
      return __jsx("p", {
        className: _DetailsSection_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partDetails,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 14
        }
      });
    }
  };

  return defineSections();
};

/***/ }),

/***/ "./components/DatePart/NormalPiece/DetailsSection/index.ts":
/*!*****************************************************************!*\
  !*** ./components/DatePart/NormalPiece/DetailsSection/index.ts ***!
  \*****************************************************************/
/*! exports provided: DetailsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsSection */ "./components/DatePart/NormalPiece/DetailsSection/DetailsSection.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailsSection", function() { return _DetailsSection__WEBPACK_IMPORTED_MODULE_0__["DetailsSection"]; });



/***/ }),

/***/ "./components/DatePart/NormalPiece/NormalPiece.module.scss":
/*!*****************************************************************!*\
  !*** ./components/DatePart/NormalPiece/NormalPiece.module.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"normalPiece": "NormalPiece_normalPiece__3zN2g",
	"extended": "NormalPiece_extended__2-QhB",
	"partTitle": "NormalPiece_partTitle__2oCvq",
	"delete": "NormalPiece_delete__3jART"
};


/***/ }),

/***/ "./components/DatePart/NormalPiece/NormalPiece.tsx":
/*!*********************************************************!*\
  !*** ./components/DatePart/NormalPiece/NormalPiece.tsx ***!
  \*********************************************************/
/*! exports provided: NormalPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalPiece", function() { return NormalPiece; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NormalPiece_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NormalPiece.module.scss */ "./components/DatePart/NormalPiece/NormalPiece.module.scss");
/* harmony import */ var _NormalPiece_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NormalPiece_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsSection */ "./components/DatePart/NormalPiece/DetailsSection/index.ts");
/* harmony import */ var _state_DatePartsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../state/DatePartsContext */ "./state/DatePartsContext.tsx");
/* harmony import */ var _PartImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PartImage */ "./components/DatePart/NormalPiece/PartImage/index.ts");
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\DatePart\\NormalPiece\\NormalPiece.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const NormalPiece = ({
  part
}) => {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    extend: false,
    imageLoaded: false
  });
  const dispatch = Object(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_3__["usePartsDispatch"])();

  const determineImageBackgroundSource = () => {
    switch (part.type) {
      case "place":
        return part.source === "yelp" ? part.image_url : null;

      case "event":
        return part.source === "yelp" ? part.image_url : part.images[0].url;

      default:
        return "";
    }
  };

  const determinePartDetails = () => {
    switch (part.type) {
      case "custom":
        return __jsx(_DetailsSection__WEBPACK_IMPORTED_MODULE_2__["DetailsSection"], {
          id: part.id,
          details: part.details,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }
        });

      case "event":
        const determineVenue = () => {
          switch (part.source) {
            case "yelp":
              return !part.businesess_id || part.business_id === null ? null : part.business_id;

            case "ticketmaster":
              return part._embedded.venues[0].name;
          }
        };

        const determinePrice = () => {
          switch (part.source) {
            case "yelp":
              if (!part.cost) return null;
              return part.cost;

            case "ticketmaster":
              if (!part.priceRanges) return null;
              return part.priceRanges[0];
          }
        };

        return __jsx(_DetailsSection__WEBPACK_IMPORTED_MODULE_2__["DetailsSection"], {
          location: determineVenue() // price={determinePrice()}
          ,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }
        });

      case "place":
        return;

      default:
        return null;
    }
  };

  return __jsx("div", {
    className: `${_NormalPiece_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.normalPiece} ${state.extend ? _NormalPiece_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.extended : null}`,
    onClick: () => setState(state => _objectSpread(_objectSpread({}, state), {}, {
      extend: true
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(_PartImage__WEBPACK_IMPORTED_MODULE_4__["PartImage"], {
    type: part.type,
    color: part.type === "custom" ? part.color : null,
    imageLoaded: state.imageLoaded,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: determineImageBackgroundSource(),
    alt: "",
    onLoad: () => setState(state => _objectSpread(_objectSpread({}, state), {}, {
      imageLoaded: true
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _NormalPiece_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.partTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, part.name), __jsx("button", {
    className: _NormalPiece_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.delete,
    onClick: () => dispatch({
      type: "REMOVE_PART",
      payload: {
        id: part.id
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "X")), state.extend ? determinePartDetails() : null);
};

/***/ }),

/***/ "./components/DatePart/NormalPiece/PartImage/PartImage.module.scss":
/*!*************************************************************************!*\
  !*** ./components/DatePart/NormalPiece/PartImage/PartImage.module.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"partImage": "PartImage_partImage__2SwAx"
};


/***/ }),

/***/ "./components/DatePart/NormalPiece/PartImage/PartImage.tsx":
/*!*****************************************************************!*\
  !*** ./components/DatePart/NormalPiece/PartImage/PartImage.tsx ***!
  \*****************************************************************/
/*! exports provided: PartImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartImage", function() { return PartImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PartImage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartImage.module.scss */ "./components/DatePart/NormalPiece/PartImage/PartImage.module.scss");
/* harmony import */ var _PartImage_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PartImage_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\DatePart\\NormalPiece\\PartImage\\PartImage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const PartImage = ({
  type,
  color,
  imageLoaded,
  children
}) => {
  return __jsx("div", {
    className: _PartImage_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.partImage,
    style: {
      background: color || imageLoaded ? color : "linear-gradient(45deg, #ee0979, #ff6a00)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, type !== "custom" || !imageLoaded ? children : null);
};

/***/ }),

/***/ "./components/DatePart/NormalPiece/PartImage/index.ts":
/*!************************************************************!*\
  !*** ./components/DatePart/NormalPiece/PartImage/index.ts ***!
  \************************************************************/
/*! exports provided: PartImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartImage */ "./components/DatePart/NormalPiece/PartImage/PartImage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartImage", function() { return _PartImage__WEBPACK_IMPORTED_MODULE_0__["PartImage"]; });



/***/ }),

/***/ "./components/DatePart/NormalPiece/index.ts":
/*!**************************************************!*\
  !*** ./components/DatePart/NormalPiece/index.ts ***!
  \**************************************************/
/*! exports provided: NormalPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NormalPiece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NormalPiece */ "./components/DatePart/NormalPiece/NormalPiece.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalPiece", function() { return _NormalPiece__WEBPACK_IMPORTED_MODULE_0__["NormalPiece"]; });



/***/ }),

/***/ "./components/DateParts/DateParts.module.scss":
/*!****************************************************!*\
  !*** ./components/DateParts/DateParts.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dateParts": "DateParts_dateParts__2N2QX",
	"partsWrapper": "DateParts_partsWrapper__SscB5",
	"colorInput": "DateParts_colorInput__2AxQd",
	"partInput": "DateParts_partInput__2x9Sd",
	"add": "DateParts_add__1FXo_",
	"partsList": "DateParts_partsList__3UR6D",
	"partsInner": "DateParts_partsInner__2UOZ8",
	"modal": "DateParts_modal__eMly5",
	"schedulePage": "DateParts_schedulePage__30_b8",
	"parts-enter": "DateParts_parts-enter__2gckz",
	"parts-enter-active": "DateParts_parts-enter-active__2cn5n",
	"parts-exit": "DateParts_parts-exit__3J9-R",
	"parts-exit-active": "DateParts_parts-exit-active__1kbw4"
};


/***/ }),

/***/ "./components/DateParts/DateParts.tsx":
/*!********************************************!*\
  !*** ./components/DateParts/DateParts.tsx ***!
  \********************************************/
/*! exports provided: DateParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateParts", function() { return DateParts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_DatePartsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/DatePartsContext */ "./state/DatePartsContext.tsx");
/* harmony import */ var _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateParts.module.scss */ "./components/DateParts/DateParts.module.scss");
/* harmony import */ var _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DatePart_DatePart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DatePart/DatePart */ "./components/DatePart/DatePart.tsx");
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\DateParts\\DateParts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const DateParts = ({
  location
}) => {
  const {
    parts
  } = Object(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_1__["usePartsState"])();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    input: "",
    color: "linear-gradient(45deg, #ee0979, #ff6a00)"
  });
  const dispatch = Object(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_1__["usePartsDispatch"])();

  const handlePartSubmit = () => {
    if (state.input === "") return alert("Fill out input");
    return dispatch({
      type: "ADD_PART",
      payload: {
        part: {
          name: state.input,
          color: state.color,
          type: "custom",
          details: "",
          id: `${name}${Math.random()}`
        }
      }
    }), setState(state => _objectSpread(_objectSpread({}, state), {}, {
      input: ""
    }));
  };

  return __jsx("div", {
    className: `${_DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dateParts} ${_DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[location]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partsWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Date Parts"), __jsx("input", {
    type: "text",
    placeholder: "Another Idea?",
    value: state.input,
    onChange: ({
      target
    }) => setState(state => _objectSpread(_objectSpread({}, state), {}, {
      input: target.value
    })),
    className: _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.colorInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("button", {
    onClick: () => setState(state => _objectSpread(_objectSpread({}, state), {}, {
      color: "linear-gradient(45deg, #799f0c, #ffe000)"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: () => setState(state => _objectSpread(_objectSpread({}, state), {}, {
      color: "linear-gradient(45deg, #155799, #159957)"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: () => setState(state => _objectSpread(_objectSpread({}, state), {}, {
      color: "linear-gradient(45deg, #ee0979, #ff6a00)"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: () => setState(state => _objectSpread(_objectSpread({}, state), {}, {
      color: " linear-gradient(45deg, #333399, #ff00cc)"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: () => setState(state => _objectSpread(_objectSpread({}, state), {}, {
      color: "linear-gradient(45deg, #0f2027, #2c5364)"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.add,
    style: {
      color: "white",
      background: state.color
    },
    onClick: handlePartSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Add")), __jsx("div", {
    className: _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partsList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.partsInner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, parts.map(part => __jsx(_DatePart_DatePart__WEBPACK_IMPORTED_MODULE_3__["DatePart"], {
    key: part.id,
    location: "list",
    part: part,
    gridIndex: part.gridIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: _DateParts_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/DateParts/index.ts":
/*!***************************************!*\
  !*** ./components/DateParts/index.ts ***!
  \***************************************/
/*! exports provided: DateParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateParts */ "./components/DateParts/DateParts.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateParts", function() { return _DateParts__WEBPACK_IMPORTED_MODULE_0__["DateParts"]; });



/***/ }),

/***/ "./components/MobileHamburger/MobileHamburger.module.scss":
/*!****************************************************************!*\
  !*** ./components/MobileHamburger/MobileHamburger.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hamburger": "MobileHamburger_hamburger__3rEWh",
	"topLine": "MobileHamburger_topLine__1QAls",
	"bottomLine": "MobileHamburger_bottomLine__3Vsxm",
	"exit": "MobileHamburger_exit__1yFCk",
	"middleLine": "MobileHamburger_middleLine__3-obe"
};


/***/ }),

/***/ "./components/MobileHamburger/MobileHamburger.tsx":
/*!********************************************************!*\
  !*** ./components/MobileHamburger/MobileHamburger.tsx ***!
  \********************************************************/
/*! exports provided: MobileHamburger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHamburger", function() { return MobileHamburger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MobileHamburger_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileHamburger.module.scss */ "./components/MobileHamburger/MobileHamburger.module.scss");
/* harmony import */ var _MobileHamburger_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MobileHamburger_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\MobileHamburger\\MobileHamburger.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const MobileHamburger = ({
  displayLinks,
  links,
  stopWindowScroll
}) => {
  const handleClick = () => {
    if (links.display) {
      return displayLinks({
        display: false
      }), stopWindowScroll(false);
    } else {
      return displayLinks({
        display: true
      }), stopWindowScroll(true);
    }
  };

  return __jsx("div", {
    className: `${_MobileHamburger_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hamburger} ${links.display ? _MobileHamburger_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.exit : null}`,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _MobileHamburger_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.topLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _MobileHamburger_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.middleLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _MobileHamburger_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bottomLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/MobileHamburger/index.ts":
/*!*********************************************!*\
  !*** ./components/MobileHamburger/index.ts ***!
  \*********************************************/
/*! exports provided: MobileHamburger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileHamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileHamburger */ "./components/MobileHamburger/MobileHamburger.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileHamburger", function() { return _MobileHamburger__WEBPACK_IMPORTED_MODULE_0__["MobileHamburger"]; });



/***/ }),

/***/ "./components/MobileMenu/MobileMenu.module.scss":
/*!******************************************************!*\
  !*** ./components/MobileMenu/MobileMenu.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mobileMenu": "MobileMenu_mobileMenu__JzTXI",
	"modalSection": "MobileMenu_modalSection__3LK00"
};


/***/ }),

/***/ "./components/MobileMenu/MobileMenu.tsx":
/*!**********************************************!*\
  !*** ./components/MobileMenu/MobileMenu.tsx ***!
  \**********************************************/
/*! exports provided: MobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenu", function() { return MobileMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavLinks */ "./components/NavLinks/index.ts");
/* harmony import */ var _MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileMenu.module.scss */ "./components/MobileMenu/MobileMenu.module.scss");
/* harmony import */ var _MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\MobileMenu\\MobileMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const MobileMenu = () => {
  return __jsx("div", {
    className: _MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobileMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_NavLinks__WEBPACK_IMPORTED_MODULE_1__["NavLinks"], {
    orientation: "portrait",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/MobileMenu/index.ts":
/*!****************************************!*\
  !*** ./components/MobileMenu/index.ts ***!
  \****************************************/
/*! exports provided: MobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileMenu */ "./components/MobileMenu/MobileMenu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileMenu", function() { return _MobileMenu__WEBPACK_IMPORTED_MODULE_0__["MobileMenu"]; });



/***/ }),

/***/ "./components/Nav/Nav.module.scss":
/*!****************************************!*\
  !*** ./components/Nav/Nav.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "Nav_nav__3624A",
	"logoLink": "Nav_logoLink__2Qb0W",
	"parts-enter": "Nav_parts-enter__2DvpC",
	"parts-enter-active": "Nav_parts-enter-active__1dpzC",
	"parts-exit": "Nav_parts-exit__1My58",
	"parts-exit-active": "Nav_parts-exit-active__2FuM0",
	"links-enter": "Nav_links-enter__NE-78",
	"links-enter-active": "Nav_links-enter-active__1rHZ7",
	"links-exit": "Nav_links-exit__1U6uE",
	"links-exit-active": "Nav_links-exit-active__2B2hi",
	"search-enter": "Nav_search-enter__2qQDF",
	"search-enter-active": "Nav_search-enter-active__3HCkM",
	"search-exit": "Nav_search-exit__mizMw",
	"search-exit-active": "Nav_search-exit-active__1yy5q"
};


/***/ }),

/***/ "./components/Nav/Nav.tsx":
/*!********************************!*\
  !*** ./components/Nav/Nav.tsx ***!
  \********************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MobileHamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MobileHamburger */ "./components/MobileHamburger/index.ts");
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MobileMenu */ "./components/MobileMenu/index.ts");
/* harmony import */ var _DateParts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DateParts */ "./components/DateParts/index.ts");
/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SearchIcon */ "./components/SearchIcon/index.ts");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SearchBox */ "./components/SearchBox/index.ts");
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NavLinks */ "./components/NavLinks/index.ts");
/* harmony import */ var _PartsIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PartsIcon */ "./components/PartsIcon/index.ts");
/* harmony import */ var _AccountDisplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AccountDisplay */ "./components/AccountDisplay/index.ts");
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Nav.module.scss */ "./components/Nav/Nav.module.scss");
/* harmony import */ var _Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\Nav\\Nav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];












const Nav = () => {
  const [parts, displayParts] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    display: false
  });
  const [links, displayLinks] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    display: false
  });
  const [searchBox, displaySearchBox] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    display: false
  });

  const applyTransitions = modalWindow => {
    if (modalWindow === links) {
      return modalWindow.display ? __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
        timeout: 250,
        classNames: {
          enter: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["links-enter"]}`,
          enterActive: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["links-enter-active"]}`,
          exit: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["links-exit"]}`,
          exitActive: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["links-exit-active"]}`
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }, __jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_4__["MobileMenu"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      })) : null;
    } else if (modalWindow === parts) {
      return modalWindow.display ? __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
        timeout: 250,
        classNames: {
          enter: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["parts-enter"]}`,
          enterActive: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["parts-enter-active"]}`,
          exit: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["parts-exit"]}`,
          exitActive: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["parts-exit-active"]}`
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, __jsx(_DateParts__WEBPACK_IMPORTED_MODULE_5__["DateParts"], {
        location: "nav",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      })) : null;
    } else if (modalWindow === searchBox) {
      return modalWindow.display ? __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
        timeout: 250,
        classNames: {
          enter: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["search-enter"]}`,
          enterActive: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["search-enter-active"]}`,
          exit: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["search-exit"]}`,
          exitActive: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["search-exit-active"]}`
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_7__["SearchBox"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      })) : null;
    }
  };

  const applyModalTransitions = element => {
    if (element === "parts") {
      return parts.display ? __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
        timeout: 250,
        classNames: {
          enter: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["search-enter"]}`,
          enterActive: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["search-enter-active"]}`,
          exit: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["search-exit"]}`,
          exitActive: `${_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a["search-exit-active"]}`
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_7__["SearchBox"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      })) : null;
    } else if (element === "links") {} else if (element === "searchBox") {}
  };

  const stopWindowScroll = stop => {
    const body = document.querySelector("body");

    if (body) {
      return stop ? body.style.overflowY = "hidden" : body.style.overflowY = "scroll";
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 228.98 49.14",
    className: _Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.logoLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "AltLogoBlack"), __jsx("g", {
    id: "Layer_2",
    "data-name": "Layer 2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("g", {
    id: "Tracing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M17.66,49.14a31.52,31.52,0,0,1-4.74-.36,23.61,23.61,0,0,1-7.68-2.52A10,10,0,0,1,.14,41c-.72-2.1,1.5-4.74,3.66-3.66a4.41,4.41,0,0,1,1.26,1.32c2.16,2.64,5.52,3.78,8.76,4.32a22.83,22.83,0,0,0,7.86-.12c2.82-.6,5.52-2,6.6-4.8a6.31,6.31,0,0,0,.18-4.32c-1.38-4.08-6.48-5.58-10.8-6.48A45.6,45.6,0,0,1,9.2,24.78c-2.88-1.14-5.76-2.88-7.38-5.64-2-3.3-1.62-8.52-.42-11C5.06.84,12.14,0,16.28,0a25.19,25.19,0,0,1,8.94,1.56c3.3,1.26,5.88,3.42,6.66,5.7a2.85,2.85,0,0,1-.54,2.82,2.5,2.5,0,0,1-3.12.72,9,9,0,0,1-.84-.72,13.63,13.63,0,0,0-5.22-3.42,16.21,16.21,0,0,0-5.88-.78c-4.68,0-10,1.8-10,7.26,0,5,4.38,6.54,14.4,9C33.5,25.26,35.18,32.34,34,38.34,32.18,47.28,21.62,49.14,17.66,49.14Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M79.82,45.18a3,3,0,0,1-3,3H48.14a3,3,0,0,1-3-3V4a3,3,0,0,1,3-3H76.22a3,3,0,0,1,3,3,3,3,0,0,1-3,3H51.14V21.48h22.2a3,3,0,0,1,3,3,3,3,0,0,1-3,3H51.14v14.7H76.82A3,3,0,0,1,79.82,45.18Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M96.62,4V45.18a3,3,0,1,1-6,0V4a3,3,0,1,1,6,0Zm27.6,43.86a3.27,3.27,0,0,1-1.32.3,3,3,0,0,1-2.7-1.68,50.94,50.94,0,0,0-7.92-11.82c-3.54-3.78-6.24-6.6-10.32-8.94-.12-.06-.18-.12-.3-.18s-.24-.18-.36-.3a2.93,2.93,0,0,1-.78-1.62,3.11,3.11,0,0,1,.36-2,3.16,3.16,0,0,1,.72-.84l18.6-18.9a3,3,0,0,1,4.26.06,3,3,0,0,1-.06,4.2l-16.2,16.5c7.56,5.34,13.5,13.2,17.4,21.24A3,3,0,0,1,124.22,47.88Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M175.16,47.94a3.33,3.33,0,0,1-3.48-.78l-29-34.86V45.18a3,3,0,1,1-6,0V4A3,3,0,0,1,142,2.1l29,34.8V4a3,3,0,0,1,3-3,3,3,0,0,1,3,3V45.24A2.6,2.6,0,0,1,175.16,47.94Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M204.5,48.18H190.88a3,3,0,0,1-3.06-3V4a2.81,2.81,0,0,1,.9-2.1,3.2,3.2,0,0,1,2.16-.9h13.74A24.88,24.88,0,0,1,214,2.88a25.79,25.79,0,0,1,7.8,5.1,23.69,23.69,0,0,1,5.22,7.56A23.1,23.1,0,0,1,229,24.72a21.36,21.36,0,0,1-2,9,23.33,23.33,0,0,1-5.28,7.5,24.71,24.71,0,0,1-7.8,5.1A25.34,25.34,0,0,1,204.5,48.18Zm-10.62-6.06h10.74a19.81,19.81,0,0,0,7-1.44,18.31,18.31,0,0,0,5.88-3.78,19.75,19.75,0,0,0,4-5.64A15.49,15.49,0,0,0,223,24.72a16.58,16.58,0,0,0-1.44-6.78A18.61,18.61,0,0,0,204.62,7H193.88Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }))))), __jsx(_NavLinks__WEBPACK_IMPORTED_MODULE_8__["NavLinks"], {
    orientation: "landscape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx(_MobileHamburger__WEBPACK_IMPORTED_MODULE_3__["MobileHamburger"], {
    displayLinks: displayLinks,
    links: links,
    stopWindowScroll: stopWindowScroll,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx(_AccountDisplay__WEBPACK_IMPORTED_MODULE_10__["AccountDisplay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), __jsx(_SearchIcon__WEBPACK_IMPORTED_MODULE_6__["SearchIcon"], {
    displaySearchBox: displaySearchBox,
    searchBox: searchBox,
    stopWindowScroll: stopWindowScroll,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), __jsx(_PartsIcon__WEBPACK_IMPORTED_MODULE_9__["PartsIcon"], {
    displayParts: displayParts,
    parts: parts,
    stopWindowScroll: stopWindowScroll,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, applyTransitions(parts)), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, applyTransitions(links))), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, applyTransitions(searchBox)));
};

/***/ }),

/***/ "./components/Nav/index.ts":
/*!*********************************!*\
  !*** ./components/Nav/index.ts ***!
  \*********************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ "./components/Nav/Nav.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_0__["Nav"]; });



/***/ }),

/***/ "./components/NavLinks/NavLinks.module.scss":
/*!**************************************************!*\
  !*** ./components/NavLinks/NavLinks.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"linksWrapper": "NavLinks_linksWrapper__3yUet",
	"landscape": "NavLinks_landscape__36ayy"
};


/***/ }),

/***/ "./components/NavLinks/NavLinks.tsx":
/*!******************************************!*\
  !*** ./components/NavLinks/NavLinks.tsx ***!
  \******************************************/
/*! exports provided: NavLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLinks", function() { return NavLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavLinks.module.scss */ "./components/NavLinks/NavLinks.module.scss");
/* harmony import */ var _NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\NavLinks\\NavLinks.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const NavLinks = ({
  orientation
}) => {
  return __jsx("ul", {
    className: `${_NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linksWrapper} ${_NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[`${orientation}`]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/schedule",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Schedule")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "About")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Contact")));
};

/***/ }),

/***/ "./components/NavLinks/index.ts":
/*!**************************************!*\
  !*** ./components/NavLinks/index.ts ***!
  \**************************************/
/*! exports provided: NavLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLinks */ "./components/NavLinks/NavLinks.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLinks", function() { return _NavLinks__WEBPACK_IMPORTED_MODULE_0__["NavLinks"]; });



/***/ }),

/***/ "./components/PartsIcon/PartsIcon.module.scss":
/*!****************************************************!*\
  !*** ./components/PartsIcon/PartsIcon.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"partsIcon": "PartsIcon_partsIcon__H_iUT",
	"st0": "PartsIcon_st0__51A_B",
	"st1": "PartsIcon_st1__3_GdT",
	"st2": "PartsIcon_st2__Kqc7r"
};


/***/ }),

/***/ "./components/PartsIcon/PartsIcon.tsx":
/*!********************************************!*\
  !*** ./components/PartsIcon/PartsIcon.tsx ***!
  \********************************************/
/*! exports provided: PartsIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsIcon", function() { return PartsIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartsIcon.module.scss */ "./components/PartsIcon/PartsIcon.module.scss");
/* harmony import */ var _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\PartsIcon\\PartsIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const PartsIcon = ({
  displayParts,
  parts,
  stopWindowScroll
}) => {
  const handleClick = () => {
    if (parts.display) {
      return displayParts({
        display: false
      }), stopWindowScroll(false);
    } else {
      return displayParts({
        display: true
      }), stopWindowScroll(true);
    }
  };

  return __jsx("svg", {
    onClick: handleClick,
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 290 290",
    enableBackground: "new 0 0 290 290",
    className: _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.partsIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("path", {
    className: parts.display ? _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st1 : _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st0,
    style: {
      stroke: "black",
      strokeWidth: "0.5vh"
    },
    d: "M289,145c0,79.5-64.5,144-144,144c-39.8,0-72-32.2-72-72s32.2-72,72-72s72-32.2,72-72S184.8,1,145,1\r C224.5,1,289,65.5,289,145z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("path", {
    className: parts.display ? _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st2 : _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st1,
    style: {
      strokeWidth: "0.5vh"
    },
    d: "M116,284.5C51.3,271.1,2.5,213.6,2.5,145C2.5,66.4,66.4,2.5,145,2.5c38.9,0,70.5,31.6,70.5,70.5\r s-31.6,70.5-70.5,70.5c-40.5,0-73.5,33-73.5,73.5C71.5,247.2,89.8,273.3,116,284.5z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M145,4c38,0,69,31,69,69s-31,69-69,69c-41.4,0-75,33.6-75,75c0,26.5,13.8,49.8,34.6,63.2c-22.2-6.6-42.5-18.6-59.3-35.4\r C18.7,218.1,4,182.7,4,145s14.7-73.1,41.3-99.7S107.3,4,145,4 M145,1C65.5,1,1,65.5,1,145c0,79.5,64.5,144,144,144\r c-39.8,0-72-32.2-72-72s32.2-72,72-72s72-32.2,72-72S184.8,1,145,1L145,1z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx("path", {
    className: parts.display ? _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st1 : null,
    d: "M180.3,93.4v-4.7h-6.7v2.3h4.3v2.3h-24.3v-2.3h17.6v-2.3h-14.5V70.2l21.8-24.5c0.8-0.8,1.2-1.9,1.2-3.1\r c0-1.5-0.7-2.9-1.9-3.8c-0.8-0.6-1.7-0.9-2.7-0.9c-1.3,0-2.6,0.6-3.5,1.6l-5.1,5.8l1.8,1.6l5.1-5.8c0.4-0.5,1.1-0.8,1.7-0.8\r c0.5,0,0.9,0.1,1.3,0.4c0.6,0.4,0.9,1.1,0.9,1.8c0,0.6-0.2,1.1-0.6,1.5l-12.2,13.7l-3.4-3l5.4-6.2l-1.8-1.6L154.5,59h-4.9v-2.8\r c1.1-0.7,1.9-1.7,2.6-2.8h1.4c2.4,0,4.3-1.9,4.3-4.3v-3.1c0-7.1-5.8-12.9-12.9-12.9s-12.9,5.8-12.9,12.9V49c0,2.4,1.9,4.3,4.3,4.3\r h1.4c0.6,1.1,1.5,2.1,2.6,2.8v3l-4.3,0.7l0.4,2.3l4.6-0.8c1,1.1,2.4,1.8,3.9,1.8c1.6,0,3-0.7,4-1.9h6.5l4.2-4.8l3.4,3l-8.6,9.7\r v19.5h-3.1v4.7h-12.7v-4.7h-3.1V70.9h-2.5l-2.2,5.9l-4.3-1.7l3.3-9.1c0.6-1.7,2.1-3,4-3.3l0.2,0l-0.4-2.3l-0.2,0\r c-2.6,0.4-4.9,2.3-5.8,4.8l-8.6,23.7h-9.4v4.7H105V113h14.8v-2.3h-12.4V95.8h75.3v14.9h-60.5v2.3H185V93.4H180.3z M150.9,47.2\r l-2.5-3.3h-8.9c0.8-2.3,3-3.9,5.5-3.9c3.2,0,5.9,2.6,5.9,5.9V47.2z M155.6,49c0,1.1-0.9,2-2,2h-0.6c0.1-0.5,0.2-1.1,0.2-1.6\r c0,0,0-3.7,0-3.8h0.4c1.1,0,2,0.9,2,2V49z M145,35.3c5,0,9.2,3.5,10.3,8.2c-0.5-0.2-1.1-0.3-1.7-0.3h-0.9c-1.1-3.2-4.2-5.5-7.7-5.5\r s-6.6,2.3-7.7,5.5h-0.9c-0.6,0-1.2,0.1-1.7,0.3C135.8,38.8,140,35.3,145,35.3z M136.4,51c-1.1,0-2-0.9-2-2v-1.6c0-1.1,0.9-2,2-2\r h0.4c0,0.1,0,3.8,0,3.8c0,0.6,0.1,1.1,0.2,1.6H136.4z M139.1,49.4v-3.1h8.1l3.4,4.6c-0.7,2.5-3,4.4-5.7,4.4\r C141.8,55.2,139.1,52.6,139.1,49.4z M145,60.9c-0.9,0-1.7-0.4-2.3-1.1v-2.5c0.7,0.2,1.5,0.3,2.3,0.3s1.5-0.1,2.3-0.3v2.5\r C146.7,60.5,145.9,60.9,145,60.9z M133.2,77.4v11.4H129L133.2,77.4z M125.8,77.2l4.3,1.7l-3.6,9.8h-4.9L125.8,77.2z M112,91.1h24.3\r v2.3H112V91.1z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx("g", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("path", {
    className: parts.display ? _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st2 : _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st1,
    d: "M123.9,256.5c-0.7,0-1.1-0.5-1.1-1c-0.1-0.4,0.1-1.1,0.8-1.3l17.5-6.1v-5.4c0-0.4,0.3-0.7,0.7-0.7\r c0.4,0,0.7,0.3,0.7,0.7v4.9l1.2-0.4c0.4-0.2,0.7-0.2,0.8-0.2c0.2,0,0.4,0.1,0.8,0.2l1.2,0.4v-22.8l-0.6,0.1\r c-0.4,0.1-0.9,0.1-1.3,0.1c-0.5,0-1-0.1-1.6-0.2l-0.6-0.1V238c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-13.9l-0.4-0.3\r c-0.7-0.4-0.8-0.6-11.3-13.3c-3.4-4.1-7.8-9.5-13.7-16.6c-0.4-0.4-0.4-1-0.2-1.5c0.2-0.5,0.7-0.8,1.3-0.8h40.9l0.1-0.2\r c3.7-6.2,9.3-11,16.1-13.8c0.1,0,0.2-0.1,0.3-0.1c0.3,0,0.5,0.2,0.6,0.4c0.1,0.2,0.1,0.4,0,0.5c-0.1,0.2-0.2,0.3-0.4,0.4\r c-6.1,2.5-11.1,6.7-14.7,12l-0.5,0.8H172c0.6,0,1,0.3,1.3,0.8c0.2,0.5,0.2,1.1-0.2,1.5l-16.9,20.7c-0.1,0.2-0.3,0.2-0.5,0.2\r c0,0,0,0,0,0c-0.2,0-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.2,0-0.4,0.1-0.5l8-9.8h-3.6l-0.1,0.4c-0.5,2.9-3,4.9-5.9,4.9\r s-5.4-2.1-5.9-4.9l-0.1-0.4h-22.1l14.5,17.5c1.2,1.4,2.7,2.2,4.4,2.2c1.6,0,3.1-0.7,4.1-1.9c0.1-0.1,0.1-0.1,1.2-1.5l2.4-2.9\r c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.3,0.1,0.4,0.2c0.3,0.2,0.3,0.7,0.1,1c-0.6,0.8-1.1,1.4-1.6,2c-2.2,2.7-2.6,3.2-3.7,3.8l-0.2,0.1\r v23.9l3.7,1.3c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.2,0.1,0.3,0,0.5c-0.1,0.3-0.4,0.5-0.6,0.5c-0.1,0-0.2,0-0.2,0l-6.6-2.3\r c0,0-16.5,5.8-16.6,5.8l-2.8,1h38.7l-8.3-2.9c-0.2-0.1-0.3-0.2-0.4-0.3c-0.1-0.2-0.1-0.3,0-0.5c0.1-0.3,0.4-0.5,0.6-0.5\r c0.1,0,0.2,0,0.2,0l9.3,3.3c0.7,0.2,0.8,0.8,0.8,1.3c-0.1,0.4-0.4,1-1.1,1H123.9z M149.2,204.6c0.6,2,2.3,3.3,4.4,3.3\r c2.1,0,3.9-1.3,4.4-3.3l0.2-0.6H149L149.2,204.6z M158.2,193.2c-1.1,2.1-1.7,3.7-1.9,4.3l-0.1,0.4l0.3,0.2c1.5,0.9,2.6,2.3,2.9,4\r l0.1,0.4h4.7l7.9-9.6h-13.8L158.2,193.2z M153.6,198.7c-2.1,0-3.8,1.3-4.4,3.2l-0.2,0.7h9.2L158,202\r C157.4,200,155.7,198.7,153.6,198.7z M124.5,202.6h23.2l0.1-0.4c0.5-2.8,3-4.8,5.9-4.8c0.3,0,0.6,0,0.9,0.1l0.4,0.1l0.1-0.4\r c0.2-0.6,0.6-1.8,1.4-3.4l0.3-0.7h-40.3L124.5,202.6z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx("path", {
    className: parts.display ? _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st2 : _PartsIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.st1,
    d: "M174.1,178c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2c-6.2,2.5-11.3,6.8-14.9,12.2l-1,1.5h1.8H172\r c0.4,0,0.6,0.2,0.7,0.4h-1.6h-12.4h-0.6l-0.3,0.5c-1.1,2.1-1.7,3.8-1.9,4.4l-0.2,0.8l0.7,0.4c1.4,0.8,2.3,2.1,2.6,3.7l0.2,0.8h0.8\r h4.1h0.5l0.3-0.4l7-8.6l1-1.3c0.1,0.2,0.1,0.5-0.2,0.8l-16.9,20.7c0,0.1-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0c-0.1-0.1-0.1-0.2,0-0.3\r l7.4-9l1.3-1.6h-2.1H160h-0.8l-0.1,0.8c-0.5,2.6-2.7,4.5-5.4,4.5c-2.7,0-4.9-1.9-5.4-4.5l-0.1-0.8h-0.8h-20.6h-2.1l1.3,1.6\r l13.8,16.7c1.3,1.5,3,2.4,4.8,2.4c1.7,0,3.4-0.7,4.5-2.1c0.1-0.1,0.1-0.1,1.4-1.7l2.2-2.7c0-0.1,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0\r c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c-0.6,0.8-1.1,1.4-1.6,2c-2.2,2.7-2.5,3.1-3.5,3.7l-0.5,0.3v0.6v23.2v0.7l0.7,0.2l3.4,1.2\r c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0l-4.5-1.6l-2-0.7l-0.3-0.1l-0.3,0.1\r c0,0-16.3,5.7-16.4,5.7l-4.4,1.5c0-0.2,0.1-0.4,0.4-0.5l17.1-6l0.7-0.2v-0.7v-5c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2v4.2\r v1.4l1.3-0.5c0.2-0.1,0.4-0.1,0.6-0.2c0.3-0.1,0.6-0.2,0.7-0.2c0.1,0,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.2l1.3,0.5v-1.4v-21.5\r v-1.2l-1.2,0.2c-0.4,0.1-0.8,0.1-1.2,0.1c-0.5,0-1-0.1-1.4-0.2l-1.2-0.3v1.3V238c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2\r v-13.6v-0.5l-0.5-0.3c-0.1-0.1-0.1-0.1-0.2-0.1c-0.6-0.4-0.9-0.7-11.2-13.2c-3.4-4.1-7.8-9.5-13.7-16.6c-0.2-0.3-0.2-0.6-0.2-0.8\r l1.1,1.3l7.1,8.6l0.3,0.4h0.5h22.6h0.8l0.2-0.8c0.5-2.6,2.8-4.4,5.4-4.4c0.3,0,0.6,0,0.8,0.1l0.8,0.1l0.3-0.8\r c0.2-0.6,0.6-1.8,1.4-3.3l0.7-1.4H156h-38.4h-1.6c0.1-0.2,0.4-0.4,0.7-0.4h40.6h0.6l0.3-0.5C161.8,185.5,167.3,180.8,174.1,178\r C174,178,174,178,174.1,178 M148.3,203.1h1.4h7.8h1.4l-0.4-1.3c-0.7-2.2-2.6-3.6-4.9-3.6s-4.2,1.4-4.9,3.6L148.3,203.1\r M153.6,208.4c2.3,0,4.3-1.5,4.9-3.7l0.4-1.3h-1.3h-7.9h-1.3l0.4,1.3C149.3,207,151.3,208.4,153.6,208.4 M155.7,251.4\r C155.7,251.4,155.7,251.4,155.7,251.4l9.4,3.3c0.3,0.1,0.4,0.4,0.4,0.5l-4.4-1.5l-5.5-1.9c-0.1,0-0.1-0.1-0.1-0.2\r C155.5,251.5,155.6,251.4,155.7,251.4 M165.4,255.6c-0.1,0.2-0.2,0.4-0.6,0.4h-41c-0.4,0-0.5-0.2-0.6-0.4h4.7h32.8H165.4\r M174.1,177c-0.1,0-0.3,0-0.4,0.1c-7,2.9-12.6,7.8-16.3,14h-40.6c-1.6,0-2.5,1.9-1.5,3.2c25.7,31.2,23.9,29.2,25.3,30.1V238\r c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.5,1.2-1.2v-12.6c0.5,0.1,1.1,0.2,1.7,0.2c0.5,0,0.9,0,1.4-0.1v21.5c-0.9-0.3-1.2-0.5-1.5-0.5\r c-0.3,0-0.6,0.2-1.5,0.5v-4.2c0-0.7-0.5-1.2-1.2-1.2c-0.7,0-1.2,0.5-1.2,1.2v5l-17.1,6c-1.8,0.6-1.3,3.2,0.6,3.2h41\r c1.9,0,2.3-2.6,0.5-3.2l-9.3-3.3c-0.1,0-0.3-0.1-0.4-0.1c-0.5,0-0.9,0.3-1.1,0.8c-0.2,0.6,0.1,1.3,0.7,1.5l5.5,1.9h-32.8\r c0,0,16.4-5.7,16.4-5.7c3,1.1,0.2,0.1,6.5,2.3c0.1,0,0.3,0.1,0.4,0.1c0.5,0,0.9-0.3,1.1-0.8c0.2-0.6-0.1-1.3-0.7-1.5l-3.4-1.2\r v-23.2c1.4-0.8,1.7-1.4,5.4-5.9c0.4-0.5,0.3-1.2-0.2-1.7c-0.2-0.2-0.5-0.3-0.7-0.3c-0.3,0-0.7,0.1-0.9,0.4\r c-3.7,4.6-3.4,4.2-3.6,4.3c-0.9,1.1-2.3,1.7-3.8,1.7c-1.4,0-2.8-0.6-4-2l-13.8-16.7h20.6c0.5,3,3.2,5.3,6.4,5.3s5.8-2.3,6.4-5.3\r h2.2l-7.4,9c-0.4,0.5-0.3,1.2,0.2,1.7c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.7-0.1,0.9-0.4l16.9-20.7c1-1.3,0.1-3.1-1.5-3.1h-11.9\r c3.4-5.1,8.3-9.3,14.4-11.9c0.6-0.2,0.9-0.9,0.6-1.5C175,177.3,174.5,177,174.1,177L174.1,177z M160,202.1\r c-0.4-1.9-1.5-3.5-3.1-4.4c0.2-0.6,0.8-2.2,1.8-4.3h12.4l-7,8.6H160L160,202.1z M156,193.5c-0.8,1.6-1.2,2.8-1.4,3.5\r c-0.3-0.1-0.7-0.1-1-0.1c-3.1,0-5.8,2.2-6.3,5.2h-22.6l-7.1-8.6H156L156,193.5z M149.7,202.1c0.6-1.9,2.3-2.9,3.9-2.9\r c1.7,0,3.3,1,3.9,2.9H149.7L149.7,202.1z M153.6,207.4c-1.7,0-3.4-1-4-3h7.9C157,206.5,155.3,207.4,153.6,207.4L153.6,207.4z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./components/PartsIcon/index.ts":
/*!***************************************!*\
  !*** ./components/PartsIcon/index.ts ***!
  \***************************************/
/*! exports provided: PartsIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartsIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartsIcon */ "./components/PartsIcon/PartsIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartsIcon", function() { return _PartsIcon__WEBPACK_IMPORTED_MODULE_0__["PartsIcon"]; });



/***/ }),

/***/ "./components/ScheduleGrid/ScheduleGrid.module.scss":
/*!**********************************************************!*\
  !*** ./components/ScheduleGrid/ScheduleGrid.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"gridWrapper": "ScheduleGrid_gridWrapper__1bQZU",
	"innerGrid": "ScheduleGrid_innerGrid__mVsew"
};


/***/ }),

/***/ "./components/ScheduleGrid/ScheduleGrid.tsx":
/*!**************************************************!*\
  !*** ./components/ScheduleGrid/ScheduleGrid.tsx ***!
  \**************************************************/
/*! exports provided: ScheduleGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleGrid", function() { return ScheduleGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScheduleGrid_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleGrid.module.scss */ "./components/ScheduleGrid/ScheduleGrid.module.scss");
/* harmony import */ var _ScheduleGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ScheduleGrid_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\ScheduleGrid\\ScheduleGrid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const ScheduleGrid = () => {
  return __jsx("div", {
    className: _ScheduleGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.gridWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _ScheduleGrid_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.innerGrid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/ScheduleGrid/index.ts":
/*!******************************************!*\
  !*** ./components/ScheduleGrid/index.ts ***!
  \******************************************/
/*! exports provided: ScheduleGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduleGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleGrid */ "./components/ScheduleGrid/ScheduleGrid.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScheduleGrid", function() { return _ScheduleGrid__WEBPACK_IMPORTED_MODULE_0__["ScheduleGrid"]; });



/***/ }),

/***/ "./components/SearchBox/Logic/ScheduleGrid.ts":
/*!****************************************************!*\
  !*** ./components/SearchBox/Logic/ScheduleGrid.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScheduleGrid; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ScheduleGrid {
  constructor(unixStartDate, unixEndDate) {
    _defineProperty(this, "unixStartDate", void 0);

    _defineProperty(this, "unixEndDate", void 0);

    _defineProperty(this, "numberofSquares", void 0);

    _defineProperty(this, "templateAreas", void 0);

    _defineProperty(this, "startHour", void 0);

    _defineProperty(this, "hourDifference", void 0);

    _defineProperty(this, "columnAmount", void 0);

    _defineProperty(this, "endHour", void 0);

    _defineProperty(this, "hourStrings", void 0);

    this.unixStartDate = unixStartDate;
    this.unixEndDate = unixEndDate;
    this.startHour = 0;
    this.hourDifference = 0;
    this.templateAreas = "";
    this.columnAmount = 0;
    this.endHour = 0;
    this.hourStrings = [];
    this.numberofSquares = 0;
  }

  setSquares() {
    const timeDifference = this.unixEndDate - this.unixStartDate;
    const hours = Math.floor(timeDifference / 3600);
    const numColumns = hours * 2 + 4;
    const numberOfSquares = numColumns * 5;
    this.numberofSquares = numberOfSquares;
    this.columnAmount = numColumns;
    this.hourDifference = hours;
  }

  setHours() {
    const startDate = new Date(this.unixStartDate * 1000);
    const endDate = new Date(this.unixEndDate * 1000);
    const startHour = startDate.getHours();
    const endHour = endDate.getHours();
    this.startHour = startHour;
    this.endHour = endHour;
  }

  setGridTemplate() {
    const square = "square ";
    const rowString = `"${square.repeat(this.columnAmount - 1)} square"`;
    this.templateAreas = `${rowString.repeat(5)}`;
  }

  setHoursHeader() {
    let hourCounter = 0;
    let startHourCounter = this.startHour;
    const hourNumbers = [];

    while (hourCounter <= this.hourDifference) {
      hourNumbers.push(startHourCounter);
      hourCounter++;
      startHourCounter < 24 ? startHourCounter++ : startHourCounter = 1;
    }

    const hourStrings = [];
    hourNumbers.forEach(hour => {
      if (hour === 24) {
        return hourStrings.push("12:00 a.m");
      } else if (hour === 12) {
        return hourStrings.push("12:00 p.m");
      } else {
        return hour < 12 ? hourStrings.push(`${hour}:00 a.m`) : hourStrings.push(`${hour - 12}:00 p.m`);
      }
    });
    this.hourStrings = hourStrings;
  }

  setGrid() {
    this.setSquares();
    this.setHours();
    this.setGridTemplate();
    this.setHoursHeader();
  }

}

/***/ }),

/***/ "./components/SearchBox/Parts/EventsInput/EventsInput.module.scss":
/*!************************************************************************!*\
  !*** ./components/SearchBox/Parts/EventsInput/EventsInput.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"events": "EventsInput_events__1rxHA"
};


/***/ }),

/***/ "./components/SearchBox/Parts/EventsInput/EventsInput.tsx":
/*!****************************************************************!*\
  !*** ./components/SearchBox/Parts/EventsInput/EventsInput.tsx ***!
  \****************************************************************/
/*! exports provided: EventsInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsInput", function() { return EventsInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventsInput_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventsInput.module.scss */ "./components/SearchBox/Parts/EventsInput/EventsInput.module.scss");
/* harmony import */ var _EventsInput_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EventsInput_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchBox\\Parts\\EventsInput\\EventsInput.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const EventsInput = ({
  handleInputChange,
  eventsCategory
}) => {
  const handleChange = (event, field) => {
    return handleInputChange(field, event.target.value);
  };

  return __jsx("div", {
    className: _EventsInput_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.events,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "What type of events are you looking for?"), __jsx("select", {
    name: "",
    id: "",
    value: eventsCategory,
    onChange: event => handleChange(event, "eventsCategory"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("optgroup", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Category (Optional)"), __jsx("option", {
    value: "All",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "All"), __jsx("option", {
    value: "Music",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Music"), __jsx("option", {
    value: "Nightlife",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Nightlife"), __jsx("option", {
    value: "Food & Drink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Food & Drink"), __jsx("option", {
    value: "Film",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Film"), __jsx("option", {
    value: "Sports & Active Lifestyle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Sports & Active Lifestyle"), __jsx("option", {
    value: "Festivals & Fairs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Festivals & Fairs"), __jsx("option", {
    value: "Arts & Theatre",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Arts & Theatre"), __jsx("option", {
    value: "Other",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Other"))));
};

/***/ }),

/***/ "./components/SearchBox/Parts/EventsInput/index.ts":
/*!*********************************************************!*\
  !*** ./components/SearchBox/Parts/EventsInput/index.ts ***!
  \*********************************************************/
/*! exports provided: EventsInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventsInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventsInput */ "./components/SearchBox/Parts/EventsInput/EventsInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsInput", function() { return _EventsInput__WEBPACK_IMPORTED_MODULE_0__["EventsInput"]; });



/***/ }),

/***/ "./components/SearchBox/Parts/PlacesInput/PlacesInput.module.scss":
/*!************************************************************************!*\
  !*** ./components/SearchBox/Parts/PlacesInput/PlacesInput.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"places": "PlacesInput_places__2Ok5m"
};


/***/ }),

/***/ "./components/SearchBox/Parts/PlacesInput/PlacesInput.tsx":
/*!****************************************************************!*\
  !*** ./components/SearchBox/Parts/PlacesInput/PlacesInput.tsx ***!
  \****************************************************************/
/*! exports provided: PlacesInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesInput", function() { return PlacesInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlacesInput_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlacesInput.module.scss */ "./components/SearchBox/Parts/PlacesInput/PlacesInput.module.scss");
/* harmony import */ var _PlacesInput_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PlacesInput_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchBox\\Parts\\PlacesInput\\PlacesInput.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const PlacesInput = ({
  handleInputChange,
  placeType
}) => {
  const handleChange = (event, field) => {
    return handleInputChange(field, event.target.value);
  };

  return __jsx("div", {
    className: _PlacesInput_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.places,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "What type of places are you looking for?"), __jsx("input", {
    placeholder: "Bars, Restaurants, Sushi, etc.",
    type: "text",
    value: placeType,
    onChange: event => handleChange(event, "placeType"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Search"));
};

/***/ }),

/***/ "./components/SearchBox/Parts/PlacesInput/index.ts":
/*!*********************************************************!*\
  !*** ./components/SearchBox/Parts/PlacesInput/index.ts ***!
  \*********************************************************/
/*! exports provided: PlacesInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlacesInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlacesInput */ "./components/SearchBox/Parts/PlacesInput/PlacesInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlacesInput", function() { return _PlacesInput__WEBPACK_IMPORTED_MODULE_0__["PlacesInput"]; });



/***/ }),

/***/ "./components/SearchBox/Parts/SearchSelector/SearchSelector.module.scss":
/*!******************************************************************************!*\
  !*** ./components/SearchBox/Parts/SearchSelector/SearchSelector.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchSelector": "SearchSelector_searchSelector__2UIXF",
	"selector": "SearchSelector_selector__2rg4O",
	"allSVG": "SearchSelector_allSVG__1kSql",
	"highlighted": "SearchSelector_highlighted__qFCNY"
};


/***/ }),

/***/ "./components/SearchBox/Parts/SearchSelector/SearchSelector.tsx":
/*!**********************************************************************!*\
  !*** ./components/SearchBox/Parts/SearchSelector/SearchSelector.tsx ***!
  \**********************************************************************/
/*! exports provided: SearchSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSelector", function() { return SearchSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchSelector.module.scss */ "./components/SearchBox/Parts/SearchSelector/SearchSelector.module.scss");
/* harmony import */ var _SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchBox\\Parts\\SearchSelector\\SearchSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SearchSelector = ({
  searchType,
  handleInputChange
}) => {
  const [highlight, setHighlight] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    all: false,
    places: false,
    events: false
  });
  return __jsx("div", {
    className: _SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchSelector,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: `${_SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selector} ${highlight.all ? _SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.highlighted : null}`,
    onMouseEnter: () => setHighlight({
      all: true,
      places: false,
      events: false
    }),
    onClick: () => handleInputChange("searchType", "ALL"),
    onMouseLeave: () => setHighlight(state => _objectSpread(_objectSpread({}, state), {}, {
      all: false
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.allSVG,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("svg", {
    id: "ALL",
    height: "512pt",
    viewBox: "-63 0 512 512.00026",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("path", {
    id: "ALL",
    d: "m386.640625 4.683594c-1.582031-3.855469-5.996094-5.699219-9.851563-4.117188-44.726562 18.363282-80.808593 49.921875-104.4375 89.832032h-260.015624c-10.308594 0-16.164063 12.070312-9.5 20.171874 164.617187 199.570313 153.222656 187.136719 161.671874 192.632813v87.15625c0 4.167969 3.382813 7.546875 7.550782 7.546875 4.164062 0 7.546875-3.378906 7.546875-7.546875v-80.726563c6.378906 1.488282 13.128906 1.617188 19.628906.363282v137.554687c-11.289063-3.957031-8.1875-4.011719-19.628906 0v-26.996093c0-4.167969-3.382813-7.546876-7.546875-7.546876-4.167969 0-7.550782 3.378907-7.550782 7.546876v32.28125l-109.746093 38.460937c-11.257813 3.953125-8.484375 20.703125 3.523437 20.703125h262.269532c12.027343 0 14.757812-16.757812 3.519531-20.703125l-59.777344-20.949219c-3.9375-1.378906-8.242187.695313-9.621094 4.621094-1.378906 3.9375.691407 8.246094 4.628907 9.625l35.117187 12.308594h-210.015625c.003906 0 105.011719-36.789063 105.011719-36.789063 19.40625 6.808594 1.128906.394531 41.382812 14.492188 3.933594 1.378906 8.242188-.691407 9.621094-4.628907 1.378906-3.925781-.695313-8.234374-4.628906-9.613281l-21.460938-7.519531v-148.585938c9.050781-5.375 10.914063-8.859374 34.445313-37.695312 2.636718-3.230469 2.152344-7.980469-1.078125-10.617188-3.230469-2.636718-7.980469-2.15625-10.621094 1.074219-23.898437 29.28125-21.878906 26.828125-22.746094 27.832031-11.640625 13.285157-34.421875 16.652344-49.824219-2.011718l-88.28125-107.027344h131.785157c3.417969 19.417969 20.398437 34.222656 40.78125 34.222656 20.382812 0 37.359375-14.804687 40.777343-34.222656h13.769532l-47.175782 57.808594c-2.625 3.230468-2.152343 7.988281 1.078126 10.617187 3.230468 2.636719 7.992187 2.152344 10.628906-1.066406l108.246094-132.652344c6.585937-8.0625.769531-20.121093-9.542969-20.121093h-76.433594c21.53125-32.914063 53.078125-59.726563 92.382813-75.863282 3.859374-1.582031 5.699218-5.992187 4.117187-9.851562zm-178.5 156.03125h-144.367187l-45.546876-55.21875h245.996094c-4.933594 10.144531-7.738281 18.066406-9.054687 22.199218-22.238281-3.453124-42.84375 11.457032-47.027344 33.019532zm65.753906 0h-50.207031c7.722656-24.472656 42.484375-24.472656 50.207031 0zm-50.414062 15.097656h50.621093c-7.230468 25.398438-43.382812 25.421875-50.621093 0zm137.242187-70.316406-45.0625 55.21875h-26.21875c-2.320312-11.957032-9.800781-22.085938-20.023437-27.984375 1.28125-4.066407 4.828125-14.238281 11.769531-27.234375zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  })), __jsx("svg", {
    height: "512pt",
    viewBox: "0 0 512 512",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg",
    id: "ALL",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("path", {
    id: "ALL",
    d: "m481.941406 386.753906v-30.058594h-42.582031v15.03125h27.550781v15.027344h-155.300781v-15.027344h112.71875v-15.03125h-92.679687v-118.882812l139.203124-156.9375c4.808594-5.425781 7.460938-12.398438 7.460938-19.632812 0-9.492188-4.589844-18.472657-12.277344-24.027344-5.078125-3.667969-11.070312-5.605469-17.324218-5.605469-8.515626 0-16.617188 3.664063-22.238282 10.046875l-32.707031 37.152344 11.28125 9.929687 32.707031-37.152343c2.765625-3.144532 6.761719-4.945313 10.957032-4.945313 3.074218 0 6.023437.953125 8.527343 2.761719 3.839844 2.773437 6.042969 7.089844 6.042969 11.839844 0 3.554687-1.304688 6.984374-3.671875 9.660156l-77.765625 87.667968-21.535156-19.003906 34.808594-39.546875-11.28125-9.929687-67.105469 76.234375h-31.171875v-18.132813c6.761718-4.609375 12.394531-10.761718 16.398437-17.9375h9.152344c15.191406 0 27.550781-12.359375 27.550781-27.554687v-20.039063c0-45.578125-37.082031-82.660156-82.660156-82.660156s-82.660156 37.082031-82.660156 82.660156v20.039063c0 15.195312 12.359375 27.554687 27.550781 27.554687h9.152344c4.003906 7.175782 9.636719 13.328125 16.398437 17.9375v19.269532l-27.359375 4.496093 2.441407 14.832031 29.214843-4.804687c6.347657 7.203125 15.464844 11.394531 25.261719 11.394531 10.082031 0 19.460938-4.429687 25.824219-12.023437h41.699219l26.851562-30.507813 21.496094 18.96875-55.253906 62.289063v124.589843h-20.039063v30.058594h-81.15625v-30.058594h-20.039063v-114.222656h-15.761718l-13.800782 37.457032-27.316406-11.054688 21.335938-58.433594c4.027344-11.027344 13.722656-19.058594 25.304687-20.960937l1.546875-.257813-2.4375-14.828125-1.546875.253907c-16.929687 2.78125-31.101562 14.523437-36.984375 30.636718l-55.292968 151.410156h-60.371094v30.058594h-30.058594v125.246094h94.683594v-15.03125h-79.652344v-95.183594h481.9375v95.183594h-387.253906v15.03125h402.285156v-125.246094zm-188.367187-295.722656-15.800781-20.894531h-57.191407c5.167969-14.578125 19.089844-25.046875 35.417969-25.046875 20.71875 0 37.574219 16.851562 37.574219 37.570312zm30.058593 11.667969c0 6.90625-5.617187 12.527343-12.523437 12.527343h-3.566406c.695312-3.402343 1.058593-6.921874 1.058593-10.523437 0 0-.023437-23.714844-.0625-24.546875h2.570313c6.90625 0 12.523437 5.617188 12.523437 12.523438zm-67.632812-87.667969c32.011719 0 58.878906 22.359375 65.855469 52.277344-3.304688-1.402344-6.9375-2.179688-10.746094-2.179688h-5.523437c-7.238282-20.410156-26.726563-35.070312-49.585938-35.070312s-42.347656 14.660156-49.585938 35.070312h-5.523437c-3.808594 0-7.441406.777344-10.746094 2.179688 6.976563-29.917969 33.84375-52.277344 65.855469-52.277344zm-55.109375 100.195312c-6.90625 0-12.523437-5.621093-12.523437-12.527343v-10.019531c0-6.90625 5.617187-12.523438 12.523437-12.523438h2.570313c-.039063.832031-.0625 24.546875-.0625 24.546875 0 3.601563.363281 7.121094 1.058593 10.523437zm17.535156-10.523437v-19.535156h51.871094l22.027344 29.136719c-4.25 16.082031-18.921875 27.972656-36.324219 27.972656-20.71875 0-37.574219-16.855469-37.574219-37.574219zm37.574219 73.644531c-5.707031 0-10.996094-2.5625-14.527344-6.933594v-16.164062c4.617188 1.328125 9.488282 2.058594 14.527344 2.058594s9.910156-.730469 14.527344-2.058594v16.164062c-3.53125 4.371094-8.820313 6.933594-14.527344 6.933594zm-75.648438 105.617188v72.730468h-26.796874zm-47.007812-.964844 27.277344 11.039062-23.082032 62.65625h-31.109374zm-88.253906 88.726562h155.300781v15.027344h-155.300781zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("path", {
    id: "ALL",
    d: "m173.339844 421.824219v55.105469h165.320312v-55.105469zm100.195312 15.027343v25.050782h-35.070312v-25.050782zm-85.167968 0h35.070312v25.050782h-35.070312zm135.265624 25.050782h-35.070312v-25.050782h35.070312zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("path", {
    id: "ALL",
    d: "m143.28125 471.921875h-15.03125v-15.03125h15.03125zm0-30.058594h-15.03125v-15.03125h15.03125zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("path", {
    id: "ALL",
    d: "m383.75 471.921875h-15.03125v-15.03125h15.03125zm0-30.058594h-15.03125v-15.03125h15.03125zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("path", {
    id: "ALL",
    d: "m300.585938 314.113281h-15.027344v-15.027343h15.027344zm0-30.058593h-15.027344v-40.078126h15.027344zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }))), __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "All")), __jsx("button", {
    className: `${_SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selector} ${highlight.places ? _SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.highlighted : null}`,
    onMouseEnter: () => setHighlight({
      all: false,
      places: true,
      events: false
    }),
    onMouseLeave: () => setHighlight(state => _objectSpread(_objectSpread({}, state), {}, {
      places: false
    })),
    onClick: () => handleInputChange("searchType", "PLACES"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("svg", {
    height: "512pt",
    viewBox: "-63 0 512 512.00026",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("path", {
    id: "PLACES",
    d: "m386.640625 4.683594c-1.582031-3.855469-5.996094-5.699219-9.851563-4.117188-44.726562 18.363282-80.808593 49.921875-104.4375 89.832032h-260.015624c-10.308594 0-16.164063 12.070312-9.5 20.171874 164.617187 199.570313 153.222656 187.136719 161.671874 192.632813v87.15625c0 4.167969 3.382813 7.546875 7.550782 7.546875 4.164062 0 7.546875-3.378906 7.546875-7.546875v-80.726563c6.378906 1.488282 13.128906 1.617188 19.628906.363282v137.554687c-11.289063-3.957031-8.1875-4.011719-19.628906 0v-26.996093c0-4.167969-3.382813-7.546876-7.546875-7.546876-4.167969 0-7.550782 3.378907-7.550782 7.546876v32.28125l-109.746093 38.460937c-11.257813 3.953125-8.484375 20.703125 3.523437 20.703125h262.269532c12.027343 0 14.757812-16.757812 3.519531-20.703125l-59.777344-20.949219c-3.9375-1.378906-8.242187.695313-9.621094 4.621094-1.378906 3.9375.691407 8.246094 4.628907 9.625l35.117187 12.308594h-210.015625c.003906 0 105.011719-36.789063 105.011719-36.789063 19.40625 6.808594 1.128906.394531 41.382812 14.492188 3.933594 1.378906 8.242188-.691407 9.621094-4.628907 1.378906-3.925781-.695313-8.234374-4.628906-9.613281l-21.460938-7.519531v-148.585938c9.050781-5.375 10.914063-8.859374 34.445313-37.695312 2.636718-3.230469 2.152344-7.980469-1.078125-10.617188-3.230469-2.636718-7.980469-2.15625-10.621094 1.074219-23.898437 29.28125-21.878906 26.828125-22.746094 27.832031-11.640625 13.285157-34.421875 16.652344-49.824219-2.011718l-88.28125-107.027344h131.785157c3.417969 19.417969 20.398437 34.222656 40.78125 34.222656 20.382812 0 37.359375-14.804687 40.777343-34.222656h13.769532l-47.175782 57.808594c-2.625 3.230468-2.152343 7.988281 1.078126 10.617187 3.230468 2.636719 7.992187 2.152344 10.628906-1.066406l108.246094-132.652344c6.585937-8.0625.769531-20.121093-9.542969-20.121093h-76.433594c21.53125-32.914063 53.078125-59.726563 92.382813-75.863282 3.859374-1.582031 5.699218-5.992187 4.117187-9.851562zm-178.5 156.03125h-144.367187l-45.546876-55.21875h245.996094c-4.933594 10.144531-7.738281 18.066406-9.054687 22.199218-22.238281-3.453124-42.84375 11.457032-47.027344 33.019532zm65.753906 0h-50.207031c7.722656-24.472656 42.484375-24.472656 50.207031 0zm-50.414062 15.097656h50.621093c-7.230468 25.398438-43.382812 25.421875-50.621093 0zm137.242187-70.316406-45.0625 55.21875h-26.21875c-2.320312-11.957032-9.800781-22.085938-20.023437-27.984375 1.28125-4.066407 4.828125-14.238281 11.769531-27.234375zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  })), __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Places")), __jsx("button", {
    className: `${_SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selector} ${highlight.events ? _SearchSelector_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.highlighted : null}`,
    onMouseEnter: () => setHighlight({
      all: false,
      places: false,
      events: true
    }),
    onMouseLeave: () => setHighlight(state => _objectSpread(_objectSpread({}, state), {}, {
      events: false
    })),
    onClick: () => handleInputChange("searchType", "EVENTS"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("svg", {
    height: "512pt",
    viewBox: "0 0 512 512",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("path", {
    id: "EVENTS",
    d: "m481.941406 386.753906v-30.058594h-42.582031v15.03125h27.550781v15.027344h-155.300781v-15.027344h112.71875v-15.03125h-92.679687v-118.882812l139.203124-156.9375c4.808594-5.425781 7.460938-12.398438 7.460938-19.632812 0-9.492188-4.589844-18.472657-12.277344-24.027344-5.078125-3.667969-11.070312-5.605469-17.324218-5.605469-8.515626 0-16.617188 3.664063-22.238282 10.046875l-32.707031 37.152344 11.28125 9.929687 32.707031-37.152343c2.765625-3.144532 6.761719-4.945313 10.957032-4.945313 3.074218 0 6.023437.953125 8.527343 2.761719 3.839844 2.773437 6.042969 7.089844 6.042969 11.839844 0 3.554687-1.304688 6.984374-3.671875 9.660156l-77.765625 87.667968-21.535156-19.003906 34.808594-39.546875-11.28125-9.929687-67.105469 76.234375h-31.171875v-18.132813c6.761718-4.609375 12.394531-10.761718 16.398437-17.9375h9.152344c15.191406 0 27.550781-12.359375 27.550781-27.554687v-20.039063c0-45.578125-37.082031-82.660156-82.660156-82.660156s-82.660156 37.082031-82.660156 82.660156v20.039063c0 15.195312 12.359375 27.554687 27.550781 27.554687h9.152344c4.003906 7.175782 9.636719 13.328125 16.398437 17.9375v19.269532l-27.359375 4.496093 2.441407 14.832031 29.214843-4.804687c6.347657 7.203125 15.464844 11.394531 25.261719 11.394531 10.082031 0 19.460938-4.429687 25.824219-12.023437h41.699219l26.851562-30.507813 21.496094 18.96875-55.253906 62.289063v124.589843h-20.039063v30.058594h-81.15625v-30.058594h-20.039063v-114.222656h-15.761718l-13.800782 37.457032-27.316406-11.054688 21.335938-58.433594c4.027344-11.027344 13.722656-19.058594 25.304687-20.960937l1.546875-.257813-2.4375-14.828125-1.546875.253907c-16.929687 2.78125-31.101562 14.523437-36.984375 30.636718l-55.292968 151.410156h-60.371094v30.058594h-30.058594v125.246094h94.683594v-15.03125h-79.652344v-95.183594h481.9375v95.183594h-387.253906v15.03125h402.285156v-125.246094zm-188.367187-295.722656-15.800781-20.894531h-57.191407c5.167969-14.578125 19.089844-25.046875 35.417969-25.046875 20.71875 0 37.574219 16.851562 37.574219 37.570312zm30.058593 11.667969c0 6.90625-5.617187 12.527343-12.523437 12.527343h-3.566406c.695312-3.402343 1.058593-6.921874 1.058593-10.523437 0 0-.023437-23.714844-.0625-24.546875h2.570313c6.90625 0 12.523437 5.617188 12.523437 12.523438zm-67.632812-87.667969c32.011719 0 58.878906 22.359375 65.855469 52.277344-3.304688-1.402344-6.9375-2.179688-10.746094-2.179688h-5.523437c-7.238282-20.410156-26.726563-35.070312-49.585938-35.070312s-42.347656 14.660156-49.585938 35.070312h-5.523437c-3.808594 0-7.441406.777344-10.746094 2.179688 6.976563-29.917969 33.84375-52.277344 65.855469-52.277344zm-55.109375 100.195312c-6.90625 0-12.523437-5.621093-12.523437-12.527343v-10.019531c0-6.90625 5.617187-12.523438 12.523437-12.523438h2.570313c-.039063.832031-.0625 24.546875-.0625 24.546875 0 3.601563.363281 7.121094 1.058593 10.523437zm17.535156-10.523437v-19.535156h51.871094l22.027344 29.136719c-4.25 16.082031-18.921875 27.972656-36.324219 27.972656-20.71875 0-37.574219-16.855469-37.574219-37.574219zm37.574219 73.644531c-5.707031 0-10.996094-2.5625-14.527344-6.933594v-16.164062c4.617188 1.328125 9.488282 2.058594 14.527344 2.058594s9.910156-.730469 14.527344-2.058594v16.164062c-3.53125 4.371094-8.820313 6.933594-14.527344 6.933594zm-75.648438 105.617188v72.730468h-26.796874zm-47.007812-.964844 27.277344 11.039062-23.082032 62.65625h-31.109374zm-88.253906 88.726562h155.300781v15.027344h-155.300781zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }), __jsx("path", {
    id: "EVENTS",
    d: "m173.339844 421.824219v55.105469h165.320312v-55.105469zm100.195312 15.027343v25.050782h-35.070312v-25.050782zm-85.167968 0h35.070312v25.050782h-35.070312zm135.265624 25.050782h-35.070312v-25.050782h35.070312zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }), __jsx("path", {
    id: "EVENTS",
    d: "m143.28125 471.921875h-15.03125v-15.03125h15.03125zm0-30.058594h-15.03125v-15.03125h15.03125zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), __jsx("path", {
    id: "EVENTS",
    d: "m383.75 471.921875h-15.03125v-15.03125h15.03125zm0-30.058594h-15.03125v-15.03125h15.03125zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }), __jsx("path", {
    id: "EVENTS",
    d: "m300.585938 314.113281h-15.027344v-15.027343h15.027344zm0-30.058593h-15.027344v-40.078126h15.027344zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  })), __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, "Events")));
};

/***/ }),

/***/ "./components/SearchBox/Parts/SearchSelector/index.ts":
/*!************************************************************!*\
  !*** ./components/SearchBox/Parts/SearchSelector/index.ts ***!
  \************************************************************/
/*! exports provided: SearchSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchSelector */ "./components/SearchBox/Parts/SearchSelector/SearchSelector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchSelector", function() { return _SearchSelector__WEBPACK_IMPORTED_MODULE_0__["SearchSelector"]; });



/***/ }),

/***/ "./components/SearchBox/Parts/WhenInput/WhenInput.module.scss":
/*!********************************************************************!*\
  !*** ./components/SearchBox/Parts/WhenInput/WhenInput.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"when": "WhenInput_when__2WG27",
	"to": "WhenInput_to__2hwtq",
	"from": "WhenInput_from__15wDW"
};


/***/ }),

/***/ "./components/SearchBox/Parts/WhenInput/WhenInput.tsx":
/*!************************************************************!*\
  !*** ./components/SearchBox/Parts/WhenInput/WhenInput.tsx ***!
  \************************************************************/
/*! exports provided: WhenInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhenInput", function() { return WhenInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WhenInput_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WhenInput.module.scss */ "./components/SearchBox/Parts/WhenInput/WhenInput.module.scss");
/* harmony import */ var _WhenInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WhenInput_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchBox\\Parts\\WhenInput\\WhenInput.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const WhenInput = ({
  handleQueryDate,
  startDate,
  endDate
}) => {
  const handleDateChange = (field, date) => {
    return handleQueryDate(field, date);
  };

  const today = new Date();
  return __jsx("div", {
    className: _WhenInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.when,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "When are you meeting?"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _WhenInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.from,
    placeholderText: "Start time",
    autoComplete: "off",
    selected: startDate,
    minDate: today,
    dateFormat: "Pp",
    showTimeSelect: true,
    onChange: date => handleDateChange("startDate", date),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _WhenInput_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.to,
    placeholderText: "End Time",
    autoComplete: "off",
    minDate: startDate ? startDate : today,
    selected: endDate ? endDate : startDate,
    dateFormat: "Pp",
    showTimeSelect: true,
    onChange: date => handleDateChange("endDate", date),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/SearchBox/Parts/WhenInput/index.ts":
/*!*******************************************************!*\
  !*** ./components/SearchBox/Parts/WhenInput/index.ts ***!
  \*******************************************************/
/*! exports provided: WhenInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WhenInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WhenInput */ "./components/SearchBox/Parts/WhenInput/WhenInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhenInput", function() { return _WhenInput__WEBPACK_IMPORTED_MODULE_0__["WhenInput"]; });



/***/ }),

/***/ "./components/SearchBox/Parts/WhereInput/WhereInput.module.scss":
/*!**********************************************************************!*\
  !*** ./components/SearchBox/Parts/WhereInput/WhereInput.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"where": "WhereInput_where__1i22D"
};


/***/ }),

/***/ "./components/SearchBox/Parts/WhereInput/WhereInput.tsx":
/*!**************************************************************!*\
  !*** ./components/SearchBox/Parts/WhereInput/WhereInput.tsx ***!
  \**************************************************************/
/*! exports provided: WhereInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhereInput", function() { return WhereInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WhereInput_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhereInput.module.scss */ "./components/SearchBox/Parts/WhereInput/WhereInput.module.scss");
/* harmony import */ var _WhereInput_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WhereInput_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchBox\\Parts\\WhereInput\\WhereInput.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const WhereInput = ({
  location,
  handleInputChange,
  radius
}) => {
  const handleChange = (event, field) => {
    return handleInputChange(field, event.target.value);
  };

  return __jsx("div", {
    className: _WhereInput_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.where,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Where are you meeting?"), __jsx("input", {
    type: "text",
    placeholder: "Los Angeles / 90015",
    value: location,
    onChange: event => handleChange(event, "location"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("select", {
    name: "radius",
    value: radius,
    onChange: event => handleChange(event, "radius"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("optgroup", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Radius..."), __jsx("option", {
    value: "1610",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Within 1 mile"), __jsx("option", {
    value: "8050",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Within 5 miles"), __jsx("option", {
    value: "16100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Within 10 miles"), __jsx("option", {
    value: "40250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Within 25 miles"))));
};

/***/ }),

/***/ "./components/SearchBox/Parts/WhereInput/index.ts":
/*!********************************************************!*\
  !*** ./components/SearchBox/Parts/WhereInput/index.ts ***!
  \********************************************************/
/*! exports provided: WhereInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WhereInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WhereInput */ "./components/SearchBox/Parts/WhereInput/WhereInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhereInput", function() { return _WhereInput__WEBPACK_IMPORTED_MODULE_0__["WhereInput"]; });



/***/ }),

/***/ "./components/SearchBox/Parts/index.ts":
/*!*********************************************!*\
  !*** ./components/SearchBox/Parts/index.ts ***!
  \*********************************************/
/*! exports provided: SearchSelector, WhereInput, WhenInput, EventsInput, PlacesInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchSelector */ "./components/SearchBox/Parts/SearchSelector/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchSelector", function() { return _SearchSelector__WEBPACK_IMPORTED_MODULE_0__["SearchSelector"]; });

/* harmony import */ var _WhereInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhereInput */ "./components/SearchBox/Parts/WhereInput/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhereInput", function() { return _WhereInput__WEBPACK_IMPORTED_MODULE_1__["WhereInput"]; });

/* harmony import */ var _WhenInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WhenInput */ "./components/SearchBox/Parts/WhenInput/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhenInput", function() { return _WhenInput__WEBPACK_IMPORTED_MODULE_2__["WhenInput"]; });

/* harmony import */ var _EventsInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventsInput */ "./components/SearchBox/Parts/EventsInput/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsInput", function() { return _EventsInput__WEBPACK_IMPORTED_MODULE_3__["EventsInput"]; });

/* harmony import */ var _PlacesInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlacesInput */ "./components/SearchBox/Parts/PlacesInput/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlacesInput", function() { return _PlacesInput__WEBPACK_IMPORTED_MODULE_4__["PlacesInput"]; });







/***/ }),

/***/ "./components/SearchBox/SearchBox.module.scss":
/*!****************************************************!*\
  !*** ./components/SearchBox/SearchBox.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBox": "SearchBox_searchBox__3awOS",
	"searchButton": "SearchBox_searchButton__2okpi"
};


/***/ }),

/***/ "./components/SearchBox/SearchBox.tsx":
/*!********************************************!*\
  !*** ./components/SearchBox/SearchBox.tsx ***!
  \********************************************/
/*! exports provided: SearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Parts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Parts */ "./components/SearchBox/Parts/index.ts");
/* harmony import */ var _Logic_ScheduleGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logic/ScheduleGrid */ "./components/SearchBox/Logic/ScheduleGrid.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_SearchGridContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/SearchGridContext */ "./state/SearchGridContext.tsx");
/* harmony import */ var _state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/GridSquaresContext */ "./state/GridSquaresContext.tsx");
/* harmony import */ var _SearchBox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchBox.module.scss */ "./components/SearchBox/SearchBox.module.scss");
/* harmony import */ var _SearchBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SearchBox_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchBox\\SearchBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const SearchBox = props => {
  const [searchQuery, setSearchQuery] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    searchType: "ALL",
    eventsCategory: "",
    radius: "",
    location: "",
    endDate: null,
    startDate: null,
    placeType: "",
    startFormatted: "",
    endFormatted: "",
    unixStartDate: null,
    unixEndDate: null,
    ticketMasterCategories: "",
    yelpCategories: ""
  });
  const squaresDispatch = Object(_state_GridSquaresContext__WEBPACK_IMPORTED_MODULE_5__["useSquaresDispatch"])();
  const gridDispatch = Object(_state_SearchGridContext__WEBPACK_IMPORTED_MODULE_4__["useGridDispatch"])();

  const handleSubmit = () => {
    const newDatesInput = new _Logic_ScheduleGrid__WEBPACK_IMPORTED_MODULE_2__["default"](searchQuery.unixStartDate, searchQuery.unixEndDate);
    newDatesInput.setGrid();
    squaresDispatch({
      type: "ADD_SQUARES",
      payload: {
        numberOfSquares: newDatesInput.numberofSquares
      }
    });
    gridDispatch({
      type: "ADD_GRID_TEMPLATE",
      payload: {
        hourStrings: newDatesInput.hourStrings,
        gridTemplate: newDatesInput.templateAreas
      }
    });
  };

  const checkFieldsDisplayLink = searchType => {
    const {
      location,
      radius,
      placeType,
      startFormatted,
      endFormatted,
      unixStartDate,
      unixEndDate,
      eventsCategory
    } = searchQuery;

    switch (searchType) {
      case "ALL":
        return searchQuery.location !== "" && searchQuery.startDate !== null && searchQuery.radius !== "" && searchQuery.endDate !== null && searchQuery.placeType !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: {
            pathname: "/search/[queried]",
            query: {
              searchType,
              location,
              radius,
              placeType,
              startFormatted,
              endFormatted,
              unixEndDate,
              unixStartDate,
              eventsCategory
            }
          },
          as: `/search/searchType=ALL+location=${searchQuery.location}+radius=${searchQuery.radius}+placeType=${searchQuery.placeType}+startFormatted=${searchQuery.startFormatted}+endFormatted=${searchQuery.endFormatted}+unixStartDate=${searchQuery.unixStartDate}+unixEndDate=${searchQuery.unixEndDate}+eventsCategory=${searchQuery.eventsCategory}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }
        }, __jsx("button", {
          onClick: handleSubmit,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }
        }, "Search")) : __jsx("button", {
          onClick: () => alert("please fill out missing fields"),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 11
          }
        }, "Search");

      case "PLACES":
        return searchQuery.location !== "" && searchQuery.startDate !== null && searchQuery.radius !== "" && searchQuery.endDate !== null && searchQuery.placeType !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: {
            pathname: "/search/[queried]",
            query: {
              searchType,
              location,
              radius,
              placeType,
              startFormatted,
              endFormatted
            }
          },
          as: `/search/searchType=PLACES+location=${searchQuery.location}+radius=${searchQuery.radius}+placeType=${searchQuery.placeType}+startFormatted=${searchQuery.startFormatted}+endFormatted=${searchQuery.endFormatted}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }
        }, __jsx("button", {
          style: {
            color: "green"
          },
          onClick: handleSubmit,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }
        }, "Search")) : __jsx("button", {
          onClick: () => alert("please fill out missing fields"),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 11
          }
        }, "Search");

      case "EVENTS":
        return searchQuery.location !== "" && searchQuery.startDate !== null && searchQuery.radius !== "" && searchQuery.endDate !== null ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: {
            pathname: "/search/[queried]",
            query: {
              searchType,
              location,
              radius,
              startFormatted,
              endFormatted,
              unixStartDate,
              unixEndDate,
              eventsCategory
            }
          },
          as: `/search/searchType=EVENTS+location=${searchQuery.location}+radius=${searchQuery.radius}+startFormatted=${searchQuery.startFormatted}+endFormatted=${searchQuery.endFormatted}+unixStartDate=${searchQuery.unixStartDate}+unixEndDate=${searchQuery.unixEndDate}+eventsCategory=${searchQuery.eventsCategory}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 11
          }
        }, __jsx("button", {
          style: {
            color: "green"
          },
          onClick: handleSubmit,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }
        }, "Search")) : __jsx("button", {
          onClick: () => alert("please fill out missing fields"),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 11
          }
        }, "Search");

      default:
        return searchQuery.location !== "" && searchQuery.startDate !== null && searchQuery.radius !== "" && searchQuery.endDate !== null && searchQuery.placeType !== "" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: {
            pathname: "/search/[queried]",
            query: {
              searchType,
              location,
              radius,
              placeType,
              startFormatted,
              endFormatted,
              unixEndDate,
              unixStartDate,
              eventsCategory
            }
          },
          as: `/search/searchType=ALL+location=${searchQuery.location}+radius=${searchQuery.radius}+placeType=${searchQuery.placeType}+startFormatted=${searchQuery.startFormatted}+endFormatted=${searchQuery.endFormatted}+unixStartDate=${searchQuery.unixStartDate}+unixEndDate=${searchQuery.unixEndDate}+eventsCategory=${searchQuery.eventsCategory}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 11
          }
        }, __jsx("button", {
          style: {
            color: "green"
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }
        }, "Search")) : __jsx("button", {
          onClick: () => alert("please fill out missing fields"),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 11
          }
        }, "Search");
    }
  };

  const handleInputChange = (key, input) => {
    return setSearchQuery(state => _objectSpread(_objectSpread({}, state), {}, {
      [key]: input
    }));
  };

  const handleQueryDate = (key, date) => {
    if (key === "startDate") {
      const unixStartDate = Math.round(new Date(date).getTime() / 1000);
      const timeOffSet = date.getTimezoneOffset() * 60;
      const localStartTimeISO = new Date((unixStartDate - timeOffSet) * 1000).toISOString();
      const localStartTimeISOFormatted = `${localStartTimeISO.substring(0, 19)}Z`;
      return setSearchQuery(state => _objectSpread(_objectSpread({}, state), {}, {
        [key]: date,
        unixStartDate,
        startFormatted: localStartTimeISOFormatted
      }));
    } else {
      const unixEndDate = Math.round(new Date(date).getTime() / 1000);
      const timeOffSet = date.getTimezoneOffset() * 60;
      const localEndTimeISO = new Date((unixEndDate - timeOffSet) * 1000).toISOString();
      const localEndTimeISOFormatted = `${localEndTimeISO.substring(0, 19)}Z`;
      return setSearchQuery(state => _objectSpread(_objectSpread({}, state), {}, {
        [key]: date,
        unixEndDate,
        endFormatted: localEndTimeISOFormatted
      }));
    }
  };

  return __jsx("div", {
    className: _SearchBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }
  }, __jsx(_Parts__WEBPACK_IMPORTED_MODULE_1__["SearchSelector"], {
    searchType: searchQuery.searchType,
    handleInputChange: handleInputChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }
  }), __jsx(_Parts__WEBPACK_IMPORTED_MODULE_1__["WhereInput"], {
    handleInputChange: handleInputChange,
    location: searchQuery.location,
    radius: searchQuery.radius,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }), __jsx(_Parts__WEBPACK_IMPORTED_MODULE_1__["WhenInput"], {
    handleQueryDate: handleQueryDate,
    startDate: searchQuery.startDate,
    endDate: searchQuery.endDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }
  }), __jsx(_Parts__WEBPACK_IMPORTED_MODULE_1__["EventsInput"], {
    handleInputChange: handleInputChange,
    eventsCategory: searchQuery.eventsCategory,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 7
    }
  }), __jsx(_Parts__WEBPACK_IMPORTED_MODULE_1__["PlacesInput"], {
    handleInputChange: handleInputChange,
    placeType: searchQuery.placeType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }
  }), checkFieldsDisplayLink(searchQuery.searchType));
};

/***/ }),

/***/ "./components/SearchBox/index.ts":
/*!***************************************!*\
  !*** ./components/SearchBox/index.ts ***!
  \***************************************/
/*! exports provided: SearchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBox */ "./components/SearchBox/SearchBox.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return _SearchBox__WEBPACK_IMPORTED_MODULE_0__["SearchBox"]; });



/***/ }),

/***/ "./components/SearchIcon/SearchIcon.module.scss":
/*!******************************************************!*\
  !*** ./components/SearchIcon/SearchIcon.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchIcon": "SearchIcon_searchIcon__1og0f"
};


/***/ }),

/***/ "./components/SearchIcon/SearchIcon.tsx":
/*!**********************************************!*\
  !*** ./components/SearchIcon/SearchIcon.tsx ***!
  \**********************************************/
/*! exports provided: SearchIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchIcon_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchIcon.module.scss */ "./components/SearchIcon/SearchIcon.module.scss");
/* harmony import */ var _SearchIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchIcon_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchIcon\\SearchIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const SearchIcon = ({
  searchBox,
  displaySearchBox,
  stopWindowScroll
}) => {
  const handleClick = () => {
    if (searchBox.display) {
      return displaySearchBox({
        display: false
      }), stopWindowScroll(false);
    } else {
      return displaySearchBox({
        display: true
      }), stopWindowScroll(true);
    }
  };

  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 180.18 180.18",
    className: _SearchIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.searchIcon,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("g", {
    id: "Layer_2",
    "data-name": "Layer 2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M21.09,21.09a72,72,0,0,0,95.06,107.79l51.31,51.3,12.72-12.72-51.3-51.31A72,72,0,0,0,21.09,21.09Zm89.09,89.09a54,54,0,1,1,0-76.37A54,54,0,0,1,110.18,110.18Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./components/SearchIcon/index.ts":
/*!****************************************!*\
  !*** ./components/SearchIcon/index.ts ***!
  \****************************************/
/*! exports provided: SearchIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchIcon */ "./components/SearchIcon/SearchIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return _SearchIcon__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/EventDescription.module.scss":
/*!************************************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/EventDescription.module.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"descriptionWrapper": "EventDescription_descriptionWrapper__140IG",
	"description": "EventDescription_description__1khnk"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/EventDescription.tsx":
/*!****************************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/EventDescription.tsx ***!
  \****************************************************************************************************/
/*! exports provided: EventDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDescription", function() { return EventDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDescription.module.scss */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/EventDescription.module.scss");
/* harmony import */ var _EventDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EventDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\EventsInfo\\EventDescription\\EventDescription.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const EventDescription = ({
  description
}) => {
  const unwantedCharacters = /[*]/g;
  return description ? __jsx("div", {
    className: _EventDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: _EventDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, description.search(unwantedCharacters) !== -1 ? description.replace(unwantedCharacters, "") : description)) : null;
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/index.ts":
/*!****************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/index.ts ***!
  \****************************************************************************************/
/*! exports provided: EventDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventDescription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDescription */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/EventDescription.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDescription", function() { return _EventDescription__WEBPACK_IMPORTED_MODULE_0__["EventDescription"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/EventPriceGenre.module.scss":
/*!**********************************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/EventPriceGenre.module.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"eventPrice": "EventPriceGenre_eventPrice__1HKTK",
	"genre": "EventPriceGenre_genre__15HJo"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/EventPriceGenre.tsx":
/*!**************************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/EventPriceGenre.tsx ***!
  \**************************************************************************************************/
/*! exports provided: EventPriceGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPriceGenre", function() { return EventPriceGenre; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventPriceGenre_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventPriceGenre.module.scss */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/EventPriceGenre.module.scss");
/* harmony import */ var _EventPriceGenre_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EventPriceGenre_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\EventsInfo\\EventPriceGenre\\EventPriceGenre.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const EventPriceGenre = ({
  venue,
  price,
  source,
  genre
}) => {
  const parsePrice = () => {
    switch (source) {
      case "yelp":
        if (!price) return "Check link for price.";
        return `Starting at $${price}.00`;

      case "ticketmaster":
        if (!price || !price.min) return "Check link for price";

        const truePrice = () => {
          if (price.min % 1 === 0) return `Starting at $${price.min}.00`;
          const priceString = price.min.toString();
          const decimalIndex = priceString.indexOf(".");
          const cents = priceString.substring(decimalIndex + 1);
          return `Starting at $${priceString.substring(0, decimalIndex)}.${cents.length > 1 ? cents : `${cents}0`}`;
        };

        return truePrice();
    }
  };

  const setGenre = () => {
    if (source === "yelp") {
      if (genre.indexOf("-") !== -1 || genre.indexOf(" ") !== -1) {
        const characterSplit = genre.indexOf(" ") !== -1 ? " " : "-";
        const splitted = genre.split(characterSplit);
        const upperCase = splitted.map(word => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`);
        return __jsx("span", {
          className: _EventPriceGenre_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.genre,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 16
          }
        }, `• ${upperCase.join(" ")}`);
      } else {
        return __jsx("span", {
          className: _EventPriceGenre_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.genre,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 11
          }
        }, `• ${genre[0].toUpperCase()}${genre.substring(1)}`);
      }
    }

    if (!genre) return null;
    let segmentString = "";
    let genreString = "";
    genre[0].segment ? segmentString = genre[0].segment.name : null;
    genre[0]["genre"] ? genreString = genre[0]["genre"].name : null;
    return __jsx("span", {
      className: _EventPriceGenre_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.genre,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, `• ${segmentString} ${genreString}`);
  };

  return __jsx("div", {
    className: _EventPriceGenre_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.eventPrice,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, parsePrice()), setGenre());
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/index.ts":
/*!***************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/index.ts ***!
  \***************************************************************************************/
/*! exports provided: EventPriceGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventPriceGenre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventPriceGenre */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/EventPriceGenre.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPriceGenre", function() { return _EventPriceGenre__WEBPACK_IMPORTED_MODULE_0__["EventPriceGenre"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/EventTimesVenue.module.scss":
/*!**********************************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/EventTimesVenue.module.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"times": "EventTimesVenue_times__1Bcta",
	"venue": "EventTimesVenue_venue__1ep1m"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/EventTimesVenue.tsx":
/*!**************************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/EventTimesVenue.tsx ***!
  \**************************************************************************************************/
/*! exports provided: EventTimesVenue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTimesVenue", function() { return EventTimesVenue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventTimesVenue_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventTimesVenue.module.scss */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/EventTimesVenue.module.scss");
/* harmony import */ var _EventTimesVenue_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EventTimesVenue_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\EventsInfo\\EventTimesVenue\\EventTimesVenue.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const EventTimesVenue = ({
  startTime,
  endTime,
  source,
  venue
}) => {
  const displayVenue = () => {
    return venue ? __jsx("span", {
      className: _EventTimesVenue_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.venue,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 20
      }
    }, `• ${venue}`) : null;
  };

  const parseYelpTimes = () => {
    const yelpStartObject = new Date(startTime);
    const yelpEndObject = new Date(endTime); //yelp start time

    const yelpStartTime = yelpStartObject.toLocaleTimeString("en-US");
    const startAmPm = yelpStartTime.substring(yelpStartTime.length - 2);
    const startWithoutSeconds = yelpStartTime.substring(0, yelpStartTime.length - 6);
    const yelpStartFormattedTime = `${startWithoutSeconds} ${startAmPm}`; //yelp start date

    const yelpStartDate = `${yelpStartObject.toLocaleDateString("en-US", {
      weekday: "long"
    })} ${yelpStartObject.toLocaleDateString()}`; //yelp end time

    const yelpEndTime = yelpEndObject.toLocaleTimeString("en-US");
    const endAmPm = yelpEndTime.substring(yelpEndTime.length - 2);
    const endWithoutSeconds = yelpEndTime.substring(0, yelpEndTime.length - 6);
    const yelpEndFormattedTime = `${endWithoutSeconds} ${endAmPm}`; //yelp end Date

    const yelpEndDate = yelpEndObject.toLocaleDateString();
    return __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 12
      }
    }, `${yelpStartDate} ${yelpStartFormattedTime}`);
  };

  const parseTicketMasterTime = () => {
    const ticketmasterStartObject = new Date(startTime);
    const ticketmasterStartTime = ticketmasterStartObject.toLocaleTimeString("en-US");
    const startAmPm = ticketmasterStartTime.substring(ticketmasterStartTime.length - 2);
    const startWithoutSeconds = ticketmasterStartTime.substring(0, ticketmasterStartTime.length - 6);
    const ticketmasterStartFormattedTime = `${startWithoutSeconds} ${startAmPm}`;
    const ticketmasterDate = `${ticketmasterStartObject.toLocaleDateString("en-US", {
      weekday: "long"
    })} ${ticketmasterStartObject.toLocaleDateString()}`;
    return __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 12
      }
    }, `${ticketmasterDate} ${ticketmasterStartFormattedTime}`);
  };

  const determineSource = () => {
    return source === "yelp" ? parseYelpTimes() : parseTicketMasterTime();
  };

  return __jsx("div", {
    className: _EventTimesVenue_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.times,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, determineSource(), displayVenue());
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/index.ts":
/*!***************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/index.ts ***!
  \***************************************************************************************/
/*! exports provided: EventTimesVenue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventTimesVenue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventTimesVenue */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/EventTimesVenue.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventTimesVenue", function() { return _EventTimesVenue__WEBPACK_IMPORTED_MODULE_0__["EventTimesVenue"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/EventsInfo/index.ts":
/*!***********************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/EventsInfo/index.ts ***!
  \***********************************************************************/
/*! exports provided: EventTimesVenue, EventPriceGenre, EventDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventTimesVenue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventTimesVenue */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventTimesVenue/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventTimesVenue", function() { return _EventTimesVenue__WEBPACK_IMPORTED_MODULE_0__["EventTimesVenue"]; });

/* harmony import */ var _EventPriceGenre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventPriceGenre */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventPriceGenre/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPriceGenre", function() { return _EventPriceGenre__WEBPACK_IMPORTED_MODULE_1__["EventPriceGenre"]; });

/* harmony import */ var _EventDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDescription */ "./components/SearchResults/ResultCard/Parts/EventsInfo/EventDescription/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDescription", function() { return _EventDescription__WEBPACK_IMPORTED_MODULE_2__["EventDescription"]; });





/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/ImageBackground/ImageBackground.module.scss":
/*!***********************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/ImageBackground/ImageBackground.module.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"imgBackground": "ImageBackground_imgBackground__YaZHw",
	"extended": "ImageBackground_extended__S7wAe"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/ImageBackground/ImageBackground.tsx":
/*!***************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/ImageBackground/ImageBackground.tsx ***!
  \***************************************************************************************/
/*! exports provided: ImageBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBackground", function() { return ImageBackground; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageBackground_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageBackground.module.scss */ "./components/SearchResults/ResultCard/Parts/ImageBackground/ImageBackground.module.scss");
/* harmony import */ var _ImageBackground_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageBackground_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\ImageBackground\\ImageBackground.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const ImageBackground = ({
  extended,
  handleRetract,
  type,
  source,
  children
}) => {
  // const [state, setState] = React.useState<{ loaded: boolean }>({
  //   loaded: false,
  // });
  // const determineImageRatio: () => { width: string; height: string } = () => {
  //   switch (type) {
  //     case "event":
  //       return source === "yelp"
  //         ? { width: "100%", height: "auto" }
  //         : { width: "auto", height: "100%" };
  //     case "place":
  //       return { width: "100%", height: "auto" };
  //     default:
  //       return { width: "100%", height: "auto" };
  //   }
  // };
  const determineImageRatio = () => {
    return source === "yelp" ? _ImageBackground_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.byWidth : _ImageBackground_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.byWidth;
  };

  return __jsx("div", {
    className: `${_ImageBackground_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imgBackground} ${extended ? _ImageBackground_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.extended : null}`,
    onClick: handleRetract,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/ImageBackground/index.ts":
/*!****************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/ImageBackground/index.ts ***!
  \****************************************************************************/
/*! exports provided: ImageBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageBackground */ "./components/SearchResults/ResultCard/Parts/ImageBackground/ImageBackground.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageBackground", function() { return _ImageBackground__WEBPACK_IMPORTED_MODULE_0__["ImageBackground"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PartLink/PartLink.module.scss":
/*!*********************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PartLink/PartLink.module.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "PartLink_link__3MlbZ"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PartLink/PartLink.tsx":
/*!*************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PartLink/PartLink.tsx ***!
  \*************************************************************************/
/*! exports provided: PartLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartLink", function() { return PartLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PartLink_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartLink.module.scss */ "./components/SearchResults/ResultCard/Parts/PartLink/PartLink.module.scss");
/* harmony import */ var _PartLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PartLink_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\PartLink\\PartLink.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const PartLink = ({
  url
}) => {
  return __jsx("a", {
    href: url,
    className: _PartLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("svg", {
    fill: "#000000",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 50 50",
    width: "100px",
    height: "100px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.5625 2 L 25.6875 22.90625 C 25.390625 23.148438 25.253906 23.535156 25.339844 23.910156 C 25.425781 24.28125 25.71875 24.574219 26.089844 24.660156 C 26.464844 24.746094 26.851563 24.609375 27.09375 24.3125 L 48 3.4375 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 1.476563 10 0.941406 10.183594 0.5625 10.5625 C 0.183594 10.941406 0 11.476563 0 12 L 0 48 C 0 48.523438 0.183594 49.058594 0.5625 49.4375 C 0.941406 49.816406 1.476563 50 2 50 L 38 50 C 38.523438 50 39.058594 49.816406 39.4375 49.4375 C 39.816406 49.058594 40 48.523438 40 48 L 40 18 C 40.003906 17.640625 39.816406 17.304688 39.503906 17.121094 C 39.191406 16.941406 38.808594 16.941406 38.496094 17.121094 C 38.183594 17.304688 37.996094 17.640625 38 18 L 38 48 L 2 48 L 2 12 L 32 12 C 32.359375 12.003906 32.695313 11.816406 32.878906 11.503906 C 33.058594 11.191406 33.058594 10.808594 32.878906 10.496094 C 32.695313 10.183594 32.359375 9.996094 32 10 Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PartLink/index.ts":
/*!*********************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PartLink/index.ts ***!
  \*********************************************************************/
/*! exports provided: PartLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartLink */ "./components/SearchResults/ResultCard/Parts/PartLink/PartLink.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartLink", function() { return _PartLink__WEBPACK_IMPORTED_MODULE_0__["PartLink"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/Location.module.scss":
/*!********************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/Location.module.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"location": "Location_location__rNqIC",
	"address": "Location_address__1kNNg"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/Location.tsx":
/*!************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/Location.tsx ***!
  \************************************************************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Location_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location.module.scss */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/Location.module.scss");
/* harmony import */ var _Location_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Location_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\PlacesInfo\\Location\\Location.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Location = ({
  street,
  city
}) => {
  if (!street && !city) return null;
  return __jsx("a", {
    href: "",
    className: _Location_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.location,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx("p", {
    className: _Location_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.address,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, street, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), city));
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/index.ts":
/*!********************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/index.ts ***!
  \********************************************************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Location */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/Location.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _Location__WEBPACK_IMPORTED_MODULE_0__["Location"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/Phone.module.scss":
/*!**************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/Phone.module.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"phone": "Phone_phone__39ILs"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/Phone.tsx":
/*!******************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/Phone.tsx ***!
  \******************************************************************************/
/*! exports provided: Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Phone_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Phone.module.scss */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/Phone.module.scss");
/* harmony import */ var _Phone_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Phone_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\PlacesInfo\\Phone\\Phone.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Phone = ({
  phone
}) => {
  if (!phone) return null;
  return __jsx("a", {
    href: `tel:${phone}`,
    className: _Phone_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.phone,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, phone));
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/index.ts":
/*!*****************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/index.ts ***!
  \*****************************************************************************/
/*! exports provided: Phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Phone */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/Phone.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return _Phone__WEBPACK_IMPORTED_MODULE_0__["Phone"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/PriceAndType.module.scss":
/*!****************************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/PriceAndType.module.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"placePrice": "PriceAndType_placePrice__21SjN",
	"light": "PriceAndType_light__2kgOb",
	"type": "PriceAndType_type__1fqBj",
	"city": "PriceAndType_city__3FMZl"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/PriceAndType.tsx":
/*!********************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/PriceAndType.tsx ***!
  \********************************************************************************************/
/*! exports provided: PriceAndType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceAndType", function() { return PriceAndType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceAndType.module.scss */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/PriceAndType.module.scss");
/* harmony import */ var _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\PlacesInfo\\PriceAndType\\PriceAndType.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const PriceAndType = ({
  price,
  type,
  city,
  state
}) => {
  const insertCity = city => {
    return city ? __jsx("span", {
      className: _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.city,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, `• ${city}, ${state}`) : null;
  };

  const singularType = () => {
    if (!type || type.length === 0) return null;else {
      const indexLastLetter = type.length - 1;

      switch (type[indexLastLetter]) {
        case "s":
          return type.indexOf("ies") !== -1 ? __jsx("span", {
            className: _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.type,
            style: {
              marginLeft: price ? "2vw" : null
            },
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 13
            }
          }, `${type.substring(0, type.indexOf("ies"))}y`) : __jsx("span", {
            className: _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.type,
            style: {
              marginLeft: price ? "2vw" : null
            },
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 13
            }
          }, type.substring(0, indexLastLetter));

        default:
          return __jsx("span", {
            className: _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.type,
            style: {
              marginLeft: price ? "2vw" : null
            },
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }
          }, `${type}`);
      }
    }
  };

  return price ? __jsx("div", {
    className: _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.placePrice,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.light,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, price[0]), __jsx("span", {
    className: price.length >= 2 ? _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.light : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, price[0]), __jsx("span", {
    className: price.length >= 3 ? _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.light : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, price[0]), __jsx("span", {
    className: price.length === 4 ? _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.light : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, price[0]), singularType(), insertCity(city)) : __jsx("div", {
    className: _PriceAndType_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.placePrice,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, singularType(), insertCity(city));
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/index.ts":
/*!************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/index.ts ***!
  \************************************************************************************/
/*! exports provided: PriceAndType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceAndType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceAndType */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/PriceAndType.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceAndType", function() { return _PriceAndType__WEBPACK_IMPORTED_MODULE_0__["PriceAndType"]; });



/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Reviews/Reviews.module.scss":
/*!******************************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/Reviews/Reviews.module.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"reviewWrapper": "Reviews_reviewWrapper__3N5we",
	"starWrapper": "Reviews_starWrapper__1RlSy"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Reviews/Reviews.tsx":
/*!**********************************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/Reviews/Reviews.tsx ***!
  \**********************************************************************************/
/*! exports provided: Reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return Reviews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reviews.module.scss */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Reviews/Reviews.module.scss");
/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\Parts\\PlacesInfo\\Reviews\\Reviews.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Reviews = ({
  reviewCount,
  rating
}) => {
  if (reviewCount && rating) {
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](() => {
      setStars;
    }, []);

    const EmptyStar = id => {
      return __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 263.08 251.53",
        style: {
          fill: "#707070"
        },
        key: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, __jsx("defs", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }), __jsx("title", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, "Asset 10"), __jsx("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, __jsx("g", {
        id: "Tracing",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, __jsx("path", {
        d: "M141.5,8.69l31.27,63.36a11.11,11.11,0,0,0,8.36,6.08l69.93,10.16a11.11,11.11,0,0,1,6.15,18.94l-50.6,49.32a11.09,11.09,0,0,0-3.19,9.83L215.36,236a11.1,11.1,0,0,1-16.11,11.7l-62.54-32.88a11.12,11.12,0,0,0-10.34,0L63.83,247.73A11.11,11.11,0,0,1,47.71,236l11.95-69.65a11.1,11.1,0,0,0-3.2-9.83L5.87,107.23A11.1,11.1,0,0,1,12,88.29L82,78.13a11.13,11.13,0,0,0,8.36-6.08L121.58,8.69A11.11,11.11,0,0,1,141.5,8.69Z",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }
      }))));
    };

    const FullStar = id => {
      return __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 258.08 246.53",
        style: {
          fill: "white"
        },
        key: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, __jsx("defs", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }), __jsx("title", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, "Asset 7"), __jsx("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }, __jsx("g", {
        id: "Tracing",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx("path", {
        d: "M139,6.19l31.27,63.36a11.11,11.11,0,0,0,8.36,6.08l69.93,10.16a11.11,11.11,0,0,1,6.15,18.94l-50.6,49.32a11.09,11.09,0,0,0-3.19,9.83l11.94,69.65a11.1,11.1,0,0,1-16.11,11.7l-62.54-32.88a11.12,11.12,0,0,0-10.34,0L61.33,245.23a11.11,11.11,0,0,1-16.12-11.7l11.95-69.65a11.1,11.1,0,0,0-3.2-9.83L3.37,104.73A11.1,11.1,0,0,1,9.52,85.79L79.45,75.63a11.13,11.13,0,0,0,8.36-6.08L119.08,6.19A11.11,11.11,0,0,1,139,6.19Z",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }
      }))));
    };

    const HalfStar = id => {
      return __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 263.07 251.54",
        key: id,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, __jsx("defs", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }), __jsx("title", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, "Asset 11"), __jsx("g", {
        id: "Layer_2",
        "data-name": "Layer 2",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }, __jsx("g", {
        id: "Tracing",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, __jsx("path", {
        style: {
          fill: "#707070"
        },
        d: "M206.61,156.56a11.11,11.11,0,0,0-3.19,9.83L215.36,236a11.1,11.1,0,0,1-16.11,11.71l-62.54-32.89a11.07,11.07,0,0,0-10.34,0L63.83,247.74A11.1,11.1,0,0,1,47.72,236l11.94-69.64a11.11,11.11,0,0,0-3.19-9.83L5.87,107.23A11.1,11.1,0,0,1,12,88.29L82,78.13a11.08,11.08,0,0,0,8.36-6.07L121.58,8.69a11.11,11.11,0,0,1,19.92,0l31.27,63.37a11.08,11.08,0,0,0,8.36,6.07l69.93,10.16a11.1,11.1,0,0,1,6.15,18.94Z",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }), __jsx("path", {
        style: {
          fill: "white"
        },
        d: "M132,2.51V213.58a11.19,11.19,0,0,0-5.67,1.27L63.83,247.74A11.1,11.1,0,0,1,47.72,236l11.94-69.64a11.11,11.11,0,0,0-3.19-9.83L5.87,107.23A11.1,11.1,0,0,1,12,88.29L82,78.13a11.08,11.08,0,0,0,8.36-6.07L121.58,8.69A11,11,0,0,1,132,2.51Z",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }
      }))));
    };

    const setStars = () => {
      let ratingInt = Math.floor(rating);
      let remainder = rating - ratingInt;
      const starTypes = [EmptyStar(0), EmptyStar(1), EmptyStar(2), EmptyStar(3), EmptyStar(4)];
      const newStars = starTypes.map((item, index) => {
        if (index < ratingInt) {
          return FullStar(index);
        } else {
          return remainder > 0 && index < rating ? HalfStar(index) : EmptyStar(index);
        }
      });
      return newStars;
    };

    return __jsx("div", {
      className: _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reviewWrapper,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.starWrapper,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, setStars().map(star => star)), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, `${reviewCount} Reviews`));
  } else {
    return null;
  }
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/Parts/PlacesInfo/index.ts":
/*!***********************************************************************!*\
  !*** ./components/SearchResults/ResultCard/Parts/PlacesInfo/index.ts ***!
  \***********************************************************************/
/*! exports provided: PriceAndType, Reviews, Phone, Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceAndType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceAndType */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/PriceAndType/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceAndType", function() { return _PriceAndType__WEBPACK_IMPORTED_MODULE_0__["PriceAndType"]; });

/* harmony import */ var _Reviews_Reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reviews/Reviews */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Reviews/Reviews.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return _Reviews_Reviews__WEBPACK_IMPORTED_MODULE_1__["Reviews"]; });

/* harmony import */ var _Phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Phone */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Phone/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return _Phone__WEBPACK_IMPORTED_MODULE_2__["Phone"]; });

/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Location */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/Location/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _Location__WEBPACK_IMPORTED_MODULE_3__["Location"]; });






/***/ }),

/***/ "./components/SearchResults/ResultCard/ResultCard.module.scss":
/*!********************************************************************!*\
  !*** ./components/SearchResults/ResultCard/ResultCard.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"resultCard": "ResultCard_resultCard__1ks5J",
	"extended": "ResultCard_extended__I7z_B",
	"loaded": "ResultCard_loaded__3ekMl",
	"loading": "ResultCard_loading__TqLuf",
	"infoBar": "ResultCard_infoBar__2pPJu",
	"title": "ResultCard_title__2mSGz",
	"loadingBar": "ResultCard_loadingBar__2ttxx",
	"detailsWrapper": "ResultCard_detailsWrapper__18JRj",
	"addButton": "ResultCard_addButton__1p084",
	"remove": "ResultCard_remove__a9j0G",
	"loadingAdd": "ResultCard_loadingAdd__33RXL"
};


/***/ }),

/***/ "./components/SearchResults/ResultCard/ResultCard.tsx":
/*!************************************************************!*\
  !*** ./components/SearchResults/ResultCard/ResultCard.tsx ***!
  \************************************************************/
/*! exports provided: ResultCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultCard", function() { return ResultCard; });
/* harmony import */ var _Parts_PlacesInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Parts/PlacesInfo */ "./components/SearchResults/ResultCard/Parts/PlacesInfo/index.ts");
/* harmony import */ var _Parts_EventsInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Parts/EventsInfo */ "./components/SearchResults/ResultCard/Parts/EventsInfo/index.ts");
/* harmony import */ var _Parts_PartLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Parts/PartLink */ "./components/SearchResults/ResultCard/Parts/PartLink/index.ts");
/* harmony import */ var _Parts_ImageBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Parts/ImageBackground */ "./components/SearchResults/ResultCard/Parts/ImageBackground/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_DatePartsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../state/DatePartsContext */ "./state/DatePartsContext.tsx");
/* harmony import */ var _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResultCard.module.scss */ "./components/SearchResults/ResultCard/ResultCard.module.scss");
/* harmony import */ var _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SearchResults\\ResultCard\\ResultCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ResultCard = ({
  item,
  resultsLoading
}) => {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_4__["useState"]({
    added: false,
    moreInfo: false,
    imageLoaded: false
  });
  const GlobalParts = Object(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_5__["usePartsState"])();
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](() => {
    if (item) {
      for (let i = 0; i < GlobalParts.parts.length; i++) {
        if (GlobalParts.parts[i].id === item.id) {
          setState(state => _objectSpread(_objectSpread({}, state), {}, {
            added: true
          }));
        }
      }
    }
  }, [GlobalParts]);

  const determineImageBackgroundSource = () => {
    switch (item.type) {
      case "place":
        return item.source === "yelp" ? item.image_url : null;

      case "event":
        return item.source === "yelp" ? item.image_url : item.images[0].url;

      default:
        return "";
    }
  };

  const handleRetract = () => {
    return state.moreInfo ? setState(state => _objectSpread(_objectSpread({}, state), {}, {
      moreInfo: false
    })) : null;
  };

  const moreDetails = type => {
    if (!state.moreInfo) return null;

    switch (type) {
      case "place":
        return __jsx("div", {
          className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.detailsWrapper,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }
        }, __jsx(_Parts_PlacesInfo__WEBPACK_IMPORTED_MODULE_0__["Phone"], {
          phone: item.phone,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }
        }), __jsx(_Parts_PlacesInfo__WEBPACK_IMPORTED_MODULE_0__["Location"], {
          street: item.location.display_address[0],
          city: item.location.display_address[1],
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }
        }), __jsx(_Parts_PartLink__WEBPACK_IMPORTED_MODULE_2__["PartLink"], {
          url: item.url,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }
        }));

      case "event":
        return __jsx("div", {
          className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.detailsWrapper,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }
        }, __jsx(_Parts_EventsInfo__WEBPACK_IMPORTED_MODULE_1__["EventDescription"], {
          description: item.description,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }
        }), __jsx(_Parts_PartLink__WEBPACK_IMPORTED_MODULE_2__["PartLink"], {
          url: item.source === "yelp" ? item.event_site_url : item.url,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }
        }));

      default:
        return __jsx("div", {
          className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.detailsWrapper,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 16
          }
        });
    }
  };

  const setCardDetails = () => {
    switch (item.type) {
      case "place":
        return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: `${_ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.infoBar} ${state.moreInfo ? _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.extended : null}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }
        }, __jsx("span", {
          className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }
        }, item.name), __jsx(_Parts_PlacesInfo__WEBPACK_IMPORTED_MODULE_0__["Reviews"], {
          reviewCount: item.review_count,
          rating: item.rating,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }
        }), __jsx(_Parts_PlacesInfo__WEBPACK_IMPORTED_MODULE_0__["PriceAndType"], {
          price: item.price,
          city: item.location.city,
          state: item.location.state,
          type: item.categories && item.categories.length > 0 ? item.categories[0].title : null,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }
        }), __jsx("div", {
          className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.starsWrapper,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }
        })), moreDetails("place"));

      case "event":
        const determinePrice = () => {
          switch (item.source) {
            case "yelp":
              if (!item.cost) return null;
              return item.cost;

            case "ticketmaster":
              if (!item.priceRanges) return null;
              return item.priceRanges[0];
          }
        };

        const determineVenue = () => {
          switch (item.source) {
            case "yelp":
              return !item.businesess_id || item.business_id === null ? null : item.business_id;

            case "ticketmaster":
              return item._embedded.venues[0].name;
          }
        };

        const ticketmasterClassification = () => {
          return item.classifications ? item.classifications : null;
        };

        return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: `${_ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.infoBar} ${state.moreInfo ? _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.extended : null}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }
        }, __jsx("span", {
          className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }
        }, item.name), __jsx(_Parts_EventsInfo__WEBPACK_IMPORTED_MODULE_1__["EventTimesVenue"], {
          startTime: item.source === "yelp" ? item.time_start : `${item.dates.start.localDate}T${item.dates.start.localTime}`,
          endTime: item.source === "yelp" ? item.time_end : null,
          source: item.source,
          venue: determineVenue(),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }
        }), __jsx(_Parts_EventsInfo__WEBPACK_IMPORTED_MODULE_1__["EventPriceGenre"], {
          venue: item.source === "yelp" ? item.business_id : item._embedded.venues[0].name,
          price: determinePrice(),
          source: item.source,
          genre: item.source === "yelp" ? item.category : ticketmasterClassification(),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }
        })), moreDetails("event"));
    }
  };

  const dispatch = Object(_state_DatePartsContext__WEBPACK_IMPORTED_MODULE_5__["usePartsDispatch"])();

  const handlePart = () => {
    if (state.added) {
      return setState(state => _objectSpread(_objectSpread({}, state), {}, {
        added: false
      })), dispatch({
        type: "REMOVE_PART",
        payload: {
          id: item.id
        }
      });
    } else {
      return GlobalParts.parts.length < 7 ? (setState(state => _objectSpread(_objectSpread({}, state), {}, {
        added: true
      })), dispatch({
        type: "ADD_PART",
        payload: {
          part: _objectSpread(_objectSpread({}, item), {}, {
            gridIndex: null
          })
        }
      })) : null;
    }
  };

  return resultsLoading ? __jsx("div", {
    className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.resultCard,
    style: {
      background: "#999999"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `${_ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.addButton} ${_ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.loadingAdd}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.infoBar,
    style: {
      background: "transparent"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.loadingBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.loadingBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.loadingBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }))) : __jsx("div", {
    className: `${_ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.resultCard} ${state.moreInfo ? _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.extended : null} ${state.imageLoaded ? _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.loaded : _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.loading}
      `,
    onClick: () => state.moreInfo ? null : setState(state => _objectSpread(_objectSpread({}, state), {}, {
      moreInfo: true
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, __jsx(_Parts_ImageBackground__WEBPACK_IMPORTED_MODULE_3__["ImageBackground"], {
    extended: state.moreInfo,
    handleRetract: handleRetract,
    type: item.type,
    source: item.source,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: determineImageBackgroundSource(),
    alt: item.name,
    onLoad: () => setState(_objectSpread(_objectSpread({}, state), {}, {
      imageLoaded: true
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  })), __jsx("button", {
    className: `${_ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.addButton} ${state.added ? _ResultCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.remove : null}`,
    onClick: event => (event.stopPropagation(), handlePart()),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, state.added ? "Remove from Parts -" : "Add to Parts +"), setCardDetails());
};

/***/ }),

/***/ "./components/SearchResults/ResultCard/index.ts":
/*!******************************************************!*\
  !*** ./components/SearchResults/ResultCard/index.ts ***!
  \******************************************************/
/*! exports provided: ResultCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultCard */ "./components/SearchResults/ResultCard/ResultCard.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultCard", function() { return _ResultCard__WEBPACK_IMPORTED_MODULE_0__["ResultCard"]; });



/***/ }),

/***/ "./components/SearchResults/index.ts":
/*!*******************************************!*\
  !*** ./components/SearchResults/index.ts ***!
  \*******************************************/
/*! exports provided: ResultCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultCard */ "./components/SearchResults/ResultCard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultCard", function() { return _ResultCard__WEBPACK_IMPORTED_MODULE_0__["ResultCard"]; });



/***/ }),

/***/ "./components/SekndLoader/SekndLoader.module.scss":
/*!********************************************************!*\
  !*** ./components/SekndLoader/SekndLoader.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loader": "SekndLoader_loader__2P15C",
	"sekndHand": "SekndLoader_sekndHand__11Am3",
	"TikTok": "SekndLoader_TikTok__3LuyW"
};


/***/ }),

/***/ "./components/SekndLoader/SekndLoader.tsx":
/*!************************************************!*\
  !*** ./components/SekndLoader/SekndLoader.tsx ***!
  \************************************************/
/*! exports provided: SekndLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SekndLoader", function() { return SekndLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SekndLoader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SekndLoader.module.scss */ "./components/SekndLoader/SekndLoader.module.scss");
/* harmony import */ var _SekndLoader_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SekndLoader_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\SekndLoader\\SekndLoader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const SekndLoader = () => {
  return __jsx("div", {
    className: _SekndLoader_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 228.98 49.14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "AltLogoBlack"), __jsx("g", {
    id: "Layer_2",
    "data-name": "Layer 2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("g", {
    id: "Tracing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M17.66,49.14a31.52,31.52,0,0,1-4.74-.36,23.61,23.61,0,0,1-7.68-2.52A10,10,0,0,1,.14,41c-.72-2.1,1.5-4.74,3.66-3.66a4.41,4.41,0,0,1,1.26,1.32c2.16,2.64,5.52,3.78,8.76,4.32a22.83,22.83,0,0,0,7.86-.12c2.82-.6,5.52-2,6.6-4.8a6.31,6.31,0,0,0,.18-4.32c-1.38-4.08-6.48-5.58-10.8-6.48A45.6,45.6,0,0,1,9.2,24.78c-2.88-1.14-5.76-2.88-7.38-5.64-2-3.3-1.62-8.52-.42-11C5.06.84,12.14,0,16.28,0a25.19,25.19,0,0,1,8.94,1.56c3.3,1.26,5.88,3.42,6.66,5.7a2.85,2.85,0,0,1-.54,2.82,2.5,2.5,0,0,1-3.12.72,9,9,0,0,1-.84-.72,13.63,13.63,0,0,0-5.22-3.42,16.21,16.21,0,0,0-5.88-.78c-4.68,0-10,1.8-10,7.26,0,5,4.38,6.54,14.4,9C33.5,25.26,35.18,32.34,34,38.34,32.18,47.28,21.62,49.14,17.66,49.14Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M79.82,45.18a3,3,0,0,1-3,3H48.14a3,3,0,0,1-3-3V4a3,3,0,0,1,3-3H76.22a3,3,0,0,1,3,3,3,3,0,0,1-3,3H51.14V21.48h22.2a3,3,0,0,1,3,3,3,3,0,0,1-3,3H51.14v14.7H76.82A3,3,0,0,1,79.82,45.18Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M96.62,4V45.18a3,3,0,1,1-6,0V4a3,3,0,1,1,6,0Zm27.6,43.86a3.27,3.27,0,0,1-1.32.3,3,3,0,0,1-2.7-1.68,50.94,50.94,0,0,0-7.92-11.82c-3.54-3.78-6.24-6.6-10.32-8.94-.12-.06-.18-.12-.3-.18s-.24-.18-.36-.3a2.93,2.93,0,0,1-.78-1.62,3.11,3.11,0,0,1,.36-2,3.16,3.16,0,0,1,.72-.84l18.6-18.9a3,3,0,0,1,4.26.06,3,3,0,0,1-.06,4.2l-16.2,16.5c7.56,5.34,13.5,13.2,17.4,21.24A3,3,0,0,1,124.22,47.88Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M175.16,47.94a3.33,3.33,0,0,1-3.48-.78l-29-34.86V45.18a3,3,0,1,1-6,0V4A3,3,0,0,1,142,2.1l29,34.8V4a3,3,0,0,1,3-3,3,3,0,0,1,3,3V45.24A2.6,2.6,0,0,1,175.16,47.94Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M204.5,48.18H190.88a3,3,0,0,1-3.06-3V4a2.81,2.81,0,0,1,.9-2.1,3.2,3.2,0,0,1,2.16-.9h13.74A24.88,24.88,0,0,1,214,2.88a25.79,25.79,0,0,1,7.8,5.1,23.69,23.69,0,0,1,5.22,7.56A23.1,23.1,0,0,1,229,24.72a21.36,21.36,0,0,1-2,9,23.33,23.33,0,0,1-5.28,7.5,24.71,24.71,0,0,1-7.8,5.1A25.34,25.34,0,0,1,204.5,48.18Zm-10.62-6.06h10.74a19.81,19.81,0,0,0,7-1.44,18.31,18.31,0,0,0,5.88-3.78,19.75,19.75,0,0,0,4-5.64A15.49,15.49,0,0,0,223,24.72a16.58,16.58,0,0,0-1.44-6.78A18.61,18.61,0,0,0,204.62,7H193.88Z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _SekndLoader_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sekndHand,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/SekndLoader/index.ts":
/*!*****************************************!*\
  !*** ./components/SekndLoader/index.ts ***!
  \*****************************************/
/*! exports provided: SekndLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SekndLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SekndLoader */ "./components/SekndLoader/SekndLoader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SekndLoader", function() { return _SekndLoader__WEBPACK_IMPORTED_MODULE_0__["SekndLoader"]; });



/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: Layout, Nav, ScheduleGrid, DateParts, ResultCard, SekndLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./components/layout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"]; });

/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_1__["Nav"]; });

/* harmony import */ var _ScheduleGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleGrid */ "./components/ScheduleGrid/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScheduleGrid", function() { return _ScheduleGrid__WEBPACK_IMPORTED_MODULE_2__["ScheduleGrid"]; });

/* harmony import */ var _DateParts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateParts */ "./components/DateParts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateParts", function() { return _DateParts__WEBPACK_IMPORTED_MODULE_3__["DateParts"]; });

/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchResults */ "./components/SearchResults/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultCard", function() { return _SearchResults__WEBPACK_IMPORTED_MODULE_4__["ResultCard"]; });

/* harmony import */ var _SekndLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SekndLoader */ "./components/SekndLoader/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SekndLoader", function() { return _SekndLoader__WEBPACK_IMPORTED_MODULE_5__["SekndLoader"]; });








/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav/index.ts");
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\components\\layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Layout = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children);
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/search/[queried].tsx":
/*!************************************!*\
  !*** ./pages/search/[queried].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Queried; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _swr_useAPICalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../swr/useAPICalls */ "./swr/useAPICalls.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Queried.module.scss */ "./styles/Queried.module.scss");
/* harmony import */ var _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\pages\\search\\[queried].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





function Queried() {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    resultsType: "place"
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const urlStart = true ? "http://localhost:3000" : undefined;

  const setSearchParameters = () => {
    const {
      query
    } = router;
    if (!query.queried) return null;
    if (query.searchType) return query;
    const checkURLIsString = query.queried.toString();
    const paramValueArray = checkURLIsString.split("+");
    const SearchParams = {};
    paramValueArray.forEach(param => {
      const indexOfEqual = param.search("=");
      if (indexOfEqual === -1) return;else {
        const paramKey = param.substring(0, indexOfEqual);
        const paramValue = param.substring(indexOfEqual + 1);
        SearchParams[paramKey] = paramValue;
      }
    });
    return SearchParams;
  };

  const {
    items,
    loading,
    errors
  } = Object(_swr_useAPICalls__WEBPACK_IMPORTED_MODULE_2__["default"])(setSearchParameters(), urlStart);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    console.log("setting result type");

    if (setSearchParameters()) {
      setSearchParameters().searchType === "EVENTS" ? setState({
        resultsType: "event"
      }) : null;
    }
  }, [setSearchParameters()]);

  const setResultsButtons = () => {
    if (loading) return null;
    return setSearchParameters() && setSearchParameters().searchType === "ALL" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, __jsx("button", {
      className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.typeButton,
      onClick: () => setState({
        resultsType: "place"
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, "Places"), __jsx("button", {
      className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.typeButton,
      onClick: () => setState({
        resultsType: "event"
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, "Events")) : null;
  };

  const loadingDisplayItems = () => {
    if (loading) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ResultCard"], {
        key: "loading1",
        resultsLoading: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ResultCard"], {
        key: "loading2",
        resultsLoading: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ResultCard"], {
        key: "loading3",
        resultsLoading: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }));
    } else {
      return items && items.length > 0 ? items.filter(item => {
        if (setSearchParameters().searchType !== "ALL") return item;
        return state.resultsType === "place" ? item.type === "place" : item.type === "event";
      }).map(item => __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ResultCard"], {
        key: item.id,
        item: item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 28
        }
      })) : null;
    }
  };

  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.queriedPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, setResultsButtons(), __jsx("button", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Sort")), __jsx("div", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.resultsSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, loadingDisplayItems())));
}

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

/***/ "./styles/Queried.module.scss":
/*!************************************!*\
  !*** ./styles/Queried.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"queriedPage": "Queried_queriedPage__2Rcjt",
	"queryDisplay": "Queried_queryDisplay__2jitW",
	"header": "Queried_header__2wmM2",
	"typeButton": "Queried_typeButton__19BJ8",
	"sort": "Queried_sort__EipTf",
	"resultsSlider": "Queried_resultsSlider__IHQxp"
};


/***/ }),

/***/ "./swr/useAPICalls.ts":
/*!****************************!*\
  !*** ./swr/useAPICalls.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAPICalls; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);

function useAPICalls(setSearchParameters, urlStart) {
  const {
    data: yelpPlaces,
    error: yelpPlacesError,
    isValidating: yelpPlacesLoading
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(setSearchParameters && setSearchParameters.searchType !== "EVENTS" ? `${urlStart}/api/yelpBusinessesAPI` : null, async url => {
    const {
      location,
      radius,
      placeType
    } = setSearchParameters;

    try {
      console.log(url ? "fetching yelp places" : "cancelled places fetch");
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          location,
          radius: parseInt(radius),
          term: placeType
        })
      });
      const responseJSON = await response.json();
      const {
        businesses
      } = responseJSON;
      businesses.forEach(business => (business["type"] = "place", business["source"] = "yelp", business["inParts"] = false));
      return businesses;
    } catch (err) {
      return err.message;
    }
  }, {
    revalidateOnFocus: false
  });
  const {
    data: yelpEvents,
    error: yelpEventsError,
    isValidating: yelpEventsLoading
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(setSearchParameters && setSearchParameters.searchType !== "PLACES" ? `${urlStart}/api/yelpEventsAPI` : null, async url => {
    const {
      location,
      radius,
      unixStartDate,
      unixEndDate
    } = setSearchParameters;

    try {
      console.log(url ? "fetching yelp events" : "cancelled events fetch");
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          location,
          radius: parseInt(radius),
          start_date: parseInt(unixStartDate),
          end_date: parseInt(unixEndDate)
        })
      });
      const responseJSON = await response.json();
      const {
        events
      } = responseJSON;
      events.forEach(event => (event["type"] = "event", event["source"] = "yelp", event["inParts"] = false));
      return events;
    } catch (err) {
      return err.message;
    }
  }, {
    revalidateOnFocus: false
  });
  const {
    data: ticketmaster,
    error: ticketmasterError,
    isValidating: ticketmasterLoading
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(setSearchParameters && setSearchParameters.searchType !== "PLACES" ? `${urlStart}/api/ticketmasterAPI` : null, async url => {
    const {
      location,
      radius,
      startFormatted,
      endFormatted
    } = setSearchParameters;

    try {
      console.log(url ? "fetching yelp events" : "cancelled ticketmaster fetch");
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          location,
          radius: Math.floor(parseInt(radius) * 0.001).toString(),
          startDateTime: startFormatted,
          endDateTime: endFormatted
        })
      });
      const responseJSON = await response.json();
      const {
        _embedded: {
          events
        }
      } = responseJSON;
      events.forEach(event => (event["source"] = "ticketmaster", event["type"] = "event", event["inParts"] = false));
      return events;
    } catch (err) {
      return err.message;
    }
  }, {
    revalidateOnFocus: false
  });
  const checkYelpPlacesArray = Array.isArray(yelpPlaces) ? yelpPlaces : [];
  const checkYelpEventsArray = Array.isArray(yelpEvents) ? yelpEvents : [];
  const checkTicketMasterArray = Array.isArray(ticketmaster) ? ticketmaster : [];
  return {
    items: [...checkTicketMasterArray, ...checkYelpEventsArray, ...checkYelpPlacesArray],
    loading: ticketmasterLoading || yelpEventsLoading || yelpPlacesLoading,
    errors: {
      yelpEventsError,
      yelpPlacesError,
      ticketmasterError
    }
  };
}

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWNjb3VudERpc3BsYXkvQWNjb3VudERpc3BsYXkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50RGlzcGxheS9BY2NvdW50RGlzcGxheS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50RGlzcGxheS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L0RhdGVQYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L0RyYWdQaWVjZS9EcmFnUGllY2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvRHJhZ1BpZWNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvRGV0YWlsc1NlY3Rpb24vRGV0YWlsc1NlY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydC9Ob3JtYWxQaWVjZS9EZXRhaWxzU2VjdGlvbi9EZXRhaWxzU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydC9Ob3JtYWxQaWVjZS9EZXRhaWxzU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L05vcm1hbFBpZWNlL05vcm1hbFBpZWNlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvTm9ybWFsUGllY2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvUGFydEltYWdlL1BhcnRJbWFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L05vcm1hbFBpZWNlL1BhcnRJbWFnZS9QYXJ0SW1hZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvUGFydEltYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydHMvRGF0ZVBhcnRzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnRzL0RhdGVQYXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVIYW1idXJnZXIvTW9iaWxlSGFtYnVyZ2VyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlSGFtYnVyZ2VyL01vYmlsZUhhbWJ1cmdlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVIYW1idXJnZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVNZW51L01vYmlsZU1lbnUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVNZW51L01vYmlsZU1lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlTWVudS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9OYXYubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYvTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkxpbmtzL05hdkxpbmtzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2TGlua3MvTmF2TGlua3MudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2TGlua3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0c0ljb24vUGFydHNJY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFydHNJY29uL1BhcnRzSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0c0ljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZUdyaWQvU2NoZWR1bGVHcmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVHcmlkL1NjaGVkdWxlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZUdyaWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvTG9naWMvU2NoZWR1bGVHcmlkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL0V2ZW50c0lucHV0L0V2ZW50c0lucHV0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL0V2ZW50c0lucHV0L0V2ZW50c0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9FdmVudHNJbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9QbGFjZXNJbnB1dC9QbGFjZXNJbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9QbGFjZXNJbnB1dC9QbGFjZXNJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvUGxhY2VzSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvU2VhcmNoU2VsZWN0b3IvU2VhcmNoU2VsZWN0b3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvU2VhcmNoU2VsZWN0b3IvU2VhcmNoU2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1NlYXJjaFNlbGVjdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZW5JbnB1dC9XaGVuSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvV2hlbklucHV0L1doZW5JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvV2hlbklucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZXJlSW5wdXQvV2hlcmVJbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9XaGVyZUlucHV0L1doZXJlSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZXJlSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvU2VhcmNoQm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1NlYXJjaEJveC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hJY29uL1NlYXJjaEljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hJY29uL1NlYXJjaEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoSWNvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50RGVzY3JpcHRpb24vRXZlbnREZXNjcmlwdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50RGVzY3JpcHRpb24vRXZlbnREZXNjcmlwdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvRXZlbnRzSW5mby9FdmVudERlc2NyaXB0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRQcmljZUdlbnJlL0V2ZW50UHJpY2VHZW5yZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50UHJpY2VHZW5yZS9FdmVudFByaWNlR2VucmUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRQcmljZUdlbnJlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRUaW1lc1ZlbnVlL0V2ZW50VGltZXNWZW51ZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50VGltZXNWZW51ZS9FdmVudFRpbWVzVmVudWUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRUaW1lc1ZlbnVlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvSW1hZ2VCYWNrZ3JvdW5kL0ltYWdlQmFja2dyb3VuZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9JbWFnZUJhY2tncm91bmQvSW1hZ2VCYWNrZ3JvdW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9JbWFnZUJhY2tncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGFydExpbmsvUGFydExpbmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGFydExpbmsvUGFydExpbmsudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BhcnRMaW5rL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vTG9jYXRpb24vTG9jYXRpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9Mb2NhdGlvbi9Mb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9Mb2NhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9QbGFjZXNJbmZvL1Bob25lL1Bob25lLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUGhvbmUvUGhvbmUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUGhvbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9QcmljZUFuZFR5cGUvUHJpY2VBbmRUeXBlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUHJpY2VBbmRUeXBlL1ByaWNlQW5kVHlwZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9QcmljZUFuZFR5cGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9SZXZpZXdzL1Jldmlld3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9SZXZpZXdzL1Jldmlld3MudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUmVzdWx0Q2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9SZXN1bHRDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWtuZExvYWRlci9TZWtuZExvYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nla25kTG9hZGVyL1Nla25kTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nla25kTG9hZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2gvW3F1ZXJpZWRdLnRzeCIsIndlYnBhY2s6Ly8vLi9zdGF0ZS9EYXRlUGFydHNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zdGF0ZS9HcmlkU3F1YXJlc0NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3N0YXRlL1NlYXJjaEdyaWRDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUXVlcmllZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zd3IvdXNlQVBJQ2FsbHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRhdGVwaWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJBY2NvdW50RGlzcGxheSIsInN0YXRlIiwic2V0U3RhdGUiLCJSZWFjdCIsImxvZ2dlZEluIiwiY3NzIiwiYWNjb3VudERpc3BsYXkiLCJEYXRlUGFydCIsImxvY2F0aW9uIiwicGFydCIsImdyaWRJbmRleCIsImlkIiwiRHJhZ1BpZWNlIiwicmVuZGVyIiwiRGV0YWlsc1NlY3Rpb24iLCJwcmljZSIsImRhdGUiLCJkZXRhaWxzIiwiZGlzcGF0Y2giLCJ1c2VQYXJ0c0Rpc3BhdGNoIiwiZGVmaW5lU2VjdGlvbnMiLCJjdXN0b21EZXRhaWxzIiwidGFyZ2V0IiwidHlwZSIsInBheWxvYWQiLCJ2YWx1ZSIsInBhcnREZXRhaWxzIiwiTm9ybWFsUGllY2UiLCJleHRlbmQiLCJpbWFnZUxvYWRlZCIsImRldGVybWluZUltYWdlQmFja2dyb3VuZFNvdXJjZSIsInNvdXJjZSIsImltYWdlX3VybCIsImltYWdlcyIsInVybCIsImRldGVybWluZVBhcnREZXRhaWxzIiwiZGV0ZXJtaW5lVmVudWUiLCJidXNpbmVzZXNzX2lkIiwiYnVzaW5lc3NfaWQiLCJfZW1iZWRkZWQiLCJ2ZW51ZXMiLCJuYW1lIiwiZGV0ZXJtaW5lUHJpY2UiLCJjb3N0IiwicHJpY2VSYW5nZXMiLCJub3JtYWxQaWVjZSIsImV4dGVuZGVkIiwiY29sb3IiLCJwYXJ0VGl0bGUiLCJkZWxldGUiLCJQYXJ0SW1hZ2UiLCJjaGlsZHJlbiIsInBhcnRJbWFnZSIsImJhY2tncm91bmQiLCJEYXRlUGFydHMiLCJwYXJ0cyIsInVzZVBhcnRzU3RhdGUiLCJpbnB1dCIsImhhbmRsZVBhcnRTdWJtaXQiLCJhbGVydCIsIk1hdGgiLCJyYW5kb20iLCJkYXRlUGFydHMiLCJwYXJ0c1dyYXBwZXIiLCJwYXJ0SW5wdXQiLCJjb2xvcklucHV0IiwiYWRkIiwicGFydHNMaXN0IiwicGFydHNJbm5lciIsIm1hcCIsIm1vZGFsIiwiTW9iaWxlSGFtYnVyZ2VyIiwiZGlzcGxheUxpbmtzIiwibGlua3MiLCJzdG9wV2luZG93U2Nyb2xsIiwiaGFuZGxlQ2xpY2siLCJkaXNwbGF5IiwiaGFtYnVyZ2VyIiwiZXhpdCIsInRvcExpbmUiLCJtaWRkbGVMaW5lIiwiYm90dG9tTGluZSIsIk1vYmlsZU1lbnUiLCJtb2JpbGVNZW51IiwibW9kYWxTZWN0aW9uIiwiTmF2IiwiZGlzcGxheVBhcnRzIiwic2VhcmNoQm94IiwiZGlzcGxheVNlYXJjaEJveCIsImFwcGx5VHJhbnNpdGlvbnMiLCJtb2RhbFdpbmRvdyIsImVudGVyIiwiZW50ZXJBY3RpdmUiLCJleGl0QWN0aXZlIiwiYXBwbHlNb2RhbFRyYW5zaXRpb25zIiwiZWxlbWVudCIsInN0b3AiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJuYXYiLCJsb2dvTGluayIsIk5hdkxpbmtzIiwib3JpZW50YXRpb24iLCJsaW5rc1dyYXBwZXIiLCJQYXJ0c0ljb24iLCJwYXJ0c0ljb24iLCJzdDEiLCJzdDAiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0MiIsIlNjaGVkdWxlR3JpZCIsImdyaWRXcmFwcGVyIiwiaW5uZXJHcmlkIiwiY29uc3RydWN0b3IiLCJ1bml4U3RhcnREYXRlIiwidW5peEVuZERhdGUiLCJzdGFydEhvdXIiLCJob3VyRGlmZmVyZW5jZSIsInRlbXBsYXRlQXJlYXMiLCJjb2x1bW5BbW91bnQiLCJlbmRIb3VyIiwiaG91clN0cmluZ3MiLCJudW1iZXJvZlNxdWFyZXMiLCJzZXRTcXVhcmVzIiwidGltZURpZmZlcmVuY2UiLCJob3VycyIsImZsb29yIiwibnVtQ29sdW1ucyIsIm51bWJlck9mU3F1YXJlcyIsInNldEhvdXJzIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJnZXRIb3VycyIsInNldEdyaWRUZW1wbGF0ZSIsInNxdWFyZSIsInJvd1N0cmluZyIsInJlcGVhdCIsInNldEhvdXJzSGVhZGVyIiwiaG91ckNvdW50ZXIiLCJzdGFydEhvdXJDb3VudGVyIiwiaG91ck51bWJlcnMiLCJwdXNoIiwiZm9yRWFjaCIsImhvdXIiLCJzZXRHcmlkIiwiRXZlbnRzSW5wdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50c0NhdGVnb3J5IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJmaWVsZCIsImV2ZW50cyIsIlBsYWNlc0lucHV0IiwicGxhY2VUeXBlIiwicGxhY2VzIiwiU2VhcmNoU2VsZWN0b3IiLCJzZWFyY2hUeXBlIiwiaGlnaGxpZ2h0Iiwic2V0SGlnaGxpZ2h0IiwiYWxsIiwic2VhcmNoU2VsZWN0b3IiLCJzZWxlY3RvciIsImhpZ2hsaWdodGVkIiwiYWxsU1ZHIiwiV2hlbklucHV0IiwiaGFuZGxlUXVlcnlEYXRlIiwiaGFuZGxlRGF0ZUNoYW5nZSIsInRvZGF5Iiwid2hlbiIsImZyb20iLCJ0byIsIldoZXJlSW5wdXQiLCJyYWRpdXMiLCJ3aGVyZSIsIlNlYXJjaEJveCIsInByb3BzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInN0YXJ0Rm9ybWF0dGVkIiwiZW5kRm9ybWF0dGVkIiwidGlja2V0TWFzdGVyQ2F0ZWdvcmllcyIsInllbHBDYXRlZ29yaWVzIiwic3F1YXJlc0Rpc3BhdGNoIiwidXNlU3F1YXJlc0Rpc3BhdGNoIiwiZ3JpZERpc3BhdGNoIiwidXNlR3JpZERpc3BhdGNoIiwiaGFuZGxlU3VibWl0IiwibmV3RGF0ZXNJbnB1dCIsImdyaWRUZW1wbGF0ZSIsImNoZWNrRmllbGRzRGlzcGxheUxpbmsiLCJwYXRobmFtZSIsInF1ZXJ5Iiwia2V5Iiwicm91bmQiLCJnZXRUaW1lIiwidGltZU9mZlNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwibG9jYWxTdGFydFRpbWVJU08iLCJ0b0lTT1N0cmluZyIsImxvY2FsU3RhcnRUaW1lSVNPRm9ybWF0dGVkIiwic3Vic3RyaW5nIiwibG9jYWxFbmRUaW1lSVNPIiwibG9jYWxFbmRUaW1lSVNPRm9ybWF0dGVkIiwiU2VhcmNoSWNvbiIsInNlYXJjaEljb24iLCJFdmVudERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJ1bndhbnRlZENoYXJhY3RlcnMiLCJkZXNjcmlwdGlvbldyYXBwZXIiLCJzZWFyY2giLCJyZXBsYWNlIiwiRXZlbnRQcmljZUdlbnJlIiwidmVudWUiLCJnZW5yZSIsInBhcnNlUHJpY2UiLCJtaW4iLCJ0cnVlUHJpY2UiLCJwcmljZVN0cmluZyIsInRvU3RyaW5nIiwiZGVjaW1hbEluZGV4IiwiaW5kZXhPZiIsImNlbnRzIiwibGVuZ3RoIiwic2V0R2VucmUiLCJjaGFyYWN0ZXJTcGxpdCIsInNwbGl0dGVkIiwic3BsaXQiLCJ1cHBlckNhc2UiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJqb2luIiwic2VnbWVudFN0cmluZyIsImdlbnJlU3RyaW5nIiwic2VnbWVudCIsImV2ZW50UHJpY2UiLCJFdmVudFRpbWVzVmVudWUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiZGlzcGxheVZlbnVlIiwicGFyc2VZZWxwVGltZXMiLCJ5ZWxwU3RhcnRPYmplY3QiLCJ5ZWxwRW5kT2JqZWN0IiwieWVscFN0YXJ0VGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsInN0YXJ0QW1QbSIsInN0YXJ0V2l0aG91dFNlY29uZHMiLCJ5ZWxwU3RhcnRGb3JtYXR0ZWRUaW1lIiwieWVscFN0YXJ0RGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWxwRW5kVGltZSIsImVuZEFtUG0iLCJlbmRXaXRob3V0U2Vjb25kcyIsInllbHBFbmRGb3JtYXR0ZWRUaW1lIiwieWVscEVuZERhdGUiLCJwYXJzZVRpY2tldE1hc3RlclRpbWUiLCJ0aWNrZXRtYXN0ZXJTdGFydE9iamVjdCIsInRpY2tldG1hc3RlclN0YXJ0VGltZSIsInRpY2tldG1hc3RlclN0YXJ0Rm9ybWF0dGVkVGltZSIsInRpY2tldG1hc3RlckRhdGUiLCJkZXRlcm1pbmVTb3VyY2UiLCJ0aW1lcyIsIkltYWdlQmFja2dyb3VuZCIsImhhbmRsZVJldHJhY3QiLCJkZXRlcm1pbmVJbWFnZVJhdGlvIiwiYnlXaWR0aCIsImltZ0JhY2tncm91bmQiLCJQYXJ0TGluayIsImxpbmsiLCJMb2NhdGlvbiIsInN0cmVldCIsImNpdHkiLCJhZGRyZXNzIiwiUGhvbmUiLCJwaG9uZSIsIlByaWNlQW5kVHlwZSIsImluc2VydENpdHkiLCJzaW5ndWxhclR5cGUiLCJpbmRleExhc3RMZXR0ZXIiLCJtYXJnaW5MZWZ0IiwicGxhY2VQcmljZSIsImxpZ2h0IiwiUmV2aWV3cyIsInJldmlld0NvdW50IiwicmF0aW5nIiwic2V0U3RhcnMiLCJFbXB0eVN0YXIiLCJmaWxsIiwiRnVsbFN0YXIiLCJIYWxmU3RhciIsInJhdGluZ0ludCIsInJlbWFpbmRlciIsInN0YXJUeXBlcyIsIm5ld1N0YXJzIiwiaXRlbSIsImluZGV4IiwicmV2aWV3V3JhcHBlciIsInN0YXJXcmFwcGVyIiwic3RhciIsIlJlc3VsdENhcmQiLCJyZXN1bHRzTG9hZGluZyIsImFkZGVkIiwibW9yZUluZm8iLCJHbG9iYWxQYXJ0cyIsImkiLCJtb3JlRGV0YWlscyIsImRldGFpbHNXcmFwcGVyIiwiZGlzcGxheV9hZGRyZXNzIiwiZXZlbnRfc2l0ZV91cmwiLCJzZXRDYXJkRGV0YWlscyIsImluZm9CYXIiLCJ0aXRsZSIsInJldmlld19jb3VudCIsImNhdGVnb3JpZXMiLCJzdGFyc1dyYXBwZXIiLCJ0aWNrZXRtYXN0ZXJDbGFzc2lmaWNhdGlvbiIsImNsYXNzaWZpY2F0aW9ucyIsInRpbWVfc3RhcnQiLCJkYXRlcyIsInN0YXJ0IiwibG9jYWxEYXRlIiwibG9jYWxUaW1lIiwidGltZV9lbmQiLCJjYXRlZ29yeSIsImhhbmRsZVBhcnQiLCJyZXN1bHRDYXJkIiwiYWRkQnV0dG9uIiwibG9hZGluZ0FkZCIsImxvYWRpbmdCYXIiLCJsb2FkZWQiLCJsb2FkaW5nIiwicmVtb3ZlIiwic3RvcFByb3BhZ2F0aW9uIiwiU2VrbmRMb2FkZXIiLCJsb2FkZXIiLCJzZWtuZEhhbmQiLCJMYXlvdXQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwic3VjY2VzcyIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwicCIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiY2xlYW5QYXRobmFtZSIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiZGVjb2RlIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJRdWVyaWVkIiwicmVzdWx0c1R5cGUiLCJ1c2VSb3V0ZXIiLCJ1cmxTdGFydCIsInNldFNlYXJjaFBhcmFtZXRlcnMiLCJxdWVyaWVkIiwiY2hlY2tVUkxJc1N0cmluZyIsInBhcmFtVmFsdWVBcnJheSIsIlNlYXJjaFBhcmFtcyIsImluZGV4T2ZFcXVhbCIsInBhcmFtS2V5IiwicGFyYW1WYWx1ZSIsIml0ZW1zIiwiZXJyb3JzIiwidXNlQVBJQ2FsbHMiLCJsb2ciLCJzZXRSZXN1bHRzQnV0dG9ucyIsInR5cGVCdXR0b24iLCJsb2FkaW5nRGlzcGxheUl0ZW1zIiwiZmlsdGVyIiwicXVlcmllZFBhZ2UiLCJoZWFkZXIiLCJzb3J0IiwicmVzdWx0c1NsaWRlciIsInBhcnRzUmVkdWNlciIsImFjdGlvbiIsIlBhcnRzU3RhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiUGFydHNEaXNwYXRjaENvbnRleHQiLCJQYXJ0c1Byb3ZpZGVyIiwiQ29va2llIiwiSlNPTiIsInBhcnNlIiwiY29udGV4dCIsIkVycm9yIiwic3F1YXJlc1JlZHVjZXIiLCJzcXVhcmVzIiwiU3F1YXJlc0NvbnRleHQiLCJTcXVhcmVzRGlzcGF0Y2giLCJTcXVhcmVzUHJvdmlkZXIiLCJ1c2VTcXVhcmVzU3RhdGUiLCJncmlkUmVkdWNlciIsIkdyaWRTdGF0ZUNvbnRleHQiLCJHcmlkRGlzcGF0Y2hDb250ZXh0IiwiR3JpZFByb3ZpZGVyIiwidXNlR3JpZFN0YXRlIiwieWVscFBsYWNlcyIsInllbHBQbGFjZXNFcnJvciIsImlzVmFsaWRhdGluZyIsInllbHBQbGFjZXNMb2FkaW5nIiwidXNlU1dSIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJBY2NlcHQiLCJzdHJpbmdpZnkiLCJ0ZXJtIiwicmVzcG9uc2VKU09OIiwianNvbiIsImJ1c2luZXNzZXMiLCJidXNpbmVzcyIsInJldmFsaWRhdGVPbkZvY3VzIiwieWVscEV2ZW50cyIsInllbHBFdmVudHNFcnJvciIsInllbHBFdmVudHNMb2FkaW5nIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwidGlja2V0bWFzdGVyIiwidGlja2V0bWFzdGVyRXJyb3IiLCJ0aWNrZXRtYXN0ZXJMb2FkaW5nIiwic3RhcnREYXRlVGltZSIsImVuZERhdGVUaW1lIiwiY2hlY2tZZWxwUGxhY2VzQXJyYXkiLCJpc0FycmF5IiwiY2hlY2tZZWxwRXZlbnRzQXJyYXkiLCJjaGVja1RpY2tldE1hc3RlckFycmF5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxNQUFNQSxjQUF3QixHQUFHLE1BQU07QUFDNUMsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFB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QUlsRCxFQUpKO0FBTUEsU0FBTztBQUNMdkQsU0FBSyxFQUFFLENBQ0wsR0FBRytELHNCQURFLEVBRUwsR0FBR0Qsb0JBRkUsRUFHTCxHQUFHRixvQkFIRSxDQURGO0FBTUw5VSxXQUFPLEVBQUUyVSxtQkFBbUIsSUFBSUwsaUJBQXZCLElBQTRDZixpQkFOaEQ7QUFPTHBDLFVBQU0sRUFBRTtBQUFFa0QscUJBQUY7QUFBbUJoQixxQkFBbkI7QUFBb0NxQjtBQUFwQztBQVBILEdBQVA7QUFTRCxDOzs7Ozs7Ozs7OztBQzNNRCxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9zZWFyY2gvW3F1ZXJpZWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZWFyY2gvW3F1ZXJpZWRdLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWNjb3VudERpc3BsYXlcIjogXCJBY2NvdW50RGlzcGxheV9hY2NvdW50RGlzcGxheV9fMU1DbnVcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0FjY291bnREaXNwbGF5Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudERpc3BsYXk6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8eyBsb2dnZWRJbjogYm9vbGVhbiB9Pih7XHJcbiAgICBsb2dnZWRJbjogZmFsc2UsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYWNjb3VudERpc3BsYXl9PlxyXG4gICAgICA8c3Bhbj4ge3N0YXRlLmxvZ2dlZEluID8gXCJHcmFudFwiIDogXCJTaWduIEluXCJ9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgQWNjb3VudERpc3BsYXkgfSBmcm9tIFwiLi9BY2NvdW50RGlzcGxheVwiO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTm9ybWFsUGllY2UgfSBmcm9tIFwiLi9Ob3JtYWxQaWVjZVwiO1xyXG5pbXBvcnQgeyBEcmFnUGllY2UgfSBmcm9tIFwiLi9EcmFnUGllY2VcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBwYXJ0OiB7fTtcclxuICBpbmRleDogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGVQYXJ0OiBSZWFjdC5GQzx7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBwYXJ0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gIGdyaWRJbmRleDogbnVtYmVyIHwgbnVsbDtcclxufT4gPSAoeyBsb2NhdGlvbiwgcGFydCwgZ3JpZEluZGV4IH0pID0+IHtcclxuICByZXR1cm4gbG9jYXRpb24gPT09IFwibGlzdFwiID8gKFxyXG4gICAgPE5vcm1hbFBpZWNlIGtleT17cGFydC5pZH0gcGFydD17cGFydH0+PC9Ob3JtYWxQaWVjZT5cclxuICApIDogKFxyXG4gICAgPERyYWdQaWVjZT48L0RyYWdQaWVjZT5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnUGllY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHsgRHJhZ1BpZWNlIH0gZnJvbSBcIi4vRHJhZ1BpZWNlXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImN1c3RvbURldGFpbHNcIjogXCJEZXRhaWxzU2VjdGlvbl9jdXN0b21EZXRhaWxzX18xTEw0WlwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlUGFydHNEaXNwYXRjaCxcclxuICB1c2VQYXJ0c1N0YXRlLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zdGF0ZS9EYXRlUGFydHNDb250ZXh0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vRGV0YWlsc1NlY3Rpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxzU2VjdGlvbjogUmVhY3QuRkM8e1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xyXG4gIHByaWNlPzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGRhdGU/OiBzdHJpbmc7XHJcbiAgZGV0YWlscz86IHN0cmluZztcclxufT4gPSAoeyBsb2NhdGlvbiwgcHJpY2UsIGRhdGUsIGlkLCBkZXRhaWxzIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZVBhcnRzRGlzcGF0Y2goKTtcclxuICBjb25zdCBkZWZpbmVTZWN0aW9uczogKCkgPT4gSlNYLkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWxvY2F0aW9uICYmICFwcmljZSAmJiAhZGF0ZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3MuY3VzdG9tRGV0YWlsc31cclxuICAgICAgICAgIHZhbHVlPXtkZXRhaWxzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2RldGFpbHMgPT09IFwiXCIgPyBcIkVudGVyIGluIHNvbWUgZGV0YWlsc1wiIDogZGV0YWlsc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiQ0hBTkdFX0NVU1RPTV9ERVRBSUxcIixcclxuICAgICAgICAgICAgICBwYXlsb2FkOiB7IGlkLCBkZXRhaWxzOiB0YXJnZXQudmFsdWUgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17Y3NzLnBhcnREZXRhaWxzfT48L3A+O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGRlZmluZVNlY3Rpb25zKCk7XHJcbn07XHJcbiIsImV4cG9ydCB7IERldGFpbHNTZWN0aW9uIH0gZnJvbSBcIi4vRGV0YWlsc1NlY3Rpb25cIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibm9ybWFsUGllY2VcIjogXCJOb3JtYWxQaWVjZV9ub3JtYWxQaWVjZV9fM3pOMmdcIixcblx0XCJleHRlbmRlZFwiOiBcIk5vcm1hbFBpZWNlX2V4dGVuZGVkX18yLVFoQlwiLFxuXHRcInBhcnRUaXRsZVwiOiBcIk5vcm1hbFBpZWNlX3BhcnRUaXRsZV9fMm9DdnFcIixcblx0XCJkZWxldGVcIjogXCJOb3JtYWxQaWVjZV9kZWxldGVfXzNqQVJUXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9Ob3JtYWxQaWVjZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBEZXRhaWxzU2VjdGlvbiB9IGZyb20gXCIuL0RldGFpbHNTZWN0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVBhcnRzRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBQYXJ0SW1hZ2UgfSBmcm9tIFwiLi9QYXJ0SW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOb3JtYWxQaWVjZTogUmVhY3QuRkM8eyBwYXJ0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9IH0+ID0gKHtcclxuICBwYXJ0LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7XHJcbiAgICBleHRlbmQ6IGJvb2xlYW47XHJcbiAgICBpbWFnZUxvYWRlZDogYm9vbGVhbjtcclxuICB9Pih7XHJcbiAgICBleHRlbmQ6IGZhbHNlLFxyXG4gICAgaW1hZ2VMb2FkZWQ6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlUGFydHNEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGRldGVybWluZUltYWdlQmFja2dyb3VuZFNvdXJjZTogKCkgPT4gc3RyaW5nID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChwYXJ0LnR5cGUpIHtcclxuICAgICAgY2FzZSBcInBsYWNlXCI6XHJcbiAgICAgICAgcmV0dXJuIHBhcnQuc291cmNlID09PSBcInllbHBcIiA/IHBhcnQuaW1hZ2VfdXJsIDogbnVsbDtcclxuICAgICAgY2FzZSBcImV2ZW50XCI6XHJcbiAgICAgICAgcmV0dXJuIHBhcnQuc291cmNlID09PSBcInllbHBcIiA/IHBhcnQuaW1hZ2VfdXJsIDogcGFydC5pbWFnZXNbMF0udXJsO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRldGVybWluZVBhcnREZXRhaWxzOiAoKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAocGFydC50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJjdXN0b21cIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPERldGFpbHNTZWN0aW9uIGlkPXtwYXJ0LmlkfSBkZXRhaWxzPXtwYXJ0LmRldGFpbHN9PjwvRGV0YWlsc1NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcImV2ZW50XCI6XHJcbiAgICAgICAgY29uc3QgZGV0ZXJtaW5lVmVudWU6ICgpID0+IHN0cmluZyB8IG51bGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHBhcnQuc291cmNlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5ZWxwXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuICFwYXJ0LmJ1c2luZXNlc3NfaWQgfHwgcGFydC5idXNpbmVzc19pZCA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICA6IHBhcnQuYnVzaW5lc3NfaWQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aWNrZXRtYXN0ZXJcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gcGFydC5fZW1iZWRkZWQudmVudWVzWzBdLm5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZGV0ZXJtaW5lUHJpY2U6ICgpID0+XHJcbiAgICAgICAgICB8IHsgW2tleTogc3RyaW5nXTogYW55IH1cclxuICAgICAgICAgIHwgbnVsbFxyXG4gICAgICAgICAgfCBzdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKHBhcnQuc291cmNlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5ZWxwXCI6XHJcbiAgICAgICAgICAgICAgaWYgKCFwYXJ0LmNvc3QpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJ0LmNvc3Q7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aWNrZXRtYXN0ZXJcIjpcclxuICAgICAgICAgICAgICBpZiAoIXBhcnQucHJpY2VSYW5nZXMpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJ0LnByaWNlUmFuZ2VzWzBdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RGV0YWlsc1NlY3Rpb25cclxuICAgICAgICAgICAgbG9jYXRpb249e2RldGVybWluZVZlbnVlKCl9XHJcbiAgICAgICAgICAgIC8vIHByaWNlPXtkZXRlcm1pbmVQcmljZSgpfVxyXG4gICAgICAgICAgPjwvRGV0YWlsc1NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcInBsYWNlXCI6XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLm5vcm1hbFBpZWNlfSAke3N0YXRlLmV4dGVuZCA/IGNzcy5leHRlbmRlZCA6IG51bGx9YH1cclxuICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgZXh0ZW5kOiB0cnVlIH0pKX1cclxuICAgID5cclxuICAgICAgPFBhcnRJbWFnZVxyXG4gICAgICAgIHR5cGU9e3BhcnQudHlwZX1cclxuICAgICAgICBjb2xvcj17cGFydC50eXBlID09PSBcImN1c3RvbVwiID8gcGFydC5jb2xvciA6IG51bGx9XHJcbiAgICAgICAgaW1hZ2VMb2FkZWQ9e3N0YXRlLmltYWdlTG9hZGVkfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtkZXRlcm1pbmVJbWFnZUJhY2tncm91bmRTb3VyY2UoKX1cclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBvbkxvYWQ9eygpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGltYWdlTG9hZGVkOiB0cnVlIH0pKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1BhcnRJbWFnZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wYXJ0VGl0bGV9PlxyXG4gICAgICAgIDxzcGFuPntwYXJ0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmRlbGV0ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJSRU1PVkVfUEFSVFwiLCBwYXlsb2FkOiB7IGlkOiBwYXJ0LmlkIH0gfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBYXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c3RhdGUuZXh0ZW5kID8gZGV0ZXJtaW5lUGFydERldGFpbHMoKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYXJ0SW1hZ2VcIjogXCJQYXJ0SW1hZ2VfcGFydEltYWdlX18yU3dBeFwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUGFydEltYWdlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGFydEltYWdlOiBSZWFjdC5GQzx7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGNvbG9yPzogc3RyaW5nO1xyXG4gIGltYWdlTG9hZGVkOiBib29sZWFuO1xyXG59PiA9ICh7IHR5cGUsIGNvbG9yLCBpbWFnZUxvYWRlZCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y3NzLnBhcnRJbWFnZX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgY29sb3IgfHwgaW1hZ2VMb2FkZWRcclxuICAgICAgICAgICAgPyBjb2xvclxyXG4gICAgICAgICAgICA6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWUwOTc5LCAjZmY2YTAwKVwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7dHlwZSAhPT0gXCJjdXN0b21cIiB8fCAhaW1hZ2VMb2FkZWQgPyBjaGlsZHJlbiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBQYXJ0SW1hZ2UgfSBmcm9tIFwiLi9QYXJ0SW1hZ2VcIjtcclxuIiwiZXhwb3J0IHsgTm9ybWFsUGllY2UgfSBmcm9tIFwiLi9Ob3JtYWxQaWVjZVwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkYXRlUGFydHNcIjogXCJEYXRlUGFydHNfZGF0ZVBhcnRzX18yTjJRWFwiLFxuXHRcInBhcnRzV3JhcHBlclwiOiBcIkRhdGVQYXJ0c19wYXJ0c1dyYXBwZXJfX1NzY0I1XCIsXG5cdFwiY29sb3JJbnB1dFwiOiBcIkRhdGVQYXJ0c19jb2xvcklucHV0X18yQXhRZFwiLFxuXHRcInBhcnRJbnB1dFwiOiBcIkRhdGVQYXJ0c19wYXJ0SW5wdXRfXzJ4OVNkXCIsXG5cdFwiYWRkXCI6IFwiRGF0ZVBhcnRzX2FkZF9fMUZYb19cIixcblx0XCJwYXJ0c0xpc3RcIjogXCJEYXRlUGFydHNfcGFydHNMaXN0X18zVVI2RFwiLFxuXHRcInBhcnRzSW5uZXJcIjogXCJEYXRlUGFydHNfcGFydHNJbm5lcl9fMlVPWjhcIixcblx0XCJtb2RhbFwiOiBcIkRhdGVQYXJ0c19tb2RhbF9fZU1seTVcIixcblx0XCJzY2hlZHVsZVBhZ2VcIjogXCJEYXRlUGFydHNfc2NoZWR1bGVQYWdlX18zMF9iOFwiLFxuXHRcInBhcnRzLWVudGVyXCI6IFwiRGF0ZVBhcnRzX3BhcnRzLWVudGVyX18yZ2NrelwiLFxuXHRcInBhcnRzLWVudGVyLWFjdGl2ZVwiOiBcIkRhdGVQYXJ0c19wYXJ0cy1lbnRlci1hY3RpdmVfXzJjbjVuXCIsXG5cdFwicGFydHMtZXhpdFwiOiBcIkRhdGVQYXJ0c19wYXJ0cy1leGl0X18zSjktUlwiLFxuXHRcInBhcnRzLWV4aXQtYWN0aXZlXCI6IFwiRGF0ZVBhcnRzX3BhcnRzLWV4aXQtYWN0aXZlX18xa2J3NFwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVBhcnRzU3RhdGUsIHVzZVBhcnRzRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0RhdGVQYXJ0cy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBEYXRlUGFydCB9IGZyb20gXCIuLi9EYXRlUGFydC9EYXRlUGFydFwiO1xyXG5leHBvcnQgY29uc3QgRGF0ZVBhcnRzOiBSZWFjdC5GQzx7IGxvY2F0aW9uOiBzdHJpbmcgfT4gPSAoeyBsb2NhdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBwYXJ0cyB9ID0gdXNlUGFydHNTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8eyBpbnB1dDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+KHtcclxuICAgIGlucHV0OiBcIlwiLFxyXG4gICAgY29sb3I6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWUwOTc5LCAjZmY2YTAwKVwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZVBhcnRzRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFydFN1Ym1pdDogKCkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgIGlmIChzdGF0ZS5pbnB1dCA9PT0gXCJcIikgcmV0dXJuIGFsZXJ0KFwiRmlsbCBvdXQgaW5wdXRcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogXCJBRERfUEFSVFwiLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHBhcnQ6IHtcclxuICAgICAgICAgICAgbmFtZTogc3RhdGUuaW5wdXQsXHJcbiAgICAgICAgICAgIGNvbG9yOiBzdGF0ZS5jb2xvcixcclxuICAgICAgICAgICAgdHlwZTogXCJjdXN0b21cIixcclxuICAgICAgICAgICAgZGV0YWlsczogXCJcIixcclxuICAgICAgICAgICAgaWQ6IGAke25hbWV9JHtNYXRoLnJhbmRvbSgpfWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBpbnB1dDogXCJcIiB9KSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjc3MuZGF0ZVBhcnRzfSAke2Nzc1tsb2NhdGlvbl19YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucGFydHNXcmFwcGVyfT5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5EYXRlIFBhcnRzPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW5vdGhlciBJZGVhP1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5pbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PlxyXG4gICAgICAgICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGlucHV0OiB0YXJnZXQudmFsdWUgfSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MucGFydElucHV0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29sb3JJbnB1dH0+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNzk5ZjBjLCAjZmZlMDAwKVwiLFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTU1Nzk5LCAjMTU5OTU3KVwiLFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWUwOTc5LCAjZmY2YTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzMzMzM5OSwgI2ZmMDBjYylcIixcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBmMjAyNywgIzJjNTM2NClcIixcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmFkZH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgYmFja2dyb3VuZDogc3RhdGUuY29sb3IgfX1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUGFydFN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBhcnRzTGlzdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBhcnRzSW5uZXJ9PlxyXG4gICAgICAgICAgICB7cGFydHMubWFwKChwYXJ0KSA9PiAoXHJcbiAgICAgICAgICAgICAgPERhdGVQYXJ0XHJcbiAgICAgICAgICAgICAgICBrZXk9e3BhcnQuaWR9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbj17XCJsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICBwYXJ0PXtwYXJ0fVxyXG4gICAgICAgICAgICAgICAgZ3JpZEluZGV4PXtwYXJ0LmdyaWRJbmRleH1cclxuICAgICAgICAgICAgICA+PC9EYXRlUGFydD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubW9kYWx9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgRGF0ZVBhcnRzIH0gZnJvbSBcIi4vRGF0ZVBhcnRzXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhhbWJ1cmdlclwiOiBcIk1vYmlsZUhhbWJ1cmdlcl9oYW1idXJnZXJfXzNyRVdoXCIsXG5cdFwidG9wTGluZVwiOiBcIk1vYmlsZUhhbWJ1cmdlcl90b3BMaW5lX18xUUFsc1wiLFxuXHRcImJvdHRvbUxpbmVcIjogXCJNb2JpbGVIYW1idXJnZXJfYm90dG9tTGluZV9fM1ZzeG1cIixcblx0XCJleGl0XCI6IFwiTW9iaWxlSGFtYnVyZ2VyX2V4aXRfXzF5RkNrXCIsXG5cdFwibWlkZGxlTGluZVwiOiBcIk1vYmlsZUhhbWJ1cmdlcl9taWRkbGVMaW5lX18zLW9iZVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vTW9iaWxlSGFtYnVyZ2VyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBOYXZTdGF0ZSB9IGZyb20gXCIuLi9OYXZcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZGlzcGxheUxpbmtzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxOYXZTdGF0ZT4+O1xyXG4gIGxpbmtzOiBOYXZTdGF0ZTtcclxuICBzdG9wV2luZG93U2Nyb2xsOiAoYXJnOiBib29sZWFuKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vYmlsZUhhbWJ1cmdlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBkaXNwbGF5TGlua3MsXHJcbiAgbGlua3MsXHJcbiAgc3RvcFdpbmRvd1Njcm9sbCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gICAgaWYgKGxpbmtzLmRpc3BsYXkpIHtcclxuICAgICAgcmV0dXJuIGRpc3BsYXlMaW5rcyh7IGRpc3BsYXk6IGZhbHNlIH0pLCBzdG9wV2luZG93U2Nyb2xsKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkaXNwbGF5TGlua3MoeyBkaXNwbGF5OiB0cnVlIH0pLCBzdG9wV2luZG93U2Nyb2xsKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtjc3MuaGFtYnVyZ2VyfSAke2xpbmtzLmRpc3BsYXkgPyBjc3MuZXhpdCA6IG51bGx9YH1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudG9wTGluZX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWlkZGxlTGluZX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYm90dG9tTGluZX0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBNb2JpbGVIYW1idXJnZXIgfSBmcm9tIFwiLi9Nb2JpbGVIYW1idXJnZXJcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9iaWxlTWVudVwiOiBcIk1vYmlsZU1lbnVfbW9iaWxlTWVudV9fSnpUWElcIixcblx0XCJtb2RhbFNlY3Rpb25cIjogXCJNb2JpbGVNZW51X21vZGFsU2VjdGlvbl9fM0xLMDBcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rcyB9IGZyb20gXCIuLi9OYXZMaW5rc1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL01vYmlsZU1lbnUubW9kdWxlLnNjc3NcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2JpbGVNZW51OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tb2JpbGVNZW51fT5cclxuICAgICAgPE5hdkxpbmtzIG9yaWVudGF0aW9uPVwicG9ydHJhaXRcIj48L05hdkxpbmtzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1vZGFsU2VjdGlvbn0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBNb2JpbGVNZW51IH0gZnJvbSBcIi4vTW9iaWxlTWVudVwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJOYXZfbmF2X18zNjI0QVwiLFxuXHRcImxvZ29MaW5rXCI6IFwiTmF2X2xvZ29MaW5rX18yUWIwV1wiLFxuXHRcInBhcnRzLWVudGVyXCI6IFwiTmF2X3BhcnRzLWVudGVyX18yRHZwQ1wiLFxuXHRcInBhcnRzLWVudGVyLWFjdGl2ZVwiOiBcIk5hdl9wYXJ0cy1lbnRlci1hY3RpdmVfXzFkcHpDXCIsXG5cdFwicGFydHMtZXhpdFwiOiBcIk5hdl9wYXJ0cy1leGl0X18xTXk1OFwiLFxuXHRcInBhcnRzLWV4aXQtYWN0aXZlXCI6IFwiTmF2X3BhcnRzLWV4aXQtYWN0aXZlX18yRnVNMFwiLFxuXHRcImxpbmtzLWVudGVyXCI6IFwiTmF2X2xpbmtzLWVudGVyX19ORS03OFwiLFxuXHRcImxpbmtzLWVudGVyLWFjdGl2ZVwiOiBcIk5hdl9saW5rcy1lbnRlci1hY3RpdmVfXzFySFo3XCIsXG5cdFwibGlua3MtZXhpdFwiOiBcIk5hdl9saW5rcy1leGl0X18xVTZ1RVwiLFxuXHRcImxpbmtzLWV4aXQtYWN0aXZlXCI6IFwiTmF2X2xpbmtzLWV4aXQtYWN0aXZlX18yQjJoaVwiLFxuXHRcInNlYXJjaC1lbnRlclwiOiBcIk5hdl9zZWFyY2gtZW50ZXJfXzJxUURGXCIsXG5cdFwic2VhcmNoLWVudGVyLWFjdGl2ZVwiOiBcIk5hdl9zZWFyY2gtZW50ZXItYWN0aXZlX18zSENrTVwiLFxuXHRcInNlYXJjaC1leGl0XCI6IFwiTmF2X3NlYXJjaC1leGl0X19taXpNd1wiLFxuXHRcInNlYXJjaC1leGl0LWFjdGl2ZVwiOiBcIk5hdl9zZWFyY2gtZXhpdC1hY3RpdmVfXzF5eTVxXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xyXG5pbXBvcnQgeyBNb2JpbGVIYW1idXJnZXIgfSBmcm9tIFwiLi4vTW9iaWxlSGFtYnVyZ2VyXCI7XHJcbmltcG9ydCB7IE1vYmlsZU1lbnUgfSBmcm9tIFwiLi4vTW9iaWxlTWVudVwiO1xyXG5pbXBvcnQgeyBEYXRlUGFydHMgfSBmcm9tIFwiLi4vRGF0ZVBhcnRzXCI7XHJcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwiLi4vU2VhcmNoSWNvblwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tIFwiLi4vU2VhcmNoQm94XCI7XHJcbmltcG9ydCB7IE5hdkxpbmtzIH0gZnJvbSBcIi4uL05hdkxpbmtzXCI7XHJcbmltcG9ydCB7IFBhcnRzSWNvbiB9IGZyb20gXCIuLi9QYXJ0c0ljb25cIjtcclxuaW1wb3J0IHsgQWNjb3VudERpc3BsYXkgfSBmcm9tIFwiLi4vQWNjb3VudERpc3BsYXlcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9OYXYubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCB0eXBlIE5hdlN0YXRlID0ge1xyXG4gIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTmF2OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbcGFydHMsIGRpc3BsYXlQYXJ0c10gPSBSZWFjdC51c2VTdGF0ZTxOYXZTdGF0ZT4oeyBkaXNwbGF5OiBmYWxzZSB9KTtcclxuICBjb25zdCBbbGlua3MsIGRpc3BsYXlMaW5rc10gPSBSZWFjdC51c2VTdGF0ZTxOYXZTdGF0ZT4oeyBkaXNwbGF5OiBmYWxzZSB9KTtcclxuICBjb25zdCBbc2VhcmNoQm94LCBkaXNwbGF5U2VhcmNoQm94XSA9IFJlYWN0LnVzZVN0YXRlPE5hdlN0YXRlPih7XHJcbiAgICBkaXNwbGF5OiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBhcHBseVRyYW5zaXRpb25zOiAobW9kYWxXaW5kb3c6IE5hdlN0YXRlKSA9PiBKU1guRWxlbWVudCB8IG51bGwgPSAoXHJcbiAgICBtb2RhbFdpbmRvd1xyXG4gICkgPT4ge1xyXG4gICAgaWYgKG1vZGFsV2luZG93ID09PSBsaW5rcykge1xyXG4gICAgICByZXR1cm4gbW9kYWxXaW5kb3cuZGlzcGxheSA/IChcclxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxyXG4gICAgICAgICAgdGltZW91dD17MjUwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xyXG4gICAgICAgICAgICBlbnRlcjogYCR7Y3NzW1wibGlua3MtZW50ZXJcIl19YCxcclxuICAgICAgICAgICAgZW50ZXJBY3RpdmU6IGAke2Nzc1tcImxpbmtzLWVudGVyLWFjdGl2ZVwiXX1gLFxyXG4gICAgICAgICAgICBleGl0OiBgJHtjc3NbXCJsaW5rcy1leGl0XCJdfWAsXHJcbiAgICAgICAgICAgIGV4aXRBY3RpdmU6IGAke2Nzc1tcImxpbmtzLWV4aXQtYWN0aXZlXCJdfWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNb2JpbGVNZW51PjwvTW9iaWxlTWVudT5cclxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICAgICkgOiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChtb2RhbFdpbmRvdyA9PT0gcGFydHMpIHtcclxuICAgICAgcmV0dXJuIG1vZGFsV2luZG93LmRpc3BsYXkgPyAoXHJcbiAgICAgICAgPENTU1RyYW5zaXRpb25cclxuICAgICAgICAgIHRpbWVvdXQ9ezI1MH1cclxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcclxuICAgICAgICAgICAgZW50ZXI6IGAke2Nzc1tcInBhcnRzLWVudGVyXCJdfWAsXHJcbiAgICAgICAgICAgIGVudGVyQWN0aXZlOiBgJHtjc3NbXCJwYXJ0cy1lbnRlci1hY3RpdmVcIl19YCxcclxuICAgICAgICAgICAgZXhpdDogYCR7Y3NzW1wicGFydHMtZXhpdFwiXX1gLFxyXG4gICAgICAgICAgICBleGl0QWN0aXZlOiBgJHtjc3NbXCJwYXJ0cy1leGl0LWFjdGl2ZVwiXX1gLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGF0ZVBhcnRzIGxvY2F0aW9uPVwibmF2XCI+PC9EYXRlUGFydHM+XHJcbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICApIDogbnVsbDtcclxuICAgIH0gZWxzZSBpZiAobW9kYWxXaW5kb3cgPT09IHNlYXJjaEJveCkge1xyXG4gICAgICByZXR1cm4gbW9kYWxXaW5kb3cuZGlzcGxheSA/IChcclxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxyXG4gICAgICAgICAgdGltZW91dD17MjUwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xyXG4gICAgICAgICAgICBlbnRlcjogYCR7Y3NzW1wic2VhcmNoLWVudGVyXCJdfWAsXHJcbiAgICAgICAgICAgIGVudGVyQWN0aXZlOiBgJHtjc3NbXCJzZWFyY2gtZW50ZXItYWN0aXZlXCJdfWAsXHJcbiAgICAgICAgICAgIGV4aXQ6IGAke2Nzc1tcInNlYXJjaC1leGl0XCJdfWAsXHJcbiAgICAgICAgICAgIGV4aXRBY3RpdmU6IGAke2Nzc1tcInNlYXJjaC1leGl0LWFjdGl2ZVwiXX1gLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VhcmNoQm94PjwvU2VhcmNoQm94PlxyXG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXBwbHlNb2RhbFRyYW5zaXRpb25zOiAoZWxlbWVudDogc3RyaW5nKSA9PiBKU1guRWxlbWVudCB8IG51bGwgPSAoXHJcbiAgICBlbGVtZW50XHJcbiAgKSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudCA9PT0gXCJwYXJ0c1wiKSB7XHJcbiAgICAgIHJldHVybiBwYXJ0cy5kaXNwbGF5ID8gKFxyXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICB0aW1lb3V0PXsyNTB9XHJcbiAgICAgICAgICBjbGFzc05hbWVzPXt7XHJcbiAgICAgICAgICAgIGVudGVyOiBgJHtjc3NbXCJzZWFyY2gtZW50ZXJcIl19YCxcclxuICAgICAgICAgICAgZW50ZXJBY3RpdmU6IGAke2Nzc1tcInNlYXJjaC1lbnRlci1hY3RpdmVcIl19YCxcclxuICAgICAgICAgICAgZXhpdDogYCR7Y3NzW1wic2VhcmNoLWV4aXRcIl19YCxcclxuICAgICAgICAgICAgZXhpdEFjdGl2ZTogYCR7Y3NzW1wic2VhcmNoLWV4aXQtYWN0aXZlXCJdfWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWFyY2hCb3g+PC9TZWFyY2hCb3g+XHJcbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICApIDogbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJsaW5rc1wiKSB7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwic2VhcmNoQm94XCIpIHtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzdG9wV2luZG93U2Nyb2xsOiAoc3RvcDogYm9vbGVhbikgPT4gdm9pZCA9IChzdG9wKSA9PiB7XHJcbiAgICBjb25zdCBib2R5OiBIVE1MQm9keUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBpZiAoYm9keSkge1xyXG4gICAgICByZXR1cm4gc3RvcFxyXG4gICAgICAgID8gKGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIilcclxuICAgICAgICA6IChib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3MubmF2fT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMjguOTggNDkuMTRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5sb2dvTGlua31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRpdGxlPkFsdExvZ29CbGFjazwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj5cclxuICAgICAgICAgICAgICA8ZyBpZD1cIlRyYWNpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcuNjYsNDkuMTRhMzEuNTIsMzEuNTIsMCwwLDEtNC43NC0uMzYsMjMuNjEsMjMuNjEsMCwwLDEtNy42OC0yLjUyQTEwLDEwLDAsMCwxLC4xNCw0MWMtLjcyLTIuMSwxLjUtNC43NCwzLjY2LTMuNjZhNC40MSw0LjQxLDAsMCwxLDEuMjYsMS4zMmMyLjE2LDIuNjQsNS41MiwzLjc4LDguNzYsNC4zMmEyMi44MywyMi44MywwLDAsMCw3Ljg2LS4xMmMyLjgyLS42LDUuNTItMiw2LjYtNC44YTYuMzEsNi4zMSwwLDAsMCwuMTgtNC4zMmMtMS4zOC00LjA4LTYuNDgtNS41OC0xMC44LTYuNDhBNDUuNiw0NS42LDAsMCwxLDkuMiwyNC43OGMtMi44OC0xLjE0LTUuNzYtMi44OC03LjM4LTUuNjQtMi0zLjMtMS42Mi04LjUyLS40Mi0xMUM1LjA2Ljg0LDEyLjE0LDAsMTYuMjgsMGEyNS4xOSwyNS4xOSwwLDAsMSw4Ljk0LDEuNTZjMy4zLDEuMjYsNS44OCwzLjQyLDYuNjYsNS43YTIuODUsMi44NSwwLDAsMS0uNTQsMi44MiwyLjUsMi41LDAsMCwxLTMuMTIuNzIsOSw5LDAsMCwxLS44NC0uNzIsMTMuNjMsMTMuNjMsMCwwLDAtNS4yMi0zLjQyLDE2LjIxLDE2LjIxLDAsMCwwLTUuODgtLjc4Yy00LjY4LDAtMTAsMS44LTEwLDcuMjYsMCw1LDQuMzgsNi41NCwxNC40LDlDMzMuNSwyNS4yNiwzNS4xOCwzMi4zNCwzNCwzOC4zNCwzMi4xOCw0Ny4yOCwyMS42Miw0OS4xNCwxNy42Niw0OS4xNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk03OS44Miw0NS4xOGEzLDMsMCwwLDEtMywzSDQ4LjE0YTMsMywwLDAsMS0zLTNWNGEzLDMsMCwwLDEsMy0zSDc2LjIyYTMsMywwLDAsMSwzLDMsMywzLDAsMCwxLTMsM0g1MS4xNFYyMS40OGgyMi4yYTMsMywwLDAsMSwzLDMsMywzLDAsMCwxLTMsM0g1MS4xNHYxNC43SDc2LjgyQTMsMywwLDAsMSw3OS44Miw0NS4xOFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk05Ni42Miw0VjQ1LjE4YTMsMywwLDEsMS02LDBWNGEzLDMsMCwxLDEsNiwwWm0yNy42LDQzLjg2YTMuMjcsMy4yNywwLDAsMS0xLjMyLjMsMywzLDAsMCwxLTIuNy0xLjY4LDUwLjk0LDUwLjk0LDAsMCwwLTcuOTItMTEuODJjLTMuNTQtMy43OC02LjI0LTYuNi0xMC4zMi04Ljk0LS4xMi0uMDYtLjE4LS4xMi0uMy0uMThzLS4yNC0uMTgtLjM2LS4zYTIuOTMsMi45MywwLDAsMS0uNzgtMS42MiwzLjExLDMuMTEsMCwwLDEsLjM2LTIsMy4xNiwzLjE2LDAsMCwxLC43Mi0uODRsMTguNi0xOC45YTMsMywwLDAsMSw0LjI2LjA2LDMsMywwLDAsMS0uMDYsNC4ybC0xNi4yLDE2LjVjNy41Niw1LjM0LDEzLjUsMTMuMiwxNy40LDIxLjI0QTMsMywwLDAsMSwxMjQuMjIsNDcuODhaXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTc1LjE2LDQ3Ljk0YTMuMzMsMy4zMywwLDAsMS0zLjQ4LS43OGwtMjktMzQuODZWNDUuMThhMywzLDAsMSwxLTYsMFY0QTMsMywwLDAsMSwxNDIsMi4xbDI5LDM0LjhWNGEzLDMsMCwwLDEsMy0zLDMsMywwLDAsMSwzLDNWNDUuMjRBMi42LDIuNiwwLDAsMSwxNzUuMTYsNDcuOTRaXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjA0LjUsNDguMThIMTkwLjg4YTMsMywwLDAsMS0zLjA2LTNWNGEyLjgxLDIuODEsMCwwLDEsLjktMi4xLDMuMiwzLjIsMCwwLDEsMi4xNi0uOWgxMy43NEEyNC44OCwyNC44OCwwLDAsMSwyMTQsMi44OGEyNS43OSwyNS43OSwwLDAsMSw3LjgsNS4xLDIzLjY5LDIzLjY5LDAsMCwxLDUuMjIsNy41NkEyMy4xLDIzLjEsMCwwLDEsMjI5LDI0LjcyYTIxLjM2LDIxLjM2LDAsMCwxLTIsOSwyMy4zMywyMy4zMywwLDAsMS01LjI4LDcuNSwyNC43MSwyNC43MSwwLDAsMS03LjgsNS4xQTI1LjM0LDI1LjM0LDAsMCwxLDIwNC41LDQ4LjE4Wm0tMTAuNjItNi4wNmgxMC43NGExOS44MSwxOS44MSwwLDAsMCw3LTEuNDQsMTguMzEsMTguMzEsMCwwLDAsNS44OC0zLjc4LDE5Ljc1LDE5Ljc1LDAsMCwwLDQtNS42NEExNS40OSwxNS40OSwwLDAsMCwyMjMsMjQuNzJhMTYuNTgsMTYuNTgsMCwwLDAtMS40NC02Ljc4QTE4LjYxLDE4LjYxLDAsMCwwLDIwNC42Miw3SDE5My44OFpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxOYXZMaW5rcyBvcmllbnRhdGlvbj1cImxhbmRzY2FwZVwiPjwvTmF2TGlua3M+XHJcbiAgICAgICAgPE1vYmlsZUhhbWJ1cmdlclxyXG4gICAgICAgICAgZGlzcGxheUxpbmtzPXtkaXNwbGF5TGlua3N9XHJcbiAgICAgICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgICAgICBzdG9wV2luZG93U2Nyb2xsPXtzdG9wV2luZG93U2Nyb2xsfVxyXG4gICAgICAgID48L01vYmlsZUhhbWJ1cmdlcj5cclxuICAgICAgICA8QWNjb3VudERpc3BsYXk+PC9BY2NvdW50RGlzcGxheT5cclxuICAgICAgICA8U2VhcmNoSWNvblxyXG4gICAgICAgICAgZGlzcGxheVNlYXJjaEJveD17ZGlzcGxheVNlYXJjaEJveH1cclxuICAgICAgICAgIHNlYXJjaEJveD17c2VhcmNoQm94fVxyXG4gICAgICAgICAgc3RvcFdpbmRvd1Njcm9sbD17c3RvcFdpbmRvd1Njcm9sbH1cclxuICAgICAgICA+PC9TZWFyY2hJY29uPlxyXG4gICAgICAgIDxQYXJ0c0ljb25cclxuICAgICAgICAgIGRpc3BsYXlQYXJ0cz17ZGlzcGxheVBhcnRzfVxyXG4gICAgICAgICAgcGFydHM9e3BhcnRzfVxyXG4gICAgICAgICAgc3RvcFdpbmRvd1Njcm9sbD17c3RvcFdpbmRvd1Njcm9sbH1cclxuICAgICAgICA+PC9QYXJ0c0ljb24+XHJcbiAgICAgICAgPFRyYW5zaXRpb25Hcm91cD57YXBwbHlUcmFuc2l0aW9ucyhwYXJ0cyl9PC9UcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgICAgPFRyYW5zaXRpb25Hcm91cD57YXBwbHlUcmFuc2l0aW9ucyhsaW5rcyl9PC9UcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwPnthcHBseVRyYW5zaXRpb25zKHNlYXJjaEJveCl9PC9UcmFuc2l0aW9uR3JvdXA+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IE5hdiB9IGZyb20gXCIuL05hdlwiO1xyXG5leHBvcnQgdHlwZSB7IE5hdlN0YXRlIH0gZnJvbSBcIi4vTmF2XCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpbmtzV3JhcHBlclwiOiBcIk5hdkxpbmtzX2xpbmtzV3JhcHBlcl9fM3lVZXRcIixcblx0XCJsYW5kc2NhcGVcIjogXCJOYXZMaW5rc19sYW5kc2NhcGVfXzM2YXl5XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL05hdkxpbmtzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2TGlua3M6IFJlYWN0LkZDPHsgb3JpZW50YXRpb246IHN0cmluZyB9PiA9ICh7XHJcbiAgb3JpZW50YXRpb24sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT17YCR7Y3NzLmxpbmtzV3JhcHBlcn0gJHtjc3NbYCR7b3JpZW50YXRpb259YF19YH0+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NjaGVkdWxlXCI+U2NoZWR1bGU8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBOYXZMaW5rcyB9IGZyb20gXCIuL05hdkxpbmtzXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhcnRzSWNvblwiOiBcIlBhcnRzSWNvbl9wYXJ0c0ljb25fX0hfaVVUXCIsXG5cdFwic3QwXCI6IFwiUGFydHNJY29uX3N0MF9fNTFBX0JcIixcblx0XCJzdDFcIjogXCJQYXJ0c0ljb25fc3QxX18zX0dkVFwiLFxuXHRcInN0MlwiOiBcIlBhcnRzSWNvbl9zdDJfX0txYzdyXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9QYXJ0c0ljb24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgTmF2U3RhdGUgfSBmcm9tIFwiLi4vTmF2XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGRpc3BsYXlQYXJ0czogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248TmF2U3RhdGU+PjtcclxuICBwYXJ0czogTmF2U3RhdGU7XHJcbiAgc3RvcFdpbmRvd1Njcm9sbDogKGFyZzogYm9vbGVhbikgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJ0c0ljb246IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgZGlzcGxheVBhcnRzLFxyXG4gIHBhcnRzLFxyXG4gIHN0b3BXaW5kb3dTY3JvbGwsXHJcbn0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDbGljazogKCkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgIGlmIChwYXJ0cy5kaXNwbGF5KSB7XHJcbiAgICAgIHJldHVybiBkaXNwbGF5UGFydHMoeyBkaXNwbGF5OiBmYWxzZSB9KSwgc3RvcFdpbmRvd1Njcm9sbChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGlzcGxheVBhcnRzKHsgZGlzcGxheTogdHJ1ZSB9KSwgc3RvcFdpbmRvd1Njcm9sbCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgIGlkPVwiTGF5ZXJfMVwiXHJcbiAgICAgIHg9XCIwcHhcIlxyXG4gICAgICB5PVwiMHB4XCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyOTAgMjkwXCJcclxuICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMjkwIDI5MFwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y3NzLnBhcnRzSWNvbn1cclxuICAgID5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT17cGFydHMuZGlzcGxheSA/IGNzcy5zdDEgOiBjc3Muc3QwfVxyXG4gICAgICAgICAgc3R5bGU9e3sgc3Ryb2tlOiBcImJsYWNrXCIsIHN0cm9rZVdpZHRoOiBcIjAuNXZoXCIgfX1cclxuICAgICAgICAgIGQ9XCJNMjg5LDE0NWMwLDc5LjUtNjQuNSwxNDQtMTQ0LDE0NGMtMzkuOCwwLTcyLTMyLjItNzItNzJzMzIuMi03Miw3Mi03MnM3Mi0zMi4yLDcyLTcyUzE4NC44LDEsMTQ1LDFcclxuICAgIEMyMjQuNSwxLDI4OSw2NS41LDI4OSwxNDV6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXJ0cy5kaXNwbGF5ID8gY3NzLnN0MiA6IGNzcy5zdDF9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHN0cm9rZVdpZHRoOiBcIjAuNXZoXCIgfX1cclxuICAgICAgICAgICAgZD1cIk0xMTYsMjg0LjVDNTEuMywyNzEuMSwyLjUsMjEzLjYsMi41LDE0NUMyLjUsNjYuNCw2Ni40LDIuNSwxNDUsMi41YzM4LjksMCw3MC41LDMxLjYsNzAuNSw3MC41XHJcbiAgICAgICAgcy0zMS42LDcwLjUtNzAuNSw3MC41Yy00MC41LDAtNzMuNSwzMy03My41LDczLjVDNzEuNSwyNDcuMiw4OS44LDI3My4zLDExNiwyODQuNXpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMTQ1LDRjMzgsMCw2OSwzMSw2OSw2OXMtMzEsNjktNjksNjljLTQxLjQsMC03NSwzMy42LTc1LDc1YzAsMjYuNSwxMy44LDQ5LjgsMzQuNiw2My4yYy0yMi4yLTYuNi00Mi41LTE4LjYtNTkuMy0zNS40XHJcbiAgICAgICAgQzE4LjcsMjE4LjEsNCwxODIuNyw0LDE0NXMxNC43LTczLjEsNDEuMy05OS43UzEwNy4zLDQsMTQ1LDQgTTE0NSwxQzY1LjUsMSwxLDY1LjUsMSwxNDVjMCw3OS41LDY0LjUsMTQ0LDE0NCwxNDRcclxuICAgICAgICBjLTM5LjgsMC03Mi0zMi4yLTcyLTcyczMyLjItNzIsNzItNzJzNzItMzIuMiw3Mi03MlMxODQuOCwxLDE0NSwxTDE0NSwxelwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtwYXJ0cy5kaXNwbGF5ID8gY3NzLnN0MSA6IG51bGx9XHJcbiAgICAgICAgICBkPVwiTTE4MC4zLDkzLjR2LTQuN2gtNi43djIuM2g0LjN2Mi4zaC0yNC4zdi0yLjNoMTcuNnYtMi4zaC0xNC41VjcwLjJsMjEuOC0yNC41YzAuOC0wLjgsMS4yLTEuOSwxLjItMy4xXHJcbiAgICBjMC0xLjUtMC43LTIuOS0xLjktMy44Yy0wLjgtMC42LTEuNy0wLjktMi43LTAuOWMtMS4zLDAtMi42LDAuNi0zLjUsMS42bC01LjEsNS44bDEuOCwxLjZsNS4xLTUuOGMwLjQtMC41LDEuMS0wLjgsMS43LTAuOFxyXG4gICAgYzAuNSwwLDAuOSwwLjEsMS4zLDAuNGMwLjYsMC40LDAuOSwxLjEsMC45LDEuOGMwLDAuNi0wLjIsMS4xLTAuNiwxLjVsLTEyLjIsMTMuN2wtMy40LTNsNS40LTYuMmwtMS44LTEuNkwxNTQuNSw1OWgtNC45di0yLjhcclxuICAgIGMxLjEtMC43LDEuOS0xLjcsMi42LTIuOGgxLjRjMi40LDAsNC4zLTEuOSw0LjMtNC4zdi0zLjFjMC03LjEtNS44LTEyLjktMTIuOS0xMi45cy0xMi45LDUuOC0xMi45LDEyLjlWNDljMCwyLjQsMS45LDQuMyw0LjMsNC4zXHJcbiAgICBoMS40YzAuNiwxLjEsMS41LDIuMSwyLjYsMi44djNsLTQuMywwLjdsMC40LDIuM2w0LjYtMC44YzEsMS4xLDIuNCwxLjgsMy45LDEuOGMxLjYsMCwzLTAuNyw0LTEuOWg2LjVsNC4yLTQuOGwzLjQsM2wtOC42LDkuN1xyXG4gICAgdjE5LjVoLTMuMXY0LjdoLTEyLjd2LTQuN2gtMy4xVjcwLjloLTIuNWwtMi4yLDUuOWwtNC4zLTEuN2wzLjMtOS4xYzAuNi0xLjcsMi4xLTMsNC0zLjNsMC4yLDBsLTAuNC0yLjNsLTAuMiwwXHJcbiAgICBjLTIuNiwwLjQtNC45LDIuMy01LjgsNC44bC04LjYsMjMuN2gtOS40djQuN0gxMDVWMTEzaDE0Ljh2LTIuM2gtMTIuNFY5NS44aDc1LjN2MTQuOWgtNjAuNXYyLjNIMTg1VjkzLjRIMTgwLjN6IE0xNTAuOSw0Ny4yXHJcbiAgICBsLTIuNS0zLjNoLTguOWMwLjgtMi4zLDMtMy45LDUuNS0zLjljMy4yLDAsNS45LDIuNiw1LjksNS45VjQ3LjJ6IE0xNTUuNiw0OWMwLDEuMS0wLjksMi0yLDJoLTAuNmMwLjEtMC41LDAuMi0xLjEsMC4yLTEuNlxyXG4gICAgYzAsMCwwLTMuNywwLTMuOGgwLjRjMS4xLDAsMiwwLjksMiwyVjQ5eiBNMTQ1LDM1LjNjNSwwLDkuMiwzLjUsMTAuMyw4LjJjLTAuNS0wLjItMS4xLTAuMy0xLjctMC4zaC0wLjljLTEuMS0zLjItNC4yLTUuNS03LjctNS41XHJcbiAgICBzLTYuNiwyLjMtNy43LDUuNWgtMC45Yy0wLjYsMC0xLjIsMC4xLTEuNywwLjNDMTM1LjgsMzguOCwxNDAsMzUuMywxNDUsMzUuM3ogTTEzNi40LDUxYy0xLjEsMC0yLTAuOS0yLTJ2LTEuNmMwLTEuMSwwLjktMiwyLTJcclxuICAgIGgwLjRjMCwwLjEsMCwzLjgsMCwzLjhjMCwwLjYsMC4xLDEuMSwwLjIsMS42SDEzNi40eiBNMTM5LjEsNDkuNHYtMy4xaDguMWwzLjQsNC42Yy0wLjcsMi41LTMsNC40LTUuNyw0LjRcclxuICAgIEMxNDEuOCw1NS4yLDEzOS4xLDUyLjYsMTM5LjEsNDkuNHogTTE0NSw2MC45Yy0wLjksMC0xLjctMC40LTIuMy0xLjF2LTIuNWMwLjcsMC4yLDEuNSwwLjMsMi4zLDAuM3MxLjUtMC4xLDIuMy0wLjN2Mi41XHJcbiAgICBDMTQ2LjcsNjAuNSwxNDUuOSw2MC45LDE0NSw2MC45eiBNMTMzLjIsNzcuNHYxMS40SDEyOUwxMzMuMiw3Ny40eiBNMTI1LjgsNzcuMmw0LjMsMS43bC0zLjYsOS44aC00LjlMMTI1LjgsNzcuMnogTTExMiw5MS4xaDI0LjNcclxuICAgIHYyLjNIMTEyVjkxLjF6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXJ0cy5kaXNwbGF5ID8gY3NzLnN0MiA6IGNzcy5zdDF9XHJcbiAgICAgICAgICAgIGQ9XCJNMTIzLjksMjU2LjVjLTAuNywwLTEuMS0wLjUtMS4xLTFjLTAuMS0wLjQsMC4xLTEuMSwwLjgtMS4zbDE3LjUtNi4xdi01LjRjMC0wLjQsMC4zLTAuNywwLjctMC43XHJcbiAgICAgICAgYzAuNCwwLDAuNywwLjMsMC43LDAuN3Y0LjlsMS4yLTAuNGMwLjQtMC4yLDAuNy0wLjIsMC44LTAuMmMwLjIsMCwwLjQsMC4xLDAuOCwwLjJsMS4yLDAuNHYtMjIuOGwtMC42LDAuMVxyXG4gICAgICAgIGMtMC40LDAuMS0wLjksMC4xLTEuMywwLjFjLTAuNSwwLTEtMC4xLTEuNi0wLjJsLTAuNi0wLjFWMjM4YzAsMC40LTAuMywwLjctMC43LDAuN2MtMC40LDAtMC43LTAuMy0wLjctMC43di0xMy45bC0wLjQtMC4zXHJcbiAgICAgICAgYy0wLjctMC40LTAuOC0wLjYtMTEuMy0xMy4zYy0zLjQtNC4xLTcuOC05LjUtMTMuNy0xNi42Yy0wLjQtMC40LTAuNC0xLTAuMi0xLjVjMC4yLTAuNSwwLjctMC44LDEuMy0wLjhoNDAuOWwwLjEtMC4yXHJcbiAgICAgICAgYzMuNy02LjIsOS4zLTExLDE2LjEtMTMuOGMwLjEsMCwwLjItMC4xLDAuMy0wLjFjMC4zLDAsMC41LDAuMiwwLjYsMC40YzAuMSwwLjIsMC4xLDAuNCwwLDAuNWMtMC4xLDAuMi0wLjIsMC4zLTAuNCwwLjRcclxuICAgICAgICBjLTYuMSwyLjUtMTEuMSw2LjctMTQuNywxMmwtMC41LDAuOEgxNzJjMC42LDAsMSwwLjMsMS4zLDAuOGMwLjIsMC41LDAuMiwxLjEtMC4yLDEuNWwtMTYuOSwyMC43Yy0wLjEsMC4yLTAuMywwLjItMC41LDAuMlxyXG4gICAgICAgIGMwLDAsMCwwLDAsMGMtMC4yLDAtMC4zLTAuMS0wLjQtMC4yYy0wLjEtMC4xLTAuMi0wLjMtMC4yLTAuNWMwLTAuMiwwLTAuNCwwLjEtMC41bDgtOS44aC0zLjZsLTAuMSwwLjRjLTAuNSwyLjktMyw0LjktNS45LDQuOVxyXG4gICAgICAgIHMtNS40LTIuMS01LjktNC45bC0wLjEtMC40aC0yMi4xbDE0LjUsMTcuNWMxLjIsMS40LDIuNywyLjIsNC40LDIuMmMxLjYsMCwzLjEtMC43LDQuMS0xLjljMC4xLTAuMSwwLjEtMC4xLDEuMi0xLjVsMi40LTIuOVxyXG4gICAgICAgIGMwLjEtMC4yLDAuMy0wLjMsMC41LTAuM2MwLjIsMCwwLjMsMC4xLDAuNCwwLjJjMC4zLDAuMiwwLjMsMC43LDAuMSwxYy0wLjYsMC44LTEuMSwxLjQtMS42LDJjLTIuMiwyLjctMi42LDMuMi0zLjcsMy44bC0wLjIsMC4xXHJcbiAgICAgICAgdjIzLjlsMy43LDEuM2MwLjIsMC4xLDAuMywwLjIsMC40LDAuM2MwLjEsMC4yLDAuMSwwLjMsMCwwLjVjLTAuMSwwLjMtMC40LDAuNS0wLjYsMC41Yy0wLjEsMC0wLjIsMC0wLjIsMGwtNi42LTIuM1xyXG4gICAgICAgIGMwLDAtMTYuNSw1LjgtMTYuNiw1LjhsLTIuOCwxaDM4LjdsLTguMy0yLjljLTAuMi0wLjEtMC4zLTAuMi0wLjQtMC4zYy0wLjEtMC4yLTAuMS0wLjMsMC0wLjVjMC4xLTAuMywwLjQtMC41LDAuNi0wLjVcclxuICAgICAgICBjMC4xLDAsMC4yLDAsMC4yLDBsOS4zLDMuM2MwLjcsMC4yLDAuOCwwLjgsMC44LDEuM2MtMC4xLDAuNC0wLjQsMS0xLjEsMUgxMjMuOXogTTE0OS4yLDIwNC42YzAuNiwyLDIuMywzLjMsNC40LDMuM1xyXG4gICAgICAgIGMyLjEsMCwzLjktMS4zLDQuNC0zLjNsMC4yLTAuNkgxNDlMMTQ5LjIsMjA0LjZ6IE0xNTguMiwxOTMuMmMtMS4xLDIuMS0xLjcsMy43LTEuOSw0LjNsLTAuMSwwLjRsMC4zLDAuMmMxLjUsMC45LDIuNiwyLjMsMi45LDRcclxuICAgICAgICBsMC4xLDAuNGg0LjdsNy45LTkuNmgtMTMuOEwxNTguMiwxOTMuMnogTTE1My42LDE5OC43Yy0yLjEsMC0zLjgsMS4zLTQuNCwzLjJsLTAuMiwwLjdoOS4yTDE1OCwyMDJcclxuICAgICAgICBDMTU3LjQsMjAwLDE1NS43LDE5OC43LDE1My42LDE5OC43eiBNMTI0LjUsMjAyLjZoMjMuMmwwLjEtMC40YzAuNS0yLjgsMy00LjgsNS45LTQuOGMwLjMsMCwwLjYsMCwwLjksMC4xbDAuNCwwLjFsMC4xLTAuNFxyXG4gICAgICAgIGMwLjItMC42LDAuNi0xLjgsMS40LTMuNGwwLjMtMC43aC00MC4zTDEyNC41LDIwMi42elwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXJ0cy5kaXNwbGF5ID8gY3NzLnN0MiA6IGNzcy5zdDF9XHJcbiAgICAgICAgICAgIGQ9XCJNMTc0LjEsMTc4YzAuMSwwLDAuMSwwLDAuMiwwLjFjMCwwLjEsMCwwLjItMC4xLDAuMmMtNi4yLDIuNS0xMS4zLDYuOC0xNC45LDEyLjJsLTEsMS41aDEuOEgxNzJcclxuICAgICAgICBjMC40LDAsMC42LDAuMiwwLjcsMC40aC0xLjZoLTEyLjRoLTAuNmwtMC4zLDAuNWMtMS4xLDIuMS0xLjcsMy44LTEuOSw0LjRsLTAuMiwwLjhsMC43LDAuNGMxLjQsMC44LDIuMywyLjEsMi42LDMuN2wwLjIsMC44aDAuOFxyXG4gICAgICAgIGg0LjFoMC41bDAuMy0wLjRsNy04LjZsMS0xLjNjMC4xLDAuMiwwLjEsMC41LTAuMiwwLjhsLTE2LjksMjAuN2MwLDAuMS0wLjEsMC4xLTAuMSwwLjFjMCwwLTAuMSwwLTAuMSwwYy0wLjEtMC4xLTAuMS0wLjIsMC0wLjNcclxuICAgICAgICBsNy40LTlsMS4zLTEuNmgtMi4xSDE2MGgtMC44bC0wLjEsMC44Yy0wLjUsMi42LTIuNyw0LjUtNS40LDQuNWMtMi43LDAtNC45LTEuOS01LjQtNC41bC0wLjEtMC44aC0wLjhoLTIwLjZoLTIuMWwxLjMsMS42XHJcbiAgICAgICAgbDEzLjgsMTYuN2MxLjMsMS41LDMsMi40LDQuOCwyLjRjMS43LDAsMy40LTAuNyw0LjUtMi4xYzAuMS0wLjEsMC4xLTAuMSwxLjQtMS43bDIuMi0yLjdjMC0wLjEsMC4xLTAuMSwwLjEtMC4xYzAsMCwwLjEsMCwwLjEsMFxyXG4gICAgICAgIGMwLDAsMC4xLDAuMSwwLjEsMC4xYzAsMCwwLDAuMSwwLDAuMWMtMC42LDAuOC0xLjEsMS40LTEuNiwyYy0yLjIsMi43LTIuNSwzLjEtMy41LDMuN2wtMC41LDAuM3YwLjZ2MjMuMnYwLjdsMC43LDAuMmwzLjQsMS4yXHJcbiAgICAgICAgYzAuMSwwLDAuMSwwLjEsMC4xLDAuMWMwLDAsMCwwLjEsMCwwLjFjMCwwLjEtMC4xLDAuMS0wLjIsMC4xYzAsMCwwLDAtMC4xLDBsLTQuNS0xLjZsLTItMC43bC0wLjMtMC4xbC0wLjMsMC4xXHJcbiAgICAgICAgYzAsMC0xNi4zLDUuNy0xNi40LDUuN2wtNC40LDEuNWMwLTAuMiwwLjEtMC40LDAuNC0wLjVsMTcuMS02bDAuNy0wLjJ2LTAuN3YtNWMwLTAuMSwwLjEtMC4yLDAuMi0wLjJjMC4xLDAsMC4yLDAuMSwwLjIsMC4ydjQuMlxyXG4gICAgICAgIHYxLjRsMS4zLTAuNWMwLjItMC4xLDAuNC0wLjEsMC42LTAuMmMwLjMtMC4xLDAuNi0wLjIsMC43LTAuMmMwLjEsMCwwLjQsMC4xLDAuNiwwLjJjMC4yLDAuMSwwLjQsMC4xLDAuNiwwLjJsMS4zLDAuNXYtMS40di0yMS41XHJcbiAgICAgICAgdi0xLjJsLTEuMiwwLjJjLTAuNCwwLjEtMC44LDAuMS0xLjIsMC4xYy0wLjUsMC0xLTAuMS0xLjQtMC4ybC0xLjItMC4zdjEuM1YyMzhjMCwwLjEtMC4xLDAuMi0wLjIsMC4yYy0wLjEsMC0wLjItMC4xLTAuMi0wLjJcclxuICAgICAgICB2LTEzLjZ2LTAuNWwtMC41LTAuM2MtMC4xLTAuMS0wLjEtMC4xLTAuMi0wLjFjLTAuNi0wLjQtMC45LTAuNy0xMS4yLTEzLjJjLTMuNC00LjEtNy44LTkuNS0xMy43LTE2LjZjLTAuMi0wLjMtMC4yLTAuNi0wLjItMC44XHJcbiAgICAgICAgbDEuMSwxLjNsNy4xLDguNmwwLjMsMC40aDAuNWgyMi42aDAuOGwwLjItMC44YzAuNS0yLjYsMi44LTQuNCw1LjQtNC40YzAuMywwLDAuNiwwLDAuOCwwLjFsMC44LDAuMWwwLjMtMC44XHJcbiAgICAgICAgYzAuMi0wLjYsMC42LTEuOCwxLjQtMy4zbDAuNy0xLjRIMTU2aC0zOC40aC0xLjZjMC4xLTAuMiwwLjQtMC40LDAuNy0wLjRoNDAuNmgwLjZsMC4zLTAuNUMxNjEuOCwxODUuNSwxNjcuMywxODAuOCwxNzQuMSwxNzhcclxuICAgICAgICBDMTc0LDE3OCwxNzQsMTc4LDE3NC4xLDE3OCBNMTQ4LjMsMjAzLjFoMS40aDcuOGgxLjRsLTAuNC0xLjNjLTAuNy0yLjItMi42LTMuNi00LjktMy42cy00LjIsMS40LTQuOSwzLjZMMTQ4LjMsMjAzLjFcclxuICAgICAgICAgTTE1My42LDIwOC40YzIuMywwLDQuMy0xLjUsNC45LTMuN2wwLjQtMS4zaC0xLjNoLTcuOWgtMS4zbDAuNCwxLjNDMTQ5LjMsMjA3LDE1MS4zLDIwOC40LDE1My42LDIwOC40IE0xNTUuNywyNTEuNFxyXG4gICAgICAgIEMxNTUuNywyNTEuNCwxNTUuNywyNTEuNCwxNTUuNywyNTEuNGw5LjQsMy4zYzAuMywwLjEsMC40LDAuNCwwLjQsMC41bC00LjQtMS41bC01LjUtMS45Yy0wLjEsMC0wLjEtMC4xLTAuMS0wLjJcclxuICAgICAgICBDMTU1LjUsMjUxLjUsMTU1LjYsMjUxLjQsMTU1LjcsMjUxLjQgTTE2NS40LDI1NS42Yy0wLjEsMC4yLTAuMiwwLjQtMC42LDAuNGgtNDFjLTAuNCwwLTAuNS0wLjItMC42LTAuNGg0LjdoMzIuOEgxNjUuNFxyXG4gICAgICAgICBNMTc0LjEsMTc3Yy0wLjEsMC0wLjMsMC0wLjQsMC4xYy03LDIuOS0xMi42LDcuOC0xNi4zLDE0aC00MC42Yy0xLjYsMC0yLjUsMS45LTEuNSwzLjJjMjUuNywzMS4yLDIzLjksMjkuMiwyNS4zLDMwLjFWMjM4XHJcbiAgICAgICAgYzAsMC43LDAuNSwxLjIsMS4yLDEuMmMwLjcsMCwxLjItMC41LDEuMi0xLjJ2LTEyLjZjMC41LDAuMSwxLjEsMC4yLDEuNywwLjJjMC41LDAsMC45LDAsMS40LTAuMXYyMS41Yy0wLjktMC4zLTEuMi0wLjUtMS41LTAuNVxyXG4gICAgICAgIGMtMC4zLDAtMC42LDAuMi0xLjUsMC41di00LjJjMC0wLjctMC41LTEuMi0xLjItMS4yYy0wLjcsMC0xLjIsMC41LTEuMiwxLjJ2NWwtMTcuMSw2Yy0xLjgsMC42LTEuMywzLjIsMC42LDMuMmg0MVxyXG4gICAgICAgIGMxLjksMCwyLjMtMi42LDAuNS0zLjJsLTkuMy0zLjNjLTAuMSwwLTAuMy0wLjEtMC40LTAuMWMtMC41LDAtMC45LDAuMy0xLjEsMC44Yy0wLjIsMC42LDAuMSwxLjMsMC43LDEuNWw1LjUsMS45aC0zMi44XHJcbiAgICAgICAgYzAsMCwxNi40LTUuNywxNi40LTUuN2MzLDEuMSwwLjIsMC4xLDYuNSwyLjNjMC4xLDAsMC4zLDAuMSwwLjQsMC4xYzAuNSwwLDAuOS0wLjMsMS4xLTAuOGMwLjItMC42LTAuMS0xLjMtMC43LTEuNWwtMy40LTEuMlxyXG4gICAgICAgIHYtMjMuMmMxLjQtMC44LDEuNy0xLjQsNS40LTUuOWMwLjQtMC41LDAuMy0xLjItMC4yLTEuN2MtMC4yLTAuMi0wLjUtMC4zLTAuNy0wLjNjLTAuMywwLTAuNywwLjEtMC45LDAuNFxyXG4gICAgICAgIGMtMy43LDQuNi0zLjQsNC4yLTMuNiw0LjNjLTAuOSwxLjEtMi4zLDEuNy0zLjgsMS43Yy0xLjQsMC0yLjgtMC42LTQtMmwtMTMuOC0xNi43aDIwLjZjMC41LDMsMy4yLDUuMyw2LjQsNS4zczUuOC0yLjMsNi40LTUuM1xyXG4gICAgICAgIGgyLjJsLTcuNCw5Yy0wLjQsMC41LTAuMywxLjIsMC4yLDEuN2MwLjIsMC4yLDAuNSwwLjMsMC43LDAuM2MwLjMsMCwwLjctMC4xLDAuOS0wLjRsMTYuOS0yMC43YzEtMS4zLDAuMS0zLjEtMS41LTMuMWgtMTEuOVxyXG4gICAgICAgIGMzLjQtNS4xLDguMy05LjMsMTQuNC0xMS45YzAuNi0wLjIsMC45LTAuOSwwLjYtMS41QzE3NSwxNzcuMywxNzQuNSwxNzcsMTc0LjEsMTc3TDE3NC4xLDE3N3ogTTE2MCwyMDIuMVxyXG4gICAgICAgIGMtMC40LTEuOS0xLjUtMy41LTMuMS00LjRjMC4yLTAuNiwwLjgtMi4yLDEuOC00LjNoMTIuNGwtNyw4LjZIMTYwTDE2MCwyMDIuMXogTTE1NiwxOTMuNWMtMC44LDEuNi0xLjIsMi44LTEuNCwzLjVcclxuICAgICAgICBjLTAuMy0wLjEtMC43LTAuMS0xLTAuMWMtMy4xLDAtNS44LDIuMi02LjMsNS4yaC0yMi42bC03LjEtOC42SDE1NkwxNTYsMTkzLjV6IE0xNDkuNywyMDIuMWMwLjYtMS45LDIuMy0yLjksMy45LTIuOVxyXG4gICAgICAgIGMxLjcsMCwzLjMsMSwzLjksMi45SDE0OS43TDE0OS43LDIwMi4xeiBNMTUzLjYsMjA3LjRjLTEuNywwLTMuNC0xLTQtM2g3LjlDMTU3LDIwNi41LDE1NS4zLDIwNy40LDE1My42LDIwNy40TDE1My42LDIwNy40elwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgUGFydHNJY29uIH0gZnJvbSBcIi4vUGFydHNJY29uXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdyaWRXcmFwcGVyXCI6IFwiU2NoZWR1bGVHcmlkX2dyaWRXcmFwcGVyX18xYlFaVVwiLFxuXHRcImlubmVyR3JpZFwiOiBcIlNjaGVkdWxlR3JpZF9pbm5lckdyaWRfX21Wc2V3XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9TY2hlZHVsZUdyaWQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTY2hlZHVsZUdyaWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmdyaWRXcmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbm5lckdyaWR9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgU2NoZWR1bGVHcmlkIH0gZnJvbSBcIi4vU2NoZWR1bGVHcmlkXCI7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlR3JpZCB7XHJcbiAgdW5peFN0YXJ0RGF0ZTogbnVtYmVyO1xyXG4gIHVuaXhFbmREYXRlOiBudW1iZXI7XHJcbiAgbnVtYmVyb2ZTcXVhcmVzOiBudW1iZXI7XHJcbiAgdGVtcGxhdGVBcmVhczogc3RyaW5nO1xyXG4gIHN0YXJ0SG91cjogbnVtYmVyO1xyXG4gIGhvdXJEaWZmZXJlbmNlOiBudW1iZXI7XHJcbiAgY29sdW1uQW1vdW50OiBudW1iZXI7XHJcbiAgZW5kSG91cjogbnVtYmVyO1xyXG4gIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IodW5peFN0YXJ0RGF0ZTogbnVtYmVyLCB1bml4RW5kRGF0ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnVuaXhTdGFydERhdGUgPSB1bml4U3RhcnREYXRlO1xyXG4gICAgdGhpcy51bml4RW5kRGF0ZSA9IHVuaXhFbmREYXRlO1xyXG4gICAgdGhpcy5zdGFydEhvdXIgPSAwO1xyXG4gICAgdGhpcy5ob3VyRGlmZmVyZW5jZSA9IDA7XHJcbiAgICB0aGlzLnRlbXBsYXRlQXJlYXMgPSBcIlwiO1xyXG4gICAgdGhpcy5jb2x1bW5BbW91bnQgPSAwO1xyXG4gICAgdGhpcy5lbmRIb3VyID0gMDtcclxuICAgIHRoaXMuaG91clN0cmluZ3MgPSBbXTtcclxuICAgIHRoaXMubnVtYmVyb2ZTcXVhcmVzID0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3F1YXJlcygpIHtcclxuICAgIGNvbnN0IHRpbWVEaWZmZXJlbmNlOiBudW1iZXIgPSB0aGlzLnVuaXhFbmREYXRlIC0gdGhpcy51bml4U3RhcnREYXRlO1xyXG4gICAgY29uc3QgaG91cnM6IG51bWJlciA9IE1hdGguZmxvb3IodGltZURpZmZlcmVuY2UgLyAzNjAwKTtcclxuICAgIGNvbnN0IG51bUNvbHVtbnM6IG51bWJlciA9IGhvdXJzICogMiArIDQ7XHJcbiAgICBjb25zdCBudW1iZXJPZlNxdWFyZXM6IG51bWJlciA9IG51bUNvbHVtbnMgKiA1O1xyXG4gICAgdGhpcy5udW1iZXJvZlNxdWFyZXMgPSBudW1iZXJPZlNxdWFyZXM7XHJcbiAgICB0aGlzLmNvbHVtbkFtb3VudCA9IG51bUNvbHVtbnM7XHJcbiAgICB0aGlzLmhvdXJEaWZmZXJlbmNlID0gaG91cnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEhvdXJzKCkge1xyXG4gICAgY29uc3Qgc3RhcnREYXRlOiBEYXRlID0gbmV3IERhdGUodGhpcy51bml4U3RhcnREYXRlICogMTAwMCk7XHJcbiAgICBjb25zdCBlbmREYXRlOiBEYXRlID0gbmV3IERhdGUodGhpcy51bml4RW5kRGF0ZSAqIDEwMDApO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0SG91cjogbnVtYmVyID0gc3RhcnREYXRlLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBlbmRIb3VyOiBudW1iZXIgPSBlbmREYXRlLmdldEhvdXJzKCk7XHJcblxyXG4gICAgdGhpcy5zdGFydEhvdXIgPSBzdGFydEhvdXI7XHJcbiAgICB0aGlzLmVuZEhvdXIgPSBlbmRIb3VyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRHcmlkVGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBzcXVhcmU6IHN0cmluZyA9IFwic3F1YXJlIFwiO1xyXG4gICAgY29uc3Qgcm93U3RyaW5nOiBzdHJpbmcgPSBgXCIke3NxdWFyZS5yZXBlYXQoXHJcbiAgICAgIHRoaXMuY29sdW1uQW1vdW50IC0gMVxyXG4gICAgKX0gc3F1YXJlXCJgO1xyXG4gICAgdGhpcy50ZW1wbGF0ZUFyZWFzID0gYCR7cm93U3RyaW5nLnJlcGVhdCg1KX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRIb3Vyc0hlYWRlcigpIHtcclxuICAgIGxldCBob3VyQ291bnRlcjogbnVtYmVyID0gMDtcclxuICAgIGxldCBzdGFydEhvdXJDb3VudGVyOiBudW1iZXIgPSB0aGlzLnN0YXJ0SG91cjtcclxuXHJcbiAgICBjb25zdCBob3VyTnVtYmVyczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICB3aGlsZSAoaG91ckNvdW50ZXIgPD0gdGhpcy5ob3VyRGlmZmVyZW5jZSkge1xyXG4gICAgICBob3VyTnVtYmVycy5wdXNoKHN0YXJ0SG91ckNvdW50ZXIpO1xyXG4gICAgICBob3VyQ291bnRlcisrO1xyXG4gICAgICBzdGFydEhvdXJDb3VudGVyIDwgMjQgPyBzdGFydEhvdXJDb3VudGVyKysgOiAoc3RhcnRIb3VyQ291bnRlciA9IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvdXJTdHJpbmdzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGhvdXJOdW1iZXJzLmZvckVhY2goKGhvdXIpID0+IHtcclxuICAgICAgaWYgKGhvdXIgPT09IDI0KSB7XHJcbiAgICAgICAgcmV0dXJuIGhvdXJTdHJpbmdzLnB1c2goXCIxMjowMCBhLm1cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaG91ciA9PT0gMTIpIHtcclxuICAgICAgICByZXR1cm4gaG91clN0cmluZ3MucHVzaChcIjEyOjAwIHAubVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaG91ciA8IDEyXHJcbiAgICAgICAgICA/IGhvdXJTdHJpbmdzLnB1c2goYCR7aG91cn06MDAgYS5tYClcclxuICAgICAgICAgIDogaG91clN0cmluZ3MucHVzaChgJHtob3VyIC0gMTJ9OjAwIHAubWApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaG91clN0cmluZ3MgPSBob3VyU3RyaW5ncztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRHcmlkKCkge1xyXG4gICAgdGhpcy5zZXRTcXVhcmVzKCk7XHJcbiAgICB0aGlzLnNldEhvdXJzKCk7XHJcbiAgICB0aGlzLnNldEdyaWRUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5zZXRIb3Vyc0hlYWRlcigpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJldmVudHNcIjogXCJFdmVudHNJbnB1dF9ldmVudHNfXzFyeEhBXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBJbnB1dENoYW5nZSB9IGZyb20gXCIuLi8uLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IElucHV0UHJvcHMgZnJvbSBcIi4uLy4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0V2ZW50c0lucHV0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0gUGljazxJbnB1dFByb3BzLCBcImhhbmRsZUlucHV0Q2hhbmdlXCIgfCBcImV2ZW50c0NhdGVnb3J5XCI+O1xyXG5cclxuZXhwb3J0IGNvbnN0IEV2ZW50c0lucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGhhbmRsZUlucHV0Q2hhbmdlLFxyXG4gIGV2ZW50c0NhdGVnb3J5LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlOiAoXHJcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PixcclxuICAgIGZpZWxkOiBzdHJpbmdcclxuICApID0+IHZvaWQgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XHJcbiAgICByZXR1cm4gaGFuZGxlSW5wdXRDaGFuZ2UoXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWVcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZXZlbnRzfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5XaGF0IHR5cGUgb2YgZXZlbnRzIGFyZSB5b3UgbG9va2luZyBmb3I/PC9sYWJlbD5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIG5hbWU9XCJcIlxyXG4gICAgICAgIGlkPVwiXCJcclxuICAgICAgICB2YWx1ZT17ZXZlbnRzQ2F0ZWdvcnl9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBcImV2ZW50c0NhdGVnb3J5XCIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPG9wdGdyb3VwPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkNhdGVnb3J5IChPcHRpb25hbCk8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNdXNpY1wiPk11c2ljPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTmlnaHRsaWZlXCI+TmlnaHRsaWZlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRm9vZCAmIERyaW5rXCI+Rm9vZCAmIERyaW5rPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmlsbVwiPkZpbG08L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTcG9ydHMgJiBBY3RpdmUgTGlmZXN0eWxlXCI+XHJcbiAgICAgICAgICAgIFNwb3J0cyAmIEFjdGl2ZSBMaWZlc3R5bGVcclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZlc3RpdmFscyAmIEZhaXJzXCI+RmVzdGl2YWxzICYgRmFpcnM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcnRzICYgVGhlYXRyZVwiPkFydHMgJiBUaGVhdHJlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RoZXJcIj5PdGhlcjwvb3B0aW9uPlxyXG4gICAgICAgIDwvb3B0Z3JvdXA+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgRXZlbnRzSW5wdXQgfSBmcm9tIFwiLi9FdmVudHNJbnB1dFwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwbGFjZXNcIjogXCJQbGFjZXNJbnB1dF9wbGFjZXNfXzJPazVtXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0UHJvcHMgZnJvbSBcIi4uLy4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1BsYWNlc0lucHV0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0gUGljazxJbnB1dFByb3BzLCBcImhhbmRsZUlucHV0Q2hhbmdlXCIgfCBcInBsYWNlVHlwZVwiPjtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGFjZXNJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBoYW5kbGVJbnB1dENoYW5nZSxcclxuICBwbGFjZVR5cGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2U6IChcclxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+LFxyXG4gICAgZmllbGQ6IHN0cmluZ1xyXG4gICkgPT4gdm9pZCA9IChldmVudCwgZmllbGQpID0+IHtcclxuICAgIHJldHVybiBoYW5kbGVJbnB1dENoYW5nZShcclxuICAgICAgZmllbGQsXHJcbiAgICAgIChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBsYWNlc30+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+V2hhdCB0eXBlIG9mIHBsYWNlcyBhcmUgeW91IGxvb2tpbmcgZm9yPzwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQmFycywgUmVzdGF1cmFudHMsIFN1c2hpLCBldGMuXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e3BsYWNlVHlwZX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIFwicGxhY2VUeXBlXCIpfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgUGxhY2VzSW5wdXQgfSBmcm9tIFwiLi9QbGFjZXNJbnB1dFwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hTZWxlY3RvclwiOiBcIlNlYXJjaFNlbGVjdG9yX3NlYXJjaFNlbGVjdG9yX18yVUlYRlwiLFxuXHRcInNlbGVjdG9yXCI6IFwiU2VhcmNoU2VsZWN0b3Jfc2VsZWN0b3JfXzJyZzRPXCIsXG5cdFwiYWxsU1ZHXCI6IFwiU2VhcmNoU2VsZWN0b3JfYWxsU1ZHX18xa1NxbFwiLFxuXHRcImhpZ2hsaWdodGVkXCI6IFwiU2VhcmNoU2VsZWN0b3JfaGlnaGxpZ2h0ZWRfX3FGQ05ZXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0UHJvcHMgZnJvbSBcIi4uLy4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1NlYXJjaFNlbGVjdG9yLm1vZHVsZS5zY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0gUGljazxJbnB1dFByb3BzLCBcInNlYXJjaFR5cGVcIiB8IFwiaGFuZGxlSW5wdXRDaGFuZ2VcIj47XHJcblxyXG50eXBlIFNlbGVjdG9yU3RhdGUgPSB7IGFsbDogYm9vbGVhbjsgcGxhY2VzOiBib29sZWFuOyBldmVudHM6IGJvb2xlYW4gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hTZWxlY3RvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBzZWFyY2hUeXBlLFxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2hpZ2hsaWdodCwgc2V0SGlnaGxpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlPFNlbGVjdG9yU3RhdGU+KHtcclxuICAgIGFsbDogZmFsc2UsXHJcbiAgICBwbGFjZXM6IGZhbHNlLFxyXG4gICAgZXZlbnRzOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc2VhcmNoU2VsZWN0b3J9PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjc3Muc2VsZWN0b3J9ICR7aGlnaGxpZ2h0LmFsbCA/IGNzcy5oaWdobGlnaHRlZCA6IG51bGx9YH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICBzZXRIaWdobGlnaHQoeyBhbGw6IHRydWUsIHBsYWNlczogZmFsc2UsIGV2ZW50czogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJzZWFyY2hUeXBlXCIsIFwiQUxMXCIpfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SGlnaGxpZ2h0KChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGFsbDogZmFsc2UgfSkpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5hbGxTVkd9PlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBpZD1cIkFMTFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUxMnB0XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIi02MyAwIDUxMiA1MTIuMDAwMjZcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUxMnB0XCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgaWQ9XCJBTExcIlxyXG4gICAgICAgICAgICAgIGQ9XCJtMzg2LjY0MDYyNSA0LjY4MzU5NGMtMS41ODIwMzEtMy44NTU0NjktNS45OTYwOTQtNS42OTkyMTktOS44NTE1NjMtNC4xMTcxODgtNDQuNzI2NTYyIDE4LjM2MzI4Mi04MC44MDg1OTMgNDkuOTIxODc1LTEwNC40Mzc1IDg5LjgzMjAzMmgtMjYwLjAxNTYyNGMtMTAuMzA4NTk0IDAtMTYuMTY0MDYzIDEyLjA3MDMxMi05LjUgMjAuMTcxODc0IDE2NC42MTcxODcgMTk5LjU3MDMxMyAxNTMuMjIyNjU2IDE4Ny4xMzY3MTkgMTYxLjY3MTg3NCAxOTIuNjMyODEzdjg3LjE1NjI1YzAgNC4xNjc5NjkgMy4zODI4MTMgNy41NDY4NzUgNy41NTA3ODIgNy41NDY4NzUgNC4xNjQwNjIgMCA3LjU0Njg3NS0zLjM3ODkwNiA3LjU0Njg3NS03LjU0Njg3NXYtODAuNzI2NTYzYzYuMzc4OTA2IDEuNDg4MjgyIDEzLjEyODkwNiAxLjYxNzE4OCAxOS42Mjg5MDYuMzYzMjgydjEzNy41NTQ2ODdjLTExLjI4OTA2My0zLjk1NzAzMS04LjE4NzUtNC4wMTE3MTktMTkuNjI4OTA2IDB2LTI2Ljk5NjA5M2MwLTQuMTY3OTY5LTMuMzgyODEzLTcuNTQ2ODc2LTcuNTQ2ODc1LTcuNTQ2ODc2LTQuMTY3OTY5IDAtNy41NTA3ODIgMy4zNzg5MDctNy41NTA3ODIgNy41NDY4NzZ2MzIuMjgxMjVsLTEwOS43NDYwOTMgMzguNDYwOTM3Yy0xMS4yNTc4MTMgMy45NTMxMjUtOC40ODQzNzUgMjAuNzAzMTI1IDMuNTIzNDM3IDIwLjcwMzEyNWgyNjIuMjY5NTMyYzEyLjAyNzM0MyAwIDE0Ljc1NzgxMi0xNi43NTc4MTIgMy41MTk1MzEtMjAuNzAzMTI1bC01OS43NzczNDQtMjAuOTQ5MjE5Yy0zLjkzNzUtMS4zNzg5MDYtOC4yNDIxODcuNjk1MzEzLTkuNjIxMDk0IDQuNjIxMDk0LTEuMzc4OTA2IDMuOTM3NS42OTE0MDcgOC4yNDYwOTQgNC42Mjg5MDcgOS42MjVsMzUuMTE3MTg3IDEyLjMwODU5NGgtMjEwLjAxNTYyNWMuMDAzOTA2IDAgMTA1LjAxMTcxOS0zNi43ODkwNjMgMTA1LjAxMTcxOS0zNi43ODkwNjMgMTkuNDA2MjUgNi44MDg1OTQgMS4xMjg5MDYuMzk0NTMxIDQxLjM4MjgxMiAxNC40OTIxODggMy45MzM1OTQgMS4zNzg5MDYgOC4yNDIxODgtLjY5MTQwNyA5LjYyMTA5NC00LjYyODkwNyAxLjM3ODkwNi0zLjkyNTc4MS0uNjk1MzEzLTguMjM0Mzc0LTQuNjI4OTA2LTkuNjEzMjgxbC0yMS40NjA5MzgtNy41MTk1MzF2LTE0OC41ODU5MzhjOS4wNTA3ODEtNS4zNzUgMTAuOTE0MDYzLTguODU5Mzc0IDM0LjQ0NTMxMy0zNy42OTUzMTIgMi42MzY3MTgtMy4yMzA0NjkgMi4xNTIzNDQtNy45ODA0NjktMS4wNzgxMjUtMTAuNjE3MTg4LTMuMjMwNDY5LTIuNjM2NzE4LTcuOTgwNDY5LTIuMTU2MjUtMTAuNjIxMDk0IDEuMDc0MjE5LTIzLjg5ODQzNyAyOS4yODEyNS0yMS44Nzg5MDYgMjYuODI4MTI1LTIyLjc0NjA5NCAyNy44MzIwMzEtMTEuNjQwNjI1IDEzLjI4NTE1Ny0zNC40MjE4NzUgMTYuNjUyMzQ0LTQ5LjgyNDIxOS0yLjAxMTcxOGwtODguMjgxMjUtMTA3LjAyNzM0NGgxMzEuNzg1MTU3YzMuNDE3OTY5IDE5LjQxNzk2OSAyMC4zOTg0MzcgMzQuMjIyNjU2IDQwLjc4MTI1IDM0LjIyMjY1NiAyMC4zODI4MTIgMCAzNy4zNTkzNzUtMTQuODA0Njg3IDQwLjc3NzM0My0zNC4yMjI2NTZoMTMuNzY5NTMybC00Ny4xNzU3ODIgNTcuODA4NTk0Yy0yLjYyNSAzLjIzMDQ2OC0yLjE1MjM0MyA3Ljk4ODI4MSAxLjA3ODEyNiAxMC42MTcxODcgMy4yMzA0NjggMi42MzY3MTkgNy45OTIxODcgMi4xNTIzNDQgMTAuNjI4OTA2LTEuMDY2NDA2bDEwOC4yNDYwOTQtMTMyLjY1MjM0NGM2LjU4NTkzNy04LjA2MjUuNzY5NTMxLTIwLjEyMTA5My05LjU0Mjk2OS0yMC4xMjEwOTNoLTc2LjQzMzU5NGMyMS41MzEyNS0zMi45MTQwNjMgNTMuMDc4MTI1LTU5LjcyNjU2MyA5Mi4zODI4MTMtNzUuODYzMjgyIDMuODU5Mzc0LTEuNTgyMDMxIDUuNjk5MjE4LTUuOTkyMTg3IDQuMTE3MTg3LTkuODUxNTYyem0tMTc4LjUgMTU2LjAzMTI1aC0xNDQuMzY3MTg3bC00NS41NDY4NzYtNTUuMjE4NzVoMjQ1Ljk5NjA5NGMtNC45MzM1OTQgMTAuMTQ0NTMxLTcuNzM4MjgxIDE4LjA2NjQwNi05LjA1NDY4NyAyMi4xOTkyMTgtMjIuMjM4MjgxLTMuNDUzMTI0LTQyLjg0Mzc1IDExLjQ1NzAzMi00Ny4wMjczNDQgMzMuMDE5NTMyem02NS43NTM5MDYgMGgtNTAuMjA3MDMxYzcuNzIyNjU2LTI0LjQ3MjY1NiA0Mi40ODQzNzUtMjQuNDcyNjU2IDUwLjIwNzAzMSAwem0tNTAuNDE0MDYyIDE1LjA5NzY1Nmg1MC42MjEwOTNjLTcuMjMwNDY4IDI1LjM5ODQzOC00My4zODI4MTIgMjUuNDIxODc1LTUwLjYyMTA5MyAwem0xMzcuMjQyMTg3LTcwLjMxNjQwNi00NS4wNjI1IDU1LjIxODc1aC0yNi4yMTg3NWMtMi4zMjAzMTItMTEuOTU3MDMyLTkuODAwNzgxLTIyLjA4NTkzOC0yMC4wMjM0MzctMjcuOTg0Mzc1IDEuMjgxMjUtNC4wNjY0MDcgNC44MjgxMjUtMTQuMjM4MjgxIDExLjc2OTUzMS0yNy4yMzQzNzV6bTAgMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTEycHRcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUxMnB0XCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGlkPVwiQUxMXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBpZD1cIkFMTFwiXHJcbiAgICAgICAgICAgICAgZD1cIm00ODEuOTQxNDA2IDM4Ni43NTM5MDZ2LTMwLjA1ODU5NGgtNDIuNTgyMDMxdjE1LjAzMTI1aDI3LjU1MDc4MXYxNS4wMjczNDRoLTE1NS4zMDA3ODF2LTE1LjAyNzM0NGgxMTIuNzE4NzV2LTE1LjAzMTI1aC05Mi42Nzk2ODd2LTExOC44ODI4MTJsMTM5LjIwMzEyNC0xNTYuOTM3NWM0LjgwODU5NC01LjQyNTc4MSA3LjQ2MDkzOC0xMi4zOTg0MzggNy40NjA5MzgtMTkuNjMyODEyIDAtOS40OTIxODgtNC41ODk4NDQtMTguNDcyNjU3LTEyLjI3NzM0NC0yNC4wMjczNDQtNS4wNzgxMjUtMy42Njc5NjktMTEuMDcwMzEyLTUuNjA1NDY5LTE3LjMyNDIxOC01LjYwNTQ2OS04LjUxNTYyNiAwLTE2LjYxNzE4OCAzLjY2NDA2My0yMi4yMzgyODIgMTAuMDQ2ODc1bC0zMi43MDcwMzEgMzcuMTUyMzQ0IDExLjI4MTI1IDkuOTI5Njg3IDMyLjcwNzAzMS0zNy4xNTIzNDNjMi43NjU2MjUtMy4xNDQ1MzIgNi43NjE3MTktNC45NDUzMTMgMTAuOTU3MDMyLTQuOTQ1MzEzIDMuMDc0MjE4IDAgNi4wMjM0MzcuOTUzMTI1IDguNTI3MzQzIDIuNzYxNzE5IDMuODM5ODQ0IDIuNzczNDM3IDYuMDQyOTY5IDcuMDg5ODQ0IDYuMDQyOTY5IDExLjgzOTg0NCAwIDMuNTU0Njg3LTEuMzA0Njg4IDYuOTg0Mzc0LTMuNjcxODc1IDkuNjYwMTU2bC03Ny43NjU2MjUgODcuNjY3OTY4LTIxLjUzNTE1Ni0xOS4wMDM5MDYgMzQuODA4NTk0LTM5LjU0Njg3NS0xMS4yODEyNS05LjkyOTY4Ny02Ny4xMDU0NjkgNzYuMjM0Mzc1aC0zMS4xNzE4NzV2LTE4LjEzMjgxM2M2Ljc2MTcxOC00LjYwOTM3NSAxMi4zOTQ1MzEtMTAuNzYxNzE4IDE2LjM5ODQzNy0xNy45Mzc1aDkuMTUyMzQ0YzE1LjE5MTQwNiAwIDI3LjU1MDc4MS0xMi4zNTkzNzUgMjcuNTUwNzgxLTI3LjU1NDY4N3YtMjAuMDM5MDYzYzAtNDUuNTc4MTI1LTM3LjA4MjAzMS04Mi42NjAxNTYtODIuNjYwMTU2LTgyLjY2MDE1NnMtODIuNjYwMTU2IDM3LjA4MjAzMS04Mi42NjAxNTYgODIuNjYwMTU2djIwLjAzOTA2M2MwIDE1LjE5NTMxMiAxMi4zNTkzNzUgMjcuNTU0Njg3IDI3LjU1MDc4MSAyNy41NTQ2ODdoOS4xNTIzNDRjNC4wMDM5MDYgNy4xNzU3ODIgOS42MzY3MTkgMTMuMzI4MTI1IDE2LjM5ODQzNyAxNy45Mzc1djE5LjI2OTUzMmwtMjcuMzU5Mzc1IDQuNDk2MDkzIDIuNDQxNDA3IDE0LjgzMjAzMSAyOS4yMTQ4NDMtNC44MDQ2ODdjNi4zNDc2NTcgNy4yMDMxMjUgMTUuNDY0ODQ0IDExLjM5NDUzMSAyNS4yNjE3MTkgMTEuMzk0NTMxIDEwLjA4MjAzMSAwIDE5LjQ2MDkzOC00LjQyOTY4NyAyNS44MjQyMTktMTIuMDIzNDM3aDQxLjY5OTIxOWwyNi44NTE1NjItMzAuNTA3ODEzIDIxLjQ5NjA5NCAxOC45Njg3NS01NS4yNTM5MDYgNjIuMjg5MDYzdjEyNC41ODk4NDNoLTIwLjAzOTA2M3YzMC4wNTg1OTRoLTgxLjE1NjI1di0zMC4wNTg1OTRoLTIwLjAzOTA2M3YtMTE0LjIyMjY1NmgtMTUuNzYxNzE4bC0xMy44MDA3ODIgMzcuNDU3MDMyLTI3LjMxNjQwNi0xMS4wNTQ2ODggMjEuMzM1OTM4LTU4LjQzMzU5NGM0LjAyNzM0NC0xMS4wMjczNDQgMTMuNzIyNjU2LTE5LjA1ODU5NCAyNS4zMDQ2ODctMjAuOTYwOTM3bDEuNTQ2ODc1LS4yNTc4MTMtMi40Mzc1LTE0LjgyODEyNS0xLjU0Njg3NS4yNTM5MDdjLTE2LjkyOTY4NyAyLjc4MTI1LTMxLjEwMTU2MiAxNC41MjM0MzctMzYuOTg0Mzc1IDMwLjYzNjcxOGwtNTUuMjkyOTY4IDE1MS40MTAxNTZoLTYwLjM3MTA5NHYzMC4wNTg1OTRoLTMwLjA1ODU5NHYxMjUuMjQ2MDk0aDk0LjY4MzU5NHYtMTUuMDMxMjVoLTc5LjY1MjM0NHYtOTUuMTgzNTk0aDQ4MS45Mzc1djk1LjE4MzU5NGgtMzg3LjI1MzkwNnYxNS4wMzEyNWg0MDIuMjg1MTU2di0xMjUuMjQ2MDk0em0tMTg4LjM2NzE4Ny0yOTUuNzIyNjU2LTE1LjgwMDc4MS0yMC44OTQ1MzFoLTU3LjE5MTQwN2M1LjE2Nzk2OS0xNC41NzgxMjUgMTkuMDg5ODQ0LTI1LjA0Njg3NSAzNS40MTc5NjktMjUuMDQ2ODc1IDIwLjcxODc1IDAgMzcuNTc0MjE5IDE2Ljg1MTU2MiAzNy41NzQyMTkgMzcuNTcwMzEyem0zMC4wNTg1OTMgMTEuNjY3OTY5YzAgNi45MDYyNS01LjYxNzE4NyAxMi41MjczNDMtMTIuNTIzNDM3IDEyLjUyNzM0M2gtMy41NjY0MDZjLjY5NTMxMi0zLjQwMjM0MyAxLjA1ODU5My02LjkyMTg3NCAxLjA1ODU5My0xMC41MjM0MzcgMCAwLS4wMjM0MzctMjMuNzE0ODQ0LS4wNjI1LTI0LjU0Njg3NWgyLjU3MDMxM2M2LjkwNjI1IDAgMTIuNTIzNDM3IDUuNjE3MTg4IDEyLjUyMzQzNyAxMi41MjM0Mzh6bS02Ny42MzI4MTItODcuNjY3OTY5YzMyLjAxMTcxOSAwIDU4Ljg3ODkwNiAyMi4zNTkzNzUgNjUuODU1NDY5IDUyLjI3NzM0NC0zLjMwNDY4OC0xLjQwMjM0NC02LjkzNzUtMi4xNzk2ODgtMTAuNzQ2MDk0LTIuMTc5Njg4aC01LjUyMzQzN2MtNy4yMzgyODItMjAuNDEwMTU2LTI2LjcyNjU2My0zNS4wNzAzMTItNDkuNTg1OTM4LTM1LjA3MDMxMnMtNDIuMzQ3NjU2IDE0LjY2MDE1Ni00OS41ODU5MzggMzUuMDcwMzEyaC01LjUyMzQzN2MtMy44MDg1OTQgMC03LjQ0MTQwNi43NzczNDQtMTAuNzQ2MDk0IDIuMTc5Njg4IDYuOTc2NTYzLTI5LjkxNzk2OSAzMy44NDM3NS01Mi4yNzczNDQgNjUuODU1NDY5LTUyLjI3NzM0NHptLTU1LjEwOTM3NSAxMDAuMTk1MzEyYy02LjkwNjI1IDAtMTIuNTIzNDM3LTUuNjIxMDkzLTEyLjUyMzQzNy0xMi41MjczNDN2LTEwLjAxOTUzMWMwLTYuOTA2MjUgNS42MTcxODctMTIuNTIzNDM4IDEyLjUyMzQzNy0xMi41MjM0MzhoMi41NzAzMTNjLS4wMzkwNjMuODMyMDMxLS4wNjI1IDI0LjU0Njg3NS0uMDYyNSAyNC41NDY4NzUgMCAzLjYwMTU2My4zNjMyODEgNy4xMjEwOTQgMS4wNTg1OTMgMTAuNTIzNDM3em0xNy41MzUxNTYtMTAuNTIzNDM3di0xOS41MzUxNTZoNTEuODcxMDk0bDIyLjAyNzM0NCAyOS4xMzY3MTljLTQuMjUgMTYuMDgyMDMxLTE4LjkyMTg3NSAyNy45NzI2NTYtMzYuMzI0MjE5IDI3Ljk3MjY1Ni0yMC43MTg3NSAwLTM3LjU3NDIxOS0xNi44NTU0NjktMzcuNTc0MjE5LTM3LjU3NDIxOXptMzcuNTc0MjE5IDczLjY0NDUzMWMtNS43MDcwMzEgMC0xMC45OTYwOTQtMi41NjI1LTE0LjUyNzM0NC02LjkzMzU5NHYtMTYuMTY0MDYyYzQuNjE3MTg4IDEuMzI4MTI1IDkuNDg4MjgyIDIuMDU4NTk0IDE0LjUyNzM0NCAyLjA1ODU5NHM5LjkxMDE1Ni0uNzMwNDY5IDE0LjUyNzM0NC0yLjA1ODU5NHYxNi4xNjQwNjJjLTMuNTMxMjUgNC4zNzEwOTQtOC44MjAzMTMgNi45MzM1OTQtMTQuNTI3MzQ0IDYuOTMzNTk0em0tNzUuNjQ4NDM4IDEwNS42MTcxODh2NzIuNzMwNDY4aC0yNi43OTY4NzR6bS00Ny4wMDc4MTItLjk2NDg0NCAyNy4yNzczNDQgMTEuMDM5MDYyLTIzLjA4MjAzMiA2Mi42NTYyNWgtMzEuMTA5Mzc0em0tODguMjUzOTA2IDg4LjcyNjU2MmgxNTUuMzAwNzgxdjE1LjAyNzM0NGgtMTU1LjMwMDc4MXptMCAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBpZD1cIkFMTFwiXHJcbiAgICAgICAgICAgICAgZD1cIm0xNzMuMzM5ODQ0IDQyMS44MjQyMTl2NTUuMTA1NDY5aDE2NS4zMjAzMTJ2LTU1LjEwNTQ2OXptMTAwLjE5NTMxMiAxNS4wMjczNDN2MjUuMDUwNzgyaC0zNS4wNzAzMTJ2LTI1LjA1MDc4MnptLTg1LjE2Nzk2OCAwaDM1LjA3MDMxMnYyNS4wNTA3ODJoLTM1LjA3MDMxMnptMTM1LjI2NTYyNCAyNS4wNTA3ODJoLTM1LjA3MDMxMnYtMjUuMDUwNzgyaDM1LjA3MDMxMnptMCAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBpZD1cIkFMTFwiXHJcbiAgICAgICAgICAgICAgZD1cIm0xNDMuMjgxMjUgNDcxLjkyMTg3NWgtMTUuMDMxMjV2LTE1LjAzMTI1aDE1LjAzMTI1em0wLTMwLjA1ODU5NGgtMTUuMDMxMjV2LTE1LjAzMTI1aDE1LjAzMTI1em0wIDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGlkPVwiQUxMXCJcclxuICAgICAgICAgICAgICBkPVwibTM4My43NSA0NzEuOTIxODc1aC0xNS4wMzEyNXYtMTUuMDMxMjVoMTUuMDMxMjV6bTAtMzAuMDU4NTk0aC0xNS4wMzEyNXYtMTUuMDMxMjVoMTUuMDMxMjV6bTAgMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgaWQ9XCJBTExcIlxyXG4gICAgICAgICAgICAgIGQ9XCJtMzAwLjU4NTkzOCAzMTQuMTEzMjgxaC0xNS4wMjczNDR2LTE1LjAyNzM0M2gxNS4wMjczNDR6bTAtMzAuMDU4NTkzaC0xNS4wMjczNDR2LTQwLjA3ODEyNmgxNS4wMjczNDR6bTAgMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkFsbDwvbGFiZWw+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjc3Muc2VsZWN0b3J9ICR7XHJcbiAgICAgICAgICBoaWdobGlnaHQucGxhY2VzID8gY3NzLmhpZ2hsaWdodGVkIDogbnVsbFxyXG4gICAgICAgIH1gfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgIHNldEhpZ2hsaWdodCh7IGFsbDogZmFsc2UsIHBsYWNlczogdHJ1ZSwgZXZlbnRzOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+XHJcbiAgICAgICAgICBzZXRIaWdobGlnaHQoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgcGxhY2VzOiBmYWxzZSB9KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJzZWFyY2hUeXBlXCIsIFwiUExBQ0VTXCIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgaGVpZ2h0PVwiNTEycHRcIlxyXG4gICAgICAgICAgdmlld0JveD1cIi02MyAwIDUxMiA1MTIuMDAwMjZcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MTJwdFwiXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBpZD1cIlBMQUNFU1wiXHJcbiAgICAgICAgICAgIGQ9XCJtMzg2LjY0MDYyNSA0LjY4MzU5NGMtMS41ODIwMzEtMy44NTU0NjktNS45OTYwOTQtNS42OTkyMTktOS44NTE1NjMtNC4xMTcxODgtNDQuNzI2NTYyIDE4LjM2MzI4Mi04MC44MDg1OTMgNDkuOTIxODc1LTEwNC40Mzc1IDg5LjgzMjAzMmgtMjYwLjAxNTYyNGMtMTAuMzA4NTk0IDAtMTYuMTY0MDYzIDEyLjA3MDMxMi05LjUgMjAuMTcxODc0IDE2NC42MTcxODcgMTk5LjU3MDMxMyAxNTMuMjIyNjU2IDE4Ny4xMzY3MTkgMTYxLjY3MTg3NCAxOTIuNjMyODEzdjg3LjE1NjI1YzAgNC4xNjc5NjkgMy4zODI4MTMgNy41NDY4NzUgNy41NTA3ODIgNy41NDY4NzUgNC4xNjQwNjIgMCA3LjU0Njg3NS0zLjM3ODkwNiA3LjU0Njg3NS03LjU0Njg3NXYtODAuNzI2NTYzYzYuMzc4OTA2IDEuNDg4MjgyIDEzLjEyODkwNiAxLjYxNzE4OCAxOS42Mjg5MDYuMzYzMjgydjEzNy41NTQ2ODdjLTExLjI4OTA2My0zLjk1NzAzMS04LjE4NzUtNC4wMTE3MTktMTkuNjI4OTA2IDB2LTI2Ljk5NjA5M2MwLTQuMTY3OTY5LTMuMzgyODEzLTcuNTQ2ODc2LTcuNTQ2ODc1LTcuNTQ2ODc2LTQuMTY3OTY5IDAtNy41NTA3ODIgMy4zNzg5MDctNy41NTA3ODIgNy41NDY4NzZ2MzIuMjgxMjVsLTEwOS43NDYwOTMgMzguNDYwOTM3Yy0xMS4yNTc4MTMgMy45NTMxMjUtOC40ODQzNzUgMjAuNzAzMTI1IDMuNTIzNDM3IDIwLjcwMzEyNWgyNjIuMjY5NTMyYzEyLjAyNzM0MyAwIDE0Ljc1NzgxMi0xNi43NTc4MTIgMy41MTk1MzEtMjAuNzAzMTI1bC01OS43NzczNDQtMjAuOTQ5MjE5Yy0zLjkzNzUtMS4zNzg5MDYtOC4yNDIxODcuNjk1MzEzLTkuNjIxMDk0IDQuNjIxMDk0LTEuMzc4OTA2IDMuOTM3NS42OTE0MDcgOC4yNDYwOTQgNC42Mjg5MDcgOS42MjVsMzUuMTE3MTg3IDEyLjMwODU5NGgtMjEwLjAxNTYyNWMuMDAzOTA2IDAgMTA1LjAxMTcxOS0zNi43ODkwNjMgMTA1LjAxMTcxOS0zNi43ODkwNjMgMTkuNDA2MjUgNi44MDg1OTQgMS4xMjg5MDYuMzk0NTMxIDQxLjM4MjgxMiAxNC40OTIxODggMy45MzM1OTQgMS4zNzg5MDYgOC4yNDIxODgtLjY5MTQwNyA5LjYyMTA5NC00LjYyODkwNyAxLjM3ODkwNi0zLjkyNTc4MS0uNjk1MzEzLTguMjM0Mzc0LTQuNjI4OTA2LTkuNjEzMjgxbC0yMS40NjA5MzgtNy41MTk1MzF2LTE0OC41ODU5MzhjOS4wNTA3ODEtNS4zNzUgMTAuOTE0MDYzLTguODU5Mzc0IDM0LjQ0NTMxMy0zNy42OTUzMTIgMi42MzY3MTgtMy4yMzA0NjkgMi4xNTIzNDQtNy45ODA0NjktMS4wNzgxMjUtMTAuNjE3MTg4LTMuMjMwNDY5LTIuNjM2NzE4LTcuOTgwNDY5LTIuMTU2MjUtMTAuNjIxMDk0IDEuMDc0MjE5LTIzLjg5ODQzNyAyOS4yODEyNS0yMS44Nzg5MDYgMjYuODI4MTI1LTIyLjc0NjA5NCAyNy44MzIwMzEtMTEuNjQwNjI1IDEzLjI4NTE1Ny0zNC40MjE4NzUgMTYuNjUyMzQ0LTQ5LjgyNDIxOS0yLjAxMTcxOGwtODguMjgxMjUtMTA3LjAyNzM0NGgxMzEuNzg1MTU3YzMuNDE3OTY5IDE5LjQxNzk2OSAyMC4zOTg0MzcgMzQuMjIyNjU2IDQwLjc4MTI1IDM0LjIyMjY1NiAyMC4zODI4MTIgMCAzNy4zNTkzNzUtMTQuODA0Njg3IDQwLjc3NzM0My0zNC4yMjI2NTZoMTMuNzY5NTMybC00Ny4xNzU3ODIgNTcuODA4NTk0Yy0yLjYyNSAzLjIzMDQ2OC0yLjE1MjM0MyA3Ljk4ODI4MSAxLjA3ODEyNiAxMC42MTcxODcgMy4yMzA0NjggMi42MzY3MTkgNy45OTIxODcgMi4xNTIzNDQgMTAuNjI4OTA2LTEuMDY2NDA2bDEwOC4yNDYwOTQtMTMyLjY1MjM0NGM2LjU4NTkzNy04LjA2MjUuNzY5NTMxLTIwLjEyMTA5My05LjU0Mjk2OS0yMC4xMjEwOTNoLTc2LjQzMzU5NGMyMS41MzEyNS0zMi45MTQwNjMgNTMuMDc4MTI1LTU5LjcyNjU2MyA5Mi4zODI4MTMtNzUuODYzMjgyIDMuODU5Mzc0LTEuNTgyMDMxIDUuNjk5MjE4LTUuOTkyMTg3IDQuMTE3MTg3LTkuODUxNTYyem0tMTc4LjUgMTU2LjAzMTI1aC0xNDQuMzY3MTg3bC00NS41NDY4NzYtNTUuMjE4NzVoMjQ1Ljk5NjA5NGMtNC45MzM1OTQgMTAuMTQ0NTMxLTcuNzM4MjgxIDE4LjA2NjQwNi05LjA1NDY4NyAyMi4xOTkyMTgtMjIuMjM4MjgxLTMuNDUzMTI0LTQyLjg0Mzc1IDExLjQ1NzAzMi00Ny4wMjczNDQgMzMuMDE5NTMyem02NS43NTM5MDYgMGgtNTAuMjA3MDMxYzcuNzIyNjU2LTI0LjQ3MjY1NiA0Mi40ODQzNzUtMjQuNDcyNjU2IDUwLjIwNzAzMSAwem0tNTAuNDE0MDYyIDE1LjA5NzY1Nmg1MC42MjEwOTNjLTcuMjMwNDY4IDI1LjM5ODQzOC00My4zODI4MTIgMjUuNDIxODc1LTUwLjYyMTA5MyAwem0xMzcuMjQyMTg3LTcwLjMxNjQwNi00NS4wNjI1IDU1LjIxODc1aC0yNi4yMTg3NWMtMi4zMjAzMTItMTEuOTU3MDMyLTkuODAwNzgxLTIyLjA4NTkzOC0yMC4wMjM0MzctMjcuOTg0Mzc1IDEuMjgxMjUtNC4wNjY0MDcgNC44MjgxMjUtMTQuMjM4MjgxIDExLjc2OTUzMS0yNy4yMzQzNzV6bTAgMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+UGxhY2VzPC9sYWJlbD5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2Nzcy5zZWxlY3Rvcn0gJHtcclxuICAgICAgICAgIGhpZ2hsaWdodC5ldmVudHMgPyBjc3MuaGlnaGxpZ2h0ZWQgOiBudWxsXHJcbiAgICAgICAgfWB9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0KHsgYWxsOiBmYWxzZSwgcGxhY2VzOiBmYWxzZSwgZXZlbnRzOiB0cnVlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT5cclxuICAgICAgICAgIHNldEhpZ2hsaWdodCgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBldmVudHM6IGZhbHNlIH0pKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInNlYXJjaFR5cGVcIiwgXCJFVkVOVFNcIil9XHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MTJwdFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MTJwdFwiXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBpZD1cIkVWRU5UU1wiXHJcbiAgICAgICAgICAgIGQ9XCJtNDgxLjk0MTQwNiAzODYuNzUzOTA2di0zMC4wNTg1OTRoLTQyLjU4MjAzMXYxNS4wMzEyNWgyNy41NTA3ODF2MTUuMDI3MzQ0aC0xNTUuMzAwNzgxdi0xNS4wMjczNDRoMTEyLjcxODc1di0xNS4wMzEyNWgtOTIuNjc5Njg3di0xMTguODgyODEybDEzOS4yMDMxMjQtMTU2LjkzNzVjNC44MDg1OTQtNS40MjU3ODEgNy40NjA5MzgtMTIuMzk4NDM4IDcuNDYwOTM4LTE5LjYzMjgxMiAwLTkuNDkyMTg4LTQuNTg5ODQ0LTE4LjQ3MjY1Ny0xMi4yNzczNDQtMjQuMDI3MzQ0LTUuMDc4MTI1LTMuNjY3OTY5LTExLjA3MDMxMi01LjYwNTQ2OS0xNy4zMjQyMTgtNS42MDU0NjktOC41MTU2MjYgMC0xNi42MTcxODggMy42NjQwNjMtMjIuMjM4MjgyIDEwLjA0Njg3NWwtMzIuNzA3MDMxIDM3LjE1MjM0NCAxMS4yODEyNSA5LjkyOTY4NyAzMi43MDcwMzEtMzcuMTUyMzQzYzIuNzY1NjI1LTMuMTQ0NTMyIDYuNzYxNzE5LTQuOTQ1MzEzIDEwLjk1NzAzMi00Ljk0NTMxMyAzLjA3NDIxOCAwIDYuMDIzNDM3Ljk1MzEyNSA4LjUyNzM0MyAyLjc2MTcxOSAzLjgzOTg0NCAyLjc3MzQzNyA2LjA0Mjk2OSA3LjA4OTg0NCA2LjA0Mjk2OSAxMS44Mzk4NDQgMCAzLjU1NDY4Ny0xLjMwNDY4OCA2Ljk4NDM3NC0zLjY3MTg3NSA5LjY2MDE1NmwtNzcuNzY1NjI1IDg3LjY2Nzk2OC0yMS41MzUxNTYtMTkuMDAzOTA2IDM0LjgwODU5NC0zOS41NDY4NzUtMTEuMjgxMjUtOS45Mjk2ODctNjcuMTA1NDY5IDc2LjIzNDM3NWgtMzEuMTcxODc1di0xOC4xMzI4MTNjNi43NjE3MTgtNC42MDkzNzUgMTIuMzk0NTMxLTEwLjc2MTcxOCAxNi4zOTg0MzctMTcuOTM3NWg5LjE1MjM0NGMxNS4xOTE0MDYgMCAyNy41NTA3ODEtMTIuMzU5Mzc1IDI3LjU1MDc4MS0yNy41NTQ2ODd2LTIwLjAzOTA2M2MwLTQ1LjU3ODEyNS0zNy4wODIwMzEtODIuNjYwMTU2LTgyLjY2MDE1Ni04Mi42NjAxNTZzLTgyLjY2MDE1NiAzNy4wODIwMzEtODIuNjYwMTU2IDgyLjY2MDE1NnYyMC4wMzkwNjNjMCAxNS4xOTUzMTIgMTIuMzU5Mzc1IDI3LjU1NDY4NyAyNy41NTA3ODEgMjcuNTU0Njg3aDkuMTUyMzQ0YzQuMDAzOTA2IDcuMTc1NzgyIDkuNjM2NzE5IDEzLjMyODEyNSAxNi4zOTg0MzcgMTcuOTM3NXYxOS4yNjk1MzJsLTI3LjM1OTM3NSA0LjQ5NjA5MyAyLjQ0MTQwNyAxNC44MzIwMzEgMjkuMjE0ODQzLTQuODA0Njg3YzYuMzQ3NjU3IDcuMjAzMTI1IDE1LjQ2NDg0NCAxMS4zOTQ1MzEgMjUuMjYxNzE5IDExLjM5NDUzMSAxMC4wODIwMzEgMCAxOS40NjA5MzgtNC40Mjk2ODcgMjUuODI0MjE5LTEyLjAyMzQzN2g0MS42OTkyMTlsMjYuODUxNTYyLTMwLjUwNzgxMyAyMS40OTYwOTQgMTguOTY4NzUtNTUuMjUzOTA2IDYyLjI4OTA2M3YxMjQuNTg5ODQzaC0yMC4wMzkwNjN2MzAuMDU4NTk0aC04MS4xNTYyNXYtMzAuMDU4NTk0aC0yMC4wMzkwNjN2LTExNC4yMjI2NTZoLTE1Ljc2MTcxOGwtMTMuODAwNzgyIDM3LjQ1NzAzMi0yNy4zMTY0MDYtMTEuMDU0Njg4IDIxLjMzNTkzOC01OC40MzM1OTRjNC4wMjczNDQtMTEuMDI3MzQ0IDEzLjcyMjY1Ni0xOS4wNTg1OTQgMjUuMzA0Njg3LTIwLjk2MDkzN2wxLjU0Njg3NS0uMjU3ODEzLTIuNDM3NS0xNC44MjgxMjUtMS41NDY4NzUuMjUzOTA3Yy0xNi45Mjk2ODcgMi43ODEyNS0zMS4xMDE1NjIgMTQuNTIzNDM3LTM2Ljk4NDM3NSAzMC42MzY3MThsLTU1LjI5Mjk2OCAxNTEuNDEwMTU2aC02MC4zNzEwOTR2MzAuMDU4NTk0aC0zMC4wNTg1OTR2MTI1LjI0NjA5NGg5NC42ODM1OTR2LTE1LjAzMTI1aC03OS42NTIzNDR2LTk1LjE4MzU5NGg0ODEuOTM3NXY5NS4xODM1OTRoLTM4Ny4yNTM5MDZ2MTUuMDMxMjVoNDAyLjI4NTE1NnYtMTI1LjI0NjA5NHptLTE4OC4zNjcxODctMjk1LjcyMjY1Ni0xNS44MDA3ODEtMjAuODk0NTMxaC01Ny4xOTE0MDdjNS4xNjc5NjktMTQuNTc4MTI1IDE5LjA4OTg0NC0yNS4wNDY4NzUgMzUuNDE3OTY5LTI1LjA0Njg3NSAyMC43MTg3NSAwIDM3LjU3NDIxOSAxNi44NTE1NjIgMzcuNTc0MjE5IDM3LjU3MDMxMnptMzAuMDU4NTkzIDExLjY2Nzk2OWMwIDYuOTA2MjUtNS42MTcxODcgMTIuNTI3MzQzLTEyLjUyMzQzNyAxMi41MjczNDNoLTMuNTY2NDA2Yy42OTUzMTItMy40MDIzNDMgMS4wNTg1OTMtNi45MjE4NzQgMS4wNTg1OTMtMTAuNTIzNDM3IDAgMC0uMDIzNDM3LTIzLjcxNDg0NC0uMDYyNS0yNC41NDY4NzVoMi41NzAzMTNjNi45MDYyNSAwIDEyLjUyMzQzNyA1LjYxNzE4OCAxMi41MjM0MzcgMTIuNTIzNDM4em0tNjcuNjMyODEyLTg3LjY2Nzk2OWMzMi4wMTE3MTkgMCA1OC44Nzg5MDYgMjIuMzU5Mzc1IDY1Ljg1NTQ2OSA1Mi4yNzczNDQtMy4zMDQ2ODgtMS40MDIzNDQtNi45Mzc1LTIuMTc5Njg4LTEwLjc0NjA5NC0yLjE3OTY4OGgtNS41MjM0MzdjLTcuMjM4MjgyLTIwLjQxMDE1Ni0yNi43MjY1NjMtMzUuMDcwMzEyLTQ5LjU4NTkzOC0zNS4wNzAzMTJzLTQyLjM0NzY1NiAxNC42NjAxNTYtNDkuNTg1OTM4IDM1LjA3MDMxMmgtNS41MjM0MzdjLTMuODA4NTk0IDAtNy40NDE0MDYuNzc3MzQ0LTEwLjc0NjA5NCAyLjE3OTY4OCA2Ljk3NjU2My0yOS45MTc5NjkgMzMuODQzNzUtNTIuMjc3MzQ0IDY1Ljg1NTQ2OS01Mi4yNzczNDR6bS01NS4xMDkzNzUgMTAwLjE5NTMxMmMtNi45MDYyNSAwLTEyLjUyMzQzNy01LjYyMTA5My0xMi41MjM0MzctMTIuNTI3MzQzdi0xMC4wMTk1MzFjMC02LjkwNjI1IDUuNjE3MTg3LTEyLjUyMzQzOCAxMi41MjM0MzctMTIuNTIzNDM4aDIuNTcwMzEzYy0uMDM5MDYzLjgzMjAzMS0uMDYyNSAyNC41NDY4NzUtLjA2MjUgMjQuNTQ2ODc1IDAgMy42MDE1NjMuMzYzMjgxIDcuMTIxMDk0IDEuMDU4NTkzIDEwLjUyMzQzN3ptMTcuNTM1MTU2LTEwLjUyMzQzN3YtMTkuNTM1MTU2aDUxLjg3MTA5NGwyMi4wMjczNDQgMjkuMTM2NzE5Yy00LjI1IDE2LjA4MjAzMS0xOC45MjE4NzUgMjcuOTcyNjU2LTM2LjMyNDIxOSAyNy45NzI2NTYtMjAuNzE4NzUgMC0zNy41NzQyMTktMTYuODU1NDY5LTM3LjU3NDIxOS0zNy41NzQyMTl6bTM3LjU3NDIxOSA3My42NDQ1MzFjLTUuNzA3MDMxIDAtMTAuOTk2MDk0LTIuNTYyNS0xNC41MjczNDQtNi45MzM1OTR2LTE2LjE2NDA2MmM0LjYxNzE4OCAxLjMyODEyNSA5LjQ4ODI4MiAyLjA1ODU5NCAxNC41MjczNDQgMi4wNTg1OTRzOS45MTAxNTYtLjczMDQ2OSAxNC41MjczNDQtMi4wNTg1OTR2MTYuMTY0MDYyYy0zLjUzMTI1IDQuMzcxMDk0LTguODIwMzEzIDYuOTMzNTk0LTE0LjUyNzM0NCA2LjkzMzU5NHptLTc1LjY0ODQzOCAxMDUuNjE3MTg4djcyLjczMDQ2OGgtMjYuNzk2ODc0em0tNDcuMDA3ODEyLS45NjQ4NDQgMjcuMjc3MzQ0IDExLjAzOTA2Mi0yMy4wODIwMzIgNjIuNjU2MjVoLTMxLjEwOTM3NHptLTg4LjI1MzkwNiA4OC43MjY1NjJoMTU1LjMwMDc4MXYxNS4wMjczNDRoLTE1NS4zMDA3ODF6bTAgMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgaWQ9XCJFVkVOVFNcIlxyXG4gICAgICAgICAgICBkPVwibTE3My4zMzk4NDQgNDIxLjgyNDIxOXY1NS4xMDU0NjloMTY1LjMyMDMxMnYtNTUuMTA1NDY5em0xMDAuMTk1MzEyIDE1LjAyNzM0M3YyNS4wNTA3ODJoLTM1LjA3MDMxMnYtMjUuMDUwNzgyem0tODUuMTY3OTY4IDBoMzUuMDcwMzEydjI1LjA1MDc4MmgtMzUuMDcwMzEyem0xMzUuMjY1NjI0IDI1LjA1MDc4MmgtMzUuMDcwMzEydi0yNS4wNTA3ODJoMzUuMDcwMzEyem0wIDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGlkPVwiRVZFTlRTXCJcclxuICAgICAgICAgICAgZD1cIm0xNDMuMjgxMjUgNDcxLjkyMTg3NWgtMTUuMDMxMjV2LTE1LjAzMTI1aDE1LjAzMTI1em0wLTMwLjA1ODU5NGgtMTUuMDMxMjV2LTE1LjAzMTI1aDE1LjAzMTI1em0wIDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGlkPVwiRVZFTlRTXCJcclxuICAgICAgICAgICAgZD1cIm0zODMuNzUgNDcxLjkyMTg3NWgtMTUuMDMxMjV2LTE1LjAzMTI1aDE1LjAzMTI1em0wLTMwLjA1ODU5NGgtMTUuMDMxMjV2LTE1LjAzMTI1aDE1LjAzMTI1em0wIDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGlkPVwiRVZFTlRTXCJcclxuICAgICAgICAgICAgZD1cIm0zMDAuNTg1OTM4IDMxNC4xMTMyODFoLTE1LjAyNzM0NHYtMTUuMDI3MzQzaDE1LjAyNzM0NHptMC0zMC4wNTg1OTNoLTE1LjAyNzM0NHYtNDAuMDc4MTI2aDE1LjAyNzM0NHptMCAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5FdmVudHM8L2xhYmVsPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFNlYXJjaFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VhcmNoU2VsZWN0b3JcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid2hlblwiOiBcIldoZW5JbnB1dF93aGVuX18yV0cyN1wiLFxuXHRcInRvXCI6IFwiV2hlbklucHV0X3RvX18yaHd0cVwiLFxuXHRcImZyb21cIjogXCJXaGVuSW5wdXRfZnJvbV9fMTV3RFdcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgSW5wdXRQcm9wcyBmcm9tIFwiLi4vLi4vU2VhcmNoQm94XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vV2hlbklucHV0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0gUGljazxJbnB1dFByb3BzLCBcInN0YXJ0RGF0ZVwiIHwgXCJoYW5kbGVRdWVyeURhdGVcIiB8IFwiZW5kRGF0ZVwiPjtcclxuXHJcbmV4cG9ydCBjb25zdCBXaGVuSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgaGFuZGxlUXVlcnlEYXRlLFxyXG4gIHN0YXJ0RGF0ZSxcclxuICBlbmREYXRlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlRGF0ZUNoYW5nZTogKGZpZWxkOiBzdHJpbmcsIGRhdGU6IERhdGUpID0+IHZvaWQgPSAoXHJcbiAgICBmaWVsZCxcclxuICAgIGRhdGVcclxuICApID0+IHtcclxuICAgIHJldHVybiBoYW5kbGVRdWVyeURhdGUoZmllbGQsIGRhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mud2hlbn0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+V2hlbiBhcmUgeW91IG1lZXRpbmc/PC9sYWJlbD5cclxuICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICBjbGFzc05hbWU9e2Nzcy5mcm9tfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyVGV4dD17XCJTdGFydCB0aW1lXCJ9XHJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxyXG4gICAgICAgIG1pbkRhdGU9e3RvZGF5fVxyXG4gICAgICAgIGRhdGVGb3JtYXQ9XCJQcFwiXHJcbiAgICAgICAgc2hvd1RpbWVTZWxlY3RcclxuICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZURhdGVDaGFuZ2UoXCJzdGFydERhdGVcIiwgZGF0ZSl9XHJcbiAgICAgID48L0RhdGVQaWNrZXI+XHJcbiAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjc3MudG99XHJcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0PXtcIkVuZCBUaW1lXCJ9XHJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICBtaW5EYXRlPXtzdGFydERhdGUgPyBzdGFydERhdGUgOiB0b2RheX1cclxuICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZSA/IGVuZERhdGUgOiBzdGFydERhdGV9XHJcbiAgICAgICAgZGF0ZUZvcm1hdD1cIlBwXCJcclxuICAgICAgICBzaG93VGltZVNlbGVjdFxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlRGF0ZUNoYW5nZShcImVuZERhdGVcIiwgZGF0ZSl9XHJcbiAgICAgID48L0RhdGVQaWNrZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBXaGVuSW5wdXQgfSBmcm9tIFwiLi9XaGVuSW5wdXRcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid2hlcmVcIjogXCJXaGVyZUlucHV0X3doZXJlX18xaTIyRFwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgSW5wdXRDaGFuZ2UgfSBmcm9tIFwiLi4vLi4vU2VhcmNoQm94XCI7XHJcbmltcG9ydCBJbnB1dFByb3BzIGZyb20gXCIuLi8uLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9XaGVyZUlucHV0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0gUGljazxJbnB1dFByb3BzLCBcImxvY2F0aW9uXCIgfCBcImhhbmRsZUlucHV0Q2hhbmdlXCIgfCBcInJhZGl1c1wiPjtcclxuXHJcbmV4cG9ydCBjb25zdCBXaGVyZUlucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGxvY2F0aW9uLFxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlLFxyXG4gIHJhZGl1cyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTogKFxyXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4sXHJcbiAgICBmaWVsZDogc3RyaW5nXHJcbiAgKSA9PiB2b2lkID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xyXG4gICAgcmV0dXJuIGhhbmRsZUlucHV0Q2hhbmdlKFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLndoZXJlfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5XaGVyZSBhcmUgeW91IG1lZXRpbmc/PC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTG9zIEFuZ2VsZXMgLyA5MDAxNVwiXHJcbiAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgXCJsb2NhdGlvblwiKX1cclxuICAgICAgLz5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIG5hbWU9XCJyYWRpdXNcIlxyXG4gICAgICAgIHZhbHVlPXtyYWRpdXN9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBcInJhZGl1c1wiKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxvcHRncm91cD5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5SYWRpdXMuLi48L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNjEwXCI+V2l0aGluIDEgbWlsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjgwNTBcIj5XaXRoaW4gNSBtaWxlczwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE2MTAwXCI+V2l0aGluIDEwIG1pbGVzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDAyNTBcIj5XaXRoaW4gMjUgbWlsZXM8L29wdGlvbj5cclxuICAgICAgICA8L29wdGdyb3VwPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFdoZXJlSW5wdXQgfSBmcm9tIFwiLi9XaGVyZUlucHV0XCI7XHJcbiIsImV4cG9ydCB7IFNlYXJjaFNlbGVjdG9yIH0gZnJvbSBcIi4vU2VhcmNoU2VsZWN0b3JcIjtcclxuZXhwb3J0IHsgV2hlcmVJbnB1dCB9IGZyb20gXCIuL1doZXJlSW5wdXRcIjtcclxuZXhwb3J0IHsgV2hlbklucHV0IH0gZnJvbSBcIi4vV2hlbklucHV0XCI7XHJcbmV4cG9ydCB7IEV2ZW50c0lucHV0IH0gZnJvbSBcIi4vRXZlbnRzSW5wdXRcIjtcclxuZXhwb3J0IHsgUGxhY2VzSW5wdXQgfSBmcm9tIFwiLi9QbGFjZXNJbnB1dFwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hCb3hcIjogXCJTZWFyY2hCb3hfc2VhcmNoQm94X18zYXdPU1wiLFxuXHRcInNlYXJjaEJ1dHRvblwiOiBcIlNlYXJjaEJveF9zZWFyY2hCdXR0b25fXzJva3BpXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBTZWFyY2hTZWxlY3RvcixcclxuICBXaGVyZUlucHV0LFxyXG4gIFdoZW5JbnB1dCxcclxuICBFdmVudHNJbnB1dCxcclxuICBQbGFjZXNJbnB1dCxcclxufSBmcm9tIFwiLi9QYXJ0c1wiO1xyXG5pbXBvcnQgU2NoZWR1bGVHcmlkIGZyb20gXCIuL0xvZ2ljL1NjaGVkdWxlR3JpZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUdyaWREaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9zdGF0ZS9TZWFyY2hHcmlkQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VTcXVhcmVzRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vU2VhcmNoQm94Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dENoYW5nZSA9IChrZXk6IHN0cmluZywgaW5wdXQ6IHN0cmluZyB8IERhdGUpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSW5wdXRQcm9wcyB7XHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2U6IElucHV0Q2hhbmdlO1xyXG4gIHNlYXJjaFR5cGU6IHN0cmluZztcclxuICBwbGFjZVR5cGU6IHN0cmluZztcclxuICByYWRpdXM6IHN0cmluZztcclxuICBldmVudHNDYXRlZ29yeTogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgc3RhcnREYXRlOiBEYXRlO1xyXG4gIGVuZERhdGU6IERhdGU7XHJcbiAgaGFuZGxlUXVlcnlEYXRlOiAoa2V5OiBzdHJpbmcsIGRhdGU6IERhdGUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUXVlcnkge1xyXG4gIHNlYXJjaFR5cGU6IHN0cmluZztcclxuICBldmVudHNDYXRlZ29yeTogc3RyaW5nO1xyXG4gIHJhZGl1czogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgcGxhY2VUeXBlOiBzdHJpbmc7XHJcbiAgZW5kRGF0ZTogRGF0ZTtcclxuICBzdGFydERhdGU6IERhdGU7XHJcbiAgc3RhcnRGb3JtYXR0ZWQ6IHN0cmluZztcclxuICBlbmRGb3JtYXR0ZWQ6IHN0cmluZztcclxuICB1bml4U3RhcnREYXRlOiBudW1iZXI7XHJcbiAgdW5peEVuZERhdGU6IG51bWJlcjtcclxuICB0aWNrZXRNYXN0ZXJDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbiAgeWVscENhdGVnb3JpZXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEJveDogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlPFNlYXJjaFF1ZXJ5Pih7XHJcbiAgICBzZWFyY2hUeXBlOiBcIkFMTFwiLFxyXG4gICAgZXZlbnRzQ2F0ZWdvcnk6IFwiXCIsXHJcbiAgICByYWRpdXM6IFwiXCIsXHJcbiAgICBsb2NhdGlvbjogXCJcIixcclxuICAgIGVuZERhdGU6IG51bGwsXHJcbiAgICBzdGFydERhdGU6IG51bGwsXHJcbiAgICBwbGFjZVR5cGU6IFwiXCIsXHJcbiAgICBzdGFydEZvcm1hdHRlZDogXCJcIixcclxuICAgIGVuZEZvcm1hdHRlZDogXCJcIixcclxuICAgIHVuaXhTdGFydERhdGU6IG51bGwsXHJcbiAgICB1bml4RW5kRGF0ZTogbnVsbCxcclxuICAgIHRpY2tldE1hc3RlckNhdGVnb3JpZXM6IFwiXCIsXHJcbiAgICB5ZWxwQ2F0ZWdvcmllczogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3F1YXJlc0Rpc3BhdGNoID0gdXNlU3F1YXJlc0Rpc3BhdGNoKCk7XHJcbiAgY29uc3QgZ3JpZERpc3BhdGNoID0gdXNlR3JpZERpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdDogKCkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGVzSW5wdXQ6IFNjaGVkdWxlR3JpZCA9IG5ldyBTY2hlZHVsZUdyaWQoXHJcbiAgICAgIHNlYXJjaFF1ZXJ5LnVuaXhTdGFydERhdGUsXHJcbiAgICAgIHNlYXJjaFF1ZXJ5LnVuaXhFbmREYXRlXHJcbiAgICApO1xyXG4gICAgbmV3RGF0ZXNJbnB1dC5zZXRHcmlkKCk7XHJcblxyXG4gICAgc3F1YXJlc0Rpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJBRERfU1FVQVJFU1wiLFxyXG4gICAgICBwYXlsb2FkOiB7IG51bWJlck9mU3F1YXJlczogbmV3RGF0ZXNJbnB1dC5udW1iZXJvZlNxdWFyZXMgfSxcclxuICAgIH0pO1xyXG4gICAgZ3JpZERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogXCJBRERfR1JJRF9URU1QTEFURVwiLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaG91clN0cmluZ3M6IG5ld0RhdGVzSW5wdXQuaG91clN0cmluZ3MsXHJcbiAgICAgICAgZ3JpZFRlbXBsYXRlOiBuZXdEYXRlc0lucHV0LnRlbXBsYXRlQXJlYXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja0ZpZWxkc0Rpc3BsYXlMaW5rOiAoc2VhcmNoVHlwZTogc3RyaW5nKSA9PiBKU1guRWxlbWVudCA9IChcclxuICAgIHNlYXJjaFR5cGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbG9jYXRpb24sXHJcbiAgICAgIHJhZGl1cyxcclxuICAgICAgcGxhY2VUeXBlLFxyXG4gICAgICBzdGFydEZvcm1hdHRlZCxcclxuICAgICAgZW5kRm9ybWF0dGVkLFxyXG4gICAgICB1bml4U3RhcnREYXRlLFxyXG4gICAgICB1bml4RW5kRGF0ZSxcclxuICAgICAgZXZlbnRzQ2F0ZWdvcnksXHJcbiAgICB9ID0gc2VhcmNoUXVlcnk7XHJcbiAgICBzd2l0Y2ggKHNlYXJjaFR5cGUpIHtcclxuICAgICAgY2FzZSBcIkFMTFwiOlxyXG4gICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sb2NhdGlvbiAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkuc3RhcnREYXRlICE9PSBudWxsICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5yYWRpdXMgIT09IFwiXCIgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LmVuZERhdGUgIT09IG51bGwgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnBsYWNlVHlwZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvc2VhcmNoL1txdWVyaWVkXVwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUeXBlLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBwbGFjZVR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydEZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIGVuZEZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIHVuaXhFbmREYXRlLFxyXG4gICAgICAgICAgICAgICAgdW5peFN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50c0NhdGVnb3J5LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGFzPXtgL3NlYXJjaC9zZWFyY2hUeXBlPUFMTCtsb2NhdGlvbj0ke3NlYXJjaFF1ZXJ5LmxvY2F0aW9ufStyYWRpdXM9JHtzZWFyY2hRdWVyeS5yYWRpdXN9K3BsYWNlVHlwZT0ke3NlYXJjaFF1ZXJ5LnBsYWNlVHlwZX0rc3RhcnRGb3JtYXR0ZWQ9JHtzZWFyY2hRdWVyeS5zdGFydEZvcm1hdHRlZH0rZW5kRm9ybWF0dGVkPSR7c2VhcmNoUXVlcnkuZW5kRm9ybWF0dGVkfSt1bml4U3RhcnREYXRlPSR7c2VhcmNoUXVlcnkudW5peFN0YXJ0RGF0ZX0rdW5peEVuZERhdGU9JHtzZWFyY2hRdWVyeS51bml4RW5kRGF0ZX0rZXZlbnRzQ2F0ZWdvcnk9JHtzZWFyY2hRdWVyeS5ldmVudHNDYXRlZ29yeX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJwbGVhc2UgZmlsbCBvdXQgbWlzc2luZyBmaWVsZHNcIil9PlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjYXNlIFwiUExBQ0VTXCI6XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5LmxvY2F0aW9uICE9PSBcIlwiICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5zdGFydERhdGUgIT09IG51bGwgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnJhZGl1cyAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkuZW5kRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkucGxhY2VUeXBlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2gvW3F1ZXJpZWRdXCIsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFR5cGUsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIHJhZGl1cyxcclxuICAgICAgICAgICAgICAgIHBsYWNlVHlwZSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0Rm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgZW5kRm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGFzPXtgL3NlYXJjaC9zZWFyY2hUeXBlPVBMQUNFUytsb2NhdGlvbj0ke3NlYXJjaFF1ZXJ5LmxvY2F0aW9ufStyYWRpdXM9JHtzZWFyY2hRdWVyeS5yYWRpdXN9K3BsYWNlVHlwZT0ke3NlYXJjaFF1ZXJ5LnBsYWNlVHlwZX0rc3RhcnRGb3JtYXR0ZWQ9JHtzZWFyY2hRdWVyeS5zdGFydEZvcm1hdHRlZH0rZW5kRm9ybWF0dGVkPSR7c2VhcmNoUXVlcnkuZW5kRm9ybWF0dGVkfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydChcInBsZWFzZSBmaWxsIG91dCBtaXNzaW5nIGZpZWxkc1wiKX0+XHJcbiAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGNhc2UgXCJFVkVOVFNcIjpcclxuICAgICAgICByZXR1cm4gc2VhcmNoUXVlcnkubG9jYXRpb24gIT09IFwiXCIgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnN0YXJ0RGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkucmFkaXVzICE9PSBcIlwiICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5lbmREYXRlICE9PSBudWxsID8gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2gvW3F1ZXJpZWRdXCIsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFR5cGUsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIHJhZGl1cyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0Rm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgZW5kRm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgdW5peFN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIHVuaXhFbmREYXRlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzQ2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXM9e2Avc2VhcmNoL3NlYXJjaFR5cGU9RVZFTlRTK2xvY2F0aW9uPSR7c2VhcmNoUXVlcnkubG9jYXRpb259K3JhZGl1cz0ke3NlYXJjaFF1ZXJ5LnJhZGl1c30rc3RhcnRGb3JtYXR0ZWQ9JHtzZWFyY2hRdWVyeS5zdGFydEZvcm1hdHRlZH0rZW5kRm9ybWF0dGVkPSR7c2VhcmNoUXVlcnkuZW5kRm9ybWF0dGVkfSt1bml4U3RhcnREYXRlPSR7c2VhcmNoUXVlcnkudW5peFN0YXJ0RGF0ZX0rdW5peEVuZERhdGU9JHtzZWFyY2hRdWVyeS51bml4RW5kRGF0ZX0rZXZlbnRzQ2F0ZWdvcnk9JHtzZWFyY2hRdWVyeS5ldmVudHNDYXRlZ29yeX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0gb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJwbGVhc2UgZmlsbCBvdXQgbWlzc2luZyBmaWVsZHNcIil9PlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sb2NhdGlvbiAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkuc3RhcnREYXRlICE9PSBudWxsICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5yYWRpdXMgIT09IFwiXCIgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LmVuZERhdGUgIT09IG51bGwgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnBsYWNlVHlwZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvc2VhcmNoL1txdWVyaWVkXVwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUeXBlLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBwbGFjZVR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydEZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIGVuZEZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIHVuaXhFbmREYXRlLFxyXG4gICAgICAgICAgICAgICAgdW5peFN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50c0NhdGVnb3J5LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGFzPXtgL3NlYXJjaC9zZWFyY2hUeXBlPUFMTCtsb2NhdGlvbj0ke3NlYXJjaFF1ZXJ5LmxvY2F0aW9ufStyYWRpdXM9JHtzZWFyY2hRdWVyeS5yYWRpdXN9K3BsYWNlVHlwZT0ke3NlYXJjaFF1ZXJ5LnBsYWNlVHlwZX0rc3RhcnRGb3JtYXR0ZWQ9JHtzZWFyY2hRdWVyeS5zdGFydEZvcm1hdHRlZH0rZW5kRm9ybWF0dGVkPSR7c2VhcmNoUXVlcnkuZW5kRm9ybWF0dGVkfSt1bml4U3RhcnREYXRlPSR7c2VhcmNoUXVlcnkudW5peFN0YXJ0RGF0ZX0rdW5peEVuZERhdGU9JHtzZWFyY2hRdWVyeS51bml4RW5kRGF0ZX0rZXZlbnRzQ2F0ZWdvcnk9JHtzZWFyY2hRdWVyeS5ldmVudHNDYXRlZ29yeX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJwbGVhc2UgZmlsbCBvdXQgbWlzc2luZyBmaWVsZHNcIil9PlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2U6IElucHV0Q2hhbmdlID0gKGtleSwgaW5wdXQpID0+IHtcclxuICAgIHJldHVybiBzZXRTZWFyY2hRdWVyeSgoc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBba2V5XTogaW5wdXQsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUXVlcnlEYXRlOiAoa2V5OiBzdHJpbmcsIGRhdGU6IERhdGUpID0+IHZvaWQgPSAoa2V5LCBkYXRlKSA9PiB7XHJcbiAgICBpZiAoa2V5ID09PSBcInN0YXJ0RGF0ZVwiKSB7XHJcbiAgICAgIGNvbnN0IHVuaXhTdGFydERhdGU6IG51bWJlciA9IE1hdGgucm91bmQobmV3IERhdGUoZGF0ZSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgIGNvbnN0IHRpbWVPZmZTZXQ6IG51bWJlciA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwO1xyXG4gICAgICBjb25zdCBsb2NhbFN0YXJ0VGltZUlTTzogc3RyaW5nID0gbmV3IERhdGUoXHJcbiAgICAgICAgKHVuaXhTdGFydERhdGUgLSB0aW1lT2ZmU2V0KSAqIDEwMDBcclxuICAgICAgKS50b0lTT1N0cmluZygpO1xyXG4gICAgICBjb25zdCBsb2NhbFN0YXJ0VGltZUlTT0Zvcm1hdHRlZDogc3RyaW5nID0gYCR7bG9jYWxTdGFydFRpbWVJU08uc3Vic3RyaW5nKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMTlcclxuICAgICAgKX1aYDtcclxuXHJcbiAgICAgIHJldHVybiBzZXRTZWFyY2hRdWVyeSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2tleV06IGRhdGUsXHJcbiAgICAgICAgdW5peFN0YXJ0RGF0ZSxcclxuICAgICAgICBzdGFydEZvcm1hdHRlZDogbG9jYWxTdGFydFRpbWVJU09Gb3JtYXR0ZWQsXHJcbiAgICAgIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHVuaXhFbmREYXRlOiBudW1iZXIgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICBjb25zdCB0aW1lT2ZmU2V0OiBudW1iZXIgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDtcclxuICAgICAgY29uc3QgbG9jYWxFbmRUaW1lSVNPOiBzdHJpbmcgPSBuZXcgRGF0ZShcclxuICAgICAgICAodW5peEVuZERhdGUgLSB0aW1lT2ZmU2V0KSAqIDEwMDBcclxuICAgICAgKS50b0lTT1N0cmluZygpO1xyXG4gICAgICBjb25zdCBsb2NhbEVuZFRpbWVJU09Gb3JtYXR0ZWQ6IHN0cmluZyA9IGAke2xvY2FsRW5kVGltZUlTTy5zdWJzdHJpbmcoXHJcbiAgICAgICAgMCxcclxuICAgICAgICAxOVxyXG4gICAgICApfVpgO1xyXG4gICAgICByZXR1cm4gc2V0U2VhcmNoUXVlcnkoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFtrZXldOiBkYXRlLFxyXG4gICAgICAgIHVuaXhFbmREYXRlLFxyXG4gICAgICAgIGVuZEZvcm1hdHRlZDogbG9jYWxFbmRUaW1lSVNPRm9ybWF0dGVkLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc2VhcmNoQm94fT5cclxuICAgICAgPFNlYXJjaFNlbGVjdG9yXHJcbiAgICAgICAgc2VhcmNoVHlwZT17c2VhcmNoUXVlcnkuc2VhcmNoVHlwZX1cclxuICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgID48L1NlYXJjaFNlbGVjdG9yPlxyXG4gICAgICA8V2hlcmVJbnB1dFxyXG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICBsb2NhdGlvbj17c2VhcmNoUXVlcnkubG9jYXRpb259XHJcbiAgICAgICAgcmFkaXVzPXtzZWFyY2hRdWVyeS5yYWRpdXN9XHJcbiAgICAgID48L1doZXJlSW5wdXQ+XHJcbiAgICAgIDxXaGVuSW5wdXRcclxuICAgICAgICBoYW5kbGVRdWVyeURhdGU9e2hhbmRsZVF1ZXJ5RGF0ZX1cclxuICAgICAgICBzdGFydERhdGU9e3NlYXJjaFF1ZXJ5LnN0YXJ0RGF0ZX1cclxuICAgICAgICBlbmREYXRlPXtzZWFyY2hRdWVyeS5lbmREYXRlfVxyXG4gICAgICA+PC9XaGVuSW5wdXQ+XHJcbiAgICAgIDxFdmVudHNJbnB1dFxyXG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICBldmVudHNDYXRlZ29yeT17c2VhcmNoUXVlcnkuZXZlbnRzQ2F0ZWdvcnl9XHJcbiAgICAgID48L0V2ZW50c0lucHV0PlxyXG4gICAgICA8UGxhY2VzSW5wdXRcclxuICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2VUeXBlPXtzZWFyY2hRdWVyeS5wbGFjZVR5cGV9XHJcbiAgICAgID48L1BsYWNlc0lucHV0PlxyXG5cclxuICAgICAge2NoZWNrRmllbGRzRGlzcGxheUxpbmsoc2VhcmNoUXVlcnkuc2VhcmNoVHlwZSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBTZWFyY2hCb3ggfSBmcm9tIFwiLi9TZWFyY2hCb3hcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoSWNvblwiOiBcIlNlYXJjaEljb25fc2VhcmNoSWNvbl9fMW9nMGZcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1NlYXJjaEljb24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgTmF2U3RhdGUgfSBmcm9tIFwiLi4vTmF2XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGRpc3BsYXlTZWFyY2hCb3g6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPE5hdlN0YXRlPj47XHJcbiAgc2VhcmNoQm94OiBOYXZTdGF0ZTtcclxuICBzdG9wV2luZG93U2Nyb2xsOiAoYXJnOiBib29sZWFuKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEljb246IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgc2VhcmNoQm94LFxyXG4gIGRpc3BsYXlTZWFyY2hCb3gsXHJcbiAgc3RvcFdpbmRvd1Njcm9sbCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaEJveC5kaXNwbGF5KSB7XHJcbiAgICAgIHJldHVybiBkaXNwbGF5U2VhcmNoQm94KHsgZGlzcGxheTogZmFsc2UgfSksIHN0b3BXaW5kb3dTY3JvbGwoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRpc3BsYXlTZWFyY2hCb3goeyBkaXNwbGF5OiB0cnVlIH0pLCBzdG9wV2luZG93U2Nyb2xsKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTgwLjE4IDE4MC4xOFwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y3NzLnNlYXJjaEljb259XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgPlxyXG4gICAgICA8ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XHJcbiAgICAgICAgPGcgaWQ9XCJMYXllcl8xLTJcIiBkYXRhLW5hbWU9XCJMYXllciAxXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTIxLjA5LDIxLjA5YTcyLDcyLDAsMCwwLDk1LjA2LDEwNy43OWw1MS4zMSw1MS4zLDEyLjcyLTEyLjcyLTUxLjMtNTEuMzFBNzIsNzIsMCwwLDAsMjEuMDksMjEuMDlabTg5LjA5LDg5LjA5YTU0LDU0LDAsMSwxLDAtNzYuMzdBNTQsNTQsMCwwLDEsMTEwLjE4LDExMC4xOFpcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gXCIuL1NlYXJjaEljb25cIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGVzY3JpcHRpb25XcmFwcGVyXCI6IFwiRXZlbnREZXNjcmlwdGlvbl9kZXNjcmlwdGlvbldyYXBwZXJfXzE0MElHXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJFdmVudERlc2NyaXB0aW9uX2Rlc2NyaXB0aW9uX18xa2hua1wiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vRXZlbnREZXNjcmlwdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV2ZW50RGVzY3JpcHRpb246IFJlYWN0LkZDPHsgZGVzY3JpcHRpb246IHN0cmluZyB9PiA9ICh7XHJcbiAgZGVzY3JpcHRpb24sXHJcbn0pID0+IHtcclxuICBjb25zdCB1bndhbnRlZENoYXJhY3RlcnM6IFJlZ0V4cCA9IC9bKl0vZztcclxuXHJcbiAgcmV0dXJuIGRlc2NyaXB0aW9uID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5kZXNjcmlwdGlvbldyYXBwZXJ9PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e2Nzcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uLnNlYXJjaCh1bndhbnRlZENoYXJhY3RlcnMpICE9PSAtMVxyXG4gICAgICAgICAgPyBkZXNjcmlwdGlvbi5yZXBsYWNlKHVud2FudGVkQ2hhcmFjdGVycywgXCJcIilcclxuICAgICAgICAgIDogZGVzY3JpcHRpb259XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG59O1xyXG4iLCJleHBvcnQgeyBFdmVudERlc2NyaXB0aW9uIH0gZnJvbSBcIi4vRXZlbnREZXNjcmlwdGlvblwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJldmVudFByaWNlXCI6IFwiRXZlbnRQcmljZUdlbnJlX2V2ZW50UHJpY2VfXzFIS1RLXCIsXG5cdFwiZ2VucmVcIjogXCJFdmVudFByaWNlR2VucmVfZ2VucmVfXzE1SEpvXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9FdmVudFByaWNlR2VucmUubW9kdWxlLnNjc3NcIjtcclxuZXhwb3J0IGNvbnN0IEV2ZW50UHJpY2VHZW5yZTogUmVhY3QuRkM8e1xyXG4gIHZlbnVlOiBzdHJpbmc7XHJcbiAgcHJpY2U6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBnZW5yZTogYW55IHwgbnVsbDtcclxufT4gPSAoeyB2ZW51ZSwgcHJpY2UsIHNvdXJjZSwgZ2VucmUgfSkgPT4ge1xyXG4gIGNvbnN0IHBhcnNlUHJpY2U6ICgpID0+IHN0cmluZyA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoc291cmNlKSB7XHJcbiAgICAgIGNhc2UgXCJ5ZWxwXCI6XHJcbiAgICAgICAgaWYgKCFwcmljZSkgcmV0dXJuIFwiQ2hlY2sgbGluayBmb3IgcHJpY2UuXCI7XHJcbiAgICAgICAgcmV0dXJuIGBTdGFydGluZyBhdCAkJHtwcmljZX0uMDBgO1xyXG4gICAgICBjYXNlIFwidGlja2V0bWFzdGVyXCI6XHJcbiAgICAgICAgaWYgKCFwcmljZSB8fCAhcHJpY2UubWluKSByZXR1cm4gXCJDaGVjayBsaW5rIGZvciBwcmljZVwiO1xyXG4gICAgICAgIGNvbnN0IHRydWVQcmljZTogKCkgPT4gc3RyaW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByaWNlLm1pbiAlIDEgPT09IDApIHJldHVybiBgU3RhcnRpbmcgYXQgJCR7cHJpY2UubWlufS4wMGA7XHJcbiAgICAgICAgICBjb25zdCBwcmljZVN0cmluZzogc3RyaW5nID0gcHJpY2UubWluLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICBjb25zdCBkZWNpbWFsSW5kZXg6IG51bWJlciA9IHByaWNlU3RyaW5nLmluZGV4T2YoXCIuXCIpO1xyXG4gICAgICAgICAgY29uc3QgY2VudHM6IHN0cmluZyA9IHByaWNlU3RyaW5nLnN1YnN0cmluZyhkZWNpbWFsSW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gYFN0YXJ0aW5nIGF0ICQke3ByaWNlU3RyaW5nLnN1YnN0cmluZygwLCBkZWNpbWFsSW5kZXgpfS4ke1xyXG4gICAgICAgICAgICBjZW50cy5sZW5ndGggPiAxID8gY2VudHMgOiBgJHtjZW50c30wYFxyXG4gICAgICAgICAgfWA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdHJ1ZVByaWNlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0R2VucmU6ICgpID0+IEpTWC5FbGVtZW50IHwgbnVsbCA9ICgpID0+IHtcclxuICAgIGlmIChzb3VyY2UgPT09IFwieWVscFwiKSB7XHJcbiAgICAgIGlmIChnZW5yZS5pbmRleE9mKFwiLVwiKSAhPT0gLTEgfHwgZ2VucmUuaW5kZXhPZihcIiBcIikgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyU3BsaXQ6IHN0cmluZyA9IGdlbnJlLmluZGV4T2YoXCIgXCIpICE9PSAtMSA/IFwiIFwiIDogXCItXCI7XHJcbiAgICAgICAgY29uc3Qgc3BsaXR0ZWQ6IHN0cmluZ1tdID0gZ2VucmUuc3BsaXQoY2hhcmFjdGVyU3BsaXQpO1xyXG4gICAgICAgIGNvbnN0IHVwcGVyQ2FzZTogc3RyaW5nW10gPSBzcGxpdHRlZC5tYXAoXHJcbiAgICAgICAgICAod29yZCkgPT4gYCR7d29yZC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKX0ke3dvcmQuc3Vic3RyaW5nKDEpfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2Nzcy5nZW5yZX0+e2DigKIgJHt1cHBlckNhc2Uuam9pbihcIiBcIil9YH08L3NwYW4+O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5nZW5yZX1cclxuICAgICAgICAgID57YOKAoiAke2dlbnJlWzBdLnRvVXBwZXJDYXNlKCl9JHtnZW5yZS5zdWJzdHJpbmcoMSl9YH08L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFnZW5yZSkgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgc2VnbWVudFN0cmluZzogc3RyaW5nID0gXCJcIjtcclxuICAgIGxldCBnZW5yZVN0cmluZzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBnZW5yZVswXS5zZWdtZW50ID8gKHNlZ21lbnRTdHJpbmcgPSBnZW5yZVswXS5zZWdtZW50Lm5hbWUpIDogbnVsbDtcclxuICAgIGdlbnJlWzBdW1wiZ2VucmVcIl0gPyAoZ2VucmVTdHJpbmcgPSBnZW5yZVswXVtcImdlbnJlXCJdLm5hbWUpIDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzcy5nZW5yZX0+e2DigKIgJHtzZWdtZW50U3RyaW5nfSAke2dlbnJlU3RyaW5nfWB9PC9zcGFuPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5ldmVudFByaWNlfT5cclxuICAgICAgPHNwYW4+e3BhcnNlUHJpY2UoKX08L3NwYW4+XHJcbiAgICAgIHtzZXRHZW5yZSgpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgRXZlbnRQcmljZUdlbnJlIH0gZnJvbSBcIi4vRXZlbnRQcmljZUdlbnJlXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpbWVzXCI6IFwiRXZlbnRUaW1lc1ZlbnVlX3RpbWVzX18xQmN0YVwiLFxuXHRcInZlbnVlXCI6IFwiRXZlbnRUaW1lc1ZlbnVlX3ZlbnVlX18xZXAxbVwiXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlU2VjdXJlU2VydmVyIH0gZnJvbSBcImh0dHAyXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0V2ZW50VGltZXNWZW51ZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV2ZW50VGltZXNWZW51ZTogUmVhY3QuRkM8e1xyXG4gIHN0YXJ0VGltZTogc3RyaW5nO1xyXG4gIGVuZFRpbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgdmVudWU6IHN0cmluZyB8IG51bGw7XHJcbn0+ID0gKHsgc3RhcnRUaW1lLCBlbmRUaW1lLCBzb3VyY2UsIHZlbnVlIH0pID0+IHtcclxuICBjb25zdCBkaXNwbGF5VmVudWU6ICgpID0+IEpTWC5FbGVtZW50IHwgbnVsbCA9ICgpID0+IHtcclxuICAgIHJldHVybiB2ZW51ZSA/IDxzcGFuIGNsYXNzTmFtZT17Y3NzLnZlbnVlfT57YOKAoiAke3ZlbnVlfWB9PC9zcGFuPiA6IG51bGw7XHJcbiAgfTtcclxuICBjb25zdCBwYXJzZVllbHBUaW1lczogKCkgPT4gSlNYLkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB5ZWxwU3RhcnRPYmplY3Q6IERhdGUgPSBuZXcgRGF0ZShzdGFydFRpbWUpO1xyXG4gICAgY29uc3QgeWVscEVuZE9iamVjdDogRGF0ZSA9IG5ldyBEYXRlKGVuZFRpbWUpO1xyXG5cclxuICAgIC8veWVscCBzdGFydCB0aW1lXHJcbiAgICBjb25zdCB5ZWxwU3RhcnRUaW1lOiBzdHJpbmcgPSB5ZWxwU3RhcnRPYmplY3QudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgICBjb25zdCBzdGFydEFtUG06IHN0cmluZyA9IHllbHBTdGFydFRpbWUuc3Vic3RyaW5nKHllbHBTdGFydFRpbWUubGVuZ3RoIC0gMik7XHJcbiAgICBjb25zdCBzdGFydFdpdGhvdXRTZWNvbmRzOiBzdHJpbmcgPSB5ZWxwU3RhcnRUaW1lLnN1YnN0cmluZyhcclxuICAgICAgMCxcclxuICAgICAgeWVscFN0YXJ0VGltZS5sZW5ndGggLSA2XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHllbHBTdGFydEZvcm1hdHRlZFRpbWU6IHN0cmluZyA9IGAke3N0YXJ0V2l0aG91dFNlY29uZHN9ICR7c3RhcnRBbVBtfWA7XHJcblxyXG4gICAgLy95ZWxwIHN0YXJ0IGRhdGVcclxuXHJcbiAgICBjb25zdCB5ZWxwU3RhcnREYXRlOiBzdHJpbmcgPSBgJHt5ZWxwU3RhcnRPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICBcImVuLVVTXCIsXHJcbiAgICAgIHsgd2Vla2RheTogXCJsb25nXCIgfVxyXG4gICAgKX0gJHt5ZWxwU3RhcnRPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKCl9YDtcclxuXHJcbiAgICAvL3llbHAgZW5kIHRpbWVcclxuXHJcbiAgICBjb25zdCB5ZWxwRW5kVGltZTogc3RyaW5nID0geWVscEVuZE9iamVjdC50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICAgIGNvbnN0IGVuZEFtUG06IHN0cmluZyA9IHllbHBFbmRUaW1lLnN1YnN0cmluZyh5ZWxwRW5kVGltZS5sZW5ndGggLSAyKTtcclxuICAgIGNvbnN0IGVuZFdpdGhvdXRTZWNvbmRzOiBzdHJpbmcgPSB5ZWxwRW5kVGltZS5zdWJzdHJpbmcoXHJcbiAgICAgIDAsXHJcbiAgICAgIHllbHBFbmRUaW1lLmxlbmd0aCAtIDZcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgeWVscEVuZEZvcm1hdHRlZFRpbWU6IHN0cmluZyA9IGAke2VuZFdpdGhvdXRTZWNvbmRzfSAke2VuZEFtUG19YDtcclxuXHJcbiAgICAvL3llbHAgZW5kIERhdGVcclxuXHJcbiAgICBjb25zdCB5ZWxwRW5kRGF0ZTogc3RyaW5nID0geWVscEVuZE9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuXHJcbiAgICByZXR1cm4gPHA+e2Ake3llbHBTdGFydERhdGV9ICR7eWVscFN0YXJ0Rm9ybWF0dGVkVGltZX1gfTwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFyc2VUaWNrZXRNYXN0ZXJUaW1lOiAoKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpY2tldG1hc3RlclN0YXJ0T2JqZWN0OiBEYXRlID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcclxuXHJcbiAgICBjb25zdCB0aWNrZXRtYXN0ZXJTdGFydFRpbWU6IHN0cmluZyA9IHRpY2tldG1hc3RlclN0YXJ0T2JqZWN0LnRvTG9jYWxlVGltZVN0cmluZyhcclxuICAgICAgXCJlbi1VU1wiXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RhcnRBbVBtOiBzdHJpbmcgPSB0aWNrZXRtYXN0ZXJTdGFydFRpbWUuc3Vic3RyaW5nKFxyXG4gICAgICB0aWNrZXRtYXN0ZXJTdGFydFRpbWUubGVuZ3RoIC0gMlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0YXJ0V2l0aG91dFNlY29uZHM6IHN0cmluZyA9IHRpY2tldG1hc3RlclN0YXJ0VGltZS5zdWJzdHJpbmcoXHJcbiAgICAgIDAsXHJcbiAgICAgIHRpY2tldG1hc3RlclN0YXJ0VGltZS5sZW5ndGggLSA2XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRpY2tldG1hc3RlclN0YXJ0Rm9ybWF0dGVkVGltZTogc3RyaW5nID0gYCR7c3RhcnRXaXRob3V0U2Vjb25kc30gJHtzdGFydEFtUG19YDtcclxuXHJcbiAgICBjb25zdCB0aWNrZXRtYXN0ZXJEYXRlOiBzdHJpbmcgPSBgJHt0aWNrZXRtYXN0ZXJTdGFydE9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIixcclxuICAgICAgeyB3ZWVrZGF5OiBcImxvbmdcIiB9XHJcbiAgICApfSAke3RpY2tldG1hc3RlclN0YXJ0T2JqZWN0LnRvTG9jYWxlRGF0ZVN0cmluZygpfWA7XHJcblxyXG4gICAgcmV0dXJuIDxwPntgJHt0aWNrZXRtYXN0ZXJEYXRlfSAke3RpY2tldG1hc3RlclN0YXJ0Rm9ybWF0dGVkVGltZX1gfTwvcD47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lU291cmNlOiAoKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzb3VyY2UgPT09IFwieWVscFwiID8gcGFyc2VZZWxwVGltZXMoKSA6IHBhcnNlVGlja2V0TWFzdGVyVGltZSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnRpbWVzfT5cclxuICAgICAge2RldGVybWluZVNvdXJjZSgpfVxyXG4gICAgICB7ZGlzcGxheVZlbnVlKCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBFdmVudFRpbWVzVmVudWUgfSBmcm9tIFwiLi9FdmVudFRpbWVzVmVudWVcIjtcclxuIiwiZXhwb3J0IHsgRXZlbnRUaW1lc1ZlbnVlIH0gZnJvbSBcIi4vRXZlbnRUaW1lc1ZlbnVlXCI7XHJcbmV4cG9ydCB7IEV2ZW50UHJpY2VHZW5yZSB9IGZyb20gXCIuL0V2ZW50UHJpY2VHZW5yZVwiO1xyXG5leHBvcnQgeyBFdmVudERlc2NyaXB0aW9uIH0gZnJvbSBcIi4vRXZlbnREZXNjcmlwdGlvblwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbWdCYWNrZ3JvdW5kXCI6IFwiSW1hZ2VCYWNrZ3JvdW5kX2ltZ0JhY2tncm91bmRfX1lhWkh3XCIsXG5cdFwiZXh0ZW5kZWRcIjogXCJJbWFnZUJhY2tncm91bmRfZXh0ZW5kZWRfX1M3d0FlXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9JbWFnZUJhY2tncm91bmQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZUJhY2tncm91bmQ6IFJlYWN0LkZDPHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgZXh0ZW5kZWQ6IGJvb2xlYW47XHJcbiAgaGFuZGxlUmV0cmFjdDogKCkgPT4gdm9pZDtcclxufT4gPSAoeyBleHRlbmRlZCwgaGFuZGxlUmV0cmFjdCwgdHlwZSwgc291cmNlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgLy8gY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7IGxvYWRlZDogYm9vbGVhbiB9Pih7XHJcbiAgLy8gICBsb2FkZWQ6IGZhbHNlLFxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBjb25zdCBkZXRlcm1pbmVJbWFnZVJhdGlvOiAoKSA9PiB7IHdpZHRoOiBzdHJpbmc7IGhlaWdodDogc3RyaW5nIH0gPSAoKSA9PiB7XHJcbiAgLy8gICBzd2l0Y2ggKHR5cGUpIHtcclxuICAvLyAgICAgY2FzZSBcImV2ZW50XCI6XHJcbiAgLy8gICAgICAgcmV0dXJuIHNvdXJjZSA9PT0gXCJ5ZWxwXCJcclxuICAvLyAgICAgICAgID8geyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCIgfVxyXG4gIC8vICAgICAgICAgOiB7IHdpZHRoOiBcImF1dG9cIiwgaGVpZ2h0OiBcIjEwMCVcIiB9O1xyXG4gIC8vICAgICBjYXNlIFwicGxhY2VcIjpcclxuICAvLyAgICAgICByZXR1cm4geyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCIgfTtcclxuXHJcbiAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgLy8gICAgICAgcmV0dXJuIHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wiIH07XHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lSW1hZ2VSYXRpbzogKCkgPT4gc3RyaW5nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNvdXJjZSA9PT0gXCJ5ZWxwXCIgPyBjc3MuYnlXaWR0aCA6IGNzcy5ieVdpZHRoO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLmltZ0JhY2tncm91bmR9ICR7ZXh0ZW5kZWQgPyBjc3MuZXh0ZW5kZWQgOiBudWxsfWB9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVJldHJhY3R9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IEltYWdlQmFja2dyb3VuZCB9IGZyb20gXCIuL0ltYWdlQmFja2dyb3VuZFwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaW5rXCI6IFwiUGFydExpbmtfbGlua19fM01sYlpcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1BhcnRMaW5rLm1vZHVsZS5zY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBQYXJ0TGluazogUmVhY3QuRkM8eyB1cmw6IHN0cmluZyB9PiA9ICh7IHVybCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPXtjc3MubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICBmaWxsPVwiIzAwMDAwMFwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCA1MCA1MFwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGggZD1cIk0gMzMuNDA2MjUgMCBDIDMyLjg1NTQ2OSAwLjA1MDc4MTMgMzIuNDQ5MjE5IDAuNTQyOTY5IDMyLjUgMS4wOTM3NSBDIDMyLjU1MDc4MSAxLjY0NDUzMSAzMy4wNDI5NjkgMi4wNTA3ODEgMzMuNTkzNzUgMiBMIDQ2LjU2MjUgMiBMIDI1LjY4NzUgMjIuOTA2MjUgQyAyNS4zOTA2MjUgMjMuMTQ4NDM4IDI1LjI1MzkwNiAyMy41MzUxNTYgMjUuMzM5ODQ0IDIzLjkxMDE1NiBDIDI1LjQyNTc4MSAyNC4yODEyNSAyNS43MTg3NSAyNC41NzQyMTkgMjYuMDg5ODQ0IDI0LjY2MDE1NiBDIDI2LjQ2NDg0NCAyNC43NDYwOTQgMjYuODUxNTYzIDI0LjYwOTM3NSAyNy4wOTM3NSAyNC4zMTI1IEwgNDggMy40Mzc1IEwgNDggMTYuNDA2MjUgQyA0Ny45OTYwOTQgMTYuNzY1NjI1IDQ4LjE4MzU5NCAxNy4xMDE1NjMgNDguNDk2MDk0IDE3LjI4NTE1NiBDIDQ4LjgwODU5NCAxNy40NjQ4NDQgNDkuMTkxNDA2IDE3LjQ2NDg0NCA0OS41MDM5MDYgMTcuMjg1MTU2IEMgNDkuODE2NDA2IDE3LjEwMTU2MyA1MC4wMDM5MDYgMTYuNzY1NjI1IDUwIDE2LjQwNjI1IEwgNTAgMCBMIDMzLjU5Mzc1IDAgQyAzMy41NjI1IDAgMzMuNTMxMjUgMCAzMy41IDAgQyAzMy40Njg3NSAwIDMzLjQzNzUgMCAzMy40MDYyNSAwIFogTSAyIDEwIEMgMS40NzY1NjMgMTAgMC45NDE0MDYgMTAuMTgzNTk0IDAuNTYyNSAxMC41NjI1IEMgMC4xODM1OTQgMTAuOTQxNDA2IDAgMTEuNDc2NTYzIDAgMTIgTCAwIDQ4IEMgMCA0OC41MjM0MzggMC4xODM1OTQgNDkuMDU4NTk0IDAuNTYyNSA0OS40Mzc1IEMgMC45NDE0MDYgNDkuODE2NDA2IDEuNDc2NTYzIDUwIDIgNTAgTCAzOCA1MCBDIDM4LjUyMzQzOCA1MCAzOS4wNTg1OTQgNDkuODE2NDA2IDM5LjQzNzUgNDkuNDM3NSBDIDM5LjgxNjQwNiA0OS4wNTg1OTQgNDAgNDguNTIzNDM4IDQwIDQ4IEwgNDAgMTggQyA0MC4wMDM5MDYgMTcuNjQwNjI1IDM5LjgxNjQwNiAxNy4zMDQ2ODggMzkuNTAzOTA2IDE3LjEyMTA5NCBDIDM5LjE5MTQwNiAxNi45NDE0MDYgMzguODA4NTk0IDE2Ljk0MTQwNiAzOC40OTYwOTQgMTcuMTIxMDk0IEMgMzguMTgzNTk0IDE3LjMwNDY4OCAzNy45OTYwOTQgMTcuNjQwNjI1IDM4IDE4IEwgMzggNDggTCAyIDQ4IEwgMiAxMiBMIDMyIDEyIEMgMzIuMzU5Mzc1IDEyLjAwMzkwNiAzMi42OTUzMTMgMTEuODE2NDA2IDMyLjg3ODkwNiAxMS41MDM5MDYgQyAzMy4wNTg1OTQgMTEuMTkxNDA2IDMzLjA1ODU5NCAxMC44MDg1OTQgMzIuODc4OTA2IDEwLjQ5NjA5NCBDIDMyLjY5NTMxMyAxMC4xODM1OTQgMzIuMzU5Mzc1IDkuOTk2MDk0IDMyIDEwIFpcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBQYXJ0TGluayB9IGZyb20gXCIuL1BhcnRMaW5rXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvY2F0aW9uXCI6IFwiTG9jYXRpb25fbG9jYXRpb25fX3JOcUlDXCIsXG5cdFwiYWRkcmVzc1wiOiBcIkxvY2F0aW9uX2FkZHJlc3NfXzFrTk5nXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9Mb2NhdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2F0aW9uOiBSZWFjdC5GQzx7IHN0cmVldDogc3RyaW5nOyBjaXR5OiBzdHJpbmcgfT4gPSAoe1xyXG4gIHN0cmVldCxcclxuICBjaXR5LFxyXG59KSA9PiB7XHJcbiAgaWYgKCFzdHJlZXQgJiYgIWNpdHkpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT17Y3NzLmxvY2F0aW9ufT5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6XCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17Y3NzLmFkZHJlc3N9PlxyXG4gICAgICAgIHtzdHJlZXR9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2NpdHl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCIuL0xvY2F0aW9uXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBob25lXCI6IFwiUGhvbmVfcGhvbmVfXzM5SUxzXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9QaG9uZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBob25lOiBSZWFjdC5GQzx7IHBob25lOiBzdHJpbmcgfT4gPSAoeyBwaG9uZSB9KSA9PiB7XHJcbiAgaWYgKCFwaG9uZSkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9e2B0ZWw6JHtwaG9uZX1gfSBjbGFzc05hbWU9e2Nzcy5waG9uZX0+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTIwLjAxIDE1LjM4Yy0xLjIzIDAtMi40Mi0uMi0zLjUzLS41Ni0uMzUtLjEyLS43NC0uMDMtMS4wMS4yNGwtMS41NyAxLjk3Yy0yLjgzLTEuMzUtNS40OC0zLjktNi44OS02LjgzbDEuOTUtMS42NmMuMjctLjI4LjM1LS42Ny4yNC0xLjAyLS4zNy0xLjExLS41Ni0yLjMtLjU2LTMuNTMgMC0uNTQtLjQ1LS45OS0uOTktLjk5SDQuMTlDMy42NSAzIDMgMy4yNCAzIDMuOTkgMyAxMy4yOCAxMC43MyAyMSAyMC4wMSAyMWMuNzEgMCAuOTktLjYzLjk5LTEuMTh2LTMuNDVjMC0uNTQtLjQ1LS45OS0uOTktLjk5elwiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8c3Bhbj57cGhvbmV9PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFBob25lIH0gZnJvbSBcIi4vUGhvbmVcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGxhY2VQcmljZVwiOiBcIlByaWNlQW5kVHlwZV9wbGFjZVByaWNlX18yMVNqTlwiLFxuXHRcImxpZ2h0XCI6IFwiUHJpY2VBbmRUeXBlX2xpZ2h0X18ya2dPYlwiLFxuXHRcInR5cGVcIjogXCJQcmljZUFuZFR5cGVfdHlwZV9fMWZxQmpcIixcblx0XCJjaXR5XCI6IFwiUHJpY2VBbmRUeXBlX2NpdHlfXzNGTVpsXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9QcmljZUFuZFR5cGUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZUFuZFR5cGU6IFJlYWN0LkZDPHtcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIHN0YXRlOiBzdHJpbmc7XHJcbn0+ID0gKHsgcHJpY2UsIHR5cGUsIGNpdHksIHN0YXRlIH0pID0+IHtcclxuICBjb25zdCBpbnNlcnRDaXR5OiAoY2l0eTogc3RyaW5nKSA9PiBKU1guRWxlbWVudCB8IG51bGwgPSAoY2l0eSkgPT4ge1xyXG4gICAgcmV0dXJuIGNpdHkgPyAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzLmNpdHl9Pntg4oCiICR7Y2l0eX0sICR7c3RhdGV9YH08L3NwYW4+XHJcbiAgICApIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaW5ndWxhclR5cGU6ICgpID0+IEpTWC5FbGVtZW50IHwgbnVsbCA9ICgpID0+IHtcclxuICAgIGlmICghdHlwZSB8fCB0eXBlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXhMYXN0TGV0dGVyOiBudW1iZXIgPSB0eXBlLmxlbmd0aCAtIDE7XHJcbiAgICAgIHN3aXRjaCAodHlwZVtpbmRleExhc3RMZXR0ZXJdKSB7XHJcbiAgICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICAgIHJldHVybiB0eXBlLmluZGV4T2YoXCJpZXNcIikgIT09IC0xID8gKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLnR5cGV9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogcHJpY2UgPyBcIjJ2d1wiIDogbnVsbCB9fVxyXG4gICAgICAgICAgICA+e2Ake3R5cGUuc3Vic3RyaW5nKDAsIHR5cGUuaW5kZXhPZihcImllc1wiKSl9eWB9PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy50eXBlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IHByaWNlID8gXCIydndcIiA6IG51bGwgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0eXBlLnN1YnN0cmluZygwLCBpbmRleExhc3RMZXR0ZXIpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLnR5cGV9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogcHJpY2UgPyBcIjJ2d1wiIDogbnVsbCB9fVxyXG4gICAgICAgICAgICA+e2Ake3R5cGV9YH08L3NwYW4+XHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gcHJpY2UgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBsYWNlUHJpY2V9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzcy5saWdodH0+e3ByaWNlWzBdfTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwcmljZS5sZW5ndGggPj0gMiA/IGNzcy5saWdodCA6IG51bGx9PntwcmljZVswXX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cHJpY2UubGVuZ3RoID49IDMgPyBjc3MubGlnaHQgOiBudWxsfT57cHJpY2VbMF19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3ByaWNlLmxlbmd0aCA9PT0gNCA/IGNzcy5saWdodCA6IG51bGx9PntwcmljZVswXX08L3NwYW4+XHJcbiAgICAgIHtzaW5ndWxhclR5cGUoKX1cclxuICAgICAge2luc2VydENpdHkoY2l0eSl9XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wbGFjZVByaWNlfT5cclxuICAgICAge3Npbmd1bGFyVHlwZSgpfVxyXG5cclxuICAgICAge2luc2VydENpdHkoY2l0eSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBQcmljZUFuZFR5cGUgfSBmcm9tIFwiLi9QcmljZUFuZFR5cGVcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmV2aWV3V3JhcHBlclwiOiBcIlJldmlld3NfcmV2aWV3V3JhcHBlcl9fM041d2VcIixcblx0XCJzdGFyV3JhcHBlclwiOiBcIlJldmlld3Nfc3RhcldyYXBwZXJfXzFSbFN5XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9SZXZpZXdzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmV2aWV3czogUmVhY3QuRkM8eyByZXZpZXdDb3VudDogbnVtYmVyOyByYXRpbmc6IG51bWJlciB9PiA9ICh7XHJcbiAgcmV2aWV3Q291bnQsXHJcbiAgcmF0aW5nLFxyXG59KSA9PiB7XHJcbiAgaWYgKHJldmlld0NvdW50ICYmIHJhdGluZykge1xyXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0U3RhcnM7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgRW1wdHlTdGFyOiAoaWQ6IG51bWJlcikgPT4gSlNYLkVsZW1lbnQgPSAoaWQpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjYzLjA4IDI1MS41M1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBmaWxsOiBcIiM3MDcwNzBcIiB9fVxyXG4gICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICA8dGl0bGU+QXNzZXQgMTA8L3RpdGxlPlxyXG4gICAgICAgICAgPGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlRyYWNpbmdcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0MS41LDguNjlsMzEuMjcsNjMuMzZhMTEuMTEsMTEuMTEsMCwwLDAsOC4zNiw2LjA4bDY5LjkzLDEwLjE2YTExLjExLDExLjExLDAsMCwxLDYuMTUsMTguOTRsLTUwLjYsNDkuMzJhMTEuMDksMTEuMDksMCwwLDAtMy4xOSw5LjgzTDIxNS4zNiwyMzZhMTEuMSwxMS4xLDAsMCwxLTE2LjExLDExLjdsLTYyLjU0LTMyLjg4YTExLjEyLDExLjEyLDAsMCwwLTEwLjM0LDBMNjMuODMsMjQ3LjczQTExLjExLDExLjExLDAsMCwxLDQ3LjcxLDIzNmwxMS45NS02OS42NWExMS4xLDExLjEsMCwwLDAtMy4yLTkuODNMNS44NywxMDcuMjNBMTEuMSwxMS4xLDAsMCwxLDEyLDg4LjI5TDgyLDc4LjEzYTExLjEzLDExLjEzLDAsMCwwLDguMzYtNi4wOEwxMjEuNTgsOC42OUExMS4xMSwxMS4xMSwwLDAsMSwxNDEuNSw4LjY5WlwiIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgRnVsbFN0YXI6IChpZDogbnVtYmVyKSA9PiBKU1guRWxlbWVudCA9IChpZCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNTguMDggMjQ2LjUzXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICA8dGl0bGU+QXNzZXQgNzwvdGl0bGU+XHJcbiAgICAgICAgICA8ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiVHJhY2luZ1wiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTM5LDYuMTlsMzEuMjcsNjMuMzZhMTEuMTEsMTEuMTEsMCwwLDAsOC4zNiw2LjA4bDY5LjkzLDEwLjE2YTExLjExLDExLjExLDAsMCwxLDYuMTUsMTguOTRsLTUwLjYsNDkuMzJhMTEuMDksMTEuMDksMCwwLDAtMy4xOSw5LjgzbDExLjk0LDY5LjY1YTExLjEsMTEuMSwwLDAsMS0xNi4xMSwxMS43bC02Mi41NC0zMi44OGExMS4xMiwxMS4xMiwwLDAsMC0xMC4zNCwwTDYxLjMzLDI0NS4yM2ExMS4xMSwxMS4xMSwwLDAsMS0xNi4xMi0xMS43bDExLjk1LTY5LjY1YTExLjEsMTEuMSwwLDAsMC0zLjItOS44M0wzLjM3LDEwNC43M0ExMS4xLDExLjEsMCwwLDEsOS41Miw4NS43OUw3OS40NSw3NS42M2ExMS4xMywxMS4xMywwLDAsMCw4LjM2LTYuMDhMMTE5LjA4LDYuMTlBMTEuMTEsMTEuMTEsMCwwLDEsMTM5LDYuMTlaXCIgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBIYWxmU3RhcjogKGlkOiBudW1iZXIpID0+IEpTWC5FbGVtZW50ID0gKGlkKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI2My4wNyAyNTEuNTRcIlxyXG4gICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGVmcz48L2RlZnM+XHJcbiAgICAgICAgICA8dGl0bGU+QXNzZXQgMTE8L3RpdGxlPlxyXG4gICAgICAgICAgPGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlRyYWNpbmdcIj5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogXCIjNzA3MDcwXCIgfX1cclxuICAgICAgICAgICAgICAgIGQ9XCJNMjA2LjYxLDE1Ni41NmExMS4xMSwxMS4xMSwwLDAsMC0zLjE5LDkuODNMMjE1LjM2LDIzNmExMS4xLDExLjEsMCwwLDEtMTYuMTEsMTEuNzFsLTYyLjU0LTMyLjg5YTExLjA3LDExLjA3LDAsMCwwLTEwLjM0LDBMNjMuODMsMjQ3Ljc0QTExLjEsMTEuMSwwLDAsMSw0Ny43MiwyMzZsMTEuOTQtNjkuNjRhMTEuMTEsMTEuMTEsMCwwLDAtMy4xOS05LjgzTDUuODcsMTA3LjIzQTExLjEsMTEuMSwwLDAsMSwxMiw4OC4yOUw4Miw3OC4xM2ExMS4wOCwxMS4wOCwwLDAsMCw4LjM2LTYuMDdMMTIxLjU4LDguNjlhMTEuMTEsMTEuMTEsMCwwLDEsMTkuOTIsMGwzMS4yNyw2My4zN2ExMS4wOCwxMS4wOCwwLDAsMCw4LjM2LDYuMDdsNjkuOTMsMTAuMTZhMTEuMSwxMS4xLDAsMCwxLDYuMTUsMTguOTRaXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMzIsMi41MVYyMTMuNThhMTEuMTksMTEuMTksMCwwLDAtNS42NywxLjI3TDYzLjgzLDI0Ny43NEExMS4xLDExLjEsMCwwLDEsNDcuNzIsMjM2bDExLjk0LTY5LjY0YTExLjExLDExLjExLDAsMCwwLTMuMTktOS44M0w1Ljg3LDEwNy4yM0ExMS4xLDExLjEsMCwwLDEsMTIsODguMjlMODIsNzguMTNhMTEuMDgsMTEuMDgsMCwwLDAsOC4zNi02LjA3TDEyMS41OCw4LjY5QTExLDExLDAsMCwxLDEzMiwyLjUxWlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRTdGFyczogKCkgPT4gSlNYLkVsZW1lbnRbXSA9ICgpID0+IHtcclxuICAgICAgbGV0IHJhdGluZ0ludDogbnVtYmVyID0gTWF0aC5mbG9vcihyYXRpbmcpO1xyXG4gICAgICBsZXQgcmVtYWluZGVyOiBudW1iZXIgPSByYXRpbmcgLSByYXRpbmdJbnQ7XHJcbiAgICAgIGNvbnN0IHN0YXJUeXBlczogSlNYLkVsZW1lbnRbXSA9IFtcclxuICAgICAgICBFbXB0eVN0YXIoMCksXHJcbiAgICAgICAgRW1wdHlTdGFyKDEpLFxyXG4gICAgICAgIEVtcHR5U3RhcigyKSxcclxuICAgICAgICBFbXB0eVN0YXIoMyksXHJcbiAgICAgICAgRW1wdHlTdGFyKDQpLFxyXG4gICAgICBdO1xyXG5cclxuICAgICAgY29uc3QgbmV3U3RhcnM6IEpTWC5FbGVtZW50W10gPSBzdGFyVHlwZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA8IHJhdGluZ0ludCkge1xyXG4gICAgICAgICAgcmV0dXJuIEZ1bGxTdGFyKGluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHJlbWFpbmRlciA+IDAgJiYgaW5kZXggPCByYXRpbmdcclxuICAgICAgICAgICAgPyBIYWxmU3RhcihpbmRleClcclxuICAgICAgICAgICAgOiBFbXB0eVN0YXIoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3U3RhcnM7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucmV2aWV3V3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5zdGFyV3JhcHBlcn0+e3NldFN0YXJzKCkubWFwKChzdGFyKSA9PiBzdGFyKX08L2Rpdj5cclxuICAgICAgICA8c3Bhbj57YCR7cmV2aWV3Q291bnR9IFJldmlld3NgfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCB7IFByaWNlQW5kVHlwZSB9IGZyb20gXCIuL1ByaWNlQW5kVHlwZVwiO1xyXG5leHBvcnQgeyBSZXZpZXdzIH0gZnJvbSBcIi4vUmV2aWV3cy9SZXZpZXdzXCI7XHJcbmV4cG9ydCB7IFBob25lIH0gZnJvbSBcIi4vUGhvbmVcIjtcclxuZXhwb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi9Mb2NhdGlvblwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZXN1bHRDYXJkXCI6IFwiUmVzdWx0Q2FyZF9yZXN1bHRDYXJkX18xa3M1SlwiLFxuXHRcImV4dGVuZGVkXCI6IFwiUmVzdWx0Q2FyZF9leHRlbmRlZF9fSTd6X0JcIixcblx0XCJsb2FkZWRcIjogXCJSZXN1bHRDYXJkX2xvYWRlZF9fM2VrTWxcIixcblx0XCJsb2FkaW5nXCI6IFwiUmVzdWx0Q2FyZF9sb2FkaW5nX19UcUx1ZlwiLFxuXHRcImluZm9CYXJcIjogXCJSZXN1bHRDYXJkX2luZm9CYXJfXzJwUEp1XCIsXG5cdFwidGl0bGVcIjogXCJSZXN1bHRDYXJkX3RpdGxlX18ybVNHelwiLFxuXHRcImxvYWRpbmdCYXJcIjogXCJSZXN1bHRDYXJkX2xvYWRpbmdCYXJfXzJ0dHh4XCIsXG5cdFwiZGV0YWlsc1dyYXBwZXJcIjogXCJSZXN1bHRDYXJkX2RldGFpbHNXcmFwcGVyX18xOEpSalwiLFxuXHRcImFkZEJ1dHRvblwiOiBcIlJlc3VsdENhcmRfYWRkQnV0dG9uX18xcDA4NFwiLFxuXHRcInJlbW92ZVwiOiBcIlJlc3VsdENhcmRfcmVtb3ZlX19hOWowR1wiLFxuXHRcImxvYWRpbmdBZGRcIjogXCJSZXN1bHRDYXJkX2xvYWRpbmdBZGRfXzMzUlhMXCJcbn07XG4iLCJpbXBvcnQgeyBQcmljZUFuZFR5cGUsIFJldmlld3MsIFBob25lLCBMb2NhdGlvbiB9IGZyb20gXCIuL1BhcnRzL1BsYWNlc0luZm9cIjtcclxuaW1wb3J0IHtcclxuICBFdmVudFRpbWVzVmVudWUsXHJcbiAgRXZlbnRQcmljZUdlbnJlLFxyXG4gIEV2ZW50RGVzY3JpcHRpb24sXHJcbn0gZnJvbSBcIi4vUGFydHMvRXZlbnRzSW5mb1wiO1xyXG5pbXBvcnQgeyBQYXJ0TGluayB9IGZyb20gXCIuL1BhcnRzL1BhcnRMaW5rXCI7XHJcbmltcG9ydCB7IEltYWdlQmFja2dyb3VuZCB9IGZyb20gXCIuL1BhcnRzL0ltYWdlQmFja2dyb3VuZFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBQYXJ0c1Byb3ZpZGVyLFxyXG4gIHVzZVBhcnRzRGlzcGF0Y2gsXHJcbiAgdXNlUGFydHNTdGF0ZSxcclxufSBmcm9tIFwiLi4vLi4vLi4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1Jlc3VsdENhcmQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHRDYXJkOiBSZWFjdC5GQzx7XHJcbiAgaXRlbT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgcmVzdWx0c0xvYWRpbmc/OiBib29sZWFuO1xyXG59PiA9ICh7IGl0ZW0sIHJlc3VsdHNMb2FkaW5nIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPHtcclxuICAgIGFkZGVkOiBib29sZWFuO1xyXG4gICAgbW9yZUluZm86IGJvb2xlYW47XHJcbiAgICBpbWFnZUxvYWRlZDogYm9vbGVhbjtcclxuICB9Pih7IGFkZGVkOiBmYWxzZSwgbW9yZUluZm86IGZhbHNlLCBpbWFnZUxvYWRlZDogZmFsc2UgfSk7XHJcblxyXG4gIGNvbnN0IEdsb2JhbFBhcnRzID0gdXNlUGFydHNTdGF0ZSgpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHbG9iYWxQYXJ0cy5wYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChHbG9iYWxQYXJ0cy5wYXJ0c1tpXS5pZCA9PT0gaXRlbS5pZCkge1xyXG4gICAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgYWRkZWQ6IHRydWUgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtHbG9iYWxQYXJ0c10pO1xyXG5cclxuICBjb25zdCBkZXRlcm1pbmVJbWFnZUJhY2tncm91bmRTb3VyY2U6ICgpID0+IHN0cmluZyA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJwbGFjZVwiOlxyXG4gICAgICAgIHJldHVybiBpdGVtLnNvdXJjZSA9PT0gXCJ5ZWxwXCIgPyBpdGVtLmltYWdlX3VybCA6IG51bGw7XHJcbiAgICAgIGNhc2UgXCJldmVudFwiOlxyXG4gICAgICAgIHJldHVybiBpdGVtLnNvdXJjZSA9PT0gXCJ5ZWxwXCIgPyBpdGVtLmltYWdlX3VybCA6IGl0ZW0uaW1hZ2VzWzBdLnVybDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXRyYWN0OiAoKSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLm1vcmVJbmZvXHJcbiAgICAgID8gc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgbW9yZUluZm86IGZhbHNlIH0pKVxyXG4gICAgICA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9yZURldGFpbHM6ICh0eXBlOiBzdHJpbmcpID0+IEpTWC5FbGVtZW50IHwgbnVsbCA9ICh0eXBlKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlLm1vcmVJbmZvKSByZXR1cm4gbnVsbDtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwicGxhY2VcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5kZXRhaWxzV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxQaG9uZSBwaG9uZT17aXRlbS5waG9uZX0+PC9QaG9uZT5cclxuICAgICAgICAgICAgPExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgc3RyZWV0PXtpdGVtLmxvY2F0aW9uLmRpc3BsYXlfYWRkcmVzc1swXX1cclxuICAgICAgICAgICAgICBjaXR5PXtpdGVtLmxvY2F0aW9uLmRpc3BsYXlfYWRkcmVzc1sxXX1cclxuICAgICAgICAgICAgPjwvTG9jYXRpb24+XHJcbiAgICAgICAgICAgIDxQYXJ0TGluayB1cmw9e2l0ZW0udXJsfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcImV2ZW50XCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZGV0YWlsc1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8RXZlbnREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn0+PC9FdmVudERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8UGFydExpbmtcclxuICAgICAgICAgICAgICB1cmw9e2l0ZW0uc291cmNlID09PSBcInllbHBcIiA/IGl0ZW0uZXZlbnRfc2l0ZV91cmwgOiBpdGVtLnVybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3MuZGV0YWlsc1dyYXBwZXJ9PjwvZGl2PjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRDYXJkRGV0YWlsczogKCkgPT4gSlNYLkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xyXG4gICAgICBjYXNlIFwicGxhY2VcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjc3MuaW5mb0Jhcn0gJHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vcmVJbmZvID8gY3NzLmV4dGVuZGVkIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3MudGl0bGV9PntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxSZXZpZXdzXHJcbiAgICAgICAgICAgICAgICByZXZpZXdDb3VudD17aXRlbS5yZXZpZXdfY291bnR9XHJcbiAgICAgICAgICAgICAgICByYXRpbmc9e2l0ZW0ucmF0aW5nfVxyXG4gICAgICAgICAgICAgID48L1Jldmlld3M+XHJcbiAgICAgICAgICAgICAgPFByaWNlQW5kVHlwZVxyXG4gICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICBjaXR5PXtpdGVtLmxvY2F0aW9uLmNpdHl9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZT17aXRlbS5sb2NhdGlvbi5zdGF0ZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9e1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLmNhdGVnb3JpZXMgJiYgaXRlbS5jYXRlZ29yaWVzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uY2F0ZWdvcmllc1swXS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID48L1ByaWNlQW5kVHlwZT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnN0YXJzV3JhcHBlcn0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bW9yZURldGFpbHMoXCJwbGFjZVwiKX1cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcImV2ZW50XCI6XHJcbiAgICAgICAgY29uc3QgZGV0ZXJtaW5lUHJpY2U6ICgpID0+XHJcbiAgICAgICAgICB8IHsgW2tleTogc3RyaW5nXTogYW55IH1cclxuICAgICAgICAgIHwgbnVsbFxyXG4gICAgICAgICAgfCBzdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGl0ZW0uc291cmNlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5ZWxwXCI6XHJcbiAgICAgICAgICAgICAgaWYgKCFpdGVtLmNvc3QpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLmNvc3Q7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aWNrZXRtYXN0ZXJcIjpcclxuICAgICAgICAgICAgICBpZiAoIWl0ZW0ucHJpY2VSYW5nZXMpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLnByaWNlUmFuZ2VzWzBdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGRldGVybWluZVZlbnVlOiAoKSA9PiBzdHJpbmcgfCBudWxsID0gKCkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChpdGVtLnNvdXJjZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwieWVscFwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiAhaXRlbS5idXNpbmVzZXNzX2lkIHx8IGl0ZW0uYnVzaW5lc3NfaWQgPT09IG51bGxcclxuICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgOiBpdGVtLmJ1c2luZXNzX2lkO1xyXG4gICAgICAgICAgICBjYXNlIFwidGlja2V0bWFzdGVyXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uX2VtYmVkZGVkLnZlbnVlc1swXS5uYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRpY2tldG1hc3RlckNsYXNzaWZpY2F0aW9uOiAoKSA9PiBhbnkgfCBudWxsID0gKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2xhc3NpZmljYXRpb25zID8gaXRlbS5jbGFzc2lmaWNhdGlvbnMgOiBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Nzcy5pbmZvQmFyfSAke1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9yZUluZm8gPyBjc3MuZXh0ZW5kZWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzcy50aXRsZX0+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPEV2ZW50VGltZXNWZW51ZVxyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lPXtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5zb3VyY2UgPT09IFwieWVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpdGVtLnRpbWVfc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICA6IGAke2l0ZW0uZGF0ZXMuc3RhcnQubG9jYWxEYXRlfVQke2l0ZW0uZGF0ZXMuc3RhcnQubG9jYWxUaW1lfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVuZFRpbWU9e2l0ZW0uc291cmNlID09PSBcInllbHBcIiA/IGl0ZW0udGltZV9lbmQgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgc291cmNlPXtpdGVtLnNvdXJjZX1cclxuICAgICAgICAgICAgICAgIHZlbnVlPXtkZXRlcm1pbmVWZW51ZSgpfVxyXG4gICAgICAgICAgICAgID48L0V2ZW50VGltZXNWZW51ZT5cclxuICAgICAgICAgICAgICA8RXZlbnRQcmljZUdlbnJlXHJcbiAgICAgICAgICAgICAgICB2ZW51ZT17XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0uc291cmNlID09PSBcInllbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gaXRlbS5idXNpbmVzc19pZFxyXG4gICAgICAgICAgICAgICAgICAgIDogaXRlbS5fZW1iZWRkZWQudmVudWVzWzBdLm5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtkZXRlcm1pbmVQcmljZSgpfVxyXG4gICAgICAgICAgICAgICAgc291cmNlPXtpdGVtLnNvdXJjZX1cclxuICAgICAgICAgICAgICAgIGdlbnJlPXtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5zb3VyY2UgPT09IFwieWVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aWNrZXRtYXN0ZXJDbGFzc2lmaWNhdGlvbigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPjwvRXZlbnRQcmljZUdlbnJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vcmVEZXRhaWxzKFwiZXZlbnRcIil9XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2g6IFJlYWN0LkRpc3BhdGNoPHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IHsgaWQ/OiBzdHJpbmc7IHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9IH07XHJcbiAgfT4gPSB1c2VQYXJ0c0Rpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhcnQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUuYWRkZWQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBhZGRlZDogZmFsc2UgfSkpLFxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJSRU1PVkVfUEFSVFwiLCBwYXlsb2FkOiB7IGlkOiBpdGVtLmlkIH0gfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBHbG9iYWxQYXJ0cy5wYXJ0cy5sZW5ndGggPCA3XHJcbiAgICAgICAgPyAoc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgYWRkZWQ6IHRydWUgfSkpLFxyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFERF9QQVJUXCIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHsgcGFydDogeyAuLi5pdGVtLCBncmlkSW5kZXg6IG51bGwgfSB9LFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZXN1bHRzTG9hZGluZyA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucmVzdWx0Q2FyZH0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjOTk5OTk5XCIgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjc3MuYWRkQnV0dG9ufSAke2Nzcy5sb2FkaW5nQWRkfWB9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmluZm9CYXJ9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxvYWRpbmdCYXJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubG9hZGluZ0Jhcn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5sb2FkaW5nQmFyfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake2Nzcy5yZXN1bHRDYXJkfSAke3N0YXRlLm1vcmVJbmZvID8gY3NzLmV4dGVuZGVkIDogbnVsbH0gJHtcclxuICAgICAgICBzdGF0ZS5pbWFnZUxvYWRlZCA/IGNzcy5sb2FkZWQgOiBjc3MubG9hZGluZ1xyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgc3RhdGUubW9yZUluZm9cclxuICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgOiBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBtb3JlSW5mbzogdHJ1ZSB9KSlcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VCYWNrZ3JvdW5kXHJcbiAgICAgICAgZXh0ZW5kZWQ9e3N0YXRlLm1vcmVJbmZvfVxyXG4gICAgICAgIGhhbmRsZVJldHJhY3Q9e2hhbmRsZVJldHJhY3R9XHJcbiAgICAgICAgdHlwZT17aXRlbS50eXBlfVxyXG4gICAgICAgIHNvdXJjZT17aXRlbS5zb3VyY2V9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2RldGVybWluZUltYWdlQmFja2dyb3VuZFNvdXJjZSgpfVxyXG4gICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICBvbkxvYWQ9eygpID0+IHNldFN0YXRlKHsgLi4uc3RhdGUsIGltYWdlTG9hZGVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSW1hZ2VCYWNrZ3JvdW5kPlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLmFkZEJ1dHRvbn0gJHtzdGF0ZS5hZGRlZCA/IGNzcy5yZW1vdmUgOiBudWxsfWB9XHJcbiAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCksIGhhbmRsZVBhcnQoKSl9XHJcbiAgICAgID5cclxuICAgICAgICB7c3RhdGUuYWRkZWQgPyBcIlJlbW92ZSBmcm9tIFBhcnRzIC1cIiA6IFwiQWRkIHRvIFBhcnRzICtcIn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtzZXRDYXJkRGV0YWlscygpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgUmVzdWx0Q2FyZCB9IGZyb20gXCIuL1Jlc3VsdENhcmRcIjtcclxuIiwiZXhwb3J0IHsgUmVzdWx0Q2FyZCB9IGZyb20gXCIuL1Jlc3VsdENhcmRcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZGVyXCI6IFwiU2VrbmRMb2FkZXJfbG9hZGVyX18yUDE1Q1wiLFxuXHRcInNla25kSGFuZFwiOiBcIlNla25kTG9hZGVyX3Nla25kSGFuZF9fMTFBbTNcIixcblx0XCJUaWtUb2tcIjogXCJTZWtuZExvYWRlcl9UaWtUb2tfXzNMdXlXXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9TZWtuZExvYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNla25kTG9hZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5sb2FkZXJ9PlxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIyOC45OCA0OS4xNFwiPlxyXG4gICAgICAgIDx0aXRsZT5BbHRMb2dvQmxhY2s8L3RpdGxlPlxyXG4gICAgICAgIDxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj5cclxuICAgICAgICAgIDxnIGlkPVwiVHJhY2luZ1wiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjY2LDQ5LjE0YTMxLjUyLDMxLjUyLDAsMCwxLTQuNzQtLjM2LDIzLjYxLDIzLjYxLDAsMCwxLTcuNjgtMi41MkExMCwxMCwwLDAsMSwuMTQsNDFjLS43Mi0yLjEsMS41LTQuNzQsMy42Ni0zLjY2YTQuNDEsNC40MSwwLDAsMSwxLjI2LDEuMzJjMi4xNiwyLjY0LDUuNTIsMy43OCw4Ljc2LDQuMzJhMjIuODMsMjIuODMsMCwwLDAsNy44Ni0uMTJjMi44Mi0uNiw1LjUyLTIsNi42LTQuOGE2LjMxLDYuMzEsMCwwLDAsLjE4LTQuMzJjLTEuMzgtNC4wOC02LjQ4LTUuNTgtMTAuOC02LjQ4QTQ1LjYsNDUuNiwwLDAsMSw5LjIsMjQuNzhjLTIuODgtMS4xNC01Ljc2LTIuODgtNy4zOC01LjY0LTItMy4zLTEuNjItOC41Mi0uNDItMTFDNS4wNi44NCwxMi4xNCwwLDE2LjI4LDBhMjUuMTksMjUuMTksMCwwLDEsOC45NCwxLjU2YzMuMywxLjI2LDUuODgsMy40Miw2LjY2LDUuN2EyLjg1LDIuODUsMCwwLDEtLjU0LDIuODIsMi41LDIuNSwwLDAsMS0zLjEyLjcyLDksOSwwLDAsMS0uODQtLjcyLDEzLjYzLDEzLjYzLDAsMCwwLTUuMjItMy40MiwxNi4yMSwxNi4yMSwwLDAsMC01Ljg4LS43OGMtNC42OCwwLTEwLDEuOC0xMCw3LjI2LDAsNSw0LjM4LDYuNTQsMTQuNCw5QzMzLjUsMjUuMjYsMzUuMTgsMzIuMzQsMzQsMzguMzQsMzIuMTgsNDcuMjgsMjEuNjIsNDkuMTQsMTcuNjYsNDkuMTRaXCIgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk03OS44Miw0NS4xOGEzLDMsMCwwLDEtMywzSDQ4LjE0YTMsMywwLDAsMS0zLTNWNGEzLDMsMCwwLDEsMy0zSDc2LjIyYTMsMywwLDAsMSwzLDMsMywzLDAsMCwxLTMsM0g1MS4xNFYyMS40OGgyMi4yYTMsMywwLDAsMSwzLDMsMywzLDAsMCwxLTMsM0g1MS4xNHYxNC43SDc2LjgyQTMsMywwLDAsMSw3OS44Miw0NS4xOFpcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTk2LjYyLDRWNDUuMThhMywzLDAsMSwxLTYsMFY0YTMsMywwLDEsMSw2LDBabTI3LjYsNDMuODZhMy4yNywzLjI3LDAsMCwxLTEuMzIuMywzLDMsMCwwLDEtMi43LTEuNjgsNTAuOTQsNTAuOTQsMCwwLDAtNy45Mi0xMS44MmMtMy41NC0zLjc4LTYuMjQtNi42LTEwLjMyLTguOTQtLjEyLS4wNi0uMTgtLjEyLS4zLS4xOHMtLjI0LS4xOC0uMzYtLjNhMi45MywyLjkzLDAsMCwxLS43OC0xLjYyLDMuMTEsMy4xMSwwLDAsMSwuMzYtMiwzLjE2LDMuMTYsMCwwLDEsLjcyLS44NGwxOC42LTE4LjlhMywzLDAsMCwxLDQuMjYuMDYsMywzLDAsMCwxLS4wNiw0LjJsLTE2LjIsMTYuNWM3LjU2LDUuMzQsMTMuNSwxMy4yLDE3LjQsMjEuMjRBMywzLDAsMCwxLDEyNC4yMiw0Ny44OFpcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE3NS4xNiw0Ny45NGEzLjMzLDMuMzMsMCwwLDEtMy40OC0uNzhsLTI5LTM0Ljg2VjQ1LjE4YTMsMywwLDEsMS02LDBWNEEzLDMsMCwwLDEsMTQyLDIuMWwyOSwzNC44VjRhMywzLDAsMCwxLDMtMywzLDMsMCwwLDEsMywzVjQ1LjI0QTIuNiwyLjYsMCwwLDEsMTc1LjE2LDQ3Ljk0WlwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjA0LjUsNDguMThIMTkwLjg4YTMsMywwLDAsMS0zLjA2LTNWNGEyLjgxLDIuODEsMCwwLDEsLjktMi4xLDMuMiwzLjIsMCwwLDEsMi4xNi0uOWgxMy43NEEyNC44OCwyNC44OCwwLDAsMSwyMTQsMi44OGEyNS43OSwyNS43OSwwLDAsMSw3LjgsNS4xLDIzLjY5LDIzLjY5LDAsMCwxLDUuMjIsNy41NkEyMy4xLDIzLjEsMCwwLDEsMjI5LDI0LjcyYTIxLjM2LDIxLjM2LDAsMCwxLTIsOSwyMy4zMywyMy4zMywwLDAsMS01LjI4LDcuNSwyNC43MSwyNC43MSwwLDAsMS03LjgsNS4xQTI1LjM0LDI1LjM0LDAsMCwxLDIwNC41LDQ4LjE4Wm0tMTAuNjItNi4wNmgxMC43NGExOS44MSwxOS44MSwwLDAsMCw3LTEuNDQsMTguMzEsMTguMzEsMCwwLDAsNS44OC0zLjc4LDE5Ljc1LDE5Ljc1LDAsMCwwLDQtNS42NEExNS40OSwxNS40OSwwLDAsMCwyMjMsMjQuNzJhMTYuNTgsMTYuNTgsMCwwLDAtMS40NC02Ljc4QTE4LjYxLDE4LjYxLDAsMCwwLDIwNC42Miw3SDE5My44OFpcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc2VrbmRIYW5kfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFNla25kTG9hZGVyIH0gZnJvbSBcIi4vU2VrbmRMb2FkZXJcIjtcclxuIiwiZXhwb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XHJcbmV4cG9ydCB7IE5hdiB9IGZyb20gXCIuL05hdlwiO1xyXG5leHBvcnQgeyBTY2hlZHVsZUdyaWQgfSBmcm9tIFwiLi9TY2hlZHVsZUdyaWRcIjtcclxuZXhwb3J0IHsgRGF0ZVBhcnRzIH0gZnJvbSBcIi4vRGF0ZVBhcnRzXCI7XHJcbmV4cG9ydCB7IFJlc3VsdENhcmQgfSBmcm9tIFwiLi9TZWFyY2hSZXN1bHRzXCI7XHJcbmV4cG9ydCB7IFNla25kTG9hZGVyIH0gZnJvbSBcIi4vU2VrbmRMb2FkZXJcIjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdiB9IGZyb20gXCIuL05hdlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dDogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPE5hdj48L05hdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0LCBSZXN1bHRDYXJkLCBTZWtuZExvYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB1c2VBUElDYWxscyBmcm9tIFwiLi4vLi4vc3dyL3VzZUFQSUNhbGxzXCI7XHJcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTcXVhcmVzU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUdyaWRTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZS9TZWFyY2hHcmlkQ29udGV4dFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuLi8uLi9zdHlsZXMvUXVlcmllZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBSZXN1bHRzID0ge1xyXG4gIGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbiAgZXJyb3JzOiB7XHJcbiAgICB5ZWxwUGxhY2VzRXJyb3I/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICB5ZWxwRXZlbnRzRXJyb3I/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICB0aWNrZXRtYXN0ZXJFcnJvcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICB9O1xyXG59O1xyXG5cclxudHlwZSBBUElSZXNwb25zZSA9IHsgW2tleTogc3RyaW5nXTogYW55IH1bXTtcclxuXHJcbnR5cGUgU2VhcmNoUGFyYW1zID0geyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1ZXJpZWQoKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8eyByZXN1bHRzVHlwZTogc3RyaW5nIH0+KHtcclxuICAgIHJlc3VsdHNUeXBlOiBcInBsYWNlXCIsXHJcbiAgfSk7XHJcbiAgY29uc3Qgcm91dGVyOiBOZXh0Um91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHVybFN0YXJ0OiBzdHJpbmcgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIlxyXG4gICAgICA6IFwiaHR0cHM6Ly9zZWtuZGFwcC5jb21cIjtcclxuXHJcbiAgY29uc3Qgc2V0U2VhcmNoUGFyYW1ldGVyczogKCkgPT4geyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSByb3V0ZXI7XHJcbiAgICBpZiAoIXF1ZXJ5LnF1ZXJpZWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHF1ZXJ5LnNlYXJjaFR5cGUpIHJldHVybiBxdWVyeTtcclxuXHJcbiAgICBjb25zdCBjaGVja1VSTElzU3RyaW5nOiBzdHJpbmcgPSBxdWVyeS5xdWVyaWVkLnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCBwYXJhbVZhbHVlQXJyYXk6IHN0cmluZ1tdID0gY2hlY2tVUkxJc1N0cmluZy5zcGxpdChcIitcIik7XHJcblxyXG4gICAgY29uc3QgU2VhcmNoUGFyYW1zOiBTZWFyY2hQYXJhbXMgPSB7fTtcclxuXHJcbiAgICBwYXJhbVZhbHVlQXJyYXkuZm9yRWFjaCgocGFyYW0pID0+IHtcclxuICAgICAgY29uc3QgaW5kZXhPZkVxdWFsOiBudW1iZXIgPSBwYXJhbS5zZWFyY2goXCI9XCIpO1xyXG4gICAgICBpZiAoaW5kZXhPZkVxdWFsID09PSAtMSkgcmV0dXJuO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBwYXJhbUtleTogc3RyaW5nID0gcGFyYW0uc3Vic3RyaW5nKDAsIGluZGV4T2ZFcXVhbCk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1WYWx1ZTogc3RyaW5nID0gcGFyYW0uc3Vic3RyaW5nKGluZGV4T2ZFcXVhbCArIDEpO1xyXG4gICAgICAgIFNlYXJjaFBhcmFtc1twYXJhbUtleV0gPSBwYXJhbVZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBTZWFyY2hQYXJhbXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBpdGVtcywgbG9hZGluZywgZXJyb3JzIH0gPSB1c2VBUElDYWxscyhcclxuICAgIHNldFNlYXJjaFBhcmFtZXRlcnMoKSxcclxuICAgIHVybFN0YXJ0XHJcbiAgKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyByZXN1bHQgdHlwZVwiKTtcclxuICAgIGlmIChzZXRTZWFyY2hQYXJhbWV0ZXJzKCkpIHtcclxuICAgICAgc2V0U2VhcmNoUGFyYW1ldGVycygpLnNlYXJjaFR5cGUgPT09IFwiRVZFTlRTXCJcclxuICAgICAgICA/IHNldFN0YXRlKHsgcmVzdWx0c1R5cGU6IFwiZXZlbnRcIiB9KVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuICB9LCBbc2V0U2VhcmNoUGFyYW1ldGVycygpXSk7XHJcblxyXG4gIGNvbnN0IHNldFJlc3VsdHNCdXR0b25zOiAoKSA9PiBKU1guRWxlbWVudCB8IG51bGwgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gc2V0U2VhcmNoUGFyYW1ldGVycygpICYmXHJcbiAgICAgIHNldFNlYXJjaFBhcmFtZXRlcnMoKS5zZWFyY2hUeXBlID09PSBcIkFMTFwiID8gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3MudHlwZUJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHsgcmVzdWx0c1R5cGU6IFwicGxhY2VcIiB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQbGFjZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy50eXBlQnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdGUoeyByZXN1bHRzVHlwZTogXCJldmVudFwiIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEV2ZW50c1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKSA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZGluZ0Rpc3BsYXlJdGVtczogKCkgPT4gSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8UmVzdWx0Q2FyZCBrZXk9e1wibG9hZGluZzFcIn0gcmVzdWx0c0xvYWRpbmc9e3RydWV9PjwvUmVzdWx0Q2FyZD5cclxuICAgICAgICAgIDxSZXN1bHRDYXJkIGtleT17XCJsb2FkaW5nMlwifSByZXN1bHRzTG9hZGluZz17dHJ1ZX0+PC9SZXN1bHRDYXJkPlxyXG4gICAgICAgICAgPFJlc3VsdENhcmQga2V5PXtcImxvYWRpbmczXCJ9IHJlc3VsdHNMb2FkaW5nPXt0cnVlfT48L1Jlc3VsdENhcmQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBpdGVtc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHNldFNlYXJjaFBhcmFtZXRlcnMoKS5zZWFyY2hUeXBlICE9PSBcIkFMTFwiKSByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICByZXR1cm4gc3RhdGUucmVzdWx0c1R5cGUgPT09IFwicGxhY2VcIlxyXG4gICAgICAgICAgICAgICAgPyBpdGVtLnR5cGUgPT09IFwicGxhY2VcIlxyXG4gICAgICAgICAgICAgICAgOiBpdGVtLnR5cGUgPT09IFwiZXZlbnRcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gPFJlc3VsdENhcmQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfT48L1Jlc3VsdENhcmQ+KVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjc3MucXVlcmllZFBhZ2V9PlxyXG4gICAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9e2Nzcy5xdWVyeURpc3BsYXl9Pjwvc2VjdGlvbj4gKi99XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MuaGVhZGVyfT5cclxuICAgICAgICAgIHtzZXRSZXN1bHRzQnV0dG9ucygpfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy5zb3J0fT5Tb3J0PC9idXR0b24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJlc3VsdHNTbGlkZXJ9Pntsb2FkaW5nRGlzcGxheUl0ZW1zKCl9PC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBQYXJ0c1N0YXRlID0ge1xyXG4gIHBhcnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbn07XHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgZGV0YWlscz86IHN0cmluZztcclxuICAgIHBhcnRzPzogUGFydHNTdGF0ZVtcInBhcnRzXCJdO1xyXG4gIH07XHJcbn07XHJcbmNvbnN0IHBhcnRzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxQYXJ0c1N0YXRlLCBBY3Rpb24+ID0gKFxyXG4gIHN0YXRlOiBQYXJ0c1N0YXRlLFxyXG4gIGFjdGlvblxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHN0YXRlLnBhcnRzLmxlbmd0aCA8IDdcclxuICAgICAgICA/IHsgcGFydHM6IFsuLi5zdGF0ZS5wYXJ0cywgYWN0aW9uLnBheWxvYWQucGFydF0gfVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIGNhc2UgXCJSRU1PVkVfUEFSVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5maWx0ZXIoKHBhcnQpID0+IHBhcnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJDSEFOR0VfQ1VTVE9NX0RFVEFJTFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5tYXAoKHBhcnQpID0+IHtcclxuICAgICAgICAgIGlmIChwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCkgcmV0dXJuIHBhcnQ7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGFydCwgZGV0YWlsczogYWN0aW9uLnBheWxvYWQuZGV0YWlscyB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9GUk9NX0NBQ0hFXCI6XHJcbiAgICAgIHJldHVybiB7IHBhcnRzOiBhY3Rpb24ucGF5bG9hZC5wYXJ0cyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhcnRzU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PFBhcnRzU3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcclxuICB1bmRlZmluZWRcclxuKTtcclxuXHJcbmNvbnN0IFBhcnRzRGlzcGF0Y2hDb250ZXh0OiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJ0c1Byb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkgPT4gSlNYLkVsZW1lbnQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihwYXJ0c1JlZHVjZXIsIHsgcGFydHM6IFtdIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcInBhcnRzXCIsIHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoQ29va2llLmdldChcInBhcnRzXCIpKSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFydHNTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFBhcnRzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1BhcnRzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9QYXJ0c1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhcnRzU3RhdGUgPSAoKTogUGFydHNTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dDogUGFydHNTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUGFydHNTdGF0ZUNvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFBhcnRzUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhcnRzRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUGFydHNEaXNwYXRjaENvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFBhcnRzUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIHNxdWFyZXM6IHsgcGFydDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbnVtYmVyT2ZTcXVhcmVzPzogbnVtYmVyO1xyXG4gICAgcGFydD86IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzcXVhcmVzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogU3RhdGUsXHJcbiAgYWN0aW9uOiBBY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9TUVVBUkVTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLm5ldyBBcnJheShhY3Rpb24ucGF5bG9hZC5udW1iZXJPZlNxdWFyZXMpXS5tYXAoKCkgPT4gKHtcclxuICAgICAgICAgIHBhcnQ6IG51bGwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkFERF9QQVJUX1RPX1NRVUFSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IHN0YXRlLnNxdWFyZXMubWFwKChzcXVhcmUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpICE9PSBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICA/IHNxdWFyZVxyXG4gICAgICAgICAgICA6IHsgcGFydDogYWN0aW9uLnBheWxvYWQucGFydCB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlJFTU9WRV9QQVJUX0ZST01fU1FVQVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogc3RhdGUuc3F1YXJlcy5tYXAoKHNxdWFyZSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgID8geyBwYXJ0OiBhY3Rpb24ucGF5bG9hZC5wYXJ0IH1cclxuICAgICAgICAgICAgOiBzcXVhcmU7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU3F1YXJlc0NvbnRleHQ6IFJlYWN0LkNvbnRleHQ8U3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgU3F1YXJlc0Rpc3BhdGNoOiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTcXVhcmVzUHJvdmlkZXI6ICh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHNxdWFyZXNSZWR1Y2VyLCB7XHJcbiAgICBzcXVhcmVzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZS5zZXQoXCJzcXVhcmVzXCIsIHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKENvb2tpZS5nZXQoXCJzcXVhcmVzXCIpKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTcXVhcmVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8U3F1YXJlc0Rpc3BhdGNoLlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1NxdWFyZXNEaXNwYXRjaC5Qcm92aWRlcj5cclxuICAgIDwvU3F1YXJlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTcXVhcmVzU3RhdGUgPSAoKTogU3RhdGUgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBTcXVhcmVzIFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTcXVhcmVzRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoU3F1YXJlc0Rpc3BhdGNoKTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIGdyaWRUZW1wbGF0ZTogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb24gPSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IHtcclxuICAgIGdyaWRUZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBncmlkUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJBRERfR1JJRF9URU1QTEFURVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhvdXJTdHJpbmdzOiBhY3Rpb24ucGF5bG9hZC5ob3VyU3RyaW5ncyxcclxuICAgICAgICBncmlkVGVtcGxhdGU6IGFjdGlvbi5wYXlsb2FkLmdyaWRUZW1wbGF0ZSxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgR3JpZFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxTdGF0ZT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBHcmlkRGlzcGF0Y2hDb250ZXh0OiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUHJvdmlkZXI6ICh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKGdyaWRSZWR1Y2VyLCB7XHJcbiAgICBncmlkVGVtcGxhdGU6IFwiXCIsXHJcbiAgICBob3VyU3RyaW5nczogW10sXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWUuc2V0KFwiZ3JpZFwiLCBzdGF0ZSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8R3JpZERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9HcmlkRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9HcmlkU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR3JpZFN0YXRlID0gKCk6IFN0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChHcmlkU3RhdGVDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gR3JpZFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHcmlkRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoR3JpZERpc3BhdGNoQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIEdyaWRQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInF1ZXJpZWRQYWdlXCI6IFwiUXVlcmllZF9xdWVyaWVkUGFnZV9fMlJjanRcIixcblx0XCJxdWVyeURpc3BsYXlcIjogXCJRdWVyaWVkX3F1ZXJ5RGlzcGxheV9fMmppdFdcIixcblx0XCJoZWFkZXJcIjogXCJRdWVyaWVkX2hlYWRlcl9fMndtTTJcIixcblx0XCJ0eXBlQnV0dG9uXCI6IFwiUXVlcmllZF90eXBlQnV0dG9uX18xOUJKOFwiLFxuXHRcInNvcnRcIjogXCJRdWVyaWVkX3NvcnRfX0VpcFRmXCIsXG5cdFwicmVzdWx0c1NsaWRlclwiOiBcIlF1ZXJpZWRfcmVzdWx0c1NsaWRlcl9fSUhReHBcIlxufTtcbiIsImltcG9ydCB1c2VTV1IsIHsgcmVzcG9uc2VJbnRlcmZhY2UgfSBmcm9tIFwic3dyXCI7XHJcblxyXG50eXBlIEFQSVJlc3BvbnNlID0geyBba2V5OiBzdHJpbmddOiBhbnkgfVtdO1xyXG5cclxudHlwZSBSZXN1bHRzID0ge1xyXG4gIGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W10gfCBudWxsO1xyXG4gIGVycm9yczoge1xyXG4gICAgeWVscFBsYWNlc0Vycm9yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgeWVscEV2ZW50c0Vycm9yPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgdGlja2V0bWFzdGVyRXJyb3I/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUFQSUNhbGxzKFxyXG4gIHNldFNlYXJjaFBhcmFtZXRlcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsLFxyXG4gIHVybFN0YXJ0OiBzdHJpbmdcclxuKToge1xyXG4gIGl0ZW1zOiBBUElSZXNwb25zZTtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIGVycm9yczoge1xyXG4gICAgeWVscFBsYWNlc0Vycm9yOiBzdHJpbmc7XHJcbiAgICB5ZWxwRXZlbnRzRXJyb3I6IHN0cmluZztcclxuICAgIHRpY2tldG1hc3RlckVycm9yOiBzdHJpbmc7XHJcbiAgfTtcclxufSB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogeWVscFBsYWNlcyxcclxuICAgIGVycm9yOiB5ZWxwUGxhY2VzRXJyb3IsXHJcbiAgICBpc1ZhbGlkYXRpbmc6IHllbHBQbGFjZXNMb2FkaW5nLFxyXG4gIH06IHJlc3BvbnNlSW50ZXJmYWNlPEFQSVJlc3BvbnNlLCBzdHJpbmc+ID0gdXNlU1dSKFxyXG4gICAgc2V0U2VhcmNoUGFyYW1ldGVycyAmJiBzZXRTZWFyY2hQYXJhbWV0ZXJzLnNlYXJjaFR5cGUgIT09IFwiRVZFTlRTXCJcclxuICAgICAgPyBgJHt1cmxTdGFydH0vYXBpL3llbHBCdXNpbmVzc2VzQVBJYFxyXG4gICAgICA6IG51bGwsXHJcblxyXG4gICAgYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGxvY2F0aW9uLCByYWRpdXMsIHBsYWNlVHlwZSB9ID0gc2V0U2VhcmNoUGFyYW1ldGVycztcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh1cmwgPyBcImZldGNoaW5nIHllbHAgcGxhY2VzXCIgOiBcImNhbmNlbGxlZCBwbGFjZXMgZmV0Y2hcIik7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICByYWRpdXM6IHBhcnNlSW50KHJhZGl1cyksXHJcbiAgICAgICAgICAgIHRlcm06IHBsYWNlVHlwZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGJ1c2luZXNzZXMsXHJcbiAgICAgICAgfTogeyBidXNpbmVzc2VzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W10gfSA9IHJlc3BvbnNlSlNPTjtcclxuICAgICAgICBidXNpbmVzc2VzLmZvckVhY2goXHJcbiAgICAgICAgICAoYnVzaW5lc3MpID0+IChcclxuICAgICAgICAgICAgKGJ1c2luZXNzW1widHlwZVwiXSA9IFwicGxhY2VcIiksXHJcbiAgICAgICAgICAgIChidXNpbmVzc1tcInNvdXJjZVwiXSA9IFwieWVscFwiKSxcclxuICAgICAgICAgICAgKGJ1c2luZXNzW1wiaW5QYXJ0c1wiXSA9IGZhbHNlKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBidXNpbmVzc2VzO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiB5ZWxwRXZlbnRzLFxyXG4gICAgZXJyb3I6IHllbHBFdmVudHNFcnJvcixcclxuICAgIGlzVmFsaWRhdGluZzogeWVscEV2ZW50c0xvYWRpbmcsXHJcbiAgfTogcmVzcG9uc2VJbnRlcmZhY2U8QVBJUmVzcG9uc2UsIHN0cmluZz4gPSB1c2VTV1IoXHJcbiAgICBzZXRTZWFyY2hQYXJhbWV0ZXJzICYmIHNldFNlYXJjaFBhcmFtZXRlcnMuc2VhcmNoVHlwZSAhPT0gXCJQTEFDRVNcIlxyXG4gICAgICA/IGAke3VybFN0YXJ0fS9hcGkveWVscEV2ZW50c0FQSWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgIHVuaXhTdGFydERhdGUsXHJcbiAgICAgICAgdW5peEVuZERhdGUsXHJcbiAgICAgIH0gPSBzZXRTZWFyY2hQYXJhbWV0ZXJzO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVybCA/IFwiZmV0Y2hpbmcgeWVscCBldmVudHNcIiA6IFwiY2FuY2VsbGVkIGV2ZW50cyBmZXRjaFwiKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgIHJhZGl1czogcGFyc2VJbnQocmFkaXVzKSxcclxuICAgICAgICAgICAgc3RhcnRfZGF0ZTogcGFyc2VJbnQodW5peFN0YXJ0RGF0ZSksXHJcbiAgICAgICAgICAgIGVuZF9kYXRlOiBwYXJzZUludCh1bml4RW5kRGF0ZSksXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGV2ZW50cyB9OiB7IGV2ZW50czogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdIH0gPSByZXNwb25zZUpTT047XHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goXHJcbiAgICAgICAgICAoZXZlbnQpID0+IChcclxuICAgICAgICAgICAgKGV2ZW50W1widHlwZVwiXSA9IFwiZXZlbnRcIiksXHJcbiAgICAgICAgICAgIChldmVudFtcInNvdXJjZVwiXSA9IFwieWVscFwiKSxcclxuICAgICAgICAgICAgKGV2ZW50W1wiaW5QYXJ0c1wiXSA9IGZhbHNlKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVyci5tZXNzYWdlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogdGlja2V0bWFzdGVyLFxyXG4gICAgZXJyb3I6IHRpY2tldG1hc3RlckVycm9yLFxyXG4gICAgaXNWYWxpZGF0aW5nOiB0aWNrZXRtYXN0ZXJMb2FkaW5nLFxyXG4gIH06IHJlc3BvbnNlSW50ZXJmYWNlPEFQSVJlc3BvbnNlLCBzdHJpbmc+ID0gdXNlU1dSKFxyXG4gICAgc2V0U2VhcmNoUGFyYW1ldGVycyAmJiBzZXRTZWFyY2hQYXJhbWV0ZXJzLnNlYXJjaFR5cGUgIT09IFwiUExBQ0VTXCJcclxuICAgICAgPyBgJHt1cmxTdGFydH0vYXBpL3RpY2tldG1hc3RlckFQSWBcclxuICAgICAgOiBudWxsLFxyXG4gICAgYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgIHN0YXJ0Rm9ybWF0dGVkLFxyXG4gICAgICAgIGVuZEZvcm1hdHRlZCxcclxuICAgICAgfSA9IHNldFNlYXJjaFBhcmFtZXRlcnM7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICB1cmwgPyBcImZldGNoaW5nIHllbHAgZXZlbnRzXCIgOiBcImNhbmNlbGxlZCB0aWNrZXRtYXN0ZXIgZmV0Y2hcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgcmFkaXVzOiBNYXRoLmZsb29yKHBhcnNlSW50KHJhZGl1cykgKiAwLjAwMSkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgc3RhcnREYXRlVGltZTogc3RhcnRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgIGVuZERhdGVUaW1lOiBlbmRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIF9lbWJlZGRlZDogeyBldmVudHMgfSxcclxuICAgICAgICB9OiB7IF9lbWJlZGRlZDogeyBldmVudHM6IHsgW2tleTogc3RyaW5nXTogYW55IH1bXSB9IH0gPSByZXNwb25zZUpTT047XHJcblxyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKFxyXG4gICAgICAgICAgKGV2ZW50KSA9PiAoXHJcbiAgICAgICAgICAgIChldmVudFtcInNvdXJjZVwiXSA9IFwidGlja2V0bWFzdGVyXCIpLFxyXG4gICAgICAgICAgICAoZXZlbnRbXCJ0eXBlXCJdID0gXCJldmVudFwiKSxcclxuICAgICAgICAgICAgKGV2ZW50W1wiaW5QYXJ0c1wiXSA9IGZhbHNlKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcmV2YWxpZGF0ZU9uRm9jdXM6IGZhbHNlLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNoZWNrWWVscFBsYWNlc0FycmF5OiBSZXN1bHRzW1wiaXRlbXNcIl0gfCBbXSA9IEFycmF5LmlzQXJyYXkoeWVscFBsYWNlcylcclxuICAgID8geWVscFBsYWNlc1xyXG4gICAgOiBbXTtcclxuICBjb25zdCBjaGVja1llbHBFdmVudHNBcnJheTogUmVzdWx0c1tcIml0ZW1zXCJdIHwgW10gPSBBcnJheS5pc0FycmF5KHllbHBFdmVudHMpXHJcbiAgICA/IHllbHBFdmVudHNcclxuICAgIDogW107XHJcbiAgY29uc3QgY2hlY2tUaWNrZXRNYXN0ZXJBcnJheTogUmVzdWx0c1tcIml0ZW1zXCJdIHwgW10gPSBBcnJheS5pc0FycmF5KFxyXG4gICAgdGlja2V0bWFzdGVyXHJcbiAgKVxyXG4gICAgPyB0aWNrZXRtYXN0ZXJcclxuICAgIDogW107XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtczogW1xyXG4gICAgICAuLi5jaGVja1RpY2tldE1hc3RlckFycmF5LFxyXG4gICAgICAuLi5jaGVja1llbHBFdmVudHNBcnJheSxcclxuICAgICAgLi4uY2hlY2tZZWxwUGxhY2VzQXJyYXksXHJcbiAgICBdLFxyXG4gICAgbG9hZGluZzogdGlja2V0bWFzdGVyTG9hZGluZyB8fCB5ZWxwRXZlbnRzTG9hZGluZyB8fCB5ZWxwUGxhY2VzTG9hZGluZyxcclxuICAgIGVycm9yczogeyB5ZWxwRXZlbnRzRXJyb3IsIHllbHBQbGFjZXNFcnJvciwgdGlja2V0bWFzdGVyRXJyb3IgfSxcclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXRlcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=