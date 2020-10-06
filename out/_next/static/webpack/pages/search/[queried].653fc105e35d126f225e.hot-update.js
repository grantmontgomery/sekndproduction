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
    resultsType: ""
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  console.log(items);
  console.log(items.events);

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
                lineNumber: 26,
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
                lineNumber: 29,
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
              lineNumber: 38,
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
              lineNumber: 44,
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
                lineNumber: 51,
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
                lineNumber: 54,
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
          return setState({
            resultsType: "Places"
          });

        case "EVENTS":
          return setState({
            resultsType: "Events"
          });
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
              lineNumber: 78,
              columnNumber: 13
            }
          }, __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }
          }, "Places"), __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }
          }, "Events"));

        case "PLACES":
          return __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 18
            }
          }, "Places");

        case "EVENTS":
          return __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 18
            }
          }, "Events");

        default:
          return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 13
            }
          }, __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }
          }, "Places"), __jsx("button", {
            className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }
          }, "Events"));
      }
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, __jsx("button", {
        className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, "Places"), __jsx("button", {
        className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.typeButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }, "Events"));
    }
  };

  return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.queriedPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.queryDisplay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx("section", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, setTypeButtons(), __jsx("button", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.sort,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "Sort")), __jsx("section", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.results,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_Queried_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.resultsSlider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, determineItems()))));
}

_s(Queried, "IMZgU6u6YjTbWlHz+JGfUpzN6o8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1txdWVyaWVkXS50c3giXSwibmFtZXMiOlsiUXVlcmllZCIsInJlc3VsdHMiLCJpdGVtcyIsImVycm9ycyIsInNlYXJjaFR5cGUiLCJSZWFjdCIsInJlc3VsdHNUeXBlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJkZXRlcm1pbmVJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInBsYWNlcyIsIm1hcCIsIml0ZW0iLCJpZCIsInNldFR5cGVCdXR0b25zIiwiY3NzIiwidHlwZUJ1dHRvbiIsInF1ZXJpZWRQYWdlIiwicXVlcnlEaXNwbGF5IiwiaGVhZGVyIiwic29ydCIsInJlc3VsdHNTbGlkZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInF1ZXJpZWQiLCJjaGVja1VSTElzU3RyaW5nIiwidG9TdHJpbmciLCJwYXJhbVZhbHVlQXJyYXkiLCJzcGxpdCIsInNlYXJjaFBhcmFtc1ZhbHVlcyIsImZvckVhY2giLCJwYXJhbSIsImluZGV4T2ZFcXVhbCIsInNlYXJjaCIsInBhcmFtS2V5Iiwic3Vic3RyaW5nIiwicGFyYW1WYWx1ZSIsIkFQSUNhbGxzIiwic2VhcmNoUGFyYW1zIiwieWVscFBsYWNlcyIsInllbHBFdmVudHMiLCJ0aWNrZXRtYXN0ZXIiLCJ5ZWxwQnVzaW5lc3Nlc0NhbGwiLCJ5ZWxwQnVzaW5lc3Nlc1Jlc3BvbnNlIiwieWVscEV2ZW50c0NhbGwiLCJ5ZWxwRXZlbnRzUmVzcG9uc2UiLCJ0aWNrZXRNYXN0ZXJDYWxsIiwidGlja2V0TWFzdGVyUmVzcG9uc2UiLCJjYWxsQVBJUyIsIkFQSUNhbGwiLCJ5ZWxwQnVzaW5lc3NlcyIsInRpY2tldE1hc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUVlLFNBQVNBLE9BQVQsT0FHQztBQUFBOztBQUFBOztBQUFB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QjVDRixPQUFPLENBQUNyRCxPQXBCb0M7O0FBQUE7QUFzQm5EcUQsK0JBQU8sQ0FBQ0MsY0FBUjtBQUNBRCwrQkFBTyxDQUFDVCxVQUFSO0FBQ0FTLCtCQUFPLENBQUNFLFlBQVI7QUF4Qm1ELDBEQXlCNUNGLE9BQU8sQ0FBQ3JELE9BekJvQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNEJ2RHFELCtCQUFPLENBQUNyRCxPQUFSLENBQWdCRSxNQUFoQixDQUF1QnlDLFVBQXZCLEdBQW9DLFlBQXBDO0FBQ0FVLCtCQUFPLENBQUNyRCxPQUFSLENBQWdCRSxNQUFoQixDQUF1QjBDLFVBQXZCLEdBQW9DLFlBQXBDO0FBQ0FTLCtCQUFPLENBQUNyRCxPQUFSLENBQWdCRSxNQUFoQixDQUF1QjJDLFlBQXZCLEdBQXNDLFlBQXRDO0FBOUJ1RCwwREErQmhEUSxPQUFPLENBQUNyRCxPQS9Cd0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5RHJDOztBQUFBLDhCQThEaEJvRCxRQTlEZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFpR1NBLFFBQVEsQ0FBQ25CLGtCQUFrQixDQUFDOUIsVUFBcEIsQ0FqR2pCOztBQUFBO0FBaUdoQkgsbUJBakdnQjtBQUFBLDhDQW1HZjtBQUNMQSxxQkFBTyxFQUFQQSxPQURLO0FBRUxHLHdCQUFVLEVBQUU4QixrQkFBa0IsQ0FBQzlCO0FBRjFCLGFBbkdlOztBQUFBO0FBQUEsOENBd0dmO0FBQUVILHFCQUFPLEVBQUUsRUFBWDtBQUFlRyx3QkFBVSxFQUFFO0FBQTNCLGFBeEdlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9bcXVlcmllZF0uNjUzZmMxMDVlMzVkMTI2ZjIyNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQsIFJlc3VsdENhcmQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIHllbHBCdXNpbmVzc2VzQ2FsbCxcclxuICB5ZWxwRXZlbnRzQ2FsbCxcclxuICB0aWNrZXRNYXN0ZXJDYWxsLFxyXG59IGZyb20gXCIuLi8uLi9hcGljYWxsc1wiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuLi8uLi9zdHlsZXMvUXVlcmllZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlcmllZCh7XHJcbiAgcmVzdWx0czogeyBpdGVtcywgZXJyb3JzIH0sXHJcbiAgc2VhcmNoVHlwZSxcclxufSk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHsgcmVzdWx0c1R5cGU6IFwiXCIgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuXHJcbiAgY29uc29sZS5sb2coaXRlbXMuZXZlbnRzKTtcclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lSXRlbXM6ICgpID0+IEpTWC5FbGVtZW50IHwgbnVsbCA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoc2VhcmNoVHlwZSkge1xyXG4gICAgICBjYXNlIFwiQUxMXCI6XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMucGxhY2VzKSAmJiBBcnJheS5pc0FycmF5KGl0ZW1zLmV2ZW50cykpIHtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZS5yZXN1bHRzVHlwZSA9PT0gXCJQbGFjZXNcIlxyXG4gICAgICAgICAgICA/IGl0ZW1zLnBsYWNlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxSZXN1bHRDYXJkIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0+PC9SZXN1bHRDYXJkPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDogaXRlbXMuZXZlbnRzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlc3VsdENhcmQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfT48L1Jlc3VsdENhcmQ+XHJcbiAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJQTEFDRVNcIjpcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtcy5wbGFjZXMpXHJcbiAgICAgICAgICA/IGl0ZW1zLnBsYWNlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8UmVzdWx0Q2FyZCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19PjwvUmVzdWx0Q2FyZD5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogbnVsbDtcclxuICAgICAgY2FzZSBcIkVWRU5UU1wiOlxyXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGl0ZW1zLmV2ZW50cylcclxuICAgICAgICAgID8gaXRlbXMuZXZlbnRzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXN1bHRDYXJkIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0+PC9SZXN1bHRDYXJkPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zLnBsYWNlcykgJiYgQXJyYXkuaXNBcnJheShpdGVtcy5ldmVudHMpKSB7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGUucmVzdWx0c1R5cGUgPT09IFwiUGxhY2VzXCJcclxuICAgICAgICAgICAgPyBpdGVtcy5wbGFjZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8UmVzdWx0Q2FyZCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19PjwvUmVzdWx0Q2FyZD5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6IGl0ZW1zLmV2ZW50cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxSZXN1bHRDYXJkIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0+PC9SZXN1bHRDYXJkPlxyXG4gICAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWFyY2hUeXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoc2VhcmNoVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJBTExcIjpcclxuICAgICAgICAgIHJldHVybiBzZXRTdGF0ZSh7IHJlc3VsdHNUeXBlOiBcIlBsYWNlc1wiIH0pO1xyXG4gICAgICAgIGNhc2UgXCJFVkVOVFNcIjpcclxuICAgICAgICAgIHJldHVybiBzZXRTdGF0ZSh7IHJlc3VsdHNUeXBlOiBcIkV2ZW50c1wiIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNldFR5cGVCdXR0b25zOiAoKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICAgIGlmIChzZWFyY2hUeXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoc2VhcmNoVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJBTExcIjpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnR5cGVCdXR0b259PlBsYWNlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3MudHlwZUJ1dHRvbn0+RXZlbnRzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgXCJQTEFDRVNcIjpcclxuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnR5cGVCdXR0b259PlBsYWNlczwvYnV0dG9uPjtcclxuXHJcbiAgICAgICAgY2FzZSBcIkVWRU5UU1wiOlxyXG4gICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtjc3MudHlwZUJ1dHRvbn0+RXZlbnRzPC9idXR0b24+O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy50eXBlQnV0dG9ufT5QbGFjZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnR5cGVCdXR0b259PkV2ZW50czwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnR5cGVCdXR0b259PlBsYWNlczwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy50eXBlQnV0dG9ufT5FdmVudHM8L2J1dHRvbj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Nzcy5xdWVyaWVkUGFnZX0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MucXVlcnlEaXNwbGF5fT48L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3MuaGVhZGVyfT5cclxuICAgICAgICAgIHtzZXRUeXBlQnV0dG9ucygpfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy5zb3J0fT5Tb3J0PC9idXR0b24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzLnJlc3VsdHN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yZXN1bHRzU2xpZGVyfT57ZGV0ZXJtaW5lSXRlbXMoKX08L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbnR5cGUgUmVzdWx0cyA9IHtcclxuICBpdGVtczogeyBwbGFjZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH1bXTsgZXZlbnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W10gfTtcclxuICBlcnJvcnM6IHsgeWVscFBsYWNlczogc3RyaW5nOyB5ZWxwRXZlbnRzOiBzdHJpbmc7IHRpY2tldG1hc3Rlcjogc3RyaW5nIH07XHJcbn07XHJcblxyXG50eXBlIEFQSVJlc3BvbnNlID0gUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueSB9W10gfCBzdHJpbmc+O1xyXG5cclxudHlwZSBTZWFyY2hQYXJhbXMgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG5cclxuUXVlcmllZC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe1xyXG4gIHF1ZXJ5LFxyXG59KTogUHJvbWlzZTx7IHJlc3VsdHM6IGFueTsgc2VhcmNoVHlwZTogc3RyaW5nIH0+ID0+IHtcclxuICBpZiAocXVlcnkucXVlcmllZCkge1xyXG4gICAgY29uc3QgY2hlY2tVUkxJc1N0cmluZzogc3RyaW5nID0gcXVlcnkucXVlcmllZC50b1N0cmluZygpO1xyXG4gICAgY29uc3QgcGFyYW1WYWx1ZUFycmF5OiBzdHJpbmdbXSA9IGNoZWNrVVJMSXNTdHJpbmcuc3BsaXQoXCIrXCIpO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtc1ZhbHVlczogU2VhcmNoUGFyYW1zID0ge307XHJcblxyXG4gICAgcGFyYW1WYWx1ZUFycmF5LmZvckVhY2goKHBhcmFtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4T2ZFcXVhbDogbnVtYmVyID0gcGFyYW0uc2VhcmNoKFwiPVwiKTtcclxuICAgICAgaWYgKGluZGV4T2ZFcXVhbCA9PT0gLTEpIHJldHVybjtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1LZXk6IHN0cmluZyA9IHBhcmFtLnN1YnN0cmluZygwLCBpbmRleE9mRXF1YWwpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtVmFsdWU6IHN0cmluZyA9IHBhcmFtLnN1YnN0cmluZyhpbmRleE9mRXF1YWwgKyAxKTtcclxuICAgICAgICBzZWFyY2hQYXJhbXNWYWx1ZXNbcGFyYW1LZXldID0gcGFyYW1WYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xhc3MgQVBJQ2FsbHMge1xyXG4gICAgICBzZWFyY2hQYXJhbXM6IFNlYXJjaFBhcmFtcztcclxuICAgICAgcmVzdWx0czogUmVzdWx0cztcclxuICAgICAgY29uc3RydWN0b3Ioc2VhcmNoUGFyYW1zOiBTZWFyY2hQYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcyA9IHNlYXJjaFBhcmFtcztcclxuICAgICAgICB0aGlzLnJlc3VsdHMgPSB7XHJcbiAgICAgICAgICBpdGVtczogeyBwbGFjZXM6IFtdLCBldmVudHM6IFtdIH0sXHJcbiAgICAgICAgICBlcnJvcnM6IHsgeWVscFBsYWNlczogXCJcIiwgeWVscEV2ZW50czogXCJcIiwgdGlja2V0bWFzdGVyOiBcIlwiIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGFzeW5jIHllbHBCdXNpbmVzc2VzKCkge1xyXG4gICAgICAgIGNvbnN0IHllbHBCdXNpbmVzc2VzUmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgeWVscEJ1c2luZXNzZXNDYWxsKFxyXG4gICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXNcclxuICAgICAgICApO1xyXG4gICAgICAgIEFycmF5LmlzQXJyYXkoeWVscEJ1c2luZXNzZXNSZXNwb25zZSlcclxuICAgICAgICAgID8gKHRoaXMucmVzdWx0cy5pdGVtcy5wbGFjZXMgPSB5ZWxwQnVzaW5lc3Nlc1Jlc3BvbnNlKVxyXG4gICAgICAgICAgOiAodGhpcy5yZXN1bHRzLmVycm9ycy55ZWxwUGxhY2VzID0gYCR7eWVscEJ1c2luZXNzZXNSZXNwb25zZX1gKTtcclxuICAgICAgfVxyXG4gICAgICBwdWJsaWMgYXN5bmMgeWVscEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCB5ZWxwRXZlbnRzUmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgeWVscEV2ZW50c0NhbGwoXHJcbiAgICAgICAgICB0aGlzLnNlYXJjaFBhcmFtc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheSh5ZWxwRXZlbnRzUmVzcG9uc2UpXHJcbiAgICAgICAgICA/ICh0aGlzLnJlc3VsdHMuaXRlbXMuZXZlbnRzID0gW1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMucmVzdWx0cy5pdGVtcy5ldmVudHMsXHJcbiAgICAgICAgICAgICAgLi4ueWVscEV2ZW50c1Jlc3BvbnNlLFxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgOiAodGhpcy5yZXN1bHRzLmVycm9ycy55ZWxwRXZlbnRzID0gYCR7eWVscEV2ZW50c1Jlc3BvbnNlfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHB1YmxpYyBhc3luYyB0aWNrZXRNYXN0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGlja2V0TWFzdGVyUmVzcG9uc2U6IEFQSVJlc3BvbnNlID0gYXdhaXQgdGlja2V0TWFzdGVyQ2FsbChcclxuICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBBcnJheS5pc0FycmF5KHRpY2tldE1hc3RlclJlc3BvbnNlKVxyXG4gICAgICAgICAgPyAodGhpcy5yZXN1bHRzLml0ZW1zLmV2ZW50cyA9IFtcclxuICAgICAgICAgICAgICAuLi50aGlzLnJlc3VsdHMuaXRlbXMuZXZlbnRzLFxyXG4gICAgICAgICAgICAgIC4uLnRpY2tldE1hc3RlclJlc3BvbnNlLFxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgOiAodGhpcy5yZXN1bHRzLmVycm9ycy50aWNrZXRtYXN0ZXIgPSBgJHt0aWNrZXRNYXN0ZXJSZXNwb25zZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGxBUElTOiAoc2VhcmNoVHlwZTogc3RyaW5nKSA9PiBQcm9taXNlPFJlc3VsdHM+ID0gYXN5bmMgKFxyXG4gICAgICBzZWFyY2hUeXBlXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgQVBJQ2FsbCA9IG5ldyBBUElDYWxscyhzZWFyY2hQYXJhbXNWYWx1ZXMpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzd2l0Y2ggKHNlYXJjaFR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgXCJQTEFDRVNcIjpcclxuICAgICAgICAgICAgQVBJQ2FsbC55ZWxwQnVzaW5lc3NlcygpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEFQSUNhbGwucmVzdWx0cztcclxuXHJcbiAgICAgICAgICBjYXNlIFwiRVZFTlRTXCI6XHJcbiAgICAgICAgICAgIEFQSUNhbGwueWVscEV2ZW50cygpO1xyXG4gICAgICAgICAgICBBUElDYWxsLnRpY2tldE1hc3RlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gQVBJQ2FsbC5yZXN1bHRzO1xyXG4gICAgICAgICAgY2FzZSBcIkFMTFwiOlxyXG4gICAgICAgICAgICBBUElDYWxsLnllbHBCdXNpbmVzc2VzKCk7XHJcbiAgICAgICAgICAgIEFQSUNhbGwueWVscEV2ZW50cygpO1xyXG4gICAgICAgICAgICBBUElDYWxsLnRpY2tldE1hc3RlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gQVBJQ2FsbC5yZXN1bHRzO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgQVBJQ2FsbC55ZWxwQnVzaW5lc3NlcygpO1xyXG4gICAgICAgICAgICBBUElDYWxsLnllbHBFdmVudHMoKTtcclxuICAgICAgICAgICAgQVBJQ2FsbC50aWNrZXRNYXN0ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIEFQSUNhbGwucmVzdWx0cztcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIEFQSUNhbGwucmVzdWx0cy5lcnJvcnMueWVscFBsYWNlcyA9IFwiQ0FMTCBFUlJPUlwiO1xyXG4gICAgICAgIEFQSUNhbGwucmVzdWx0cy5lcnJvcnMueWVscEV2ZW50cyA9IFwiQ0FMTCBFUlJPUlwiO1xyXG4gICAgICAgIEFQSUNhbGwucmVzdWx0cy5lcnJvcnMudGlja2V0bWFzdGVyID0gXCJDQUxMIEVSUk9SXCI7XHJcbiAgICAgICAgcmV0dXJuIEFQSUNhbGwucmVzdWx0cztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRzOiBSZXN1bHRzID0gYXdhaXQgY2FsbEFQSVMoc2VhcmNoUGFyYW1zVmFsdWVzLnNlYXJjaFR5cGUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3VsdHMsXHJcbiAgICAgIHNlYXJjaFR5cGU6IHNlYXJjaFBhcmFtc1ZhbHVlcy5zZWFyY2hUeXBlLFxyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHsgcmVzdWx0czoge30sIHNlYXJjaFR5cGU6IFwiQUxMXCIgfTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=