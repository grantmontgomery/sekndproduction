webpackHotUpdate_N_E("pages/search/[queried]",{

/***/ "./pages/search/[queried].tsx":
/*!************************************!*\
  !*** ./pages/search/[queried].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Queried; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _apicalls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../apicalls */ "./apicalls/index.ts");
/* harmony import */ var _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/Queried.module.scss */ "./styles/Queried.module.scss");
/* harmony import */ var _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\Users\\gmont\\sekndproduction\\pages\\search\\[queried].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7__["createElement"];




function Queried(_ref) {
  _s();

  var _this = this;

  var _ref$results = _ref.results,
      items = _ref$results.items,
      errors = _ref$results.errors,
      searchType = _ref.searchType;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7__["useState"]({
    resultsType: "Places"
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  console.log(items);

  var determineItems = function determineItems() {
    switch (searchType) {
      case "ALL":
        if (Array.isArray(items.places) && Array.isArray(items.events)) {
          return state.resultsType === "Places" ? items.places.map(function (item) {
            return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ResultCard"], {
              key: item.id,
              item: item,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }
            });
          }) : items.events.map(function (item) {
            return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ResultCard"], {
              key: item.id,
              item: item,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }
            });
          });
        } else {
          return null;
        }

      case "PLACES":
        return Array.isArray(items.places) ? items.places.map(function (item) {
          return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ResultCard"], {
            key: item.id,
            item: item,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }
          });
        }) : null;

      case "EVENTS":
        return Array.isArray(items.events) ? items.events.map(function (item) {
          return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ResultCard"], {
            key: item.id,
            item: item,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }
          });
        }) : null;

      default:
        if (Array.isArray(items.places) && Array.isArray(items.events)) {
          return state.resultsType === "Places" ? items.places.map(function (item) {
            return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ResultCard"], {
              key: item.id,
              item: item,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }
            });
          }) : items.events.map(function (item) {
            return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["ResultCard"], {
              key: item.id,
              item: item,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }
            });
          });
        } else {
          return null;
        }

    }
  };

  react__WEBPACK_IMPORTED_MODULE_7__["useEffect"](function () {
    if (searchType) {
      switch (searchType) {
        case "ALL":
      }
    }
  });

  var setTypeButtons = function setTypeButtons() {
    if (searchType) {
      switch (searchType) {
        case "ALL":
          return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }
          }, __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }
          }, "Places"), __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }
          }, "Events"));

        case "PLACES":
          return __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 18
            }
          }, "Places");

        case "EVENTS":
          return __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 18
            }
          }, "Events");

        default:
          return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }
          }, __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }
          }, "Places"), __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }
          }, "Events"));
      }
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, __jsx("button", {
        className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }, "Places"), __jsx("button", {
        className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, "Events"));
    }
  };

  return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.queriedPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.queryDisplay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx("section", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, setTypeButtons(), __jsx("button", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.sort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Sort")), __jsx("section", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.resultsSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, determineItems()))));
}

_s(Queried, "GyXE/IEqt+2Mi4BK33VxRO6Zjm4=");

_c = Queried;

Queried.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(_ref2) {
    var query, checkURLIsString, paramValueArray, searchParamsValues, APICalls, callAPIS, results;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            query = _ref2.query;

            if (!query.queried) {
              _context5.next = 14;
              break;
            }

            checkURLIsString = query.queried.toString();
            paramValueArray = checkURLIsString.split("+");
            searchParamsValues = {};
            paramValueArray.forEach(function (param) {
              var indexOfEqual = param.search("=");
              if (indexOfEqual === -1) return;else {
                var paramKey = param.substring(0, indexOfEqual);
                var paramValue = param.substring(indexOfEqual + 1);
                searchParamsValues[paramKey] = paramValue;
              }
            });

            APICalls = /*#__PURE__*/function () {
              function APICalls(searchParams) {
                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, APICalls);

                Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "searchParams", void 0);

                Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "results", void 0);

                this.searchParams = searchParams;
                this.results = {
                  items: {
                    places: [],
                    events: []
                  },
                  errors: {
                    yelpPlaces: "",
                    yelpEvents: "",
                    ticketmaster: ""
                  }
                };
              }

              Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(APICalls, [{
                key: "yelpBusinesses",
                value: function () {
                  var _yelpBusinesses = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                    var yelpBusinessesResponse;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return Object(_apicalls__WEBPACK_IMPORTED_MODULE_9__["yelpBusinessesCall"])(this.searchParams);

                          case 2:
                            yelpBusinessesResponse = _context.sent;
                            Array.isArray(yelpBusinessesResponse) ? this.results.items.places = yelpBusinessesResponse : this.results.errors.yelpPlaces = "".concat(yelpBusinessesResponse);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  function yelpBusinesses() {
                    return _yelpBusinesses.apply(this, arguments);
                  }

                  return yelpBusinesses;
                }()
              }, {
                key: "yelpEvents",
                value: function () {
                  var _yelpEvents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
                    var yelpEventsResponse;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return Object(_apicalls__WEBPACK_IMPORTED_MODULE_9__["yelpEventsCall"])(this.searchParams);

                          case 2:
                            yelpEventsResponse = _context2.sent;
                            Array.isArray(yelpEventsResponse) ? this.results.items.events = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.results.items.events), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(yelpEventsResponse)) : this.results.errors.yelpEvents = "".concat(yelpEventsResponse);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  function yelpEvents() {
                    return _yelpEvents.apply(this, arguments);
                  }

                  return yelpEvents;
                }()
              }, {
                key: "ticketMaster",
                value: function () {
                  var _ticketMaster = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                    var ticketMasterResponse;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return Object(_apicalls__WEBPACK_IMPORTED_MODULE_9__["ticketMasterCall"])(this.searchParams);

                          case 2:
                            ticketMasterResponse = _context3.sent;
                            Array.isArray(ticketMasterResponse) ? this.results.items.events = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.results.items.events), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(ticketMasterResponse)) : this.results.errors.ticketmaster = "".concat(ticketMasterResponse);

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  function ticketMaster() {
                    return _ticketMaster.apply(this, arguments);
                  }

                  return ticketMaster;
                }()
              }]);

              return APICalls;
            }();

            callAPIS = /*#__PURE__*/function () {
              var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(searchType) {
                var APICall;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        APICall = new APICalls(searchParamsValues);
                        _context4.prev = 1;
                        _context4.t0 = searchType;
                        _context4.next = _context4.t0 === "PLACES" ? 5 : _context4.t0 === "EVENTS" ? 7 : _context4.t0 === "ALL" ? 10 : 14;
                        break;

                      case 5:
                        APICall.yelpBusinesses();
                        return _context4.abrupt("return", APICall.results);

                      case 7:
                        APICall.yelpEvents();
                        APICall.ticketMaster();
                        return _context4.abrupt("return", APICall.results);

                      case 10:
                        APICall.yelpBusinesses();
                        APICall.yelpEvents();
                        APICall.ticketMaster();
                        return _context4.abrupt("return", APICall.results);

                      case 14:
                        APICall.yelpBusinesses();
                        APICall.yelpEvents();
                        APICall.ticketMaster();
                        return _context4.abrupt("return", APICall.results);

                      case 18:
                        _context4.next = 26;
                        break;

                      case 20:
                        _context4.prev = 20;
                        _context4.t1 = _context4["catch"](1);
                        APICall.results.errors.yelpPlaces = "CALL ERROR";
                        APICall.results.errors.yelpEvents = "CALL ERROR";
                        APICall.results.errors.ticketmaster = "CALL ERROR";
                        return _context4.abrupt("return", APICall.results);

                      case 26:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[1, 20]]);
              }));

              return function callAPIS(_x2) {
                return _ref4.apply(this, arguments);
              };
            }();

            _context5.next = 10;
            return callAPIS(searchParamsValues.searchType);

          case 10:
            results = _context5.sent;
            return _context5.abrupt("return", {
              results: results,
              searchType: searchParamsValues.searchType
            });

          case 14:
            return _context5.abrupt("return", {
              results: {},
              searchType: "ALL"
            });

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "Queried");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1txdWVyaWVkXS50c3giXSwibmFtZXMiOlsiUXVlcmllZCIsInJlc3VsdHMiLCJpdGVtcyIsImVycm9ycyIsInNlYXJjaFR5cGUiLCJSZWFjdCIsInJlc3VsdHNUeXBlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRlcm1pbmVJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInBsYWNlcyIsImV2ZW50cyIsIm1hcCIsIml0ZW0iLCJpZCIsInNldFR5cGVCdXR0b25zIiwiY3NzIiwidHlwZUJ1dHRvbiIsInF1ZXJpZWRQYWdlIiwicXVlcnlEaXNwbGF5IiwiaGVhZGVyIiwic29ydCIsInJlc3VsdHNTbGlkZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInF1ZXJpZWQiLCJjaGVja1VSTElzU3RyaW5nIiwidG9TdHJpbmciLCJwYXJhbVZhbHVlQXJyYXkiLCJzcGxpdCIsInNlYXJjaFBhcmFtc1ZhbHVlcyIsImZvckVhY2giLCJwYXJhbSIsImluZGV4T2ZFcXVhbCIsInNlYXJjaCIsInBhcmFtS2V5Iiwic3Vic3RyaW5nIiwicGFyYW1WYWx1ZSIsIkFQSUNhbGxzIiwic2VhcmNoUGFyYW1zIiwieWVscFBsYWNlcyIsInllbHBFdmVudHMiLCJ0aWNrZXRtYXN0ZXIiLCJ5ZWxwQnVzaW5lc3Nlc0NhbGwiLCJ5ZWxwQnVzaW5lc3Nlc1Jlc3BvbnNlIiwieWVscEV2ZW50c0NhbGwiLCJ5ZWxwRXZlbnRzUmVzcG9uc2UiLCJ0aWNrZXRNYXN0ZXJDYWxsIiwidGlja2V0TWFzdGVyUmVzcG9uc2UiLCJjYWxsQVBJUyIsIkFQSUNhbGwiLCJ5ZWxwQnVzaW5lc3NlcyIsInRpY2tldE1hc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUVlLFNBQVNBLE9BQVQsT0FHQztBQUFBOztBQUFBOztBQUFBLDBCQUZkQyxPQUVjO0FBQUEsTUFGSEMsS0FFRyxnQkFGSEEsS0FFRztBQUFBLE1BRklDLE1BRUosZ0JBRklBLE1BRUo7QUFBQSxNQURkQyxVQUNjLFFBRGRBLFVBQ2M7O0FBQUEsd0JBQ1lDLDhDQUFBLENBQWU7QUFBRUMsZUFBVyxFQUFFO0FBQWYsR0FBZixDQURaO0FBQUE7QUFBQSxNQUNQQyxLQURPO0FBQUEsTUFDQUMsUUFEQTs7QUFHZEMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7O0FBRUEsTUFBTVMsY0FBd0MsR0FBRyxTQUEzQ0EsY0FBMkMsR0FBTTtBQUNyRCxZQUFRUCxVQUFSO0FBQ0UsV0FBSyxLQUFMO0FBQ0UsWUFBSVEsS0FBSyxDQUFDQyxPQUFOLENBQWNYLEtBQUssQ0FBQ1ksTUFBcEIsS0FBK0JGLEtBQUssQ0FBQ0MsT0FBTixDQUFjWCxLQUFLLENBQUNhLE1BQXBCLENBQW5DLEVBQWdFO0FBQzlELGlCQUFPUixLQUFLLENBQUNELFdBQU4sS0FBc0IsUUFBdEIsR0FDSEosS0FBSyxDQUFDWSxNQUFOLENBQWFFLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLG1CQUNmLE1BQUMsc0RBQUQ7QUFBWSxpQkFBRyxFQUFFQSxJQUFJLENBQUNDLEVBQXRCO0FBQTBCLGtCQUFJLEVBQUVELElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEZTtBQUFBLFdBQWpCLENBREcsR0FJSGYsS0FBSyxDQUFDYSxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLG1CQUNmLE1BQUMsc0RBQUQ7QUFBWSxpQkFBRyxFQUFFQSxJQUFJLENBQUNDLEVBQXRCO0FBQTBCLGtCQUFJLEVBQUVELElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEZTtBQUFBLFdBQWpCLENBSko7QUFPRCxTQVJELE1BUU87QUFDTCxpQkFBTyxJQUFQO0FBQ0Q7O0FBRUgsV0FBSyxRQUFMO0FBQ0UsZUFBT0wsS0FBSyxDQUFDQyxPQUFOLENBQWNYLEtBQUssQ0FBQ1ksTUFBcEIsSUFDSFosS0FBSyxDQUFDWSxNQUFOLENBQWFFLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLGlCQUNmLE1BQUMsc0RBQUQ7QUFBWSxlQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBdEI7QUFBMEIsZ0JBQUksRUFBRUQsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURlO0FBQUEsU0FBakIsQ0FERyxHQUlILElBSko7O0FBS0YsV0FBSyxRQUFMO0FBQ0UsZUFBT0wsS0FBSyxDQUFDQyxPQUFOLENBQWNYLEtBQUssQ0FBQ2EsTUFBcEIsSUFDSGIsS0FBSyxDQUFDYSxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLGlCQUNmLE1BQUMsc0RBQUQ7QUFBWSxlQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBdEI7QUFBMEIsZ0JBQUksRUFBRUQsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURlO0FBQUEsU0FBakIsQ0FERyxHQUlILElBSko7O0FBS0Y7QUFDRSxZQUFJTCxLQUFLLENBQUNDLE9BQU4sQ0FBY1gsS0FBSyxDQUFDWSxNQUFwQixLQUErQkYsS0FBSyxDQUFDQyxPQUFOLENBQWNYLEtBQUssQ0FBQ2EsTUFBcEIsQ0FBbkMsRUFBZ0U7QUFDOUQsaUJBQU9SLEtBQUssQ0FBQ0QsV0FBTixLQUFzQixRQUF0QixHQUNISixLQUFLLENBQUNZLE1BQU4sQ0FBYUUsR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsbUJBQ2YsTUFBQyxzREFBRDtBQUFZLGlCQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBdEI7QUFBMEIsa0JBQUksRUFBRUQsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURlO0FBQUEsV0FBakIsQ0FERyxHQUlIZixLQUFLLENBQUNhLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsbUJBQ2YsTUFBQyxzREFBRDtBQUFZLGlCQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBdEI7QUFBMEIsa0JBQUksRUFBRUQsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURlO0FBQUEsV0FBakIsQ0FKSjtBQU9ELFNBUkQsTUFRTztBQUNMLGlCQUFPLElBQVA7QUFDRDs7QUFyQ0w7QUF1Q0QsR0F4Q0Q7O0FBMENBWixpREFBQSxDQUFnQixZQUFNO0FBQ3BCLFFBQUlELFVBQUosRUFBZ0I7QUFDZCxjQUFRQSxVQUFSO0FBQ0UsYUFBSyxLQUFMO0FBREY7QUFHRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTWUsY0FBaUMsR0FBRyxTQUFwQ0EsY0FBb0MsR0FBTTtBQUM5QyxRQUFJZixVQUFKLEVBQWdCO0FBQ2QsY0FBUUEsVUFBUjtBQUNFLGFBQUssS0FBTDtBQUNFLGlCQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFO0FBQVEscUJBQVMsRUFBRWdCLG1FQUFHLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFRLHFCQUFTLEVBQUVELG1FQUFHLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsQ0FERjs7QUFNRixhQUFLLFFBQUw7QUFDRSxpQkFBTztBQUFRLHFCQUFTLEVBQUVELG1FQUFHLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQVA7O0FBRUYsYUFBSyxRQUFMO0FBQ0UsaUJBQU87QUFBUSxxQkFBUyxFQUFFRCxtRUFBRyxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFQOztBQUNGO0FBQ0UsaUJBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFBUSxxQkFBUyxFQUFFRCxtRUFBRyxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBUSxxQkFBUyxFQUFFRCxtRUFBRyxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLENBREY7QUFkSjtBQXFCRCxLQXRCRCxNQXNCTztBQUNMLGFBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUSxpQkFBUyxFQUFFRCxtRUFBRyxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBUSxpQkFBUyxFQUFFRCxtRUFBRyxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLENBREY7QUFNRDtBQUNGLEdBL0JEOztBQWlDQSxTQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFRCxtRUFBRyxDQUFDRSxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUVGLG1FQUFHLENBQUNHLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVMsYUFBUyxFQUFFSCxtRUFBRyxDQUFDSSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLGNBQWMsRUFEakIsRUFFRTtBQUFRLGFBQVMsRUFBRUMsbUVBQUcsQ0FBQ0ssSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLENBRkYsRUFNRTtBQUFTLGFBQVMsRUFBRUwsbUVBQUcsQ0FBQ25CLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRW1CLG1FQUFHLENBQUNNLGFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0NmLGNBQWMsRUFBbEQsQ0FERixDQU5GLENBREYsQ0FERjtBQWNEOztHQXpHdUJYLE87O0tBQUFBLE87O0FBb0h4QkEsT0FBTyxDQUFDMkIsZUFBUjtBQUFBLCtMQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJDLGlCQUR3QixTQUN4QkEsS0FEd0I7O0FBQUEsaUJBR3BCQSxLQUFLLENBQUNDLE9BSGM7QUFBQTtBQUFBO0FBQUE7O0FBSWhCQyw0QkFKZ0IsR0FJV0YsS0FBSyxDQUFDQyxPQUFOLENBQWNFLFFBQWQsRUFKWDtBQUtoQkMsMkJBTGdCLEdBS1lGLGdCQUFnQixDQUFDRyxLQUFqQixDQUF1QixHQUF2QixDQUxaO0FBT2hCQyw4QkFQZ0IsR0FPbUIsRUFQbkI7QUFTdEJGLDJCQUFlLENBQUNHLE9BQWhCLENBQXdCLFVBQUNDLEtBQUQsRUFBVztBQUNqQyxrQkFBTUMsWUFBb0IsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWEsR0FBYixDQUE3QjtBQUNBLGtCQUFJRCxZQUFZLEtBQUssQ0FBQyxDQUF0QixFQUF5QixPQUF6QixLQUNLO0FBQ0gsb0JBQU1FLFFBQWdCLEdBQUdILEtBQUssQ0FBQ0ksU0FBTixDQUFnQixDQUFoQixFQUFtQkgsWUFBbkIsQ0FBekI7QUFDQSxvQkFBTUksVUFBa0IsR0FBR0wsS0FBSyxDQUFDSSxTQUFOLENBQWdCSCxZQUFZLEdBQUcsQ0FBL0IsQ0FBM0I7QUFDQUgsa0NBQWtCLENBQUNLLFFBQUQsQ0FBbEIsR0FBK0JFLFVBQS9CO0FBQ0Q7QUFDRixhQVJEOztBQVVNQyxvQkFuQmdCO0FBc0JwQixnQ0FBWUMsWUFBWixFQUF3QztBQUFBOztBQUFBOztBQUFBOztBQUN0QyxxQkFBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxxQkFBSzFDLE9BQUwsR0FBZTtBQUNiQyx1QkFBSyxFQUFFO0FBQUVZLDBCQUFNLEVBQUUsRUFBVjtBQUFjQywwQkFBTSxFQUFFO0FBQXRCLG1CQURNO0FBRWJaLHdCQUFNLEVBQUU7QUFBRXlDLDhCQUFVLEVBQUUsRUFBZDtBQUFrQkMsOEJBQVUsRUFBRSxFQUE5QjtBQUFrQ0MsZ0NBQVksRUFBRTtBQUFoRDtBQUZLLGlCQUFmO0FBSUQ7O0FBNUJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQStCZ0NDLG9FQUFrQixDQUNsRSxLQUFLSixZQUQ2RCxDQS9CbEQ7O0FBQUE7QUErQlpLLGtEQS9CWTtBQWtDbEJwQyxpQ0FBSyxDQUFDQyxPQUFOLENBQWNtQyxzQkFBZCxJQUNLLEtBQUsvQyxPQUFMLENBQWFDLEtBQWIsQ0FBbUJZLE1BQW5CLEdBQTRCa0Msc0JBRGpDLEdBRUssS0FBSy9DLE9BQUwsQ0FBYUUsTUFBYixDQUFvQnlDLFVBQXBCLGFBQW9DSSxzQkFBcEMsQ0FGTDs7QUFsQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0F1QzRCQyxnRUFBYyxDQUMxRCxLQUFLTixZQURxRCxDQXZDMUM7O0FBQUE7QUF1Q1pPLDhDQXZDWTtBQTBDbEJ0QyxpQ0FBSyxDQUFDQyxPQUFOLENBQWNxQyxrQkFBZCxJQUNLLEtBQUtqRCxPQUFMLENBQWFDLEtBQWIsQ0FBbUJhLE1BQW5CLDBHQUNJLEtBQUtkLE9BQUwsQ0FBYUMsS0FBYixDQUFtQmEsTUFEdkIsZ0dBRUltQyxrQkFGSixFQURMLEdBS0ssS0FBS2pELE9BQUwsQ0FBYUUsTUFBYixDQUFvQjBDLFVBQXBCLGFBQW9DSyxrQkFBcEMsQ0FMTDs7QUExQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FrRDhCQyxrRUFBZ0IsQ0FDOUQsS0FBS1IsWUFEeUQsQ0FsRDlDOztBQUFBO0FBa0RaUyxnREFsRFk7QUFxRGxCeEMsaUNBQUssQ0FBQ0MsT0FBTixDQUFjdUMsb0JBQWQsSUFDSyxLQUFLbkQsT0FBTCxDQUFhQyxLQUFiLENBQW1CYSxNQUFuQiwwR0FDSSxLQUFLZCxPQUFMLENBQWFDLEtBQWIsQ0FBbUJhLE1BRHZCLGdHQUVJcUMsb0JBRkosRUFETCxHQUtLLEtBQUtuRCxPQUFMLENBQWFFLE1BQWIsQ0FBb0IyQyxZQUFwQixhQUFzQ00sb0JBQXRDLENBTEw7O0FBckRrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBOERoQkMsb0JBOURnQjtBQUFBLDJNQThEcUMsa0JBQ3pEakQsVUFEeUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR25Ea0QsK0JBSG1ELEdBR3pDLElBQUlaLFFBQUosQ0FBYVIsa0JBQWIsQ0FIeUM7QUFBQTtBQUFBLHVDQU0vQzlCLFVBTitDO0FBQUEsMERBT2hELFFBUGdELHdCQVloRCxRQVpnRCx3QkFnQmhELEtBaEJnRDtBQUFBOztBQUFBO0FBUW5Ea0QsK0JBQU8sQ0FBQ0MsY0FBUjtBQVJtRCwwREFVNUNELE9BQU8sQ0FBQ3JELE9BVm9DOztBQUFBO0FBYW5EcUQsK0JBQU8sQ0FBQ1QsVUFBUjtBQUNBUywrQkFBTyxDQUFDRSxZQUFSO0FBZG1ELDBEQWU1Q0YsT0FBTyxDQUFDckQsT0Fmb0M7O0FBQUE7QUFpQm5EcUQsK0JBQU8sQ0FBQ0MsY0FBUjtBQUNBRCwrQkFBTyxDQUFDVCxVQUFSO0FBQ0FTLCtCQUFPLENBQUNFLFlBQVI7QUFuQm1ELDBEQW9CNUNGLE9BQU8sQ0FBQ3JELE9BcEJvQzs7QUFBQTtBQXNCbkRxRCwrQkFBTyxDQUFDQyxjQUFSO0FBQ0FELCtCQUFPLENBQUNULFVBQVI7QUFDQVMsK0JBQU8sQ0FBQ0UsWUFBUjtBQXhCbUQsMERBeUI1Q0YsT0FBTyxDQUFDckQsT0F6Qm9DOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0QnZEcUQsK0JBQU8sQ0FBQ3JELE9BQVIsQ0FBZ0JFLE1BQWhCLENBQXVCeUMsVUFBdkIsR0FBb0MsWUFBcEM7QUFDQVUsK0JBQU8sQ0FBQ3JELE9BQVIsQ0FBZ0JFLE1BQWhCLENBQXVCMEMsVUFBdkIsR0FBb0MsWUFBcEM7QUFDQVMsK0JBQU8sQ0FBQ3JELE9BQVIsQ0FBZ0JFLE1BQWhCLENBQXVCMkMsWUFBdkIsR0FBc0MsWUFBdEM7QUE5QnVELDBEQStCaERRLE9BQU8sQ0FBQ3JELE9BL0J3Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlEckM7O0FBQUEsOEJBOERoQm9ELFFBOURnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQWlHU0EsUUFBUSxDQUFDbkIsa0JBQWtCLENBQUM5QixVQUFwQixDQWpHakI7O0FBQUE7QUFpR2hCSCxtQkFqR2dCO0FBQUEsOENBbUdmO0FBQ0xBLHFCQUFPLEVBQVBBLE9BREs7QUFFTEcsd0JBQVUsRUFBRThCLGtCQUFrQixDQUFDOUI7QUFGMUIsYUFuR2U7O0FBQUE7QUFBQSw4Q0F3R2Y7QUFBRUgscUJBQU8sRUFBRSxFQUFYO0FBQWVHLHdCQUFVLEVBQUU7QUFBM0IsYUF4R2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1txdWVyaWVkXS5lNmQ3ODg1ZjBhNDAwMjExNjc4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCwgUmVzdWx0Q2FyZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgeWVscEJ1c2luZXNzZXNDYWxsLFxyXG4gIHllbHBFdmVudHNDYWxsLFxyXG4gIHRpY2tldE1hc3RlckNhbGwsXHJcbn0gZnJvbSBcIi4uLy4uL2FwaWNhbGxzXCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4uLy4uL3N0eWxlcy9RdWVyaWVkLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVyaWVkKHtcclxuICByZXN1bHRzOiB7IGl0ZW1zLCBlcnJvcnMgfSxcclxuICBzZWFyY2hUeXBlLFxyXG59KTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoeyByZXN1bHRzVHlwZTogXCJQbGFjZXNcIiB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coaXRlbXMpO1xyXG5cclxuICBjb25zdCBkZXRlcm1pbmVJdGVtczogKCkgPT4gSlNYLkVsZW1lbnQgfCBudWxsID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChzZWFyY2hUeXBlKSB7XHJcbiAgICAgIGNhc2UgXCJBTExcIjpcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcy5wbGFjZXMpICYmIEFycmF5LmlzQXJyYXkoaXRlbXMuZXZlbnRzKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlLnJlc3VsdHNUeXBlID09PSBcIlBsYWNlc1wiXHJcbiAgICAgICAgICAgID8gaXRlbXMucGxhY2VzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlc3VsdENhcmQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfT48L1Jlc3VsdENhcmQ+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgOiBpdGVtcy5ldmVudHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmVzdWx0Q2FyZCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19PjwvUmVzdWx0Q2FyZD5cclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBcIlBMQUNFU1wiOlxyXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGl0ZW1zLnBsYWNlcylcclxuICAgICAgICAgID8gaXRlbXMucGxhY2VzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXN1bHRDYXJkIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0+PC9SZXN1bHRDYXJkPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgICBjYXNlIFwiRVZFTlRTXCI6XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbXMuZXZlbnRzKVxyXG4gICAgICAgICAgPyBpdGVtcy5ldmVudHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlc3VsdENhcmQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfT48L1Jlc3VsdENhcmQ+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IG51bGw7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMucGxhY2VzKSAmJiBBcnJheS5pc0FycmF5KGl0ZW1zLmV2ZW50cykpIHtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZS5yZXN1bHRzVHlwZSA9PT0gXCJQbGFjZXNcIlxyXG4gICAgICAgICAgICA/IGl0ZW1zLnBsYWNlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxSZXN1bHRDYXJkIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0+PC9SZXN1bHRDYXJkPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDogaXRlbXMuZXZlbnRzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlc3VsdENhcmQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfT48L1Jlc3VsdENhcmQ+XHJcbiAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaFR5cGUpIHtcclxuICAgICAgc3dpdGNoIChzZWFyY2hUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkFMTFwiOlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNldFR5cGVCdXR0b25zOiAoKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICAgIGlmIChzZWFyY2hUeXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoc2VhcmNoVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJBTExcIjpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnR5cGVCdXR0b259PlBsYWNlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3MudHlwZUJ1dHRvbn0+RXZlbnRzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJQTEFDRVNcIjpcclxuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnR5cGVCdXR0b259PlBsYWNlczwvYnV0dG9uPjtcclxuXHJcbiAgICAgICAgY2FzZSBcIkVWRU5UU1wiOlxyXG4gICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtjc3MudHlwZUJ1dHRvbn0+RXZlbnRzPC9idXR0b24+O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy50eXBlQnV0dG9ufT5QbGFjZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnR5cGVCdXR0b259PkV2ZW50czwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnR5cGVCdXR0b259PlBsYWNlczwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy50eXBlQnV0dG9ufT5FdmVudHM8L2J1dHRvbj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Nzcy5xdWVyaWVkUGFnZX0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MucXVlcnlEaXNwbGF5fT48L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MuaGVhZGVyfT5cclxuICAgICAgICAgIHtzZXRUeXBlQnV0dG9ucygpfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy5zb3J0fT5Tb3J0PC9idXR0b24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzLnJlc3VsdHN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yZXN1bHRzU2xpZGVyfT57ZGV0ZXJtaW5lSXRlbXMoKX08L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbnR5cGUgUmVzdWx0cyA9IHtcclxuICBpdGVtczogeyBwbGFjZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH1bXTsgZXZlbnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W10gfTtcclxuICBlcnJvcnM6IHsgeWVscFBsYWNlczogc3RyaW5nOyB5ZWxwRXZlbnRzOiBzdHJpbmc7IHRpY2tldG1hc3Rlcjogc3RyaW5nIH07XHJcbn07XHJcblxyXG50eXBlIEFQSVJlc3BvbnNlID0gUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueSB9W10gfCBzdHJpbmc+O1xyXG5cclxudHlwZSBTZWFyY2hQYXJhbXMgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG5cclxuUXVlcmllZC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe1xyXG4gIHF1ZXJ5LFxyXG59KTogUHJvbWlzZTx7IHJlc3VsdHM6IGFueTsgc2VhcmNoVHlwZTogc3RyaW5nIH0+ID0+IHtcclxuICBpZiAocXVlcnkucXVlcmllZCkge1xyXG4gICAgY29uc3QgY2hlY2tVUkxJc1N0cmluZzogc3RyaW5nID0gcXVlcnkucXVlcmllZC50b1N0cmluZygpO1xyXG4gICAgY29uc3QgcGFyYW1WYWx1ZUFycmF5OiBzdHJpbmdbXSA9IGNoZWNrVVJMSXNTdHJpbmcuc3BsaXQoXCIrXCIpO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtc1ZhbHVlczogU2VhcmNoUGFyYW1zID0ge307XHJcblxyXG4gICAgcGFyYW1WYWx1ZUFycmF5LmZvckVhY2goKHBhcmFtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4T2ZFcXVhbDogbnVtYmVyID0gcGFyYW0uc2VhcmNoKFwiPVwiKTtcclxuICAgICAgaWYgKGluZGV4T2ZFcXVhbCA9PT0gLTEpIHJldHVybjtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1LZXk6IHN0cmluZyA9IHBhcmFtLnN1YnN0cmluZygwLCBpbmRleE9mRXF1YWwpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtVmFsdWU6IHN0cmluZyA9IHBhcmFtLnN1YnN0cmluZyhpbmRleE9mRXF1YWwgKyAxKTtcclxuICAgICAgICBzZWFyY2hQYXJhbXNWYWx1ZXNbcGFyYW1LZXldID0gcGFyYW1WYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xhc3MgQVBJQ2FsbHMge1xyXG4gICAgICBzZWFyY2hQYXJhbXM6IFNlYXJjaFBhcmFtcztcclxuICAgICAgcmVzdWx0czogUmVzdWx0cztcclxuICAgICAgY29uc3RydWN0b3Ioc2VhcmNoUGFyYW1zOiBTZWFyY2hQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcyA9IHNlYXJjaFBhcmFtcztcclxuICAgICAgICB0aGlzLnJlc3VsdHMgPSB7XHJcbiAgICAgICAgICBpdGVtczogeyBwbGFjZXM6IFtdLCBldmVudHM6IFtdIH0sXHJcbiAgICAgICAgICBlcnJvcnM6IHsgeWVscFBsYWNlczogXCJcIiwgeWVscEV2ZW50czogXCJcIiwgdGlja2V0bWFzdGVyOiBcIlwiIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGFzeW5jIHllbHBCdXNpbmVzc2VzKCkge1xyXG4gICAgICAgIGNvbnN0IHllbHBCdXNpbmVzc2VzUmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgeWVscEJ1c2luZXNzZXNDYWxsKFxyXG4gICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXNcclxuICAgICAgICApO1xyXG4gICAgICAgIEFycmF5LmlzQXJyYXkoeWVscEJ1c2luZXNzZXNSZXNwb25zZSlcclxuICAgICAgICAgID8gKHRoaXMucmVzdWx0cy5pdGVtcy5wbGFjZXMgPSB5ZWxwQnVzaW5lc3Nlc1Jlc3BvbnNlKVxyXG4gICAgICAgICAgOiAodGhpcy5yZXN1bHRzLmVycm9ycy55ZWxwUGxhY2VzID0gYCR7eWVscEJ1c2luZXNzZXNSZXNwb25zZX1gKTtcclxuICAgICAgfVxyXG4gICAgICBwdWJsaWMgYXN5bmMgeWVscEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCB5ZWxwRXZlbnRzUmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgeWVscEV2ZW50c0NhbGwoXHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheSh5ZWxwRXZlbnRzUmVzcG9uc2UpXHJcbiAgICAgICAgICA/ICh0aGlzLnJlc3VsdHMuaXRlbXMuZXZlbnRzID0gW1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMucmVzdWx0cy5pdGVtcy5ldmVudHMsXHJcbiAgICAgICAgICAgICAgLi4ueWVscEV2ZW50c1Jlc3BvbnNlLFxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgOiAodGhpcy5yZXN1bHRzLmVycm9ycy55ZWxwRXZlbnRzID0gYCR7eWVscEV2ZW50c1Jlc3BvbnNlfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHB1YmxpYyBhc3luYyB0aWNrZXRNYXN0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGlja2V0TWFzdGVyUmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgdGlja2V0TWFzdGVyQ2FsbChcclxuICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBBcnJheS5pc0FycmF5KHRpY2tldE1hc3RlclJlc3BvbnNlKVxyXG4gICAgICAgICAgPyAodGhpcy5yZXN1bHRzLml0ZW1zLmV2ZW50cyA9IFtcclxuICAgICAgICAgICAgICAuLi50aGlzLnJlc3VsdHMuaXRlbXMuZXZlbnRzLFxyXG4gICAgICAgICAgICAgIC4uLnRpY2tldE1hc3RlclJlc3BvbnNlLFxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgOiAodGhpcy5yZXN1bHRzLmVycm9ycy50aWNrZXRtYXN0ZXIgPSBgJHt0aWNrZXRNYXN0ZXJSZXNwb25zZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGxBUElTOiAoc2VhcmNoVHlwZTogc3RyaW5nKSA9PiBQcm9taXNlPFJlc3VsdHM+ID0gYXN5bmMgKFxyXG4gICAgICBzZWFyY2hUeXBlXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgQVBJQ2FsbCA9IG5ldyBBUElDYWxscyhzZWFyY2hQYXJhbXNWYWx1ZXMpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzd2l0Y2ggKHNlYXJjaFR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgXCJQTEFDRVNcIjpcclxuICAgICAgICAgICAgQVBJQ2FsbC55ZWxwQnVzaW5lc3NlcygpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEFQSUNhbGwucmVzdWx0cztcclxuXHJcbiAgICAgICAgICBjYXNlIFwiRVZFTlRTXCI6XHJcbiAgICAgICAgICAgIEFQSUNhbGwueWVscEV2ZW50cygpO1xyXG4gICAgICAgICAgICBBUElDYWxsLnRpY2tldE1hc3RlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gQVBJQ2FsbC5yZXN1bHRzO1xyXG4gICAgICAgICAgY2FzZSBcIkFMTFwiOlxyXG4gICAgICAgICAgICBBUElDYWxsLnllbHBCdXNpbmVzc2VzKCk7XHJcbiAgICAgICAgICAgIEFQSUNhbGwueWVscEV2ZW50cygpO1xyXG4gICAgICAgICAgICBBUElDYWxsLnRpY2tldE1hc3RlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gQVBJQ2FsbC5yZXN1bHRzO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgQVBJQ2FsbC55ZWxwQnVzaW5lc3NlcygpO1xyXG4gICAgICAgICAgICBBUElDYWxsLnllbHBFdmVudHMoKTtcclxuICAgICAgICAgICAgQVBJQ2FsbC50aWNrZXRNYXN0ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIEFQSUNhbGwucmVzdWx0cztcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIEFQSUNhbGwucmVzdWx0cy5lcnJvcnMueWVscFBsYWNlcyA9IFwiQ0FMTCBFUlJPUlwiO1xyXG4gICAgICAgIEFQSUNhbGwucmVzdWx0cy5lcnJvcnMueWVscEV2ZW50cyA9IFwiQ0FMTCBFUlJPUlwiO1xyXG4gICAgICAgIEFQSUNhbGwucmVzdWx0cy5lcnJvcnMudGlja2V0bWFzdGVyID0gXCJDQUxMIEVSUk9SXCI7XHJcbiAgICAgICAgcmV0dXJuIEFQSUNhbGwucmVzdWx0cztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRzOiBSZXN1bHRzID0gYXdhaXQgY2FsbEFQSVMoc2VhcmNoUGFyYW1zVmFsdWVzLnNlYXJjaFR5cGUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3VsdHMsXHJcbiAgICAgIHNlYXJjaFR5cGU6IHNlYXJjaFBhcmFtc1ZhbHVlcy5zZWFyY2hUeXBlLFxyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHsgcmVzdWx0czoge30sIHNlYXJjaFR5cGU6IFwiQUxMXCIgfTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=