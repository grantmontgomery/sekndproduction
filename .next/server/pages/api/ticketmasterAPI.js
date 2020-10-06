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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/ticketmasterAPI.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/ticketmasterAPI.ts":
/*!**************************************!*\
  !*** ./pages/api/ticketmasterAPI.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Amplify.configure({...config, ssr: true})
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    if (req.method !== "GET") {
      const {
        startDateTime,
        endDateTime,
        radius,
        location
      } = req.body;
      const ticketmasterEvents = new URL("https://app.ticketmaster.com/discovery/v2/events"),
            params = {
        radius,
        startDateTime,
        endDateTime,
        unit: ["km"],
        apikey: `${"NEZbUEO0E6MVGhlMJGIBSB0soHmZKJO8"}`
      };
      Object.keys(params).forEach(key => ticketmasterEvents.searchParams.append(key, params[key]));
      isNaN(parseInt(location)) ? ticketmasterEvents.searchParams.append("city", location) : ticketmasterEvents.searchParams.append("postalCode", location);
      const ticketmasterURLString = ticketmasterEvents.toString(); //function

      const ticketmasterResponse = await fetch(ticketmasterURLString);
      const jsonResponse = await ticketmasterResponse.json();
      return res.send(jsonResponse);
    }

    return res.status(200).end("Ticket MAster API");
  } catch (err) {
    return res.send(err);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3RpY2tldG1hc3RlckFQSS50cyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGFydERhdGVUaW1lIiwiZW5kRGF0ZVRpbWUiLCJyYWRpdXMiLCJsb2NhdGlvbiIsImJvZHkiLCJ0aWNrZXRtYXN0ZXJFdmVudHMiLCJVUkwiLCJwYXJhbXMiLCJ1bml0IiwiYXBpa2V5IiwicHJvY2VzcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwiaXNOYU4iLCJwYXJzZUludCIsInRpY2tldG1hc3RlclVSTFN0cmluZyIsInRvU3RyaW5nIiwidGlja2V0bWFzdGVyUmVzcG9uc2UiLCJmZXRjaCIsImpzb25SZXNwb25zZSIsImpzb24iLCJzZW5kIiwic3RhdHVzIiwiZW5kIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFFZSxzRUFBT0EsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSTtBQUNGLFFBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLFlBQU07QUFBRUMscUJBQUY7QUFBaUJDLG1CQUFqQjtBQUE4QkMsY0FBOUI7QUFBc0NDO0FBQXRDLFVBQW1ETixHQUFHLENBQUNPLElBQTdEO0FBQ0EsWUFBTUMsa0JBQXVCLEdBQUcsSUFBSUMsR0FBSixDQUM1QixrREFENEIsQ0FBaEM7QUFBQSxZQUdFQyxNQUFjLEdBQUc7QUFDZkwsY0FEZTtBQUVmRixxQkFGZTtBQUdmQyxtQkFIZTtBQUlmTyxZQUFJLEVBQUUsQ0FBQyxJQUFELENBSlM7QUFLZkMsY0FBTSxFQUFHLEdBQUVDLGtDQUFpQztBQUw3QixPQUhuQjtBQVVBQyxZQUFNLENBQUNDLElBQVAsQ0FBWUwsTUFBWixFQUFvQk0sT0FBcEIsQ0FBNkJDLEdBQUQsSUFDMUJULGtCQUFrQixDQUFDVSxZQUFuQixDQUFnQ0MsTUFBaEMsQ0FBdUNGLEdBQXZDLEVBQTRDUCxNQUFNLENBQUNPLEdBQUQsQ0FBbEQsQ0FERjtBQUlBRyxXQUFLLENBQUNDLFFBQVEsQ0FBQ2YsUUFBRCxDQUFULENBQUwsR0FDSUUsa0JBQWtCLENBQUNVLFlBQW5CLENBQWdDQyxNQUFoQyxDQUF1QyxNQUF2QyxFQUErQ2IsUUFBL0MsQ0FESixHQUVJRSxrQkFBa0IsQ0FBQ1UsWUFBbkIsQ0FBZ0NDLE1BQWhDLENBQXVDLFlBQXZDLEVBQXFEYixRQUFyRCxDQUZKO0FBSUEsWUFBTWdCLHFCQUE2QixHQUFHZCxrQkFBa0IsQ0FBQ2UsUUFBbkIsRUFBdEMsQ0FwQndCLENBcUJ4Qjs7QUFFQSxZQUFNQyxvQkFBOEIsR0FBRyxNQUFNQyxLQUFLLENBQUNILHFCQUFELENBQWxEO0FBRUEsWUFBTUksWUFBa0IsR0FBRyxNQUFNRixvQkFBb0IsQ0FBQ0csSUFBckIsRUFBakM7QUFFQSxhQUFPMUIsR0FBRyxDQUFDMkIsSUFBSixDQUFTRixZQUFULENBQVA7QUFDRDs7QUFDRCxXQUFPekIsR0FBRyxDQUFDNEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLENBQW9CLG1CQUFwQixDQUFQO0FBQ0QsR0EvQkQsQ0ErQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1osV0FBTzlCLEdBQUcsQ0FBQzJCLElBQUosQ0FBU0csR0FBVCxDQUFQO0FBQ0Q7QUFDRixDQW5DRCxFIiwiZmlsZSI6InBhZ2VzL2FwaS90aWNrZXRtYXN0ZXJBUEkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS90aWNrZXRtYXN0ZXJBUEkudHNcIik7XG4iLCJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEFtcGxpZnkgZnJvbSBcImF3cy1hbXBsaWZ5XCI7XHJcblxyXG50eXBlIFBhcmFtcyA9IHtcclxuICByYWRpdXM6IHN0cmluZztcclxuICBzdGFydERhdGVUaW1lOiBzdHJpbmc7XHJcbiAgZW5kRGF0ZVRpbWU6IHN0cmluZztcclxuICB1bml0OiBzdHJpbmdbXTtcclxuICBhcGlrZXk6IHN0cmluZztcclxuICBzZWdtZW50SUQ/OiBzdHJpbmc7XHJcbiAgY2l0eT86IHN0cmluZztcclxuICBwb3N0YWxDb2RlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuLy8gQW1wbGlmeS5jb25maWd1cmUoey4uLmNvbmZpZywgc3NyOiB0cnVlfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gXCJHRVRcIikge1xyXG4gICAgICBjb25zdCB7IHN0YXJ0RGF0ZVRpbWUsIGVuZERhdGVUaW1lLCByYWRpdXMsIGxvY2F0aW9uIH0gPSByZXEuYm9keTtcclxuICAgICAgY29uc3QgdGlja2V0bWFzdGVyRXZlbnRzOiBVUkwgPSBuZXcgVVJMKFxyXG4gICAgICAgICAgXCJodHRwczovL2FwcC50aWNrZXRtYXN0ZXIuY29tL2Rpc2NvdmVyeS92Mi9ldmVudHNcIlxyXG4gICAgICAgICksXHJcbiAgICAgICAgcGFyYW1zOiBQYXJhbXMgPSB7XHJcbiAgICAgICAgICByYWRpdXMsXHJcbiAgICAgICAgICBzdGFydERhdGVUaW1lLFxyXG4gICAgICAgICAgZW5kRGF0ZVRpbWUsXHJcbiAgICAgICAgICB1bml0OiBbXCJrbVwiXSxcclxuICAgICAgICAgIGFwaWtleTogYCR7cHJvY2Vzcy5lbnYuVElDS0VUTUFTVEVSX0FQSV9LRVl9YCxcclxuICAgICAgICB9O1xyXG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT5cclxuICAgICAgICB0aWNrZXRtYXN0ZXJFdmVudHMuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHBhcmFtc1trZXldKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaXNOYU4ocGFyc2VJbnQobG9jYXRpb24pKVxyXG4gICAgICAgID8gdGlja2V0bWFzdGVyRXZlbnRzLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJjaXR5XCIsIGxvY2F0aW9uKVxyXG4gICAgICAgIDogdGlja2V0bWFzdGVyRXZlbnRzLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJwb3N0YWxDb2RlXCIsIGxvY2F0aW9uKTtcclxuXHJcbiAgICAgIGNvbnN0IHRpY2tldG1hc3RlclVSTFN0cmluZzogc3RyaW5nID0gdGlja2V0bWFzdGVyRXZlbnRzLnRvU3RyaW5nKCk7XHJcbiAgICAgIC8vZnVuY3Rpb25cclxuXHJcbiAgICAgIGNvbnN0IHRpY2tldG1hc3RlclJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHRpY2tldG1hc3RlclVSTFN0cmluZyk7XHJcblxyXG4gICAgICBjb25zdCBqc29uUmVzcG9uc2U6IEpTT04gPSBhd2FpdCB0aWNrZXRtYXN0ZXJSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnNlbmQoanNvblJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKFwiVGlja2V0IE1Bc3RlciBBUElcIik7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoZXJyKTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=