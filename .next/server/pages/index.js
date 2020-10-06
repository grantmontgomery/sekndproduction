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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.ts");
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Home() {
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  });
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
  children,
  initialPartsState
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](partsReducer, initialPartsState ? initialPartsState : {
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
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(PartsDispatchContext.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
  children,
  initialSquaresState
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](squaresReducer, initialSquaresState ? initialSquaresState : {
    squares: []
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("squares", state);
    console.log(JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("squares")));
  }, [state]);
  return __jsx(SquaresContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(SquaresDispatch.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
  children,
  initialGridState
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](gridReducer, initialGridState ? initialGridState : {
    gridTemplate: "",
    hourStrings: []
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("grid", state);
    console.log(JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("grid")));
  }, [state]);
  return __jsx(GridStateContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(GridDispatchContext.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWNjb3VudERpc3BsYXkvQWNjb3VudERpc3BsYXkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50RGlzcGxheS9BY2NvdW50RGlzcGxheS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50RGlzcGxheS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L0RhdGVQYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L0RyYWdQaWVjZS9EcmFnUGllY2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvRHJhZ1BpZWNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvRGV0YWlsc1NlY3Rpb24vRGV0YWlsc1NlY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydC9Ob3JtYWxQaWVjZS9EZXRhaWxzU2VjdGlvbi9EZXRhaWxzU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydC9Ob3JtYWxQaWVjZS9EZXRhaWxzU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L05vcm1hbFBpZWNlL05vcm1hbFBpZWNlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvTm9ybWFsUGllY2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvUGFydEltYWdlL1BhcnRJbWFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L05vcm1hbFBpZWNlL1BhcnRJbWFnZS9QYXJ0SW1hZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvUGFydEltYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydHMvRGF0ZVBhcnRzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnRzL0RhdGVQYXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVIYW1idXJnZXIvTW9iaWxlSGFtYnVyZ2VyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlSGFtYnVyZ2VyL01vYmlsZUhhbWJ1cmdlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVIYW1idXJnZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVNZW51L01vYmlsZU1lbnUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVNZW51L01vYmlsZU1lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlTWVudS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9OYXYubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYvTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkxpbmtzL05hdkxpbmtzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2TGlua3MvTmF2TGlua3MudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2TGlua3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0c0ljb24vUGFydHNJY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFydHNJY29uL1BhcnRzSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0c0ljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZUdyaWQvU2NoZWR1bGVHcmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVHcmlkL1NjaGVkdWxlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZUdyaWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvTG9naWMvU2NoZWR1bGVHcmlkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL0V2ZW50c0lucHV0L0V2ZW50c0lucHV0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL0V2ZW50c0lucHV0L0V2ZW50c0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9FdmVudHNJbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9QbGFjZXNJbnB1dC9QbGFjZXNJbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9QbGFjZXNJbnB1dC9QbGFjZXNJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvUGxhY2VzSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvU2VhcmNoU2VsZWN0b3IvU2VhcmNoU2VsZWN0b3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvU2VhcmNoU2VsZWN0b3IvU2VhcmNoU2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1NlYXJjaFNlbGVjdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZW5JbnB1dC9XaGVuSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvV2hlbklucHV0L1doZW5JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvV2hlbklucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZXJlSW5wdXQvV2hlcmVJbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9XaGVyZUlucHV0L1doZXJlSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZXJlSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvU2VhcmNoQm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1NlYXJjaEJveC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hJY29uL1NlYXJjaEljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hJY29uL1NlYXJjaEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoSWNvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50RGVzY3JpcHRpb24vRXZlbnREZXNjcmlwdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50RGVzY3JpcHRpb24vRXZlbnREZXNjcmlwdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvRXZlbnRzSW5mby9FdmVudERlc2NyaXB0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRQcmljZUdlbnJlL0V2ZW50UHJpY2VHZW5yZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50UHJpY2VHZW5yZS9FdmVudFByaWNlR2VucmUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRQcmljZUdlbnJlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRUaW1lc1ZlbnVlL0V2ZW50VGltZXNWZW51ZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50VGltZXNWZW51ZS9FdmVudFRpbWVzVmVudWUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRUaW1lc1ZlbnVlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvSW1hZ2VCYWNrZ3JvdW5kL0ltYWdlQmFja2dyb3VuZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9JbWFnZUJhY2tncm91bmQvSW1hZ2VCYWNrZ3JvdW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9JbWFnZUJhY2tncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGFydExpbmsvUGFydExpbmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGFydExpbmsvUGFydExpbmsudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BhcnRMaW5rL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vTG9jYXRpb24vTG9jYXRpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9Mb2NhdGlvbi9Mb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9Mb2NhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9QbGFjZXNJbmZvL1Bob25lL1Bob25lLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUGhvbmUvUGhvbmUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUGhvbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9QcmljZUFuZFR5cGUvUHJpY2VBbmRUeXBlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUHJpY2VBbmRUeXBlL1ByaWNlQW5kVHlwZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9QcmljZUFuZFR5cGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9SZXZpZXdzL1Jldmlld3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9SZXZpZXdzL1Jldmlld3MudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUmVzdWx0Q2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9SZXN1bHRDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWtuZExvYWRlci9TZWtuZExvYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nla25kTG9hZGVyL1Nla25kTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nla25kTG9hZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zdGF0ZS9TZWFyY2hHcmlkQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRlcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIiXSwibmFtZXMiOlsiQWNjb3VudERpc3BsYXkiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJsb2dnZWRJbiIsImNzcyIsImFjY291bnREaXNwbGF5IiwiRGF0ZVBhcnQiLCJsb2NhdGlvbiIsInBhcnQiLCJncmlkSW5kZXgiLCJpZCIsIkRyYWdQaWVjZSIsInJlbmRlciIsIkRldGFpbHNTZWN0aW9uIiwicHJpY2UiLCJkYXRlIiwiZGV0YWlscyIsImRpc3BhdGNoIiwidXNlUGFydHNEaXNwYXRjaCIsImRlZmluZVNlY3Rpb25zIiwiY3VzdG9tRGV0YWlscyIsInRhcmdldCIsInR5cGUiLCJwYXlsb2FkIiwidmFsdWUiLCJwYXJ0RGV0YWlscyIsIk5vcm1hbFBpZWNlIiwiZXh0ZW5kIiwiaW1hZ2VMb2FkZWQiLCJkZXRlcm1pbmVJbWFnZUJhY2tncm91bmRTb3VyY2UiLCJzb3VyY2UiLCJpbWFnZV91cmwiLCJpbWFnZXMiLCJ1cmwiLCJkZXRlcm1pbmVQYXJ0RGV0YWlscyIsImRldGVybWluZVZlbnVlIiwiYnVzaW5lc2Vzc19pZCIsImJ1c2luZXNzX2lkIiwiX2VtYmVkZGVkIiwidmVudWVzIiwibmFtZSIsImRldGVybWluZVByaWNlIiwiY29zdCIsInByaWNlUmFuZ2VzIiwibm9ybWFsUGllY2UiLCJleHRlbmRlZCIsImNvbG9yIiwicGFydFRpdGxlIiwiZGVsZXRlIiwiUGFydEltYWdlIiwiY2hpbGRyZW4iLCJwYXJ0SW1hZ2UiLCJiYWNrZ3JvdW5kIiwiRGF0ZVBhcnRzIiwicGFydHMiLCJ1c2VQYXJ0c1N0YXRlIiwiaW5wdXQiLCJoYW5kbGVQYXJ0U3VibWl0IiwiYWxlcnQiLCJNYXRoIiwicmFuZG9tIiwiZGF0ZVBhcnRzIiwicGFydHNXcmFwcGVyIiwicGFydElucHV0IiwiY29sb3JJbnB1dCIsImFkZCIsInBhcnRzTGlzdCIsInBhcnRzSW5uZXIiLCJtYXAiLCJtb2RhbCIsIk1vYmlsZUhhbWJ1cmdlciIsImRpc3BsYXlMaW5rcyIsImxpbmtzIiwic3RvcFdpbmRvd1Njcm9sbCIsImhhbmRsZUNsaWNrIiwiZGlzcGxheSIsImhhbWJ1cmdlciIsImV4aXQiLCJ0b3BMaW5lIiwibWlkZGxlTGluZSIsImJvdHRvbUxpbmUiLCJNb2JpbGVNZW51IiwibW9iaWxlTWVudSIsIm1vZGFsU2VjdGlvbiIsIk5hdiIsImRpc3BsYXlQYXJ0cyIsInNlYXJjaEJveCIsImRpc3BsYXlTZWFyY2hCb3giLCJhcHBseVRyYW5zaXRpb25zIiwibW9kYWxXaW5kb3ciLCJlbnRlciIsImVudGVyQWN0aXZlIiwiZXhpdEFjdGl2ZSIsImFwcGx5TW9kYWxUcmFuc2l0aW9ucyIsImVsZW1lbnQiLCJzdG9wIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3dZIiwibmF2IiwibG9nb0xpbmsiLCJOYXZMaW5rcyIsIm9yaWVudGF0aW9uIiwibGlua3NXcmFwcGVyIiwiUGFydHNJY29uIiwicGFydHNJY29uIiwic3QxIiwic3QwIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdDIiLCJTY2hlZHVsZUdyaWQiLCJncmlkV3JhcHBlciIsImlubmVyR3JpZCIsImNvbnN0cnVjdG9yIiwidW5peFN0YXJ0RGF0ZSIsInVuaXhFbmREYXRlIiwic3RhcnRIb3VyIiwiaG91ckRpZmZlcmVuY2UiLCJ0ZW1wbGF0ZUFyZWFzIiwiY29sdW1uQW1vdW50IiwiZW5kSG91ciIsImhvdXJTdHJpbmdzIiwibnVtYmVyb2ZTcXVhcmVzIiwic2V0U3F1YXJlcyIsInRpbWVEaWZmZXJlbmNlIiwiaG91cnMiLCJmbG9vciIsIm51bUNvbHVtbnMiLCJudW1iZXJPZlNxdWFyZXMiLCJzZXRIb3VycyIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwiZ2V0SG91cnMiLCJzZXRHcmlkVGVtcGxhdGUiLCJzcXVhcmUiLCJyb3dTdHJpbmciLCJyZXBlYXQiLCJzZXRIb3Vyc0hlYWRlciIsImhvdXJDb3VudGVyIiwic3RhcnRIb3VyQ291bnRlciIsImhvdXJOdW1iZXJzIiwicHVzaCIsImZvckVhY2giLCJob3VyIiwic2V0R3JpZCIsIkV2ZW50c0lucHV0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudHNDYXRlZ29yeSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiZmllbGQiLCJldmVudHMiLCJQbGFjZXNJbnB1dCIsInBsYWNlVHlwZSIsInBsYWNlcyIsIlNlYXJjaFNlbGVjdG9yIiwic2VhcmNoVHlwZSIsImhpZ2hsaWdodCIsInNldEhpZ2hsaWdodCIsImFsbCIsInNlYXJjaFNlbGVjdG9yIiwic2VsZWN0b3IiLCJoaWdobGlnaHRlZCIsImFsbFNWRyIsIldoZW5JbnB1dCIsImhhbmRsZVF1ZXJ5RGF0ZSIsImhhbmRsZURhdGVDaGFuZ2UiLCJ0b2RheSIsIndoZW4iLCJmcm9tIiwidG8iLCJXaGVyZUlucHV0IiwicmFkaXVzIiwid2hlcmUiLCJTZWFyY2hCb3giLCJwcm9wcyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJzdGFydEZvcm1hdHRlZCIsImVuZEZvcm1hdHRlZCIsInRpY2tldE1hc3RlckNhdGVnb3JpZXMiLCJ5ZWxwQ2F0ZWdvcmllcyIsInNxdWFyZXNEaXNwYXRjaCIsInVzZVNxdWFyZXNEaXNwYXRjaCIsImdyaWREaXNwYXRjaCIsInVzZUdyaWREaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsIm5ld0RhdGVzSW5wdXQiLCJncmlkVGVtcGxhdGUiLCJjaGVja0ZpZWxkc0Rpc3BsYXlMaW5rIiwicGF0aG5hbWUiLCJxdWVyeSIsImtleSIsInJvdW5kIiwiZ2V0VGltZSIsInRpbWVPZmZTZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsImxvY2FsU3RhcnRUaW1lSVNPIiwidG9JU09TdHJpbmciLCJsb2NhbFN0YXJ0VGltZUlTT0Zvcm1hdHRlZCIsInN1YnN0cmluZyIsImxvY2FsRW5kVGltZUlTTyIsImxvY2FsRW5kVGltZUlTT0Zvcm1hdHRlZCIsIlNlYXJjaEljb24iLCJzZWFyY2hJY29uIiwiRXZlbnREZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwidW53YW50ZWRDaGFyYWN0ZXJzIiwiZGVzY3JpcHRpb25XcmFwcGVyIiwic2VhcmNoIiwicmVwbGFjZSIsIkV2ZW50UHJpY2VHZW5yZSIsInZlbnVlIiwiZ2VucmUiLCJwYXJzZVByaWNlIiwibWluIiwidHJ1ZVByaWNlIiwicHJpY2VTdHJpbmciLCJ0b1N0cmluZyIsImRlY2ltYWxJbmRleCIsImluZGV4T2YiLCJjZW50cyIsImxlbmd0aCIsInNldEdlbnJlIiwiY2hhcmFjdGVyU3BsaXQiLCJzcGxpdHRlZCIsInNwbGl0IiwidXBwZXJDYXNlIiwid29yZCIsInRvVXBwZXJDYXNlIiwiam9pbiIsInNlZ21lbnRTdHJpbmciLCJnZW5yZVN0cmluZyIsInNlZ21lbnQiLCJldmVudFByaWNlIiwiRXZlbnRUaW1lc1ZlbnVlIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImRpc3BsYXlWZW51ZSIsInBhcnNlWWVscFRpbWVzIiwieWVscFN0YXJ0T2JqZWN0IiwieWVscEVuZE9iamVjdCIsInllbHBTdGFydFRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJzdGFydEFtUG0iLCJzdGFydFdpdGhvdXRTZWNvbmRzIiwieWVscFN0YXJ0Rm9ybWF0dGVkVGltZSIsInllbHBTdGFydERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVscEVuZFRpbWUiLCJlbmRBbVBtIiwiZW5kV2l0aG91dFNlY29uZHMiLCJ5ZWxwRW5kRm9ybWF0dGVkVGltZSIsInllbHBFbmREYXRlIiwicGFyc2VUaWNrZXRNYXN0ZXJUaW1lIiwidGlja2V0bWFzdGVyU3RhcnRPYmplY3QiLCJ0aWNrZXRtYXN0ZXJTdGFydFRpbWUiLCJ0aWNrZXRtYXN0ZXJTdGFydEZvcm1hdHRlZFRpbWUiLCJ0aWNrZXRtYXN0ZXJEYXRlIiwiZGV0ZXJtaW5lU291cmNlIiwidGltZXMiLCJJbWFnZUJhY2tncm91bmQiLCJoYW5kbGVSZXRyYWN0IiwiZGV0ZXJtaW5lSW1hZ2VSYXRpbyIsImJ5V2lkdGgiLCJpbWdCYWNrZ3JvdW5kIiwiUGFydExpbmsiLCJsaW5rIiwiTG9jYXRpb24iLCJzdHJlZXQiLCJjaXR5IiwiYWRkcmVzcyIsIlBob25lIiwicGhvbmUiLCJQcmljZUFuZFR5cGUiLCJpbnNlcnRDaXR5Iiwic2luZ3VsYXJUeXBlIiwiaW5kZXhMYXN0TGV0dGVyIiwibWFyZ2luTGVmdCIsInBsYWNlUHJpY2UiLCJsaWdodCIsIlJldmlld3MiLCJyZXZpZXdDb3VudCIsInJhdGluZyIsInNldFN0YXJzIiwiRW1wdHlTdGFyIiwiZmlsbCIsIkZ1bGxTdGFyIiwiSGFsZlN0YXIiLCJyYXRpbmdJbnQiLCJyZW1haW5kZXIiLCJzdGFyVHlwZXMiLCJuZXdTdGFycyIsIml0ZW0iLCJpbmRleCIsInJldmlld1dyYXBwZXIiLCJzdGFyV3JhcHBlciIsInN0YXIiLCJSZXN1bHRDYXJkIiwicmVzdWx0c0xvYWRpbmciLCJhZGRlZCIsIm1vcmVJbmZvIiwiR2xvYmFsUGFydHMiLCJpIiwibW9yZURldGFpbHMiLCJkZXRhaWxzV3JhcHBlciIsImRpc3BsYXlfYWRkcmVzcyIsImV2ZW50X3NpdGVfdXJsIiwic2V0Q2FyZERldGFpbHMiLCJpbmZvQmFyIiwidGl0bGUiLCJyZXZpZXdfY291bnQiLCJjYXRlZ29yaWVzIiwic3RhcnNXcmFwcGVyIiwidGlja2V0bWFzdGVyQ2xhc3NpZmljYXRpb24iLCJjbGFzc2lmaWNhdGlvbnMiLCJ0aW1lX3N0YXJ0IiwiZGF0ZXMiLCJzdGFydCIsImxvY2FsRGF0ZSIsImxvY2FsVGltZSIsInRpbWVfZW5kIiwiY2F0ZWdvcnkiLCJoYW5kbGVQYXJ0IiwicmVzdWx0Q2FyZCIsImFkZEJ1dHRvbiIsImxvYWRpbmdBZGQiLCJsb2FkaW5nQmFyIiwibG9hZGVkIiwibG9hZGluZyIsInJlbW92ZSIsInN0b3BQcm9wYWdhdGlvbiIsIlNla25kTG9hZGVyIiwibG9hZGVyIiwic2VrbmRIYW5kIiwiTGF5b3V0IiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInN1Y2Nlc3MiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicmVzb2x2ZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSG9tZSIsInBhcnRzUmVkdWNlciIsImFjdGlvbiIsImZpbHRlciIsIlBhcnRzU3RhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiUGFydHNEaXNwYXRjaENvbnRleHQiLCJQYXJ0c1Byb3ZpZGVyIiwiaW5pdGlhbFBhcnRzU3RhdGUiLCJDb29raWUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJjb250ZXh0IiwiRXJyb3IiLCJzcXVhcmVzUmVkdWNlciIsInNxdWFyZXMiLCJTcXVhcmVzQ29udGV4dCIsIlNxdWFyZXNEaXNwYXRjaCIsIlNxdWFyZXNQcm92aWRlciIsImluaXRpYWxTcXVhcmVzU3RhdGUiLCJ1c2VTcXVhcmVzU3RhdGUiLCJncmlkUmVkdWNlciIsIkdyaWRTdGF0ZUNvbnRleHQiLCJHcmlkRGlzcGF0Y2hDb250ZXh0IiwiR3JpZFByb3ZpZGVyIiwiaW5pdGlhbEdyaWRTdGF0ZSIsInVzZUdyaWRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNEOztBQUNELFNBQU9ELE9BQVA7QUFDRCxDQVBNLEM7Ozs7Ozs7Ozs7O0FDM0VQLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFjY291bnREaXNwbGF5XCI6IFwiQWNjb3VudERpc3BsYXlfYWNjb3VudERpc3BsYXlfXzFNQ251XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9BY2NvdW50RGlzcGxheS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnREaXNwbGF5OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPHsgbG9nZ2VkSW46IGJvb2xlYW4gfT4oe1xyXG4gICAgbG9nZ2VkSW46IGZhbHNlLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmFjY291bnREaXNwbGF5fT5cclxuICAgICAgPHNwYW4+IHtzdGF0ZS5sb2dnZWRJbiA/IFwiR3JhbnRcIiA6IFwiU2lnbiBJblwifTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IEFjY291bnREaXNwbGF5IH0gZnJvbSBcIi4vQWNjb3VudERpc3BsYXlcIjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5vcm1hbFBpZWNlIH0gZnJvbSBcIi4vTm9ybWFsUGllY2VcIjtcclxuaW1wb3J0IHsgRHJhZ1BpZWNlIH0gZnJvbSBcIi4vRHJhZ1BpZWNlXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgcGFydDoge307XHJcbiAgaW5kZXg6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRlUGFydDogUmVhY3QuRkM8e1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgcGFydDogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICBncmlkSW5kZXg6IG51bWJlciB8IG51bGw7XHJcbn0+ID0gKHsgbG9jYXRpb24sIHBhcnQsIGdyaWRJbmRleCB9KSA9PiB7XHJcbiAgcmV0dXJuIGxvY2F0aW9uID09PSBcImxpc3RcIiA/IChcclxuICAgIDxOb3JtYWxQaWVjZSBrZXk9e3BhcnQuaWR9IHBhcnQ9e3BhcnR9PjwvTm9ybWFsUGllY2U+XHJcbiAgKSA6IChcclxuICAgIDxEcmFnUGllY2U+PC9EcmFnUGllY2U+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ1BpZWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCB7IERyYWdQaWVjZSB9IGZyb20gXCIuL0RyYWdQaWVjZVwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjdXN0b21EZXRhaWxzXCI6IFwiRGV0YWlsc1NlY3Rpb25fY3VzdG9tRGV0YWlsc19fMUxMNFpcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVBhcnRzRGlzcGF0Y2gsXHJcbiAgdXNlUGFydHNTdGF0ZSxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0RldGFpbHNTZWN0aW9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsc1NlY3Rpb246IFJlYWN0LkZDPHtcclxuICBpZD86IHN0cmluZztcclxuICBsb2NhdGlvbj86IHN0cmluZztcclxuICBwcmljZT86IHN0cmluZyB8IG51bWJlcjtcclxuICBkYXRlPzogc3RyaW5nO1xyXG4gIGRldGFpbHM/OiBzdHJpbmc7XHJcbn0+ID0gKHsgbG9jYXRpb24sIHByaWNlLCBkYXRlLCBpZCwgZGV0YWlscyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VQYXJ0c0Rpc3BhdGNoKCk7XHJcbiAgY29uc3QgZGVmaW5lU2VjdGlvbnM6ICgpID0+IEpTWC5FbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFsb2NhdGlvbiAmJiAhcHJpY2UgJiYgIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmN1c3RvbURldGFpbHN9XHJcbiAgICAgICAgICB2YWx1ZT17ZGV0YWlsc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZXRhaWxzID09PSBcIlwiID8gXCJFbnRlciBpbiBzb21lIGRldGFpbHNcIiA6IGRldGFpbHN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIkNIQU5HRV9DVVNUT01fREVUQUlMXCIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDogeyBpZCwgZGV0YWlsczogdGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9e2Nzcy5wYXJ0RGV0YWlsc30+PC9wPjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBkZWZpbmVTZWN0aW9ucygpO1xyXG59O1xyXG4iLCJleHBvcnQgeyBEZXRhaWxzU2VjdGlvbiB9IGZyb20gXCIuL0RldGFpbHNTZWN0aW9uXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5vcm1hbFBpZWNlXCI6IFwiTm9ybWFsUGllY2Vfbm9ybWFsUGllY2VfXzN6TjJnXCIsXG5cdFwiZXh0ZW5kZWRcIjogXCJOb3JtYWxQaWVjZV9leHRlbmRlZF9fMi1RaEJcIixcblx0XCJwYXJ0VGl0bGVcIjogXCJOb3JtYWxQaWVjZV9wYXJ0VGl0bGVfXzJvQ3ZxXCIsXG5cdFwiZGVsZXRlXCI6IFwiTm9ybWFsUGllY2VfZGVsZXRlX18zakFSVFwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vTm9ybWFsUGllY2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgRGV0YWlsc1NlY3Rpb24gfSBmcm9tIFwiLi9EZXRhaWxzU2VjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VQYXJ0c0Rpc3BhdGNoIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXRlL0RhdGVQYXJ0c0NvbnRleHRcIjtcclxuaW1wb3J0IHsgUGFydEltYWdlIH0gZnJvbSBcIi4vUGFydEltYWdlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9ybWFsUGllY2U6IFJlYWN0LkZDPHsgcGFydDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9PiA9ICh7XHJcbiAgcGFydCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8e1xyXG4gICAgZXh0ZW5kOiBib29sZWFuO1xyXG4gICAgaW1hZ2VMb2FkZWQ6IGJvb2xlYW47XHJcbiAgfT4oe1xyXG4gICAgZXh0ZW5kOiBmYWxzZSxcclxuICAgIGltYWdlTG9hZGVkOiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZVBhcnRzRGlzcGF0Y2goKTtcclxuICBjb25zdCBkZXRlcm1pbmVJbWFnZUJhY2tncm91bmRTb3VyY2U6ICgpID0+IHN0cmluZyA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAocGFydC50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJwbGFjZVwiOlxyXG4gICAgICAgIHJldHVybiBwYXJ0LnNvdXJjZSA9PT0gXCJ5ZWxwXCIgPyBwYXJ0LmltYWdlX3VybCA6IG51bGw7XHJcbiAgICAgIGNhc2UgXCJldmVudFwiOlxyXG4gICAgICAgIHJldHVybiBwYXJ0LnNvdXJjZSA9PT0gXCJ5ZWxwXCIgPyBwYXJ0LmltYWdlX3VybCA6IHBhcnQuaW1hZ2VzWzBdLnVybDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZXRlcm1pbmVQYXJ0RGV0YWlsczogKCkgPT4gSlNYLkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHBhcnQudHlwZSkge1xyXG4gICAgICBjYXNlIFwiY3VzdG9tXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxEZXRhaWxzU2VjdGlvbiBpZD17cGFydC5pZH0gZGV0YWlscz17cGFydC5kZXRhaWxzfT48L0RldGFpbHNTZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJldmVudFwiOlxyXG4gICAgICAgIGNvbnN0IGRldGVybWluZVZlbnVlOiAoKSA9PiBzdHJpbmcgfCBudWxsID0gKCkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChwYXJ0LnNvdXJjZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwieWVscFwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiAhcGFydC5idXNpbmVzZXNzX2lkIHx8IHBhcnQuYnVzaW5lc3NfaWQgPT09IG51bGxcclxuICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgOiBwYXJ0LmJ1c2luZXNzX2lkO1xyXG4gICAgICAgICAgICBjYXNlIFwidGlja2V0bWFzdGVyXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnQuX2VtYmVkZGVkLnZlbnVlc1swXS5uYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGRldGVybWluZVByaWNlOiAoKSA9PlxyXG4gICAgICAgICAgfCB7IFtrZXk6IHN0cmluZ106IGFueSB9XHJcbiAgICAgICAgICB8IG51bGxcclxuICAgICAgICAgIHwgc3RyaW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChwYXJ0LnNvdXJjZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwieWVscFwiOlxyXG4gICAgICAgICAgICAgIGlmICghcGFydC5jb3N0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFydC5jb3N0O1xyXG4gICAgICAgICAgICBjYXNlIFwidGlja2V0bWFzdGVyXCI6XHJcbiAgICAgICAgICAgICAgaWYgKCFwYXJ0LnByaWNlUmFuZ2VzKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFydC5wcmljZVJhbmdlc1swXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPERldGFpbHNTZWN0aW9uXHJcbiAgICAgICAgICAgIGxvY2F0aW9uPXtkZXRlcm1pbmVWZW51ZSgpfVxyXG4gICAgICAgICAgICAvLyBwcmljZT17ZGV0ZXJtaW5lUHJpY2UoKX1cclxuICAgICAgICAgID48L0RldGFpbHNTZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJwbGFjZVwiOlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake2Nzcy5ub3JtYWxQaWVjZX0gJHtzdGF0ZS5leHRlbmQgPyBjc3MuZXh0ZW5kZWQgOiBudWxsfWB9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGV4dGVuZDogdHJ1ZSB9KSl9XHJcbiAgICA+XHJcbiAgICAgIDxQYXJ0SW1hZ2VcclxuICAgICAgICB0eXBlPXtwYXJ0LnR5cGV9XHJcbiAgICAgICAgY29sb3I9e3BhcnQudHlwZSA9PT0gXCJjdXN0b21cIiA/IHBhcnQuY29sb3IgOiBudWxsfVxyXG4gICAgICAgIGltYWdlTG9hZGVkPXtzdGF0ZS5pbWFnZUxvYWRlZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17ZGV0ZXJtaW5lSW1hZ2VCYWNrZ3JvdW5kU291cmNlKCl9XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgb25Mb2FkPXsoKSA9PiBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBpbWFnZUxvYWRlZDogdHJ1ZSB9KSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9QYXJ0SW1hZ2U+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucGFydFRpdGxlfT5cclxuICAgICAgICA8c3Bhbj57cGFydC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5kZWxldGV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUkVNT1ZFX1BBUlRcIiwgcGF5bG9hZDogeyBpZDogcGFydC5pZCB9IH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3N0YXRlLmV4dGVuZCA/IGRldGVybWluZVBhcnREZXRhaWxzKCkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFydEltYWdlXCI6IFwiUGFydEltYWdlX3BhcnRJbWFnZV9fMlN3QXhcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1BhcnRJbWFnZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhcnRJbWFnZTogUmVhY3QuRkM8e1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBjb2xvcj86IHN0cmluZztcclxuICBpbWFnZUxvYWRlZDogYm9vbGVhbjtcclxufT4gPSAoeyB0eXBlLCBjb2xvciwgaW1hZ2VMb2FkZWQsIGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Nzcy5wYXJ0SW1hZ2V9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgIGNvbG9yIHx8IGltYWdlTG9hZGVkXHJcbiAgICAgICAgICAgID8gY29sb3JcclxuICAgICAgICAgICAgOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2VlMDk3OSwgI2ZmNmEwMClcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3R5cGUgIT09IFwiY3VzdG9tXCIgfHwgIWltYWdlTG9hZGVkID8gY2hpbGRyZW4gOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgUGFydEltYWdlIH0gZnJvbSBcIi4vUGFydEltYWdlXCI7XHJcbiIsImV4cG9ydCB7IE5vcm1hbFBpZWNlIH0gZnJvbSBcIi4vTm9ybWFsUGllY2VcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGF0ZVBhcnRzXCI6IFwiRGF0ZVBhcnRzX2RhdGVQYXJ0c19fMk4yUVhcIixcblx0XCJwYXJ0c1dyYXBwZXJcIjogXCJEYXRlUGFydHNfcGFydHNXcmFwcGVyX19Tc2NCNVwiLFxuXHRcImNvbG9ySW5wdXRcIjogXCJEYXRlUGFydHNfY29sb3JJbnB1dF9fMkF4UWRcIixcblx0XCJwYXJ0SW5wdXRcIjogXCJEYXRlUGFydHNfcGFydElucHV0X18yeDlTZFwiLFxuXHRcImFkZFwiOiBcIkRhdGVQYXJ0c19hZGRfXzFGWG9fXCIsXG5cdFwicGFydHNMaXN0XCI6IFwiRGF0ZVBhcnRzX3BhcnRzTGlzdF9fM1VSNkRcIixcblx0XCJwYXJ0c0lubmVyXCI6IFwiRGF0ZVBhcnRzX3BhcnRzSW5uZXJfXzJVT1o4XCIsXG5cdFwibW9kYWxcIjogXCJEYXRlUGFydHNfbW9kYWxfX2VNbHk1XCIsXG5cdFwic2NoZWR1bGVQYWdlXCI6IFwiRGF0ZVBhcnRzX3NjaGVkdWxlUGFnZV9fMzBfYjhcIixcblx0XCJwYXJ0cy1lbnRlclwiOiBcIkRhdGVQYXJ0c19wYXJ0cy1lbnRlcl9fMmdja3pcIixcblx0XCJwYXJ0cy1lbnRlci1hY3RpdmVcIjogXCJEYXRlUGFydHNfcGFydHMtZW50ZXItYWN0aXZlX18yY241blwiLFxuXHRcInBhcnRzLWV4aXRcIjogXCJEYXRlUGFydHNfcGFydHMtZXhpdF9fM0o5LVJcIixcblx0XCJwYXJ0cy1leGl0LWFjdGl2ZVwiOiBcIkRhdGVQYXJ0c19wYXJ0cy1leGl0LWFjdGl2ZV9fMWtidzRcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJ0c1N0YXRlLCB1c2VQYXJ0c0Rpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3N0YXRlL0RhdGVQYXJ0c0NvbnRleHRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9EYXRlUGFydHMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgRGF0ZVBhcnQgfSBmcm9tIFwiLi4vRGF0ZVBhcnQvRGF0ZVBhcnRcIjtcclxuZXhwb3J0IGNvbnN0IERhdGVQYXJ0czogUmVhY3QuRkM8eyBsb2NhdGlvbjogc3RyaW5nIH0+ID0gKHsgbG9jYXRpb24gfSkgPT4ge1xyXG4gIGNvbnN0IHsgcGFydHMgfSA9IHVzZVBhcnRzU3RhdGUoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPHsgaW5wdXQ6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9Pih7XHJcbiAgICBpbnB1dDogXCJcIixcclxuICAgIGNvbG9yOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2VlMDk3OSwgI2ZmNmEwMClcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VQYXJ0c0Rpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhcnRTdWJtaXQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUuaW5wdXQgPT09IFwiXCIpIHJldHVybiBhbGVydChcIkZpbGwgb3V0IGlucHV0XCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFwiQUREX1BBUlRcIixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBwYXJ0OiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHN0YXRlLmlucHV0LFxyXG4gICAgICAgICAgICBjb2xvcjogc3RhdGUuY29sb3IsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY3VzdG9tXCIsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgICAgIGlkOiBgJHtuYW1lfSR7TWF0aC5yYW5kb20oKX1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgaW5wdXQ6IFwiXCIgfSkpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y3NzLmRhdGVQYXJ0c30gJHtjc3NbbG9jYXRpb25dfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBhcnRzV3JhcHBlcn0+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+RGF0ZSBQYXJ0czwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFub3RoZXIgSWRlYT9cIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGUuaW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT5cclxuICAgICAgICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBpbnB1dDogdGFyZ2V0LnZhbHVlIH0pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLnBhcnRJbnB1dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbG9ySW5wdXR9PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzc5OWYwYywgI2ZmZTAwMClcIixcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzE1NTc5OSwgIzE1OTk1NylcIixcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2VlMDk3OSwgI2ZmNmEwMClcIixcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMzMzOTksICNmZjAwY2MpXCIsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZjIwMjcsICMyYzUzNjQpXCIsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5hZGR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IHN0YXRlLmNvbG9yIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVBhcnRTdWJtaXR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wYXJ0c0xpc3R9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wYXJ0c0lubmVyfT5cclxuICAgICAgICAgICAge3BhcnRzLm1hcCgocGFydCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGFydFxyXG4gICAgICAgICAgICAgICAga2V5PXtwYXJ0LmlkfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb249e1wibGlzdFwifVxyXG4gICAgICAgICAgICAgICAgcGFydD17cGFydH1cclxuICAgICAgICAgICAgICAgIGdyaWRJbmRleD17cGFydC5ncmlkSW5kZXh9XHJcbiAgICAgICAgICAgICAgPjwvRGF0ZVBhcnQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1vZGFsfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IERhdGVQYXJ0cyB9IGZyb20gXCIuL0RhdGVQYXJ0c1wiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoYW1idXJnZXJcIjogXCJNb2JpbGVIYW1idXJnZXJfaGFtYnVyZ2VyX18zckVXaFwiLFxuXHRcInRvcExpbmVcIjogXCJNb2JpbGVIYW1idXJnZXJfdG9wTGluZV9fMVFBbHNcIixcblx0XCJib3R0b21MaW5lXCI6IFwiTW9iaWxlSGFtYnVyZ2VyX2JvdHRvbUxpbmVfXzNWc3htXCIsXG5cdFwiZXhpdFwiOiBcIk1vYmlsZUhhbWJ1cmdlcl9leGl0X18xeUZDa1wiLFxuXHRcIm1pZGRsZUxpbmVcIjogXCJNb2JpbGVIYW1idXJnZXJfbWlkZGxlTGluZV9fMy1vYmVcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL01vYmlsZUhhbWJ1cmdlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgTmF2U3RhdGUgfSBmcm9tIFwiLi4vTmF2XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGRpc3BsYXlMaW5rczogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248TmF2U3RhdGU+PjtcclxuICBsaW5rczogTmF2U3RhdGU7XHJcbiAgc3RvcFdpbmRvd1Njcm9sbDogKGFyZzogYm9vbGVhbikgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2JpbGVIYW1idXJnZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgZGlzcGxheUxpbmtzLFxyXG4gIGxpbmtzLFxyXG4gIHN0b3BXaW5kb3dTY3JvbGwsXHJcbn0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDbGljazogKCkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgIGlmIChsaW5rcy5kaXNwbGF5KSB7XHJcbiAgICAgIHJldHVybiBkaXNwbGF5TGlua3MoeyBkaXNwbGF5OiBmYWxzZSB9KSwgc3RvcFdpbmRvd1Njcm9sbChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGlzcGxheUxpbmtzKHsgZGlzcGxheTogdHJ1ZSB9KSwgc3RvcFdpbmRvd1Njcm9sbCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLmhhbWJ1cmdlcn0gJHtsaW5rcy5kaXNwbGF5ID8gY3NzLmV4aXQgOiBudWxsfWB9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnRvcExpbmV9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1pZGRsZUxpbmV9PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJvdHRvbUxpbmV9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgTW9iaWxlSGFtYnVyZ2VyIH0gZnJvbSBcIi4vTW9iaWxlSGFtYnVyZ2VyXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vYmlsZU1lbnVcIjogXCJNb2JpbGVNZW51X21vYmlsZU1lbnVfX0p6VFhJXCIsXG5cdFwibW9kYWxTZWN0aW9uXCI6IFwiTW9iaWxlTWVudV9tb2RhbFNlY3Rpb25fXzNMSzAwXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGlua3MgfSBmcm9tIFwiLi4vTmF2TGlua3NcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9Nb2JpbGVNZW51Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgTW9iaWxlTWVudTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubW9iaWxlTWVudX0+XHJcbiAgICAgIDxOYXZMaW5rcyBvcmllbnRhdGlvbj1cInBvcnRyYWl0XCI+PC9OYXZMaW5rcz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tb2RhbFNlY3Rpb259PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gXCIuL01vYmlsZU1lbnVcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwiTmF2X25hdl9fMzYyNEFcIixcblx0XCJsb2dvTGlua1wiOiBcIk5hdl9sb2dvTGlua19fMlFiMFdcIixcblx0XCJwYXJ0cy1lbnRlclwiOiBcIk5hdl9wYXJ0cy1lbnRlcl9fMkR2cENcIixcblx0XCJwYXJ0cy1lbnRlci1hY3RpdmVcIjogXCJOYXZfcGFydHMtZW50ZXItYWN0aXZlX18xZHB6Q1wiLFxuXHRcInBhcnRzLWV4aXRcIjogXCJOYXZfcGFydHMtZXhpdF9fMU15NThcIixcblx0XCJwYXJ0cy1leGl0LWFjdGl2ZVwiOiBcIk5hdl9wYXJ0cy1leGl0LWFjdGl2ZV9fMkZ1TTBcIixcblx0XCJsaW5rcy1lbnRlclwiOiBcIk5hdl9saW5rcy1lbnRlcl9fTkUtNzhcIixcblx0XCJsaW5rcy1lbnRlci1hY3RpdmVcIjogXCJOYXZfbGlua3MtZW50ZXItYWN0aXZlX18xckhaN1wiLFxuXHRcImxpbmtzLWV4aXRcIjogXCJOYXZfbGlua3MtZXhpdF9fMVU2dUVcIixcblx0XCJsaW5rcy1leGl0LWFjdGl2ZVwiOiBcIk5hdl9saW5rcy1leGl0LWFjdGl2ZV9fMkIyaGlcIixcblx0XCJzZWFyY2gtZW50ZXJcIjogXCJOYXZfc2VhcmNoLWVudGVyX18ycVFERlwiLFxuXHRcInNlYXJjaC1lbnRlci1hY3RpdmVcIjogXCJOYXZfc2VhcmNoLWVudGVyLWFjdGl2ZV9fM0hDa01cIixcblx0XCJzZWFyY2gtZXhpdFwiOiBcIk5hdl9zZWFyY2gtZXhpdF9fbWl6TXdcIixcblx0XCJzZWFyY2gtZXhpdC1hY3RpdmVcIjogXCJOYXZfc2VhcmNoLWV4aXQtYWN0aXZlX18xeXk1cVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuaW1wb3J0IHsgTW9iaWxlSGFtYnVyZ2VyIH0gZnJvbSBcIi4uL01vYmlsZUhhbWJ1cmdlclwiO1xyXG5pbXBvcnQgeyBNb2JpbGVNZW51IH0gZnJvbSBcIi4uL01vYmlsZU1lbnVcIjtcclxuaW1wb3J0IHsgRGF0ZVBhcnRzIH0gZnJvbSBcIi4uL0RhdGVQYXJ0c1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIi4uL1NlYXJjaEljb25cIjtcclxuaW1wb3J0IHsgU2VhcmNoQm94IH0gZnJvbSBcIi4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rcyB9IGZyb20gXCIuLi9OYXZMaW5rc1wiO1xyXG5pbXBvcnQgeyBQYXJ0c0ljb24gfSBmcm9tIFwiLi4vUGFydHNJY29uXCI7XHJcbmltcG9ydCB7IEFjY291bnREaXNwbGF5IH0gZnJvbSBcIi4uL0FjY291bnREaXNwbGF5XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vTmF2Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgdHlwZSBOYXZTdGF0ZSA9IHtcclxuICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BhcnRzLCBkaXNwbGF5UGFydHNdID0gUmVhY3QudXNlU3RhdGU8TmF2U3RhdGU+KHsgZGlzcGxheTogZmFsc2UgfSk7XHJcbiAgY29uc3QgW2xpbmtzLCBkaXNwbGF5TGlua3NdID0gUmVhY3QudXNlU3RhdGU8TmF2U3RhdGU+KHsgZGlzcGxheTogZmFsc2UgfSk7XHJcbiAgY29uc3QgW3NlYXJjaEJveCwgZGlzcGxheVNlYXJjaEJveF0gPSBSZWFjdC51c2VTdGF0ZTxOYXZTdGF0ZT4oe1xyXG4gICAgZGlzcGxheTogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgYXBwbHlUcmFuc2l0aW9uczogKG1vZGFsV2luZG93OiBOYXZTdGF0ZSkgPT4gSlNYLkVsZW1lbnQgfCBudWxsID0gKFxyXG4gICAgbW9kYWxXaW5kb3dcclxuICApID0+IHtcclxuICAgIGlmIChtb2RhbFdpbmRvdyA9PT0gbGlua3MpIHtcclxuICAgICAgcmV0dXJuIG1vZGFsV2luZG93LmRpc3BsYXkgPyAoXHJcbiAgICAgICAgPENTU1RyYW5zaXRpb25cclxuICAgICAgICAgIHRpbWVvdXQ9ezI1MH1cclxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcclxuICAgICAgICAgICAgZW50ZXI6IGAke2Nzc1tcImxpbmtzLWVudGVyXCJdfWAsXHJcbiAgICAgICAgICAgIGVudGVyQWN0aXZlOiBgJHtjc3NbXCJsaW5rcy1lbnRlci1hY3RpdmVcIl19YCxcclxuICAgICAgICAgICAgZXhpdDogYCR7Y3NzW1wibGlua3MtZXhpdFwiXX1gLFxyXG4gICAgICAgICAgICBleGl0QWN0aXZlOiBgJHtjc3NbXCJsaW5rcy1leGl0LWFjdGl2ZVwiXX1gLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TW9iaWxlTWVudT48L01vYmlsZU1lbnU+XHJcbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICApIDogbnVsbDtcclxuICAgIH0gZWxzZSBpZiAobW9kYWxXaW5kb3cgPT09IHBhcnRzKSB7XHJcbiAgICAgIHJldHVybiBtb2RhbFdpbmRvdy5kaXNwbGF5ID8gKFxyXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICB0aW1lb3V0PXsyNTB9XHJcbiAgICAgICAgICBjbGFzc05hbWVzPXt7XHJcbiAgICAgICAgICAgIGVudGVyOiBgJHtjc3NbXCJwYXJ0cy1lbnRlclwiXX1gLFxyXG4gICAgICAgICAgICBlbnRlckFjdGl2ZTogYCR7Y3NzW1wicGFydHMtZW50ZXItYWN0aXZlXCJdfWAsXHJcbiAgICAgICAgICAgIGV4aXQ6IGAke2Nzc1tcInBhcnRzLWV4aXRcIl19YCxcclxuICAgICAgICAgICAgZXhpdEFjdGl2ZTogYCR7Y3NzW1wicGFydHMtZXhpdC1hY3RpdmVcIl19YCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERhdGVQYXJ0cyBsb2NhdGlvbj1cIm5hdlwiPjwvRGF0ZVBhcnRzPlxyXG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgKSA6IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKG1vZGFsV2luZG93ID09PSBzZWFyY2hCb3gpIHtcclxuICAgICAgcmV0dXJuIG1vZGFsV2luZG93LmRpc3BsYXkgPyAoXHJcbiAgICAgICAgPENTU1RyYW5zaXRpb25cclxuICAgICAgICAgIHRpbWVvdXQ9ezI1MH1cclxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcclxuICAgICAgICAgICAgZW50ZXI6IGAke2Nzc1tcInNlYXJjaC1lbnRlclwiXX1gLFxyXG4gICAgICAgICAgICBlbnRlckFjdGl2ZTogYCR7Y3NzW1wic2VhcmNoLWVudGVyLWFjdGl2ZVwiXX1gLFxyXG4gICAgICAgICAgICBleGl0OiBgJHtjc3NbXCJzZWFyY2gtZXhpdFwiXX1gLFxyXG4gICAgICAgICAgICBleGl0QWN0aXZlOiBgJHtjc3NbXCJzZWFyY2gtZXhpdC1hY3RpdmVcIl19YCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlYXJjaEJveD48L1NlYXJjaEJveD5cclxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICAgICkgOiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFwcGx5TW9kYWxUcmFuc2l0aW9uczogKGVsZW1lbnQ6IHN0cmluZykgPT4gSlNYLkVsZW1lbnQgfCBudWxsID0gKFxyXG4gICAgZWxlbWVudFxyXG4gICkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQgPT09IFwicGFydHNcIikge1xyXG4gICAgICByZXR1cm4gcGFydHMuZGlzcGxheSA/IChcclxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxyXG4gICAgICAgICAgdGltZW91dD17MjUwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xyXG4gICAgICAgICAgICBlbnRlcjogYCR7Y3NzW1wic2VhcmNoLWVudGVyXCJdfWAsXHJcbiAgICAgICAgICAgIGVudGVyQWN0aXZlOiBgJHtjc3NbXCJzZWFyY2gtZW50ZXItYWN0aXZlXCJdfWAsXHJcbiAgICAgICAgICAgIGV4aXQ6IGAke2Nzc1tcInNlYXJjaC1leGl0XCJdfWAsXHJcbiAgICAgICAgICAgIGV4aXRBY3RpdmU6IGAke2Nzc1tcInNlYXJjaC1leGl0LWFjdGl2ZVwiXX1gLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VhcmNoQm94PjwvU2VhcmNoQm94PlxyXG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgKSA6IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwibGlua3NcIikge1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcInNlYXJjaEJveFwiKSB7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RvcFdpbmRvd1Njcm9sbDogKHN0b3A6IGJvb2xlYW4pID0+IHZvaWQgPSAoc3RvcCkgPT4ge1xyXG4gICAgY29uc3QgYm9keTogSFRNTEJvZHlFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgaWYgKGJvZHkpIHtcclxuICAgICAgcmV0dXJuIHN0b3BcclxuICAgICAgICA/IChib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCIpXHJcbiAgICAgICAgOiAoYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcInNjcm9sbFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y3NzLm5hdn0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjI4Ljk4IDQ5LjE0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MubG9nb0xpbmt9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0aXRsZT5BbHRMb2dvQmxhY2s8L3RpdGxlPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJUcmFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjY2LDQ5LjE0YTMxLjUyLDMxLjUyLDAsMCwxLTQuNzQtLjM2LDIzLjYxLDIzLjYxLDAsMCwxLTcuNjgtMi41MkExMCwxMCwwLDAsMSwuMTQsNDFjLS43Mi0yLjEsMS41LTQuNzQsMy42Ni0zLjY2YTQuNDEsNC40MSwwLDAsMSwxLjI2LDEuMzJjMi4xNiwyLjY0LDUuNTIsMy43OCw4Ljc2LDQuMzJhMjIuODMsMjIuODMsMCwwLDAsNy44Ni0uMTJjMi44Mi0uNiw1LjUyLTIsNi42LTQuOGE2LjMxLDYuMzEsMCwwLDAsLjE4LTQuMzJjLTEuMzgtNC4wOC02LjQ4LTUuNTgtMTAuOC02LjQ4QTQ1LjYsNDUuNiwwLDAsMSw5LjIsMjQuNzhjLTIuODgtMS4xNC01Ljc2LTIuODgtNy4zOC01LjY0LTItMy4zLTEuNjItOC41Mi0uNDItMTFDNS4wNi44NCwxMi4xNCwwLDE2LjI4LDBhMjUuMTksMjUuMTksMCwwLDEsOC45NCwxLjU2YzMuMywxLjI2LDUuODgsMy40Miw2LjY2LDUuN2EyLjg1LDIuODUsMCwwLDEtLjU0LDIuODIsMi41LDIuNSwwLDAsMS0zLjEyLjcyLDksOSwwLDAsMS0uODQtLjcyLDEzLjYzLDEzLjYzLDAsMCwwLTUuMjItMy40MiwxNi4yMSwxNi4yMSwwLDAsMC01Ljg4LS43OGMtNC42OCwwLTEwLDEuOC0xMCw3LjI2LDAsNSw0LjM4LDYuNTQsMTQuNCw5QzMzLjUsMjUuMjYsMzUuMTgsMzIuMzQsMzQsMzguMzQsMzIuMTgsNDcuMjgsMjEuNjIsNDkuMTQsMTcuNjYsNDkuMTRaXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzkuODIsNDUuMThhMywzLDAsMCwxLTMsM0g0OC4xNGEzLDMsMCwwLDEtMy0zVjRhMywzLDAsMCwxLDMtM0g3Ni4yMmEzLDMsMCwwLDEsMywzLDMsMywwLDAsMS0zLDNINTEuMTRWMjEuNDhoMjIuMmEzLDMsMCwwLDEsMywzLDMsMywwLDAsMS0zLDNINTEuMTR2MTQuN0g3Ni44MkEzLDMsMCwwLDEsNzkuODIsNDUuMThaXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTYuNjIsNFY0NS4xOGEzLDMsMCwxLDEtNiwwVjRhMywzLDAsMSwxLDYsMFptMjcuNiw0My44NmEzLjI3LDMuMjcsMCwwLDEtMS4zMi4zLDMsMywwLDAsMS0yLjctMS42OCw1MC45NCw1MC45NCwwLDAsMC03LjkyLTExLjgyYy0zLjU0LTMuNzgtNi4yNC02LjYtMTAuMzItOC45NC0uMTItLjA2LS4xOC0uMTItLjMtLjE4cy0uMjQtLjE4LS4zNi0uM2EyLjkzLDIuOTMsMCwwLDEtLjc4LTEuNjIsMy4xMSwzLjExLDAsMCwxLC4zNi0yLDMuMTYsMy4xNiwwLDAsMSwuNzItLjg0bDE4LjYtMTguOWEzLDMsMCwwLDEsNC4yNi4wNiwzLDMsMCwwLDEtLjA2LDQuMmwtMTYuMiwxNi41YzcuNTYsNS4zNCwxMy41LDEzLjIsMTcuNCwyMS4yNEEzLDMsMCwwLDEsMTI0LjIyLDQ3Ljg4WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3NS4xNiw0Ny45NGEzLjMzLDMuMzMsMCwwLDEtMy40OC0uNzhsLTI5LTM0Ljg2VjQ1LjE4YTMsMywwLDEsMS02LDBWNEEzLDMsMCwwLDEsMTQyLDIuMWwyOSwzNC44VjRhMywzLDAsMCwxLDMtMywzLDMsMCwwLDEsMywzVjQ1LjI0QTIuNiwyLjYsMCwwLDEsMTc1LjE2LDQ3Ljk0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwNC41LDQ4LjE4SDE5MC44OGEzLDMsMCwwLDEtMy4wNi0zVjRhMi44MSwyLjgxLDAsMCwxLC45LTIuMSwzLjIsMy4yLDAsMCwxLDIuMTYtLjloMTMuNzRBMjQuODgsMjQuODgsMCwwLDEsMjE0LDIuODhhMjUuNzksMjUuNzksMCwwLDEsNy44LDUuMSwyMy42OSwyMy42OSwwLDAsMSw1LjIyLDcuNTZBMjMuMSwyMy4xLDAsMCwxLDIyOSwyNC43MmEyMS4zNiwyMS4zNiwwLDAsMS0yLDksMjMuMzMsMjMuMzMsMCwwLDEtNS4yOCw3LjUsMjQuNzEsMjQuNzEsMCwwLDEtNy44LDUuMUEyNS4zNCwyNS4zNCwwLDAsMSwyMDQuNSw0OC4xOFptLTEwLjYyLTYuMDZoMTAuNzRhMTkuODEsMTkuODEsMCwwLDAsNy0xLjQ0LDE4LjMxLDE4LjMxLDAsMCwwLDUuODgtMy43OCwxOS43NSwxOS43NSwwLDAsMCw0LTUuNjRBMTUuNDksMTUuNDksMCwwLDAsMjIzLDI0LjcyYTE2LjU4LDE2LjU4LDAsMCwwLTEuNDQtNi43OEExOC42MSwxOC42MSwwLDAsMCwyMDQuNjIsN0gxOTMuODhaXCIgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TmF2TGlua3Mgb3JpZW50YXRpb249XCJsYW5kc2NhcGVcIj48L05hdkxpbmtzPlxyXG4gICAgICAgIDxNb2JpbGVIYW1idXJnZXJcclxuICAgICAgICAgIGRpc3BsYXlMaW5rcz17ZGlzcGxheUxpbmtzfVxyXG4gICAgICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICAgICAgc3RvcFdpbmRvd1Njcm9sbD17c3RvcFdpbmRvd1Njcm9sbH1cclxuICAgICAgICA+PC9Nb2JpbGVIYW1idXJnZXI+XHJcbiAgICAgICAgPEFjY291bnREaXNwbGF5PjwvQWNjb3VudERpc3BsYXk+XHJcbiAgICAgICAgPFNlYXJjaEljb25cclxuICAgICAgICAgIGRpc3BsYXlTZWFyY2hCb3g9e2Rpc3BsYXlTZWFyY2hCb3h9XHJcbiAgICAgICAgICBzZWFyY2hCb3g9e3NlYXJjaEJveH1cclxuICAgICAgICAgIHN0b3BXaW5kb3dTY3JvbGw9e3N0b3BXaW5kb3dTY3JvbGx9XHJcbiAgICAgICAgPjwvU2VhcmNoSWNvbj5cclxuICAgICAgICA8UGFydHNJY29uXHJcbiAgICAgICAgICBkaXNwbGF5UGFydHM9e2Rpc3BsYXlQYXJ0c31cclxuICAgICAgICAgIHBhcnRzPXtwYXJ0c31cclxuICAgICAgICAgIHN0b3BXaW5kb3dTY3JvbGw9e3N0b3BXaW5kb3dTY3JvbGx9XHJcbiAgICAgICAgPjwvUGFydHNJY29uPlxyXG4gICAgICAgIDxUcmFuc2l0aW9uR3JvdXA+e2FwcGx5VHJhbnNpdGlvbnMocGFydHMpfTwvVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgIDxUcmFuc2l0aW9uR3JvdXA+e2FwcGx5VHJhbnNpdGlvbnMobGlua3MpfTwvVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPFRyYW5zaXRpb25Hcm91cD57YXBwbHlUcmFuc2l0aW9ucyhzZWFyY2hCb3gpfTwvVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBOYXYgfSBmcm9tIFwiLi9OYXZcIjtcclxuZXhwb3J0IHR5cGUgeyBOYXZTdGF0ZSB9IGZyb20gXCIuL05hdlwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaW5rc1dyYXBwZXJcIjogXCJOYXZMaW5rc19saW5rc1dyYXBwZXJfXzN5VWV0XCIsXG5cdFwibGFuZHNjYXBlXCI6IFwiTmF2TGlua3NfbGFuZHNjYXBlX18zNmF5eVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9OYXZMaW5rcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkxpbmtzOiBSZWFjdC5GQzx7IG9yaWVudGF0aW9uOiBzdHJpbmcgfT4gPSAoe1xyXG4gIG9yaWVudGF0aW9uLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e2Ake2Nzcy5saW5rc1dyYXBwZXJ9ICR7Y3NzW2Ake29yaWVudGF0aW9ufWBdfWB9PlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zY2hlZHVsZVwiPlNjaGVkdWxlPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgTmF2TGlua3MgfSBmcm9tIFwiLi9OYXZMaW5rc1wiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYXJ0c0ljb25cIjogXCJQYXJ0c0ljb25fcGFydHNJY29uX19IX2lVVFwiLFxuXHRcInN0MFwiOiBcIlBhcnRzSWNvbl9zdDBfXzUxQV9CXCIsXG5cdFwic3QxXCI6IFwiUGFydHNJY29uX3N0MV9fM19HZFRcIixcblx0XCJzdDJcIjogXCJQYXJ0c0ljb25fc3QyX19LcWM3clwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUGFydHNJY29uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IE5hdlN0YXRlIH0gZnJvbSBcIi4uL05hdlwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBkaXNwbGF5UGFydHM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPE5hdlN0YXRlPj47XHJcbiAgcGFydHM6IE5hdlN0YXRlO1xyXG4gIHN0b3BXaW5kb3dTY3JvbGw6IChhcmc6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGFydHNJY29uOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGRpc3BsYXlQYXJ0cyxcclxuICBwYXJ0cyxcclxuICBzdG9wV2luZG93U2Nyb2xsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgICBpZiAocGFydHMuZGlzcGxheSkge1xyXG4gICAgICByZXR1cm4gZGlzcGxheVBhcnRzKHsgZGlzcGxheTogZmFsc2UgfSksIHN0b3BXaW5kb3dTY3JvbGwoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRpc3BsYXlQYXJ0cyh7IGRpc3BsYXk6IHRydWUgfSksIHN0b3BXaW5kb3dTY3JvbGwodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICBpZD1cIkxheWVyXzFcIlxyXG4gICAgICB4PVwiMHB4XCJcclxuICAgICAgeT1cIjBweFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkwIDI5MFwiXHJcbiAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDI5MCAyOTBcIlxyXG4gICAgICBjbGFzc05hbWU9e2Nzcy5wYXJ0c0ljb259XHJcbiAgICA+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3BhcnRzLmRpc3BsYXkgPyBjc3Muc3QxIDogY3NzLnN0MH1cclxuICAgICAgICAgIHN0eWxlPXt7IHN0cm9rZTogXCJibGFja1wiLCBzdHJva2VXaWR0aDogXCIwLjV2aFwiIH19XHJcbiAgICAgICAgICBkPVwiTTI4OSwxNDVjMCw3OS41LTY0LjUsMTQ0LTE0NCwxNDRjLTM5LjgsMC03Mi0zMi4yLTcyLTcyczMyLjItNzIsNzItNzJzNzItMzIuMiw3Mi03MlMxODQuOCwxLDE0NSwxXHJcbiAgICBDMjI0LjUsMSwyODksNjUuNSwyODksMTQ1elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Zz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGFydHMuZGlzcGxheSA/IGNzcy5zdDIgOiBjc3Muc3QxfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBzdHJva2VXaWR0aDogXCIwLjV2aFwiIH19XHJcbiAgICAgICAgICAgIGQ9XCJNMTE2LDI4NC41QzUxLjMsMjcxLjEsMi41LDIxMy42LDIuNSwxNDVDMi41LDY2LjQsNjYuNCwyLjUsMTQ1LDIuNWMzOC45LDAsNzAuNSwzMS42LDcwLjUsNzAuNVxyXG4gICAgICAgIHMtMzEuNiw3MC41LTcwLjUsNzAuNWMtNDAuNSwwLTczLjUsMzMtNzMuNSw3My41QzcxLjUsMjQ3LjIsODkuOCwyNzMuMywxMTYsMjg0LjV6XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTE0NSw0YzM4LDAsNjksMzEsNjksNjlzLTMxLDY5LTY5LDY5Yy00MS40LDAtNzUsMzMuNi03NSw3NWMwLDI2LjUsMTMuOCw0OS44LDM0LjYsNjMuMmMtMjIuMi02LjYtNDIuNS0xOC42LTU5LjMtMzUuNFxyXG4gICAgICAgIEMxOC43LDIxOC4xLDQsMTgyLjcsNCwxNDVzMTQuNy03My4xLDQxLjMtOTkuN1MxMDcuMyw0LDE0NSw0IE0xNDUsMUM2NS41LDEsMSw2NS41LDEsMTQ1YzAsNzkuNSw2NC41LDE0NCwxNDQsMTQ0XHJcbiAgICAgICAgYy0zOS44LDAtNzItMzIuMi03Mi03MnMzMi4yLTcyLDcyLTcyczcyLTMyLjIsNzItNzJTMTg0LjgsMSwxNDUsMUwxNDUsMXpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGNsYXNzTmFtZT17cGFydHMuZGlzcGxheSA/IGNzcy5zdDEgOiBudWxsfVxyXG4gICAgICAgICAgZD1cIk0xODAuMyw5My40di00LjdoLTYuN3YyLjNoNC4zdjIuM2gtMjQuM3YtMi4zaDE3LjZ2LTIuM2gtMTQuNVY3MC4ybDIxLjgtMjQuNWMwLjgtMC44LDEuMi0xLjksMS4yLTMuMVxyXG4gICAgYzAtMS41LTAuNy0yLjktMS45LTMuOGMtMC44LTAuNi0xLjctMC45LTIuNy0wLjljLTEuMywwLTIuNiwwLjYtMy41LDEuNmwtNS4xLDUuOGwxLjgsMS42bDUuMS01LjhjMC40LTAuNSwxLjEtMC44LDEuNy0wLjhcclxuICAgIGMwLjUsMCwwLjksMC4xLDEuMywwLjRjMC42LDAuNCwwLjksMS4xLDAuOSwxLjhjMCwwLjYtMC4yLDEuMS0wLjYsMS41bC0xMi4yLDEzLjdsLTMuNC0zbDUuNC02LjJsLTEuOC0xLjZMMTU0LjUsNTloLTQuOXYtMi44XHJcbiAgICBjMS4xLTAuNywxLjktMS43LDIuNi0yLjhoMS40YzIuNCwwLDQuMy0xLjksNC4zLTQuM3YtMy4xYzAtNy4xLTUuOC0xMi45LTEyLjktMTIuOXMtMTIuOSw1LjgtMTIuOSwxMi45VjQ5YzAsMi40LDEuOSw0LjMsNC4zLDQuM1xyXG4gICAgaDEuNGMwLjYsMS4xLDEuNSwyLjEsMi42LDIuOHYzbC00LjMsMC43bDAuNCwyLjNsNC42LTAuOGMxLDEuMSwyLjQsMS44LDMuOSwxLjhjMS42LDAsMy0wLjcsNC0xLjloNi41bDQuMi00LjhsMy40LDNsLTguNiw5LjdcclxuICAgIHYxOS41aC0zLjF2NC43aC0xMi43di00LjdoLTMuMVY3MC45aC0yLjVsLTIuMiw1LjlsLTQuMy0xLjdsMy4zLTkuMWMwLjYtMS43LDIuMS0zLDQtMy4zbDAuMiwwbC0wLjQtMi4zbC0wLjIsMFxyXG4gICAgYy0yLjYsMC40LTQuOSwyLjMtNS44LDQuOGwtOC42LDIzLjdoLTkuNHY0LjdIMTA1VjExM2gxNC44di0yLjNoLTEyLjRWOTUuOGg3NS4zdjE0LjloLTYwLjV2Mi4zSDE4NVY5My40SDE4MC4zeiBNMTUwLjksNDcuMlxyXG4gICAgbC0yLjUtMy4zaC04LjljMC44LTIuMywzLTMuOSw1LjUtMy45YzMuMiwwLDUuOSwyLjYsNS45LDUuOVY0Ny4yeiBNMTU1LjYsNDljMCwxLjEtMC45LDItMiwyaC0wLjZjMC4xLTAuNSwwLjItMS4xLDAuMi0xLjZcclxuICAgIGMwLDAsMC0zLjcsMC0zLjhoMC40YzEuMSwwLDIsMC45LDIsMlY0OXogTTE0NSwzNS4zYzUsMCw5LjIsMy41LDEwLjMsOC4yYy0wLjUtMC4yLTEuMS0wLjMtMS43LTAuM2gtMC45Yy0xLjEtMy4yLTQuMi01LjUtNy43LTUuNVxyXG4gICAgcy02LjYsMi4zLTcuNyw1LjVoLTAuOWMtMC42LDAtMS4yLDAuMS0xLjcsMC4zQzEzNS44LDM4LjgsMTQwLDM1LjMsMTQ1LDM1LjN6IE0xMzYuNCw1MWMtMS4xLDAtMi0wLjktMi0ydi0xLjZjMC0xLjEsMC45LTIsMi0yXHJcbiAgICBoMC40YzAsMC4xLDAsMy44LDAsMy44YzAsMC42LDAuMSwxLjEsMC4yLDEuNkgxMzYuNHogTTEzOS4xLDQ5LjR2LTMuMWg4LjFsMy40LDQuNmMtMC43LDIuNS0zLDQuNC01LjcsNC40XHJcbiAgICBDMTQxLjgsNTUuMiwxMzkuMSw1Mi42LDEzOS4xLDQ5LjR6IE0xNDUsNjAuOWMtMC45LDAtMS43LTAuNC0yLjMtMS4xdi0yLjVjMC43LDAuMiwxLjUsMC4zLDIuMywwLjNzMS41LTAuMSwyLjMtMC4zdjIuNVxyXG4gICAgQzE0Ni43LDYwLjUsMTQ1LjksNjAuOSwxNDUsNjAuOXogTTEzMy4yLDc3LjR2MTEuNEgxMjlMMTMzLjIsNzcuNHogTTEyNS44LDc3LjJsNC4zLDEuN2wtMy42LDkuOGgtNC45TDEyNS44LDc3LjJ6IE0xMTIsOTEuMWgyNC4zXHJcbiAgICB2Mi4zSDExMlY5MS4xelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Zz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGFydHMuZGlzcGxheSA/IGNzcy5zdDIgOiBjc3Muc3QxfVxyXG4gICAgICAgICAgICBkPVwiTTEyMy45LDI1Ni41Yy0wLjcsMC0xLjEtMC41LTEuMS0xYy0wLjEtMC40LDAuMS0xLjEsMC44LTEuM2wxNy41LTYuMXYtNS40YzAtMC40LDAuMy0wLjcsMC43LTAuN1xyXG4gICAgICAgIGMwLjQsMCwwLjcsMC4zLDAuNywwLjd2NC45bDEuMi0wLjRjMC40LTAuMiwwLjctMC4yLDAuOC0wLjJjMC4yLDAsMC40LDAuMSwwLjgsMC4ybDEuMiwwLjR2LTIyLjhsLTAuNiwwLjFcclxuICAgICAgICBjLTAuNCwwLjEtMC45LDAuMS0xLjMsMC4xYy0wLjUsMC0xLTAuMS0xLjYtMC4ybC0wLjYtMC4xVjIzOGMwLDAuNC0wLjMsMC43LTAuNywwLjdjLTAuNCwwLTAuNy0wLjMtMC43LTAuN3YtMTMuOWwtMC40LTAuM1xyXG4gICAgICAgIGMtMC43LTAuNC0wLjgtMC42LTExLjMtMTMuM2MtMy40LTQuMS03LjgtOS41LTEzLjctMTYuNmMtMC40LTAuNC0wLjQtMS0wLjItMS41YzAuMi0wLjUsMC43LTAuOCwxLjMtMC44aDQwLjlsMC4xLTAuMlxyXG4gICAgICAgIGMzLjctNi4yLDkuMy0xMSwxNi4xLTEzLjhjMC4xLDAsMC4yLTAuMSwwLjMtMC4xYzAuMywwLDAuNSwwLjIsMC42LDAuNGMwLjEsMC4yLDAuMSwwLjQsMCwwLjVjLTAuMSwwLjItMC4yLDAuMy0wLjQsMC40XHJcbiAgICAgICAgYy02LjEsMi41LTExLjEsNi43LTE0LjcsMTJsLTAuNSwwLjhIMTcyYzAuNiwwLDEsMC4zLDEuMywwLjhjMC4yLDAuNSwwLjIsMS4xLTAuMiwxLjVsLTE2LjksMjAuN2MtMC4xLDAuMi0wLjMsMC4yLTAuNSwwLjJcclxuICAgICAgICBjMCwwLDAsMCwwLDBjLTAuMiwwLTAuMy0wLjEtMC40LTAuMmMtMC4xLTAuMS0wLjItMC4zLTAuMi0wLjVjMC0wLjIsMC0wLjQsMC4xLTAuNWw4LTkuOGgtMy42bC0wLjEsMC40Yy0wLjUsMi45LTMsNC45LTUuOSw0LjlcclxuICAgICAgICBzLTUuNC0yLjEtNS45LTQuOWwtMC4xLTAuNGgtMjIuMWwxNC41LDE3LjVjMS4yLDEuNCwyLjcsMi4yLDQuNCwyLjJjMS42LDAsMy4xLTAuNyw0LjEtMS45YzAuMS0wLjEsMC4xLTAuMSwxLjItMS41bDIuNC0yLjlcclxuICAgICAgICBjMC4xLTAuMiwwLjMtMC4zLDAuNS0wLjNjMC4yLDAsMC4zLDAuMSwwLjQsMC4yYzAuMywwLjIsMC4zLDAuNywwLjEsMWMtMC42LDAuOC0xLjEsMS40LTEuNiwyYy0yLjIsMi43LTIuNiwzLjItMy43LDMuOGwtMC4yLDAuMVxyXG4gICAgICAgIHYyMy45bDMuNywxLjNjMC4yLDAuMSwwLjMsMC4yLDAuNCwwLjNjMC4xLDAuMiwwLjEsMC4zLDAsMC41Yy0wLjEsMC4zLTAuNCwwLjUtMC42LDAuNWMtMC4xLDAtMC4yLDAtMC4yLDBsLTYuNi0yLjNcclxuICAgICAgICBjMCwwLTE2LjUsNS44LTE2LjYsNS44bC0yLjgsMWgzOC43bC04LjMtMi45Yy0wLjItMC4xLTAuMy0wLjItMC40LTAuM2MtMC4xLTAuMi0wLjEtMC4zLDAtMC41YzAuMS0wLjMsMC40LTAuNSwwLjYtMC41XHJcbiAgICAgICAgYzAuMSwwLDAuMiwwLDAuMiwwbDkuMywzLjNjMC43LDAuMiwwLjgsMC44LDAuOCwxLjNjLTAuMSwwLjQtMC40LDEtMS4xLDFIMTIzLjl6IE0xNDkuMiwyMDQuNmMwLjYsMiwyLjMsMy4zLDQuNCwzLjNcclxuICAgICAgICBjMi4xLDAsMy45LTEuMyw0LjQtMy4zbDAuMi0wLjZIMTQ5TDE0OS4yLDIwNC42eiBNMTU4LjIsMTkzLjJjLTEuMSwyLjEtMS43LDMuNy0xLjksNC4zbC0wLjEsMC40bDAuMywwLjJjMS41LDAuOSwyLjYsMi4zLDIuOSw0XHJcbiAgICAgICAgbDAuMSwwLjRoNC43bDcuOS05LjZoLTEzLjhMMTU4LjIsMTkzLjJ6IE0xNTMuNiwxOTguN2MtMi4xLDAtMy44LDEuMy00LjQsMy4ybC0wLjIsMC43aDkuMkwxNTgsMjAyXHJcbiAgICAgICAgQzE1Ny40LDIwMCwxNTUuNywxOTguNywxNTMuNiwxOTguN3ogTTEyNC41LDIwMi42aDIzLjJsMC4xLTAuNGMwLjUtMi44LDMtNC44LDUuOS00LjhjMC4zLDAsMC42LDAsMC45LDAuMWwwLjQsMC4xbDAuMS0wLjRcclxuICAgICAgICBjMC4yLTAuNiwwLjYtMS44LDEuNC0zLjRsMC4zLTAuN2gtNDAuM0wxMjQuNSwyMDIuNnpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGFydHMuZGlzcGxheSA/IGNzcy5zdDIgOiBjc3Muc3QxfVxyXG4gICAgICAgICAgICBkPVwiTTE3NC4xLDE3OGMwLjEsMCwwLjEsMCwwLjIsMC4xYzAsMC4xLDAsMC4yLTAuMSwwLjJjLTYuMiwyLjUtMTEuMyw2LjgtMTQuOSwxMi4ybC0xLDEuNWgxLjhIMTcyXHJcbiAgICAgICAgYzAuNCwwLDAuNiwwLjIsMC43LDAuNGgtMS42aC0xMi40aC0wLjZsLTAuMywwLjVjLTEuMSwyLjEtMS43LDMuOC0xLjksNC40bC0wLjIsMC44bDAuNywwLjRjMS40LDAuOCwyLjMsMi4xLDIuNiwzLjdsMC4yLDAuOGgwLjhcclxuICAgICAgICBoNC4xaDAuNWwwLjMtMC40bDctOC42bDEtMS4zYzAuMSwwLjIsMC4xLDAuNS0wLjIsMC44bC0xNi45LDIwLjdjMCwwLjEtMC4xLDAuMS0wLjEsMC4xYzAsMC0wLjEsMC0wLjEsMGMtMC4xLTAuMS0wLjEtMC4yLDAtMC4zXHJcbiAgICAgICAgbDcuNC05bDEuMy0xLjZoLTIuMUgxNjBoLTAuOGwtMC4xLDAuOGMtMC41LDIuNi0yLjcsNC41LTUuNCw0LjVjLTIuNywwLTQuOS0xLjktNS40LTQuNWwtMC4xLTAuOGgtMC44aC0yMC42aC0yLjFsMS4zLDEuNlxyXG4gICAgICAgIGwxMy44LDE2LjdjMS4zLDEuNSwzLDIuNCw0LjgsMi40YzEuNywwLDMuNC0wLjcsNC41LTIuMWMwLjEtMC4xLDAuMS0wLjEsMS40LTEuN2wyLjItMi43YzAtMC4xLDAuMS0wLjEsMC4xLTAuMWMwLDAsMC4xLDAsMC4xLDBcclxuICAgICAgICBjMCwwLDAuMSwwLjEsMC4xLDAuMWMwLDAsMCwwLjEsMCwwLjFjLTAuNiwwLjgtMS4xLDEuNC0xLjYsMmMtMi4yLDIuNy0yLjUsMy4xLTMuNSwzLjdsLTAuNSwwLjN2MC42djIzLjJ2MC43bDAuNywwLjJsMy40LDEuMlxyXG4gICAgICAgIGMwLjEsMCwwLjEsMC4xLDAuMSwwLjFjMCwwLDAsMC4xLDAsMC4xYzAsMC4xLTAuMSwwLjEtMC4yLDAuMWMwLDAsMCwwLTAuMSwwbC00LjUtMS42bC0yLTAuN2wtMC4zLTAuMWwtMC4zLDAuMVxyXG4gICAgICAgIGMwLDAtMTYuMyw1LjctMTYuNCw1LjdsLTQuNCwxLjVjMC0wLjIsMC4xLTAuNCwwLjQtMC41bDE3LjEtNmwwLjctMC4ydi0wLjd2LTVjMC0wLjEsMC4xLTAuMiwwLjItMC4yYzAuMSwwLDAuMiwwLjEsMC4yLDAuMnY0LjJcclxuICAgICAgICB2MS40bDEuMy0wLjVjMC4yLTAuMSwwLjQtMC4xLDAuNi0wLjJjMC4zLTAuMSwwLjYtMC4yLDAuNy0wLjJjMC4xLDAsMC40LDAuMSwwLjYsMC4yYzAuMiwwLjEsMC40LDAuMSwwLjYsMC4ybDEuMywwLjV2LTEuNHYtMjEuNVxyXG4gICAgICAgIHYtMS4ybC0xLjIsMC4yYy0wLjQsMC4xLTAuOCwwLjEtMS4yLDAuMWMtMC41LDAtMS0wLjEtMS40LTAuMmwtMS4yLTAuM3YxLjNWMjM4YzAsMC4xLTAuMSwwLjItMC4yLDAuMmMtMC4xLDAtMC4yLTAuMS0wLjItMC4yXHJcbiAgICAgICAgdi0xMy42di0wLjVsLTAuNS0wLjNjLTAuMS0wLjEtMC4xLTAuMS0wLjItMC4xYy0wLjYtMC40LTAuOS0wLjctMTEuMi0xMy4yYy0zLjQtNC4xLTcuOC05LjUtMTMuNy0xNi42Yy0wLjItMC4zLTAuMi0wLjYtMC4yLTAuOFxyXG4gICAgICAgIGwxLjEsMS4zbDcuMSw4LjZsMC4zLDAuNGgwLjVoMjIuNmgwLjhsMC4yLTAuOGMwLjUtMi42LDIuOC00LjQsNS40LTQuNGMwLjMsMCwwLjYsMCwwLjgsMC4xbDAuOCwwLjFsMC4zLTAuOFxyXG4gICAgICAgIGMwLjItMC42LDAuNi0xLjgsMS40LTMuM2wwLjctMS40SDE1NmgtMzguNGgtMS42YzAuMS0wLjIsMC40LTAuNCwwLjctMC40aDQwLjZoMC42bDAuMy0wLjVDMTYxLjgsMTg1LjUsMTY3LjMsMTgwLjgsMTc0LjEsMTc4XHJcbiAgICAgICAgQzE3NCwxNzgsMTc0LDE3OCwxNzQuMSwxNzggTTE0OC4zLDIwMy4xaDEuNGg3LjhoMS40bC0wLjQtMS4zYy0wLjctMi4yLTIuNi0zLjYtNC45LTMuNnMtNC4yLDEuNC00LjksMy42TDE0OC4zLDIwMy4xXHJcbiAgICAgICAgIE0xNTMuNiwyMDguNGMyLjMsMCw0LjMtMS41LDQuOS0zLjdsMC40LTEuM2gtMS4zaC03LjloLTEuM2wwLjQsMS4zQzE0OS4zLDIwNywxNTEuMywyMDguNCwxNTMuNiwyMDguNCBNMTU1LjcsMjUxLjRcclxuICAgICAgICBDMTU1LjcsMjUxLjQsMTU1LjcsMjUxLjQsMTU1LjcsMjUxLjRsOS40LDMuM2MwLjMsMC4xLDAuNCwwLjQsMC40LDAuNWwtNC40LTEuNWwtNS41LTEuOWMtMC4xLDAtMC4xLTAuMS0wLjEtMC4yXHJcbiAgICAgICAgQzE1NS41LDI1MS41LDE1NS42LDI1MS40LDE1NS43LDI1MS40IE0xNjUuNCwyNTUuNmMtMC4xLDAuMi0wLjIsMC40LTAuNiwwLjRoLTQxYy0wLjQsMC0wLjUtMC4yLTAuNi0wLjRoNC43aDMyLjhIMTY1LjRcclxuICAgICAgICAgTTE3NC4xLDE3N2MtMC4xLDAtMC4zLDAtMC40LDAuMWMtNywyLjktMTIuNiw3LjgtMTYuMywxNGgtNDAuNmMtMS42LDAtMi41LDEuOS0xLjUsMy4yYzI1LjcsMzEuMiwyMy45LDI5LjIsMjUuMywzMC4xVjIzOFxyXG4gICAgICAgIGMwLDAuNywwLjUsMS4yLDEuMiwxLjJjMC43LDAsMS4yLTAuNSwxLjItMS4ydi0xMi42YzAuNSwwLjEsMS4xLDAuMiwxLjcsMC4yYzAuNSwwLDAuOSwwLDEuNC0wLjF2MjEuNWMtMC45LTAuMy0xLjItMC41LTEuNS0wLjVcclxuICAgICAgICBjLTAuMywwLTAuNiwwLjItMS41LDAuNXYtNC4yYzAtMC43LTAuNS0xLjItMS4yLTEuMmMtMC43LDAtMS4yLDAuNS0xLjIsMS4ydjVsLTE3LjEsNmMtMS44LDAuNi0xLjMsMy4yLDAuNiwzLjJoNDFcclxuICAgICAgICBjMS45LDAsMi4zLTIuNiwwLjUtMy4ybC05LjMtMy4zYy0wLjEsMC0wLjMtMC4xLTAuNC0wLjFjLTAuNSwwLTAuOSwwLjMtMS4xLDAuOGMtMC4yLDAuNiwwLjEsMS4zLDAuNywxLjVsNS41LDEuOWgtMzIuOFxyXG4gICAgICAgIGMwLDAsMTYuNC01LjcsMTYuNC01LjdjMywxLjEsMC4yLDAuMSw2LjUsMi4zYzAuMSwwLDAuMywwLjEsMC40LDAuMWMwLjUsMCwwLjktMC4zLDEuMS0wLjhjMC4yLTAuNi0wLjEtMS4zLTAuNy0xLjVsLTMuNC0xLjJcclxuICAgICAgICB2LTIzLjJjMS40LTAuOCwxLjctMS40LDUuNC01LjljMC40LTAuNSwwLjMtMS4yLTAuMi0xLjdjLTAuMi0wLjItMC41LTAuMy0wLjctMC4zYy0wLjMsMC0wLjcsMC4xLTAuOSwwLjRcclxuICAgICAgICBjLTMuNyw0LjYtMy40LDQuMi0zLjYsNC4zYy0wLjksMS4xLTIuMywxLjctMy44LDEuN2MtMS40LDAtMi44LTAuNi00LTJsLTEzLjgtMTYuN2gyMC42YzAuNSwzLDMuMiw1LjMsNi40LDUuM3M1LjgtMi4zLDYuNC01LjNcclxuICAgICAgICBoMi4ybC03LjQsOWMtMC40LDAuNS0wLjMsMS4yLDAuMiwxLjdjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjNjMC4zLDAsMC43LTAuMSwwLjktMC40bDE2LjktMjAuN2MxLTEuMywwLjEtMy4xLTEuNS0zLjFoLTExLjlcclxuICAgICAgICBjMy40LTUuMSw4LjMtOS4zLDE0LjQtMTEuOWMwLjYtMC4yLDAuOS0wLjksMC42LTEuNUMxNzUsMTc3LjMsMTc0LjUsMTc3LDE3NC4xLDE3N0wxNzQuMSwxNzd6IE0xNjAsMjAyLjFcclxuICAgICAgICBjLTAuNC0xLjktMS41LTMuNS0zLjEtNC40YzAuMi0wLjYsMC44LTIuMiwxLjgtNC4zaDEyLjRsLTcsOC42SDE2MEwxNjAsMjAyLjF6IE0xNTYsMTkzLjVjLTAuOCwxLjYtMS4yLDIuOC0xLjQsMy41XHJcbiAgICAgICAgYy0wLjMtMC4xLTAuNy0wLjEtMS0wLjFjLTMuMSwwLTUuOCwyLjItNi4zLDUuMmgtMjIuNmwtNy4xLTguNkgxNTZMMTU2LDE5My41eiBNMTQ5LjcsMjAyLjFjMC42LTEuOSwyLjMtMi45LDMuOS0yLjlcclxuICAgICAgICBjMS43LDAsMy4zLDEsMy45LDIuOUgxNDkuN0wxNDkuNywyMDIuMXogTTE1My42LDIwNy40Yy0xLjcsMC0zLjQtMS00LTNoNy45QzE1NywyMDYuNSwxNTUuMywyMDcuNCwxNTMuNiwyMDcuNEwxNTMuNiwyMDcuNHpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFBhcnRzSWNvbiB9IGZyb20gXCIuL1BhcnRzSWNvblwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJncmlkV3JhcHBlclwiOiBcIlNjaGVkdWxlR3JpZF9ncmlkV3JhcHBlcl9fMWJRWlVcIixcblx0XCJpbm5lckdyaWRcIjogXCJTY2hlZHVsZUdyaWRfaW5uZXJHcmlkX19tVnNld1wiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vU2NoZWR1bGVHcmlkLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2NoZWR1bGVHcmlkOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5ncmlkV3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW5uZXJHcmlkfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFNjaGVkdWxlR3JpZCB9IGZyb20gXCIuL1NjaGVkdWxlR3JpZFwiO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY2hlZHVsZUdyaWQge1xyXG4gIHVuaXhTdGFydERhdGU6IG51bWJlcjtcclxuICB1bml4RW5kRGF0ZTogbnVtYmVyO1xyXG4gIG51bWJlcm9mU3F1YXJlczogbnVtYmVyO1xyXG4gIHRlbXBsYXRlQXJlYXM6IHN0cmluZztcclxuICBzdGFydEhvdXI6IG51bWJlcjtcclxuICBob3VyRGlmZmVyZW5jZTogbnVtYmVyO1xyXG4gIGNvbHVtbkFtb3VudDogbnVtYmVyO1xyXG4gIGVuZEhvdXI6IG51bWJlcjtcclxuICBob3VyU3RyaW5nczogc3RyaW5nW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHVuaXhTdGFydERhdGU6IG51bWJlciwgdW5peEVuZERhdGU6IG51bWJlcikge1xyXG4gICAgdGhpcy51bml4U3RhcnREYXRlID0gdW5peFN0YXJ0RGF0ZTtcclxuICAgIHRoaXMudW5peEVuZERhdGUgPSB1bml4RW5kRGF0ZTtcclxuICAgIHRoaXMuc3RhcnRIb3VyID0gMDtcclxuICAgIHRoaXMuaG91ckRpZmZlcmVuY2UgPSAwO1xyXG4gICAgdGhpcy50ZW1wbGF0ZUFyZWFzID0gXCJcIjtcclxuICAgIHRoaXMuY29sdW1uQW1vdW50ID0gMDtcclxuICAgIHRoaXMuZW5kSG91ciA9IDA7XHJcbiAgICB0aGlzLmhvdXJTdHJpbmdzID0gW107XHJcbiAgICB0aGlzLm51bWJlcm9mU3F1YXJlcyA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNxdWFyZXMoKSB7XHJcbiAgICBjb25zdCB0aW1lRGlmZmVyZW5jZTogbnVtYmVyID0gdGhpcy51bml4RW5kRGF0ZSAtIHRoaXMudW5peFN0YXJ0RGF0ZTtcclxuICAgIGNvbnN0IGhvdXJzOiBudW1iZXIgPSBNYXRoLmZsb29yKHRpbWVEaWZmZXJlbmNlIC8gMzYwMCk7XHJcbiAgICBjb25zdCBudW1Db2x1bW5zOiBudW1iZXIgPSBob3VycyAqIDIgKyA0O1xyXG4gICAgY29uc3QgbnVtYmVyT2ZTcXVhcmVzOiBudW1iZXIgPSBudW1Db2x1bW5zICogNTtcclxuICAgIHRoaXMubnVtYmVyb2ZTcXVhcmVzID0gbnVtYmVyT2ZTcXVhcmVzO1xyXG4gICAgdGhpcy5jb2x1bW5BbW91bnQgPSBudW1Db2x1bW5zO1xyXG4gICAgdGhpcy5ob3VyRGlmZmVyZW5jZSA9IGhvdXJzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRIb3VycygpIHtcclxuICAgIGNvbnN0IHN0YXJ0RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRoaXMudW5peFN0YXJ0RGF0ZSAqIDEwMDApO1xyXG4gICAgY29uc3QgZW5kRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRoaXMudW5peEVuZERhdGUgKiAxMDAwKTtcclxuXHJcbiAgICBjb25zdCBzdGFydEhvdXI6IG51bWJlciA9IHN0YXJ0RGF0ZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgZW5kSG91cjogbnVtYmVyID0gZW5kRGF0ZS5nZXRIb3VycygpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRIb3VyID0gc3RhcnRIb3VyO1xyXG4gICAgdGhpcy5lbmRIb3VyID0gZW5kSG91cjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0R3JpZFRlbXBsYXRlKCkge1xyXG4gICAgY29uc3Qgc3F1YXJlOiBzdHJpbmcgPSBcInNxdWFyZSBcIjtcclxuICAgIGNvbnN0IHJvd1N0cmluZzogc3RyaW5nID0gYFwiJHtzcXVhcmUucmVwZWF0KFxyXG4gICAgICB0aGlzLmNvbHVtbkFtb3VudCAtIDFcclxuICAgICl9IHNxdWFyZVwiYDtcclxuICAgIHRoaXMudGVtcGxhdGVBcmVhcyA9IGAke3Jvd1N0cmluZy5yZXBlYXQoNSl9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SG91cnNIZWFkZXIoKSB7XHJcbiAgICBsZXQgaG91ckNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgc3RhcnRIb3VyQ291bnRlcjogbnVtYmVyID0gdGhpcy5zdGFydEhvdXI7XHJcblxyXG4gICAgY29uc3QgaG91ck51bWJlcnM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgd2hpbGUgKGhvdXJDb3VudGVyIDw9IHRoaXMuaG91ckRpZmZlcmVuY2UpIHtcclxuICAgICAgaG91ck51bWJlcnMucHVzaChzdGFydEhvdXJDb3VudGVyKTtcclxuICAgICAgaG91ckNvdW50ZXIrKztcclxuICAgICAgc3RhcnRIb3VyQ291bnRlciA8IDI0ID8gc3RhcnRIb3VyQ291bnRlcisrIDogKHN0YXJ0SG91ckNvdW50ZXIgPSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob3VyU3RyaW5nczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBob3VyTnVtYmVycy5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICAgIGlmIChob3VyID09PSAyNCkge1xyXG4gICAgICAgIHJldHVybiBob3VyU3RyaW5ncy5wdXNoKFwiMTI6MDAgYS5tXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGhvdXIgPT09IDEyKSB7XHJcbiAgICAgICAgcmV0dXJuIGhvdXJTdHJpbmdzLnB1c2goXCIxMjowMCBwLm1cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGhvdXIgPCAxMlxyXG4gICAgICAgICAgPyBob3VyU3RyaW5ncy5wdXNoKGAke2hvdXJ9OjAwIGEubWApXHJcbiAgICAgICAgICA6IGhvdXJTdHJpbmdzLnB1c2goYCR7aG91ciAtIDEyfTowMCBwLm1gKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmhvdXJTdHJpbmdzID0gaG91clN0cmluZ3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0R3JpZCgpIHtcclxuICAgIHRoaXMuc2V0U3F1YXJlcygpO1xyXG4gICAgdGhpcy5zZXRIb3VycygpO1xyXG4gICAgdGhpcy5zZXRHcmlkVGVtcGxhdGUoKTtcclxuICAgIHRoaXMuc2V0SG91cnNIZWFkZXIoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXZlbnRzXCI6IFwiRXZlbnRzSW5wdXRfZXZlbnRzX18xcnhIQVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgSW5wdXRDaGFuZ2UgfSBmcm9tIFwiLi4vLi4vU2VhcmNoQm94XCI7XHJcbmltcG9ydCBJbnB1dFByb3BzIGZyb20gXCIuLi8uLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9FdmVudHNJbnB1dC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IFBpY2s8SW5wdXRQcm9wcywgXCJoYW5kbGVJbnB1dENoYW5nZVwiIHwgXCJldmVudHNDYXRlZ29yeVwiPjtcclxuXHJcbmV4cG9ydCBjb25zdCBFdmVudHNJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBoYW5kbGVJbnB1dENoYW5nZSxcclxuICBldmVudHNDYXRlZ29yeSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTogKFxyXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4sXHJcbiAgICBmaWVsZDogc3RyaW5nXHJcbiAgKSA9PiB2b2lkID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xyXG4gICAgcmV0dXJuIGhhbmRsZUlucHV0Q2hhbmdlKFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmV2ZW50c30+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+V2hhdCB0eXBlIG9mIGV2ZW50cyBhcmUgeW91IGxvb2tpbmcgZm9yPzwvbGFiZWw+XHJcbiAgICAgIDxzZWxlY3RcclxuICAgICAgICBuYW1lPVwiXCJcclxuICAgICAgICBpZD1cIlwiXHJcbiAgICAgICAgdmFsdWU9e2V2ZW50c0NhdGVnb3J5fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgXCJldmVudHNDYXRlZ29yeVwiKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxvcHRncm91cD5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DYXRlZ29yeSAoT3B0aW9uYWwpPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxsXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTXVzaWNcIj5NdXNpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5pZ2h0bGlmZVwiPk5pZ2h0bGlmZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZvb2QgJiBEcmlua1wiPkZvb2QgJiBEcmluazwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZpbG1cIj5GaWxtPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3BvcnRzICYgQWN0aXZlIExpZmVzdHlsZVwiPlxyXG4gICAgICAgICAgICBTcG9ydHMgJiBBY3RpdmUgTGlmZXN0eWxlXHJcbiAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGZXN0aXZhbHMgJiBGYWlyc1wiPkZlc3RpdmFscyAmIEZhaXJzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJ0cyAmIFRoZWF0cmVcIj5BcnRzICYgVGhlYXRyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk90aGVyXCI+T3RoZXI8L29wdGlvbj5cclxuICAgICAgICA8L29wdGdyb3VwPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IEV2ZW50c0lucHV0IH0gZnJvbSBcIi4vRXZlbnRzSW5wdXRcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGxhY2VzXCI6IFwiUGxhY2VzSW5wdXRfcGxhY2VzX18yT2s1bVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dFByb3BzIGZyb20gXCIuLi8uLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9QbGFjZXNJbnB1dC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IFBpY2s8SW5wdXRQcm9wcywgXCJoYW5kbGVJbnB1dENoYW5nZVwiIHwgXCJwbGFjZVR5cGVcIj47XHJcblxyXG5leHBvcnQgY29uc3QgUGxhY2VzSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UsXHJcbiAgcGxhY2VUeXBlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlOiAoXHJcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PixcclxuICAgIGZpZWxkOiBzdHJpbmdcclxuICApID0+IHZvaWQgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XHJcbiAgICByZXR1cm4gaGFuZGxlSW5wdXRDaGFuZ2UoXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWVcclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wbGFjZXN9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPldoYXQgdHlwZSBvZiBwbGFjZXMgYXJlIHlvdSBsb29raW5nIGZvcj88L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkJhcnMsIFJlc3RhdXJhbnRzLCBTdXNoaSwgZXRjLlwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXtwbGFjZVR5cGV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBcInBsYWNlVHlwZVwiKX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbj5TZWFyY2g8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFBsYWNlc0lucHV0IH0gZnJvbSBcIi4vUGxhY2VzSW5wdXRcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoU2VsZWN0b3JcIjogXCJTZWFyY2hTZWxlY3Rvcl9zZWFyY2hTZWxlY3Rvcl9fMlVJWEZcIixcblx0XCJzZWxlY3RvclwiOiBcIlNlYXJjaFNlbGVjdG9yX3NlbGVjdG9yX18ycmc0T1wiLFxuXHRcImFsbFNWR1wiOiBcIlNlYXJjaFNlbGVjdG9yX2FsbFNWR19fMWtTcWxcIixcblx0XCJoaWdobGlnaHRlZFwiOiBcIlNlYXJjaFNlbGVjdG9yX2hpZ2hsaWdodGVkX19xRkNOWVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dFByb3BzIGZyb20gXCIuLi8uLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9TZWFyY2hTZWxlY3Rvci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IFBpY2s8SW5wdXRQcm9wcywgXCJzZWFyY2hUeXBlXCIgfCBcImhhbmRsZUlucHV0Q2hhbmdlXCI+O1xyXG5cclxudHlwZSBTZWxlY3RvclN0YXRlID0geyBhbGw6IGJvb2xlYW47IHBsYWNlczogYm9vbGVhbjsgZXZlbnRzOiBib29sZWFuIH07XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU2VsZWN0b3I6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgc2VhcmNoVHlwZSxcclxuICBoYW5kbGVJbnB1dENoYW5nZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtoaWdobGlnaHQsIHNldEhpZ2hsaWdodF0gPSBSZWFjdC51c2VTdGF0ZTxTZWxlY3RvclN0YXRlPih7XHJcbiAgICBhbGw6IGZhbHNlLFxyXG4gICAgcGxhY2VzOiBmYWxzZSxcclxuICAgIGV2ZW50czogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnNlYXJjaFNlbGVjdG9yfT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLnNlbGVjdG9yfSAke2hpZ2hsaWdodC5hbGwgPyBjc3MuaGlnaGxpZ2h0ZWQgOiBudWxsfWB9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0KHsgYWxsOiB0cnVlLCBwbGFjZXM6IGZhbHNlLCBldmVudHM6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic2VhcmNoVHlwZVwiLCBcIkFMTFwiKX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhpZ2hsaWdodCgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBhbGw6IGZhbHNlIH0pKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYWxsU1ZHfT5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgaWQ9XCJBTExcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MTJwdFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCItNjMgMCA1MTIgNTEyLjAwMDI2XCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MTJwdFwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGlkPVwiQUxMXCJcclxuICAgICAgICAgICAgICBkPVwibTM4Ni42NDA2MjUgNC42ODM1OTRjLTEuNTgyMDMxLTMuODU1NDY5LTUuOTk2MDk0LTUuNjk5MjE5LTkuODUxNTYzLTQuMTE3MTg4LTQ0LjcyNjU2MiAxOC4zNjMyODItODAuODA4NTkzIDQ5LjkyMTg3NS0xMDQuNDM3NSA4OS44MzIwMzJoLTI2MC4wMTU2MjRjLTEwLjMwODU5NCAwLTE2LjE2NDA2MyAxMi4wNzAzMTItOS41IDIwLjE3MTg3NCAxNjQuNjE3MTg3IDE5OS41NzAzMTMgMTUzLjIyMjY1NiAxODcuMTM2NzE5IDE2MS42NzE4NzQgMTkyLjYzMjgxM3Y4Ny4xNTYyNWMwIDQuMTY3OTY5IDMuMzgyODEzIDcuNTQ2ODc1IDcuNTUwNzgyIDcuNTQ2ODc1IDQuMTY0MDYyIDAgNy41NDY4NzUtMy4zNzg5MDYgNy41NDY4NzUtNy41NDY4NzV2LTgwLjcyNjU2M2M2LjM3ODkwNiAxLjQ4ODI4MiAxMy4xMjg5MDYgMS42MTcxODggMTkuNjI4OTA2LjM2MzI4MnYxMzcuNTU0Njg3Yy0xMS4yODkwNjMtMy45NTcwMzEtOC4xODc1LTQuMDExNzE5LTE5LjYyODkwNiAwdi0yNi45OTYwOTNjMC00LjE2Nzk2OS0zLjM4MjgxMy03LjU0Njg3Ni03LjU0Njg3NS03LjU0Njg3Ni00LjE2Nzk2OSAwLTcuNTUwNzgyIDMuMzc4OTA3LTcuNTUwNzgyIDcuNTQ2ODc2djMyLjI4MTI1bC0xMDkuNzQ2MDkzIDM4LjQ2MDkzN2MtMTEuMjU3ODEzIDMuOTUzMTI1LTguNDg0Mzc1IDIwLjcwMzEyNSAzLjUyMzQzNyAyMC43MDMxMjVoMjYyLjI2OTUzMmMxMi4wMjczNDMgMCAxNC43NTc4MTItMTYuNzU3ODEyIDMuNTE5NTMxLTIwLjcwMzEyNWwtNTkuNzc3MzQ0LTIwLjk0OTIxOWMtMy45Mzc1LTEuMzc4OTA2LTguMjQyMTg3LjY5NTMxMy05LjYyMTA5NCA0LjYyMTA5NC0xLjM3ODkwNiAzLjkzNzUuNjkxNDA3IDguMjQ2MDk0IDQuNjI4OTA3IDkuNjI1bDM1LjExNzE4NyAxMi4zMDg1OTRoLTIxMC4wMTU2MjVjLjAwMzkwNiAwIDEwNS4wMTE3MTktMzYuNzg5MDYzIDEwNS4wMTE3MTktMzYuNzg5MDYzIDE5LjQwNjI1IDYuODA4NTk0IDEuMTI4OTA2LjM5NDUzMSA0MS4zODI4MTIgMTQuNDkyMTg4IDMuOTMzNTk0IDEuMzc4OTA2IDguMjQyMTg4LS42OTE0MDcgOS42MjEwOTQtNC42Mjg5MDcgMS4zNzg5MDYtMy45MjU3ODEtLjY5NTMxMy04LjIzNDM3NC00LjYyODkwNi05LjYxMzI4MWwtMjEuNDYwOTM4LTcuNTE5NTMxdi0xNDguNTg1OTM4YzkuMDUwNzgxLTUuMzc1IDEwLjkxNDA2My04Ljg1OTM3NCAzNC40NDUzMTMtMzcuNjk1MzEyIDIuNjM2NzE4LTMuMjMwNDY5IDIuMTUyMzQ0LTcuOTgwNDY5LTEuMDc4MTI1LTEwLjYxNzE4OC0zLjIzMDQ2OS0yLjYzNjcxOC03Ljk4MDQ2OS0yLjE1NjI1LTEwLjYyMTA5NCAxLjA3NDIxOS0yMy44OTg0MzcgMjkuMjgxMjUtMjEuODc4OTA2IDI2LjgyODEyNS0yMi43NDYwOTQgMjcuODMyMDMxLTExLjY0MDYyNSAxMy4yODUxNTctMzQuNDIxODc1IDE2LjY1MjM0NC00OS44MjQyMTktMi4wMTE3MThsLTg4LjI4MTI1LTEwNy4wMjczNDRoMTMxLjc4NTE1N2MzLjQxNzk2OSAxOS40MTc5NjkgMjAuMzk4NDM3IDM0LjIyMjY1NiA0MC43ODEyNSAzNC4yMjI2NTYgMjAuMzgyODEyIDAgMzcuMzU5Mzc1LTE0LjgwNDY4NyA0MC43NzczNDMtMzQuMjIyNjU2aDEzLjc2OTUzMmwtNDcuMTc1NzgyIDU3LjgwODU5NGMtMi42MjUgMy4yMzA0NjgtMi4xNTIzNDMgNy45ODgyODEgMS4wNzgxMjYgMTAuNjE3MTg3IDMuMjMwNDY4IDIuNjM2NzE5IDcuOTkyMTg3IDIuMTUyMzQ0IDEwLjYyODkwNi0xLjA2NjQwNmwxMDguMjQ2MDk0LTEzMi42NTIzNDRjNi41ODU5MzctOC4wNjI1Ljc2OTUzMS0yMC4xMjEwOTMtOS41NDI5NjktMjAuMTIxMDkzaC03Ni40MzM1OTRjMjEuNTMxMjUtMzIuOTE0MDYzIDUzLjA3ODEyNS01OS43MjY1NjMgOTIuMzgyODEzLTc1Ljg2MzI4MiAzLjg1OTM3NC0xLjU4MjAzMSA1LjY5OTIxOC01Ljk5MjE4NyA0LjExNzE4Ny05Ljg1MTU2MnptLTE3OC41IDE1Ni4wMzEyNWgtMTQ0LjM2NzE4N2wtNDUuNTQ2ODc2LTU1LjIxODc1aDI0NS45OTYwOTRjLTQuOTMzNTk0IDEwLjE0NDUzMS03LjczODI4MSAxOC4wNjY0MDYtOS4wNTQ2ODcgMjIuMTk5MjE4LTIyLjIzODI4MS0zLjQ1MzEyNC00Mi44NDM3NSAxMS40NTcwMzItNDcuMDI3MzQ0IDMzLjAxOTUzMnptNjUuNzUzOTA2IDBoLTUwLjIwNzAzMWM3LjcyMjY1Ni0yNC40NzI2NTYgNDIuNDg0Mzc1LTI0LjQ3MjY1NiA1MC4yMDcwMzEgMHptLTUwLjQxNDA2MiAxNS4wOTc2NTZoNTAuNjIxMDkzYy03LjIzMDQ2OCAyNS4zOTg0MzgtNDMuMzgyODEyIDI1LjQyMTg3NS01MC42MjEwOTMgMHptMTM3LjI0MjE4Ny03MC4zMTY0MDYtNDUuMDYyNSA1NS4yMTg3NWgtMjYuMjE4NzVjLTIuMzIwMzEyLTExLjk1NzAzMi05LjgwMDc4MS0yMi4wODU5MzgtMjAuMDIzNDM3LTI3Ljk4NDM3NSAxLjI4MTI1LTQuMDY2NDA3IDQuODI4MTI1LTE0LjIzODI4MSAxMS43Njk1MzEtMjcuMjM0Mzc1em0wIDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUxMnB0XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MTJwdFwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBpZD1cIkFMTFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgaWQ9XCJBTExcIlxyXG4gICAgICAgICAgICAgIGQ9XCJtNDgxLjk0MTQwNiAzODYuNzUzOTA2di0zMC4wNTg1OTRoLTQyLjU4MjAzMXYxNS4wMzEyNWgyNy41NTA3ODF2MTUuMDI3MzQ0aC0xNTUuMzAwNzgxdi0xNS4wMjczNDRoMTEyLjcxODc1di0xNS4wMzEyNWgtOTIuNjc5Njg3di0xMTguODgyODEybDEzOS4yMDMxMjQtMTU2LjkzNzVjNC44MDg1OTQtNS40MjU3ODEgNy40NjA5MzgtMTIuMzk4NDM4IDcuNDYwOTM4LTE5LjYzMjgxMiAwLTkuNDkyMTg4LTQuNTg5ODQ0LTE4LjQ3MjY1Ny0xMi4yNzczNDQtMjQuMDI3MzQ0LTUuMDc4MTI1LTMuNjY3OTY5LTExLjA3MDMxMi01LjYwNTQ2OS0xNy4zMjQyMTgtNS42MDU0NjktOC41MTU2MjYgMC0xNi42MTcxODggMy42NjQwNjMtMjIuMjM4MjgyIDEwLjA0Njg3NWwtMzIuNzA3MDMxIDM3LjE1MjM0NCAxMS4yODEyNSA5LjkyOTY4NyAzMi43MDcwMzEtMzcuMTUyMzQzYzIuNzY1NjI1LTMuMTQ0NTMyIDYuNzYxNzE5LTQuOTQ1MzEzIDEwLjk1NzAzMi00Ljk0NTMxMyAzLjA3NDIxOCAwIDYuMDIzNDM3Ljk1MzEyNSA4LjUyNzM0MyAyLjc2MTcxOSAzLjgzOTg0NCAyLjc3MzQzNyA2LjA0Mjk2OSA3LjA4OTg0NCA2LjA0Mjk2OSAxMS44Mzk4NDQgMCAzLjU1NDY4Ny0xLjMwNDY4OCA2Ljk4NDM3NC0zLjY3MTg3NSA5LjY2MDE1NmwtNzcuNzY1NjI1IDg3LjY2Nzk2OC0yMS41MzUxNTYtMTkuMDAzOTA2IDM0LjgwODU5NC0zOS41NDY4NzUtMTEuMjgxMjUtOS45Mjk2ODctNjcuMTA1NDY5IDc2LjIzNDM3NWgtMzEuMTcxODc1di0xOC4xMzI4MTNjNi43NjE3MTgtNC42MDkzNzUgMTIuMzk0NTMxLTEwLjc2MTcxOCAxNi4zOTg0MzctMTcuOTM3NWg5LjE1MjM0NGMxNS4xOTE0MDYgMCAyNy41NTA3ODEtMTIuMzU5Mzc1IDI3LjU1MDc4MS0yNy41NTQ2ODd2LTIwLjAzOTA2M2MwLTQ1LjU3ODEyNS0zNy4wODIwMzEtODIuNjYwMTU2LTgyLjY2MDE1Ni04Mi42NjAxNTZzLTgyLjY2MDE1NiAzNy4wODIwMzEtODIuNjYwMTU2IDgyLjY2MDE1NnYyMC4wMzkwNjNjMCAxNS4xOTUzMTIgMTIuMzU5Mzc1IDI3LjU1NDY4NyAyNy41NTA3ODEgMjcuNTU0Njg3aDkuMTUyMzQ0YzQuMDAzOTA2IDcuMTc1NzgyIDkuNjM2NzE5IDEzLjMyODEyNSAxNi4zOTg0MzcgMTcuOTM3NXYxOS4yNjk1MzJsLTI3LjM1OTM3NSA0LjQ5NjA5MyAyLjQ0MTQwNyAxNC44MzIwMzEgMjkuMjE0ODQzLTQuODA0Njg3YzYuMzQ3NjU3IDcuMjAzMTI1IDE1LjQ2NDg0NCAxMS4zOTQ1MzEgMjUuMjYxNzE5IDExLjM5NDUzMSAxMC4wODIwMzEgMCAxOS40NjA5MzgtNC40Mjk2ODcgMjUuODI0MjE5LTEyLjAyMzQzN2g0MS42OTkyMTlsMjYuODUxNTYyLTMwLjUwNzgxMyAyMS40OTYwOTQgMTguOTY4NzUtNTUuMjUzOTA2IDYyLjI4OTA2M3YxMjQuNTg5ODQzaC0yMC4wMzkwNjN2MzAuMDU4NTk0aC04MS4xNTYyNXYtMzAuMDU4NTk0aC0yMC4wMzkwNjN2LTExNC4yMjI2NTZoLTE1Ljc2MTcxOGwtMTMuODAwNzgyIDM3LjQ1NzAzMi0yNy4zMTY0MDYtMTEuMDU0Njg4IDIxLjMzNTkzOC01OC40MzM1OTRjNC4wMjczNDQtMTEuMDI3MzQ0IDEzLjcyMjY1Ni0xOS4wNTg1OTQgMjUuMzA0Njg3LTIwLjk2MDkzN2wxLjU0Njg3NS0uMjU3ODEzLTIuNDM3NS0xNC44MjgxMjUtMS41NDY4NzUuMjUzOTA3Yy0xNi45Mjk2ODcgMi43ODEyNS0zMS4xMDE1NjIgMTQuNTIzNDM3LTM2Ljk4NDM3NSAzMC42MzY3MThsLTU1LjI5Mjk2OCAxNTEuNDEwMTU2aC02MC4zNzEwOTR2MzAuMDU4NTk0aC0zMC4wNTg1OTR2MTI1LjI0NjA5NGg5NC42ODM1OTR2LTE1LjAzMTI1aC03OS42NTIzNDR2LTk1LjE4MzU5NGg0ODEuOTM3NXY5NS4xODM1OTRoLTM4Ny4yNTM5MDZ2MTUuMDMxMjVoNDAyLjI4NTE1NnYtMTI1LjI0NjA5NHptLTE4OC4zNjcxODctMjk1LjcyMjY1Ni0xNS44MDA3ODEtMjAuODk0NTMxaC01Ny4xOTE0MDdjNS4xNjc5NjktMTQuNTc4MTI1IDE5LjA4OTg0NC0yNS4wNDY4NzUgMzUuNDE3OTY5LTI1LjA0Njg3NSAyMC43MTg3NSAwIDM3LjU3NDIxOSAxNi44NTE1NjIgMzcuNTc0MjE5IDM3LjU3MDMxMnptMzAuMDU4NTkzIDExLjY2Nzk2OWMwIDYuOTA2MjUtNS42MTcxODcgMTIuNTI3MzQzLTEyLjUyMzQzNyAxMi41MjczNDNoLTMuNTY2NDA2Yy42OTUzMTItMy40MDIzNDMgMS4wNTg1OTMtNi45MjE4NzQgMS4wNTg1OTMtMTAuNTIzNDM3IDAgMC0uMDIzNDM3LTIzLjcxNDg0NC0uMDYyNS0yNC41NDY4NzVoMi41NzAzMTNjNi45MDYyNSAwIDEyLjUyMzQzNyA1LjYxNzE4OCAxMi41MjM0MzcgMTIuNTIzNDM4em0tNjcuNjMyODEyLTg3LjY2Nzk2OWMzMi4wMTE3MTkgMCA1OC44Nzg5MDYgMjIuMzU5Mzc1IDY1Ljg1NTQ2OSA1Mi4yNzczNDQtMy4zMDQ2ODgtMS40MDIzNDQtNi45Mzc1LTIuMTc5Njg4LTEwLjc0NjA5NC0yLjE3OTY4OGgtNS41MjM0MzdjLTcuMjM4MjgyLTIwLjQxMDE1Ni0yNi43MjY1NjMtMzUuMDcwMzEyLTQ5LjU4NTkzOC0zNS4wNzAzMTJzLTQyLjM0NzY1NiAxNC42NjAxNTYtNDkuNTg1OTM4IDM1LjA3MDMxMmgtNS41MjM0MzdjLTMuODA4NTk0IDAtNy40NDE0MDYuNzc3MzQ0LTEwLjc0NjA5NCAyLjE3OTY4OCA2Ljk3NjU2My0yOS45MTc5NjkgMzMuODQzNzUtNTIuMjc3MzQ0IDY1Ljg1NTQ2OS01Mi4yNzczNDR6bS01NS4xMDkzNzUgMTAwLjE5NTMxMmMtNi45MDYyNSAwLTEyLjUyMzQzNy01LjYyMTA5My0xMi41MjM0MzctMTIuNTI3MzQzdi0xMC4wMTk1MzFjMC02LjkwNjI1IDUuNjE3MTg3LTEyLjUyMzQzOCAxMi41MjM0MzctMTIuNTIzNDM4aDIuNTcwMzEzYy0uMDM5MDYzLjgzMjAzMS0uMDYyNSAyNC41NDY4NzUtLjA2MjUgMjQuNTQ2ODc1IDAgMy42MDE1NjMuMzYzMjgxIDcuMTIxMDk0IDEuMDU4NTkzIDEwLjUyMzQzN3ptMTcuNTM1MTU2LTEwLjUyMzQzN3YtMTkuNTM1MTU2aDUxLjg3MTA5NGwyMi4wMjczNDQgMjkuMTM2NzE5Yy00LjI1IDE2LjA4MjAzMS0xOC45MjE4NzUgMjcuOTcyNjU2LTM2LjMyNDIxOSAyNy45NzI2NTYtMjAuNzE4NzUgMC0zNy41NzQyMTktMTYuODU1NDY5LTM3LjU3NDIxOS0zNy41NzQyMTl6bTM3LjU3NDIxOSA3My42NDQ1MzFjLTUuNzA3MDMxIDAtMTAuOTk2MDk0LTIuNTYyNS0xNC41MjczNDQtNi45MzM1OTR2LTE2LjE2NDA2MmM0LjYxNzE4OCAxLjMyODEyNSA5LjQ4ODI4MiAyLjA1ODU5NCAxNC41MjczNDQgMi4wNTg1OTRzOS45MTAxNTYtLjczMDQ2OSAxNC41MjczNDQtMi4wNTg1OTR2MTYuMTY0MDYyYy0zLjUzMTI1IDQuMzcxMDk0LTguODIwMzEzIDYuOTMzNTk0LTE0LjUyNzM0NCA2LjkzMzU5NHptLTc1LjY0ODQzOCAxMDUuNjE3MTg4djcyLjczMDQ2OGgtMjYuNzk2ODc0em0tNDcuMDA3ODEyLS45NjQ4NDQgMjcuMjc3MzQ0IDExLjAzOTA2Mi0yMy4wODIwMzIgNjIuNjU2MjVoLTMxLjEwOTM3NHptLTg4LjI1MzkwNiA4OC43MjY1NjJoMTU1LjMwMDc4MXYxNS4wMjczNDRoLTE1NS4zMDA3ODF6bTAgMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgaWQ9XCJBTExcIlxyXG4gICAgICAgICAgICAgIGQ9XCJtMTczLjMzOTg0NCA0MjEuODI0MjE5djU1LjEwNTQ2OWgxNjUuMzIwMzEydi01NS4xMDU0Njl6bTEwMC4xOTUzMTIgMTUuMDI3MzQzdjI1LjA1MDc4MmgtMzUuMDcwMzEydi0yNS4wNTA3ODJ6bS04NS4xNjc5NjggMGgzNS4wNzAzMTJ2MjUuMDUwNzgyaC0zNS4wNzAzMTJ6bTEzNS4yNjU2MjQgMjUuMDUwNzgyaC0zNS4wNzAzMTJ2LTI1LjA1MDc4MmgzNS4wNzAzMTJ6bTAgMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgaWQ9XCJBTExcIlxyXG4gICAgICAgICAgICAgIGQ9XCJtMTQzLjI4MTI1IDQ3MS45MjE4NzVoLTE1LjAzMTI1di0xNS4wMzEyNWgxNS4wMzEyNXptMC0zMC4wNTg1OTRoLTE1LjAzMTI1di0xNS4wMzEyNWgxNS4wMzEyNXptMCAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBpZD1cIkFMTFwiXHJcbiAgICAgICAgICAgICAgZD1cIm0zODMuNzUgNDcxLjkyMTg3NWgtMTUuMDMxMjV2LTE1LjAzMTI1aDE1LjAzMTI1em0wLTMwLjA1ODU5NGgtMTUuMDMxMjV2LTE1LjAzMTI1aDE1LjAzMTI1em0wIDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGlkPVwiQUxMXCJcclxuICAgICAgICAgICAgICBkPVwibTMwMC41ODU5MzggMzE0LjExMzI4MWgtMTUuMDI3MzQ0di0xNS4wMjczNDNoMTUuMDI3MzQ0em0wLTMwLjA1ODU5M2gtMTUuMDI3MzQ0di00MC4wNzgxMjZoMTUuMDI3MzQ0em0wIDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5BbGw8L2xhYmVsPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLnNlbGVjdG9yfSAke1xyXG4gICAgICAgICAgaGlnaGxpZ2h0LnBsYWNlcyA/IGNzcy5oaWdobGlnaHRlZCA6IG51bGxcclxuICAgICAgICB9YH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICBzZXRIaWdobGlnaHQoeyBhbGw6IGZhbHNlLCBwbGFjZXM6IHRydWUsIGV2ZW50czogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PlxyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0KChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIHBsYWNlczogZmFsc2UgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic2VhcmNoVHlwZVwiLCBcIlBMQUNFU1wiKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIGhlaWdodD1cIjUxMnB0XCJcclxuICAgICAgICAgIHZpZXdCb3g9XCItNjMgMCA1MTIgNTEyLjAwMDI2XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTEycHRcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgaWQ9XCJQTEFDRVNcIlxyXG4gICAgICAgICAgICBkPVwibTM4Ni42NDA2MjUgNC42ODM1OTRjLTEuNTgyMDMxLTMuODU1NDY5LTUuOTk2MDk0LTUuNjk5MjE5LTkuODUxNTYzLTQuMTE3MTg4LTQ0LjcyNjU2MiAxOC4zNjMyODItODAuODA4NTkzIDQ5LjkyMTg3NS0xMDQuNDM3NSA4OS44MzIwMzJoLTI2MC4wMTU2MjRjLTEwLjMwODU5NCAwLTE2LjE2NDA2MyAxMi4wNzAzMTItOS41IDIwLjE3MTg3NCAxNjQuNjE3MTg3IDE5OS41NzAzMTMgMTUzLjIyMjY1NiAxODcuMTM2NzE5IDE2MS42NzE4NzQgMTkyLjYzMjgxM3Y4Ny4xNTYyNWMwIDQuMTY3OTY5IDMuMzgyODEzIDcuNTQ2ODc1IDcuNTUwNzgyIDcuNTQ2ODc1IDQuMTY0MDYyIDAgNy41NDY4NzUtMy4zNzg5MDYgNy41NDY4NzUtNy41NDY4NzV2LTgwLjcyNjU2M2M2LjM3ODkwNiAxLjQ4ODI4MiAxMy4xMjg5MDYgMS42MTcxODggMTkuNjI4OTA2LjM2MzI4MnYxMzcuNTU0Njg3Yy0xMS4yODkwNjMtMy45NTcwMzEtOC4xODc1LTQuMDExNzE5LTE5LjYyODkwNiAwdi0yNi45OTYwOTNjMC00LjE2Nzk2OS0zLjM4MjgxMy03LjU0Njg3Ni03LjU0Njg3NS03LjU0Njg3Ni00LjE2Nzk2OSAwLTcuNTUwNzgyIDMuMzc4OTA3LTcuNTUwNzgyIDcuNTQ2ODc2djMyLjI4MTI1bC0xMDkuNzQ2MDkzIDM4LjQ2MDkzN2MtMTEuMjU3ODEzIDMuOTUzMTI1LTguNDg0Mzc1IDIwLjcwMzEyNSAzLjUyMzQzNyAyMC43MDMxMjVoMjYyLjI2OTUzMmMxMi4wMjczNDMgMCAxNC43NTc4MTItMTYuNzU3ODEyIDMuNTE5NTMxLTIwLjcwMzEyNWwtNTkuNzc3MzQ0LTIwLjk0OTIxOWMtMy45Mzc1LTEuMzc4OTA2LTguMjQyMTg3LjY5NTMxMy05LjYyMTA5NCA0LjYyMTA5NC0xLjM3ODkwNiAzLjkzNzUuNjkxNDA3IDguMjQ2MDk0IDQuNjI4OTA3IDkuNjI1bDM1LjExNzE4NyAxMi4zMDg1OTRoLTIxMC4wMTU2MjVjLjAwMzkwNiAwIDEwNS4wMTE3MTktMzYuNzg5MDYzIDEwNS4wMTE3MTktMzYuNzg5MDYzIDE5LjQwNjI1IDYuODA4NTk0IDEuMTI4OTA2LjM5NDUzMSA0MS4zODI4MTIgMTQuNDkyMTg4IDMuOTMzNTk0IDEuMzc4OTA2IDguMjQyMTg4LS42OTE0MDcgOS42MjEwOTQtNC42Mjg5MDcgMS4zNzg5MDYtMy45MjU3ODEtLjY5NTMxMy04LjIzNDM3NC00LjYyODkwNi05LjYxMzI4MWwtMjEuNDYwOTM4LTcuNTE5NTMxdi0xNDguNTg1OTM4YzkuMDUwNzgxLTUuMzc1IDEwLjkxNDA2My04Ljg1OTM3NCAzNC40NDUzMTMtMzcuNjk1MzEyIDIuNjM2NzE4LTMuMjMwNDY5IDIuMTUyMzQ0LTcuOTgwNDY5LTEuMDc4MTI1LTEwLjYxNzE4OC0zLjIzMDQ2OS0yLjYzNjcxOC03Ljk4MDQ2OS0yLjE1NjI1LTEwLjYyMTA5NCAxLjA3NDIxOS0yMy44OTg0MzcgMjkuMjgxMjUtMjEuODc4OTA2IDI2LjgyODEyNS0yMi43NDYwOTQgMjcuODMyMDMxLTExLjY0MDYyNSAxMy4yODUxNTctMzQuNDIxODc1IDE2LjY1MjM0NC00OS44MjQyMTktMi4wMTE3MThsLTg4LjI4MTI1LTEwNy4wMjczNDRoMTMxLjc4NTE1N2MzLjQxNzk2OSAxOS40MTc5NjkgMjAuMzk4NDM3IDM0LjIyMjY1NiA0MC43ODEyNSAzNC4yMjI2NTYgMjAuMzgyODEyIDAgMzcuMzU5Mzc1LTE0LjgwNDY4NyA0MC43NzczNDMtMzQuMjIyNjU2aDEzLjc2OTUzMmwtNDcuMTc1NzgyIDU3LjgwODU5NGMtMi42MjUgMy4yMzA0NjgtMi4xNTIzNDMgNy45ODgyODEgMS4wNzgxMjYgMTAuNjE3MTg3IDMuMjMwNDY4IDIuNjM2NzE5IDcuOTkyMTg3IDIuMTUyMzQ0IDEwLjYyODkwNi0xLjA2NjQwNmwxMDguMjQ2MDk0LTEzMi42NTIzNDRjNi41ODU5MzctOC4wNjI1Ljc2OTUzMS0yMC4xMjEwOTMtOS41NDI5NjktMjAuMTIxMDkzaC03Ni40MzM1OTRjMjEuNTMxMjUtMzIuOTE0MDYzIDUzLjA3ODEyNS01OS43MjY1NjMgOTIuMzgyODEzLTc1Ljg2MzI4MiAzLjg1OTM3NC0xLjU4MjAzMSA1LjY5OTIxOC01Ljk5MjE4NyA0LjExNzE4Ny05Ljg1MTU2MnptLTE3OC41IDE1Ni4wMzEyNWgtMTQ0LjM2NzE4N2wtNDUuNTQ2ODc2LTU1LjIxODc1aDI0NS45OTYwOTRjLTQuOTMzNTk0IDEwLjE0NDUzMS03LjczODI4MSAxOC4wNjY0MDYtOS4wNTQ2ODcgMjIuMTk5MjE4LTIyLjIzODI4MS0zLjQ1MzEyNC00Mi44NDM3NSAxMS40NTcwMzItNDcuMDI3MzQ0IDMzLjAxOTUzMnptNjUuNzUzOTA2IDBoLTUwLjIwNzAzMWM3LjcyMjY1Ni0yNC40NzI2NTYgNDIuNDg0Mzc1LTI0LjQ3MjY1NiA1MC4yMDcwMzEgMHptLTUwLjQxNDA2MiAxNS4wOTc2NTZoNTAuNjIxMDkzYy03LjIzMDQ2OCAyNS4zOTg0MzgtNDMuMzgyODEyIDI1LjQyMTg3NS01MC42MjEwOTMgMHptMTM3LjI0MjE4Ny03MC4zMTY0MDYtNDUuMDYyNSA1NS4yMTg3NWgtMjYuMjE4NzVjLTIuMzIwMzEyLTExLjk1NzAzMi05LjgwMDc4MS0yMi4wODU5MzgtMjAuMDIzNDM3LTI3Ljk4NDM3NSAxLjI4MTI1LTQuMDY2NDA3IDQuODI4MTI1LTE0LjIzODI4MSAxMS43Njk1MzEtMjcuMjM0Mzc1em0wIDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlBsYWNlczwvbGFiZWw+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjc3Muc2VsZWN0b3J9ICR7XHJcbiAgICAgICAgICBoaWdobGlnaHQuZXZlbnRzID8gY3NzLmhpZ2hsaWdodGVkIDogbnVsbFxyXG4gICAgICAgIH1gfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgIHNldEhpZ2hsaWdodCh7IGFsbDogZmFsc2UsIHBsYWNlczogZmFsc2UsIGV2ZW50czogdHJ1ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+XHJcbiAgICAgICAgICBzZXRIaWdobGlnaHQoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgZXZlbnRzOiBmYWxzZSB9KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoXCJzZWFyY2hUeXBlXCIsIFwiRVZFTlRTXCIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgaGVpZ2h0PVwiNTEycHRcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgIHdpZHRoPVwiNTEycHRcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgaWQ9XCJFVkVOVFNcIlxyXG4gICAgICAgICAgICBkPVwibTQ4MS45NDE0MDYgMzg2Ljc1MzkwNnYtMzAuMDU4NTk0aC00Mi41ODIwMzF2MTUuMDMxMjVoMjcuNTUwNzgxdjE1LjAyNzM0NGgtMTU1LjMwMDc4MXYtMTUuMDI3MzQ0aDExMi43MTg3NXYtMTUuMDMxMjVoLTkyLjY3OTY4N3YtMTE4Ljg4MjgxMmwxMzkuMjAzMTI0LTE1Ni45Mzc1YzQuODA4NTk0LTUuNDI1NzgxIDcuNDYwOTM4LTEyLjM5ODQzOCA3LjQ2MDkzOC0xOS42MzI4MTIgMC05LjQ5MjE4OC00LjU4OTg0NC0xOC40NzI2NTctMTIuMjc3MzQ0LTI0LjAyNzM0NC01LjA3ODEyNS0zLjY2Nzk2OS0xMS4wNzAzMTItNS42MDU0NjktMTcuMzI0MjE4LTUuNjA1NDY5LTguNTE1NjI2IDAtMTYuNjE3MTg4IDMuNjY0MDYzLTIyLjIzODI4MiAxMC4wNDY4NzVsLTMyLjcwNzAzMSAzNy4xNTIzNDQgMTEuMjgxMjUgOS45Mjk2ODcgMzIuNzA3MDMxLTM3LjE1MjM0M2MyLjc2NTYyNS0zLjE0NDUzMiA2Ljc2MTcxOS00Ljk0NTMxMyAxMC45NTcwMzItNC45NDUzMTMgMy4wNzQyMTggMCA2LjAyMzQzNy45NTMxMjUgOC41MjczNDMgMi43NjE3MTkgMy44Mzk4NDQgMi43NzM0MzcgNi4wNDI5NjkgNy4wODk4NDQgNi4wNDI5NjkgMTEuODM5ODQ0IDAgMy41NTQ2ODctMS4zMDQ2ODggNi45ODQzNzQtMy42NzE4NzUgOS42NjAxNTZsLTc3Ljc2NTYyNSA4Ny42Njc5NjgtMjEuNTM1MTU2LTE5LjAwMzkwNiAzNC44MDg1OTQtMzkuNTQ2ODc1LTExLjI4MTI1LTkuOTI5Njg3LTY3LjEwNTQ2OSA3Ni4yMzQzNzVoLTMxLjE3MTg3NXYtMTguMTMyODEzYzYuNzYxNzE4LTQuNjA5Mzc1IDEyLjM5NDUzMS0xMC43NjE3MTggMTYuMzk4NDM3LTE3LjkzNzVoOS4xNTIzNDRjMTUuMTkxNDA2IDAgMjcuNTUwNzgxLTEyLjM1OTM3NSAyNy41NTA3ODEtMjcuNTU0Njg3di0yMC4wMzkwNjNjMC00NS41NzgxMjUtMzcuMDgyMDMxLTgyLjY2MDE1Ni04Mi42NjAxNTYtODIuNjYwMTU2cy04Mi42NjAxNTYgMzcuMDgyMDMxLTgyLjY2MDE1NiA4Mi42NjAxNTZ2MjAuMDM5MDYzYzAgMTUuMTk1MzEyIDEyLjM1OTM3NSAyNy41NTQ2ODcgMjcuNTUwNzgxIDI3LjU1NDY4N2g5LjE1MjM0NGM0LjAwMzkwNiA3LjE3NTc4MiA5LjYzNjcxOSAxMy4zMjgxMjUgMTYuMzk4NDM3IDE3LjkzNzV2MTkuMjY5NTMybC0yNy4zNTkzNzUgNC40OTYwOTMgMi40NDE0MDcgMTQuODMyMDMxIDI5LjIxNDg0My00LjgwNDY4N2M2LjM0NzY1NyA3LjIwMzEyNSAxNS40NjQ4NDQgMTEuMzk0NTMxIDI1LjI2MTcxOSAxMS4zOTQ1MzEgMTAuMDgyMDMxIDAgMTkuNDYwOTM4LTQuNDI5Njg3IDI1LjgyNDIxOS0xMi4wMjM0MzdoNDEuNjk5MjE5bDI2Ljg1MTU2Mi0zMC41MDc4MTMgMjEuNDk2MDk0IDE4Ljk2ODc1LTU1LjI1MzkwNiA2Mi4yODkwNjN2MTI0LjU4OTg0M2gtMjAuMDM5MDYzdjMwLjA1ODU5NGgtODEuMTU2MjV2LTMwLjA1ODU5NGgtMjAuMDM5MDYzdi0xMTQuMjIyNjU2aC0xNS43NjE3MThsLTEzLjgwMDc4MiAzNy40NTcwMzItMjcuMzE2NDA2LTExLjA1NDY4OCAyMS4zMzU5MzgtNTguNDMzNTk0YzQuMDI3MzQ0LTExLjAyNzM0NCAxMy43MjI2NTYtMTkuMDU4NTk0IDI1LjMwNDY4Ny0yMC45NjA5MzdsMS41NDY4NzUtLjI1NzgxMy0yLjQzNzUtMTQuODI4MTI1LTEuNTQ2ODc1LjI1MzkwN2MtMTYuOTI5Njg3IDIuNzgxMjUtMzEuMTAxNTYyIDE0LjUyMzQzNy0zNi45ODQzNzUgMzAuNjM2NzE4bC01NS4yOTI5NjggMTUxLjQxMDE1NmgtNjAuMzcxMDk0djMwLjA1ODU5NGgtMzAuMDU4NTk0djEyNS4yNDYwOTRoOTQuNjgzNTk0di0xNS4wMzEyNWgtNzkuNjUyMzQ0di05NS4xODM1OTRoNDgxLjkzNzV2OTUuMTgzNTk0aC0zODcuMjUzOTA2djE1LjAzMTI1aDQwMi4yODUxNTZ2LTEyNS4yNDYwOTR6bS0xODguMzY3MTg3LTI5NS43MjI2NTYtMTUuODAwNzgxLTIwLjg5NDUzMWgtNTcuMTkxNDA3YzUuMTY3OTY5LTE0LjU3ODEyNSAxOS4wODk4NDQtMjUuMDQ2ODc1IDM1LjQxNzk2OS0yNS4wNDY4NzUgMjAuNzE4NzUgMCAzNy41NzQyMTkgMTYuODUxNTYyIDM3LjU3NDIxOSAzNy41NzAzMTJ6bTMwLjA1ODU5MyAxMS42Njc5NjljMCA2LjkwNjI1LTUuNjE3MTg3IDEyLjUyNzM0My0xMi41MjM0MzcgMTIuNTI3MzQzaC0zLjU2NjQwNmMuNjk1MzEyLTMuNDAyMzQzIDEuMDU4NTkzLTYuOTIxODc0IDEuMDU4NTkzLTEwLjUyMzQzNyAwIDAtLjAyMzQzNy0yMy43MTQ4NDQtLjA2MjUtMjQuNTQ2ODc1aDIuNTcwMzEzYzYuOTA2MjUgMCAxMi41MjM0MzcgNS42MTcxODggMTIuNTIzNDM3IDEyLjUyMzQzOHptLTY3LjYzMjgxMi04Ny42Njc5NjljMzIuMDExNzE5IDAgNTguODc4OTA2IDIyLjM1OTM3NSA2NS44NTU0NjkgNTIuMjc3MzQ0LTMuMzA0Njg4LTEuNDAyMzQ0LTYuOTM3NS0yLjE3OTY4OC0xMC43NDYwOTQtMi4xNzk2ODhoLTUuNTIzNDM3Yy03LjIzODI4Mi0yMC40MTAxNTYtMjYuNzI2NTYzLTM1LjA3MDMxMi00OS41ODU5MzgtMzUuMDcwMzEycy00Mi4zNDc2NTYgMTQuNjYwMTU2LTQ5LjU4NTkzOCAzNS4wNzAzMTJoLTUuNTIzNDM3Yy0zLjgwODU5NCAwLTcuNDQxNDA2Ljc3NzM0NC0xMC43NDYwOTQgMi4xNzk2ODggNi45NzY1NjMtMjkuOTE3OTY5IDMzLjg0Mzc1LTUyLjI3NzM0NCA2NS44NTU0NjktNTIuMjc3MzQ0em0tNTUuMTA5Mzc1IDEwMC4xOTUzMTJjLTYuOTA2MjUgMC0xMi41MjM0MzctNS42MjEwOTMtMTIuNTIzNDM3LTEyLjUyNzM0M3YtMTAuMDE5NTMxYzAtNi45MDYyNSA1LjYxNzE4Ny0xMi41MjM0MzggMTIuNTIzNDM3LTEyLjUyMzQzOGgyLjU3MDMxM2MtLjAzOTA2My44MzIwMzEtLjA2MjUgMjQuNTQ2ODc1LS4wNjI1IDI0LjU0Njg3NSAwIDMuNjAxNTYzLjM2MzI4MSA3LjEyMTA5NCAxLjA1ODU5MyAxMC41MjM0Mzd6bTE3LjUzNTE1Ni0xMC41MjM0Mzd2LTE5LjUzNTE1Nmg1MS44NzEwOTRsMjIuMDI3MzQ0IDI5LjEzNjcxOWMtNC4yNSAxNi4wODIwMzEtMTguOTIxODc1IDI3Ljk3MjY1Ni0zNi4zMjQyMTkgMjcuOTcyNjU2LTIwLjcxODc1IDAtMzcuNTc0MjE5LTE2Ljg1NTQ2OS0zNy41NzQyMTktMzcuNTc0MjE5em0zNy41NzQyMTkgNzMuNjQ0NTMxYy01LjcwNzAzMSAwLTEwLjk5NjA5NC0yLjU2MjUtMTQuNTI3MzQ0LTYuOTMzNTk0di0xNi4xNjQwNjJjNC42MTcxODggMS4zMjgxMjUgOS40ODgyODIgMi4wNTg1OTQgMTQuNTI3MzQ0IDIuMDU4NTk0czkuOTEwMTU2LS43MzA0NjkgMTQuNTI3MzQ0LTIuMDU4NTk0djE2LjE2NDA2MmMtMy41MzEyNSA0LjM3MTA5NC04LjgyMDMxMyA2LjkzMzU5NC0xNC41MjczNDQgNi45MzM1OTR6bS03NS42NDg0MzggMTA1LjYxNzE4OHY3Mi43MzA0NjhoLTI2Ljc5Njg3NHptLTQ3LjAwNzgxMi0uOTY0ODQ0IDI3LjI3NzM0NCAxMS4wMzkwNjItMjMuMDgyMDMyIDYyLjY1NjI1aC0zMS4xMDkzNzR6bS04OC4yNTM5MDYgODguNzI2NTYyaDE1NS4zMDA3ODF2MTUuMDI3MzQ0aC0xNTUuMzAwNzgxem0wIDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGlkPVwiRVZFTlRTXCJcclxuICAgICAgICAgICAgZD1cIm0xNzMuMzM5ODQ0IDQyMS44MjQyMTl2NTUuMTA1NDY5aDE2NS4zMjAzMTJ2LTU1LjEwNTQ2OXptMTAwLjE5NTMxMiAxNS4wMjczNDN2MjUuMDUwNzgyaC0zNS4wNzAzMTJ2LTI1LjA1MDc4MnptLTg1LjE2Nzk2OCAwaDM1LjA3MDMxMnYyNS4wNTA3ODJoLTM1LjA3MDMxMnptMTM1LjI2NTYyNCAyNS4wNTA3ODJoLTM1LjA3MDMxMnYtMjUuMDUwNzgyaDM1LjA3MDMxMnptMCAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBpZD1cIkVWRU5UU1wiXHJcbiAgICAgICAgICAgIGQ9XCJtMTQzLjI4MTI1IDQ3MS45MjE4NzVoLTE1LjAzMTI1di0xNS4wMzEyNWgxNS4wMzEyNXptMC0zMC4wNTg1OTRoLTE1LjAzMTI1di0xNS4wMzEyNWgxNS4wMzEyNXptMCAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBpZD1cIkVWRU5UU1wiXHJcbiAgICAgICAgICAgIGQ9XCJtMzgzLjc1IDQ3MS45MjE4NzVoLTE1LjAzMTI1di0xNS4wMzEyNWgxNS4wMzEyNXptMC0zMC4wNTg1OTRoLTE1LjAzMTI1di0xNS4wMzEyNWgxNS4wMzEyNXptMCAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBpZD1cIkVWRU5UU1wiXHJcbiAgICAgICAgICAgIGQ9XCJtMzAwLjU4NTkzOCAzMTQuMTEzMjgxaC0xNS4wMjczNDR2LTE1LjAyNzM0M2gxNS4wMjczNDR6bTAtMzAuMDU4NTkzaC0xNS4wMjczNDR2LTQwLjA3ODEyNmgxNS4wMjczNDR6bTAgMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+RXZlbnRzPC9sYWJlbD5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBTZWFyY2hTZWxlY3RvciB9IGZyb20gXCIuL1NlYXJjaFNlbGVjdG9yXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndoZW5cIjogXCJXaGVuSW5wdXRfd2hlbl9fMldHMjdcIixcblx0XCJ0b1wiOiBcIldoZW5JbnB1dF90b19fMmh3dHFcIixcblx0XCJmcm9tXCI6IFwiV2hlbklucHV0X2Zyb21fXzE1d0RXXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IElucHV0UHJvcHMgZnJvbSBcIi4uLy4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1doZW5JbnB1dC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IFBpY2s8SW5wdXRQcm9wcywgXCJzdGFydERhdGVcIiB8IFwiaGFuZGxlUXVlcnlEYXRlXCIgfCBcImVuZERhdGVcIj47XHJcblxyXG5leHBvcnQgY29uc3QgV2hlbklucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGhhbmRsZVF1ZXJ5RGF0ZSxcclxuICBzdGFydERhdGUsXHJcbiAgZW5kRGF0ZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2U6IChmaWVsZDogc3RyaW5nLCBkYXRlOiBEYXRlKSA9PiB2b2lkID0gKFxyXG4gICAgZmllbGQsXHJcbiAgICBkYXRlXHJcbiAgKSA9PiB7XHJcbiAgICByZXR1cm4gaGFuZGxlUXVlcnlEYXRlKGZpZWxkLCBkYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLndoZW59PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPldoZW4gYXJlIHlvdSBtZWV0aW5nPzwvbGFiZWw+XHJcbiAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjc3MuZnJvbX1cclxuICAgICAgICBwbGFjZWhvbGRlclRleHQ9e1wiU3RhcnQgdGltZVwifVxyXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cclxuICAgICAgICBtaW5EYXRlPXt0b2RheX1cclxuICAgICAgICBkYXRlRm9ybWF0PVwiUHBcIlxyXG4gICAgICAgIHNob3dUaW1lU2VsZWN0XHJcbiAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVEYXRlQ2hhbmdlKFwic3RhcnREYXRlXCIsIGRhdGUpfVxyXG4gICAgICA+PC9EYXRlUGlja2VyPlxyXG4gICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3NzLnRvfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyVGV4dD17XCJFbmQgVGltZVwifVxyXG4gICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgbWluRGF0ZT17c3RhcnREYXRlID8gc3RhcnREYXRlIDogdG9kYXl9XHJcbiAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGUgPyBlbmREYXRlIDogc3RhcnREYXRlfVxyXG4gICAgICAgIGRhdGVGb3JtYXQ9XCJQcFwiXHJcbiAgICAgICAgc2hvd1RpbWVTZWxlY3RcclxuICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZURhdGVDaGFuZ2UoXCJlbmREYXRlXCIsIGRhdGUpfVxyXG4gICAgICA+PC9EYXRlUGlja2VyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgV2hlbklucHV0IH0gZnJvbSBcIi4vV2hlbklucHV0XCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndoZXJlXCI6IFwiV2hlcmVJbnB1dF93aGVyZV9fMWkyMkRcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IElucHV0Q2hhbmdlIH0gZnJvbSBcIi4uLy4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgSW5wdXRQcm9wcyBmcm9tIFwiLi4vLi4vU2VhcmNoQm94XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vV2hlcmVJbnB1dC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IFBpY2s8SW5wdXRQcm9wcywgXCJsb2NhdGlvblwiIHwgXCJoYW5kbGVJbnB1dENoYW5nZVwiIHwgXCJyYWRpdXNcIj47XHJcblxyXG5leHBvcnQgY29uc3QgV2hlcmVJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBsb2NhdGlvbixcclxuICBoYW5kbGVJbnB1dENoYW5nZSxcclxuICByYWRpdXMsXHJcbn0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2U6IChcclxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+LFxyXG4gICAgZmllbGQ6IHN0cmluZ1xyXG4gICkgPT4gdm9pZCA9IChldmVudCwgZmllbGQpID0+IHtcclxuICAgIHJldHVybiBoYW5kbGVJbnB1dENoYW5nZShcclxuICAgICAgZmllbGQsXHJcbiAgICAgIChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy53aGVyZX0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+V2hlcmUgYXJlIHlvdSBtZWV0aW5nPzwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkxvcyBBbmdlbGVzIC8gOTAwMTVcIlxyXG4gICAgICAgIHZhbHVlPXtsb2NhdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIFwibG9jYXRpb25cIil9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxzZWxlY3RcclxuICAgICAgICBuYW1lPVwicmFkaXVzXCJcclxuICAgICAgICB2YWx1ZT17cmFkaXVzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgXCJyYWRpdXNcIil9XHJcbiAgICAgID5cclxuICAgICAgICA8b3B0Z3JvdXA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+UmFkaXVzLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTYxMFwiPldpdGhpbiAxIG1pbGU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4MDUwXCI+V2l0aGluIDUgbWlsZXM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNjEwMFwiPldpdGhpbiAxMCBtaWxlczwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwMjUwXCI+V2l0aGluIDI1IG1pbGVzPC9vcHRpb24+XHJcbiAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBXaGVyZUlucHV0IH0gZnJvbSBcIi4vV2hlcmVJbnB1dFwiO1xyXG4iLCJleHBvcnQgeyBTZWFyY2hTZWxlY3RvciB9IGZyb20gXCIuL1NlYXJjaFNlbGVjdG9yXCI7XHJcbmV4cG9ydCB7IFdoZXJlSW5wdXQgfSBmcm9tIFwiLi9XaGVyZUlucHV0XCI7XHJcbmV4cG9ydCB7IFdoZW5JbnB1dCB9IGZyb20gXCIuL1doZW5JbnB1dFwiO1xyXG5leHBvcnQgeyBFdmVudHNJbnB1dCB9IGZyb20gXCIuL0V2ZW50c0lucHV0XCI7XHJcbmV4cG9ydCB7IFBsYWNlc0lucHV0IH0gZnJvbSBcIi4vUGxhY2VzSW5wdXRcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoQm94XCI6IFwiU2VhcmNoQm94X3NlYXJjaEJveF9fM2F3T1NcIixcblx0XCJzZWFyY2hCdXR0b25cIjogXCJTZWFyY2hCb3hfc2VhcmNoQnV0dG9uX18yb2twaVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgU2VhcmNoU2VsZWN0b3IsXHJcbiAgV2hlcmVJbnB1dCxcclxuICBXaGVuSW5wdXQsXHJcbiAgRXZlbnRzSW5wdXQsXHJcbiAgUGxhY2VzSW5wdXQsXHJcbn0gZnJvbSBcIi4vUGFydHNcIjtcclxuaW1wb3J0IFNjaGVkdWxlR3JpZCBmcm9tIFwiLi9Mb2dpYy9TY2hlZHVsZUdyaWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VHcmlkRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vc3RhdGUvU2VhcmNoR3JpZENvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlU3F1YXJlc0Rpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3N0YXRlL0dyaWRTcXVhcmVzQ29udGV4dFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1NlYXJjaEJveC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgSW5wdXRDaGFuZ2UgPSAoa2V5OiBzdHJpbmcsIGlucHV0OiBzdHJpbmcgfCBEYXRlKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIElucHV0UHJvcHMge1xyXG4gIGhhbmRsZUlucHV0Q2hhbmdlOiBJbnB1dENoYW5nZTtcclxuICBzZWFyY2hUeXBlOiBzdHJpbmc7XHJcbiAgcGxhY2VUeXBlOiBzdHJpbmc7XHJcbiAgcmFkaXVzOiBzdHJpbmc7XHJcbiAgZXZlbnRzQ2F0ZWdvcnk6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIHN0YXJ0RGF0ZTogRGF0ZTtcclxuICBlbmREYXRlOiBEYXRlO1xyXG4gIGhhbmRsZVF1ZXJ5RGF0ZTogKGtleTogc3RyaW5nLCBkYXRlOiBEYXRlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFF1ZXJ5IHtcclxuICBzZWFyY2hUeXBlOiBzdHJpbmc7XHJcbiAgZXZlbnRzQ2F0ZWdvcnk6IHN0cmluZztcclxuICByYWRpdXM6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIHBsYWNlVHlwZTogc3RyaW5nO1xyXG4gIGVuZERhdGU6IERhdGU7XHJcbiAgc3RhcnREYXRlOiBEYXRlO1xyXG4gIHN0YXJ0Rm9ybWF0dGVkOiBzdHJpbmc7XHJcbiAgZW5kRm9ybWF0dGVkOiBzdHJpbmc7XHJcbiAgdW5peFN0YXJ0RGF0ZTogbnVtYmVyO1xyXG4gIHVuaXhFbmREYXRlOiBudW1iZXI7XHJcbiAgdGlja2V0TWFzdGVyQ2F0ZWdvcmllczogc3RyaW5nO1xyXG4gIHllbHBDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hCb3g6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZTxTZWFyY2hRdWVyeT4oe1xyXG4gICAgc2VhcmNoVHlwZTogXCJBTExcIixcclxuICAgIGV2ZW50c0NhdGVnb3J5OiBcIlwiLFxyXG4gICAgcmFkaXVzOiBcIlwiLFxyXG4gICAgbG9jYXRpb246IFwiXCIsXHJcbiAgICBlbmREYXRlOiBudWxsLFxyXG4gICAgc3RhcnREYXRlOiBudWxsLFxyXG4gICAgcGxhY2VUeXBlOiBcIlwiLFxyXG4gICAgc3RhcnRGb3JtYXR0ZWQ6IFwiXCIsXHJcbiAgICBlbmRGb3JtYXR0ZWQ6IFwiXCIsXHJcbiAgICB1bml4U3RhcnREYXRlOiBudWxsLFxyXG4gICAgdW5peEVuZERhdGU6IG51bGwsXHJcbiAgICB0aWNrZXRNYXN0ZXJDYXRlZ29yaWVzOiBcIlwiLFxyXG4gICAgeWVscENhdGVnb3JpZXM6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNxdWFyZXNEaXNwYXRjaCA9IHVzZVNxdWFyZXNEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGdyaWREaXNwYXRjaCA9IHVzZUdyaWREaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRlc0lucHV0OiBTY2hlZHVsZUdyaWQgPSBuZXcgU2NoZWR1bGVHcmlkKFxyXG4gICAgICBzZWFyY2hRdWVyeS51bml4U3RhcnREYXRlLFxyXG4gICAgICBzZWFyY2hRdWVyeS51bml4RW5kRGF0ZVxyXG4gICAgKTtcclxuICAgIG5ld0RhdGVzSW5wdXQuc2V0R3JpZCgpO1xyXG5cclxuICAgIHNxdWFyZXNEaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX1NRVUFSRVNcIixcclxuICAgICAgcGF5bG9hZDogeyBudW1iZXJPZlNxdWFyZXM6IG5ld0RhdGVzSW5wdXQubnVtYmVyb2ZTcXVhcmVzIH0sXHJcbiAgICB9KTtcclxuICAgIGdyaWREaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFwiQUREX0dSSURfVEVNUExBVEVcIixcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGhvdXJTdHJpbmdzOiBuZXdEYXRlc0lucHV0LmhvdXJTdHJpbmdzLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZTogbmV3RGF0ZXNJbnB1dC50ZW1wbGF0ZUFyZWFzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tGaWVsZHNEaXNwbGF5TGluazogKHNlYXJjaFR5cGU6IHN0cmluZykgPT4gSlNYLkVsZW1lbnQgPSAoXHJcbiAgICBzZWFyY2hUeXBlXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxvY2F0aW9uLFxyXG4gICAgICByYWRpdXMsXHJcbiAgICAgIHBsYWNlVHlwZSxcclxuICAgICAgc3RhcnRGb3JtYXR0ZWQsXHJcbiAgICAgIGVuZEZvcm1hdHRlZCxcclxuICAgICAgdW5peFN0YXJ0RGF0ZSxcclxuICAgICAgdW5peEVuZERhdGUsXHJcbiAgICAgIGV2ZW50c0NhdGVnb3J5LFxyXG4gICAgfSA9IHNlYXJjaFF1ZXJ5O1xyXG4gICAgc3dpdGNoIChzZWFyY2hUeXBlKSB7XHJcbiAgICAgIGNhc2UgXCJBTExcIjpcclxuICAgICAgICByZXR1cm4gc2VhcmNoUXVlcnkubG9jYXRpb24gIT09IFwiXCIgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnN0YXJ0RGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkucmFkaXVzICE9PSBcIlwiICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5lbmREYXRlICE9PSBudWxsICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5wbGFjZVR5cGUgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaC9bcXVlcmllZF1cIixcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVHlwZSxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICBlbmRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICB1bml4RW5kRGF0ZSxcclxuICAgICAgICAgICAgICAgIHVuaXhTdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICBldmVudHNDYXRlZ29yeSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhcz17YC9zZWFyY2gvc2VhcmNoVHlwZT1BTEwrbG9jYXRpb249JHtzZWFyY2hRdWVyeS5sb2NhdGlvbn0rcmFkaXVzPSR7c2VhcmNoUXVlcnkucmFkaXVzfStwbGFjZVR5cGU9JHtzZWFyY2hRdWVyeS5wbGFjZVR5cGV9K3N0YXJ0Rm9ybWF0dGVkPSR7c2VhcmNoUXVlcnkuc3RhcnRGb3JtYXR0ZWR9K2VuZEZvcm1hdHRlZD0ke3NlYXJjaFF1ZXJ5LmVuZEZvcm1hdHRlZH0rdW5peFN0YXJ0RGF0ZT0ke3NlYXJjaFF1ZXJ5LnVuaXhTdGFydERhdGV9K3VuaXhFbmREYXRlPSR7c2VhcmNoUXVlcnkudW5peEVuZERhdGV9K2V2ZW50c0NhdGVnb3J5PSR7c2VhcmNoUXVlcnkuZXZlbnRzQ2F0ZWdvcnl9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwicGxlYXNlIGZpbGwgb3V0IG1pc3NpbmcgZmllbGRzXCIpfT5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSBcIlBMQUNFU1wiOlxyXG4gICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sb2NhdGlvbiAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkuc3RhcnREYXRlICE9PSBudWxsICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5yYWRpdXMgIT09IFwiXCIgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LmVuZERhdGUgIT09IG51bGwgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnBsYWNlVHlwZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvc2VhcmNoL1txdWVyaWVkXVwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUeXBlLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBwbGFjZVR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydEZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIGVuZEZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhcz17YC9zZWFyY2gvc2VhcmNoVHlwZT1QTEFDRVMrbG9jYXRpb249JHtzZWFyY2hRdWVyeS5sb2NhdGlvbn0rcmFkaXVzPSR7c2VhcmNoUXVlcnkucmFkaXVzfStwbGFjZVR5cGU9JHtzZWFyY2hRdWVyeS5wbGFjZVR5cGV9K3N0YXJ0Rm9ybWF0dGVkPSR7c2VhcmNoUXVlcnkuc3RhcnRGb3JtYXR0ZWR9K2VuZEZvcm1hdHRlZD0ke3NlYXJjaFF1ZXJ5LmVuZEZvcm1hdHRlZH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0gb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJwbGVhc2UgZmlsbCBvdXQgbWlzc2luZyBmaWVsZHNcIil9PlxyXG4gICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjYXNlIFwiRVZFTlRTXCI6XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5LmxvY2F0aW9uICE9PSBcIlwiICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5zdGFydERhdGUgIT09IG51bGwgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnJhZGl1cyAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkuZW5kRGF0ZSAhPT0gbnVsbCA/IChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvc2VhcmNoL1txdWVyaWVkXVwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUeXBlLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBzdGFydEZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIGVuZEZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIHVuaXhTdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICB1bml4RW5kRGF0ZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50c0NhdGVnb3J5LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGFzPXtgL3NlYXJjaC9zZWFyY2hUeXBlPUVWRU5UUytsb2NhdGlvbj0ke3NlYXJjaFF1ZXJ5LmxvY2F0aW9ufStyYWRpdXM9JHtzZWFyY2hRdWVyeS5yYWRpdXN9K3N0YXJ0Rm9ybWF0dGVkPSR7c2VhcmNoUXVlcnkuc3RhcnRGb3JtYXR0ZWR9K2VuZEZvcm1hdHRlZD0ke3NlYXJjaFF1ZXJ5LmVuZEZvcm1hdHRlZH0rdW5peFN0YXJ0RGF0ZT0ke3NlYXJjaFF1ZXJ5LnVuaXhTdGFydERhdGV9K3VuaXhFbmREYXRlPSR7c2VhcmNoUXVlcnkudW5peEVuZERhdGV9K2V2ZW50c0NhdGVnb3J5PSR7c2VhcmNoUXVlcnkuZXZlbnRzQ2F0ZWdvcnl9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwicGxlYXNlIGZpbGwgb3V0IG1pc3NpbmcgZmllbGRzXCIpfT5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc2VhcmNoUXVlcnkubG9jYXRpb24gIT09IFwiXCIgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnN0YXJ0RGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkucmFkaXVzICE9PSBcIlwiICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5lbmREYXRlICE9PSBudWxsICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5wbGFjZVR5cGUgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaC9bcXVlcmllZF1cIixcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVHlwZSxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICBlbmRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICB1bml4RW5kRGF0ZSxcclxuICAgICAgICAgICAgICAgIHVuaXhTdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICBldmVudHNDYXRlZ29yeSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhcz17YC9zZWFyY2gvc2VhcmNoVHlwZT1BTEwrbG9jYXRpb249JHtzZWFyY2hRdWVyeS5sb2NhdGlvbn0rcmFkaXVzPSR7c2VhcmNoUXVlcnkucmFkaXVzfStwbGFjZVR5cGU9JHtzZWFyY2hRdWVyeS5wbGFjZVR5cGV9K3N0YXJ0Rm9ybWF0dGVkPSR7c2VhcmNoUXVlcnkuc3RhcnRGb3JtYXR0ZWR9K2VuZEZvcm1hdHRlZD0ke3NlYXJjaFF1ZXJ5LmVuZEZvcm1hdHRlZH0rdW5peFN0YXJ0RGF0ZT0ke3NlYXJjaFF1ZXJ5LnVuaXhTdGFydERhdGV9K3VuaXhFbmREYXRlPSR7c2VhcmNoUXVlcnkudW5peEVuZERhdGV9K2V2ZW50c0NhdGVnb3J5PSR7c2VhcmNoUXVlcnkuZXZlbnRzQ2F0ZWdvcnl9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19PlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwicGxlYXNlIGZpbGwgb3V0IG1pc3NpbmcgZmllbGRzXCIpfT5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlOiBJbnB1dENoYW5nZSA9IChrZXksIGlucHV0KSA9PiB7XHJcbiAgICByZXR1cm4gc2V0U2VhcmNoUXVlcnkoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2tleV06IGlucHV0LFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVF1ZXJ5RGF0ZTogKGtleTogc3RyaW5nLCBkYXRlOiBEYXRlKSA9PiB2b2lkID0gKGtleSwgZGF0ZSkgPT4ge1xyXG4gICAgaWYgKGtleSA9PT0gXCJzdGFydERhdGVcIikge1xyXG4gICAgICBjb25zdCB1bml4U3RhcnREYXRlOiBudW1iZXIgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICBjb25zdCB0aW1lT2ZmU2V0OiBudW1iZXIgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDtcclxuICAgICAgY29uc3QgbG9jYWxTdGFydFRpbWVJU086IHN0cmluZyA9IG5ldyBEYXRlKFxyXG4gICAgICAgICh1bml4U3RhcnREYXRlIC0gdGltZU9mZlNldCkgKiAxMDAwXHJcbiAgICAgICkudG9JU09TdHJpbmcoKTtcclxuICAgICAgY29uc3QgbG9jYWxTdGFydFRpbWVJU09Gb3JtYXR0ZWQ6IHN0cmluZyA9IGAke2xvY2FsU3RhcnRUaW1lSVNPLnN1YnN0cmluZyhcclxuICAgICAgICAwLFxyXG4gICAgICAgIDE5XHJcbiAgICAgICl9WmA7XHJcblxyXG4gICAgICByZXR1cm4gc2V0U2VhcmNoUXVlcnkoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFtrZXldOiBkYXRlLFxyXG4gICAgICAgIHVuaXhTdGFydERhdGUsXHJcbiAgICAgICAgc3RhcnRGb3JtYXR0ZWQ6IGxvY2FsU3RhcnRUaW1lSVNPRm9ybWF0dGVkLFxyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB1bml4RW5kRGF0ZTogbnVtYmVyID0gTWF0aC5yb3VuZChuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgICAgY29uc3QgdGltZU9mZlNldDogbnVtYmVyID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjA7XHJcbiAgICAgIGNvbnN0IGxvY2FsRW5kVGltZUlTTzogc3RyaW5nID0gbmV3IERhdGUoXHJcbiAgICAgICAgKHVuaXhFbmREYXRlIC0gdGltZU9mZlNldCkgKiAxMDAwXHJcbiAgICAgICkudG9JU09TdHJpbmcoKTtcclxuICAgICAgY29uc3QgbG9jYWxFbmRUaW1lSVNPRm9ybWF0dGVkOiBzdHJpbmcgPSBgJHtsb2NhbEVuZFRpbWVJU08uc3Vic3RyaW5nKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMTlcclxuICAgICAgKX1aYDtcclxuICAgICAgcmV0dXJuIHNldFNlYXJjaFF1ZXJ5KChzdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBba2V5XTogZGF0ZSxcclxuICAgICAgICB1bml4RW5kRGF0ZSxcclxuICAgICAgICBlbmRGb3JtYXR0ZWQ6IGxvY2FsRW5kVGltZUlTT0Zvcm1hdHRlZCxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnNlYXJjaEJveH0+XHJcbiAgICAgIDxTZWFyY2hTZWxlY3RvclxyXG4gICAgICAgIHNlYXJjaFR5cGU9e3NlYXJjaFF1ZXJ5LnNlYXJjaFR5cGV9XHJcbiAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICA+PC9TZWFyY2hTZWxlY3Rvcj5cclxuICAgICAgPFdoZXJlSW5wdXRcclxuICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgbG9jYXRpb249e3NlYXJjaFF1ZXJ5LmxvY2F0aW9ufVxyXG4gICAgICAgIHJhZGl1cz17c2VhcmNoUXVlcnkucmFkaXVzfVxyXG4gICAgICA+PC9XaGVyZUlucHV0PlxyXG4gICAgICA8V2hlbklucHV0XHJcbiAgICAgICAgaGFuZGxlUXVlcnlEYXRlPXtoYW5kbGVRdWVyeURhdGV9XHJcbiAgICAgICAgc3RhcnREYXRlPXtzZWFyY2hRdWVyeS5zdGFydERhdGV9XHJcbiAgICAgICAgZW5kRGF0ZT17c2VhcmNoUXVlcnkuZW5kRGF0ZX1cclxuICAgICAgPjwvV2hlbklucHV0PlxyXG4gICAgICA8RXZlbnRzSW5wdXRcclxuICAgICAgICBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgZXZlbnRzQ2F0ZWdvcnk9e3NlYXJjaFF1ZXJ5LmV2ZW50c0NhdGVnb3J5fVxyXG4gICAgICA+PC9FdmVudHNJbnB1dD5cclxuICAgICAgPFBsYWNlc0lucHV0XHJcbiAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgIHBsYWNlVHlwZT17c2VhcmNoUXVlcnkucGxhY2VUeXBlfVxyXG4gICAgICA+PC9QbGFjZXNJbnB1dD5cclxuXHJcbiAgICAgIHtjaGVja0ZpZWxkc0Rpc3BsYXlMaW5rKHNlYXJjaFF1ZXJ5LnNlYXJjaFR5cGUpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgU2VhcmNoQm94IH0gZnJvbSBcIi4vU2VhcmNoQm94XCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaEljb25cIjogXCJTZWFyY2hJY29uX3NlYXJjaEljb25fXzFvZzBmXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9TZWFyY2hJY29uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IE5hdlN0YXRlIH0gZnJvbSBcIi4uL05hdlwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBkaXNwbGF5U2VhcmNoQm94OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxOYXZTdGF0ZT4+O1xyXG4gIHNlYXJjaEJveDogTmF2U3RhdGU7XHJcbiAgc3RvcFdpbmRvd1Njcm9sbDogKGFyZzogYm9vbGVhbikgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJY29uOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIHNlYXJjaEJveCxcclxuICBkaXNwbGF5U2VhcmNoQm94LFxyXG4gIHN0b3BXaW5kb3dTY3JvbGwsXHJcbn0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDbGljazogKCkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgIGlmIChzZWFyY2hCb3guZGlzcGxheSkge1xyXG4gICAgICByZXR1cm4gZGlzcGxheVNlYXJjaEJveCh7IGRpc3BsYXk6IGZhbHNlIH0pLCBzdG9wV2luZG93U2Nyb2xsKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkaXNwbGF5U2VhcmNoQm94KHsgZGlzcGxheTogdHJ1ZSB9KSwgc3RvcFdpbmRvd1Njcm9sbCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE4MC4xOCAxODAuMThcIlxyXG4gICAgICBjbGFzc05hbWU9e2Nzcy5zZWFyY2hJY29ufVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgID5cclxuICAgICAgPGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgIDxnIGlkPVwiTGF5ZXJfMS0yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0yMS4wOSwyMS4wOWE3Miw3MiwwLDAsMCw5NS4wNiwxMDcuNzlsNTEuMzEsNTEuMywxMi43Mi0xMi43Mi01MS4zLTUxLjMxQTcyLDcyLDAsMCwwLDIxLjA5LDIxLjA5Wm04OS4wOSw4OS4wOWE1NCw1NCwwLDEsMSwwLTc2LjM3QTU0LDU0LDAsMCwxLDExMC4xOCwxMTAuMThaXCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwiLi9TZWFyY2hJY29uXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRlc2NyaXB0aW9uV3JhcHBlclwiOiBcIkV2ZW50RGVzY3JpcHRpb25fZGVzY3JpcHRpb25XcmFwcGVyX18xNDBJR1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiRXZlbnREZXNjcmlwdGlvbl9kZXNjcmlwdGlvbl9fMWtobmtcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0V2ZW50RGVzY3JpcHRpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFdmVudERlc2NyaXB0aW9uOiBSZWFjdC5GQzx7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfT4gPSAoe1xyXG4gIGRlc2NyaXB0aW9uLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgdW53YW50ZWRDaGFyYWN0ZXJzOiBSZWdFeHAgPSAvWypdL2c7XHJcblxyXG4gIHJldHVybiBkZXNjcmlwdGlvbiA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZGVzY3JpcHRpb25XcmFwcGVyfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtjc3MuZGVzY3JpcHRpb259PlxyXG4gICAgICAgIHtkZXNjcmlwdGlvbi5zZWFyY2godW53YW50ZWRDaGFyYWN0ZXJzKSAhPT0gLTFcclxuICAgICAgICAgID8gZGVzY3JpcHRpb24ucmVwbGFjZSh1bndhbnRlZENoYXJhY3RlcnMsIFwiXCIpXHJcbiAgICAgICAgICA6IGRlc2NyaXB0aW9ufVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApIDogbnVsbDtcclxufTtcclxuIiwiZXhwb3J0IHsgRXZlbnREZXNjcmlwdGlvbiB9IGZyb20gXCIuL0V2ZW50RGVzY3JpcHRpb25cIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXZlbnRQcmljZVwiOiBcIkV2ZW50UHJpY2VHZW5yZV9ldmVudFByaWNlX18xSEtUS1wiLFxuXHRcImdlbnJlXCI6IFwiRXZlbnRQcmljZUdlbnJlX2dlbnJlX18xNUhKb1wiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vRXZlbnRQcmljZUdlbnJlLm1vZHVsZS5zY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBFdmVudFByaWNlR2VucmU6IFJlYWN0LkZDPHtcclxuICB2ZW51ZTogc3RyaW5nO1xyXG4gIHByaWNlOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgZ2VucmU6IGFueSB8IG51bGw7XHJcbn0+ID0gKHsgdmVudWUsIHByaWNlLCBzb3VyY2UsIGdlbnJlIH0pID0+IHtcclxuICBjb25zdCBwYXJzZVByaWNlOiAoKSA9PiBzdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xyXG4gICAgICBjYXNlIFwieWVscFwiOlxyXG4gICAgICAgIGlmICghcHJpY2UpIHJldHVybiBcIkNoZWNrIGxpbmsgZm9yIHByaWNlLlwiO1xyXG4gICAgICAgIHJldHVybiBgU3RhcnRpbmcgYXQgJCR7cHJpY2V9LjAwYDtcclxuICAgICAgY2FzZSBcInRpY2tldG1hc3RlclwiOlxyXG4gICAgICAgIGlmICghcHJpY2UgfHwgIXByaWNlLm1pbikgcmV0dXJuIFwiQ2hlY2sgbGluayBmb3IgcHJpY2VcIjtcclxuICAgICAgICBjb25zdCB0cnVlUHJpY2U6ICgpID0+IHN0cmluZyA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChwcmljZS5taW4gJSAxID09PSAwKSByZXR1cm4gYFN0YXJ0aW5nIGF0ICQke3ByaWNlLm1pbn0uMDBgO1xyXG4gICAgICAgICAgY29uc3QgcHJpY2VTdHJpbmc6IHN0cmluZyA9IHByaWNlLm1pbi50b1N0cmluZygpO1xyXG4gICAgICAgICAgY29uc3QgZGVjaW1hbEluZGV4OiBudW1iZXIgPSBwcmljZVN0cmluZy5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAgIGNvbnN0IGNlbnRzOiBzdHJpbmcgPSBwcmljZVN0cmluZy5zdWJzdHJpbmcoZGVjaW1hbEluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGBTdGFydGluZyBhdCAkJHtwcmljZVN0cmluZy5zdWJzdHJpbmcoMCwgZGVjaW1hbEluZGV4KX0uJHtcclxuICAgICAgICAgICAgY2VudHMubGVuZ3RoID4gMSA/IGNlbnRzIDogYCR7Y2VudHN9MGBcclxuICAgICAgICAgIH1gO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWVQcmljZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldEdlbnJlOiAoKSA9PiBKU1guRWxlbWVudCB8IG51bGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoc291cmNlID09PSBcInllbHBcIikge1xyXG4gICAgICBpZiAoZ2VucmUuaW5kZXhPZihcIi1cIikgIT09IC0xIHx8IGdlbnJlLmluZGV4T2YoXCIgXCIpICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlclNwbGl0OiBzdHJpbmcgPSBnZW5yZS5pbmRleE9mKFwiIFwiKSAhPT0gLTEgPyBcIiBcIiA6IFwiLVwiO1xyXG4gICAgICAgIGNvbnN0IHNwbGl0dGVkOiBzdHJpbmdbXSA9IGdlbnJlLnNwbGl0KGNoYXJhY3RlclNwbGl0KTtcclxuICAgICAgICBjb25zdCB1cHBlckNhc2U6IHN0cmluZ1tdID0gc3BsaXR0ZWQubWFwKFxyXG4gICAgICAgICAgKHdvcmQpID0+IGAke3dvcmQuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCl9JHt3b3JkLnN1YnN0cmluZygxKX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjc3MuZ2VucmV9Pntg4oCiICR7dXBwZXJDYXNlLmpvaW4oXCIgXCIpfWB9PC9zcGFuPjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuZ2VucmV9XHJcbiAgICAgICAgICA+e2DigKIgJHtnZW5yZVswXS50b1VwcGVyQ2FzZSgpfSR7Z2VucmUuc3Vic3RyaW5nKDEpfWB9PC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZ2VucmUpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IHNlZ21lbnRTdHJpbmc6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBsZXQgZ2VucmVTdHJpbmc6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgZ2VucmVbMF0uc2VnbWVudCA/IChzZWdtZW50U3RyaW5nID0gZ2VucmVbMF0uc2VnbWVudC5uYW1lKSA6IG51bGw7XHJcbiAgICBnZW5yZVswXVtcImdlbnJlXCJdID8gKGdlbnJlU3RyaW5nID0gZ2VucmVbMF1bXCJnZW5yZVwiXS5uYW1lKSA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3MuZ2VucmV9Pntg4oCiICR7c2VnbWVudFN0cmluZ30gJHtnZW5yZVN0cmluZ31gfTwvc3Bhbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZXZlbnRQcmljZX0+XHJcbiAgICAgIDxzcGFuPntwYXJzZVByaWNlKCl9PC9zcGFuPlxyXG4gICAgICB7c2V0R2VucmUoKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IEV2ZW50UHJpY2VHZW5yZSB9IGZyb20gXCIuL0V2ZW50UHJpY2VHZW5yZVwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aW1lc1wiOiBcIkV2ZW50VGltZXNWZW51ZV90aW1lc19fMUJjdGFcIixcblx0XCJ2ZW51ZVwiOiBcIkV2ZW50VGltZXNWZW51ZV92ZW51ZV9fMWVwMW1cIlxufTtcbiIsImltcG9ydCB7IGNyZWF0ZVNlY3VyZVNlcnZlciB9IGZyb20gXCJodHRwMlwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9FdmVudFRpbWVzVmVudWUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBFdmVudFRpbWVzVmVudWU6IFJlYWN0LkZDPHtcclxuICBzdGFydFRpbWU6IHN0cmluZztcclxuICBlbmRUaW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIHZlbnVlOiBzdHJpbmcgfCBudWxsO1xyXG59PiA9ICh7IHN0YXJ0VGltZSwgZW5kVGltZSwgc291cmNlLCB2ZW51ZSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGxheVZlbnVlOiAoKSA9PiBKU1guRWxlbWVudCB8IG51bGwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdmVudWUgPyA8c3BhbiBjbGFzc05hbWU9e2Nzcy52ZW51ZX0+e2DigKIgJHt2ZW51ZX1gfTwvc3Bhbj4gOiBudWxsO1xyXG4gIH07XHJcbiAgY29uc3QgcGFyc2VZZWxwVGltZXM6ICgpID0+IEpTWC5FbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeWVscFN0YXJ0T2JqZWN0OiBEYXRlID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcclxuICAgIGNvbnN0IHllbHBFbmRPYmplY3Q6IERhdGUgPSBuZXcgRGF0ZShlbmRUaW1lKTtcclxuXHJcbiAgICAvL3llbHAgc3RhcnQgdGltZVxyXG4gICAgY29uc3QgeWVscFN0YXJ0VGltZTogc3RyaW5nID0geWVscFN0YXJ0T2JqZWN0LnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gICAgY29uc3Qgc3RhcnRBbVBtOiBzdHJpbmcgPSB5ZWxwU3RhcnRUaW1lLnN1YnN0cmluZyh5ZWxwU3RhcnRUaW1lLmxlbmd0aCAtIDIpO1xyXG4gICAgY29uc3Qgc3RhcnRXaXRob3V0U2Vjb25kczogc3RyaW5nID0geWVscFN0YXJ0VGltZS5zdWJzdHJpbmcoXHJcbiAgICAgIDAsXHJcbiAgICAgIHllbHBTdGFydFRpbWUubGVuZ3RoIC0gNlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB5ZWxwU3RhcnRGb3JtYXR0ZWRUaW1lOiBzdHJpbmcgPSBgJHtzdGFydFdpdGhvdXRTZWNvbmRzfSAke3N0YXJ0QW1QbX1gO1xyXG5cclxuICAgIC8veWVscCBzdGFydCBkYXRlXHJcblxyXG4gICAgY29uc3QgeWVscFN0YXJ0RGF0ZTogc3RyaW5nID0gYCR7eWVscFN0YXJ0T2JqZWN0LnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICB7IHdlZWtkYXk6IFwibG9uZ1wiIH1cclxuICAgICl9ICR7eWVscFN0YXJ0T2JqZWN0LnRvTG9jYWxlRGF0ZVN0cmluZygpfWA7XHJcblxyXG4gICAgLy95ZWxwIGVuZCB0aW1lXHJcblxyXG4gICAgY29uc3QgeWVscEVuZFRpbWU6IHN0cmluZyA9IHllbHBFbmRPYmplY3QudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIik7XHJcbiAgICBjb25zdCBlbmRBbVBtOiBzdHJpbmcgPSB5ZWxwRW5kVGltZS5zdWJzdHJpbmcoeWVscEVuZFRpbWUubGVuZ3RoIC0gMik7XHJcbiAgICBjb25zdCBlbmRXaXRob3V0U2Vjb25kczogc3RyaW5nID0geWVscEVuZFRpbWUuc3Vic3RyaW5nKFxyXG4gICAgICAwLFxyXG4gICAgICB5ZWxwRW5kVGltZS5sZW5ndGggLSA2XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHllbHBFbmRGb3JtYXR0ZWRUaW1lOiBzdHJpbmcgPSBgJHtlbmRXaXRob3V0U2Vjb25kc30gJHtlbmRBbVBtfWA7XHJcblxyXG4gICAgLy95ZWxwIGVuZCBEYXRlXHJcblxyXG4gICAgY29uc3QgeWVscEVuZERhdGU6IHN0cmluZyA9IHllbHBFbmRPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIDxwPntgJHt5ZWxwU3RhcnREYXRlfSAke3llbHBTdGFydEZvcm1hdHRlZFRpbWV9YH08L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhcnNlVGlja2V0TWFzdGVyVGltZTogKCkgPT4gSlNYLkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aWNrZXRtYXN0ZXJTdGFydE9iamVjdDogRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0VGltZSk7XHJcblxyXG4gICAgY29uc3QgdGlja2V0bWFzdGVyU3RhcnRUaW1lOiBzdHJpbmcgPSB0aWNrZXRtYXN0ZXJTdGFydE9iamVjdC50b0xvY2FsZVRpbWVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0YXJ0QW1QbTogc3RyaW5nID0gdGlja2V0bWFzdGVyU3RhcnRUaW1lLnN1YnN0cmluZyhcclxuICAgICAgdGlja2V0bWFzdGVyU3RhcnRUaW1lLmxlbmd0aCAtIDJcclxuICAgICk7XHJcbiAgICBjb25zdCBzdGFydFdpdGhvdXRTZWNvbmRzOiBzdHJpbmcgPSB0aWNrZXRtYXN0ZXJTdGFydFRpbWUuc3Vic3RyaW5nKFxyXG4gICAgICAwLFxyXG4gICAgICB0aWNrZXRtYXN0ZXJTdGFydFRpbWUubGVuZ3RoIC0gNlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0aWNrZXRtYXN0ZXJTdGFydEZvcm1hdHRlZFRpbWU6IHN0cmluZyA9IGAke3N0YXJ0V2l0aG91dFNlY29uZHN9ICR7c3RhcnRBbVBtfWA7XHJcblxyXG4gICAgY29uc3QgdGlja2V0bWFzdGVyRGF0ZTogc3RyaW5nID0gYCR7dGlja2V0bWFzdGVyU3RhcnRPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgICBcImVuLVVTXCIsXHJcbiAgICAgIHsgd2Vla2RheTogXCJsb25nXCIgfVxyXG4gICAgKX0gJHt0aWNrZXRtYXN0ZXJTdGFydE9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoKX1gO1xyXG5cclxuICAgIHJldHVybiA8cD57YCR7dGlja2V0bWFzdGVyRGF0ZX0gJHt0aWNrZXRtYXN0ZXJTdGFydEZvcm1hdHRlZFRpbWV9YH08L3A+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRldGVybWluZVNvdXJjZTogKCkgPT4gSlNYLkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc291cmNlID09PSBcInllbHBcIiA/IHBhcnNlWWVscFRpbWVzKCkgOiBwYXJzZVRpY2tldE1hc3RlclRpbWUoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50aW1lc30+XHJcbiAgICAgIHtkZXRlcm1pbmVTb3VyY2UoKX1cclxuICAgICAge2Rpc3BsYXlWZW51ZSgpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgRXZlbnRUaW1lc1ZlbnVlIH0gZnJvbSBcIi4vRXZlbnRUaW1lc1ZlbnVlXCI7XHJcbiIsImV4cG9ydCB7IEV2ZW50VGltZXNWZW51ZSB9IGZyb20gXCIuL0V2ZW50VGltZXNWZW51ZVwiO1xyXG5leHBvcnQgeyBFdmVudFByaWNlR2VucmUgfSBmcm9tIFwiLi9FdmVudFByaWNlR2VucmVcIjtcclxuZXhwb3J0IHsgRXZlbnREZXNjcmlwdGlvbiB9IGZyb20gXCIuL0V2ZW50RGVzY3JpcHRpb25cIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW1nQmFja2dyb3VuZFwiOiBcIkltYWdlQmFja2dyb3VuZF9pbWdCYWNrZ3JvdW5kX19ZYVpId1wiLFxuXHRcImV4dGVuZGVkXCI6IFwiSW1hZ2VCYWNrZ3JvdW5kX2V4dGVuZGVkX19TN3dBZVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vSW1hZ2VCYWNrZ3JvdW5kLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VCYWNrZ3JvdW5kOiBSZWFjdC5GQzx7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGV4dGVuZGVkOiBib29sZWFuO1xyXG4gIGhhbmRsZVJldHJhY3Q6ICgpID0+IHZvaWQ7XHJcbn0+ID0gKHsgZXh0ZW5kZWQsIGhhbmRsZVJldHJhY3QsIHR5cGUsIHNvdXJjZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIC8vIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8eyBsb2FkZWQ6IGJvb2xlYW4gfT4oe1xyXG4gIC8vICAgbG9hZGVkOiBmYWxzZSxcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gY29uc3QgZGV0ZXJtaW5lSW1hZ2VSYXRpbzogKCkgPT4geyB3aWR0aDogc3RyaW5nOyBoZWlnaHQ6IHN0cmluZyB9ID0gKCkgPT4ge1xyXG4gIC8vICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgLy8gICAgIGNhc2UgXCJldmVudFwiOlxyXG4gIC8vICAgICAgIHJldHVybiBzb3VyY2UgPT09IFwieWVscFwiXHJcbiAgLy8gICAgICAgICA/IHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wiIH1cclxuICAvLyAgICAgICAgIDogeyB3aWR0aDogXCJhdXRvXCIsIGhlaWdodDogXCIxMDAlXCIgfTtcclxuICAvLyAgICAgY2FzZSBcInBsYWNlXCI6XHJcbiAgLy8gICAgICAgcmV0dXJuIHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wiIH07XHJcblxyXG4gIC8vICAgICBkZWZhdWx0OlxyXG4gIC8vICAgICAgIHJldHVybiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIiB9O1xyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGRldGVybWluZUltYWdlUmF0aW86ICgpID0+IHN0cmluZyA9ICgpID0+IHtcclxuICAgIHJldHVybiBzb3VyY2UgPT09IFwieWVscFwiID8gY3NzLmJ5V2lkdGggOiBjc3MuYnlXaWR0aDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake2Nzcy5pbWdCYWNrZ3JvdW5kfSAke2V4dGVuZGVkID8gY3NzLmV4dGVuZGVkIDogbnVsbH1gfVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVSZXRyYWN0fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBJbWFnZUJhY2tncm91bmQgfSBmcm9tIFwiLi9JbWFnZUJhY2tncm91bmRcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlua1wiOiBcIlBhcnRMaW5rX2xpbmtfXzNNbGJaXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9QYXJ0TGluay5tb2R1bGUuc2Nzc1wiO1xyXG5leHBvcnQgY29uc3QgUGFydExpbms6IFJlYWN0LkZDPHsgdXJsOiBzdHJpbmcgfT4gPSAoeyB1cmwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPXt1cmx9IGNsYXNzTmFtZT17Y3NzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNTAgNTBcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMHB4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNIDMzLjQwNjI1IDAgQyAzMi44NTU0NjkgMC4wNTA3ODEzIDMyLjQ0OTIxOSAwLjU0Mjk2OSAzMi41IDEuMDkzNzUgQyAzMi41NTA3ODEgMS42NDQ1MzEgMzMuMDQyOTY5IDIuMDUwNzgxIDMzLjU5Mzc1IDIgTCA0Ni41NjI1IDIgTCAyNS42ODc1IDIyLjkwNjI1IEMgMjUuMzkwNjI1IDIzLjE0ODQzOCAyNS4yNTM5MDYgMjMuNTM1MTU2IDI1LjMzOTg0NCAyMy45MTAxNTYgQyAyNS40MjU3ODEgMjQuMjgxMjUgMjUuNzE4NzUgMjQuNTc0MjE5IDI2LjA4OTg0NCAyNC42NjAxNTYgQyAyNi40NjQ4NDQgMjQuNzQ2MDk0IDI2Ljg1MTU2MyAyNC42MDkzNzUgMjcuMDkzNzUgMjQuMzEyNSBMIDQ4IDMuNDM3NSBMIDQ4IDE2LjQwNjI1IEMgNDcuOTk2MDk0IDE2Ljc2NTYyNSA0OC4xODM1OTQgMTcuMTAxNTYzIDQ4LjQ5NjA5NCAxNy4yODUxNTYgQyA0OC44MDg1OTQgMTcuNDY0ODQ0IDQ5LjE5MTQwNiAxNy40NjQ4NDQgNDkuNTAzOTA2IDE3LjI4NTE1NiBDIDQ5LjgxNjQwNiAxNy4xMDE1NjMgNTAuMDAzOTA2IDE2Ljc2NTYyNSA1MCAxNi40MDYyNSBMIDUwIDAgTCAzMy41OTM3NSAwIEMgMzMuNTYyNSAwIDMzLjUzMTI1IDAgMzMuNSAwIEMgMzMuNDY4NzUgMCAzMy40Mzc1IDAgMzMuNDA2MjUgMCBaIE0gMiAxMCBDIDEuNDc2NTYzIDEwIDAuOTQxNDA2IDEwLjE4MzU5NCAwLjU2MjUgMTAuNTYyNSBDIDAuMTgzNTk0IDEwLjk0MTQwNiAwIDExLjQ3NjU2MyAwIDEyIEwgMCA0OCBDIDAgNDguNTIzNDM4IDAuMTgzNTk0IDQ5LjA1ODU5NCAwLjU2MjUgNDkuNDM3NSBDIDAuOTQxNDA2IDQ5LjgxNjQwNiAxLjQ3NjU2MyA1MCAyIDUwIEwgMzggNTAgQyAzOC41MjM0MzggNTAgMzkuMDU4NTk0IDQ5LjgxNjQwNiAzOS40Mzc1IDQ5LjQzNzUgQyAzOS44MTY0MDYgNDkuMDU4NTk0IDQwIDQ4LjUyMzQzOCA0MCA0OCBMIDQwIDE4IEMgNDAuMDAzOTA2IDE3LjY0MDYyNSAzOS44MTY0MDYgMTcuMzA0Njg4IDM5LjUwMzkwNiAxNy4xMjEwOTQgQyAzOS4xOTE0MDYgMTYuOTQxNDA2IDM4LjgwODU5NCAxNi45NDE0MDYgMzguNDk2MDk0IDE3LjEyMTA5NCBDIDM4LjE4MzU5NCAxNy4zMDQ2ODggMzcuOTk2MDk0IDE3LjY0MDYyNSAzOCAxOCBMIDM4IDQ4IEwgMiA0OCBMIDIgMTIgTCAzMiAxMiBDIDMyLjM1OTM3NSAxMi4wMDM5MDYgMzIuNjk1MzEzIDExLjgxNjQwNiAzMi44Nzg5MDYgMTEuNTAzOTA2IEMgMzMuMDU4NTk0IDExLjE5MTQwNiAzMy4wNTg1OTQgMTAuODA4NTk0IDMyLjg3ODkwNiAxMC40OTYwOTQgQyAzMi42OTUzMTMgMTAuMTgzNTk0IDMyLjM1OTM3NSA5Ljk5NjA5NCAzMiAxMCBaXCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgUGFydExpbmsgfSBmcm9tIFwiLi9QYXJ0TGlua1wiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2NhdGlvblwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX19yTnFJQ1wiLFxuXHRcImFkZHJlc3NcIjogXCJMb2NhdGlvbl9hZGRyZXNzX18xa05OZ1wiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vTG9jYXRpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhdGlvbjogUmVhY3QuRkM8eyBzdHJlZXQ6IHN0cmluZzsgY2l0eTogc3RyaW5nIH0+ID0gKHtcclxuICBzdHJlZXQsXHJcbiAgY2l0eSxcclxufSkgPT4ge1xyXG4gIGlmICghc3RyZWV0ICYmICFjaXR5KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9e2Nzcy5sb2NhdGlvbn0+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODctMy4xMy03LTctN3ptMCA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41elwiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e2Nzcy5hZGRyZXNzfT5cclxuICAgICAgICB7c3RyZWV0fVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtjaXR5fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi9Mb2NhdGlvblwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwaG9uZVwiOiBcIlBob25lX3Bob25lX18zOUlMc1wiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUGhvbmUubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQaG9uZTogUmVhY3QuRkM8eyBwaG9uZTogc3RyaW5nIH0+ID0gKHsgcGhvbmUgfSkgPT4ge1xyXG4gIGlmICghcGhvbmUpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPXtgdGVsOiR7cGhvbmV9YH0gY2xhc3NOYW1lPXtjc3MucGhvbmV9PlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0yMC4wMSAxNS4zOGMtMS4yMyAwLTIuNDItLjItMy41My0uNTYtLjM1LS4xMi0uNzQtLjAzLTEuMDEuMjRsLTEuNTcgMS45N2MtMi44My0xLjM1LTUuNDgtMy45LTYuODktNi44M2wxLjk1LTEuNjZjLjI3LS4yOC4zNS0uNjcuMjQtMS4wMi0uMzctMS4xMS0uNTYtMi4zLS41Ni0zLjUzIDAtLjU0LS40NS0uOTktLjk5LS45OUg0LjE5QzMuNjUgMyAzIDMuMjQgMyAzLjk5IDMgMTMuMjggMTAuNzMgMjEgMjAuMDEgMjFjLjcxIDAgLjk5LS42My45OS0xLjE4di0zLjQ1YzAtLjU0LS40NS0uOTktLjk5LS45OXpcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICAgPHNwYW4+e3Bob25lfTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBQaG9uZSB9IGZyb20gXCIuL1Bob25lXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBsYWNlUHJpY2VcIjogXCJQcmljZUFuZFR5cGVfcGxhY2VQcmljZV9fMjFTak5cIixcblx0XCJsaWdodFwiOiBcIlByaWNlQW5kVHlwZV9saWdodF9fMmtnT2JcIixcblx0XCJ0eXBlXCI6IFwiUHJpY2VBbmRUeXBlX3R5cGVfXzFmcUJqXCIsXG5cdFwiY2l0eVwiOiBcIlByaWNlQW5kVHlwZV9jaXR5X18zRk1abFwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUHJpY2VBbmRUeXBlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VBbmRUeXBlOiBSZWFjdC5GQzx7XHJcbiAgcHJpY2U6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBzdGF0ZTogc3RyaW5nO1xyXG59PiA9ICh7IHByaWNlLCB0eXBlLCBjaXR5LCBzdGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgaW5zZXJ0Q2l0eTogKGNpdHk6IHN0cmluZykgPT4gSlNYLkVsZW1lbnQgfCBudWxsID0gKGNpdHkpID0+IHtcclxuICAgIHJldHVybiBjaXR5ID8gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzcy5jaXR5fT57YOKAoiAke2NpdHl9LCAke3N0YXRlfWB9PC9zcGFuPlxyXG4gICAgKSA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2luZ3VsYXJUeXBlOiAoKSA9PiBKU1guRWxlbWVudCB8IG51bGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXR5cGUgfHwgdHlwZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4TGFzdExldHRlcjogbnVtYmVyID0gdHlwZS5sZW5ndGggLSAxO1xyXG4gICAgICBzd2l0Y2ggKHR5cGVbaW5kZXhMYXN0TGV0dGVyXSkge1xyXG4gICAgICAgIGNhc2UgXCJzXCI6XHJcbiAgICAgICAgICByZXR1cm4gdHlwZS5pbmRleE9mKFwiaWVzXCIpICE9PSAtMSA/IChcclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy50eXBlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IHByaWNlID8gXCIydndcIiA6IG51bGwgfX1cclxuICAgICAgICAgICAgPntgJHt0eXBlLnN1YnN0cmluZygwLCB0eXBlLmluZGV4T2YoXCJpZXNcIikpfXlgfTwvc3Bhbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MudHlwZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBwcmljZSA/IFwiMnZ3XCIgOiBudWxsIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dHlwZS5zdWJzdHJpbmcoMCwgaW5kZXhMYXN0TGV0dGVyKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy50eXBlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IHByaWNlID8gXCIydndcIiA6IG51bGwgfX1cclxuICAgICAgICAgICAgPntgJHt0eXBlfWB9PC9zcGFuPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHByaWNlID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wbGFjZVByaWNlfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3MubGlnaHR9PntwcmljZVswXX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cHJpY2UubGVuZ3RoID49IDIgPyBjc3MubGlnaHQgOiBudWxsfT57cHJpY2VbMF19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3ByaWNlLmxlbmd0aCA+PSAzID8gY3NzLmxpZ2h0IDogbnVsbH0+e3ByaWNlWzBdfTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwcmljZS5sZW5ndGggPT09IDQgPyBjc3MubGlnaHQgOiBudWxsfT57cHJpY2VbMF19PC9zcGFuPlxyXG4gICAgICB7c2luZ3VsYXJUeXBlKCl9XHJcbiAgICAgIHtpbnNlcnRDaXR5KGNpdHkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucGxhY2VQcmljZX0+XHJcbiAgICAgIHtzaW5ndWxhclR5cGUoKX1cclxuXHJcbiAgICAgIHtpbnNlcnRDaXR5KGNpdHkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgUHJpY2VBbmRUeXBlIH0gZnJvbSBcIi4vUHJpY2VBbmRUeXBlXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJldmlld1dyYXBwZXJcIjogXCJSZXZpZXdzX3Jldmlld1dyYXBwZXJfXzNONXdlXCIsXG5cdFwic3RhcldyYXBwZXJcIjogXCJSZXZpZXdzX3N0YXJXcmFwcGVyX18xUmxTeVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUmV2aWV3cy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJldmlld3M6IFJlYWN0LkZDPHsgcmV2aWV3Q291bnQ6IG51bWJlcjsgcmF0aW5nOiBudW1iZXIgfT4gPSAoe1xyXG4gIHJldmlld0NvdW50LFxyXG4gIHJhdGluZyxcclxufSkgPT4ge1xyXG4gIGlmIChyZXZpZXdDb3VudCAmJiByYXRpbmcpIHtcclxuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldFN0YXJzO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IEVtcHR5U3RhcjogKGlkOiBudW1iZXIpID0+IEpTWC5FbGVtZW50ID0gKGlkKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI2My4wOCAyNTEuNTNcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmlsbDogXCIjNzA3MDcwXCIgfX1cclxuICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgPHRpdGxlPkFzc2V0IDEwPC90aXRsZT5cclxuICAgICAgICAgIDxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJUcmFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDEuNSw4LjY5bDMxLjI3LDYzLjM2YTExLjExLDExLjExLDAsMCwwLDguMzYsNi4wOGw2OS45MywxMC4xNmExMS4xMSwxMS4xMSwwLDAsMSw2LjE1LDE4Ljk0bC01MC42LDQ5LjMyYTExLjA5LDExLjA5LDAsMCwwLTMuMTksOS44M0wyMTUuMzYsMjM2YTExLjEsMTEuMSwwLDAsMS0xNi4xMSwxMS43bC02Mi41NC0zMi44OGExMS4xMiwxMS4xMiwwLDAsMC0xMC4zNCwwTDYzLjgzLDI0Ny43M0ExMS4xMSwxMS4xMSwwLDAsMSw0Ny43MSwyMzZsMTEuOTUtNjkuNjVhMTEuMSwxMS4xLDAsMCwwLTMuMi05LjgzTDUuODcsMTA3LjIzQTExLjEsMTEuMSwwLDAsMSwxMiw4OC4yOUw4Miw3OC4xM2ExMS4xMywxMS4xMywwLDAsMCw4LjM2LTYuMDhMMTIxLjU4LDguNjlBMTEuMTEsMTEuMTEsMCwwLDEsMTQxLjUsOC42OVpcIiAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IEZ1bGxTdGFyOiAoaWQ6IG51bWJlcikgPT4gSlNYLkVsZW1lbnQgPSAoaWQpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU4LjA4IDI0Ni41M1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBmaWxsOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgPHRpdGxlPkFzc2V0IDc8L3RpdGxlPlxyXG4gICAgICAgICAgPGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlRyYWNpbmdcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzOSw2LjE5bDMxLjI3LDYzLjM2YTExLjExLDExLjExLDAsMCwwLDguMzYsNi4wOGw2OS45MywxMC4xNmExMS4xMSwxMS4xMSwwLDAsMSw2LjE1LDE4Ljk0bC01MC42LDQ5LjMyYTExLjA5LDExLjA5LDAsMCwwLTMuMTksOS44M2wxMS45NCw2OS42NWExMS4xLDExLjEsMCwwLDEtMTYuMTEsMTEuN2wtNjIuNTQtMzIuODhhMTEuMTIsMTEuMTIsMCwwLDAtMTAuMzQsMEw2MS4zMywyNDUuMjNhMTEuMTEsMTEuMTEsMCwwLDEtMTYuMTItMTEuN2wxMS45NS02OS42NWExMS4xLDExLjEsMCwwLDAtMy4yLTkuODNMMy4zNywxMDQuNzNBMTEuMSwxMS4xLDAsMCwxLDkuNTIsODUuNzlMNzkuNDUsNzUuNjNhMTEuMTMsMTEuMTMsMCwwLDAsOC4zNi02LjA4TDExOS4wOCw2LjE5QTExLjExLDExLjExLDAsMCwxLDEzOSw2LjE5WlwiIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgSGFsZlN0YXI6IChpZDogbnVtYmVyKSA9PiBKU1guRWxlbWVudCA9IChpZCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNjMuMDcgMjUxLjU0XCJcclxuICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRlZnM+PC9kZWZzPlxyXG4gICAgICAgICAgPHRpdGxlPkFzc2V0IDExPC90aXRsZT5cclxuICAgICAgICAgIDxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJUcmFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IFwiIzcwNzA3MFwiIH19XHJcbiAgICAgICAgICAgICAgICBkPVwiTTIwNi42MSwxNTYuNTZhMTEuMTEsMTEuMTEsMCwwLDAtMy4xOSw5LjgzTDIxNS4zNiwyMzZhMTEuMSwxMS4xLDAsMCwxLTE2LjExLDExLjcxbC02Mi41NC0zMi44OWExMS4wNywxMS4wNywwLDAsMC0xMC4zNCwwTDYzLjgzLDI0Ny43NEExMS4xLDExLjEsMCwwLDEsNDcuNzIsMjM2bDExLjk0LTY5LjY0YTExLjExLDExLjExLDAsMCwwLTMuMTktOS44M0w1Ljg3LDEwNy4yM0ExMS4xLDExLjEsMCwwLDEsMTIsODguMjlMODIsNzguMTNhMTEuMDgsMTEuMDgsMCwwLDAsOC4zNi02LjA3TDEyMS41OCw4LjY5YTExLjExLDExLjExLDAsMCwxLDE5LjkyLDBsMzEuMjcsNjMuMzdhMTEuMDgsMTEuMDgsMCwwLDAsOC4zNiw2LjA3bDY5LjkzLDEwLjE2YTExLjEsMTEuMSwwLDAsMSw2LjE1LDE4Ljk0WlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGQ9XCJNMTMyLDIuNTFWMjEzLjU4YTExLjE5LDExLjE5LDAsMCwwLTUuNjcsMS4yN0w2My44MywyNDcuNzRBMTEuMSwxMS4xLDAsMCwxLDQ3LjcyLDIzNmwxMS45NC02OS42NGExMS4xMSwxMS4xMSwwLDAsMC0zLjE5LTkuODNMNS44NywxMDcuMjNBMTEuMSwxMS4xLDAsMCwxLDEyLDg4LjI5TDgyLDc4LjEzYTExLjA4LDExLjA4LDAsMCwwLDguMzYtNi4wN0wxMjEuNTgsOC42OUExMSwxMSwwLDAsMSwxMzIsMi41MVpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0U3RhcnM6ICgpID0+IEpTWC5FbGVtZW50W10gPSAoKSA9PiB7XHJcbiAgICAgIGxldCByYXRpbmdJbnQ6IG51bWJlciA9IE1hdGguZmxvb3IocmF0aW5nKTtcclxuICAgICAgbGV0IHJlbWFpbmRlcjogbnVtYmVyID0gcmF0aW5nIC0gcmF0aW5nSW50O1xyXG4gICAgICBjb25zdCBzdGFyVHlwZXM6IEpTWC5FbGVtZW50W10gPSBbXHJcbiAgICAgICAgRW1wdHlTdGFyKDApLFxyXG4gICAgICAgIEVtcHR5U3RhcigxKSxcclxuICAgICAgICBFbXB0eVN0YXIoMiksXHJcbiAgICAgICAgRW1wdHlTdGFyKDMpLFxyXG4gICAgICAgIEVtcHR5U3Rhcig0KSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1N0YXJzOiBKU1guRWxlbWVudFtdID0gc3RhclR5cGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPCByYXRpbmdJbnQpIHtcclxuICAgICAgICAgIHJldHVybiBGdWxsU3RhcihpbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiByZW1haW5kZXIgPiAwICYmIGluZGV4IDwgcmF0aW5nXHJcbiAgICAgICAgICAgID8gSGFsZlN0YXIoaW5kZXgpXHJcbiAgICAgICAgICAgIDogRW1wdHlTdGFyKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIG5ld1N0YXJzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJldmlld1dyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc3RhcldyYXBwZXJ9PntzZXRTdGFycygpLm1hcCgoc3RhcikgPT4gc3Rhcil9PC9kaXY+XHJcbiAgICAgICAgPHNwYW4+e2Ake3Jldmlld0NvdW50fSBSZXZpZXdzYH08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgeyBQcmljZUFuZFR5cGUgfSBmcm9tIFwiLi9QcmljZUFuZFR5cGVcIjtcclxuZXhwb3J0IHsgUmV2aWV3cyB9IGZyb20gXCIuL1Jldmlld3MvUmV2aWV3c1wiO1xyXG5leHBvcnQgeyBQaG9uZSB9IGZyb20gXCIuL1Bob25lXCI7XHJcbmV4cG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4vTG9jYXRpb25cIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmVzdWx0Q2FyZFwiOiBcIlJlc3VsdENhcmRfcmVzdWx0Q2FyZF9fMWtzNUpcIixcblx0XCJleHRlbmRlZFwiOiBcIlJlc3VsdENhcmRfZXh0ZW5kZWRfX0k3el9CXCIsXG5cdFwibG9hZGVkXCI6IFwiUmVzdWx0Q2FyZF9sb2FkZWRfXzNla01sXCIsXG5cdFwibG9hZGluZ1wiOiBcIlJlc3VsdENhcmRfbG9hZGluZ19fVHFMdWZcIixcblx0XCJpbmZvQmFyXCI6IFwiUmVzdWx0Q2FyZF9pbmZvQmFyX18ycFBKdVwiLFxuXHRcInRpdGxlXCI6IFwiUmVzdWx0Q2FyZF90aXRsZV9fMm1TR3pcIixcblx0XCJsb2FkaW5nQmFyXCI6IFwiUmVzdWx0Q2FyZF9sb2FkaW5nQmFyX18ydHR4eFwiLFxuXHRcImRldGFpbHNXcmFwcGVyXCI6IFwiUmVzdWx0Q2FyZF9kZXRhaWxzV3JhcHBlcl9fMThKUmpcIixcblx0XCJhZGRCdXR0b25cIjogXCJSZXN1bHRDYXJkX2FkZEJ1dHRvbl9fMXAwODRcIixcblx0XCJyZW1vdmVcIjogXCJSZXN1bHRDYXJkX3JlbW92ZV9fYTlqMEdcIixcblx0XCJsb2FkaW5nQWRkXCI6IFwiUmVzdWx0Q2FyZF9sb2FkaW5nQWRkX18zM1JYTFwiXG59O1xuIiwiaW1wb3J0IHsgUHJpY2VBbmRUeXBlLCBSZXZpZXdzLCBQaG9uZSwgTG9jYXRpb24gfSBmcm9tIFwiLi9QYXJ0cy9QbGFjZXNJbmZvXCI7XHJcbmltcG9ydCB7XHJcbiAgRXZlbnRUaW1lc1ZlbnVlLFxyXG4gIEV2ZW50UHJpY2VHZW5yZSxcclxuICBFdmVudERlc2NyaXB0aW9uLFxyXG59IGZyb20gXCIuL1BhcnRzL0V2ZW50c0luZm9cIjtcclxuaW1wb3J0IHsgUGFydExpbmsgfSBmcm9tIFwiLi9QYXJ0cy9QYXJ0TGlua1wiO1xyXG5pbXBvcnQgeyBJbWFnZUJhY2tncm91bmQgfSBmcm9tIFwiLi9QYXJ0cy9JbWFnZUJhY2tncm91bmRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgUGFydHNQcm92aWRlcixcclxuICB1c2VQYXJ0c0Rpc3BhdGNoLFxyXG4gIHVzZVBhcnRzU3RhdGUsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3N0YXRlL0RhdGVQYXJ0c0NvbnRleHRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9SZXN1bHRDYXJkLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmVzdWx0Q2FyZDogUmVhY3QuRkM8e1xyXG4gIGl0ZW0/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gIHJlc3VsdHNMb2FkaW5nPzogYm9vbGVhbjtcclxufT4gPSAoeyBpdGVtLCByZXN1bHRzTG9hZGluZyB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7XHJcbiAgICBhZGRlZDogYm9vbGVhbjtcclxuICAgIG1vcmVJbmZvOiBib29sZWFuO1xyXG4gICAgaW1hZ2VMb2FkZWQ6IGJvb2xlYW47XHJcbiAgfT4oeyBhZGRlZDogZmFsc2UsIG1vcmVJbmZvOiBmYWxzZSwgaW1hZ2VMb2FkZWQ6IGZhbHNlIH0pO1xyXG5cclxuICBjb25zdCBHbG9iYWxQYXJ0cyA9IHVzZVBhcnRzU3RhdGUoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2xvYmFsUGFydHMucGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoR2xvYmFsUGFydHMucGFydHNbaV0uaWQgPT09IGl0ZW0uaWQpIHtcclxuICAgICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGFkZGVkOiB0cnVlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbR2xvYmFsUGFydHNdKTtcclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lSW1hZ2VCYWNrZ3JvdW5kU291cmNlOiAoKSA9PiBzdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xyXG4gICAgICBjYXNlIFwicGxhY2VcIjpcclxuICAgICAgICByZXR1cm4gaXRlbS5zb3VyY2UgPT09IFwieWVscFwiID8gaXRlbS5pbWFnZV91cmwgOiBudWxsO1xyXG4gICAgICBjYXNlIFwiZXZlbnRcIjpcclxuICAgICAgICByZXR1cm4gaXRlbS5zb3VyY2UgPT09IFwieWVscFwiID8gaXRlbS5pbWFnZV91cmwgOiBpdGVtLmltYWdlc1swXS51cmw7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmV0cmFjdDogKCkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS5tb3JlSW5mb1xyXG4gICAgICA/IHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIG1vcmVJbmZvOiBmYWxzZSB9KSlcclxuICAgICAgOiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vcmVEZXRhaWxzOiAodHlwZTogc3RyaW5nKSA9PiBKU1guRWxlbWVudCB8IG51bGwgPSAodHlwZSkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZS5tb3JlSW5mbykgcmV0dXJuIG51bGw7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInBsYWNlXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZGV0YWlsc1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8UGhvbmUgcGhvbmU9e2l0ZW0ucGhvbmV9PjwvUGhvbmU+XHJcbiAgICAgICAgICAgIDxMb2NhdGlvblxyXG4gICAgICAgICAgICAgIHN0cmVldD17aXRlbS5sb2NhdGlvbi5kaXNwbGF5X2FkZHJlc3NbMF19XHJcbiAgICAgICAgICAgICAgY2l0eT17aXRlbS5sb2NhdGlvbi5kaXNwbGF5X2FkZHJlc3NbMV19XHJcbiAgICAgICAgICAgID48L0xvY2F0aW9uPlxyXG4gICAgICAgICAgICA8UGFydExpbmsgdXJsPXtpdGVtLnVybH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJldmVudFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmRldGFpbHNXcmFwcGVyfT5cclxuICAgICAgICAgICAgPEV2ZW50RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259PjwvRXZlbnREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPFBhcnRMaW5rXHJcbiAgICAgICAgICAgICAgdXJsPXtpdGVtLnNvdXJjZSA9PT0gXCJ5ZWxwXCIgPyBpdGVtLmV2ZW50X3NpdGVfdXJsIDogaXRlbS51cmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzLmRldGFpbHNXcmFwcGVyfT48L2Rpdj47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0Q2FyZERldGFpbHM6ICgpID0+IEpTWC5FbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcclxuICAgICAgY2FzZSBcInBsYWNlXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLmluZm9CYXJ9ICR7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb3JlSW5mbyA/IGNzcy5leHRlbmRlZCA6IG51bGxcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzLnRpdGxlfT57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8UmV2aWV3c1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3Q291bnQ9e2l0ZW0ucmV2aWV3X2NvdW50fVxyXG4gICAgICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cclxuICAgICAgICAgICAgICA+PC9SZXZpZXdzPlxyXG4gICAgICAgICAgICAgIDxQcmljZUFuZFR5cGVcclxuICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgY2l0eT17aXRlbS5sb2NhdGlvbi5jaXR5fVxyXG4gICAgICAgICAgICAgICAgc3RhdGU9e2l0ZW0ubG9jYXRpb24uc3RhdGV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5jYXRlZ29yaWVzICYmIGl0ZW0uY2F0ZWdvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmNhdGVnb3JpZXNbMF0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+PC9QcmljZUFuZFR5cGU+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5zdGFyc1dyYXBwZXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vcmVEZXRhaWxzKFwicGxhY2VcIil9XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJldmVudFwiOlxyXG4gICAgICAgIGNvbnN0IGRldGVybWluZVByaWNlOiAoKSA9PlxyXG4gICAgICAgICAgfCB7IFtrZXk6IHN0cmluZ106IGFueSB9XHJcbiAgICAgICAgICB8IG51bGxcclxuICAgICAgICAgIHwgc3RyaW5nID0gKCkgPT4ge1xyXG4gICAgICAgICAgc3dpdGNoIChpdGVtLnNvdXJjZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwieWVscFwiOlxyXG4gICAgICAgICAgICAgIGlmICghaXRlbS5jb3N0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jb3N0O1xyXG4gICAgICAgICAgICBjYXNlIFwidGlja2V0bWFzdGVyXCI6XHJcbiAgICAgICAgICAgICAgaWYgKCFpdGVtLnByaWNlUmFuZ2VzKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcmljZVJhbmdlc1swXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBkZXRlcm1pbmVWZW51ZTogKCkgPT4gc3RyaW5nIHwgbnVsbCA9ICgpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAoaXRlbS5zb3VyY2UpIHtcclxuICAgICAgICAgICAgY2FzZSBcInllbHBcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gIWl0ZW0uYnVzaW5lc2Vzc19pZCB8fCBpdGVtLmJ1c2luZXNzX2lkID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogaXRlbS5idXNpbmVzc19pZDtcclxuICAgICAgICAgICAgY2FzZSBcInRpY2tldG1hc3RlclwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLl9lbWJlZGRlZC52ZW51ZXNbMF0ubmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0aWNrZXRtYXN0ZXJDbGFzc2lmaWNhdGlvbjogKCkgPT4gYW55IHwgbnVsbCA9ICgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLmNsYXNzaWZpY2F0aW9ucyA/IGl0ZW0uY2xhc3NpZmljYXRpb25zIDogbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjc3MuaW5mb0Jhcn0gJHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1vcmVJbmZvID8gY3NzLmV4dGVuZGVkIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3MudGl0bGV9PntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxFdmVudFRpbWVzVmVudWVcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZT17XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0uc291cmNlID09PSBcInllbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gaXRlbS50aW1lX3N0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtpdGVtLmRhdGVzLnN0YXJ0LmxvY2FsRGF0ZX1UJHtpdGVtLmRhdGVzLnN0YXJ0LmxvY2FsVGltZX1gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lPXtpdGVtLnNvdXJjZSA9PT0gXCJ5ZWxwXCIgPyBpdGVtLnRpbWVfZW5kIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHNvdXJjZT17aXRlbS5zb3VyY2V9XHJcbiAgICAgICAgICAgICAgICB2ZW51ZT17ZGV0ZXJtaW5lVmVudWUoKX1cclxuICAgICAgICAgICAgICA+PC9FdmVudFRpbWVzVmVudWU+XHJcbiAgICAgICAgICAgICAgPEV2ZW50UHJpY2VHZW5yZVxyXG4gICAgICAgICAgICAgICAgdmVudWU9e1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLnNvdXJjZSA9PT0gXCJ5ZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uYnVzaW5lc3NfaWRcclxuICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uX2VtYmVkZGVkLnZlbnVlc1swXS5uYW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcmljZT17ZGV0ZXJtaW5lUHJpY2UoKX1cclxuICAgICAgICAgICAgICAgIHNvdXJjZT17aXRlbS5zb3VyY2V9XHJcbiAgICAgICAgICAgICAgICBnZW5yZT17XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0uc291cmNlID09PSBcInllbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gaXRlbS5jYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIDogdGlja2V0bWFzdGVyQ2xhc3NpZmljYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID48L0V2ZW50UHJpY2VHZW5yZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHttb3JlRGV0YWlscyhcImV2ZW50XCIpfVxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDx7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiB7IGlkPzogc3RyaW5nOyBwYXJ0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9O1xyXG4gIH0+ID0gdXNlUGFydHNEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXJ0OiAoKSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlLmFkZGVkKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgYWRkZWQ6IGZhbHNlIH0pKSxcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUkVNT1ZFX1BBUlRcIiwgcGF5bG9hZDogeyBpZDogaXRlbS5pZCB9IH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gR2xvYmFsUGFydHMucGFydHMubGVuZ3RoIDwgN1xyXG4gICAgICAgID8gKHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGFkZGVkOiB0cnVlIH0pKSxcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogXCJBRERfUEFSVFwiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7IHBhcnQ6IHsgLi4uaXRlbSwgZ3JpZEluZGV4OiBudWxsIH0gfSxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0c0xvYWRpbmcgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJlc3VsdENhcmR9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzk5OTk5OVwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y3NzLmFkZEJ1dHRvbn0gJHtjc3MubG9hZGluZ0FkZH1gfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbmZvQmFyfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5sb2FkaW5nQmFyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxvYWRpbmdCYXJ9PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubG9hZGluZ0Jhcn0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtjc3MucmVzdWx0Q2FyZH0gJHtzdGF0ZS5tb3JlSW5mbyA/IGNzcy5leHRlbmRlZCA6IG51bGx9ICR7XHJcbiAgICAgICAgc3RhdGUuaW1hZ2VMb2FkZWQgPyBjc3MubG9hZGVkIDogY3NzLmxvYWRpbmdcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgIHN0YXRlLm1vcmVJbmZvXHJcbiAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgIDogc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgbW9yZUluZm86IHRydWUgfSkpXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPEltYWdlQmFja2dyb3VuZFxyXG4gICAgICAgIGV4dGVuZGVkPXtzdGF0ZS5tb3JlSW5mb31cclxuICAgICAgICBoYW5kbGVSZXRyYWN0PXtoYW5kbGVSZXRyYWN0fVxyXG4gICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cclxuICAgICAgICBzb3VyY2U9e2l0ZW0uc291cmNlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXtkZXRlcm1pbmVJbWFnZUJhY2tncm91bmRTb3VyY2UoKX1cclxuICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgb25Mb2FkPXsoKSA9PiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBpbWFnZUxvYWRlZDogdHJ1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0ltYWdlQmFja2dyb3VuZD5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2Nzcy5hZGRCdXR0b259ICR7c3RhdGUuYWRkZWQgPyBjc3MucmVtb3ZlIDogbnVsbH1gfVxyXG4gICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gKGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLCBoYW5kbGVQYXJ0KCkpfVxyXG4gICAgICA+XHJcbiAgICAgICAge3N0YXRlLmFkZGVkID8gXCJSZW1vdmUgZnJvbSBQYXJ0cyAtXCIgOiBcIkFkZCB0byBQYXJ0cyArXCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7c2V0Q2FyZERldGFpbHMoKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFJlc3VsdENhcmQgfSBmcm9tIFwiLi9SZXN1bHRDYXJkXCI7XHJcbiIsImV4cG9ydCB7IFJlc3VsdENhcmQgfSBmcm9tIFwiLi9SZXN1bHRDYXJkXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlclwiOiBcIlNla25kTG9hZGVyX2xvYWRlcl9fMlAxNUNcIixcblx0XCJzZWtuZEhhbmRcIjogXCJTZWtuZExvYWRlcl9zZWtuZEhhbmRfXzExQW0zXCIsXG5cdFwiVGlrVG9rXCI6IFwiU2VrbmRMb2FkZXJfVGlrVG9rX18zTHV5V1wiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vU2VrbmRMb2FkZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWtuZExvYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubG9hZGVyfT5cclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMjguOTggNDkuMTRcIj5cclxuICAgICAgICA8dGl0bGU+QWx0TG9nb0JsYWNrPC90aXRsZT5cclxuICAgICAgICA8ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XHJcbiAgICAgICAgICA8ZyBpZD1cIlRyYWNpbmdcIj5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNy42Niw0OS4xNGEzMS41MiwzMS41MiwwLDAsMS00Ljc0LS4zNiwyMy42MSwyMy42MSwwLDAsMS03LjY4LTIuNTJBMTAsMTAsMCwwLDEsLjE0LDQxYy0uNzItMi4xLDEuNS00Ljc0LDMuNjYtMy42NmE0LjQxLDQuNDEsMCwwLDEsMS4yNiwxLjMyYzIuMTYsMi42NCw1LjUyLDMuNzgsOC43Niw0LjMyYTIyLjgzLDIyLjgzLDAsMCwwLDcuODYtLjEyYzIuODItLjYsNS41Mi0yLDYuNi00LjhhNi4zMSw2LjMxLDAsMCwwLC4xOC00LjMyYy0xLjM4LTQuMDgtNi40OC01LjU4LTEwLjgtNi40OEE0NS42LDQ1LjYsMCwwLDEsOS4yLDI0Ljc4Yy0yLjg4LTEuMTQtNS43Ni0yLjg4LTcuMzgtNS42NC0yLTMuMy0xLjYyLTguNTItLjQyLTExQzUuMDYuODQsMTIuMTQsMCwxNi4yOCwwYTI1LjE5LDI1LjE5LDAsMCwxLDguOTQsMS41NmMzLjMsMS4yNiw1Ljg4LDMuNDIsNi42Niw1LjdhMi44NSwyLjg1LDAsMCwxLS41NCwyLjgyLDIuNSwyLjUsMCwwLDEtMy4xMi43Miw5LDksMCwwLDEtLjg0LS43MiwxMy42MywxMy42MywwLDAsMC01LjIyLTMuNDIsMTYuMjEsMTYuMjEsMCwwLDAtNS44OC0uNzhjLTQuNjgsMC0xMCwxLjgtMTAsNy4yNiwwLDUsNC4zOCw2LjU0LDE0LjQsOUMzMy41LDI1LjI2LDM1LjE4LDMyLjM0LDM0LDM4LjM0LDMyLjE4LDQ3LjI4LDIxLjYyLDQ5LjE0LDE3LjY2LDQ5LjE0WlwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzkuODIsNDUuMThhMywzLDAsMCwxLTMsM0g0OC4xNGEzLDMsMCwwLDEtMy0zVjRhMywzLDAsMCwxLDMtM0g3Ni4yMmEzLDMsMCwwLDEsMywzLDMsMywwLDAsMS0zLDNINTEuMTRWMjEuNDhoMjIuMmEzLDMsMCwwLDEsMywzLDMsMywwLDAsMS0zLDNINTEuMTR2MTQuN0g3Ni44MkEzLDMsMCwwLDEsNzkuODIsNDUuMThaXCIgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk05Ni42Miw0VjQ1LjE4YTMsMywwLDEsMS02LDBWNGEzLDMsMCwxLDEsNiwwWm0yNy42LDQzLjg2YTMuMjcsMy4yNywwLDAsMS0xLjMyLjMsMywzLDAsMCwxLTIuNy0xLjY4LDUwLjk0LDUwLjk0LDAsMCwwLTcuOTItMTEuODJjLTMuNTQtMy43OC02LjI0LTYuNi0xMC4zMi04Ljk0LS4xMi0uMDYtLjE4LS4xMi0uMy0uMThzLS4yNC0uMTgtLjM2LS4zYTIuOTMsMi45MywwLDAsMS0uNzgtMS42MiwzLjExLDMuMTEsMCwwLDEsLjM2LTIsMy4xNiwzLjE2LDAsMCwxLC43Mi0uODRsMTguNi0xOC45YTMsMywwLDAsMSw0LjI2LjA2LDMsMywwLDAsMS0uMDYsNC4ybC0xNi4yLDE2LjVjNy41Niw1LjM0LDEzLjUsMTMuMiwxNy40LDIxLjI0QTMsMywwLDAsMSwxMjQuMjIsNDcuODhaXCIgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNzUuMTYsNDcuOTRhMy4zMywzLjMzLDAsMCwxLTMuNDgtLjc4bC0yOS0zNC44NlY0NS4xOGEzLDMsMCwxLDEtNiwwVjRBMywzLDAsMCwxLDE0MiwyLjFsMjksMzQuOFY0YTMsMywwLDAsMSwzLTMsMywzLDAsMCwxLDMsM1Y0NS4yNEEyLjYsMi42LDAsMCwxLDE3NS4xNiw0Ny45NFpcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIwNC41LDQ4LjE4SDE5MC44OGEzLDMsMCwwLDEtMy4wNi0zVjRhMi44MSwyLjgxLDAsMCwxLC45LTIuMSwzLjIsMy4yLDAsMCwxLDIuMTYtLjloMTMuNzRBMjQuODgsMjQuODgsMCwwLDEsMjE0LDIuODhhMjUuNzksMjUuNzksMCwwLDEsNy44LDUuMSwyMy42OSwyMy42OSwwLDAsMSw1LjIyLDcuNTZBMjMuMSwyMy4xLDAsMCwxLDIyOSwyNC43MmEyMS4zNiwyMS4zNiwwLDAsMS0yLDksMjMuMzMsMjMuMzMsMCwwLDEtNS4yOCw3LjUsMjQuNzEsMjQuNzEsMCwwLDEtNy44LDUuMUEyNS4zNCwyNS4zNCwwLDAsMSwyMDQuNSw0OC4xOFptLTEwLjYyLTYuMDZoMTAuNzRhMTkuODEsMTkuODEsMCwwLDAsNy0xLjQ0LDE4LjMxLDE4LjMxLDAsMCwwLDUuODgtMy43OCwxOS43NSwxOS43NSwwLDAsMCw0LTUuNjRBMTUuNDksMTUuNDksMCwwLDAsMjIzLDI0LjcyYTE2LjU4LDE2LjU4LDAsMCwwLTEuNDQtNi43OEExOC42MSwxOC42MSwwLDAsMCwyMDQuNjIsN0gxOTMuODhaXCIgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnNla25kSGFuZH0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBTZWtuZExvYWRlciB9IGZyb20gXCIuL1Nla25kTG9hZGVyXCI7XHJcbiIsImV4cG9ydCB7IExheW91dCB9IGZyb20gXCIuL2xheW91dFwiO1xyXG5leHBvcnQgeyBOYXYgfSBmcm9tIFwiLi9OYXZcIjtcclxuZXhwb3J0IHsgU2NoZWR1bGVHcmlkIH0gZnJvbSBcIi4vU2NoZWR1bGVHcmlkXCI7XHJcbmV4cG9ydCB7IERhdGVQYXJ0cyB9IGZyb20gXCIuL0RhdGVQYXJ0c1wiO1xyXG5leHBvcnQgeyBSZXN1bHRDYXJkIH0gZnJvbSBcIi4vU2VhcmNoUmVzdWx0c1wiO1xyXG5leHBvcnQgeyBTZWtuZExvYWRlciB9IGZyb20gXCIuL1Nla25kTG9hZGVyXCI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9OYXZcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxOYXY+PC9OYXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUdyaWRTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TZWFyY2hHcmlkQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gPExheW91dD48L0xheW91dD47XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxudHlwZSBQYXJ0c1N0YXRlID0ge1xyXG4gIHBhcnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XHJcbn07XHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIHBhcnQ/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgZGV0YWlscz86IHN0cmluZztcclxuICAgIHBhcnRzPzogUGFydHNTdGF0ZVtcInBhcnRzXCJdO1xyXG4gIH07XHJcbn07XHJcbmNvbnN0IHBhcnRzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxQYXJ0c1N0YXRlLCBBY3Rpb24+ID0gKFxyXG4gIHN0YXRlOiBQYXJ0c1N0YXRlLFxyXG4gIGFjdGlvblxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHN0YXRlLnBhcnRzLmxlbmd0aCA8IDdcclxuICAgICAgICA/IHsgcGFydHM6IFsuLi5zdGF0ZS5wYXJ0cywgYWN0aW9uLnBheWxvYWQucGFydF0gfVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIGNhc2UgXCJSRU1PVkVfUEFSVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5maWx0ZXIoKHBhcnQpID0+IHBhcnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJDSEFOR0VfQ1VTVE9NX0RFVEFJTFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRzOiBzdGF0ZS5wYXJ0cy5tYXAoKHBhcnQpID0+IHtcclxuICAgICAgICAgIGlmIChwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCkgcmV0dXJuIHBhcnQ7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGFydCwgZGV0YWlsczogYWN0aW9uLnBheWxvYWQuZGV0YWlscyB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9GUk9NX0NBQ0hFXCI6XHJcbiAgICAgIHJldHVybiB7IHBhcnRzOiBhY3Rpb24ucGF5bG9hZC5wYXJ0cyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhcnRzU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PFBhcnRzU3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcclxuICB1bmRlZmluZWRcclxuKTtcclxuXHJcbmNvbnN0IFBhcnRzRGlzcGF0Y2hDb250ZXh0OiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJ0c1Byb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGluaXRpYWxQYXJ0c1N0YXRlLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBpbml0aWFsUGFydHNTdGF0ZT86IFBhcnRzU3RhdGU7XHJcbn0pID0+IEpTWC5FbGVtZW50ID0gKHsgY2hpbGRyZW4sIGluaXRpYWxQYXJ0c1N0YXRlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBwYXJ0c1JlZHVjZXIsXHJcbiAgICBpbml0aWFsUGFydHNTdGF0ZSA/IGluaXRpYWxQYXJ0c1N0YXRlIDogeyBwYXJ0czogW10gfVxyXG4gICk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWUuc2V0KFwicGFydHNcIiwgc3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShDb29raWUuZ2V0KFwicGFydHNcIikpKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXJ0c1N0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8UGFydHNEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUGFydHNEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1BhcnRzU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFydHNTdGF0ZSA9ICgpOiBQYXJ0c1N0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0OiBQYXJ0c1N0YXRlID0gUmVhY3QudXNlQ29udGV4dChQYXJ0c1N0YXRlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gUGFydHNQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFydHNEaXNwYXRjaCA9ICgpOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+ID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChQYXJ0c0Rpc3BhdGNoQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gUGFydHNQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgc3F1YXJlczogeyBwYXJ0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCB9W107XHJcbn07XHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBudW1iZXJPZlNxdWFyZXM/OiBudW1iZXI7XHJcbiAgICBwYXJ0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGluZGV4PzogbnVtYmVyO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHNxdWFyZXNSZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFN0YXRlLCBBY3Rpb24+ID0gKFxyXG4gIHN0YXRlOiBTdGF0ZSxcclxuICBhY3Rpb246IEFjdGlvblxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1NRVUFSRVNcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBbLi4ubmV3IEFycmF5KGFjdGlvbi5wYXlsb2FkLm51bWJlck9mU3F1YXJlcyldLm1hcCgoKSA9PiAoe1xyXG4gICAgICAgICAgcGFydDogbnVsbCxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQUREX1BBUlRfVE9fU1FVQVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogc3RhdGUuc3F1YXJlcy5tYXAoKHNxdWFyZSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgID8gc3F1YXJlXHJcbiAgICAgICAgICAgIDogeyBwYXJ0OiBhY3Rpb24ucGF5bG9hZC5wYXJ0IH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiUkVNT1ZFX1BBUlRfRlJPTV9TUVVBUkVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzcXVhcmVzOiBzdGF0ZS5zcXVhcmVzLm1hcCgoc3F1YXJlLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaSAhPT0gYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgPyB7IHBhcnQ6IGFjdGlvbi5wYXlsb2FkLnBhcnQgfVxyXG4gICAgICAgICAgICA6IHNxdWFyZTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTcXVhcmVzQ29udGV4dDogUmVhY3QuQ29udGV4dDxTdGF0ZT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBTcXVhcmVzRGlzcGF0Y2g6IFJlYWN0LkNvbnRleHQ8XHJcbiAgUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiB8IHVuZGVmaW5lZFxyXG4+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNxdWFyZXNQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxuICBpbml0aWFsU3F1YXJlc1N0YXRlLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBpbml0aWFsU3F1YXJlc1N0YXRlPzogU3RhdGU7XHJcbn0pID0+IEpTWC5FbGVtZW50ID0gKHsgY2hpbGRyZW4sIGluaXRpYWxTcXVhcmVzU3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgIHNxdWFyZXNSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFNxdWFyZXNTdGF0ZVxyXG4gICAgICA/IGluaXRpYWxTcXVhcmVzU3RhdGVcclxuICAgICAgOiB7XHJcbiAgICAgICAgICBzcXVhcmVzOiBbXSxcclxuICAgICAgICB9XHJcbiAgKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZS5zZXQoXCJzcXVhcmVzXCIsIHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoQ29va2llLmdldChcInNxdWFyZXNcIikpKTtcclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTcXVhcmVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8U3F1YXJlc0Rpc3BhdGNoLlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1NxdWFyZXNEaXNwYXRjaC5Qcm92aWRlcj5cclxuICAgIDwvU3F1YXJlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTcXVhcmVzU3RhdGUgPSAoKTogU3RhdGUgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBTcXVhcmVzIFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTcXVhcmVzRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoU3F1YXJlc0Rpc3BhdGNoKTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIGdyaWRUZW1wbGF0ZTogc3RyaW5nO1xyXG59O1xyXG5cclxudHlwZSBBY3Rpb24gPSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IHtcclxuICAgIGdyaWRUZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBncmlkUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJBRERfR1JJRF9URU1QTEFURVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhvdXJTdHJpbmdzOiBhY3Rpb24ucGF5bG9hZC5ob3VyU3RyaW5ncyxcclxuICAgICAgICBncmlkVGVtcGxhdGU6IGFjdGlvbi5wYXlsb2FkLmdyaWRUZW1wbGF0ZSxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgR3JpZFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxTdGF0ZT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBHcmlkRGlzcGF0Y2hDb250ZXh0OiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUHJvdmlkZXI6ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgaW5pdGlhbEdyaWRTdGF0ZSxcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgaW5pdGlhbEdyaWRTdGF0ZT86IFN0YXRlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsR3JpZFN0YXRlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBncmlkUmVkdWNlcixcclxuICAgIGluaXRpYWxHcmlkU3RhdGVcclxuICAgICAgPyBpbml0aWFsR3JpZFN0YXRlXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlOiBcIlwiLFxyXG4gICAgICAgICAgaG91clN0cmluZ3M6IFtdLFxyXG4gICAgICAgIH1cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcImdyaWRcIiwgc3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShDb29raWUuZ2V0KFwiZ3JpZFwiKSkpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPEdyaWREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvR3JpZERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvR3JpZFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdyaWRTdGF0ZSA9ICgpOiBTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoR3JpZFN0YXRlQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIEdyaWRQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR3JpZERpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdyaWREaXNwYXRjaENvbnRleHQpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBHcmlkUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=