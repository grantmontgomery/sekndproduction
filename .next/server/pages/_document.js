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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}

function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = pathname !== '/_error' ? (0, _getPageFiles.getPageFiles)(buildManifest, pathname) : [];
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      cssFiles.push(...dynamicCssFiles);
    }

    const cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isSharedFile ? '' : undefined,
        "data-n-p": isSharedFile ? undefined : ''
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    });
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(files), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": true
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(files), this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) === null || _buildManifest$lowPri === void 0 ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\pages\\_document.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }
    }, __jsx("meta", {
      content: "Description goes here.",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 11
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    }, "Seknd"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    })), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.tsx */"./pages/_document.tsx");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJmaWxlcyIsImtlcHQiLCJidW5kbGUiLCJwcm9jZXNzIiwic2hhcmVkRmlsZXMiLCJwYWdlRmlsZXMiLCJwYXRobmFtZSIsImFsbEZpbGVzIiwiQ29tcG9uZW50IiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY3R4Iiwic3R5bGVzIiwicmVuZGVyIiwiRG9jdW1lbnQiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJEb2N1bWVudENvbXBvbmVudENvbnRleHQiLCJkb2NDb21wb25lbnRzUmVuZGVyZWQiLCJpbkFtcE1vZGUiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsImR5bmFtaWNDc3NGaWxlcyIsImRlZHVwZSIsImR5bmFtaWNJbXBvcnRzIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJmaWxlIiwiaXNTaGFyZWRGaWxlIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50IiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsIm1ha2VTdHlsZXNoZWV0SW5lcnQiLCJSZWFjdCIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJ1cmwiLCJuZXdQcm9wcyIsImRpc2FibGVSdW50aW1lSlMiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJjaGlsZHJlbiIsImNoaWxkIiwiaXNSZWFjdEhlbG1ldCIsImNvbnNvbGUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiaGVhZCIsImJhZFByb3AiLCJ0eXBlIiwiT2JqZWN0IiwicHJvcCIsIl9fTkVYVF9EQVRBX18iLCJwYWdlIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsImdldERvY3VtZW50RmlsZXMiLCJfX2h0bWwiLCJjYW5vbmljYWxCYXNlIiwic3R5bGUiLCJnZXRBbXBQYXRoIiwiaGVhZFRhZ3MiLCJIZWFkIiwiY29udGV4dFR5cGUiLCJwcm9wVHlwZXMiLCJub25jZSIsIlByb3BUeXBlcyIsImNyb3NzT3JpZ2luIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJnZXREeW5hbWljQ2h1bmtzIiwibW9kZXJuUHJvcHMiLCJnZXRTY3JpcHRzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImJ1aWxkTWFuaWZlc3QiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwiZXJyIiwiYW1wRGV2RmlsZXMiLCJOZXh0U2NyaXB0Iiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhbXBQYXRoIiwiYXNQYXRoIiwiQ3VzdG9tRG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUlBOztBQUNBOzs7Ozs7QUFLQTs7QUFJQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOztBQUFBLHlCQUErRDtBQUM3RCxRQUFNQSxLQUFLLEdBQUcs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dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQge1xuICBCdWlsZE1hbmlmZXN0LFxuICBnZXRQYWdlRmlsZXMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IGNsZWFuQW1wUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci91dGlscydcbmltcG9ydCB7IGh0bWxFc2NhcGVKc29uU3RyaW5nIH0gZnJvbSAnLi4vc2VydmVyL2h0bWxlc2NhcGUnXG5cbmV4cG9ydCB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50UHJvcHMgfVxuXG5leHBvcnQgdHlwZSBPcmlnaW5Qcm9wcyA9IHtcbiAgbm9uY2U/OiBzdHJpbmdcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gZGVkdXBlPFQgZXh0ZW5kcyB7IGZpbGU6IHN0cmluZyB9PihidW5kbGVzOiBUW10pOiBUW10ge1xuICBjb25zdCBmaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IGtlcHQ6IFRbXSA9IFtdXG5cbiAgZm9yIChjb25zdCBidW5kbGUgb2YgYnVuZGxlcykge1xuICAgIGlmIChmaWxlcy5oYXMoYnVuZGxlLmZpbGUpKSBjb250aW51ZVxuICAgIGZpbGVzLmFkZChidW5kbGUuZmlsZSlcbiAgICBrZXB0LnB1c2goYnVuZGxlKVxuICB9XG4gIHJldHVybiBrZXB0XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLmpzJC8sICcubW9kdWxlLmpzJylcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG50eXBlIERvY3VtZW50RmlsZXMgPSB7XG4gIHNoYXJlZEZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBwYWdlRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG4gIGFsbEZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEZpbGVzKFxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0LFxuICBwYXRobmFtZTogc3RyaW5nXG4pOiBEb2N1bWVudEZpbGVzIHtcbiAgY29uc3Qgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpXG4gIGNvbnN0IHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPVxuICAgIHBhdGhuYW1lICE9PSAnL19lcnJvcicgPyBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpIDogW11cblxuICByZXR1cm4ge1xuICAgIHNoYXJlZEZpbGVzLFxuICAgIHBhZ2VGaWxlcyxcbiAgICBhbGxGaWxlczogWy4uLm5ldyBTZXQoWy4uLnNoYXJlZEZpbGVzLCAuLi5wYWdlRmlsZXNdKV0sXG4gIH1cbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIHN0YXRpYyBoZWFkVGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cblxuICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxuICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgY29uc3QgZW5oYW5jZUFwcCA9IChBcHA6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChwcm9wczogYW55KSA9PiA8QXBwIHsuLi5wcm9wc30gLz5cbiAgICB9XG5cbiAgICBjb25zdCB7IGh0bWwsIGhlYWQgfSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKHsgZW5oYW5jZUFwcCB9KVxuICAgIGNvbnN0IHN0eWxlcyA9IFsuLi5mbHVzaCgpXVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIHN0eWxlcyB9XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyRG9jdW1lbnQ8UD4oXG4gICAgRG9jdW1lbnRDb21wb25lbnQ6IG5ldyAoKSA9PiBEb2N1bWVudDxQPixcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wcyAmIFBcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvcHN9PlxuICAgICAgICA8RG9jdW1lbnRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9Eb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIdG1sKFxuICBwcm9wczogUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgUmVhY3QuSHRtbEhUTUxBdHRyaWJ1dGVzPEhUTUxIdG1sRWxlbWVudD4sXG4gICAgSFRNTEh0bWxFbGVtZW50XG4gID5cbikge1xuICBjb25zdCB7IGluQW1wTW9kZSwgZG9jQ29tcG9uZW50c1JlbmRlcmVkIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgYW1wPXtpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50PFxuICBPcmlnaW5Qcm9wcyAmXG4gICAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZEVsZW1lbnQ+LFxuICAgICAgSFRNTEhlYWRFbGVtZW50XG4gICAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICBnZXRDc3NMaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgY29uc3Qgc2hhcmVkRmlsZXMgPSBuZXcgU2V0KGZpbGVzLnNoYXJlZEZpbGVzKVxuXG4gICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IGRlZHVwZShcbiAgICAgIGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZikgPT4gZi5maWxlLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgKS5tYXAoKGYpID0+IGYuZmlsZSlcbiAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKVxuICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihcbiAgICAgICAgKGYpID0+ICEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgIClcbiAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKVxuICAgIH1cblxuICAgIGNvbnN0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpXG5cbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz4sXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YS1uLWc9e2lzU2hhcmVkRmlsZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRhdGEtbi1wPXtpc1NoYXJlZEZpbGUgPyB1bmRlZmluZWQgOiAnJ31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkZWR1cGUoZHluYW1pY0ltcG9ydHMpXG4gICAgICAgIC5tYXAoKGJ1bmRsZSkgPT4ge1xuICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuIHRoZVxuICAgICAgICAgIC8vIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGUgbW9kZXJuXG4gICAgICAgICAgLy8gdmFyaWFudHMgb25seS5cbiAgICAgICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBwcmVsb2FkRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbiAgICAgIC8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4gICAgICAvLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpXG4gICAgfSlcblxuICAgIHJldHVybiAhcHJlbG9hZEZpbGVzLmxlbmd0aFxuICAgICAgPyBudWxsXG4gICAgICA6IHByZWxvYWRGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgfVxuXG4gIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZTogUmVhY3ROb2RlKTogUmVhY3ROb2RlIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKG5vZGUsIChjOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh1cmwpID0+IGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgfSBlbHNlIGlmIChjLnByb3BzICYmIGMucHJvcHNbJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBoeWJyaWRBbXAsXG4gICAgICBjYW5vbmljYWxCYXNlLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGRhbmdlcm91c0FzUGF0aCxcbiAgICAgIGhlYWRUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZVxuXG4gICAgbGV0IHsgaGVhZCB9ID0gdGhpcy5jb250ZXh0XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjaGlsZD8udHlwZSA9PT0gJ21ldGEnICYmXG4gICAgICAgICAgICBjaGlsZD8ucHJvcHM/Lm5hbWUgPT09ICd2aWV3cG9ydCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFpbkFtcE1vZGUpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2BcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9KVxuXG4gICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgY29uc3QgY3VyU3R5bGVzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKVxuICAgICAgPyAoc3R5bGVzIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdKVxuICAgICAgOiBbXVxuICAgIGlmIChcbiAgICAgIGluQW1wTW9kZSAmJlxuICAgICAgc3R5bGVzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbilcbiAgICApIHtcbiAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PlxuICAgICAgICBlbD8ucHJvcHM/LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPy5fX2h0bWxcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpID0+IGhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2VcbiAgICApXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UU1xuICAgICAgICAgICAgICA/IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydCh0aGlzLmdldENzc0xpbmtzKGZpbGVzKSlcbiAgICAgICAgICAgICAgOiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzIC8+XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7dGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGlkPVwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3R5bGVzIHx8IG51bGx9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGhlYWRUYWdzIHx8IFtdKSl9XG4gICAgICA8L2hlYWQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCB7IGluQW1wTW9kZSwgaHRtbCwgZG9jQ29tcG9uZW50c1JlbmRlcmVkIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW4gPSB0cnVlXG5cbiAgaWYgKGluQW1wTW9kZSkgcmV0dXJuIDw+e0FNUF9SRU5ERVJfVEFSR0VUfTwvPlxuICByZXR1cm4gPGRpdiBpZD1cIl9fbmV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPlxufVxuXG5leHBvcnQgY2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIENvbXBvbmVudDxPcmlnaW5Qcm9wcz4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgLy8gU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9zYW10aG9yLzY0YjExNGU0YTRmNTM5OTE1YTk1YjkxZmZkMzQwYWNjXG4gIHN0YXRpYyBzYWZhcmlOb21vZHVsZUZpeCA9XG4gICAgJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7J1xuXG4gIGdldER5bmFtaWNDaHVua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaXNEZXZlbG9wbWVudCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcCgoYnVuZGxlKSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSBidW5kbGUuZmlsZS5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgICAgICAgPyB7IHR5cGU6ICdtb2R1bGUnIH1cbiAgICAgICAgICA6IHsgbm9Nb2R1bGU6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKCcuanMnKSB8fCBmaWxlcy5hbGxGaWxlcy5pbmNsdWRlcyhidW5kbGUuZmlsZSkpXG4gICAgICAgIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnR9XG4gICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2NyaXB0cyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSBidWlsZE1hbmlmZXN0Lmxvd1ByaW9yaXR5RmlsZXM/LmZpbHRlcigoZmlsZSkgPT5cbiAgICAgIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgKVxuXG4gICAgcmV0dXJuIFsuLi5ub3JtYWxTY3JpcHRzLCAuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgbGV0IG1vZGVyblByb3BzID0ge31cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgICAgIG1vZGVyblByb3BzID0gZmlsZS5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgICAgICAgPyB7IHR5cGU6ICdtb2R1bGUnIH1cbiAgICAgICAgICA6IHsgbm9Nb2R1bGU6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgICAgey4uLm1vZGVyblByb3BzfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHBvbHlmaWxsKSA9PlxuICAgICAgICAgIHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgKVxuICAgICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogRG9jdW1lbnRQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBfX05FWFRfREFUQV9fIH0gPSBkb2N1bWVudFByb3BzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKVxuICAgICAgcmV0dXJuIGh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcblxuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0ID0gdHJ1ZVxuXG4gICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgYW1wRGV2RmlsZXMgPSBbXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthbXBEZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlXG4gICAgKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlc1xuICAgICAgICAgID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgJiYgIWRpc2FibGVSdW50aW1lSlMgPyAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXRTY3JpcHRzKGZpbGVzKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGg6IHN0cmluZywgYXNQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYW1wUGF0aCB8fCBgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J31hbXA9MWBcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEh0bWw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBjb250ZW50PVwiRGVzY3JpcHRpb24gZ29lcyBoZXJlLlwiIC8+XHJcbiAgICAgICAgICA8dGl0bGU+U2VrbmQ8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluPjwvTWFpbj5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0PjwvTmV4dFNjcmlwdD5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==