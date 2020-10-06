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
  }, [state]);
  return __jsx(SquaresContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(SquaresDispatch.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
  }, [state]);
  return __jsx(GridStateContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(GridDispatchContext.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWNjb3VudERpc3BsYXkvQWNjb3VudERpc3BsYXkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50RGlzcGxheS9BY2NvdW50RGlzcGxheS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50RGlzcGxheS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L0RhdGVQYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L0RyYWdQaWVjZS9EcmFnUGllY2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvRHJhZ1BpZWNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvRGV0YWlsc1NlY3Rpb24vRGV0YWlsc1NlY3Rpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydC9Ob3JtYWxQaWVjZS9EZXRhaWxzU2VjdGlvbi9EZXRhaWxzU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydC9Ob3JtYWxQaWVjZS9EZXRhaWxzU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L05vcm1hbFBpZWNlL05vcm1hbFBpZWNlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvTm9ybWFsUGllY2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvUGFydEltYWdlL1BhcnRJbWFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVQYXJ0L05vcm1hbFBpZWNlL1BhcnRJbWFnZS9QYXJ0SW1hZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvUGFydEltYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnQvTm9ybWFsUGllY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydHMvRGF0ZVBhcnRzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0ZVBhcnRzL0RhdGVQYXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlUGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVIYW1idXJnZXIvTW9iaWxlSGFtYnVyZ2VyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlSGFtYnVyZ2VyL01vYmlsZUhhbWJ1cmdlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVIYW1idXJnZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVNZW51L01vYmlsZU1lbnUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVNZW51L01vYmlsZU1lbnUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlTWVudS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9OYXYubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYvTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkxpbmtzL05hdkxpbmtzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2TGlua3MvTmF2TGlua3MudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2TGlua3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0c0ljb24vUGFydHNJY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFydHNJY29uL1BhcnRzSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0c0ljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZUdyaWQvU2NoZWR1bGVHcmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2NoZWR1bGVHcmlkL1NjaGVkdWxlR3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TY2hlZHVsZUdyaWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvTG9naWMvU2NoZWR1bGVHcmlkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL0V2ZW50c0lucHV0L0V2ZW50c0lucHV0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL0V2ZW50c0lucHV0L0V2ZW50c0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9FdmVudHNJbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9QbGFjZXNJbnB1dC9QbGFjZXNJbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9QbGFjZXNJbnB1dC9QbGFjZXNJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvUGxhY2VzSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvU2VhcmNoU2VsZWN0b3IvU2VhcmNoU2VsZWN0b3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvU2VhcmNoU2VsZWN0b3IvU2VhcmNoU2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1NlYXJjaFNlbGVjdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZW5JbnB1dC9XaGVuSW5wdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvV2hlbklucHV0L1doZW5JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvV2hlbklucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZXJlSW5wdXQvV2hlcmVJbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC9QYXJ0cy9XaGVyZUlucHV0L1doZXJlSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1BhcnRzL1doZXJlSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvUGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvU2VhcmNoQm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQm94L1NlYXJjaEJveC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hJY29uL1NlYXJjaEljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hJY29uL1NlYXJjaEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoSWNvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50RGVzY3JpcHRpb24vRXZlbnREZXNjcmlwdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50RGVzY3JpcHRpb24vRXZlbnREZXNjcmlwdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvRXZlbnRzSW5mby9FdmVudERlc2NyaXB0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRQcmljZUdlbnJlL0V2ZW50UHJpY2VHZW5yZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50UHJpY2VHZW5yZS9FdmVudFByaWNlR2VucmUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRQcmljZUdlbnJlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRUaW1lc1ZlbnVlL0V2ZW50VGltZXNWZW51ZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9FdmVudHNJbmZvL0V2ZW50VGltZXNWZW51ZS9FdmVudFRpbWVzVmVudWUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vRXZlbnRUaW1lc1ZlbnVlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL0V2ZW50c0luZm8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvSW1hZ2VCYWNrZ3JvdW5kL0ltYWdlQmFja2dyb3VuZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9JbWFnZUJhY2tncm91bmQvSW1hZ2VCYWNrZ3JvdW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9JbWFnZUJhY2tncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGFydExpbmsvUGFydExpbmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGFydExpbmsvUGFydExpbmsudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BhcnRMaW5rL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vTG9jYXRpb24vTG9jYXRpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9Mb2NhdGlvbi9Mb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9Mb2NhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9QYXJ0cy9QbGFjZXNJbmZvL1Bob25lL1Bob25lLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUGhvbmUvUGhvbmUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUGhvbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9QcmljZUFuZFR5cGUvUHJpY2VBbmRUeXBlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vUHJpY2VBbmRUeXBlL1ByaWNlQW5kVHlwZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9QcmljZUFuZFR5cGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9SZXZpZXdzL1Jldmlld3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUGFydHMvUGxhY2VzSW5mby9SZXZpZXdzL1Jldmlld3MudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9SZXN1bHRDYXJkL1BhcnRzL1BsYWNlc0luZm8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1Jlc3VsdENhcmQvUmVzdWx0Q2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9SZXN1bHRDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvUmVzdWx0Q2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWtuZExvYWRlci9TZWtuZExvYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nla25kTG9hZGVyL1Nla25kTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nla25kTG9hZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvRGF0ZVBhcnRzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RhdGUvR3JpZFNxdWFyZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zdGF0ZS9TZWFyY2hHcmlkQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRlcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIiXSwibmFtZXMiOlsiQWNjb3VudERpc3BsYXkiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJsb2dnZWRJbiIsImNzcyIsImFjY291bnREaXNwbGF5IiwiRGF0ZVBhcnQiLCJsb2NhdGlvbiIsInBhcnQiLCJncmlkSW5kZXgiLCJpZCIsIkRyYWdQaWVjZSIsInJlbmRlciIsIkRldGFpbHNTZWN0aW9uIiwicHJpY2UiLCJkYXRlIiwiZGV0YWlscyIsImRpc3BhdGNoIiwidXNlUGFydHNEaXNwYXRjaCIsImRlZmluZVNlY3Rpb25zIiwiY3VzdG9tRGV0YWlscyIsInRhcmdldCIsInR5cGUiLCJwYXlsb2FkIiwidmFsdWUiLCJwYXJ0RGV0YWlscyIsIk5vcm1hbFBpZWNlIiwiZXh0ZW5kIiwiaW1hZ2VMb2FkZWQiLCJkZXRlcm1pbmVJbWFnZUJhY2tncm91bmRTb3VyY2UiLCJzb3VyY2UiLCJpbWFnZV91cmwiLCJpbWFnZXMiLCJ1cmwiLCJkZXRlcm1pbmVQYXJ0RGV0YWlscyIsImRldGVybWluZVZlbnVlIiwiYnVzaW5lc2Vzc19pZCIsImJ1c2luZXNzX2lkIiwiX2VtYmVkZGVkIiwidmVudWVzIiwibmFtZSIsImRldGVybWluZVByaWNlIiwiY29zdCIsInByaWNlUmFuZ2VzIiwibm9ybWFsUGllY2UiLCJleHRlbmRlZCIsImNvbG9yIiwicGFydFRpdGxlIiwiZGVsZXRlIiwiUGFydEltYWdlIiwiY2hpbGRyZW4iLCJwYXJ0SW1hZ2UiLCJiYWNrZ3JvdW5kIiwiRGF0ZVBhcnRzIiwicGFydHMiLCJ1c2VQYXJ0c1N0YXRlIiwiaW5wdXQiLCJoYW5kbGVQYXJ0U3VibWl0IiwiYWxlcnQiLCJNYXRoIiwicmFuZG9tIiwiZGF0ZVBhcnRzIiwicGFydHNXcmFwcGVyIiwicGFydElucHV0IiwiY29sb3JJbnB1dCIsImFkZCIsInBhcnRzTGlzdCIsInBhcnRzSW5uZXIiLCJtYXAiLCJtb2RhbCIsIk1vYmlsZUhhbWJ1cmdlciIsImRpc3BsYXlMaW5rcyIsImxpbmtzIiwic3RvcFdpbmRvd1Njcm9sbCIsImhhbmRsZUNsaWNrIiwiZGlzcGxheSIsImhhbWJ1cmdlciIsImV4aXQiLCJ0b3BMaW5lIiwibWlkZGxlTGluZSIsImJvdHRvbUxpbmUiLCJNb2JpbGVNZW51IiwibW9iaWxlTWVudSIsIm1vZGFsU2VjdGlvbiIsIk5hdiIsImRpc3BsYXlQYXJ0cyIsInNlYXJjaEJveCIsImRpc3BsYXlTZWFyY2hCb3giLCJhcHBseVRyYW5zaXRpb25zIiwibW9kYWxXaW5kb3ciLCJlbnRlciIsImVudGVyQWN0aXZlIiwiZXhpdEFjdGl2ZSIsImFwcGx5TW9kYWxUcmFuc2l0aW9ucyIsImVsZW1lbnQiLCJzdG9wIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3dZIiwibmF2IiwibG9nb0xpbmsiLCJOYXZMaW5rcyIsIm9yaWVudGF0aW9uIiwibGlua3NXcmFwcGVyIiwiUGFydHNJY29uIiwicGFydHNJY29uIiwic3QxIiwic3QwIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdDIiLCJTY2hlZHVsZUdyaWQiLCJncmlkV3JhcHBlciIsImlubmVyR3JpZCIsImNvbnN0cnVjdG9yIiwidW5peFN0YXJ0RGF0ZSIsInVuaXhFbmREYXRlIiwic3RhcnRIb3VyIiwiaG91ckRpZmZlcmVuY2UiLCJ0ZW1wbGF0ZUFyZWFzIiwiY29sdW1uQW1vdW50IiwiZW5kSG91ciIsImhvdXJTdHJpbmdzIiwibnVtYmVyb2ZTcXVhcmVzIiwic2V0U3F1YXJlcyIsInRpbWVEaWZmZXJlbmNlIiwiaG91cnMiLCJmbG9vciIsIm51bUNvbHVtbnMiLCJudW1iZXJPZlNxdWFyZXMiLCJzZXRIb3VycyIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwiZ2V0SG91cnMiLCJzZXRHcmlkVGVtcGxhdGUiLCJzcXVhcmUiLCJyb3dTdHJpbmciLCJyZXBlYXQiLCJzZXRIb3Vyc0hlYWRlciIsImhvdXJDb3VudGVyIiwic3RhcnRIb3VyQ291bnRlciIsImhvdXJOdW1iZXJzIiwicHVzaCIsImZvckVhY2giLCJob3VyIiwic2V0R3JpZCIsIkV2ZW50c0lucHV0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudHNDYXRlZ29yeSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiZmllbGQiLCJldmVudHMiLCJQbGFjZXNJbnB1dCIsInBsYWNlVHlwZSIsInBsYWNlcyIsIlNlYXJjaFNlbGVjdG9yIiwic2VhcmNoVHlwZSIsImhpZ2hsaWdodCIsInNldEhpZ2hsaWdodCIsImFsbCIsInNlYXJjaFNlbGVjdG9yIiwic2VsZWN0b3IiLCJoaWdobGlnaHRlZCIsImFsbFNWRyIsIldoZW5JbnB1dCIsImhhbmRsZVF1ZXJ5RGF0ZSIsImhhbmRsZURhdGVDaGFuZ2UiLCJ0b2RheSIsIndoZW4iLCJmcm9tIiwidG8iLCJXaGVyZUlucHV0IiwicmFkaXVzIiwid2hlcmUiLCJTZWFyY2hCb3giLCJwcm9wcyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJzdGFydEZvcm1hdHRlZCIsImVuZEZvcm1hdHRlZCIsInRpY2tldE1hc3RlckNhdGVnb3JpZXMiLCJ5ZWxwQ2F0ZWdvcmllcyIsInNxdWFyZXNEaXNwYXRjaCIsInVzZVNxdWFyZXNEaXNwYXRjaCIsImdyaWREaXNwYXRjaCIsInVzZUdyaWREaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsIm5ld0RhdGVzSW5wdXQiLCJncmlkVGVtcGxhdGUiLCJjaGVja0ZpZWxkc0Rpc3BsYXlMaW5rIiwicGF0aG5hbWUiLCJxdWVyeSIsImtleSIsInJvdW5kIiwiZ2V0VGltZSIsInRpbWVPZmZTZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsImxvY2FsU3RhcnRUaW1lSVNPIiwidG9JU09TdHJpbmciLCJsb2NhbFN0YXJ0VGltZUlTT0Zvcm1hdHRlZCIsInN1YnN0cmluZyIsImxvY2FsRW5kVGltZUlTTyIsImxvY2FsRW5kVGltZUlTT0Zvcm1hdHRlZCIsIlNlYXJjaEljb24iLCJzZWFyY2hJY29uIiwiRXZlbnREZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwidW53YW50ZWRDaGFyYWN0ZXJzIiwiZGVzY3JpcHRpb25XcmFwcGVyIiwic2VhcmNoIiwicmVwbGFjZSIsIkV2ZW50UHJpY2VHZW5yZSIsInZlbnVlIiwiZ2VucmUiLCJwYXJzZVByaWNlIiwibWluIiwidHJ1ZVByaWNlIiwicHJpY2VTdHJpbmciLCJ0b1N0cmluZyIsImRlY2ltYWxJbmRleCIsImluZGV4T2YiLCJjZW50cyIsImxlbmd0aCIsInNldEdlbnJlIiwiY2hhcmFjdGVyU3BsaXQiLCJzcGxpdHRlZCIsInNwbGl0IiwidXBwZXJDYXNlIiwid29yZCIsInRvVXBwZXJDYXNlIiwiam9pbiIsInNlZ21lbnRTdHJpbmciLCJnZW5yZVN0cmluZyIsInNlZ21lbnQiLCJldmVudFByaWNlIiwiRXZlbnRUaW1lc1ZlbnVlIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImRpc3BsYXlWZW51ZSIsInBhcnNlWWVscFRpbWVzIiwieWVscFN0YXJ0T2JqZWN0IiwieWVscEVuZE9iamVjdCIsInllbHBTdGFydFRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJzdGFydEFtUG0iLCJzdGFydFdpdGhvdXRTZWNvbmRzIiwieWVscFN0YXJ0Rm9ybWF0dGVkVGltZSIsInllbHBTdGFydERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwieWVscEVuZFRpbWUiLCJlbmRBbVBtIiwiZW5kV2l0aG91dFNlY29uZHMiLCJ5ZWxwRW5kRm9ybWF0dGVkVGltZSIsInllbHBFbmREYXRlIiwicGFyc2VUaWNrZXRNYXN0ZXJUaW1lIiwidGlja2V0bWFzdGVyU3RhcnRPYmplY3QiLCJ0aWNrZXRtYXN0ZXJTdGFydFRpbWUiLCJ0aWNrZXRtYXN0ZXJTdGFydEZvcm1hdHRlZFRpbWUiLCJ0aWNrZXRtYXN0ZXJEYXRlIiwiZGV0ZXJtaW5lU291cmNlIiwidGltZXMiLCJJbWFnZUJhY2tncm91bmQiLCJoYW5kbGVSZXRyYWN0IiwiZGV0ZXJtaW5lSW1hZ2VSYXRpbyIsImJ5V2lkdGgiLCJpbWdCYWNrZ3JvdW5kIiwiUGFydExpbmsiLCJsaW5rIiwiTG9jYXRpb24iLCJzdHJlZXQiLCJjaXR5IiwiYWRkcmVzcyIsIlBob25lIiwicGhvbmUiLCJQcmljZUFuZFR5cGUiLCJpbnNlcnRDaXR5Iiwic2luZ3VsYXJUeXBlIiwiaW5kZXhMYXN0TGV0dGVyIiwibWFyZ2luTGVmdCIsInBsYWNlUHJpY2UiLCJsaWdodCIsIlJldmlld3MiLCJyZXZpZXdDb3VudCIsInJhdGluZyIsInNldFN0YXJzIiwiRW1wdHlTdGFyIiwiZmlsbCIsIkZ1bGxTdGFyIiwiSGFsZlN0YXIiLCJyYXRpbmdJbnQiLCJyZW1haW5kZXIiLCJzdGFyVHlwZXMiLCJuZXdTdGFycyIsIml0ZW0iLCJpbmRleCIsInJldmlld1dyYXBwZXIiLCJzdGFyV3JhcHBlciIsInN0YXIiLCJSZXN1bHRDYXJkIiwicmVzdWx0c0xvYWRpbmciLCJhZGRlZCIsIm1vcmVJbmZvIiwiR2xvYmFsUGFydHMiLCJpIiwibW9yZURldGFpbHMiLCJkZXRhaWxzV3JhcHBlciIsImRpc3BsYXlfYWRkcmVzcyIsImV2ZW50X3NpdGVfdXJsIiwic2V0Q2FyZERldGFpbHMiLCJpbmZvQmFyIiwidGl0bGUiLCJyZXZpZXdfY291bnQiLCJjYXRlZ29yaWVzIiwic3RhcnNXcmFwcGVyIiwidGlja2V0bWFzdGVyQ2xhc3NpZmljYXRpb24iLCJjbGFzc2lmaWNhdGlvbnMiLCJ0aW1lX3N0YXJ0IiwiZGF0ZXMiLCJzdGFydCIsImxvY2FsRGF0ZSIsImxvY2FsVGltZSIsInRpbWVfZW5kIiwiY2F0ZWdvcnkiLCJoYW5kbGVQYXJ0IiwicmVzdWx0Q2FyZCIsImFkZEJ1dHRvbiIsImxvYWRpbmdBZGQiLCJsb2FkaW5nQmFyIiwibG9hZGVkIiwibG9hZGluZyIsInJlbW92ZSIsInN0b3BQcm9wYWdhdGlvbiIsIlNla25kTG9hZGVyIiwibG9hZGVyIiwic2VrbmRIYW5kIiwiTGF5b3V0IiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInN1Y2Nlc3MiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicmVzb2x2ZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSG9tZSIsInBhcnRzUmVkdWNlciIsImFjdGlvbiIsImZpbHRlciIsIlBhcnRzU3RhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiUGFydHNEaXNwYXRjaENvbnRleHQiLCJQYXJ0c1Byb3ZpZGVyIiwiaW5pdGlhbFBhcnRzU3RhdGUiLCJDb29raWUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJjb250ZXh0IiwiRXJyb3IiLCJzcXVhcmVzUmVkdWNlciIsInNxdWFyZXMiLCJTcXVhcmVzQ29udGV4dCIsIlNxdWFyZXNEaXNwYXRjaCIsIlNxdWFyZXNQcm92aWRlciIsImluaXRpYWxTcXVhcmVzU3RhdGUiLCJ1c2VTcXVhcmVzU3RhdGUiLCJncmlkUmVkdWNlciIsIkdyaWRTdGF0ZUNvbnRleHQiLCJHcmlkRGlzcGF0Y2hDb250ZXh0IiwiR3JpZFByb3ZpZGVyIiwiaW5pdGlhbEdyaWRTdGF0ZSIsInVzZUdyaWRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhY2NvdW50RGlzcGxheVwiOiBcIkFjY291bnREaXNwbGF5X2FjY291bnREaXNwbGF5X18xTUNudVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vQWNjb3VudERpc3BsYXkubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50RGlzcGxheTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7IGxvZ2dlZEluOiBib29sZWFuIH0+KHtcclxuICAgIGxvZ2dlZEluOiBmYWxzZSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5hY2NvdW50RGlzcGxheX0+XHJcbiAgICAgIDxzcGFuPiB7c3RhdGUubG9nZ2VkSW4gPyBcIkdyYW50XCIgOiBcIlNpZ24gSW5cIn08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBBY2NvdW50RGlzcGxheSB9IGZyb20gXCIuL0FjY291bnREaXNwbGF5XCI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOb3JtYWxQaWVjZSB9IGZyb20gXCIuL05vcm1hbFBpZWNlXCI7XHJcbmltcG9ydCB7IERyYWdQaWVjZSB9IGZyb20gXCIuL0RyYWdQaWVjZVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIHBhcnQ6IHt9O1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRGF0ZVBhcnQ6IFJlYWN0LkZDPHtcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIHBhcnQ6IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgZ3JpZEluZGV4OiBudW1iZXIgfCBudWxsO1xyXG59PiA9ICh7IGxvY2F0aW9uLCBwYXJ0LCBncmlkSW5kZXggfSkgPT4ge1xyXG4gIHJldHVybiBsb2NhdGlvbiA9PT0gXCJsaXN0XCIgPyAoXHJcbiAgICA8Tm9ybWFsUGllY2Uga2V5PXtwYXJ0LmlkfSBwYXJ0PXtwYXJ0fT48L05vcm1hbFBpZWNlPlxyXG4gICkgOiAoXHJcbiAgICA8RHJhZ1BpZWNlPjwvRHJhZ1BpZWNlPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdQaWVjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgeyBEcmFnUGllY2UgfSBmcm9tIFwiLi9EcmFnUGllY2VcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY3VzdG9tRGV0YWlsc1wiOiBcIkRldGFpbHNTZWN0aW9uX2N1c3RvbURldGFpbHNfXzFMTDRaXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB1c2VQYXJ0c0Rpc3BhdGNoLFxyXG4gIHVzZVBhcnRzU3RhdGUsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0YXRlL0RhdGVQYXJ0c0NvbnRleHRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9EZXRhaWxzU2VjdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbHNTZWN0aW9uOiBSZWFjdC5GQzx7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgbG9jYXRpb24/OiBzdHJpbmc7XHJcbiAgcHJpY2U/OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgZGF0ZT86IHN0cmluZztcclxuICBkZXRhaWxzPzogc3RyaW5nO1xyXG59PiA9ICh7IGxvY2F0aW9uLCBwcmljZSwgZGF0ZSwgaWQsIGRldGFpbHMgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlUGFydHNEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGRlZmluZVNlY3Rpb25zOiAoKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICAgIGlmICghbG9jYXRpb24gJiYgIXByaWNlICYmICFkYXRlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5jdXN0b21EZXRhaWxzfVxyXG4gICAgICAgICAgdmFsdWU9e2RldGFpbHN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17ZGV0YWlscyA9PT0gXCJcIiA/IFwiRW50ZXIgaW4gc29tZSBkZXRhaWxzXCIgOiBkZXRhaWxzfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PlxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJDSEFOR0VfQ1VTVE9NX0RFVEFJTFwiLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHsgaWQsIGRldGFpbHM6IHRhcmdldC52YWx1ZSB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtjc3MucGFydERldGFpbHN9PjwvcD47XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gZGVmaW5lU2VjdGlvbnMoKTtcclxufTtcclxuIiwiZXhwb3J0IHsgRGV0YWlsc1NlY3Rpb24gfSBmcm9tIFwiLi9EZXRhaWxzU2VjdGlvblwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJub3JtYWxQaWVjZVwiOiBcIk5vcm1hbFBpZWNlX25vcm1hbFBpZWNlX18zek4yZ1wiLFxuXHRcImV4dGVuZGVkXCI6IFwiTm9ybWFsUGllY2VfZXh0ZW5kZWRfXzItUWhCXCIsXG5cdFwicGFydFRpdGxlXCI6IFwiTm9ybWFsUGllY2VfcGFydFRpdGxlX18yb0N2cVwiLFxuXHRcImRlbGV0ZVwiOiBcIk5vcm1hbFBpZWNlX2RlbGV0ZV9fM2pBUlRcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL05vcm1hbFBpZWNlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IERldGFpbHNTZWN0aW9uIH0gZnJvbSBcIi4vRGV0YWlsc1NlY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlUGFydHNEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi8uLi9zdGF0ZS9EYXRlUGFydHNDb250ZXh0XCI7XHJcbmltcG9ydCB7IFBhcnRJbWFnZSB9IGZyb20gXCIuL1BhcnRJbWFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vcm1hbFBpZWNlOiBSZWFjdC5GQzx7IHBhcnQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfT4gPSAoe1xyXG4gIHBhcnQsXHJcbn0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPHtcclxuICAgIGV4dGVuZDogYm9vbGVhbjtcclxuICAgIGltYWdlTG9hZGVkOiBib29sZWFuO1xyXG4gIH0+KHtcclxuICAgIGV4dGVuZDogZmFsc2UsXHJcbiAgICBpbWFnZUxvYWRlZDogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VQYXJ0c0Rpc3BhdGNoKCk7XHJcbiAgY29uc3QgZGV0ZXJtaW5lSW1hZ2VCYWNrZ3JvdW5kU291cmNlOiAoKSA9PiBzdHJpbmcgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHBhcnQudHlwZSkge1xyXG4gICAgICBjYXNlIFwicGxhY2VcIjpcclxuICAgICAgICByZXR1cm4gcGFydC5zb3VyY2UgPT09IFwieWVscFwiID8gcGFydC5pbWFnZV91cmwgOiBudWxsO1xyXG4gICAgICBjYXNlIFwiZXZlbnRcIjpcclxuICAgICAgICByZXR1cm4gcGFydC5zb3VyY2UgPT09IFwieWVscFwiID8gcGFydC5pbWFnZV91cmwgOiBwYXJ0LmltYWdlc1swXS51cmw7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lUGFydERldGFpbHM6ICgpID0+IEpTWC5FbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChwYXJ0LnR5cGUpIHtcclxuICAgICAgY2FzZSBcImN1c3RvbVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RGV0YWlsc1NlY3Rpb24gaWQ9e3BhcnQuaWR9IGRldGFpbHM9e3BhcnQuZGV0YWlsc30+PC9EZXRhaWxzU2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiZXZlbnRcIjpcclxuICAgICAgICBjb25zdCBkZXRlcm1pbmVWZW51ZTogKCkgPT4gc3RyaW5nIHwgbnVsbCA9ICgpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAocGFydC5zb3VyY2UpIHtcclxuICAgICAgICAgICAgY2FzZSBcInllbHBcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gIXBhcnQuYnVzaW5lc2Vzc19pZCB8fCBwYXJ0LmJ1c2luZXNzX2lkID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogcGFydC5idXNpbmVzc19pZDtcclxuICAgICAgICAgICAgY2FzZSBcInRpY2tldG1hc3RlclwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJ0Ll9lbWJlZGRlZC52ZW51ZXNbMF0ubmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBkZXRlcm1pbmVQcmljZTogKCkgPT5cclxuICAgICAgICAgIHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfVxyXG4gICAgICAgICAgfCBudWxsXHJcbiAgICAgICAgICB8IHN0cmluZyA9ICgpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAocGFydC5zb3VyY2UpIHtcclxuICAgICAgICAgICAgY2FzZSBcInllbHBcIjpcclxuICAgICAgICAgICAgICBpZiAoIXBhcnQuY29zdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnQuY29zdDtcclxuICAgICAgICAgICAgY2FzZSBcInRpY2tldG1hc3RlclwiOlxyXG4gICAgICAgICAgICAgIGlmICghcGFydC5wcmljZVJhbmdlcykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnQucHJpY2VSYW5nZXNbMF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxEZXRhaWxzU2VjdGlvblxyXG4gICAgICAgICAgICBsb2NhdGlvbj17ZGV0ZXJtaW5lVmVudWUoKX1cclxuICAgICAgICAgICAgLy8gcHJpY2U9e2RldGVybWluZVByaWNlKCl9XHJcbiAgICAgICAgICA+PC9EZXRhaWxzU2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwicGxhY2VcIjpcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtjc3Mubm9ybWFsUGllY2V9ICR7c3RhdGUuZXh0ZW5kID8gY3NzLmV4dGVuZGVkIDogbnVsbH1gfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBleHRlbmQ6IHRydWUgfSkpfVxyXG4gICAgPlxyXG4gICAgICA8UGFydEltYWdlXHJcbiAgICAgICAgdHlwZT17cGFydC50eXBlfVxyXG4gICAgICAgIGNvbG9yPXtwYXJ0LnR5cGUgPT09IFwiY3VzdG9tXCIgPyBwYXJ0LmNvbG9yIDogbnVsbH1cclxuICAgICAgICBpbWFnZUxvYWRlZD17c3RhdGUuaW1hZ2VMb2FkZWR9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e2RldGVybWluZUltYWdlQmFja2dyb3VuZFNvdXJjZSgpfVxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgaW1hZ2VMb2FkZWQ6IHRydWUgfSkpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvUGFydEltYWdlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBhcnRUaXRsZX0+XHJcbiAgICAgICAgPHNwYW4+e3BhcnQubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3MuZGVsZXRlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlJFTU9WRV9QQVJUXCIsIHBheWxvYWQ6IHsgaWQ6IHBhcnQuaWQgfSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzdGF0ZS5leHRlbmQgPyBkZXRlcm1pbmVQYXJ0RGV0YWlscygpIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhcnRJbWFnZVwiOiBcIlBhcnRJbWFnZV9wYXJ0SW1hZ2VfXzJTd0F4XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9QYXJ0SW1hZ2UubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJ0SW1hZ2U6IFJlYWN0LkZDPHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbiAgaW1hZ2VMb2FkZWQ6IGJvb2xlYW47XHJcbn0+ID0gKHsgdHlwZSwgY29sb3IsIGltYWdlTG9hZGVkLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjc3MucGFydEltYWdlfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICBjb2xvciB8fCBpbWFnZUxvYWRlZFxyXG4gICAgICAgICAgICA/IGNvbG9yXHJcbiAgICAgICAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlZTA5NzksICNmZjZhMDApXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHt0eXBlICE9PSBcImN1c3RvbVwiIHx8ICFpbWFnZUxvYWRlZCA/IGNoaWxkcmVuIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFBhcnRJbWFnZSB9IGZyb20gXCIuL1BhcnRJbWFnZVwiO1xyXG4iLCJleHBvcnQgeyBOb3JtYWxQaWVjZSB9IGZyb20gXCIuL05vcm1hbFBpZWNlXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRhdGVQYXJ0c1wiOiBcIkRhdGVQYXJ0c19kYXRlUGFydHNfXzJOMlFYXCIsXG5cdFwicGFydHNXcmFwcGVyXCI6IFwiRGF0ZVBhcnRzX3BhcnRzV3JhcHBlcl9fU3NjQjVcIixcblx0XCJjb2xvcklucHV0XCI6IFwiRGF0ZVBhcnRzX2NvbG9ySW5wdXRfXzJBeFFkXCIsXG5cdFwicGFydElucHV0XCI6IFwiRGF0ZVBhcnRzX3BhcnRJbnB1dF9fMng5U2RcIixcblx0XCJhZGRcIjogXCJEYXRlUGFydHNfYWRkX18xRlhvX1wiLFxuXHRcInBhcnRzTGlzdFwiOiBcIkRhdGVQYXJ0c19wYXJ0c0xpc3RfXzNVUjZEXCIsXG5cdFwicGFydHNJbm5lclwiOiBcIkRhdGVQYXJ0c19wYXJ0c0lubmVyX18yVU9aOFwiLFxuXHRcIm1vZGFsXCI6IFwiRGF0ZVBhcnRzX21vZGFsX19lTWx5NVwiLFxuXHRcInNjaGVkdWxlUGFnZVwiOiBcIkRhdGVQYXJ0c19zY2hlZHVsZVBhZ2VfXzMwX2I4XCIsXG5cdFwicGFydHMtZW50ZXJcIjogXCJEYXRlUGFydHNfcGFydHMtZW50ZXJfXzJnY2t6XCIsXG5cdFwicGFydHMtZW50ZXItYWN0aXZlXCI6IFwiRGF0ZVBhcnRzX3BhcnRzLWVudGVyLWFjdGl2ZV9fMmNuNW5cIixcblx0XCJwYXJ0cy1leGl0XCI6IFwiRGF0ZVBhcnRzX3BhcnRzLWV4aXRfXzNKOS1SXCIsXG5cdFwicGFydHMtZXhpdC1hY3RpdmVcIjogXCJEYXRlUGFydHNfcGFydHMtZXhpdC1hY3RpdmVfXzFrYnc0XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUGFydHNTdGF0ZSwgdXNlUGFydHNEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9zdGF0ZS9EYXRlUGFydHNDb250ZXh0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vRGF0ZVBhcnRzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IERhdGVQYXJ0IH0gZnJvbSBcIi4uL0RhdGVQYXJ0L0RhdGVQYXJ0XCI7XHJcbmV4cG9ydCBjb25zdCBEYXRlUGFydHM6IFJlYWN0LkZDPHsgbG9jYXRpb246IHN0cmluZyB9PiA9ICh7IGxvY2F0aW9uIH0pID0+IHtcclxuICBjb25zdCB7IHBhcnRzIH0gPSB1c2VQYXJ0c1N0YXRlKCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7IGlucHV0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4oe1xyXG4gICAgaW5wdXQ6IFwiXCIsXHJcbiAgICBjb2xvcjogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlZTA5NzksICNmZjZhMDApXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlUGFydHNEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXJ0U3VibWl0OiAoKSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlLmlucHV0ID09PSBcIlwiKSByZXR1cm4gYWxlcnQoXCJGaWxsIG91dCBpbnB1dFwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBcIkFERF9QQVJUXCIsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgcGFydDoge1xyXG4gICAgICAgICAgICBuYW1lOiBzdGF0ZS5pbnB1dCxcclxuICAgICAgICAgICAgY29sb3I6IHN0YXRlLmNvbG9yLFxyXG4gICAgICAgICAgICB0eXBlOiBcImN1c3RvbVwiLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgICAgICBpZDogYCR7bmFtZX0ke01hdGgucmFuZG9tKCl9YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGlucHV0OiBcIlwiIH0pKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2Nzcy5kYXRlUGFydHN9ICR7Y3NzW2xvY2F0aW9uXX1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wYXJ0c1dyYXBwZXJ9PlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkRhdGUgUGFydHM8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbm90aGVyIElkZWE/XCJcclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+XHJcbiAgICAgICAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgaW5wdXQ6IHRhcmdldC52YWx1ZSB9KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5wYXJ0SW5wdXR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5jb2xvcklucHV0fT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM3OTlmMGMsICNmZmUwMDApXCIsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxNTU3OTksICMxNTk5NTcpXCIsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlZTA5NzksICNmZjZhMDApXCIsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzMzMzk5LCAjZmYwMGNjKVwiLFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGYyMDI3LCAjMmM1MzY0KVwiLFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuYWRkfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBzdGF0ZS5jb2xvciB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYXJ0U3VibWl0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucGFydHNMaXN0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucGFydHNJbm5lcn0+XHJcbiAgICAgICAgICAgIHtwYXJ0cy5tYXAoKHBhcnQpID0+IChcclxuICAgICAgICAgICAgICA8RGF0ZVBhcnRcclxuICAgICAgICAgICAgICAgIGtleT17cGFydC5pZH1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtcImxpc3RcIn1cclxuICAgICAgICAgICAgICAgIHBhcnQ9e3BhcnR9XHJcbiAgICAgICAgICAgICAgICBncmlkSW5kZXg9e3BhcnQuZ3JpZEluZGV4fVxyXG4gICAgICAgICAgICAgID48L0RhdGVQYXJ0PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tb2RhbH0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBEYXRlUGFydHMgfSBmcm9tIFwiLi9EYXRlUGFydHNcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGFtYnVyZ2VyXCI6IFwiTW9iaWxlSGFtYnVyZ2VyX2hhbWJ1cmdlcl9fM3JFV2hcIixcblx0XCJ0b3BMaW5lXCI6IFwiTW9iaWxlSGFtYnVyZ2VyX3RvcExpbmVfXzFRQWxzXCIsXG5cdFwiYm90dG9tTGluZVwiOiBcIk1vYmlsZUhhbWJ1cmdlcl9ib3R0b21MaW5lX18zVnN4bVwiLFxuXHRcImV4aXRcIjogXCJNb2JpbGVIYW1idXJnZXJfZXhpdF9fMXlGQ2tcIixcblx0XCJtaWRkbGVMaW5lXCI6IFwiTW9iaWxlSGFtYnVyZ2VyX21pZGRsZUxpbmVfXzMtb2JlXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9Nb2JpbGVIYW1idXJnZXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IE5hdlN0YXRlIH0gZnJvbSBcIi4uL05hdlwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBkaXNwbGF5TGlua3M6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPE5hdlN0YXRlPj47XHJcbiAgbGlua3M6IE5hdlN0YXRlO1xyXG4gIHN0b3BXaW5kb3dTY3JvbGw6IChhcmc6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTW9iaWxlSGFtYnVyZ2VyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGRpc3BsYXlMaW5rcyxcclxuICBsaW5rcyxcclxuICBzdG9wV2luZG93U2Nyb2xsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgICBpZiAobGlua3MuZGlzcGxheSkge1xyXG4gICAgICByZXR1cm4gZGlzcGxheUxpbmtzKHsgZGlzcGxheTogZmFsc2UgfSksIHN0b3BXaW5kb3dTY3JvbGwoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRpc3BsYXlMaW5rcyh7IGRpc3BsYXk6IHRydWUgfSksIHN0b3BXaW5kb3dTY3JvbGwodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2Ake2Nzcy5oYW1idXJnZXJ9ICR7bGlua3MuZGlzcGxheSA/IGNzcy5leGl0IDogbnVsbH1gfVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50b3BMaW5lfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5taWRkbGVMaW5lfT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5ib3R0b21MaW5lfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IE1vYmlsZUhhbWJ1cmdlciB9IGZyb20gXCIuL01vYmlsZUhhbWJ1cmdlclwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb2JpbGVNZW51XCI6IFwiTW9iaWxlTWVudV9tb2JpbGVNZW51X19KelRYSVwiLFxuXHRcIm1vZGFsU2VjdGlvblwiOiBcIk1vYmlsZU1lbnVfbW9kYWxTZWN0aW9uX18zTEswMFwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdkxpbmtzIH0gZnJvbSBcIi4uL05hdkxpbmtzXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vTW9iaWxlTWVudS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vYmlsZU1lbnU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm1vYmlsZU1lbnV9PlxyXG4gICAgICA8TmF2TGlua3Mgb3JpZW50YXRpb249XCJwb3J0cmFpdFwiPjwvTmF2TGlua3M+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubW9kYWxTZWN0aW9ufT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IE1vYmlsZU1lbnUgfSBmcm9tIFwiLi9Nb2JpbGVNZW51XCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdlwiOiBcIk5hdl9uYXZfXzM2MjRBXCIsXG5cdFwibG9nb0xpbmtcIjogXCJOYXZfbG9nb0xpbmtfXzJRYjBXXCIsXG5cdFwicGFydHMtZW50ZXJcIjogXCJOYXZfcGFydHMtZW50ZXJfXzJEdnBDXCIsXG5cdFwicGFydHMtZW50ZXItYWN0aXZlXCI6IFwiTmF2X3BhcnRzLWVudGVyLWFjdGl2ZV9fMWRwekNcIixcblx0XCJwYXJ0cy1leGl0XCI6IFwiTmF2X3BhcnRzLWV4aXRfXzFNeTU4XCIsXG5cdFwicGFydHMtZXhpdC1hY3RpdmVcIjogXCJOYXZfcGFydHMtZXhpdC1hY3RpdmVfXzJGdU0wXCIsXG5cdFwibGlua3MtZW50ZXJcIjogXCJOYXZfbGlua3MtZW50ZXJfX05FLTc4XCIsXG5cdFwibGlua3MtZW50ZXItYWN0aXZlXCI6IFwiTmF2X2xpbmtzLWVudGVyLWFjdGl2ZV9fMXJIWjdcIixcblx0XCJsaW5rcy1leGl0XCI6IFwiTmF2X2xpbmtzLWV4aXRfXzFVNnVFXCIsXG5cdFwibGlua3MtZXhpdC1hY3RpdmVcIjogXCJOYXZfbGlua3MtZXhpdC1hY3RpdmVfXzJCMmhpXCIsXG5cdFwic2VhcmNoLWVudGVyXCI6IFwiTmF2X3NlYXJjaC1lbnRlcl9fMnFRREZcIixcblx0XCJzZWFyY2gtZW50ZXItYWN0aXZlXCI6IFwiTmF2X3NlYXJjaC1lbnRlci1hY3RpdmVfXzNIQ2tNXCIsXG5cdFwic2VhcmNoLWV4aXRcIjogXCJOYXZfc2VhcmNoLWV4aXRfX21pek13XCIsXG5cdFwic2VhcmNoLWV4aXQtYWN0aXZlXCI6IFwiTmF2X3NlYXJjaC1leGl0LWFjdGl2ZV9fMXl5NXFcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbmltcG9ydCB7IE1vYmlsZUhhbWJ1cmdlciB9IGZyb20gXCIuLi9Nb2JpbGVIYW1idXJnZXJcIjtcclxuaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gXCIuLi9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCB7IERhdGVQYXJ0cyB9IGZyb20gXCIuLi9EYXRlUGFydHNcIjtcclxuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gXCIuLi9TZWFyY2hJY29uXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJveCB9IGZyb20gXCIuLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IHsgTmF2TGlua3MgfSBmcm9tIFwiLi4vTmF2TGlua3NcIjtcclxuaW1wb3J0IHsgUGFydHNJY29uIH0gZnJvbSBcIi4uL1BhcnRzSWNvblwiO1xyXG5pbXBvcnQgeyBBY2NvdW50RGlzcGxheSB9IGZyb20gXCIuLi9BY2NvdW50RGlzcGxheVwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL05hdi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgTmF2U3RhdGUgPSB7XHJcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXY6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwYXJ0cywgZGlzcGxheVBhcnRzXSA9IFJlYWN0LnVzZVN0YXRlPE5hdlN0YXRlPih7IGRpc3BsYXk6IGZhbHNlIH0pO1xyXG4gIGNvbnN0IFtsaW5rcywgZGlzcGxheUxpbmtzXSA9IFJlYWN0LnVzZVN0YXRlPE5hdlN0YXRlPih7IGRpc3BsYXk6IGZhbHNlIH0pO1xyXG4gIGNvbnN0IFtzZWFyY2hCb3gsIGRpc3BsYXlTZWFyY2hCb3hdID0gUmVhY3QudXNlU3RhdGU8TmF2U3RhdGU+KHtcclxuICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGFwcGx5VHJhbnNpdGlvbnM6IChtb2RhbFdpbmRvdzogTmF2U3RhdGUpID0+IEpTWC5FbGVtZW50IHwgbnVsbCA9IChcclxuICAgIG1vZGFsV2luZG93XHJcbiAgKSA9PiB7XHJcbiAgICBpZiAobW9kYWxXaW5kb3cgPT09IGxpbmtzKSB7XHJcbiAgICAgIHJldHVybiBtb2RhbFdpbmRvdy5kaXNwbGF5ID8gKFxyXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICB0aW1lb3V0PXsyNTB9XHJcbiAgICAgICAgICBjbGFzc05hbWVzPXt7XHJcbiAgICAgICAgICAgIGVudGVyOiBgJHtjc3NbXCJsaW5rcy1lbnRlclwiXX1gLFxyXG4gICAgICAgICAgICBlbnRlckFjdGl2ZTogYCR7Y3NzW1wibGlua3MtZW50ZXItYWN0aXZlXCJdfWAsXHJcbiAgICAgICAgICAgIGV4aXQ6IGAke2Nzc1tcImxpbmtzLWV4aXRcIl19YCxcclxuICAgICAgICAgICAgZXhpdEFjdGl2ZTogYCR7Y3NzW1wibGlua3MtZXhpdC1hY3RpdmVcIl19YCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1vYmlsZU1lbnU+PC9Nb2JpbGVNZW51PlxyXG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgKSA6IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKG1vZGFsV2luZG93ID09PSBwYXJ0cykge1xyXG4gICAgICByZXR1cm4gbW9kYWxXaW5kb3cuZGlzcGxheSA/IChcclxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxyXG4gICAgICAgICAgdGltZW91dD17MjUwfVxyXG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xyXG4gICAgICAgICAgICBlbnRlcjogYCR7Y3NzW1wicGFydHMtZW50ZXJcIl19YCxcclxuICAgICAgICAgICAgZW50ZXJBY3RpdmU6IGAke2Nzc1tcInBhcnRzLWVudGVyLWFjdGl2ZVwiXX1gLFxyXG4gICAgICAgICAgICBleGl0OiBgJHtjc3NbXCJwYXJ0cy1leGl0XCJdfWAsXHJcbiAgICAgICAgICAgIGV4aXRBY3RpdmU6IGAke2Nzc1tcInBhcnRzLWV4aXQtYWN0aXZlXCJdfWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEYXRlUGFydHMgbG9jYXRpb249XCJuYXZcIj48L0RhdGVQYXJ0cz5cclxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICAgICkgOiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChtb2RhbFdpbmRvdyA9PT0gc2VhcmNoQm94KSB7XHJcbiAgICAgIHJldHVybiBtb2RhbFdpbmRvdy5kaXNwbGF5ID8gKFxyXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICB0aW1lb3V0PXsyNTB9XHJcbiAgICAgICAgICBjbGFzc05hbWVzPXt7XHJcbiAgICAgICAgICAgIGVudGVyOiBgJHtjc3NbXCJzZWFyY2gtZW50ZXJcIl19YCxcclxuICAgICAgICAgICAgZW50ZXJBY3RpdmU6IGAke2Nzc1tcInNlYXJjaC1lbnRlci1hY3RpdmVcIl19YCxcclxuICAgICAgICAgICAgZXhpdDogYCR7Y3NzW1wic2VhcmNoLWV4aXRcIl19YCxcclxuICAgICAgICAgICAgZXhpdEFjdGl2ZTogYCR7Y3NzW1wic2VhcmNoLWV4aXQtYWN0aXZlXCJdfWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWFyY2hCb3g+PC9TZWFyY2hCb3g+XHJcbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICApIDogbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhcHBseU1vZGFsVHJhbnNpdGlvbnM6IChlbGVtZW50OiBzdHJpbmcpID0+IEpTWC5FbGVtZW50IHwgbnVsbCA9IChcclxuICAgIGVsZW1lbnRcclxuICApID0+IHtcclxuICAgIGlmIChlbGVtZW50ID09PSBcInBhcnRzXCIpIHtcclxuICAgICAgcmV0dXJuIHBhcnRzLmRpc3BsYXkgPyAoXHJcbiAgICAgICAgPENTU1RyYW5zaXRpb25cclxuICAgICAgICAgIHRpbWVvdXQ9ezI1MH1cclxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcclxuICAgICAgICAgICAgZW50ZXI6IGAke2Nzc1tcInNlYXJjaC1lbnRlclwiXX1gLFxyXG4gICAgICAgICAgICBlbnRlckFjdGl2ZTogYCR7Y3NzW1wic2VhcmNoLWVudGVyLWFjdGl2ZVwiXX1gLFxyXG4gICAgICAgICAgICBleGl0OiBgJHtjc3NbXCJzZWFyY2gtZXhpdFwiXX1gLFxyXG4gICAgICAgICAgICBleGl0QWN0aXZlOiBgJHtjc3NbXCJzZWFyY2gtZXhpdC1hY3RpdmVcIl19YCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlYXJjaEJveD48L1NlYXJjaEJveD5cclxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICAgICkgOiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcImxpbmtzXCIpIHtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJzZWFyY2hCb3hcIikge1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3BXaW5kb3dTY3JvbGw6IChzdG9wOiBib29sZWFuKSA9PiB2b2lkID0gKHN0b3ApID0+IHtcclxuICAgIGNvbnN0IGJvZHk6IEhUTUxCb2R5RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGlmIChib2R5KSB7XHJcbiAgICAgIHJldHVybiBzdG9wXHJcbiAgICAgICAgPyAoYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiKVxyXG4gICAgICAgIDogKGJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2Nzcy5uYXZ9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIyOC45OCA0OS4xNFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmxvZ29MaW5rfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGl0bGU+QWx0TG9nb0JsYWNrPC90aXRsZT5cclxuICAgICAgICAgICAgPGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgICAgICAgIDxnIGlkPVwiVHJhY2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNy42Niw0OS4xNGEzMS41MiwzMS41MiwwLDAsMS00Ljc0LS4zNiwyMy42MSwyMy42MSwwLDAsMS03LjY4LTIuNTJBMTAsMTAsMCwwLDEsLjE0LDQxYy0uNzItMi4xLDEuNS00Ljc0LDMuNjYtMy42NmE0LjQxLDQuNDEsMCwwLDEsMS4yNiwxLjMyYzIuMTYsMi42NCw1LjUyLDMuNzgsOC43Niw0LjMyYTIyLjgzLDIyLjgzLDAsMCwwLDcuODYtLjEyYzIuODItLjYsNS41Mi0yLDYuNi00LjhhNi4zMSw2LjMxLDAsMCwwLC4xOC00LjMyYy0xLjM4LTQuMDgtNi40OC01LjU4LTEwLjgtNi40OEE0NS42LDQ1LjYsMCwwLDEsOS4yLDI0Ljc4Yy0yLjg4LTEuMTQtNS43Ni0yLjg4LTcuMzgtNS42NC0yLTMuMy0xLjYyLTguNTItLjQyLTExQzUuMDYuODQsMTIuMTQsMCwxNi4yOCwwYTI1LjE5LDI1LjE5LDAsMCwxLDguOTQsMS41NmMzLjMsMS4yNiw1Ljg4LDMuNDIsNi42Niw1LjdhMi44NSwyLjg1LDAsMCwxLS41NCwyLjgyLDIuNSwyLjUsMCwwLDEtMy4xMi43Miw5LDksMCwwLDEtLjg0LS43MiwxMy42MywxMy42MywwLDAsMC01LjIyLTMuNDIsMTYuMjEsMTYuMjEsMCwwLDAtNS44OC0uNzhjLTQuNjgsMC0xMCwxLjgtMTAsNy4yNiwwLDUsNC4zOCw2LjU0LDE0LjQsOUMzMy41LDI1LjI2LDM1LjE4LDMyLjM0LDM0LDM4LjM0LDMyLjE4LDQ3LjI4LDIxLjYyLDQ5LjE0LDE3LjY2LDQ5LjE0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc5LjgyLDQ1LjE4YTMsMywwLDAsMS0zLDNINDguMTRhMywzLDAsMCwxLTMtM1Y0YTMsMywwLDAsMSwzLTNINzYuMjJhMywzLDAsMCwxLDMsMywzLDMsMCwwLDEtMywzSDUxLjE0VjIxLjQ4aDIyLjJhMywzLDAsMCwxLDMsMywzLDMsMCwwLDEtMywzSDUxLjE0djE0LjdINzYuODJBMywzLDAsMCwxLDc5LjgyLDQ1LjE4WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTk2LjYyLDRWNDUuMThhMywzLDAsMSwxLTYsMFY0YTMsMywwLDEsMSw2LDBabTI3LjYsNDMuODZhMy4yNywzLjI3LDAsMCwxLTEuMzIuMywzLDMsMCwwLDEtMi43LTEuNjgsNTAuOTQsNTAuOTQsMCwwLDAtNy45Mi0xMS44MmMtMy41NC0zLjc4LTYuMjQtNi42LTEwLjMyLTguOTQtLjEyLS4wNi0uMTgtLjEyLS4zLS4xOHMtLjI0LS4xOC0uMzYtLjNhMi45MywyLjkzLDAsMCwxLS43OC0xLjYyLDMuMTEsMy4xMSwwLDAsMSwuMzYtMiwzLjE2LDMuMTYsMCwwLDEsLjcyLS44NGwxOC42LTE4LjlhMywzLDAsMCwxLDQuMjYuMDYsMywzLDAsMCwxLS4wNiw0LjJsLTE2LjIsMTYuNWM3LjU2LDUuMzQsMTMuNSwxMy4yLDE3LjQsMjEuMjRBMywzLDAsMCwxLDEyNC4yMiw0Ny44OFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzUuMTYsNDcuOTRhMy4zMywzLjMzLDAsMCwxLTMuNDgtLjc4bC0yOS0zNC44NlY0NS4xOGEzLDMsMCwxLDEtNiwwVjRBMywzLDAsMCwxLDE0MiwyLjFsMjksMzQuOFY0YTMsMywwLDAsMSwzLTMsMywzLDAsMCwxLDMsM1Y0NS4yNEEyLjYsMi42LDAsMCwxLDE3NS4xNiw0Ny45NFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMDQuNSw0OC4xOEgxOTAuODhhMywzLDAsMCwxLTMuMDYtM1Y0YTIuODEsMi44MSwwLDAsMSwuOS0yLjEsMy4yLDMuMiwwLDAsMSwyLjE2LS45aDEzLjc0QTI0Ljg4LDI0Ljg4LDAsMCwxLDIxNCwyLjg4YTI1Ljc5LDI1Ljc5LDAsMCwxLDcuOCw1LjEsMjMuNjksMjMuNjksMCwwLDEsNS4yMiw3LjU2QTIzLjEsMjMuMSwwLDAsMSwyMjksMjQuNzJhMjEuMzYsMjEuMzYsMCwwLDEtMiw5LDIzLjMzLDIzLjMzLDAsMCwxLTUuMjgsNy41LDI0LjcxLDI0LjcxLDAsMCwxLTcuOCw1LjFBMjUuMzQsMjUuMzQsMCwwLDEsMjA0LjUsNDguMThabS0xMC42Mi02LjA2aDEwLjc0YTE5LjgxLDE5LjgxLDAsMCwwLDctMS40NCwxOC4zMSwxOC4zMSwwLDAsMCw1Ljg4LTMuNzgsMTkuNzUsMTkuNzUsMCwwLDAsNC01LjY0QTE1LjQ5LDE1LjQ5LDAsMCwwLDIyMywyNC43MmExNi41OCwxNi41OCwwLDAsMC0xLjQ0LTYuNzhBMTguNjEsMTguNjEsMCwwLDAsMjA0LjYyLDdIMTkzLjg4WlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPE5hdkxpbmtzIG9yaWVudGF0aW9uPVwibGFuZHNjYXBlXCI+PC9OYXZMaW5rcz5cclxuICAgICAgICA8TW9iaWxlSGFtYnVyZ2VyXHJcbiAgICAgICAgICBkaXNwbGF5TGlua3M9e2Rpc3BsYXlMaW5rc31cclxuICAgICAgICAgIGxpbmtzPXtsaW5rc31cclxuICAgICAgICAgIHN0b3BXaW5kb3dTY3JvbGw9e3N0b3BXaW5kb3dTY3JvbGx9XHJcbiAgICAgICAgPjwvTW9iaWxlSGFtYnVyZ2VyPlxyXG4gICAgICAgIDxBY2NvdW50RGlzcGxheT48L0FjY291bnREaXNwbGF5PlxyXG4gICAgICAgIDxTZWFyY2hJY29uXHJcbiAgICAgICAgICBkaXNwbGF5U2VhcmNoQm94PXtkaXNwbGF5U2VhcmNoQm94fVxyXG4gICAgICAgICAgc2VhcmNoQm94PXtzZWFyY2hCb3h9XHJcbiAgICAgICAgICBzdG9wV2luZG93U2Nyb2xsPXtzdG9wV2luZG93U2Nyb2xsfVxyXG4gICAgICAgID48L1NlYXJjaEljb24+XHJcbiAgICAgICAgPFBhcnRzSWNvblxyXG4gICAgICAgICAgZGlzcGxheVBhcnRzPXtkaXNwbGF5UGFydHN9XHJcbiAgICAgICAgICBwYXJ0cz17cGFydHN9XHJcbiAgICAgICAgICBzdG9wV2luZG93U2Nyb2xsPXtzdG9wV2luZG93U2Nyb2xsfVxyXG4gICAgICAgID48L1BhcnRzSWNvbj5cclxuICAgICAgICA8VHJhbnNpdGlvbkdyb3VwPnthcHBseVRyYW5zaXRpb25zKHBhcnRzKX08L1RyYW5zaXRpb25Hcm91cD5cclxuICAgICAgICA8VHJhbnNpdGlvbkdyb3VwPnthcHBseVRyYW5zaXRpb25zKGxpbmtzKX08L1RyYW5zaXRpb25Hcm91cD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxUcmFuc2l0aW9uR3JvdXA+e2FwcGx5VHJhbnNpdGlvbnMoc2VhcmNoQm94KX08L1RyYW5zaXRpb25Hcm91cD5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgTmF2IH0gZnJvbSBcIi4vTmF2XCI7XHJcbmV4cG9ydCB0eXBlIHsgTmF2U3RhdGUgfSBmcm9tIFwiLi9OYXZcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlua3NXcmFwcGVyXCI6IFwiTmF2TGlua3NfbGlua3NXcmFwcGVyX18zeVVldFwiLFxuXHRcImxhbmRzY2FwZVwiOiBcIk5hdkxpbmtzX2xhbmRzY2FwZV9fMzZheXlcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vTmF2TGlua3MubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZMaW5rczogUmVhY3QuRkM8eyBvcmllbnRhdGlvbjogc3RyaW5nIH0+ID0gKHtcclxuICBvcmllbnRhdGlvbixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPXtgJHtjc3MubGlua3NXcmFwcGVyfSAke2Nzc1tgJHtvcmllbnRhdGlvbn1gXX1gfT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2NoZWR1bGVcIj5TY2hlZHVsZTwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IE5hdkxpbmtzIH0gZnJvbSBcIi4vTmF2TGlua3NcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFydHNJY29uXCI6IFwiUGFydHNJY29uX3BhcnRzSWNvbl9fSF9pVVRcIixcblx0XCJzdDBcIjogXCJQYXJ0c0ljb25fc3QwX181MUFfQlwiLFxuXHRcInN0MVwiOiBcIlBhcnRzSWNvbl9zdDFfXzNfR2RUXCIsXG5cdFwic3QyXCI6IFwiUGFydHNJY29uX3N0Ml9fS3FjN3JcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1BhcnRzSWNvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBOYXZTdGF0ZSB9IGZyb20gXCIuLi9OYXZcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZGlzcGxheVBhcnRzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxOYXZTdGF0ZT4+O1xyXG4gIHBhcnRzOiBOYXZTdGF0ZTtcclxuICBzdG9wV2luZG93U2Nyb2xsOiAoYXJnOiBib29sZWFuKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhcnRzSWNvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBkaXNwbGF5UGFydHMsXHJcbiAgcGFydHMsXHJcbiAgc3RvcFdpbmRvd1Njcm9sbCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gICAgaWYgKHBhcnRzLmRpc3BsYXkpIHtcclxuICAgICAgcmV0dXJuIGRpc3BsYXlQYXJ0cyh7IGRpc3BsYXk6IGZhbHNlIH0pLCBzdG9wV2luZG93U2Nyb2xsKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkaXNwbGF5UGFydHMoeyBkaXNwbGF5OiB0cnVlIH0pLCBzdG9wV2luZG93U2Nyb2xsKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgaWQ9XCJMYXllcl8xXCJcclxuICAgICAgeD1cIjBweFwiXHJcbiAgICAgIHk9XCIwcHhcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI5MCAyOTBcIlxyXG4gICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAyOTAgMjkwXCJcclxuICAgICAgY2xhc3NOYW1lPXtjc3MucGFydHNJY29ufVxyXG4gICAgPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtwYXJ0cy5kaXNwbGF5ID8gY3NzLnN0MSA6IGNzcy5zdDB9XHJcbiAgICAgICAgICBzdHlsZT17eyBzdHJva2U6IFwiYmxhY2tcIiwgc3Ryb2tlV2lkdGg6IFwiMC41dmhcIiB9fVxyXG4gICAgICAgICAgZD1cIk0yODksMTQ1YzAsNzkuNS02NC41LDE0NC0xNDQsMTQ0Yy0zOS44LDAtNzItMzIuMi03Mi03MnMzMi4yLTcyLDcyLTcyczcyLTMyLjIsNzItNzJTMTg0LjgsMSwxNDUsMVxyXG4gICAgQzIyNC41LDEsMjg5LDY1LjUsMjg5LDE0NXpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3BhcnRzLmRpc3BsYXkgPyBjc3Muc3QyIDogY3NzLnN0MX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgc3Ryb2tlV2lkdGg6IFwiMC41dmhcIiB9fVxyXG4gICAgICAgICAgICBkPVwiTTExNiwyODQuNUM1MS4zLDI3MS4xLDIuNSwyMTMuNiwyLjUsMTQ1QzIuNSw2Ni40LDY2LjQsMi41LDE0NSwyLjVjMzguOSwwLDcwLjUsMzEuNiw3MC41LDcwLjVcclxuICAgICAgICBzLTMxLjYsNzAuNS03MC41LDcwLjVjLTQwLjUsMC03My41LDMzLTczLjUsNzMuNUM3MS41LDI0Ny4yLDg5LjgsMjczLjMsMTE2LDI4NC41elwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xNDUsNGMzOCwwLDY5LDMxLDY5LDY5cy0zMSw2OS02OSw2OWMtNDEuNCwwLTc1LDMzLjYtNzUsNzVjMCwyNi41LDEzLjgsNDkuOCwzNC42LDYzLjJjLTIyLjItNi42LTQyLjUtMTguNi01OS4zLTM1LjRcclxuICAgICAgICBDMTguNywyMTguMSw0LDE4Mi43LDQsMTQ1czE0LjctNzMuMSw0MS4zLTk5LjdTMTA3LjMsNCwxNDUsNCBNMTQ1LDFDNjUuNSwxLDEsNjUuNSwxLDE0NWMwLDc5LjUsNjQuNSwxNDQsMTQ0LDE0NFxyXG4gICAgICAgIGMtMzkuOCwwLTcyLTMyLjItNzItNzJzMzIuMi03Miw3Mi03MnM3Mi0zMi4yLDcyLTcyUzE4NC44LDEsMTQ1LDFMMTQ1LDF6XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3BhcnRzLmRpc3BsYXkgPyBjc3Muc3QxIDogbnVsbH1cclxuICAgICAgICAgIGQ9XCJNMTgwLjMsOTMuNHYtNC43aC02Ljd2Mi4zaDQuM3YyLjNoLTI0LjN2LTIuM2gxNy42di0yLjNoLTE0LjVWNzAuMmwyMS44LTI0LjVjMC44LTAuOCwxLjItMS45LDEuMi0zLjFcclxuICAgIGMwLTEuNS0wLjctMi45LTEuOS0zLjhjLTAuOC0wLjYtMS43LTAuOS0yLjctMC45Yy0xLjMsMC0yLjYsMC42LTMuNSwxLjZsLTUuMSw1LjhsMS44LDEuNmw1LjEtNS44YzAuNC0wLjUsMS4xLTAuOCwxLjctMC44XHJcbiAgICBjMC41LDAsMC45LDAuMSwxLjMsMC40YzAuNiwwLjQsMC45LDEuMSwwLjksMS44YzAsMC42LTAuMiwxLjEtMC42LDEuNWwtMTIuMiwxMy43bC0zLjQtM2w1LjQtNi4ybC0xLjgtMS42TDE1NC41LDU5aC00Ljl2LTIuOFxyXG4gICAgYzEuMS0wLjcsMS45LTEuNywyLjYtMi44aDEuNGMyLjQsMCw0LjMtMS45LDQuMy00LjN2LTMuMWMwLTcuMS01LjgtMTIuOS0xMi45LTEyLjlzLTEyLjksNS44LTEyLjksMTIuOVY0OWMwLDIuNCwxLjksNC4zLDQuMyw0LjNcclxuICAgIGgxLjRjMC42LDEuMSwxLjUsMi4xLDIuNiwyLjh2M2wtNC4zLDAuN2wwLjQsMi4zbDQuNi0wLjhjMSwxLjEsMi40LDEuOCwzLjksMS44YzEuNiwwLDMtMC43LDQtMS45aDYuNWw0LjItNC44bDMuNCwzbC04LjYsOS43XHJcbiAgICB2MTkuNWgtMy4xdjQuN2gtMTIuN3YtNC43aC0zLjFWNzAuOWgtMi41bC0yLjIsNS45bC00LjMtMS43bDMuMy05LjFjMC42LTEuNywyLjEtMyw0LTMuM2wwLjIsMGwtMC40LTIuM2wtMC4yLDBcclxuICAgIGMtMi42LDAuNC00LjksMi4zLTUuOCw0LjhsLTguNiwyMy43aC05LjR2NC43SDEwNVYxMTNoMTQuOHYtMi4zaC0xMi40Vjk1LjhoNzUuM3YxNC45aC02MC41djIuM0gxODVWOTMuNEgxODAuM3ogTTE1MC45LDQ3LjJcclxuICAgIGwtMi41LTMuM2gtOC45YzAuOC0yLjMsMy0zLjksNS41LTMuOWMzLjIsMCw1LjksMi42LDUuOSw1LjlWNDcuMnogTTE1NS42LDQ5YzAsMS4xLTAuOSwyLTIsMmgtMC42YzAuMS0wLjUsMC4yLTEuMSwwLjItMS42XHJcbiAgICBjMCwwLDAtMy43LDAtMy44aDAuNGMxLjEsMCwyLDAuOSwyLDJWNDl6IE0xNDUsMzUuM2M1LDAsOS4yLDMuNSwxMC4zLDguMmMtMC41LTAuMi0xLjEtMC4zLTEuNy0wLjNoLTAuOWMtMS4xLTMuMi00LjItNS41LTcuNy01LjVcclxuICAgIHMtNi42LDIuMy03LjcsNS41aC0wLjljLTAuNiwwLTEuMiwwLjEtMS43LDAuM0MxMzUuOCwzOC44LDE0MCwzNS4zLDE0NSwzNS4zeiBNMTM2LjQsNTFjLTEuMSwwLTItMC45LTItMnYtMS42YzAtMS4xLDAuOS0yLDItMlxyXG4gICAgaDAuNGMwLDAuMSwwLDMuOCwwLDMuOGMwLDAuNiwwLjEsMS4xLDAuMiwxLjZIMTM2LjR6IE0xMzkuMSw0OS40di0zLjFoOC4xbDMuNCw0LjZjLTAuNywyLjUtMyw0LjQtNS43LDQuNFxyXG4gICAgQzE0MS44LDU1LjIsMTM5LjEsNTIuNiwxMzkuMSw0OS40eiBNMTQ1LDYwLjljLTAuOSwwLTEuNy0wLjQtMi4zLTEuMXYtMi41YzAuNywwLjIsMS41LDAuMywyLjMsMC4zczEuNS0wLjEsMi4zLTAuM3YyLjVcclxuICAgIEMxNDYuNyw2MC41LDE0NS45LDYwLjksMTQ1LDYwLjl6IE0xMzMuMiw3Ny40djExLjRIMTI5TDEzMy4yLDc3LjR6IE0xMjUuOCw3Ny4ybDQuMywxLjdsLTMuNiw5LjhoLTQuOUwxMjUuOCw3Ny4yeiBNMTEyLDkxLjFoMjQuM1xyXG4gICAgdjIuM0gxMTJWOTEuMXpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3BhcnRzLmRpc3BsYXkgPyBjc3Muc3QyIDogY3NzLnN0MX1cclxuICAgICAgICAgICAgZD1cIk0xMjMuOSwyNTYuNWMtMC43LDAtMS4xLTAuNS0xLjEtMWMtMC4xLTAuNCwwLjEtMS4xLDAuOC0xLjNsMTcuNS02LjF2LTUuNGMwLTAuNCwwLjMtMC43LDAuNy0wLjdcclxuICAgICAgICBjMC40LDAsMC43LDAuMywwLjcsMC43djQuOWwxLjItMC40YzAuNC0wLjIsMC43LTAuMiwwLjgtMC4yYzAuMiwwLDAuNCwwLjEsMC44LDAuMmwxLjIsMC40di0yMi44bC0wLjYsMC4xXHJcbiAgICAgICAgYy0wLjQsMC4xLTAuOSwwLjEtMS4zLDAuMWMtMC41LDAtMS0wLjEtMS42LTAuMmwtMC42LTAuMVYyMzhjMCwwLjQtMC4zLDAuNy0wLjcsMC43Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjd2LTEzLjlsLTAuNC0wLjNcclxuICAgICAgICBjLTAuNy0wLjQtMC44LTAuNi0xMS4zLTEzLjNjLTMuNC00LjEtNy44LTkuNS0xMy43LTE2LjZjLTAuNC0wLjQtMC40LTEtMC4yLTEuNWMwLjItMC41LDAuNy0wLjgsMS4zLTAuOGg0MC45bDAuMS0wLjJcclxuICAgICAgICBjMy43LTYuMiw5LjMtMTEsMTYuMS0xMy44YzAuMSwwLDAuMi0wLjEsMC4zLTAuMWMwLjMsMCwwLjUsMC4yLDAuNiwwLjRjMC4xLDAuMiwwLjEsMC40LDAsMC41Yy0wLjEsMC4yLTAuMiwwLjMtMC40LDAuNFxyXG4gICAgICAgIGMtNi4xLDIuNS0xMS4xLDYuNy0xNC43LDEybC0wLjUsMC44SDE3MmMwLjYsMCwxLDAuMywxLjMsMC44YzAuMiwwLjUsMC4yLDEuMS0wLjIsMS41bC0xNi45LDIwLjdjLTAuMSwwLjItMC4zLDAuMi0wLjUsMC4yXHJcbiAgICAgICAgYzAsMCwwLDAsMCwwYy0wLjIsMC0wLjMtMC4xLTAuNC0wLjJjLTAuMS0wLjEtMC4yLTAuMy0wLjItMC41YzAtMC4yLDAtMC40LDAuMS0wLjVsOC05LjhoLTMuNmwtMC4xLDAuNGMtMC41LDIuOS0zLDQuOS01LjksNC45XHJcbiAgICAgICAgcy01LjQtMi4xLTUuOS00LjlsLTAuMS0wLjRoLTIyLjFsMTQuNSwxNy41YzEuMiwxLjQsMi43LDIuMiw0LjQsMi4yYzEuNiwwLDMuMS0wLjcsNC4xLTEuOWMwLjEtMC4xLDAuMS0wLjEsMS4yLTEuNWwyLjQtMi45XHJcbiAgICAgICAgYzAuMS0wLjIsMC4zLTAuMywwLjUtMC4zYzAuMiwwLDAuMywwLjEsMC40LDAuMmMwLjMsMC4yLDAuMywwLjcsMC4xLDFjLTAuNiwwLjgtMS4xLDEuNC0xLjYsMmMtMi4yLDIuNy0yLjYsMy4yLTMuNywzLjhsLTAuMiwwLjFcclxuICAgICAgICB2MjMuOWwzLjcsMS4zYzAuMiwwLjEsMC4zLDAuMiwwLjQsMC4zYzAuMSwwLjIsMC4xLDAuMywwLDAuNWMtMC4xLDAuMy0wLjQsMC41LTAuNiwwLjVjLTAuMSwwLTAuMiwwLTAuMiwwbC02LjYtMi4zXHJcbiAgICAgICAgYzAsMC0xNi41LDUuOC0xNi42LDUuOGwtMi44LDFoMzguN2wtOC4zLTIuOWMtMC4yLTAuMS0wLjMtMC4yLTAuNC0wLjNjLTAuMS0wLjItMC4xLTAuMywwLTAuNWMwLjEtMC4zLDAuNC0wLjUsMC42LTAuNVxyXG4gICAgICAgIGMwLjEsMCwwLjIsMCwwLjIsMGw5LjMsMy4zYzAuNywwLjIsMC44LDAuOCwwLjgsMS4zYy0wLjEsMC40LTAuNCwxLTEuMSwxSDEyMy45eiBNMTQ5LjIsMjA0LjZjMC42LDIsMi4zLDMuMyw0LjQsMy4zXHJcbiAgICAgICAgYzIuMSwwLDMuOS0xLjMsNC40LTMuM2wwLjItMC42SDE0OUwxNDkuMiwyMDQuNnogTTE1OC4yLDE5My4yYy0xLjEsMi4xLTEuNywzLjctMS45LDQuM2wtMC4xLDAuNGwwLjMsMC4yYzEuNSwwLjksMi42LDIuMywyLjksNFxyXG4gICAgICAgIGwwLjEsMC40aDQuN2w3LjktOS42aC0xMy44TDE1OC4yLDE5My4yeiBNMTUzLjYsMTk4LjdjLTIuMSwwLTMuOCwxLjMtNC40LDMuMmwtMC4yLDAuN2g5LjJMMTU4LDIwMlxyXG4gICAgICAgIEMxNTcuNCwyMDAsMTU1LjcsMTk4LjcsMTUzLjYsMTk4Ljd6IE0xMjQuNSwyMDIuNmgyMy4ybDAuMS0wLjRjMC41LTIuOCwzLTQuOCw1LjktNC44YzAuMywwLDAuNiwwLDAuOSwwLjFsMC40LDAuMWwwLjEtMC40XHJcbiAgICAgICAgYzAuMi0wLjYsMC42LTEuOCwxLjQtMy40bDAuMy0wLjdoLTQwLjNMMTI0LjUsMjAyLjZ6XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3BhcnRzLmRpc3BsYXkgPyBjc3Muc3QyIDogY3NzLnN0MX1cclxuICAgICAgICAgICAgZD1cIk0xNzQuMSwxNzhjMC4xLDAsMC4xLDAsMC4yLDAuMWMwLDAuMSwwLDAuMi0wLjEsMC4yYy02LjIsMi41LTExLjMsNi44LTE0LjksMTIuMmwtMSwxLjVoMS44SDE3MlxyXG4gICAgICAgIGMwLjQsMCwwLjYsMC4yLDAuNywwLjRoLTEuNmgtMTIuNGgtMC42bC0wLjMsMC41Yy0xLjEsMi4xLTEuNywzLjgtMS45LDQuNGwtMC4yLDAuOGwwLjcsMC40YzEuNCwwLjgsMi4zLDIuMSwyLjYsMy43bDAuMiwwLjhoMC44XHJcbiAgICAgICAgaDQuMWgwLjVsMC4zLTAuNGw3LTguNmwxLTEuM2MwLjEsMC4yLDAuMSwwLjUtMC4yLDAuOGwtMTYuOSwyMC43YzAsMC4xLTAuMSwwLjEtMC4xLDAuMWMwLDAtMC4xLDAtMC4xLDBjLTAuMS0wLjEtMC4xLTAuMiwwLTAuM1xyXG4gICAgICAgIGw3LjQtOWwxLjMtMS42aC0yLjFIMTYwaC0wLjhsLTAuMSwwLjhjLTAuNSwyLjYtMi43LDQuNS01LjQsNC41Yy0yLjcsMC00LjktMS45LTUuNC00LjVsLTAuMS0wLjhoLTAuOGgtMjAuNmgtMi4xbDEuMywxLjZcclxuICAgICAgICBsMTMuOCwxNi43YzEuMywxLjUsMywyLjQsNC44LDIuNGMxLjcsMCwzLjQtMC43LDQuNS0yLjFjMC4xLTAuMSwwLjEtMC4xLDEuNC0xLjdsMi4yLTIuN2MwLTAuMSwwLjEtMC4xLDAuMS0wLjFjMCwwLDAuMSwwLDAuMSwwXHJcbiAgICAgICAgYzAsMCwwLjEsMC4xLDAuMSwwLjFjMCwwLDAsMC4xLDAsMC4xYy0wLjYsMC44LTEuMSwxLjQtMS42LDJjLTIuMiwyLjctMi41LDMuMS0zLjUsMy43bC0wLjUsMC4zdjAuNnYyMy4ydjAuN2wwLjcsMC4ybDMuNCwxLjJcclxuICAgICAgICBjMC4xLDAsMC4xLDAuMSwwLjEsMC4xYzAsMCwwLDAuMSwwLDAuMWMwLDAuMS0wLjEsMC4xLTAuMiwwLjFjMCwwLDAsMC0wLjEsMGwtNC41LTEuNmwtMi0wLjdsLTAuMy0wLjFsLTAuMywwLjFcclxuICAgICAgICBjMCwwLTE2LjMsNS43LTE2LjQsNS43bC00LjQsMS41YzAtMC4yLDAuMS0wLjQsMC40LTAuNWwxNy4xLTZsMC43LTAuMnYtMC43di01YzAtMC4xLDAuMS0wLjIsMC4yLTAuMmMwLjEsMCwwLjIsMC4xLDAuMiwwLjJ2NC4yXHJcbiAgICAgICAgdjEuNGwxLjMtMC41YzAuMi0wLjEsMC40LTAuMSwwLjYtMC4yYzAuMy0wLjEsMC42LTAuMiwwLjctMC4yYzAuMSwwLDAuNCwwLjEsMC42LDAuMmMwLjIsMC4xLDAuNCwwLjEsMC42LDAuMmwxLjMsMC41di0xLjR2LTIxLjVcclxuICAgICAgICB2LTEuMmwtMS4yLDAuMmMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjFjLTAuNSwwLTEtMC4xLTEuNC0wLjJsLTEuMi0wLjN2MS4zVjIzOGMwLDAuMS0wLjEsMC4yLTAuMiwwLjJjLTAuMSwwLTAuMi0wLjEtMC4yLTAuMlxyXG4gICAgICAgIHYtMTMuNnYtMC41bC0wLjUtMC4zYy0wLjEtMC4xLTAuMS0wLjEtMC4yLTAuMWMtMC42LTAuNC0wLjktMC43LTExLjItMTMuMmMtMy40LTQuMS03LjgtOS41LTEzLjctMTYuNmMtMC4yLTAuMy0wLjItMC42LTAuMi0wLjhcclxuICAgICAgICBsMS4xLDEuM2w3LjEsOC42bDAuMywwLjRoMC41aDIyLjZoMC44bDAuMi0wLjhjMC41LTIuNiwyLjgtNC40LDUuNC00LjRjMC4zLDAsMC42LDAsMC44LDAuMWwwLjgsMC4xbDAuMy0wLjhcclxuICAgICAgICBjMC4yLTAuNiwwLjYtMS44LDEuNC0zLjNsMC43LTEuNEgxNTZoLTM4LjRoLTEuNmMwLjEtMC4yLDAuNC0wLjQsMC43LTAuNGg0MC42aDAuNmwwLjMtMC41QzE2MS44LDE4NS41LDE2Ny4zLDE4MC44LDE3NC4xLDE3OFxyXG4gICAgICAgIEMxNzQsMTc4LDE3NCwxNzgsMTc0LjEsMTc4IE0xNDguMywyMDMuMWgxLjRoNy44aDEuNGwtMC40LTEuM2MtMC43LTIuMi0yLjYtMy42LTQuOS0zLjZzLTQuMiwxLjQtNC45LDMuNkwxNDguMywyMDMuMVxyXG4gICAgICAgICBNMTUzLjYsMjA4LjRjMi4zLDAsNC4zLTEuNSw0LjktMy43bDAuNC0xLjNoLTEuM2gtNy45aC0xLjNsMC40LDEuM0MxNDkuMywyMDcsMTUxLjMsMjA4LjQsMTUzLjYsMjA4LjQgTTE1NS43LDI1MS40XHJcbiAgICAgICAgQzE1NS43LDI1MS40LDE1NS43LDI1MS40LDE1NS43LDI1MS40bDkuNCwzLjNjMC4zLDAuMSwwLjQsMC40LDAuNCwwLjVsLTQuNC0xLjVsLTUuNS0xLjljLTAuMSwwLTAuMS0wLjEtMC4xLTAuMlxyXG4gICAgICAgIEMxNTUuNSwyNTEuNSwxNTUuNiwyNTEuNCwxNTUuNywyNTEuNCBNMTY1LjQsMjU1LjZjLTAuMSwwLjItMC4yLDAuNC0wLjYsMC40aC00MWMtMC40LDAtMC41LTAuMi0wLjYtMC40aDQuN2gzMi44SDE2NS40XHJcbiAgICAgICAgIE0xNzQuMSwxNzdjLTAuMSwwLTAuMywwLTAuNCwwLjFjLTcsMi45LTEyLjYsNy44LTE2LjMsMTRoLTQwLjZjLTEuNiwwLTIuNSwxLjktMS41LDMuMmMyNS43LDMxLjIsMjMuOSwyOS4yLDI1LjMsMzAuMVYyMzhcclxuICAgICAgICBjMCwwLjcsMC41LDEuMiwxLjIsMS4yYzAuNywwLDEuMi0wLjUsMS4yLTEuMnYtMTIuNmMwLjUsMC4xLDEuMSwwLjIsMS43LDAuMmMwLjUsMCwwLjksMCwxLjQtMC4xdjIxLjVjLTAuOS0wLjMtMS4yLTAuNS0xLjUtMC41XHJcbiAgICAgICAgYy0wLjMsMC0wLjYsMC4yLTEuNSwwLjV2LTQuMmMwLTAuNy0wLjUtMS4yLTEuMi0xLjJjLTAuNywwLTEuMiwwLjUtMS4yLDEuMnY1bC0xNy4xLDZjLTEuOCwwLjYtMS4zLDMuMiwwLjYsMy4yaDQxXHJcbiAgICAgICAgYzEuOSwwLDIuMy0yLjYsMC41LTMuMmwtOS4zLTMuM2MtMC4xLDAtMC4zLTAuMS0wLjQtMC4xYy0wLjUsMC0wLjksMC4zLTEuMSwwLjhjLTAuMiwwLjYsMC4xLDEuMywwLjcsMS41bDUuNSwxLjloLTMyLjhcclxuICAgICAgICBjMCwwLDE2LjQtNS43LDE2LjQtNS43YzMsMS4xLDAuMiwwLjEsNi41LDIuM2MwLjEsMCwwLjMsMC4xLDAuNCwwLjFjMC41LDAsMC45LTAuMywxLjEtMC44YzAuMi0wLjYtMC4xLTEuMy0wLjctMS41bC0zLjQtMS4yXHJcbiAgICAgICAgdi0yMy4yYzEuNC0wLjgsMS43LTEuNCw1LjQtNS45YzAuNC0wLjUsMC4zLTEuMi0wLjItMS43Yy0wLjItMC4yLTAuNS0wLjMtMC43LTAuM2MtMC4zLDAtMC43LDAuMS0wLjksMC40XHJcbiAgICAgICAgYy0zLjcsNC42LTMuNCw0LjItMy42LDQuM2MtMC45LDEuMS0yLjMsMS43LTMuOCwxLjdjLTEuNCwwLTIuOC0wLjYtNC0ybC0xMy44LTE2LjdoMjAuNmMwLjUsMywzLjIsNS4zLDYuNCw1LjNzNS44LTIuMyw2LjQtNS4zXHJcbiAgICAgICAgaDIuMmwtNy40LDljLTAuNCwwLjUtMC4zLDEuMiwwLjIsMS43YzAuMiwwLjIsMC41LDAuMywwLjcsMC4zYzAuMywwLDAuNy0wLjEsMC45LTAuNGwxNi45LTIwLjdjMS0xLjMsMC4xLTMuMS0xLjUtMy4xaC0xMS45XHJcbiAgICAgICAgYzMuNC01LjEsOC4zLTkuMywxNC40LTExLjljMC42LTAuMiwwLjktMC45LDAuNi0xLjVDMTc1LDE3Ny4zLDE3NC41LDE3NywxNzQuMSwxNzdMMTc0LjEsMTc3eiBNMTYwLDIwMi4xXHJcbiAgICAgICAgYy0wLjQtMS45LTEuNS0zLjUtMy4xLTQuNGMwLjItMC42LDAuOC0yLjIsMS44LTQuM2gxMi40bC03LDguNkgxNjBMMTYwLDIwMi4xeiBNMTU2LDE5My41Yy0wLjgsMS42LTEuMiwyLjgtMS40LDMuNVxyXG4gICAgICAgIGMtMC4zLTAuMS0wLjctMC4xLTEtMC4xYy0zLjEsMC01LjgsMi4yLTYuMyw1LjJoLTIyLjZsLTcuMS04LjZIMTU2TDE1NiwxOTMuNXogTTE0OS43LDIwMi4xYzAuNi0xLjksMi4zLTIuOSwzLjktMi45XHJcbiAgICAgICAgYzEuNywwLDMuMywxLDMuOSwyLjlIMTQ5LjdMMTQ5LjcsMjAyLjF6IE0xNTMuNiwyMDcuNGMtMS43LDAtMy40LTEtNC0zaDcuOUMxNTcsMjA2LjUsMTU1LjMsMjA3LjQsMTUzLjYsMjA3LjRMMTUzLjYsMjA3LjR6XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBQYXJ0c0ljb24gfSBmcm9tIFwiLi9QYXJ0c0ljb25cIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ3JpZFdyYXBwZXJcIjogXCJTY2hlZHVsZUdyaWRfZ3JpZFdyYXBwZXJfXzFiUVpVXCIsXG5cdFwiaW5uZXJHcmlkXCI6IFwiU2NoZWR1bGVHcmlkX2lubmVyR3JpZF9fbVZzZXdcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1NjaGVkdWxlR3JpZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjaGVkdWxlR3JpZDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZ3JpZFdyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmlubmVyR3JpZH0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBTY2hlZHVsZUdyaWQgfSBmcm9tIFwiLi9TY2hlZHVsZUdyaWRcIjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZWR1bGVHcmlkIHtcclxuICB1bml4U3RhcnREYXRlOiBudW1iZXI7XHJcbiAgdW5peEVuZERhdGU6IG51bWJlcjtcclxuICBudW1iZXJvZlNxdWFyZXM6IG51bWJlcjtcclxuICB0ZW1wbGF0ZUFyZWFzOiBzdHJpbmc7XHJcbiAgc3RhcnRIb3VyOiBudW1iZXI7XHJcbiAgaG91ckRpZmZlcmVuY2U6IG51bWJlcjtcclxuICBjb2x1bW5BbW91bnQ6IG51bWJlcjtcclxuICBlbmRIb3VyOiBudW1iZXI7XHJcbiAgaG91clN0cmluZ3M6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1bml4U3RhcnREYXRlOiBudW1iZXIsIHVuaXhFbmREYXRlOiBudW1iZXIpIHtcclxuICAgIHRoaXMudW5peFN0YXJ0RGF0ZSA9IHVuaXhTdGFydERhdGU7XHJcbiAgICB0aGlzLnVuaXhFbmREYXRlID0gdW5peEVuZERhdGU7XHJcbiAgICB0aGlzLnN0YXJ0SG91ciA9IDA7XHJcbiAgICB0aGlzLmhvdXJEaWZmZXJlbmNlID0gMDtcclxuICAgIHRoaXMudGVtcGxhdGVBcmVhcyA9IFwiXCI7XHJcbiAgICB0aGlzLmNvbHVtbkFtb3VudCA9IDA7XHJcbiAgICB0aGlzLmVuZEhvdXIgPSAwO1xyXG4gICAgdGhpcy5ob3VyU3RyaW5ncyA9IFtdO1xyXG4gICAgdGhpcy5udW1iZXJvZlNxdWFyZXMgPSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTcXVhcmVzKCkge1xyXG4gICAgY29uc3QgdGltZURpZmZlcmVuY2U6IG51bWJlciA9IHRoaXMudW5peEVuZERhdGUgLSB0aGlzLnVuaXhTdGFydERhdGU7XHJcbiAgICBjb25zdCBob3VyczogbnVtYmVyID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvIDM2MDApO1xyXG4gICAgY29uc3QgbnVtQ29sdW1uczogbnVtYmVyID0gaG91cnMgKiAyICsgNDtcclxuICAgIGNvbnN0IG51bWJlck9mU3F1YXJlczogbnVtYmVyID0gbnVtQ29sdW1ucyAqIDU7XHJcbiAgICB0aGlzLm51bWJlcm9mU3F1YXJlcyA9IG51bWJlck9mU3F1YXJlcztcclxuICAgIHRoaXMuY29sdW1uQW1vdW50ID0gbnVtQ29sdW1ucztcclxuICAgIHRoaXMuaG91ckRpZmZlcmVuY2UgPSBob3VycztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SG91cnMoKSB7XHJcbiAgICBjb25zdCBzdGFydERhdGU6IERhdGUgPSBuZXcgRGF0ZSh0aGlzLnVuaXhTdGFydERhdGUgKiAxMDAwKTtcclxuICAgIGNvbnN0IGVuZERhdGU6IERhdGUgPSBuZXcgRGF0ZSh0aGlzLnVuaXhFbmREYXRlICogMTAwMCk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRIb3VyOiBudW1iZXIgPSBzdGFydERhdGUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IGVuZEhvdXI6IG51bWJlciA9IGVuZERhdGUuZ2V0SG91cnMoKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0SG91ciA9IHN0YXJ0SG91cjtcclxuICAgIHRoaXMuZW5kSG91ciA9IGVuZEhvdXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEdyaWRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IHNxdWFyZTogc3RyaW5nID0gXCJzcXVhcmUgXCI7XHJcbiAgICBjb25zdCByb3dTdHJpbmc6IHN0cmluZyA9IGBcIiR7c3F1YXJlLnJlcGVhdChcclxuICAgICAgdGhpcy5jb2x1bW5BbW91bnQgLSAxXHJcbiAgICApfSBzcXVhcmVcImA7XHJcbiAgICB0aGlzLnRlbXBsYXRlQXJlYXMgPSBgJHtyb3dTdHJpbmcucmVwZWF0KDUpfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEhvdXJzSGVhZGVyKCkge1xyXG4gICAgbGV0IGhvdXJDb3VudGVyOiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IHN0YXJ0SG91ckNvdW50ZXI6IG51bWJlciA9IHRoaXMuc3RhcnRIb3VyO1xyXG5cclxuICAgIGNvbnN0IGhvdXJOdW1iZXJzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHdoaWxlIChob3VyQ291bnRlciA8PSB0aGlzLmhvdXJEaWZmZXJlbmNlKSB7XHJcbiAgICAgIGhvdXJOdW1iZXJzLnB1c2goc3RhcnRIb3VyQ291bnRlcik7XHJcbiAgICAgIGhvdXJDb3VudGVyKys7XHJcbiAgICAgIHN0YXJ0SG91ckNvdW50ZXIgPCAyNCA/IHN0YXJ0SG91ckNvdW50ZXIrKyA6IChzdGFydEhvdXJDb3VudGVyID0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG91clN0cmluZ3M6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgaG91ck51bWJlcnMuZm9yRWFjaCgoaG91cikgPT4ge1xyXG4gICAgICBpZiAoaG91ciA9PT0gMjQpIHtcclxuICAgICAgICByZXR1cm4gaG91clN0cmluZ3MucHVzaChcIjEyOjAwIGEubVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChob3VyID09PSAxMikge1xyXG4gICAgICAgIHJldHVybiBob3VyU3RyaW5ncy5wdXNoKFwiMTI6MDAgcC5tXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBob3VyIDwgMTJcclxuICAgICAgICAgID8gaG91clN0cmluZ3MucHVzaChgJHtob3VyfTowMCBhLm1gKVxyXG4gICAgICAgICAgOiBob3VyU3RyaW5ncy5wdXNoKGAke2hvdXIgLSAxMn06MDAgcC5tYCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5ob3VyU3RyaW5ncyA9IGhvdXJTdHJpbmdzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEdyaWQoKSB7XHJcbiAgICB0aGlzLnNldFNxdWFyZXMoKTtcclxuICAgIHRoaXMuc2V0SG91cnMoKTtcclxuICAgIHRoaXMuc2V0R3JpZFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLnNldEhvdXJzSGVhZGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV2ZW50c1wiOiBcIkV2ZW50c0lucHV0X2V2ZW50c19fMXJ4SEFcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IElucHV0Q2hhbmdlIH0gZnJvbSBcIi4uLy4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgSW5wdXRQcm9wcyBmcm9tIFwiLi4vLi4vU2VhcmNoQm94XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vRXZlbnRzSW5wdXQubW9kdWxlLnNjc3NcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBQaWNrPElucHV0UHJvcHMsIFwiaGFuZGxlSW5wdXRDaGFuZ2VcIiB8IFwiZXZlbnRzQ2F0ZWdvcnlcIj47XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRzSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UsXHJcbiAgZXZlbnRzQ2F0ZWdvcnksXHJcbn0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2U6IChcclxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+LFxyXG4gICAgZmllbGQ6IHN0cmluZ1xyXG4gICkgPT4gdm9pZCA9IChldmVudCwgZmllbGQpID0+IHtcclxuICAgIHJldHVybiBoYW5kbGVJbnB1dENoYW5nZShcclxuICAgICAgZmllbGQsXHJcbiAgICAgIChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5ldmVudHN9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPldoYXQgdHlwZSBvZiBldmVudHMgYXJlIHlvdSBsb29raW5nIGZvcj88L2xhYmVsPlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgbmFtZT1cIlwiXHJcbiAgICAgICAgaWQ9XCJcIlxyXG4gICAgICAgIHZhbHVlPXtldmVudHNDYXRlZ29yeX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIFwiZXZlbnRzQ2F0ZWdvcnlcIil9XHJcbiAgICAgID5cclxuICAgICAgICA8b3B0Z3JvdXA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Q2F0ZWdvcnkgKE9wdGlvbmFsKTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk11c2ljXCI+TXVzaWM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOaWdodGxpZmVcIj5OaWdodGxpZmU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGb29kICYgRHJpbmtcIj5Gb29kICYgRHJpbms8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGaWxtXCI+RmlsbTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNwb3J0cyAmIEFjdGl2ZSBMaWZlc3R5bGVcIj5cclxuICAgICAgICAgICAgU3BvcnRzICYgQWN0aXZlIExpZmVzdHlsZVxyXG4gICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVzdGl2YWxzICYgRmFpcnNcIj5GZXN0aXZhbHMgJiBGYWlyczwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFydHMgJiBUaGVhdHJlXCI+QXJ0cyAmIFRoZWF0cmU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9vcHRpb24+XHJcbiAgICAgICAgPC9vcHRncm91cD5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBFdmVudHNJbnB1dCB9IGZyb20gXCIuL0V2ZW50c0lucHV0XCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBsYWNlc1wiOiBcIlBsYWNlc0lucHV0X3BsYWNlc19fMk9rNW1cIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5wdXRQcm9wcyBmcm9tIFwiLi4vLi4vU2VhcmNoQm94XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUGxhY2VzSW5wdXQubW9kdWxlLnNjc3NcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBQaWNrPElucHV0UHJvcHMsIFwiaGFuZGxlSW5wdXRDaGFuZ2VcIiB8IFwicGxhY2VUeXBlXCI+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlc0lucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGhhbmRsZUlucHV0Q2hhbmdlLFxyXG4gIHBsYWNlVHlwZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTogKFxyXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4sXHJcbiAgICBmaWVsZDogc3RyaW5nXHJcbiAgKSA9PiB2b2lkID0gKGV2ZW50LCBmaWVsZCkgPT4ge1xyXG4gICAgcmV0dXJuIGhhbmRsZUlucHV0Q2hhbmdlKFxyXG4gICAgICBmaWVsZCxcclxuICAgICAgKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlXHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucGxhY2VzfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5XaGF0IHR5cGUgb2YgcGxhY2VzIGFyZSB5b3UgbG9va2luZyBmb3I/PC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJCYXJzLCBSZXN0YXVyYW50cywgU3VzaGksIGV0Yy5cIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17cGxhY2VUeXBlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgXCJwbGFjZVR5cGVcIil9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24+U2VhcmNoPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBQbGFjZXNJbnB1dCB9IGZyb20gXCIuL1BsYWNlc0lucHV0XCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaFNlbGVjdG9yXCI6IFwiU2VhcmNoU2VsZWN0b3Jfc2VhcmNoU2VsZWN0b3JfXzJVSVhGXCIsXG5cdFwic2VsZWN0b3JcIjogXCJTZWFyY2hTZWxlY3Rvcl9zZWxlY3Rvcl9fMnJnNE9cIixcblx0XCJhbGxTVkdcIjogXCJTZWFyY2hTZWxlY3Rvcl9hbGxTVkdfXzFrU3FsXCIsXG5cdFwiaGlnaGxpZ2h0ZWRcIjogXCJTZWFyY2hTZWxlY3Rvcl9oaWdobGlnaHRlZF9fcUZDTllcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5wdXRQcm9wcyBmcm9tIFwiLi4vLi4vU2VhcmNoQm94XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vU2VhcmNoU2VsZWN0b3IubW9kdWxlLnNjc3NcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBQaWNrPElucHV0UHJvcHMsIFwic2VhcmNoVHlwZVwiIHwgXCJoYW5kbGVJbnB1dENoYW5nZVwiPjtcclxuXHJcbnR5cGUgU2VsZWN0b3JTdGF0ZSA9IHsgYWxsOiBib29sZWFuOyBwbGFjZXM6IGJvb2xlYW47IGV2ZW50czogYm9vbGVhbiB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaFNlbGVjdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIHNlYXJjaFR5cGUsXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UsXHJcbn0pID0+IHtcclxuICBjb25zdCBbaGlnaGxpZ2h0LCBzZXRIaWdobGlnaHRdID0gUmVhY3QudXNlU3RhdGU8U2VsZWN0b3JTdGF0ZT4oe1xyXG4gICAgYWxsOiBmYWxzZSxcclxuICAgIHBsYWNlczogZmFsc2UsXHJcbiAgICBldmVudHM6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5zZWFyY2hTZWxlY3Rvcn0+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2Nzcy5zZWxlY3Rvcn0gJHtoaWdobGlnaHQuYWxsID8gY3NzLmhpZ2hsaWdodGVkIDogbnVsbH1gfVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgIHNldEhpZ2hsaWdodCh7IGFsbDogdHJ1ZSwgcGxhY2VzOiBmYWxzZSwgZXZlbnRzOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInNlYXJjaFR5cGVcIiwgXCJBTExcIil9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIaWdobGlnaHQoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgYWxsOiBmYWxzZSB9KSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmFsbFNWR30+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGlkPVwiQUxMXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTEycHRcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiLTYzIDAgNTEyIDUxMi4wMDAyNlwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTEycHRcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBpZD1cIkFMTFwiXHJcbiAgICAgICAgICAgICAgZD1cIm0zODYuNjQwNjI1IDQuNjgzNTk0Yy0xLjU4MjAzMS0zLjg1NTQ2OS01Ljk5NjA5NC01LjY5OTIxOS05Ljg1MTU2My00LjExNzE4OC00NC43MjY1NjIgMTguMzYzMjgyLTgwLjgwODU5MyA0OS45MjE4NzUtMTA0LjQzNzUgODkuODMyMDMyaC0yNjAuMDE1NjI0Yy0xMC4zMDg1OTQgMC0xNi4xNjQwNjMgMTIuMDcwMzEyLTkuNSAyMC4xNzE4NzQgMTY0LjYxNzE4NyAxOTkuNTcwMzEzIDE1My4yMjI2NTYgMTg3LjEzNjcxOSAxNjEuNjcxODc0IDE5Mi42MzI4MTN2ODcuMTU2MjVjMCA0LjE2Nzk2OSAzLjM4MjgxMyA3LjU0Njg3NSA3LjU1MDc4MiA3LjU0Njg3NSA0LjE2NDA2MiAwIDcuNTQ2ODc1LTMuMzc4OTA2IDcuNTQ2ODc1LTcuNTQ2ODc1di04MC43MjY1NjNjNi4zNzg5MDYgMS40ODgyODIgMTMuMTI4OTA2IDEuNjE3MTg4IDE5LjYyODkwNi4zNjMyODJ2MTM3LjU1NDY4N2MtMTEuMjg5MDYzLTMuOTU3MDMxLTguMTg3NS00LjAxMTcxOS0xOS42Mjg5MDYgMHYtMjYuOTk2MDkzYzAtNC4xNjc5NjktMy4zODI4MTMtNy41NDY4NzYtNy41NDY4NzUtNy41NDY4NzYtNC4xNjc5NjkgMC03LjU1MDc4MiAzLjM3ODkwNy03LjU1MDc4MiA3LjU0Njg3NnYzMi4yODEyNWwtMTA5Ljc0NjA5MyAzOC40NjA5MzdjLTExLjI1NzgxMyAzLjk1MzEyNS04LjQ4NDM3NSAyMC43MDMxMjUgMy41MjM0MzcgMjAuNzAzMTI1aDI2Mi4yNjk1MzJjMTIuMDI3MzQzIDAgMTQuNzU3ODEyLTE2Ljc1NzgxMiAzLjUxOTUzMS0yMC43MDMxMjVsLTU5Ljc3NzM0NC0yMC45NDkyMTljLTMuOTM3NS0xLjM3ODkwNi04LjI0MjE4Ny42OTUzMTMtOS42MjEwOTQgNC42MjEwOTQtMS4zNzg5MDYgMy45Mzc1LjY5MTQwNyA4LjI0NjA5NCA0LjYyODkwNyA5LjYyNWwzNS4xMTcxODcgMTIuMzA4NTk0aC0yMTAuMDE1NjI1Yy4wMDM5MDYgMCAxMDUuMDExNzE5LTM2Ljc4OTA2MyAxMDUuMDExNzE5LTM2Ljc4OTA2MyAxOS40MDYyNSA2LjgwODU5NCAxLjEyODkwNi4zOTQ1MzEgNDEuMzgyODEyIDE0LjQ5MjE4OCAzLjkzMzU5NCAxLjM3ODkwNiA4LjI0MjE4OC0uNjkxNDA3IDkuNjIxMDk0LTQuNjI4OTA3IDEuMzc4OTA2LTMuOTI1NzgxLS42OTUzMTMtOC4yMzQzNzQtNC42Mjg5MDYtOS42MTMyODFsLTIxLjQ2MDkzOC03LjUxOTUzMXYtMTQ4LjU4NTkzOGM5LjA1MDc4MS01LjM3NSAxMC45MTQwNjMtOC44NTkzNzQgMzQuNDQ1MzEzLTM3LjY5NTMxMiAyLjYzNjcxOC0zLjIzMDQ2OSAyLjE1MjM0NC03Ljk4MDQ2OS0xLjA3ODEyNS0xMC42MTcxODgtMy4yMzA0NjktMi42MzY3MTgtNy45ODA0NjktMi4xNTYyNS0xMC42MjEwOTQgMS4wNzQyMTktMjMuODk4NDM3IDI5LjI4MTI1LTIxLjg3ODkwNiAyNi44MjgxMjUtMjIuNzQ2MDk0IDI3LjgzMjAzMS0xMS42NDA2MjUgMTMuMjg1MTU3LTM0LjQyMTg3NSAxNi42NTIzNDQtNDkuODI0MjE5LTIuMDExNzE4bC04OC4yODEyNS0xMDcuMDI3MzQ0aDEzMS43ODUxNTdjMy40MTc5NjkgMTkuNDE3OTY5IDIwLjM5ODQzNyAzNC4yMjI2NTYgNDAuNzgxMjUgMzQuMjIyNjU2IDIwLjM4MjgxMiAwIDM3LjM1OTM3NS0xNC44MDQ2ODcgNDAuNzc3MzQzLTM0LjIyMjY1NmgxMy43Njk1MzJsLTQ3LjE3NTc4MiA1Ny44MDg1OTRjLTIuNjI1IDMuMjMwNDY4LTIuMTUyMzQzIDcuOTg4MjgxIDEuMDc4MTI2IDEwLjYxNzE4NyAzLjIzMDQ2OCAyLjYzNjcxOSA3Ljk5MjE4NyAyLjE1MjM0NCAxMC42Mjg5MDYtMS4wNjY0MDZsMTA4LjI0NjA5NC0xMzIuNjUyMzQ0YzYuNTg1OTM3LTguMDYyNS43Njk1MzEtMjAuMTIxMDkzLTkuNTQyOTY5LTIwLjEyMTA5M2gtNzYuNDMzNTk0YzIxLjUzMTI1LTMyLjkxNDA2MyA1My4wNzgxMjUtNTkuNzI2NTYzIDkyLjM4MjgxMy03NS44NjMyODIgMy44NTkzNzQtMS41ODIwMzEgNS42OTkyMTgtNS45OTIxODcgNC4xMTcxODctOS44NTE1NjJ6bS0xNzguNSAxNTYuMDMxMjVoLTE0NC4zNjcxODdsLTQ1LjU0Njg3Ni01NS4yMTg3NWgyNDUuOTk2MDk0Yy00LjkzMzU5NCAxMC4xNDQ1MzEtNy43MzgyODEgMTguMDY2NDA2LTkuMDU0Njg3IDIyLjE5OTIxOC0yMi4yMzgyODEtMy40NTMxMjQtNDIuODQzNzUgMTEuNDU3MDMyLTQ3LjAyNzM0NCAzMy4wMTk1MzJ6bTY1Ljc1MzkwNiAwaC01MC4yMDcwMzFjNy43MjI2NTYtMjQuNDcyNjU2IDQyLjQ4NDM3NS0yNC40NzI2NTYgNTAuMjA3MDMxIDB6bS01MC40MTQwNjIgMTUuMDk3NjU2aDUwLjYyMTA5M2MtNy4yMzA0NjggMjUuMzk4NDM4LTQzLjM4MjgxMiAyNS40MjE4NzUtNTAuNjIxMDkzIDB6bTEzNy4yNDIxODctNzAuMzE2NDA2LTQ1LjA2MjUgNTUuMjE4NzVoLTI2LjIxODc1Yy0yLjMyMDMxMi0xMS45NTcwMzItOS44MDA3ODEtMjIuMDg1OTM4LTIwLjAyMzQzNy0yNy45ODQzNzUgMS4yODEyNS00LjA2NjQwNyA0LjgyODEyNS0xNC4yMzgyODEgMTEuNzY5NTMxLTI3LjIzNDM3NXptMCAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MTJwdFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTEycHRcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgaWQ9XCJBTExcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGlkPVwiQUxMXCJcclxuICAgICAgICAgICAgICBkPVwibTQ4MS45NDE0MDYgMzg2Ljc1MzkwNnYtMzAuMDU4NTk0aC00Mi41ODIwMzF2MTUuMDMxMjVoMjcuNTUwNzgxdjE1LjAyNzM0NGgtMTU1LjMwMDc4MXYtMTUuMDI3MzQ0aDExMi43MTg3NXYtMTUuMDMxMjVoLTkyLjY3OTY4N3YtMTE4Ljg4MjgxMmwxMzkuMjAzMTI0LTE1Ni45Mzc1YzQuODA4NTk0LTUuNDI1NzgxIDcuNDYwOTM4LTEyLjM5ODQzOCA3LjQ2MDkzOC0xOS42MzI4MTIgMC05LjQ5MjE4OC00LjU4OTg0NC0xOC40NzI2NTctMTIuMjc3MzQ0LTI0LjAyNzM0NC01LjA3ODEyNS0zLjY2Nzk2OS0xMS4wNzAzMTItNS42MDU0NjktMTcuMzI0MjE4LTUuNjA1NDY5LTguNTE1NjI2IDAtMTYuNjE3MTg4IDMuNjY0MDYzLTIyLjIzODI4MiAxMC4wNDY4NzVsLTMyLjcwNzAzMSAzNy4xNTIzNDQgMTEuMjgxMjUgOS45Mjk2ODcgMzIuNzA3MDMxLTM3LjE1MjM0M2MyLjc2NTYyNS0zLjE0NDUzMiA2Ljc2MTcxOS00Ljk0NTMxMyAxMC45NTcwMzItNC45NDUzMTMgMy4wNzQyMTggMCA2LjAyMzQzNy45NTMxMjUgOC41MjczNDMgMi43NjE3MTkgMy44Mzk4NDQgMi43NzM0MzcgNi4wNDI5NjkgNy4wODk4NDQgNi4wNDI5NjkgMTEuODM5ODQ0IDAgMy41NTQ2ODctMS4zMDQ2ODggNi45ODQzNzQtMy42NzE4NzUgOS42NjAxNTZsLTc3Ljc2NTYyNSA4Ny42Njc5NjgtMjEuNTM1MTU2LTE5LjAwMzkwNiAzNC44MDg1OTQtMzkuNTQ2ODc1LTExLjI4MTI1LTkuOTI5Njg3LTY3LjEwNTQ2OSA3Ni4yMzQzNzVoLTMxLjE3MTg3NXYtMTguMTMyODEzYzYuNzYxNzE4LTQuNjA5Mzc1IDEyLjM5NDUzMS0xMC43NjE3MTggMTYuMzk4NDM3LTE3LjkzNzVoOS4xNTIzNDRjMTUuMTkxNDA2IDAgMjcuNTUwNzgxLTEyLjM1OTM3NSAyNy41NTA3ODEtMjcuNTU0Njg3di0yMC4wMzkwNjNjMC00NS41NzgxMjUtMzcuMDgyMDMxLTgyLjY2MDE1Ni04Mi42NjAxNTYtODIuNjYwMTU2cy04Mi42NjAxNTYgMzcuMDgyMDMxLTgyLjY2MDE1NiA4Mi42NjAxNTZ2MjAuMDM5MDYzYzAgMTUuMTk1MzEyIDEyLjM1OTM3NSAyNy41NTQ2ODcgMjcuNTUwNzgxIDI3LjU1NDY4N2g5LjE1MjM0NGM0LjAwMzkwNiA3LjE3NTc4MiA5LjYzNjcxOSAxMy4zMjgxMjUgMTYuMzk4NDM3IDE3LjkzNzV2MTkuMjY5NTMybC0yNy4zNTkzNzUgNC40OTYwOTMgMi40NDE0MDcgMTQuODMyMDMxIDI5LjIxNDg0My00LjgwNDY4N2M2LjM0NzY1NyA3LjIwMzEyNSAxNS40NjQ4NDQgMTEuMzk0NTMxIDI1LjI2MTcxOSAxMS4zOTQ1MzEgMTAuMDgyMDMxIDAgMTkuNDYwOTM4LTQuNDI5Njg3IDI1LjgyNDIxOS0xMi4wMjM0MzdoNDEuNjk5MjE5bDI2Ljg1MTU2Mi0zMC41MDc4MTMgMjEuNDk2MDk0IDE4Ljk2ODc1LTU1LjI1MzkwNiA2Mi4yODkwNjN2MTI0LjU4OTg0M2gtMjAuMDM5MDYzdjMwLjA1ODU5NGgtODEuMTU2MjV2LTMwLjA1ODU5NGgtMjAuMDM5MDYzdi0xMTQuMjIyNjU2aC0xNS43NjE3MThsLTEzLjgwMDc4MiAzNy40NTcwMzItMjcuMzE2NDA2LTExLjA1NDY4OCAyMS4zMzU5MzgtNTguNDMzNTk0YzQuMDI3MzQ0LTExLjAyNzM0NCAxMy43MjI2NTYtMTkuMDU4NTk0IDI1LjMwNDY4Ny0yMC45NjA5MzdsMS41NDY4NzUtLjI1NzgxMy0yLjQzNzUtMTQuODI4MTI1LTEuNTQ2ODc1LjI1MzkwN2MtMTYuOTI5Njg3IDIuNzgxMjUtMzEuMTAxNTYyIDE0LjUyMzQzNy0zNi45ODQzNzUgMzAuNjM2NzE4bC01NS4yOTI5NjggMTUxLjQxMDE1NmgtNjAuMzcxMDk0djMwLjA1ODU5NGgtMzAuMDU4NTk0djEyNS4yNDYwOTRoOTQuNjgzNTk0di0xNS4wMzEyNWgtNzkuNjUyMzQ0di05NS4xODM1OTRoNDgxLjkzNzV2OTUuMTgzNTk0aC0zODcuMjUzOTA2djE1LjAzMTI1aDQwMi4yODUxNTZ2LTEyNS4yNDYwOTR6bS0xODguMzY3MTg3LTI5NS43MjI2NTYtMTUuODAwNzgxLTIwLjg5NDUzMWgtNTcuMTkxNDA3YzUuMTY3OTY5LTE0LjU3ODEyNSAxOS4wODk4NDQtMjUuMDQ2ODc1IDM1LjQxNzk2OS0yNS4wNDY4NzUgMjAuNzE4NzUgMCAzNy41NzQyMTkgMTYuODUxNTYyIDM3LjU3NDIxOSAzNy41NzAzMTJ6bTMwLjA1ODU5MyAxMS42Njc5NjljMCA2LjkwNjI1LTUuNjE3MTg3IDEyLjUyNzM0My0xMi41MjM0MzcgMTIuNTI3MzQzaC0zLjU2NjQwNmMuNjk1MzEyLTMuNDAyMzQzIDEuMDU4NTkzLTYuOTIxODc0IDEuMDU4NTkzLTEwLjUyMzQzNyAwIDAtLjAyMzQzNy0yMy43MTQ4NDQtLjA2MjUtMjQuNTQ2ODc1aDIuNTcwMzEzYzYuOTA2MjUgMCAxMi41MjM0MzcgNS42MTcxODggMTIuNTIzNDM3IDEyLjUyMzQzOHptLTY3LjYzMjgxMi04Ny42Njc5NjljMzIuMDExNzE5IDAgNTguODc4OTA2IDIyLjM1OTM3NSA2NS44NTU0NjkgNTIuMjc3MzQ0LTMuMzA0Njg4LTEuNDAyMzQ0LTYuOTM3NS0yLjE3OTY4OC0xMC43NDYwOTQtMi4xNzk2ODhoLTUuNTIzNDM3Yy03LjIzODI4Mi0yMC40MTAxNTYtMjYuNzI2NTYzLTM1LjA3MDMxMi00OS41ODU5MzgtMzUuMDcwMzEycy00Mi4zNDc2NTYgMTQuNjYwMTU2LTQ5LjU4NTkzOCAzNS4wNzAzMTJoLTUuNTIzNDM3Yy0zLjgwODU5NCAwLTcuNDQxNDA2Ljc3NzM0NC0xMC43NDYwOTQgMi4xNzk2ODggNi45NzY1NjMtMjkuOTE3OTY5IDMzLjg0Mzc1LTUyLjI3NzM0NCA2NS44NTU0NjktNTIuMjc3MzQ0em0tNTUuMTA5Mzc1IDEwMC4xOTUzMTJjLTYuOTA2MjUgMC0xMi41MjM0MzctNS42MjEwOTMtMTIuNTIzNDM3LTEyLjUyNzM0M3YtMTAuMDE5NTMxYzAtNi45MDYyNSA1LjYxNzE4Ny0xMi41MjM0MzggMTIuNTIzNDM3LTEyLjUyMzQzOGgyLjU3MDMxM2MtLjAzOTA2My44MzIwMzEtLjA2MjUgMjQuNTQ2ODc1LS4wNjI1IDI0LjU0Njg3NSAwIDMuNjAxNTYzLjM2MzI4MSA3LjEyMTA5NCAxLjA1ODU5MyAxMC41MjM0Mzd6bTE3LjUzNTE1Ni0xMC41MjM0Mzd2LTE5LjUzNTE1Nmg1MS44NzEwOTRsMjIuMDI3MzQ0IDI5LjEzNjcxOWMtNC4yNSAxNi4wODIwMzEtMTguOTIxODc1IDI3Ljk3MjY1Ni0zNi4zMjQyMTkgMjcuOTcyNjU2LTIwLjcxODc1IDAtMzcuNTc0MjE5LTE2Ljg1NTQ2OS0zNy41NzQyMTktMzcuNTc0MjE5em0zNy41NzQyMTkgNzMuNjQ0NTMxYy01LjcwNzAzMSAwLTEwLjk5NjA5NC0yLjU2MjUtMTQuNTI3MzQ0LTYuOTMzNTk0di0xNi4xNjQwNjJjNC42MTcxODggMS4zMjgxMjUgOS40ODgyODIgMi4wNTg1OTQgMTQuNTI3MzQ0IDIuMDU4NTk0czkuOTEwMTU2LS43MzA0NjkgMTQuNTI3MzQ0LTIuMDU4NTk0djE2LjE2NDA2MmMtMy41MzEyNSA0LjM3MTA5NC04LjgyMDMxMyA2LjkzMzU5NC0xNC41MjczNDQgNi45MzM1OTR6bS03NS42NDg0MzggMTA1LjYxNzE4OHY3Mi43MzA0NjhoLTI2Ljc5Njg3NHptLTQ3LjAwNzgxMi0uOTY0ODQ0IDI3LjI3NzM0NCAxMS4wMzkwNjItMjMuMDgyMDMyIDYyLjY1NjI1aC0zMS4xMDkzNzR6bS04OC4yNTM5MDYgODguNzI2NTYyaDE1NS4zMDA3ODF2MTUuMDI3MzQ0aC0xNTUuMzAwNzgxem0wIDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGlkPVwiQUxMXCJcclxuICAgICAgICAgICAgICBkPVwibTE3My4zMzk4NDQgNDIxLjgyNDIxOXY1NS4xMDU0NjloMTY1LjMyMDMxMnYtNTUuMTA1NDY5em0xMDAuMTk1MzEyIDE1LjAyNzM0M3YyNS4wNTA3ODJoLTM1LjA3MDMxMnYtMjUuMDUwNzgyem0tODUuMTY3OTY4IDBoMzUuMDcwMzEydjI1LjA1MDc4MmgtMzUuMDcwMzEyem0xMzUuMjY1NjI0IDI1LjA1MDc4MmgtMzUuMDcwMzEydi0yNS4wNTA3ODJoMzUuMDcwMzEyem0wIDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGlkPVwiQUxMXCJcclxuICAgICAgICAgICAgICBkPVwibTE0My4yODEyNSA0NzEuOTIxODc1aC0xNS4wMzEyNXYtMTUuMDMxMjVoMTUuMDMxMjV6bTAtMzAuMDU4NTk0aC0xNS4wMzEyNXYtMTUuMDMxMjVoMTUuMDMxMjV6bTAgMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgaWQ9XCJBTExcIlxyXG4gICAgICAgICAgICAgIGQ9XCJtMzgzLjc1IDQ3MS45MjE4NzVoLTE1LjAzMTI1di0xNS4wMzEyNWgxNS4wMzEyNXptMC0zMC4wNTg1OTRoLTE1LjAzMTI1di0xNS4wMzEyNWgxNS4wMzEyNXptMCAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBpZD1cIkFMTFwiXHJcbiAgICAgICAgICAgICAgZD1cIm0zMDAuNTg1OTM4IDMxNC4xMTMyODFoLTE1LjAyNzM0NHYtMTUuMDI3MzQzaDE1LjAyNzM0NHptMC0zMC4wNTg1OTNoLTE1LjAyNzM0NHYtNDAuMDc4MTI2aDE1LjAyNzM0NHptMCAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+QWxsPC9sYWJlbD5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2Nzcy5zZWxlY3Rvcn0gJHtcclxuICAgICAgICAgIGhpZ2hsaWdodC5wbGFjZXMgPyBjc3MuaGlnaGxpZ2h0ZWQgOiBudWxsXHJcbiAgICAgICAgfWB9XHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0KHsgYWxsOiBmYWxzZSwgcGxhY2VzOiB0cnVlLCBldmVudHM6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT5cclxuICAgICAgICAgIHNldEhpZ2hsaWdodCgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBwbGFjZXM6IGZhbHNlIH0pKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJbnB1dENoYW5nZShcInNlYXJjaFR5cGVcIiwgXCJQTEFDRVNcIil9XHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MTJwdFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiLTYzIDAgNTEyIDUxMi4wMDAyNlwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUxMnB0XCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGlkPVwiUExBQ0VTXCJcclxuICAgICAgICAgICAgZD1cIm0zODYuNjQwNjI1IDQuNjgzNTk0Yy0xLjU4MjAzMS0zLjg1NTQ2OS01Ljk5NjA5NC01LjY5OTIxOS05Ljg1MTU2My00LjExNzE4OC00NC43MjY1NjIgMTguMzYzMjgyLTgwLjgwODU5MyA0OS45MjE4NzUtMTA0LjQzNzUgODkuODMyMDMyaC0yNjAuMDE1NjI0Yy0xMC4zMDg1OTQgMC0xNi4xNjQwNjMgMTIuMDcwMzEyLTkuNSAyMC4xNzE4NzQgMTY0LjYxNzE4NyAxOTkuNTcwMzEzIDE1My4yMjI2NTYgMTg3LjEzNjcxOSAxNjEuNjcxODc0IDE5Mi42MzI4MTN2ODcuMTU2MjVjMCA0LjE2Nzk2OSAzLjM4MjgxMyA3LjU0Njg3NSA3LjU1MDc4MiA3LjU0Njg3NSA0LjE2NDA2MiAwIDcuNTQ2ODc1LTMuMzc4OTA2IDcuNTQ2ODc1LTcuNTQ2ODc1di04MC43MjY1NjNjNi4zNzg5MDYgMS40ODgyODIgMTMuMTI4OTA2IDEuNjE3MTg4IDE5LjYyODkwNi4zNjMyODJ2MTM3LjU1NDY4N2MtMTEuMjg5MDYzLTMuOTU3MDMxLTguMTg3NS00LjAxMTcxOS0xOS42Mjg5MDYgMHYtMjYuOTk2MDkzYzAtNC4xNjc5NjktMy4zODI4MTMtNy41NDY4NzYtNy41NDY4NzUtNy41NDY4NzYtNC4xNjc5NjkgMC03LjU1MDc4MiAzLjM3ODkwNy03LjU1MDc4MiA3LjU0Njg3NnYzMi4yODEyNWwtMTA5Ljc0NjA5MyAzOC40NjA5MzdjLTExLjI1NzgxMyAzLjk1MzEyNS04LjQ4NDM3NSAyMC43MDMxMjUgMy41MjM0MzcgMjAuNzAzMTI1aDI2Mi4yNjk1MzJjMTIuMDI3MzQzIDAgMTQuNzU3ODEyLTE2Ljc1NzgxMiAzLjUxOTUzMS0yMC43MDMxMjVsLTU5Ljc3NzM0NC0yMC45NDkyMTljLTMuOTM3NS0xLjM3ODkwNi04LjI0MjE4Ny42OTUzMTMtOS42MjEwOTQgNC42MjEwOTQtMS4zNzg5MDYgMy45Mzc1LjY5MTQwNyA4LjI0NjA5NCA0LjYyODkwNyA5LjYyNWwzNS4xMTcxODcgMTIuMzA4NTk0aC0yMTAuMDE1NjI1Yy4wMDM5MDYgMCAxMDUuMDExNzE5LTM2Ljc4OTA2MyAxMDUuMDExNzE5LTM2Ljc4OTA2MyAxOS40MDYyNSA2LjgwODU5NCAxLjEyODkwNi4zOTQ1MzEgNDEuMzgyODEyIDE0LjQ5MjE4OCAzLjkzMzU5NCAxLjM3ODkwNiA4LjI0MjE4OC0uNjkxNDA3IDkuNjIxMDk0LTQuNjI4OTA3IDEuMzc4OTA2LTMuOTI1NzgxLS42OTUzMTMtOC4yMzQzNzQtNC42Mjg5MDYtOS42MTMyODFsLTIxLjQ2MDkzOC03LjUxOTUzMXYtMTQ4LjU4NTkzOGM5LjA1MDc4MS01LjM3NSAxMC45MTQwNjMtOC44NTkzNzQgMzQuNDQ1MzEzLTM3LjY5NTMxMiAyLjYzNjcxOC0zLjIzMDQ2OSAyLjE1MjM0NC03Ljk4MDQ2OS0xLjA3ODEyNS0xMC42MTcxODgtMy4yMzA0NjktMi42MzY3MTgtNy45ODA0NjktMi4xNTYyNS0xMC42MjEwOTQgMS4wNzQyMTktMjMuODk4NDM3IDI5LjI4MTI1LTIxLjg3ODkwNiAyNi44MjgxMjUtMjIuNzQ2MDk0IDI3LjgzMjAzMS0xMS42NDA2MjUgMTMuMjg1MTU3LTM0LjQyMTg3NSAxNi42NTIzNDQtNDkuODI0MjE5LTIuMDExNzE4bC04OC4yODEyNS0xMDcuMDI3MzQ0aDEzMS43ODUxNTdjMy40MTc5NjkgMTkuNDE3OTY5IDIwLjM5ODQzNyAzNC4yMjI2NTYgNDAuNzgxMjUgMzQuMjIyNjU2IDIwLjM4MjgxMiAwIDM3LjM1OTM3NS0xNC44MDQ2ODcgNDAuNzc3MzQzLTM0LjIyMjY1NmgxMy43Njk1MzJsLTQ3LjE3NTc4MiA1Ny44MDg1OTRjLTIuNjI1IDMuMjMwNDY4LTIuMTUyMzQzIDcuOTg4MjgxIDEuMDc4MTI2IDEwLjYxNzE4NyAzLjIzMDQ2OCAyLjYzNjcxOSA3Ljk5MjE4NyAyLjE1MjM0NCAxMC42Mjg5MDYtMS4wNjY0MDZsMTA4LjI0NjA5NC0xMzIuNjUyMzQ0YzYuNTg1OTM3LTguMDYyNS43Njk1MzEtMjAuMTIxMDkzLTkuNTQyOTY5LTIwLjEyMTA5M2gtNzYuNDMzNTk0YzIxLjUzMTI1LTMyLjkxNDA2MyA1My4wNzgxMjUtNTkuNzI2NTYzIDkyLjM4MjgxMy03NS44NjMyODIgMy44NTkzNzQtMS41ODIwMzEgNS42OTkyMTgtNS45OTIxODcgNC4xMTcxODctOS44NTE1NjJ6bS0xNzguNSAxNTYuMDMxMjVoLTE0NC4zNjcxODdsLTQ1LjU0Njg3Ni01NS4yMTg3NWgyNDUuOTk2MDk0Yy00LjkzMzU5NCAxMC4xNDQ1MzEtNy43MzgyODEgMTguMDY2NDA2LTkuMDU0Njg3IDIyLjE5OTIxOC0yMi4yMzgyODEtMy40NTMxMjQtNDIuODQzNzUgMTEuNDU3MDMyLTQ3LjAyNzM0NCAzMy4wMTk1MzJ6bTY1Ljc1MzkwNiAwaC01MC4yMDcwMzFjNy43MjI2NTYtMjQuNDcyNjU2IDQyLjQ4NDM3NS0yNC40NzI2NTYgNTAuMjA3MDMxIDB6bS01MC40MTQwNjIgMTUuMDk3NjU2aDUwLjYyMTA5M2MtNy4yMzA0NjggMjUuMzk4NDM4LTQzLjM4MjgxMiAyNS40MjE4NzUtNTAuNjIxMDkzIDB6bTEzNy4yNDIxODctNzAuMzE2NDA2LTQ1LjA2MjUgNTUuMjE4NzVoLTI2LjIxODc1Yy0yLjMyMDMxMi0xMS45NTcwMzItOS44MDA3ODEtMjIuMDg1OTM4LTIwLjAyMzQzNy0yNy45ODQzNzUgMS4yODEyNS00LjA2NjQwNyA0LjgyODEyNS0xNC4yMzgyODEgMTEuNzY5NTMxLTI3LjIzNDM3NXptMCAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5QbGFjZXM8L2xhYmVsPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLnNlbGVjdG9yfSAke1xyXG4gICAgICAgICAgaGlnaGxpZ2h0LmV2ZW50cyA/IGNzcy5oaWdobGlnaHRlZCA6IG51bGxcclxuICAgICAgICB9YH1cclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICBzZXRIaWdobGlnaHQoeyBhbGw6IGZhbHNlLCBwbGFjZXM6IGZhbHNlLCBldmVudHM6IHRydWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PlxyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0KChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGV2ZW50czogZmFsc2UgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUlucHV0Q2hhbmdlKFwic2VhcmNoVHlwZVwiLCBcIkVWRU5UU1wiKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIGhlaWdodD1cIjUxMnB0XCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUxMnB0XCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGlkPVwiRVZFTlRTXCJcclxuICAgICAgICAgICAgZD1cIm00ODEuOTQxNDA2IDM4Ni43NTM5MDZ2LTMwLjA1ODU5NGgtNDIuNTgyMDMxdjE1LjAzMTI1aDI3LjU1MDc4MXYxNS4wMjczNDRoLTE1NS4zMDA3ODF2LTE1LjAyNzM0NGgxMTIuNzE4NzV2LTE1LjAzMTI1aC05Mi42Nzk2ODd2LTExOC44ODI4MTJsMTM5LjIwMzEyNC0xNTYuOTM3NWM0LjgwODU5NC01LjQyNTc4MSA3LjQ2MDkzOC0xMi4zOTg0MzggNy40NjA5MzgtMTkuNjMyODEyIDAtOS40OTIxODgtNC41ODk4NDQtMTguNDcyNjU3LTEyLjI3NzM0NC0yNC4wMjczNDQtNS4wNzgxMjUtMy42Njc5NjktMTEuMDcwMzEyLTUuNjA1NDY5LTE3LjMyNDIxOC01LjYwNTQ2OS04LjUxNTYyNiAwLTE2LjYxNzE4OCAzLjY2NDA2My0yMi4yMzgyODIgMTAuMDQ2ODc1bC0zMi43MDcwMzEgMzcuMTUyMzQ0IDExLjI4MTI1IDkuOTI5Njg3IDMyLjcwNzAzMS0zNy4xNTIzNDNjMi43NjU2MjUtMy4xNDQ1MzIgNi43NjE3MTktNC45NDUzMTMgMTAuOTU3MDMyLTQuOTQ1MzEzIDMuMDc0MjE4IDAgNi4wMjM0MzcuOTUzMTI1IDguNTI3MzQzIDIuNzYxNzE5IDMuODM5ODQ0IDIuNzczNDM3IDYuMDQyOTY5IDcuMDg5ODQ0IDYuMDQyOTY5IDExLjgzOTg0NCAwIDMuNTU0Njg3LTEuMzA0Njg4IDYuOTg0Mzc0LTMuNjcxODc1IDkuNjYwMTU2bC03Ny43NjU2MjUgODcuNjY3OTY4LTIxLjUzNTE1Ni0xOS4wMDM5MDYgMzQuODA4NTk0LTM5LjU0Njg3NS0xMS4yODEyNS05LjkyOTY4Ny02Ny4xMDU0NjkgNzYuMjM0Mzc1aC0zMS4xNzE4NzV2LTE4LjEzMjgxM2M2Ljc2MTcxOC00LjYwOTM3NSAxMi4zOTQ1MzEtMTAuNzYxNzE4IDE2LjM5ODQzNy0xNy45Mzc1aDkuMTUyMzQ0YzE1LjE5MTQwNiAwIDI3LjU1MDc4MS0xMi4zNTkzNzUgMjcuNTUwNzgxLTI3LjU1NDY4N3YtMjAuMDM5MDYzYzAtNDUuNTc4MTI1LTM3LjA4MjAzMS04Mi42NjAxNTYtODIuNjYwMTU2LTgyLjY2MDE1NnMtODIuNjYwMTU2IDM3LjA4MjAzMS04Mi42NjAxNTYgODIuNjYwMTU2djIwLjAzOTA2M2MwIDE1LjE5NTMxMiAxMi4zNTkzNzUgMjcuNTU0Njg3IDI3LjU1MDc4MSAyNy41NTQ2ODdoOS4xNTIzNDRjNC4wMDM5MDYgNy4xNzU3ODIgOS42MzY3MTkgMTMuMzI4MTI1IDE2LjM5ODQzNyAxNy45Mzc1djE5LjI2OTUzMmwtMjcuMzU5Mzc1IDQuNDk2MDkzIDIuNDQxNDA3IDE0LjgzMjAzMSAyOS4yMTQ4NDMtNC44MDQ2ODdjNi4zNDc2NTcgNy4yMDMxMjUgMTUuNDY0ODQ0IDExLjM5NDUzMSAyNS4yNjE3MTkgMTEuMzk0NTMxIDEwLjA4MjAzMSAwIDE5LjQ2MDkzOC00LjQyOTY4NyAyNS44MjQyMTktMTIuMDIzNDM3aDQxLjY5OTIxOWwyNi44NTE1NjItMzAuNTA3ODEzIDIxLjQ5NjA5NCAxOC45Njg3NS01NS4yNTM5MDYgNjIuMjg5MDYzdjEyNC41ODk4NDNoLTIwLjAzOTA2M3YzMC4wNTg1OTRoLTgxLjE1NjI1di0zMC4wNTg1OTRoLTIwLjAzOTA2M3YtMTE0LjIyMjY1NmgtMTUuNzYxNzE4bC0xMy44MDA3ODIgMzcuNDU3MDMyLTI3LjMxNjQwNi0xMS4wNTQ2ODggMjEuMzM1OTM4LTU4LjQzMzU5NGM0LjAyNzM0NC0xMS4wMjczNDQgMTMuNzIyNjU2LTE5LjA1ODU5NCAyNS4zMDQ2ODctMjAuOTYwOTM3bDEuNTQ2ODc1LS4yNTc4MTMtMi40Mzc1LTE0LjgyODEyNS0xLjU0Njg3NS4yNTM5MDdjLTE2LjkyOTY4NyAyLjc4MTI1LTMxLjEwMTU2MiAxNC41MjM0MzctMzYuOTg0Mzc1IDMwLjYzNjcxOGwtNTUuMjkyOTY4IDE1MS40MTAxNTZoLTYwLjM3MTA5NHYzMC4wNTg1OTRoLTMwLjA1ODU5NHYxMjUuMjQ2MDk0aDk0LjY4MzU5NHYtMTUuMDMxMjVoLTc5LjY1MjM0NHYtOTUuMTgzNTk0aDQ4MS45Mzc1djk1LjE4MzU5NGgtMzg3LjI1MzkwNnYxNS4wMzEyNWg0MDIuMjg1MTU2di0xMjUuMjQ2MDk0em0tMTg4LjM2NzE4Ny0yOTUuNzIyNjU2LTE1LjgwMDc4MS0yMC44OTQ1MzFoLTU3LjE5MTQwN2M1LjE2Nzk2OS0xNC41NzgxMjUgMTkuMDg5ODQ0LTI1LjA0Njg3NSAzNS40MTc5NjktMjUuMDQ2ODc1IDIwLjcxODc1IDAgMzcuNTc0MjE5IDE2Ljg1MTU2MiAzNy41NzQyMTkgMzcuNTcwMzEyem0zMC4wNTg1OTMgMTEuNjY3OTY5YzAgNi45MDYyNS01LjYxNzE4NyAxMi41MjczNDMtMTIuNTIzNDM3IDEyLjUyNzM0M2gtMy41NjY0MDZjLjY5NTMxMi0zLjQwMjM0MyAxLjA1ODU5My02LjkyMTg3NCAxLjA1ODU5My0xMC41MjM0MzcgMCAwLS4wMjM0MzctMjMuNzE0ODQ0LS4wNjI1LTI0LjU0Njg3NWgyLjU3MDMxM2M2LjkwNjI1IDAgMTIuNTIzNDM3IDUuNjE3MTg4IDEyLjUyMzQzNyAxMi41MjM0Mzh6bS02Ny42MzI4MTItODcuNjY3OTY5YzMyLjAxMTcxOSAwIDU4Ljg3ODkwNiAyMi4zNTkzNzUgNjUuODU1NDY5IDUyLjI3NzM0NC0zLjMwNDY4OC0xLjQwMjM0NC02LjkzNzUtMi4xNzk2ODgtMTAuNzQ2MDk0LTIuMTc5Njg4aC01LjUyMzQzN2MtNy4yMzgyODItMjAuNDEwMTU2LTI2LjcyNjU2My0zNS4wNzAzMTItNDkuNTg1OTM4LTM1LjA3MDMxMnMtNDIuMzQ3NjU2IDE0LjY2MDE1Ni00OS41ODU5MzggMzUuMDcwMzEyaC01LjUyMzQzN2MtMy44MDg1OTQgMC03LjQ0MTQwNi43NzczNDQtMTAuNzQ2MDk0IDIuMTc5Njg4IDYuOTc2NTYzLTI5LjkxNzk2OSAzMy44NDM3NS01Mi4yNzczNDQgNjUuODU1NDY5LTUyLjI3NzM0NHptLTU1LjEwOTM3NSAxMDAuMTk1MzEyYy02LjkwNjI1IDAtMTIuNTIzNDM3LTUuNjIxMDkzLTEyLjUyMzQzNy0xMi41MjczNDN2LTEwLjAxOTUzMWMwLTYuOTA2MjUgNS42MTcxODctMTIuNTIzNDM4IDEyLjUyMzQzNy0xMi41MjM0MzhoMi41NzAzMTNjLS4wMzkwNjMuODMyMDMxLS4wNjI1IDI0LjU0Njg3NS0uMDYyNSAyNC41NDY4NzUgMCAzLjYwMTU2My4zNjMyODEgNy4xMjEwOTQgMS4wNTg1OTMgMTAuNTIzNDM3em0xNy41MzUxNTYtMTAuNTIzNDM3di0xOS41MzUxNTZoNTEuODcxMDk0bDIyLjAyNzM0NCAyOS4xMzY3MTljLTQuMjUgMTYuMDgyMDMxLTE4LjkyMTg3NSAyNy45NzI2NTYtMzYuMzI0MjE5IDI3Ljk3MjY1Ni0yMC43MTg3NSAwLTM3LjU3NDIxOS0xNi44NTU0NjktMzcuNTc0MjE5LTM3LjU3NDIxOXptMzcuNTc0MjE5IDczLjY0NDUzMWMtNS43MDcwMzEgMC0xMC45OTYwOTQtMi41NjI1LTE0LjUyNzM0NC02LjkzMzU5NHYtMTYuMTY0MDYyYzQuNjE3MTg4IDEuMzI4MTI1IDkuNDg4MjgyIDIuMDU4NTk0IDE0LjUyNzM0NCAyLjA1ODU5NHM5LjkxMDE1Ni0uNzMwNDY5IDE0LjUyNzM0NC0yLjA1ODU5NHYxNi4xNjQwNjJjLTMuNTMxMjUgNC4zNzEwOTQtOC44MjAzMTMgNi45MzM1OTQtMTQuNTI3MzQ0IDYuOTMzNTk0em0tNzUuNjQ4NDM4IDEwNS42MTcxODh2NzIuNzMwNDY4aC0yNi43OTY4NzR6bS00Ny4wMDc4MTItLjk2NDg0NCAyNy4yNzczNDQgMTEuMDM5MDYyLTIzLjA4MjAzMiA2Mi42NTYyNWgtMzEuMTA5Mzc0em0tODguMjUzOTA2IDg4LjcyNjU2MmgxNTUuMzAwNzgxdjE1LjAyNzM0NGgtMTU1LjMwMDc4MXptMCAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBpZD1cIkVWRU5UU1wiXHJcbiAgICAgICAgICAgIGQ9XCJtMTczLjMzOTg0NCA0MjEuODI0MjE5djU1LjEwNTQ2OWgxNjUuMzIwMzEydi01NS4xMDU0Njl6bTEwMC4xOTUzMTIgMTUuMDI3MzQzdjI1LjA1MDc4MmgtMzUuMDcwMzEydi0yNS4wNTA3ODJ6bS04NS4xNjc5NjggMGgzNS4wNzAzMTJ2MjUuMDUwNzgyaC0zNS4wNzAzMTJ6bTEzNS4yNjU2MjQgMjUuMDUwNzgyaC0zNS4wNzAzMTJ2LTI1LjA1MDc4MmgzNS4wNzAzMTJ6bTAgMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgaWQ9XCJFVkVOVFNcIlxyXG4gICAgICAgICAgICBkPVwibTE0My4yODEyNSA0NzEuOTIxODc1aC0xNS4wMzEyNXYtMTUuMDMxMjVoMTUuMDMxMjV6bTAtMzAuMDU4NTk0aC0xNS4wMzEyNXYtMTUuMDMxMjVoMTUuMDMxMjV6bTAgMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgaWQ9XCJFVkVOVFNcIlxyXG4gICAgICAgICAgICBkPVwibTM4My43NSA0NzEuOTIxODc1aC0xNS4wMzEyNXYtMTUuMDMxMjVoMTUuMDMxMjV6bTAtMzAuMDU4NTk0aC0xNS4wMzEyNXYtMTUuMDMxMjVoMTUuMDMxMjV6bTAgMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgaWQ9XCJFVkVOVFNcIlxyXG4gICAgICAgICAgICBkPVwibTMwMC41ODU5MzggMzE0LjExMzI4MWgtMTUuMDI3MzQ0di0xNS4wMjczNDNoMTUuMDI3MzQ0em0wLTMwLjA1ODU5M2gtMTUuMDI3MzQ0di00MC4wNzgxMjZoMTUuMDI3MzQ0em0wIDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkV2ZW50czwvbGFiZWw+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgU2VhcmNoU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWFyY2hTZWxlY3RvclwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3aGVuXCI6IFwiV2hlbklucHV0X3doZW5fXzJXRzI3XCIsXG5cdFwidG9cIjogXCJXaGVuSW5wdXRfdG9fXzJod3RxXCIsXG5cdFwiZnJvbVwiOiBcIldoZW5JbnB1dF9mcm9tX18xNXdEV1wiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBJbnB1dFByb3BzIGZyb20gXCIuLi8uLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9XaGVuSW5wdXQubW9kdWxlLnNjc3NcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBQaWNrPElucHV0UHJvcHMsIFwic3RhcnREYXRlXCIgfCBcImhhbmRsZVF1ZXJ5RGF0ZVwiIHwgXCJlbmREYXRlXCI+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdoZW5JbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBoYW5kbGVRdWVyeURhdGUsXHJcbiAgc3RhcnREYXRlLFxyXG4gIGVuZERhdGUsXHJcbn0pID0+IHtcclxuICBjb25zdCBoYW5kbGVEYXRlQ2hhbmdlOiAoZmllbGQ6IHN0cmluZywgZGF0ZTogRGF0ZSkgPT4gdm9pZCA9IChcclxuICAgIGZpZWxkLFxyXG4gICAgZGF0ZVxyXG4gICkgPT4ge1xyXG4gICAgcmV0dXJuIGhhbmRsZVF1ZXJ5RGF0ZShmaWVsZCwgZGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy53aGVufT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5XaGVuIGFyZSB5b3UgbWVldGluZz88L2xhYmVsPlxyXG4gICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y3NzLmZyb219XHJcbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0PXtcIlN0YXJ0IHRpbWVcIn1cclxuICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgbWluRGF0ZT17dG9kYXl9XHJcbiAgICAgICAgZGF0ZUZvcm1hdD1cIlBwXCJcclxuICAgICAgICBzaG93VGltZVNlbGVjdFxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlRGF0ZUNoYW5nZShcInN0YXJ0RGF0ZVwiLCBkYXRlKX1cclxuICAgICAgPjwvRGF0ZVBpY2tlcj5cclxuICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICBjbGFzc05hbWU9e2Nzcy50b31cclxuICAgICAgICBwbGFjZWhvbGRlclRleHQ9e1wiRW5kIFRpbWVcIn1cclxuICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgIG1pbkRhdGU9e3N0YXJ0RGF0ZSA/IHN0YXJ0RGF0ZSA6IHRvZGF5fVxyXG4gICAgICAgIHNlbGVjdGVkPXtlbmREYXRlID8gZW5kRGF0ZSA6IHN0YXJ0RGF0ZX1cclxuICAgICAgICBkYXRlRm9ybWF0PVwiUHBcIlxyXG4gICAgICAgIHNob3dUaW1lU2VsZWN0XHJcbiAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVEYXRlQ2hhbmdlKFwiZW5kRGF0ZVwiLCBkYXRlKX1cclxuICAgICAgPjwvRGF0ZVBpY2tlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFdoZW5JbnB1dCB9IGZyb20gXCIuL1doZW5JbnB1dFwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3aGVyZVwiOiBcIldoZXJlSW5wdXRfd2hlcmVfXzFpMjJEXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBJbnB1dENoYW5nZSB9IGZyb20gXCIuLi8uLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IElucHV0UHJvcHMgZnJvbSBcIi4uLy4uL1NlYXJjaEJveFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1doZXJlSW5wdXQubW9kdWxlLnNjc3NcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBQaWNrPElucHV0UHJvcHMsIFwibG9jYXRpb25cIiB8IFwiaGFuZGxlSW5wdXRDaGFuZ2VcIiB8IFwicmFkaXVzXCI+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdoZXJlSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgbG9jYXRpb24sXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UsXHJcbiAgcmFkaXVzLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlOiAoXHJcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PixcclxuICAgIGZpZWxkOiBzdHJpbmdcclxuICApID0+IHZvaWQgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XHJcbiAgICByZXR1cm4gaGFuZGxlSW5wdXRDaGFuZ2UoXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWVcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Mud2hlcmV9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPldoZXJlIGFyZSB5b3UgbWVldGluZz88L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJMb3MgQW5nZWxlcyAvIDkwMDE1XCJcclxuICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBcImxvY2F0aW9uXCIpfVxyXG4gICAgICAvPlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgbmFtZT1cInJhZGl1c1wiXHJcbiAgICAgICAgdmFsdWU9e3JhZGl1c31cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIFwicmFkaXVzXCIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPG9wdGdyb3VwPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlJhZGl1cy4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE2MTBcIj5XaXRoaW4gMSBtaWxlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiODA1MFwiPldpdGhpbiA1IG1pbGVzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTYxMDBcIj5XaXRoaW4gMTAgbWlsZXM8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MDI1MFwiPldpdGhpbiAyNSBtaWxlczwvb3B0aW9uPlxyXG4gICAgICAgIDwvb3B0Z3JvdXA+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgV2hlcmVJbnB1dCB9IGZyb20gXCIuL1doZXJlSW5wdXRcIjtcclxuIiwiZXhwb3J0IHsgU2VhcmNoU2VsZWN0b3IgfSBmcm9tIFwiLi9TZWFyY2hTZWxlY3RvclwiO1xyXG5leHBvcnQgeyBXaGVyZUlucHV0IH0gZnJvbSBcIi4vV2hlcmVJbnB1dFwiO1xyXG5leHBvcnQgeyBXaGVuSW5wdXQgfSBmcm9tIFwiLi9XaGVuSW5wdXRcIjtcclxuZXhwb3J0IHsgRXZlbnRzSW5wdXQgfSBmcm9tIFwiLi9FdmVudHNJbnB1dFwiO1xyXG5leHBvcnQgeyBQbGFjZXNJbnB1dCB9IGZyb20gXCIuL1BsYWNlc0lucHV0XCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaEJveFwiOiBcIlNlYXJjaEJveF9zZWFyY2hCb3hfXzNhd09TXCIsXG5cdFwic2VhcmNoQnV0dG9uXCI6IFwiU2VhcmNoQm94X3NlYXJjaEJ1dHRvbl9fMm9rcGlcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFNlYXJjaFNlbGVjdG9yLFxyXG4gIFdoZXJlSW5wdXQsXHJcbiAgV2hlbklucHV0LFxyXG4gIEV2ZW50c0lucHV0LFxyXG4gIFBsYWNlc0lucHV0LFxyXG59IGZyb20gXCIuL1BhcnRzXCI7XHJcbmltcG9ydCBTY2hlZHVsZUdyaWQgZnJvbSBcIi4vTG9naWMvU2NoZWR1bGVHcmlkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlR3JpZERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3N0YXRlL1NlYXJjaEdyaWRDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVNxdWFyZXNEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9zdGF0ZS9HcmlkU3F1YXJlc0NvbnRleHRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9TZWFyY2hCb3gubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCB0eXBlIElucHV0Q2hhbmdlID0gKGtleTogc3RyaW5nLCBpbnB1dDogc3RyaW5nIHwgRGF0ZSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJbnB1dFByb3BzIHtcclxuICBoYW5kbGVJbnB1dENoYW5nZTogSW5wdXRDaGFuZ2U7XHJcbiAgc2VhcmNoVHlwZTogc3RyaW5nO1xyXG4gIHBsYWNlVHlwZTogc3RyaW5nO1xyXG4gIHJhZGl1czogc3RyaW5nO1xyXG4gIGV2ZW50c0NhdGVnb3J5OiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBzdGFydERhdGU6IERhdGU7XHJcbiAgZW5kRGF0ZTogRGF0ZTtcclxuICBoYW5kbGVRdWVyeURhdGU6IChrZXk6IHN0cmluZywgZGF0ZTogRGF0ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hRdWVyeSB7XHJcbiAgc2VhcmNoVHlwZTogc3RyaW5nO1xyXG4gIGV2ZW50c0NhdGVnb3J5OiBzdHJpbmc7XHJcbiAgcmFkaXVzOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBwbGFjZVR5cGU6IHN0cmluZztcclxuICBlbmREYXRlOiBEYXRlO1xyXG4gIHN0YXJ0RGF0ZTogRGF0ZTtcclxuICBzdGFydEZvcm1hdHRlZDogc3RyaW5nO1xyXG4gIGVuZEZvcm1hdHRlZDogc3RyaW5nO1xyXG4gIHVuaXhTdGFydERhdGU6IG51bWJlcjtcclxuICB1bml4RW5kRGF0ZTogbnVtYmVyO1xyXG4gIHRpY2tldE1hc3RlckNhdGVnb3JpZXM6IHN0cmluZztcclxuICB5ZWxwQ2F0ZWdvcmllczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoQm94OiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gUmVhY3QudXNlU3RhdGU8U2VhcmNoUXVlcnk+KHtcclxuICAgIHNlYXJjaFR5cGU6IFwiQUxMXCIsXHJcbiAgICBldmVudHNDYXRlZ29yeTogXCJcIixcclxuICAgIHJhZGl1czogXCJcIixcclxuICAgIGxvY2F0aW9uOiBcIlwiLFxyXG4gICAgZW5kRGF0ZTogbnVsbCxcclxuICAgIHN0YXJ0RGF0ZTogbnVsbCxcclxuICAgIHBsYWNlVHlwZTogXCJcIixcclxuICAgIHN0YXJ0Rm9ybWF0dGVkOiBcIlwiLFxyXG4gICAgZW5kRm9ybWF0dGVkOiBcIlwiLFxyXG4gICAgdW5peFN0YXJ0RGF0ZTogbnVsbCxcclxuICAgIHVuaXhFbmREYXRlOiBudWxsLFxyXG4gICAgdGlja2V0TWFzdGVyQ2F0ZWdvcmllczogXCJcIixcclxuICAgIHllbHBDYXRlZ29yaWVzOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzcXVhcmVzRGlzcGF0Y2ggPSB1c2VTcXVhcmVzRGlzcGF0Y2goKTtcclxuICBjb25zdCBncmlkRGlzcGF0Y2ggPSB1c2VHcmlkRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0OiAoKSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0ZXNJbnB1dDogU2NoZWR1bGVHcmlkID0gbmV3IFNjaGVkdWxlR3JpZChcclxuICAgICAgc2VhcmNoUXVlcnkudW5peFN0YXJ0RGF0ZSxcclxuICAgICAgc2VhcmNoUXVlcnkudW5peEVuZERhdGVcclxuICAgICk7XHJcbiAgICBuZXdEYXRlc0lucHV0LnNldEdyaWQoKTtcclxuXHJcbiAgICBzcXVhcmVzRGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9TUVVBUkVTXCIsXHJcbiAgICAgIHBheWxvYWQ6IHsgbnVtYmVyT2ZTcXVhcmVzOiBuZXdEYXRlc0lucHV0Lm51bWJlcm9mU3F1YXJlcyB9LFxyXG4gICAgfSk7XHJcbiAgICBncmlkRGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBcIkFERF9HUklEX1RFTVBMQVRFXCIsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBob3VyU3RyaW5nczogbmV3RGF0ZXNJbnB1dC5ob3VyU3RyaW5ncyxcclxuICAgICAgICBncmlkVGVtcGxhdGU6IG5ld0RhdGVzSW5wdXQudGVtcGxhdGVBcmVhcyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrRmllbGRzRGlzcGxheUxpbms6IChzZWFyY2hUeXBlOiBzdHJpbmcpID0+IEpTWC5FbGVtZW50ID0gKFxyXG4gICAgc2VhcmNoVHlwZVxyXG4gICkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBsb2NhdGlvbixcclxuICAgICAgcmFkaXVzLFxyXG4gICAgICBwbGFjZVR5cGUsXHJcbiAgICAgIHN0YXJ0Rm9ybWF0dGVkLFxyXG4gICAgICBlbmRGb3JtYXR0ZWQsXHJcbiAgICAgIHVuaXhTdGFydERhdGUsXHJcbiAgICAgIHVuaXhFbmREYXRlLFxyXG4gICAgICBldmVudHNDYXRlZ29yeSxcclxuICAgIH0gPSBzZWFyY2hRdWVyeTtcclxuICAgIHN3aXRjaCAoc2VhcmNoVHlwZSkge1xyXG4gICAgICBjYXNlIFwiQUxMXCI6XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5LmxvY2F0aW9uICE9PSBcIlwiICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5zdGFydERhdGUgIT09IG51bGwgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnJhZGl1cyAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkuZW5kRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkucGxhY2VUeXBlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2gvW3F1ZXJpZWRdXCIsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFR5cGUsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIHJhZGl1cyxcclxuICAgICAgICAgICAgICAgIHBsYWNlVHlwZSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0Rm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgZW5kRm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgdW5peEVuZERhdGUsXHJcbiAgICAgICAgICAgICAgICB1bml4U3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzQ2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXM9e2Avc2VhcmNoL3NlYXJjaFR5cGU9QUxMK2xvY2F0aW9uPSR7c2VhcmNoUXVlcnkubG9jYXRpb259K3JhZGl1cz0ke3NlYXJjaFF1ZXJ5LnJhZGl1c30rcGxhY2VUeXBlPSR7c2VhcmNoUXVlcnkucGxhY2VUeXBlfStzdGFydEZvcm1hdHRlZD0ke3NlYXJjaFF1ZXJ5LnN0YXJ0Rm9ybWF0dGVkfStlbmRGb3JtYXR0ZWQ9JHtzZWFyY2hRdWVyeS5lbmRGb3JtYXR0ZWR9K3VuaXhTdGFydERhdGU9JHtzZWFyY2hRdWVyeS51bml4U3RhcnREYXRlfSt1bml4RW5kRGF0ZT0ke3NlYXJjaFF1ZXJ5LnVuaXhFbmREYXRlfStldmVudHNDYXRlZ29yeT0ke3NlYXJjaFF1ZXJ5LmV2ZW50c0NhdGVnb3J5fWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydChcInBsZWFzZSBmaWxsIG91dCBtaXNzaW5nIGZpZWxkc1wiKX0+XHJcbiAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGNhc2UgXCJQTEFDRVNcIjpcclxuICAgICAgICByZXR1cm4gc2VhcmNoUXVlcnkubG9jYXRpb24gIT09IFwiXCIgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnN0YXJ0RGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkucmFkaXVzICE9PSBcIlwiICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5lbmREYXRlICE9PSBudWxsICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5wbGFjZVR5cGUgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaC9bcXVlcmllZF1cIixcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVHlwZSxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICBlbmRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXM9e2Avc2VhcmNoL3NlYXJjaFR5cGU9UExBQ0VTK2xvY2F0aW9uPSR7c2VhcmNoUXVlcnkubG9jYXRpb259K3JhZGl1cz0ke3NlYXJjaFF1ZXJ5LnJhZGl1c30rcGxhY2VUeXBlPSR7c2VhcmNoUXVlcnkucGxhY2VUeXBlfStzdGFydEZvcm1hdHRlZD0ke3NlYXJjaFF1ZXJ5LnN0YXJ0Rm9ybWF0dGVkfStlbmRGb3JtYXR0ZWQ9JHtzZWFyY2hRdWVyeS5lbmRGb3JtYXR0ZWR9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwicGxlYXNlIGZpbGwgb3V0IG1pc3NpbmcgZmllbGRzXCIpfT5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSBcIkVWRU5UU1wiOlxyXG4gICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sb2NhdGlvbiAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkuc3RhcnREYXRlICE9PSBudWxsICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5yYWRpdXMgIT09IFwiXCIgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LmVuZERhdGUgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaC9bcXVlcmllZF1cIixcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVHlwZSxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICBlbmRGb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICB1bml4U3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgdW5peEVuZERhdGUsXHJcbiAgICAgICAgICAgICAgICBldmVudHNDYXRlZ29yeSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhcz17YC9zZWFyY2gvc2VhcmNoVHlwZT1FVkVOVFMrbG9jYXRpb249JHtzZWFyY2hRdWVyeS5sb2NhdGlvbn0rcmFkaXVzPSR7c2VhcmNoUXVlcnkucmFkaXVzfStzdGFydEZvcm1hdHRlZD0ke3NlYXJjaFF1ZXJ5LnN0YXJ0Rm9ybWF0dGVkfStlbmRGb3JtYXR0ZWQ9JHtzZWFyY2hRdWVyeS5lbmRGb3JtYXR0ZWR9K3VuaXhTdGFydERhdGU9JHtzZWFyY2hRdWVyeS51bml4U3RhcnREYXRlfSt1bml4RW5kRGF0ZT0ke3NlYXJjaFF1ZXJ5LnVuaXhFbmREYXRlfStldmVudHNDYXRlZ29yeT0ke3NlYXJjaFF1ZXJ5LmV2ZW50c0NhdGVnb3J5fWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydChcInBsZWFzZSBmaWxsIG91dCBtaXNzaW5nIGZpZWxkc1wiKX0+XHJcbiAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5LmxvY2F0aW9uICE9PSBcIlwiICYmXHJcbiAgICAgICAgICBzZWFyY2hRdWVyeS5zdGFydERhdGUgIT09IG51bGwgJiZcclxuICAgICAgICAgIHNlYXJjaFF1ZXJ5LnJhZGl1cyAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkuZW5kRGF0ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgc2VhcmNoUXVlcnkucGxhY2VUeXBlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9zZWFyY2gvW3F1ZXJpZWRdXCIsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFR5cGUsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIHJhZGl1cyxcclxuICAgICAgICAgICAgICAgIHBsYWNlVHlwZSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0Rm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgZW5kRm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgdW5peEVuZERhdGUsXHJcbiAgICAgICAgICAgICAgICB1bml4U3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzQ2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYXM9e2Avc2VhcmNoL3NlYXJjaFR5cGU9QUxMK2xvY2F0aW9uPSR7c2VhcmNoUXVlcnkubG9jYXRpb259K3JhZGl1cz0ke3NlYXJjaFF1ZXJ5LnJhZGl1c30rcGxhY2VUeXBlPSR7c2VhcmNoUXVlcnkucGxhY2VUeXBlfStzdGFydEZvcm1hdHRlZD0ke3NlYXJjaFF1ZXJ5LnN0YXJ0Rm9ybWF0dGVkfStlbmRGb3JtYXR0ZWQ9JHtzZWFyY2hRdWVyeS5lbmRGb3JtYXR0ZWR9K3VuaXhTdGFydERhdGU9JHtzZWFyY2hRdWVyeS51bml4U3RhcnREYXRlfSt1bml4RW5kRGF0ZT0ke3NlYXJjaFF1ZXJ5LnVuaXhFbmREYXRlfStldmVudHNDYXRlZ29yeT0ke3NlYXJjaFF1ZXJ5LmV2ZW50c0NhdGVnb3J5fWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydChcInBsZWFzZSBmaWxsIG91dCBtaXNzaW5nIGZpZWxkc1wiKX0+XHJcbiAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZTogSW5wdXRDaGFuZ2UgPSAoa2V5LCBpbnB1dCkgPT4ge1xyXG4gICAgcmV0dXJuIHNldFNlYXJjaFF1ZXJ5KChzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtrZXldOiBpbnB1dCxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVRdWVyeURhdGU6IChrZXk6IHN0cmluZywgZGF0ZTogRGF0ZSkgPT4gdm9pZCA9IChrZXksIGRhdGUpID0+IHtcclxuICAgIGlmIChrZXkgPT09IFwic3RhcnREYXRlXCIpIHtcclxuICAgICAgY29uc3QgdW5peFN0YXJ0RGF0ZTogbnVtYmVyID0gTWF0aC5yb3VuZChuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgICAgY29uc3QgdGltZU9mZlNldDogbnVtYmVyID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjA7XHJcbiAgICAgIGNvbnN0IGxvY2FsU3RhcnRUaW1lSVNPOiBzdHJpbmcgPSBuZXcgRGF0ZShcclxuICAgICAgICAodW5peFN0YXJ0RGF0ZSAtIHRpbWVPZmZTZXQpICogMTAwMFxyXG4gICAgICApLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgIGNvbnN0IGxvY2FsU3RhcnRUaW1lSVNPRm9ybWF0dGVkOiBzdHJpbmcgPSBgJHtsb2NhbFN0YXJ0VGltZUlTTy5zdWJzdHJpbmcoXHJcbiAgICAgICAgMCxcclxuICAgICAgICAxOVxyXG4gICAgICApfVpgO1xyXG5cclxuICAgICAgcmV0dXJuIHNldFNlYXJjaFF1ZXJ5KChzdGF0ZSkgPT4gKHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBba2V5XTogZGF0ZSxcclxuICAgICAgICB1bml4U3RhcnREYXRlLFxyXG4gICAgICAgIHN0YXJ0Rm9ybWF0dGVkOiBsb2NhbFN0YXJ0VGltZUlTT0Zvcm1hdHRlZCxcclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdW5peEVuZERhdGU6IG51bWJlciA9IE1hdGgucm91bmQobmV3IERhdGUoZGF0ZSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgIGNvbnN0IHRpbWVPZmZTZXQ6IG51bWJlciA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwO1xyXG4gICAgICBjb25zdCBsb2NhbEVuZFRpbWVJU086IHN0cmluZyA9IG5ldyBEYXRlKFxyXG4gICAgICAgICh1bml4RW5kRGF0ZSAtIHRpbWVPZmZTZXQpICogMTAwMFxyXG4gICAgICApLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgIGNvbnN0IGxvY2FsRW5kVGltZUlTT0Zvcm1hdHRlZDogc3RyaW5nID0gYCR7bG9jYWxFbmRUaW1lSVNPLnN1YnN0cmluZyhcclxuICAgICAgICAwLFxyXG4gICAgICAgIDE5XHJcbiAgICAgICl9WmA7XHJcbiAgICAgIHJldHVybiBzZXRTZWFyY2hRdWVyeSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2tleV06IGRhdGUsXHJcbiAgICAgICAgdW5peEVuZERhdGUsXHJcbiAgICAgICAgZW5kRm9ybWF0dGVkOiBsb2NhbEVuZFRpbWVJU09Gb3JtYXR0ZWQsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5zZWFyY2hCb3h9PlxyXG4gICAgICA8U2VhcmNoU2VsZWN0b3JcclxuICAgICAgICBzZWFyY2hUeXBlPXtzZWFyY2hRdWVyeS5zZWFyY2hUeXBlfVxyXG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgPjwvU2VhcmNoU2VsZWN0b3I+XHJcbiAgICAgIDxXaGVyZUlucHV0XHJcbiAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgIGxvY2F0aW9uPXtzZWFyY2hRdWVyeS5sb2NhdGlvbn1cclxuICAgICAgICByYWRpdXM9e3NlYXJjaFF1ZXJ5LnJhZGl1c31cclxuICAgICAgPjwvV2hlcmVJbnB1dD5cclxuICAgICAgPFdoZW5JbnB1dFxyXG4gICAgICAgIGhhbmRsZVF1ZXJ5RGF0ZT17aGFuZGxlUXVlcnlEYXRlfVxyXG4gICAgICAgIHN0YXJ0RGF0ZT17c2VhcmNoUXVlcnkuc3RhcnREYXRlfVxyXG4gICAgICAgIGVuZERhdGU9e3NlYXJjaFF1ZXJ5LmVuZERhdGV9XHJcbiAgICAgID48L1doZW5JbnB1dD5cclxuICAgICAgPEV2ZW50c0lucHV0XHJcbiAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgIGV2ZW50c0NhdGVnb3J5PXtzZWFyY2hRdWVyeS5ldmVudHNDYXRlZ29yeX1cclxuICAgICAgPjwvRXZlbnRzSW5wdXQ+XHJcbiAgICAgIDxQbGFjZXNJbnB1dFxyXG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICBwbGFjZVR5cGU9e3NlYXJjaFF1ZXJ5LnBsYWNlVHlwZX1cclxuICAgICAgPjwvUGxhY2VzSW5wdXQ+XHJcblxyXG4gICAgICB7Y2hlY2tGaWVsZHNEaXNwbGF5TGluayhzZWFyY2hRdWVyeS5zZWFyY2hUeXBlKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFNlYXJjaEJveCB9IGZyb20gXCIuL1NlYXJjaEJveFwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hJY29uXCI6IFwiU2VhcmNoSWNvbl9zZWFyY2hJY29uX18xb2cwZlwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vU2VhcmNoSWNvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBOYXZTdGF0ZSB9IGZyb20gXCIuLi9OYXZcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZGlzcGxheVNlYXJjaEJveDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248TmF2U3RhdGU+PjtcclxuICBzZWFyY2hCb3g6IE5hdlN0YXRlO1xyXG4gIHN0b3BXaW5kb3dTY3JvbGw6IChhcmc6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoSWNvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBzZWFyY2hCb3gsXHJcbiAgZGlzcGxheVNlYXJjaEJveCxcclxuICBzdG9wV2luZG93U2Nyb2xsLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoQm94LmRpc3BsYXkpIHtcclxuICAgICAgcmV0dXJuIGRpc3BsYXlTZWFyY2hCb3goeyBkaXNwbGF5OiBmYWxzZSB9KSwgc3RvcFdpbmRvd1Njcm9sbChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGlzcGxheVNlYXJjaEJveCh7IGRpc3BsYXk6IHRydWUgfSksIHN0b3BXaW5kb3dTY3JvbGwodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxODAuMTggMTgwLjE4XCJcclxuICAgICAgY2xhc3NOYW1lPXtjc3Muc2VhcmNoSWNvbn1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj5cclxuICAgICAgICA8ZyBpZD1cIkxheWVyXzEtMlwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuMDksMjEuMDlhNzIsNzIsMCwwLDAsOTUuMDYsMTA3Ljc5bDUxLjMxLDUxLjMsMTIuNzItMTIuNzItNTEuMy01MS4zMUE3Miw3MiwwLDAsMCwyMS4wOSwyMS4wOVptODkuMDksODkuMDlhNTQsNTQsMCwxLDEsMC03Ni4zN0E1NCw1NCwwLDAsMSwxMTAuMTgsMTEwLjE4WlwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIi4vU2VhcmNoSWNvblwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXNjcmlwdGlvbldyYXBwZXJcIjogXCJFdmVudERlc2NyaXB0aW9uX2Rlc2NyaXB0aW9uV3JhcHBlcl9fMTQwSUdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkV2ZW50RGVzY3JpcHRpb25fZGVzY3JpcHRpb25fXzFraG5rXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9FdmVudERlc2NyaXB0aW9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnREZXNjcmlwdGlvbjogUmVhY3QuRkM8eyBkZXNjcmlwdGlvbjogc3RyaW5nIH0+ID0gKHtcclxuICBkZXNjcmlwdGlvbixcclxufSkgPT4ge1xyXG4gIGNvbnN0IHVud2FudGVkQ2hhcmFjdGVyczogUmVnRXhwID0gL1sqXS9nO1xyXG5cclxuICByZXR1cm4gZGVzY3JpcHRpb24gPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmRlc2NyaXB0aW9uV3JhcHBlcn0+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17Y3NzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICB7ZGVzY3JpcHRpb24uc2VhcmNoKHVud2FudGVkQ2hhcmFjdGVycykgIT09IC0xXHJcbiAgICAgICAgICA/IGRlc2NyaXB0aW9uLnJlcGxhY2UodW53YW50ZWRDaGFyYWN0ZXJzLCBcIlwiKVxyXG4gICAgICAgICAgOiBkZXNjcmlwdGlvbn1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGw7XHJcbn07XHJcbiIsImV4cG9ydCB7IEV2ZW50RGVzY3JpcHRpb24gfSBmcm9tIFwiLi9FdmVudERlc2NyaXB0aW9uXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV2ZW50UHJpY2VcIjogXCJFdmVudFByaWNlR2VucmVfZXZlbnRQcmljZV9fMUhLVEtcIixcblx0XCJnZW5yZVwiOiBcIkV2ZW50UHJpY2VHZW5yZV9nZW5yZV9fMTVISm9cIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0V2ZW50UHJpY2VHZW5yZS5tb2R1bGUuc2Nzc1wiO1xyXG5leHBvcnQgY29uc3QgRXZlbnRQcmljZUdlbnJlOiBSZWFjdC5GQzx7XHJcbiAgdmVudWU6IHN0cmluZztcclxuICBwcmljZTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGdlbnJlOiBhbnkgfCBudWxsO1xyXG59PiA9ICh7IHZlbnVlLCBwcmljZSwgc291cmNlLCBnZW5yZSB9KSA9PiB7XHJcbiAgY29uc3QgcGFyc2VQcmljZTogKCkgPT4gc3RyaW5nID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChzb3VyY2UpIHtcclxuICAgICAgY2FzZSBcInllbHBcIjpcclxuICAgICAgICBpZiAoIXByaWNlKSByZXR1cm4gXCJDaGVjayBsaW5rIGZvciBwcmljZS5cIjtcclxuICAgICAgICByZXR1cm4gYFN0YXJ0aW5nIGF0ICQke3ByaWNlfS4wMGA7XHJcbiAgICAgIGNhc2UgXCJ0aWNrZXRtYXN0ZXJcIjpcclxuICAgICAgICBpZiAoIXByaWNlIHx8ICFwcmljZS5taW4pIHJldHVybiBcIkNoZWNrIGxpbmsgZm9yIHByaWNlXCI7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVByaWNlOiAoKSA9PiBzdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJpY2UubWluICUgMSA9PT0gMCkgcmV0dXJuIGBTdGFydGluZyBhdCAkJHtwcmljZS5taW59LjAwYDtcclxuICAgICAgICAgIGNvbnN0IHByaWNlU3RyaW5nOiBzdHJpbmcgPSBwcmljZS5taW4udG9TdHJpbmcoKTtcclxuICAgICAgICAgIGNvbnN0IGRlY2ltYWxJbmRleDogbnVtYmVyID0gcHJpY2VTdHJpbmcuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgICBjb25zdCBjZW50czogc3RyaW5nID0gcHJpY2VTdHJpbmcuc3Vic3RyaW5nKGRlY2ltYWxJbmRleCArIDEpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBgU3RhcnRpbmcgYXQgJCR7cHJpY2VTdHJpbmcuc3Vic3RyaW5nKDAsIGRlY2ltYWxJbmRleCl9LiR7XHJcbiAgICAgICAgICAgIGNlbnRzLmxlbmd0aCA+IDEgPyBjZW50cyA6IGAke2NlbnRzfTBgXHJcbiAgICAgICAgICB9YDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlUHJpY2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRHZW5yZTogKCkgPT4gSlNYLkVsZW1lbnQgfCBudWxsID0gKCkgPT4ge1xyXG4gICAgaWYgKHNvdXJjZSA9PT0gXCJ5ZWxwXCIpIHtcclxuICAgICAgaWYgKGdlbnJlLmluZGV4T2YoXCItXCIpICE9PSAtMSB8fCBnZW5yZS5pbmRleE9mKFwiIFwiKSAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJTcGxpdDogc3RyaW5nID0gZ2VucmUuaW5kZXhPZihcIiBcIikgIT09IC0xID8gXCIgXCIgOiBcIi1cIjtcclxuICAgICAgICBjb25zdCBzcGxpdHRlZDogc3RyaW5nW10gPSBnZW5yZS5zcGxpdChjaGFyYWN0ZXJTcGxpdCk7XHJcbiAgICAgICAgY29uc3QgdXBwZXJDYXNlOiBzdHJpbmdbXSA9IHNwbGl0dGVkLm1hcChcclxuICAgICAgICAgICh3b3JkKSA9PiBgJHt3b3JkLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpfSR7d29yZC5zdWJzdHJpbmcoMSl9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y3NzLmdlbnJlfT57YOKAoiAke3VwcGVyQ2FzZS5qb2luKFwiIFwiKX1gfTwvc3Bhbj47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmdlbnJlfVxyXG4gICAgICAgICAgPntg4oCiICR7Z2VucmVbMF0udG9VcHBlckNhc2UoKX0ke2dlbnJlLnN1YnN0cmluZygxKX1gfTwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWdlbnJlKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBzZWdtZW50U3RyaW5nOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgbGV0IGdlbnJlU3RyaW5nOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGdlbnJlWzBdLnNlZ21lbnQgPyAoc2VnbWVudFN0cmluZyA9IGdlbnJlWzBdLnNlZ21lbnQubmFtZSkgOiBudWxsO1xyXG4gICAgZ2VucmVbMF1bXCJnZW5yZVwiXSA/IChnZW5yZVN0cmluZyA9IGdlbnJlWzBdW1wiZ2VucmVcIl0ubmFtZSkgOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzLmdlbnJlfT57YOKAoiAke3NlZ21lbnRTdHJpbmd9ICR7Z2VucmVTdHJpbmd9YH08L3NwYW4+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmV2ZW50UHJpY2V9PlxyXG4gICAgICA8c3Bhbj57cGFyc2VQcmljZSgpfTwvc3Bhbj5cclxuICAgICAge3NldEdlbnJlKCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBFdmVudFByaWNlR2VucmUgfSBmcm9tIFwiLi9FdmVudFByaWNlR2VucmVcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGltZXNcIjogXCJFdmVudFRpbWVzVmVudWVfdGltZXNfXzFCY3RhXCIsXG5cdFwidmVudWVcIjogXCJFdmVudFRpbWVzVmVudWVfdmVudWVfXzFlcDFtXCJcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWN1cmVTZXJ2ZXIgfSBmcm9tIFwiaHR0cDJcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vRXZlbnRUaW1lc1ZlbnVlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRUaW1lc1ZlbnVlOiBSZWFjdC5GQzx7XHJcbiAgc3RhcnRUaW1lOiBzdHJpbmc7XHJcbiAgZW5kVGltZTogc3RyaW5nIHwgbnVsbDtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICB2ZW51ZTogc3RyaW5nIHwgbnVsbDtcclxufT4gPSAoeyBzdGFydFRpbWUsIGVuZFRpbWUsIHNvdXJjZSwgdmVudWUgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BsYXlWZW51ZTogKCkgPT4gSlNYLkVsZW1lbnQgfCBudWxsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHZlbnVlID8gPHNwYW4gY2xhc3NOYW1lPXtjc3MudmVudWV9Pntg4oCiICR7dmVudWV9YH08L3NwYW4+IDogbnVsbDtcclxuICB9O1xyXG4gIGNvbnN0IHBhcnNlWWVscFRpbWVzOiAoKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHllbHBTdGFydE9iamVjdDogRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0VGltZSk7XHJcbiAgICBjb25zdCB5ZWxwRW5kT2JqZWN0OiBEYXRlID0gbmV3IERhdGUoZW5kVGltZSk7XHJcblxyXG4gICAgLy95ZWxwIHN0YXJ0IHRpbWVcclxuICAgIGNvbnN0IHllbHBTdGFydFRpbWU6IHN0cmluZyA9IHllbHBTdGFydE9iamVjdC50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKTtcclxuICAgIGNvbnN0IHN0YXJ0QW1QbTogc3RyaW5nID0geWVscFN0YXJ0VGltZS5zdWJzdHJpbmcoeWVscFN0YXJ0VGltZS5sZW5ndGggLSAyKTtcclxuICAgIGNvbnN0IHN0YXJ0V2l0aG91dFNlY29uZHM6IHN0cmluZyA9IHllbHBTdGFydFRpbWUuc3Vic3RyaW5nKFxyXG4gICAgICAwLFxyXG4gICAgICB5ZWxwU3RhcnRUaW1lLmxlbmd0aCAtIDZcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgeWVscFN0YXJ0Rm9ybWF0dGVkVGltZTogc3RyaW5nID0gYCR7c3RhcnRXaXRob3V0U2Vjb25kc30gJHtzdGFydEFtUG19YDtcclxuXHJcbiAgICAvL3llbHAgc3RhcnQgZGF0ZVxyXG5cclxuICAgIGNvbnN0IHllbHBTdGFydERhdGU6IHN0cmluZyA9IGAke3llbHBTdGFydE9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgIFwiZW4tVVNcIixcclxuICAgICAgeyB3ZWVrZGF5OiBcImxvbmdcIiB9XHJcbiAgICApfSAke3llbHBTdGFydE9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoKX1gO1xyXG5cclxuICAgIC8veWVscCBlbmQgdGltZVxyXG5cclxuICAgIGNvbnN0IHllbHBFbmRUaW1lOiBzdHJpbmcgPSB5ZWxwRW5kT2JqZWN0LnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpO1xyXG4gICAgY29uc3QgZW5kQW1QbTogc3RyaW5nID0geWVscEVuZFRpbWUuc3Vic3RyaW5nKHllbHBFbmRUaW1lLmxlbmd0aCAtIDIpO1xyXG4gICAgY29uc3QgZW5kV2l0aG91dFNlY29uZHM6IHN0cmluZyA9IHllbHBFbmRUaW1lLnN1YnN0cmluZyhcclxuICAgICAgMCxcclxuICAgICAgeWVscEVuZFRpbWUubGVuZ3RoIC0gNlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB5ZWxwRW5kRm9ybWF0dGVkVGltZTogc3RyaW5nID0gYCR7ZW5kV2l0aG91dFNlY29uZHN9ICR7ZW5kQW1QbX1gO1xyXG5cclxuICAgIC8veWVscCBlbmQgRGF0ZVxyXG5cclxuICAgIGNvbnN0IHllbHBFbmREYXRlOiBzdHJpbmcgPSB5ZWxwRW5kT2JqZWN0LnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG5cclxuICAgIHJldHVybiA8cD57YCR7eWVscFN0YXJ0RGF0ZX0gJHt5ZWxwU3RhcnRGb3JtYXR0ZWRUaW1lfWB9PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJzZVRpY2tldE1hc3RlclRpbWU6ICgpID0+IEpTWC5FbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGlja2V0bWFzdGVyU3RhcnRPYmplY3Q6IERhdGUgPSBuZXcgRGF0ZShzdGFydFRpbWUpO1xyXG5cclxuICAgIGNvbnN0IHRpY2tldG1hc3RlclN0YXJ0VGltZTogc3RyaW5nID0gdGlja2V0bWFzdGVyU3RhcnRPYmplY3QudG9Mb2NhbGVUaW1lU3RyaW5nKFxyXG4gICAgICBcImVuLVVTXCJcclxuICAgICk7XHJcbiAgICBjb25zdCBzdGFydEFtUG06IHN0cmluZyA9IHRpY2tldG1hc3RlclN0YXJ0VGltZS5zdWJzdHJpbmcoXHJcbiAgICAgIHRpY2tldG1hc3RlclN0YXJ0VGltZS5sZW5ndGggLSAyXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RhcnRXaXRob3V0U2Vjb25kczogc3RyaW5nID0gdGlja2V0bWFzdGVyU3RhcnRUaW1lLnN1YnN0cmluZyhcclxuICAgICAgMCxcclxuICAgICAgdGlja2V0bWFzdGVyU3RhcnRUaW1lLmxlbmd0aCAtIDZcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdGlja2V0bWFzdGVyU3RhcnRGb3JtYXR0ZWRUaW1lOiBzdHJpbmcgPSBgJHtzdGFydFdpdGhvdXRTZWNvbmRzfSAke3N0YXJ0QW1QbX1gO1xyXG5cclxuICAgIGNvbnN0IHRpY2tldG1hc3RlckRhdGU6IHN0cmluZyA9IGAke3RpY2tldG1hc3RlclN0YXJ0T2JqZWN0LnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgICAgXCJlbi1VU1wiLFxyXG4gICAgICB7IHdlZWtkYXk6IFwibG9uZ1wiIH1cclxuICAgICl9ICR7dGlja2V0bWFzdGVyU3RhcnRPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKCl9YDtcclxuXHJcbiAgICByZXR1cm4gPHA+e2Ake3RpY2tldG1hc3RlckRhdGV9ICR7dGlja2V0bWFzdGVyU3RhcnRGb3JtYXR0ZWRUaW1lfWB9PC9wPjtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZXRlcm1pbmVTb3VyY2U6ICgpID0+IEpTWC5FbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNvdXJjZSA9PT0gXCJ5ZWxwXCIgPyBwYXJzZVllbHBUaW1lcygpIDogcGFyc2VUaWNrZXRNYXN0ZXJUaW1lKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudGltZXN9PlxyXG4gICAgICB7ZGV0ZXJtaW5lU291cmNlKCl9XHJcbiAgICAgIHtkaXNwbGF5VmVudWUoKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IEV2ZW50VGltZXNWZW51ZSB9IGZyb20gXCIuL0V2ZW50VGltZXNWZW51ZVwiO1xyXG4iLCJleHBvcnQgeyBFdmVudFRpbWVzVmVudWUgfSBmcm9tIFwiLi9FdmVudFRpbWVzVmVudWVcIjtcclxuZXhwb3J0IHsgRXZlbnRQcmljZUdlbnJlIH0gZnJvbSBcIi4vRXZlbnRQcmljZUdlbnJlXCI7XHJcbmV4cG9ydCB7IEV2ZW50RGVzY3JpcHRpb24gfSBmcm9tIFwiLi9FdmVudERlc2NyaXB0aW9uXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImltZ0JhY2tncm91bmRcIjogXCJJbWFnZUJhY2tncm91bmRfaW1nQmFja2dyb3VuZF9fWWFaSHdcIixcblx0XCJleHRlbmRlZFwiOiBcIkltYWdlQmFja2dyb3VuZF9leHRlbmRlZF9fUzd3QWVcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0ltYWdlQmFja2dyb3VuZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlQmFja2dyb3VuZDogUmVhY3QuRkM8e1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBleHRlbmRlZDogYm9vbGVhbjtcclxuICBoYW5kbGVSZXRyYWN0OiAoKSA9PiB2b2lkO1xyXG59PiA9ICh7IGV4dGVuZGVkLCBoYW5kbGVSZXRyYWN0LCB0eXBlLCBzb3VyY2UsIGNoaWxkcmVuIH0pID0+IHtcclxuICAvLyBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPHsgbG9hZGVkOiBib29sZWFuIH0+KHtcclxuICAvLyAgIGxvYWRlZDogZmFsc2UsXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIGNvbnN0IGRldGVybWluZUltYWdlUmF0aW86ICgpID0+IHsgd2lkdGg6IHN0cmluZzsgaGVpZ2h0OiBzdHJpbmcgfSA9ICgpID0+IHtcclxuICAvLyAgIHN3aXRjaCAodHlwZSkge1xyXG4gIC8vICAgICBjYXNlIFwiZXZlbnRcIjpcclxuICAvLyAgICAgICByZXR1cm4gc291cmNlID09PSBcInllbHBcIlxyXG4gIC8vICAgICAgICAgPyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIiB9XHJcbiAgLy8gICAgICAgICA6IHsgd2lkdGg6IFwiYXV0b1wiLCBoZWlnaHQ6IFwiMTAwJVwiIH07XHJcbiAgLy8gICAgIGNhc2UgXCJwbGFjZVwiOlxyXG4gIC8vICAgICAgIHJldHVybiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIiB9O1xyXG5cclxuICAvLyAgICAgZGVmYXVsdDpcclxuICAvLyAgICAgICByZXR1cm4geyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCIgfTtcclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBkZXRlcm1pbmVJbWFnZVJhdGlvOiAoKSA9PiBzdHJpbmcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc291cmNlID09PSBcInllbHBcIiA/IGNzcy5ieVdpZHRoIDogY3NzLmJ5V2lkdGg7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtjc3MuaW1nQmFja2dyb3VuZH0gJHtleHRlbmRlZCA/IGNzcy5leHRlbmRlZCA6IG51bGx9YH1cclxuICAgICAgb25DbGljaz17aGFuZGxlUmV0cmFjdH1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgSW1hZ2VCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vSW1hZ2VCYWNrZ3JvdW5kXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpbmtcIjogXCJQYXJ0TGlua19saW5rX18zTWxiWlwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUGFydExpbmsubW9kdWxlLnNjc3NcIjtcclxuZXhwb3J0IGNvbnN0IFBhcnRMaW5rOiBSZWFjdC5GQzx7IHVybDogc3RyaW5nIH0+ID0gKHsgdXJsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17dXJsfSBjbGFzc05hbWU9e2Nzcy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIGZpbGw9XCIjMDAwMDAwXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDUwIDUwXCJcclxuICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aCBkPVwiTSAzMy40MDYyNSAwIEMgMzIuODU1NDY5IDAuMDUwNzgxMyAzMi40NDkyMTkgMC41NDI5NjkgMzIuNSAxLjA5Mzc1IEMgMzIuNTUwNzgxIDEuNjQ0NTMxIDMzLjA0Mjk2OSAyLjA1MDc4MSAzMy41OTM3NSAyIEwgNDYuNTYyNSAyIEwgMjUuNjg3NSAyMi45MDYyNSBDIDI1LjM5MDYyNSAyMy4xNDg0MzggMjUuMjUzOTA2IDIzLjUzNTE1NiAyNS4zMzk4NDQgMjMuOTEwMTU2IEMgMjUuNDI1NzgxIDI0LjI4MTI1IDI1LjcxODc1IDI0LjU3NDIxOSAyNi4wODk4NDQgMjQuNjYwMTU2IEMgMjYuNDY0ODQ0IDI0Ljc0NjA5NCAyNi44NTE1NjMgMjQuNjA5Mzc1IDI3LjA5Mzc1IDI0LjMxMjUgTCA0OCAzLjQzNzUgTCA0OCAxNi40MDYyNSBDIDQ3Ljk5NjA5NCAxNi43NjU2MjUgNDguMTgzNTk0IDE3LjEwMTU2MyA0OC40OTYwOTQgMTcuMjg1MTU2IEMgNDguODA4NTk0IDE3LjQ2NDg0NCA0OS4xOTE0MDYgMTcuNDY0ODQ0IDQ5LjUwMzkwNiAxNy4yODUxNTYgQyA0OS44MTY0MDYgMTcuMTAxNTYzIDUwLjAwMzkwNiAxNi43NjU2MjUgNTAgMTYuNDA2MjUgTCA1MCAwIEwgMzMuNTkzNzUgMCBDIDMzLjU2MjUgMCAzMy41MzEyNSAwIDMzLjUgMCBDIDMzLjQ2ODc1IDAgMzMuNDM3NSAwIDMzLjQwNjI1IDAgWiBNIDIgMTAgQyAxLjQ3NjU2MyAxMCAwLjk0MTQwNiAxMC4xODM1OTQgMC41NjI1IDEwLjU2MjUgQyAwLjE4MzU5NCAxMC45NDE0MDYgMCAxMS40NzY1NjMgMCAxMiBMIDAgNDggQyAwIDQ4LjUyMzQzOCAwLjE4MzU5NCA0OS4wNTg1OTQgMC41NjI1IDQ5LjQzNzUgQyAwLjk0MTQwNiA0OS44MTY0MDYgMS40NzY1NjMgNTAgMiA1MCBMIDM4IDUwIEMgMzguNTIzNDM4IDUwIDM5LjA1ODU5NCA0OS44MTY0MDYgMzkuNDM3NSA0OS40Mzc1IEMgMzkuODE2NDA2IDQ5LjA1ODU5NCA0MCA0OC41MjM0MzggNDAgNDggTCA0MCAxOCBDIDQwLjAwMzkwNiAxNy42NDA2MjUgMzkuODE2NDA2IDE3LjMwNDY4OCAzOS41MDM5MDYgMTcuMTIxMDk0IEMgMzkuMTkxNDA2IDE2Ljk0MTQwNiAzOC44MDg1OTQgMTYuOTQxNDA2IDM4LjQ5NjA5NCAxNy4xMjEwOTQgQyAzOC4xODM1OTQgMTcuMzA0Njg4IDM3Ljk5NjA5NCAxNy42NDA2MjUgMzggMTggTCAzOCA0OCBMIDIgNDggTCAyIDEyIEwgMzIgMTIgQyAzMi4zNTkzNzUgMTIuMDAzOTA2IDMyLjY5NTMxMyAxMS44MTY0MDYgMzIuODc4OTA2IDExLjUwMzkwNiBDIDMzLjA1ODU5NCAxMS4xOTE0MDYgMzMuMDU4NTk0IDEwLjgwODU5NCAzMi44Nzg5MDYgMTAuNDk2MDk0IEMgMzIuNjk1MzEzIDEwLjE4MzU5NCAzMi4zNTkzNzUgOS45OTYwOTQgMzIgMTAgWlwiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFBhcnRMaW5rIH0gZnJvbSBcIi4vUGFydExpbmtcIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9jYXRpb25cIjogXCJMb2NhdGlvbl9sb2NhdGlvbl9fck5xSUNcIixcblx0XCJhZGRyZXNzXCI6IFwiTG9jYXRpb25fYWRkcmVzc19fMWtOTmdcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0xvY2F0aW9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYXRpb246IFJlYWN0LkZDPHsgc3RyZWV0OiBzdHJpbmc7IGNpdHk6IHN0cmluZyB9PiA9ICh7XHJcbiAgc3RyZWV0LFxyXG4gIGNpdHksXHJcbn0pID0+IHtcclxuICBpZiAoIXN0cmVldCAmJiAhY2l0eSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPXtjc3MubG9jYXRpb259PlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMiAyQzguMTMgMiA1IDUuMTMgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg3LTMuMTMtNy03LTd6bTAgOS41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXpcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtjc3MuYWRkcmVzc30+XHJcbiAgICAgICAge3N0cmVldH1cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7Y2l0eX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4vTG9jYXRpb25cIjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGhvbmVcIjogXCJQaG9uZV9waG9uZV9fMzlJTHNcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1Bob25lLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGhvbmU6IFJlYWN0LkZDPHsgcGhvbmU6IHN0cmluZyB9PiA9ICh7IHBob25lIH0pID0+IHtcclxuICBpZiAoIXBob25lKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17YHRlbDoke3Bob25lfWB9IGNsYXNzTmFtZT17Y3NzLnBob25lfT5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMjAuMDEgMTUuMzhjLTEuMjMgMC0yLjQyLS4yLTMuNTMtLjU2LS4zNS0uMTItLjc0LS4wMy0xLjAxLjI0bC0xLjU3IDEuOTdjLTIuODMtMS4zNS01LjQ4LTMuOS02Ljg5LTYuODNsMS45NS0xLjY2Yy4yNy0uMjguMzUtLjY3LjI0LTEuMDItLjM3LTEuMTEtLjU2LTIuMy0uNTYtMy41MyAwLS41NC0uNDUtLjk5LS45OS0uOTlINC4xOUMzLjY1IDMgMyAzLjI0IDMgMy45OSAzIDEzLjI4IDEwLjczIDIxIDIwLjAxIDIxYy43MSAwIC45OS0uNjMuOTktMS4xOHYtMy40NWMwLS41NC0uNDUtLjk5LS45OS0uOTl6XCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgIDxzcGFuPntwaG9uZX08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi9QaG9uZVwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwbGFjZVByaWNlXCI6IFwiUHJpY2VBbmRUeXBlX3BsYWNlUHJpY2VfXzIxU2pOXCIsXG5cdFwibGlnaHRcIjogXCJQcmljZUFuZFR5cGVfbGlnaHRfXzJrZ09iXCIsXG5cdFwidHlwZVwiOiBcIlByaWNlQW5kVHlwZV90eXBlX18xZnFCalwiLFxuXHRcImNpdHlcIjogXCJQcmljZUFuZFR5cGVfY2l0eV9fM0ZNWmxcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1ByaWNlQW5kVHlwZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNlQW5kVHlwZTogUmVhY3QuRkM8e1xyXG4gIHByaWNlOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICBjaXR5OiBzdHJpbmc7XHJcbiAgc3RhdGU6IHN0cmluZztcclxufT4gPSAoeyBwcmljZSwgdHlwZSwgY2l0eSwgc3RhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGluc2VydENpdHk6IChjaXR5OiBzdHJpbmcpID0+IEpTWC5FbGVtZW50IHwgbnVsbCA9IChjaXR5KSA9PiB7XHJcbiAgICByZXR1cm4gY2l0eSA/IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3MuY2l0eX0+e2DigKIgJHtjaXR5fSwgJHtzdGF0ZX1gfTwvc3Bhbj5cclxuICAgICkgOiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpbmd1bGFyVHlwZTogKCkgPT4gSlNYLkVsZW1lbnQgfCBudWxsID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0eXBlIHx8IHR5cGUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleExhc3RMZXR0ZXI6IG51bWJlciA9IHR5cGUubGVuZ3RoIC0gMTtcclxuICAgICAgc3dpdGNoICh0eXBlW2luZGV4TGFzdExldHRlcl0pIHtcclxuICAgICAgICBjYXNlIFwic1wiOlxyXG4gICAgICAgICAgcmV0dXJuIHR5cGUuaW5kZXhPZihcImllc1wiKSAhPT0gLTEgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MudHlwZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBwcmljZSA/IFwiMnZ3XCIgOiBudWxsIH19XHJcbiAgICAgICAgICAgID57YCR7dHlwZS5zdWJzdHJpbmcoMCwgdHlwZS5pbmRleE9mKFwiaWVzXCIpKX15YH08L3NwYW4+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLnR5cGV9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogcHJpY2UgPyBcIjJ2d1wiIDogbnVsbCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3R5cGUuc3Vic3RyaW5nKDAsIGluZGV4TGFzdExldHRlcil9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MudHlwZX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBwcmljZSA/IFwiMnZ3XCIgOiBudWxsIH19XHJcbiAgICAgICAgICAgID57YCR7dHlwZX1gfTwvc3Bhbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBwcmljZSA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucGxhY2VQcmljZX0+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzLmxpZ2h0fT57cHJpY2VbMF19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3ByaWNlLmxlbmd0aCA+PSAyID8gY3NzLmxpZ2h0IDogbnVsbH0+e3ByaWNlWzBdfTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwcmljZS5sZW5ndGggPj0gMyA/IGNzcy5saWdodCA6IG51bGx9PntwcmljZVswXX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17cHJpY2UubGVuZ3RoID09PSA0ID8gY3NzLmxpZ2h0IDogbnVsbH0+e3ByaWNlWzBdfTwvc3Bhbj5cclxuICAgICAge3Npbmd1bGFyVHlwZSgpfVxyXG4gICAgICB7aW5zZXJ0Q2l0eShjaXR5KX1cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBsYWNlUHJpY2V9PlxyXG4gICAgICB7c2luZ3VsYXJUeXBlKCl9XHJcblxyXG4gICAgICB7aW5zZXJ0Q2l0eShjaXR5KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCB7IFByaWNlQW5kVHlwZSB9IGZyb20gXCIuL1ByaWNlQW5kVHlwZVwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZXZpZXdXcmFwcGVyXCI6IFwiUmV2aWV3c19yZXZpZXdXcmFwcGVyX18zTjV3ZVwiLFxuXHRcInN0YXJXcmFwcGVyXCI6IFwiUmV2aWV3c19zdGFyV3JhcHBlcl9fMVJsU3lcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1Jldmlld3MubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXZpZXdzOiBSZWFjdC5GQzx7IHJldmlld0NvdW50OiBudW1iZXI7IHJhdGluZzogbnVtYmVyIH0+ID0gKHtcclxuICByZXZpZXdDb3VudCxcclxuICByYXRpbmcsXHJcbn0pID0+IHtcclxuICBpZiAocmV2aWV3Q291bnQgJiYgcmF0aW5nKSB7XHJcbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRTdGFycztcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBFbXB0eVN0YXI6IChpZDogbnVtYmVyKSA9PiBKU1guRWxlbWVudCA9IChpZCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNjMuMDggMjUxLjUzXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IFwiIzcwNzA3MFwiIH19XHJcbiAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgIDx0aXRsZT5Bc3NldCAxMDwvdGl0bGU+XHJcbiAgICAgICAgICA8ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiVHJhY2luZ1wiPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQxLjUsOC42OWwzMS4yNyw2My4zNmExMS4xMSwxMS4xMSwwLDAsMCw4LjM2LDYuMDhsNjkuOTMsMTAuMTZhMTEuMTEsMTEuMTEsMCwwLDEsNi4xNSwxOC45NGwtNTAuNiw0OS4zMmExMS4wOSwxMS4wOSwwLDAsMC0zLjE5LDkuODNMMjE1LjM2LDIzNmExMS4xLDExLjEsMCwwLDEtMTYuMTEsMTEuN2wtNjIuNTQtMzIuODhhMTEuMTIsMTEuMTIsMCwwLDAtMTAuMzQsMEw2My44MywyNDcuNzNBMTEuMTEsMTEuMTEsMCwwLDEsNDcuNzEsMjM2bDExLjk1LTY5LjY1YTExLjEsMTEuMSwwLDAsMC0zLjItOS44M0w1Ljg3LDEwNy4yM0ExMS4xLDExLjEsMCwwLDEsMTIsODguMjlMODIsNzguMTNhMTEuMTMsMTEuMTMsMCwwLDAsOC4zNi02LjA4TDEyMS41OCw4LjY5QTExLjExLDExLjExLDAsMCwxLDE0MS41LDguNjlaXCIgLz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBGdWxsU3RhcjogKGlkOiBudW1iZXIpID0+IEpTWC5FbGVtZW50ID0gKGlkKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1OC4wOCAyNDYuNTNcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmlsbDogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgIDx0aXRsZT5Bc3NldCA3PC90aXRsZT5cclxuICAgICAgICAgIDxnIGlkPVwiTGF5ZXJfMlwiIGRhdGEtbmFtZT1cIkxheWVyIDJcIj5cclxuICAgICAgICAgICAgPGcgaWQ9XCJUcmFjaW5nXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMzksNi4xOWwzMS4yNyw2My4zNmExMS4xMSwxMS4xMSwwLDAsMCw4LjM2LDYuMDhsNjkuOTMsMTAuMTZhMTEuMTEsMTEuMTEsMCwwLDEsNi4xNSwxOC45NGwtNTAuNiw0OS4zMmExMS4wOSwxMS4wOSwwLDAsMC0zLjE5LDkuODNsMTEuOTQsNjkuNjVhMTEuMSwxMS4xLDAsMCwxLTE2LjExLDExLjdsLTYyLjU0LTMyLjg4YTExLjEyLDExLjEyLDAsMCwwLTEwLjM0LDBMNjEuMzMsMjQ1LjIzYTExLjExLDExLjExLDAsMCwxLTE2LjEyLTExLjdsMTEuOTUtNjkuNjVhMTEuMSwxMS4xLDAsMCwwLTMuMi05LjgzTDMuMzcsMTA0LjczQTExLjEsMTEuMSwwLDAsMSw5LjUyLDg1Ljc5TDc5LjQ1LDc1LjYzYTExLjEzLDExLjEzLDAsMCwwLDguMzYtNi4wOEwxMTkuMDgsNi4xOUExMS4xMSwxMS4xMSwwLDAsMSwxMzksNi4xOVpcIiAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IEhhbGZTdGFyOiAoaWQ6IG51bWJlcikgPT4gSlNYLkVsZW1lbnQgPSAoaWQpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjYzLjA3IDI1MS41NFwiXHJcbiAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkZWZzPjwvZGVmcz5cclxuICAgICAgICAgIDx0aXRsZT5Bc3NldCAxMTwvdGl0bGU+XHJcbiAgICAgICAgICA8ZyBpZD1cIkxheWVyXzJcIiBkYXRhLW5hbWU9XCJMYXllciAyXCI+XHJcbiAgICAgICAgICAgIDxnIGlkPVwiVHJhY2luZ1wiPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBcIiM3MDcwNzBcIiB9fVxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMDYuNjEsMTU2LjU2YTExLjExLDExLjExLDAsMCwwLTMuMTksOS44M0wyMTUuMzYsMjM2YTExLjEsMTEuMSwwLDAsMS0xNi4xMSwxMS43MWwtNjIuNTQtMzIuODlhMTEuMDcsMTEuMDcsMCwwLDAtMTAuMzQsMEw2My44MywyNDcuNzRBMTEuMSwxMS4xLDAsMCwxLDQ3LjcyLDIzNmwxMS45NC02OS42NGExMS4xMSwxMS4xMSwwLDAsMC0zLjE5LTkuODNMNS44NywxMDcuMjNBMTEuMSwxMS4xLDAsMCwxLDEyLDg4LjI5TDgyLDc4LjEzYTExLjA4LDExLjA4LDAsMCwwLDguMzYtNi4wN0wxMjEuNTgsOC42OWExMS4xMSwxMS4xMSwwLDAsMSwxOS45MiwwbDMxLjI3LDYzLjM3YTExLjA4LDExLjA4LDAsMCwwLDguMzYsNi4wN2w2OS45MywxMC4xNmExMS4xLDExLjEsMCwwLDEsNi4xNSwxOC45NFpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkPVwiTTEzMiwyLjUxVjIxMy41OGExMS4xOSwxMS4xOSwwLDAsMC01LjY3LDEuMjdMNjMuODMsMjQ3Ljc0QTExLjEsMTEuMSwwLDAsMSw0Ny43MiwyMzZsMTEuOTQtNjkuNjRhMTEuMTEsMTEuMTEsMCwwLDAtMy4xOS05LjgzTDUuODcsMTA3LjIzQTExLjEsMTEuMSwwLDAsMSwxMiw4OC4yOUw4Miw3OC4xM2ExMS4wOCwxMS4wOCwwLDAsMCw4LjM2LTYuMDdMMTIxLjU4LDguNjlBMTEsMTEsMCwwLDEsMTMyLDIuNTFaXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFN0YXJzOiAoKSA9PiBKU1guRWxlbWVudFtdID0gKCkgPT4ge1xyXG4gICAgICBsZXQgcmF0aW5nSW50OiBudW1iZXIgPSBNYXRoLmZsb29yKHJhdGluZyk7XHJcbiAgICAgIGxldCByZW1haW5kZXI6IG51bWJlciA9IHJhdGluZyAtIHJhdGluZ0ludDtcclxuICAgICAgY29uc3Qgc3RhclR5cGVzOiBKU1guRWxlbWVudFtdID0gW1xyXG4gICAgICAgIEVtcHR5U3RhcigwKSxcclxuICAgICAgICBFbXB0eVN0YXIoMSksXHJcbiAgICAgICAgRW1wdHlTdGFyKDIpLFxyXG4gICAgICAgIEVtcHR5U3RhcigzKSxcclxuICAgICAgICBFbXB0eVN0YXIoNCksXHJcbiAgICAgIF07XHJcblxyXG4gICAgICBjb25zdCBuZXdTdGFyczogSlNYLkVsZW1lbnRbXSA9IHN0YXJUeXBlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgcmF0aW5nSW50KSB7XHJcbiAgICAgICAgICByZXR1cm4gRnVsbFN0YXIoaW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVtYWluZGVyID4gMCAmJiBpbmRleCA8IHJhdGluZ1xyXG4gICAgICAgICAgICA/IEhhbGZTdGFyKGluZGV4KVxyXG4gICAgICAgICAgICA6IEVtcHR5U3RhcihpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdTdGFycztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yZXZpZXdXcmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnN0YXJXcmFwcGVyfT57c2V0U3RhcnMoKS5tYXAoKHN0YXIpID0+IHN0YXIpfTwvZGl2PlxyXG4gICAgICAgIDxzcGFuPntgJHtyZXZpZXdDb3VudH0gUmV2aWV3c2B9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IHsgUHJpY2VBbmRUeXBlIH0gZnJvbSBcIi4vUHJpY2VBbmRUeXBlXCI7XHJcbmV4cG9ydCB7IFJldmlld3MgfSBmcm9tIFwiLi9SZXZpZXdzL1Jldmlld3NcIjtcclxuZXhwb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi9QaG9uZVwiO1xyXG5leHBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCIuL0xvY2F0aW9uXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlc3VsdENhcmRcIjogXCJSZXN1bHRDYXJkX3Jlc3VsdENhcmRfXzFrczVKXCIsXG5cdFwiZXh0ZW5kZWRcIjogXCJSZXN1bHRDYXJkX2V4dGVuZGVkX19JN3pfQlwiLFxuXHRcImxvYWRlZFwiOiBcIlJlc3VsdENhcmRfbG9hZGVkX18zZWtNbFwiLFxuXHRcImxvYWRpbmdcIjogXCJSZXN1bHRDYXJkX2xvYWRpbmdfX1RxTHVmXCIsXG5cdFwiaW5mb0JhclwiOiBcIlJlc3VsdENhcmRfaW5mb0Jhcl9fMnBQSnVcIixcblx0XCJ0aXRsZVwiOiBcIlJlc3VsdENhcmRfdGl0bGVfXzJtU0d6XCIsXG5cdFwibG9hZGluZ0JhclwiOiBcIlJlc3VsdENhcmRfbG9hZGluZ0Jhcl9fMnR0eHhcIixcblx0XCJkZXRhaWxzV3JhcHBlclwiOiBcIlJlc3VsdENhcmRfZGV0YWlsc1dyYXBwZXJfXzE4SlJqXCIsXG5cdFwiYWRkQnV0dG9uXCI6IFwiUmVzdWx0Q2FyZF9hZGRCdXR0b25fXzFwMDg0XCIsXG5cdFwicmVtb3ZlXCI6IFwiUmVzdWx0Q2FyZF9yZW1vdmVfX2E5ajBHXCIsXG5cdFwibG9hZGluZ0FkZFwiOiBcIlJlc3VsdENhcmRfbG9hZGluZ0FkZF9fMzNSWExcIlxufTtcbiIsImltcG9ydCB7IFByaWNlQW5kVHlwZSwgUmV2aWV3cywgUGhvbmUsIExvY2F0aW9uIH0gZnJvbSBcIi4vUGFydHMvUGxhY2VzSW5mb1wiO1xyXG5pbXBvcnQge1xyXG4gIEV2ZW50VGltZXNWZW51ZSxcclxuICBFdmVudFByaWNlR2VucmUsXHJcbiAgRXZlbnREZXNjcmlwdGlvbixcclxufSBmcm9tIFwiLi9QYXJ0cy9FdmVudHNJbmZvXCI7XHJcbmltcG9ydCB7IFBhcnRMaW5rIH0gZnJvbSBcIi4vUGFydHMvUGFydExpbmtcIjtcclxuaW1wb3J0IHsgSW1hZ2VCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vUGFydHMvSW1hZ2VCYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFBhcnRzUHJvdmlkZXIsXHJcbiAgdXNlUGFydHNEaXNwYXRjaCxcclxuICB1c2VQYXJ0c1N0YXRlLFxyXG59IGZyb20gXCIuLi8uLi8uLi9zdGF0ZS9EYXRlUGFydHNDb250ZXh0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUmVzdWx0Q2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdENhcmQ6IFJlYWN0LkZDPHtcclxuICBpdGVtPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICByZXN1bHRzTG9hZGluZz86IGJvb2xlYW47XHJcbn0+ID0gKHsgaXRlbSwgcmVzdWx0c0xvYWRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8e1xyXG4gICAgYWRkZWQ6IGJvb2xlYW47XHJcbiAgICBtb3JlSW5mbzogYm9vbGVhbjtcclxuICAgIGltYWdlTG9hZGVkOiBib29sZWFuO1xyXG4gIH0+KHsgYWRkZWQ6IGZhbHNlLCBtb3JlSW5mbzogZmFsc2UsIGltYWdlTG9hZGVkOiBmYWxzZSB9KTtcclxuXHJcbiAgY29uc3QgR2xvYmFsUGFydHMgPSB1c2VQYXJ0c1N0YXRlKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXRlbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdsb2JhbFBhcnRzLnBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKEdsb2JhbFBhcnRzLnBhcnRzW2ldLmlkID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBhZGRlZDogdHJ1ZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW0dsb2JhbFBhcnRzXSk7XHJcblxyXG4gIGNvbnN0IGRldGVybWluZUltYWdlQmFja2dyb3VuZFNvdXJjZTogKCkgPT4gc3RyaW5nID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcclxuICAgICAgY2FzZSBcInBsYWNlXCI6XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc291cmNlID09PSBcInllbHBcIiA/IGl0ZW0uaW1hZ2VfdXJsIDogbnVsbDtcclxuICAgICAgY2FzZSBcImV2ZW50XCI6XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc291cmNlID09PSBcInllbHBcIiA/IGl0ZW0uaW1hZ2VfdXJsIDogaXRlbS5pbWFnZXNbMF0udXJsO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJldHJhY3Q6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUubW9yZUluZm9cclxuICAgICAgPyBzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBtb3JlSW5mbzogZmFsc2UgfSkpXHJcbiAgICAgIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb3JlRGV0YWlsczogKHR5cGU6IHN0cmluZykgPT4gSlNYLkVsZW1lbnQgfCBudWxsID0gKHR5cGUpID0+IHtcclxuICAgIGlmICghc3RhdGUubW9yZUluZm8pIHJldHVybiBudWxsO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJwbGFjZVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmRldGFpbHNXcmFwcGVyfT5cclxuICAgICAgICAgICAgPFBob25lIHBob25lPXtpdGVtLnBob25lfT48L1Bob25lPlxyXG4gICAgICAgICAgICA8TG9jYXRpb25cclxuICAgICAgICAgICAgICBzdHJlZXQ9e2l0ZW0ubG9jYXRpb24uZGlzcGxheV9hZGRyZXNzWzBdfVxyXG4gICAgICAgICAgICAgIGNpdHk9e2l0ZW0ubG9jYXRpb24uZGlzcGxheV9hZGRyZXNzWzFdfVxyXG4gICAgICAgICAgICA+PC9Mb2NhdGlvbj5cclxuICAgICAgICAgICAgPFBhcnRMaW5rIHVybD17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiZXZlbnRcIjpcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5kZXRhaWxzV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxFdmVudERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufT48L0V2ZW50RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxQYXJ0TGlua1xyXG4gICAgICAgICAgICAgIHVybD17aXRlbS5zb3VyY2UgPT09IFwieWVscFwiID8gaXRlbS5ldmVudF9zaXRlX3VybCA6IGl0ZW0udXJsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Nzcy5kZXRhaWxzV3JhcHBlcn0+PC9kaXY+O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldENhcmREZXRhaWxzOiAoKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJwbGFjZVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Nzcy5pbmZvQmFyfSAke1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubW9yZUluZm8gPyBjc3MuZXh0ZW5kZWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzcy50aXRsZX0+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPFJldmlld3NcclxuICAgICAgICAgICAgICAgIHJldmlld0NvdW50PXtpdGVtLnJldmlld19jb3VudH1cclxuICAgICAgICAgICAgICAgIHJhdGluZz17aXRlbS5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgPjwvUmV2aWV3cz5cclxuICAgICAgICAgICAgICA8UHJpY2VBbmRUeXBlXHJcbiAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgIGNpdHk9e2l0ZW0ubG9jYXRpb24uY2l0eX1cclxuICAgICAgICAgICAgICAgIHN0YXRlPXtpdGVtLmxvY2F0aW9uLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW0uY2F0ZWdvcmllcyAmJiBpdGVtLmNhdGVnb3JpZXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gaXRlbS5jYXRlZ29yaWVzWzBdLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPjwvUHJpY2VBbmRUeXBlPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc3RhcnNXcmFwcGVyfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHttb3JlRGV0YWlscyhcInBsYWNlXCIpfVxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiZXZlbnRcIjpcclxuICAgICAgICBjb25zdCBkZXRlcm1pbmVQcmljZTogKCkgPT5cclxuICAgICAgICAgIHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfVxyXG4gICAgICAgICAgfCBudWxsXHJcbiAgICAgICAgICB8IHN0cmluZyA9ICgpID0+IHtcclxuICAgICAgICAgIHN3aXRjaCAoaXRlbS5zb3VyY2UpIHtcclxuICAgICAgICAgICAgY2FzZSBcInllbHBcIjpcclxuICAgICAgICAgICAgICBpZiAoIWl0ZW0uY29zdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY29zdDtcclxuICAgICAgICAgICAgY2FzZSBcInRpY2tldG1hc3RlclwiOlxyXG4gICAgICAgICAgICAgIGlmICghaXRlbS5wcmljZVJhbmdlcykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJpY2VSYW5nZXNbMF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZGV0ZXJtaW5lVmVudWU6ICgpID0+IHN0cmluZyB8IG51bGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGl0ZW0uc291cmNlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ5ZWxwXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuICFpdGVtLmJ1c2luZXNlc3NfaWQgfHwgaXRlbS5idXNpbmVzc19pZCA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICA6IGl0ZW0uYnVzaW5lc3NfaWQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aWNrZXRtYXN0ZXJcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5fZW1iZWRkZWQudmVudWVzWzBdLm5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdGlja2V0bWFzdGVyQ2xhc3NpZmljYXRpb246ICgpID0+IGFueSB8IG51bGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5jbGFzc2lmaWNhdGlvbnMgPyBpdGVtLmNsYXNzaWZpY2F0aW9ucyA6IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLmluZm9CYXJ9ICR7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb3JlSW5mbyA/IGNzcy5leHRlbmRlZCA6IG51bGxcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzLnRpdGxlfT57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8RXZlbnRUaW1lc1ZlbnVlXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU9e1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLnNvdXJjZSA9PT0gXCJ5ZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGl0ZW0udGltZV9zdGFydFxyXG4gICAgICAgICAgICAgICAgICAgIDogYCR7aXRlbS5kYXRlcy5zdGFydC5sb2NhbERhdGV9VCR7aXRlbS5kYXRlcy5zdGFydC5sb2NhbFRpbWV9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW5kVGltZT17aXRlbS5zb3VyY2UgPT09IFwieWVscFwiID8gaXRlbS50aW1lX2VuZCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uc291cmNlfVxyXG4gICAgICAgICAgICAgICAgdmVudWU9e2RldGVybWluZVZlbnVlKCl9XHJcbiAgICAgICAgICAgICAgPjwvRXZlbnRUaW1lc1ZlbnVlPlxyXG4gICAgICAgICAgICAgIDxFdmVudFByaWNlR2VucmVcclxuICAgICAgICAgICAgICAgIHZlbnVlPXtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5zb3VyY2UgPT09IFwieWVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmJ1c2luZXNzX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgOiBpdGVtLl9lbWJlZGRlZC52ZW51ZXNbMF0ubmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJpY2U9e2RldGVybWluZVByaWNlKCl9XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uc291cmNlfVxyXG4gICAgICAgICAgICAgICAgZ2VucmU9e1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLnNvdXJjZSA9PT0gXCJ5ZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICA6IHRpY2tldG1hc3RlckNsYXNzaWZpY2F0aW9uKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+PC9FdmVudFByaWNlR2VucmU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bW9yZURldGFpbHMoXCJldmVudFwiKX1cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkaXNwYXRjaDogUmVhY3QuRGlzcGF0Y2g8e1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogeyBpZD86IHN0cmluZzsgcGFydD86IHsgW2tleTogc3RyaW5nXTogYW55IH0gfTtcclxuICB9PiA9IHVzZVBhcnRzRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFydDogKCkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgIGlmIChzdGF0ZS5hZGRlZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIGFkZGVkOiBmYWxzZSB9KSksXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlJFTU9WRV9QQVJUXCIsIHBheWxvYWQ6IHsgaWQ6IGl0ZW0uaWQgfSB9KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIEdsb2JhbFBhcnRzLnBhcnRzLmxlbmd0aCA8IDdcclxuICAgICAgICA/IChzZXRTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBhZGRlZDogdHJ1ZSB9KSksXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQUREX1BBUlRcIixcclxuICAgICAgICAgICAgcGF5bG9hZDogeyBwYXJ0OiB7IC4uLml0ZW0sIGdyaWRJbmRleDogbnVsbCB9IH0sXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdHNMb2FkaW5nID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yZXN1bHRDYXJkfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiM5OTk5OTlcIiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Nzcy5hZGRCdXR0b259ICR7Y3NzLmxvYWRpbmdBZGR9YH0+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW5mb0Jhcn0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubG9hZGluZ0Jhcn0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5sb2FkaW5nQmFyfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxvYWRpbmdCYXJ9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y3NzLnJlc3VsdENhcmR9ICR7c3RhdGUubW9yZUluZm8gPyBjc3MuZXh0ZW5kZWQgOiBudWxsfSAke1xyXG4gICAgICAgIHN0YXRlLmltYWdlTG9hZGVkID8gY3NzLmxvYWRlZCA6IGNzcy5sb2FkaW5nXHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICBzdGF0ZS5tb3JlSW5mb1xyXG4gICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICA6IHNldFN0YXRlKChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUsIG1vcmVJbmZvOiB0cnVlIH0pKVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZUJhY2tncm91bmRcclxuICAgICAgICBleHRlbmRlZD17c3RhdGUubW9yZUluZm99XHJcbiAgICAgICAgaGFuZGxlUmV0cmFjdD17aGFuZGxlUmV0cmFjdH1cclxuICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XHJcbiAgICAgICAgc291cmNlPXtpdGVtLnNvdXJjZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17ZGV0ZXJtaW5lSW1hZ2VCYWNrZ3JvdW5kU291cmNlKCl9XHJcbiAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaW1hZ2VMb2FkZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9JbWFnZUJhY2tncm91bmQ+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjc3MuYWRkQnV0dG9ufSAke3N0YXRlLmFkZGVkID8gY3NzLnJlbW92ZSA6IG51bGx9YH1cclxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSwgaGFuZGxlUGFydCgpKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzdGF0ZS5hZGRlZCA/IFwiUmVtb3ZlIGZyb20gUGFydHMgLVwiIDogXCJBZGQgdG8gUGFydHMgK1wifVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge3NldENhcmREZXRhaWxzKCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBSZXN1bHRDYXJkIH0gZnJvbSBcIi4vUmVzdWx0Q2FyZFwiO1xyXG4iLCJleHBvcnQgeyBSZXN1bHRDYXJkIH0gZnJvbSBcIi4vUmVzdWx0Q2FyZFwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkZXJcIjogXCJTZWtuZExvYWRlcl9sb2FkZXJfXzJQMTVDXCIsXG5cdFwic2VrbmRIYW5kXCI6IFwiU2VrbmRMb2FkZXJfc2VrbmRIYW5kX18xMUFtM1wiLFxuXHRcIlRpa1Rva1wiOiBcIlNla25kTG9hZGVyX1Rpa1Rva19fM0x1eVdcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL1Nla25kTG9hZGVyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VrbmRMb2FkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxvYWRlcn0+XHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjI4Ljk4IDQ5LjE0XCI+XHJcbiAgICAgICAgPHRpdGxlPkFsdExvZ29CbGFjazwvdGl0bGU+XHJcbiAgICAgICAgPGcgaWQ9XCJMYXllcl8yXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgICAgPGcgaWQ9XCJUcmFjaW5nXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcuNjYsNDkuMTRhMzEuNTIsMzEuNTIsMCwwLDEtNC43NC0uMzYsMjMuNjEsMjMuNjEsMCwwLDEtNy42OC0yLjUyQTEwLDEwLDAsMCwxLC4xNCw0MWMtLjcyLTIuMSwxLjUtNC43NCwzLjY2LTMuNjZhNC40MSw0LjQxLDAsMCwxLDEuMjYsMS4zMmMyLjE2LDIuNjQsNS41MiwzLjc4LDguNzYsNC4zMmEyMi44MywyMi44MywwLDAsMCw3Ljg2LS4xMmMyLjgyLS42LDUuNTItMiw2LjYtNC44YTYuMzEsNi4zMSwwLDAsMCwuMTgtNC4zMmMtMS4zOC00LjA4LTYuNDgtNS41OC0xMC44LTYuNDhBNDUuNiw0NS42LDAsMCwxLDkuMiwyNC43OGMtMi44OC0xLjE0LTUuNzYtMi44OC03LjM4LTUuNjQtMi0zLjMtMS42Mi04LjUyLS40Mi0xMUM1LjA2Ljg0LDEyLjE0LDAsMTYuMjgsMGEyNS4xOSwyNS4xOSwwLDAsMSw4Ljk0LDEuNTZjMy4zLDEuMjYsNS44OCwzLjQyLDYuNjYsNS43YTIuODUsMi44NSwwLDAsMS0uNTQsMi44MiwyLjUsMi41LDAsMCwxLTMuMTIuNzIsOSw5LDAsMCwxLS44NC0uNzIsMTMuNjMsMTMuNjMsMCwwLDAtNS4yMi0zLjQyLDE2LjIxLDE2LjIxLDAsMCwwLTUuODgtLjc4Yy00LjY4LDAtMTAsMS44LTEwLDcuMjYsMCw1LDQuMzgsNi41NCwxNC40LDlDMzMuNSwyNS4yNiwzNS4xOCwzMi4zNCwzNCwzOC4zNCwzMi4xOCw0Ny4yOCwyMS42Miw0OS4xNCwxNy42Niw0OS4xNFpcIiAvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTc5LjgyLDQ1LjE4YTMsMywwLDAsMS0zLDNINDguMTRhMywzLDAsMCwxLTMtM1Y0YTMsMywwLDAsMSwzLTNINzYuMjJhMywzLDAsMCwxLDMsMywzLDMsMCwwLDEtMywzSDUxLjE0VjIxLjQ4aDIyLjJhMywzLDAsMCwxLDMsMywzLDMsMCwwLDEtMywzSDUxLjE0djE0LjdINzYuODJBMywzLDAsMCwxLDc5LjgyLDQ1LjE4WlwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTYuNjIsNFY0NS4xOGEzLDMsMCwxLDEtNiwwVjRhMywzLDAsMSwxLDYsMFptMjcuNiw0My44NmEzLjI3LDMuMjcsMCwwLDEtMS4zMi4zLDMsMywwLDAsMS0yLjctMS42OCw1MC45NCw1MC45NCwwLDAsMC03LjkyLTExLjgyYy0zLjU0LTMuNzgtNi4yNC02LjYtMTAuMzItOC45NC0uMTItLjA2LS4xOC0uMTItLjMtLjE4cy0uMjQtLjE4LS4zNi0uM2EyLjkzLDIuOTMsMCwwLDEtLjc4LTEuNjIsMy4xMSwzLjExLDAsMCwxLC4zNi0yLDMuMTYsMy4xNiwwLDAsMSwuNzItLjg0bDE4LjYtMTguOWEzLDMsMCwwLDEsNC4yNi4wNiwzLDMsMCwwLDEtLjA2LDQuMmwtMTYuMiwxNi41YzcuNTYsNS4zNCwxMy41LDEzLjIsMTcuNCwyMS4yNEEzLDMsMCwwLDEsMTI0LjIyLDQ3Ljg4WlwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTc1LjE2LDQ3Ljk0YTMuMzMsMy4zMywwLDAsMS0zLjQ4LS43OGwtMjktMzQuODZWNDUuMThhMywzLDAsMSwxLTYsMFY0QTMsMywwLDAsMSwxNDIsMi4xbDI5LDM0LjhWNGEzLDMsMCwwLDEsMy0zLDMsMywwLDAsMSwzLDNWNDUuMjRBMi42LDIuNiwwLDAsMSwxNzUuMTYsNDcuOTRaXCIgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0yMDQuNSw0OC4xOEgxOTAuODhhMywzLDAsMCwxLTMuMDYtM1Y0YTIuODEsMi44MSwwLDAsMSwuOS0yLjEsMy4yLDMuMiwwLDAsMSwyLjE2LS45aDEzLjc0QTI0Ljg4LDI0Ljg4LDAsMCwxLDIxNCwyLjg4YTI1Ljc5LDI1Ljc5LDAsMCwxLDcuOCw1LjEsMjMuNjksMjMuNjksMCwwLDEsNS4yMiw3LjU2QTIzLjEsMjMuMSwwLDAsMSwyMjksMjQuNzJhMjEuMzYsMjEuMzYsMCwwLDEtMiw5LDIzLjMzLDIzLjMzLDAsMCwxLTUuMjgsNy41LDI0LjcxLDI0LjcxLDAsMCwxLTcuOCw1LjFBMjUuMzQsMjUuMzQsMCwwLDEsMjA0LjUsNDguMThabS0xMC42Mi02LjA2aDEwLjc0YTE5LjgxLDE5LjgxLDAsMCwwLDctMS40NCwxOC4zMSwxOC4zMSwwLDAsMCw1Ljg4LTMuNzgsMTkuNzUsMTkuNzUsMCwwLDAsNC01LjY0QTE1LjQ5LDE1LjQ5LDAsMCwwLDIyMywyNC43MmExNi41OCwxNi41OCwwLDAsMC0xLjQ0LTYuNzhBMTguNjEsMTguNjEsMCwwLDAsMjA0LjYyLDdIMTkzLjg4WlwiIC8+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5zZWtuZEhhbmR9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IHsgU2VrbmRMb2FkZXIgfSBmcm9tIFwiLi9TZWtuZExvYWRlclwiO1xyXG4iLCJleHBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi9sYXlvdXRcIjtcclxuZXhwb3J0IHsgTmF2IH0gZnJvbSBcIi4vTmF2XCI7XHJcbmV4cG9ydCB7IFNjaGVkdWxlR3JpZCB9IGZyb20gXCIuL1NjaGVkdWxlR3JpZFwiO1xyXG5leHBvcnQgeyBEYXRlUGFydHMgfSBmcm9tIFwiLi9EYXRlUGFydHNcIjtcclxuZXhwb3J0IHsgUmVzdWx0Q2FyZCB9IGZyb20gXCIuL1NlYXJjaFJlc3VsdHNcIjtcclxuZXhwb3J0IHsgU2VrbmRMb2FkZXIgfSBmcm9tIFwiLi9TZWtuZExvYWRlclwiO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4vTmF2XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0OiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8TmF2PjwvTmF2PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFzLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxCYXNlUGF0aChyZXNvbHZlZEFzKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gZGVub3JtYWxpemVQYWdlUGF0aChkZWxCYXNlUGF0aChwYXRobmFtZSEpKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhZ2UpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbiAgZGVjb2RlOiBkZWNvZGVQYXJhbSxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24oXG4gICAgICBtYXRjaGVyUmVnZXgsXG4gICAgICBrZXlzLFxuICAgICAgbWF0Y2hlck9wdGlvbnNcbiAgICApXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVQYXJhbShwYXJhbTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgfSBjYXRjaCAoXykge1xuICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpXG4gICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICApXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZW5jb2RlVVJJKFxuICAgICAgZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VHcmlkU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU2VhcmNoR3JpZENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIDxMYXlvdXQ+PC9MYXlvdXQ+O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbnR5cGUgUGFydHNTdGF0ZSA9IHtcclxuICBwYXJ0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBwYXJ0PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGRldGFpbHM/OiBzdHJpbmc7XHJcbiAgICBwYXJ0cz86IFBhcnRzU3RhdGVbXCJwYXJ0c1wiXTtcclxuICB9O1xyXG59O1xyXG5jb25zdCBwYXJ0c1JlZHVjZXI6IFJlYWN0LlJlZHVjZXI8UGFydHNTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogUGFydHNTdGF0ZSxcclxuICBhY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9QQVJUXCI6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5wYXJ0cy5sZW5ndGggPCA3XHJcbiAgICAgICAgPyB7IHBhcnRzOiBbLi4uc3RhdGUucGFydHMsIGFjdGlvbi5wYXlsb2FkLnBhcnRdIH1cclxuICAgICAgICA6IG51bGw7XHJcbiAgICBjYXNlIFwiUkVNT1ZFX1BBUlRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0czogc3RhdGUucGFydHMuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQ0hBTkdFX0NVU1RPTV9ERVRBSUxcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0czogc3RhdGUucGFydHMubWFwKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocGFydC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpIHJldHVybiBwYXJ0O1xyXG5cclxuICAgICAgICAgIHJldHVybiB7IC4uLnBhcnQsIGRldGFpbHM6IGFjdGlvbi5wYXlsb2FkLmRldGFpbHMgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJVUERBVEVfRlJPTV9DQUNIRVwiOlxyXG4gICAgICByZXR1cm4geyBwYXJ0czogYWN0aW9uLnBheWxvYWQucGFydHMgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYXJ0c1N0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxQYXJ0c1N0YXRlPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXHJcbiAgdW5kZWZpbmVkXHJcbik7XHJcblxyXG5jb25zdCBQYXJ0c0Rpc3BhdGNoQ29udGV4dDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgUGFydHNQcm92aWRlcjogKHtcclxuICBjaGlsZHJlbixcclxuICBpbml0aWFsUGFydHNTdGF0ZSxcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgaW5pdGlhbFBhcnRzU3RhdGU/OiBQYXJ0c1N0YXRlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsUGFydHNTdGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgcGFydHNSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFBhcnRzU3RhdGUgPyBpbml0aWFsUGFydHNTdGF0ZSA6IHsgcGFydHM6IFtdIH1cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcInBhcnRzXCIsIHN0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoQ29va2llLmdldChcInBhcnRzXCIpKSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFydHNTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFBhcnRzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1BhcnRzRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9QYXJ0c1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhcnRzU3RhdGUgPSAoKTogUGFydHNTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dDogUGFydHNTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUGFydHNTdGF0ZUNvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFBhcnRzUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhcnRzRGlzcGF0Y2ggPSAoKTogUmVhY3QuRGlzcGF0Y2g8QWN0aW9uPiA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoUGFydHNEaXNwYXRjaENvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFBhcnRzUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIHNxdWFyZXM6IHsgcGFydDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgfVtdO1xyXG59O1xyXG50eXBlIEFjdGlvbiA9IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbnVtYmVyT2ZTcXVhcmVzPzogbnVtYmVyO1xyXG4gICAgcGFydD86IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBzcXVhcmVzUmVkdWNlcjogUmVhY3QuUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPiA9IChcclxuICBzdGF0ZTogU3RhdGUsXHJcbiAgYWN0aW9uOiBBY3Rpb25cclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9TUVVBUkVTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogWy4uLm5ldyBBcnJheShhY3Rpb24ucGF5bG9hZC5udW1iZXJPZlNxdWFyZXMpXS5tYXAoKCkgPT4gKHtcclxuICAgICAgICAgIHBhcnQ6IG51bGwsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkFERF9QQVJUX1RPX1NRVUFSRVwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNxdWFyZXM6IHN0YXRlLnNxdWFyZXMubWFwKChzcXVhcmUsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBpICE9PSBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICA/IHNxdWFyZVxyXG4gICAgICAgICAgICA6IHsgcGFydDogYWN0aW9uLnBheWxvYWQucGFydCB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlJFTU9WRV9QQVJUX0ZST01fU1FVQVJFXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3F1YXJlczogc3RhdGUuc3F1YXJlcy5tYXAoKHNxdWFyZSwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgID8geyBwYXJ0OiBhY3Rpb24ucGF5bG9hZC5wYXJ0IH1cclxuICAgICAgICAgICAgOiBzcXVhcmU7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgU3F1YXJlc0NvbnRleHQ6IFJlYWN0LkNvbnRleHQ8U3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgU3F1YXJlc0Rpc3BhdGNoOiBSZWFjdC5Db250ZXh0PFxyXG4gIFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gfCB1bmRlZmluZWRcclxuPiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTcXVhcmVzUHJvdmlkZXI6ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgaW5pdGlhbFNxdWFyZXNTdGF0ZSxcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgaW5pdGlhbFNxdWFyZXNTdGF0ZT86IFN0YXRlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsU3F1YXJlc1N0YXRlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBzcXVhcmVzUmVkdWNlcixcclxuICAgIGluaXRpYWxTcXVhcmVzU3RhdGVcclxuICAgICAgPyBpbml0aWFsU3F1YXJlc1N0YXRlXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgc3F1YXJlczogW10sXHJcbiAgICAgICAgfVxyXG4gICk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWUuc2V0KFwic3F1YXJlc1wiLCBzdGF0ZSk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3F1YXJlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPFNxdWFyZXNEaXNwYXRjaC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9TcXVhcmVzRGlzcGF0Y2guUHJvdmlkZXI+XHJcbiAgICA8L1NxdWFyZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc1N0YXRlID0gKCk6IFN0YXRlID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTcXVhcmVzQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHVzZSB3aXRoaW4gU3F1YXJlcyBQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3F1YXJlc0Rpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNxdWFyZXNEaXNwYXRjaCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIFNxdWFyZXMgUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuICBncmlkVGVtcGxhdGU6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwYXlsb2FkOiB7XHJcbiAgICBncmlkVGVtcGxhdGU6IHN0cmluZztcclxuICAgIGhvdXJTdHJpbmdzOiBzdHJpbmdbXTtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ3JpZFJlZHVjZXI6IFJlYWN0LlJlZHVjZXI8U3RhdGUsIEFjdGlvbj4gPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX0dSSURfVEVNUExBVEVcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBob3VyU3RyaW5nczogYWN0aW9uLnBheWxvYWQuaG91clN0cmluZ3MsXHJcbiAgICAgICAgZ3JpZFRlbXBsYXRlOiBhY3Rpb24ucGF5bG9hZC5ncmlkVGVtcGxhdGUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEdyaWRTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8U3RhdGU+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgR3JpZERpc3BhdGNoQ29udGV4dDogUmVhY3QuQ29udGV4dDxcclxuICBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+IHwgdW5kZWZpbmVkXHJcbj4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZFByb3ZpZGVyOiAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGluaXRpYWxHcmlkU3RhdGUsXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGluaXRpYWxHcmlkU3RhdGU6IFN0YXRlO1xyXG59KSA9PiBKU1guRWxlbWVudCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsR3JpZFN0YXRlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICBncmlkUmVkdWNlcixcclxuICAgIGluaXRpYWxHcmlkU3RhdGVcclxuICAgICAgPyBpbml0aWFsR3JpZFN0YXRlXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlOiBcIlwiLFxyXG4gICAgICAgICAgaG91clN0cmluZ3M6IFtdLFxyXG4gICAgICAgIH1cclxuICApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llLnNldChcImdyaWRcIiwgc3RhdGUpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPEdyaWREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvR3JpZERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvR3JpZFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdyaWRTdGF0ZSA9ICgpOiBTdGF0ZSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoR3JpZFN0YXRlQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB1c2Ugd2l0aGluIEdyaWRQcm92aWRlclwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR3JpZERpc3BhdGNoID0gKCk6IFJlYWN0LkRpc3BhdGNoPEFjdGlvbj4gPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEdyaWREaXNwYXRjaENvbnRleHQpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgdXNlIHdpdGhpbiBHcmlkUHJvdmlkZXJcIik7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=