"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...route_name]]",{

/***/ "./src/components/speakers/SpeakerList.js":
/*!************************************************!*\
  !*** ./src/components/speakers/SpeakerList.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App */ \"./src/App.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfunction List(param) {\n    var state = param.state, dispatch = param.dispatch;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {\n        var speakerRecUpdated = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        });\n        dispatch({\n            type: \"updateSpeaker\",\n            speaker: speakerRecUpdated\n        });\n        function updateAsync(rec) {\n            return _updateAsync.apply(this, arguments);\n        }\n        function _updateAsync() {\n            _updateAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(rec) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            setUpdatingId(rec.id);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_4___default().put(\"/api/speakers/\".concat(rec.id), speakerRecUpdated)\n                            ];\n                        case 1:\n                            _state.sent();\n                            setUpdatingId(0);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _updateAsync.apply(this, arguments);\n        }\n        updateAsync(speakerRecUpdated);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), updatingId = ref[0], setUpdatingId = ref[1];\n    var isPending = false;\n    var speakers1 = state.speakers;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {\n                                        filterSpeakers;\n                                    },\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers1.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(List, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = List;\nvar SpeakerList = function() {\n    var reducer = function reducer(state, action) {\n        switch(action.type){\n            case \"speakersLoaded\":\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, state), {\n                    loading: false,\n                    speakers: action.speakers\n                });\n            case \"setLoadingStatus\":\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, state), {\n                    loading: true\n                });\n            case \"updateSpeaker\":\n                var speakersUpdated = state.speakers.map(function(rec) {\n                    return action.speaker.id === rec.id ? action.speaker : rec;\n                });\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, state), {\n                    speakers: speakersUpdated\n                });\n            /* case \"filterSpeakers\":\n          const speakerResult = speakers.filter(\n            speaker => speaker.firstName.includes(searchItem)\n          )\n          setSpeakers(speakerResult);*/ default:\n                throw new Error(\"case failure.  type: \".concat(action.type));\n        }\n    };\n    var updateSpeaker = function updateSpeaker(speakerRec) {\n        var speakerUpdated = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(speakerUpdated);\n    };\n    _s1();\n    var darkTheme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_App__WEBPACK_IMPORTED_MODULE_3__.ThemeContext).darkTheme;\n    var initialState = {\n        speakers: [],\n        loading: true,\n        updateItem: function() {},\n        searchItem: \"\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState), state = ref[0], dispatch = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n                var results;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            dispatch({\n                                type: \"setLoadingStatus\"\n                            });\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/api/speakers\")\n                            ];\n                        case 1:\n                            results = _state.sent();\n                            dispatch({\n                                type: \"speakersLoaded\",\n                                speakers: results.data\n                            });\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    if (state.loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 123,\n        columnNumber: 29\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            state: state,\n            dispatch: dispatch\n        }, void 0, false, {\n            fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\formations2024\\\\09-11-Advanced React-Docapost-FP\\\\projets de demonstration\\\\4.hooks\\\\state-management-with-hooks\\\\src\\\\components\\\\speakers\\\\SpeakerList.js\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SpeakerList, \"OQuGm7fCTUSdXQGP4rF9nuj1/Do=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBd0M7QUFDNEI7QUFDM0I7QUFDZjtBQUUxQixTQUFTTyxJQUFJLENBQUMsS0FBbUIsRUFBRTtRQUFuQkMsS0FBSyxHQUFQLEtBQW1CLENBQWpCQSxLQUFLLEVBQUVDLFFBQVEsR0FBakIsS0FBbUIsQ0FBVkEsUUFBUTtRQUtwQkMscUJBQXFCLEdBQTlCLFNBQVNBLHFCQUFxQixDQUFDQyxVQUFVLEVBQUU7UUFDekMsSUFBTUMsaUJBQWlCLEdBQUcsd0tBQ3JCRCxVQUFVO1lBQ2JFLFFBQVEsRUFBRSxDQUFDRixVQUFVLENBQUNFLFFBQVE7VUFDL0I7UUFDREosUUFBUSxDQUFDO1lBQUVLLElBQUksRUFBRSxlQUFlO1lBQUVDLE9BQU8sRUFBRUgsaUJBQWlCO1NBQUUsQ0FBQyxDQUFDO2lCQUNqREksV0FBVyxDQUFDQyxHQUFHO21CQUFmRCxZQUFXOztpQkFBWEEsWUFBVztZQUFYQSxZQUFXLEdBQTFCLDZGQUEyQkMsR0FBRyxFQUFFOzs7OzRCQUM5QkMsYUFBYSxDQUFDRCxHQUFHLENBQUNFLEVBQUUsQ0FBQyxDQUFDOzRCQUN0Qjs7Z0NBQU1iLGdEQUFTLENBQUMsZ0JBQWUsQ0FBUyxPQUFQVyxHQUFHLENBQUNFLEVBQUUsQ0FBRSxFQUFFUCxpQkFBaUIsQ0FBQzs4QkFBQTs7NEJBQTdELGFBQTZELENBQUM7NEJBQzlETSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztZQUNuQixDQUFDO21CQUpjRixZQUFXOztRQUsxQkEsV0FBVyxDQUFDSixpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O0lBaEJELElBQW9DUixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDaUIsVUFBVSxHQUFtQmpCLEdBQVcsR0FBOUIsRUFBRWMsYUFBYSxHQUFJZCxHQUFXLEdBQWY7SUFDaEMsSUFBTWtCLFNB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QztJQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFXUCxJQUFJM0MsS0FBSyxDQUFDaUMsT0FBTyxFQUFFLHFCQUFPLDhEQUFDakIsS0FBRztrQkFBQyxZQUFVOzs7OzthQUFNLENBQUM7SUFFaEQscUJBQ0UsOERBQUNBLEtBQUc7UUFBQ0MsU0FBUyxFQUFFc0IsU0FBUyxHQUFHLFlBQVksR0FBRyxhQUFhO2tCQUN0RCw0RUFBQ3hDLElBQUk7WUFBQ0MsS0FBSyxFQUFFQSxLQUFLO1lBQUVDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7aUJBQUk7Ozs7O2FBQ3RDLENBQ047QUFDSixDQUFDO0lBMURLNkIsV0FBVztBQUFYQSxNQUFBQSxXQUFXO0FBNERqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJzL1NwZWFrZXJMaXN0LmpzP2YzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXJMaW5lIGZyb20gXCIuL1NwZWFrZXJMaW5lXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vQXBwXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIExpc3QoeyBzdGF0ZSwgZGlzcGF0Y2ggfSkge1xuICBjb25zdCBbdXBkYXRpbmdJZCwgc2V0VXBkYXRpbmdJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaXNQZW5kaW5nID0gZmFsc2U7XG4gIGNvbnN0IHNwZWFrZXJzID0gc3RhdGUuc3BlYWtlcnM7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGVTcGVha2VyKHNwZWFrZXJSZWMpIHtcbiAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcbiAgICAgIC4uLnNwZWFrZXJSZWMsXG4gICAgICBmYXZvcml0ZTogIXNwZWFrZXJSZWMuZmF2b3JpdGUsXG4gICAgfTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwidXBkYXRlU3BlYWtlclwiLCBzcGVha2VyOiBzcGVha2VyUmVjVXBkYXRlZCB9KTtcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVBc3luYyhyZWMpIHtcbiAgICAgIHNldFVwZGF0aW5nSWQocmVjLmlkKTtcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3JlYy5pZH1gLCBzcGVha2VyUmVjVXBkYXRlZCk7XG4gICAgICBzZXRVcGRhdGluZ0lkKDApO1xuICAgIH1cbiAgICB1cGRhdGVBc3luYyhzcGVha2VyUmVjVXBkYXRlZCk7XG4gIH1cblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tdG9vbGJhclwiXG4gICAgICAgICAgcm9sZT1cInRvb2xiYXJcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTcGVha2VyIHRvb2xiYXIgZmlsdGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci10cmlnZ2VyIG1iLTMgZmxleC1ncm93LTA0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItc2VhcmNoIHctMTAwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7ZmlsdGVyU3BlYWtlcnN9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGlnaGxpZ2h0IE5hbWVzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWhlaWdodFwiPlxuICAgICAgICAgICAgICB7aXNQZW5kaW5nICYmIChcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWRhcmtcIiByb2xlPVwic3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTNcIj5cbiAgICAgICAge3NwZWFrZXJzLm1hcChmdW5jdGlvbiAoc3BlYWtlclJlYykge1xuICAgICAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3BlYWtlckxpbmVcbiAgICAgICAgICAgICAga2V5PXtzcGVha2VyUmVjLmlkfVxuICAgICAgICAgICAgICBzcGVha2VyUmVjPXtzcGVha2VyUmVjfVxuICAgICAgICAgICAgICB1cGRhdGluZz17dXBkYXRpbmdJZCA9PT0gc3BlYWtlclJlYy5pZCA/IHVwZGF0aW5nSWQgOiAwfVxuICAgICAgICAgICAgICB0b2dnbGVGYXZvcml0ZVNwZWFrZXI9eygpID0+IHRvZ2dsZUZhdm9yaXRlU3BlYWtlcihzcGVha2VyUmVjKX1cbiAgICAgICAgICAgICAgaGlnaGxpZ2h0PXtoaWdobGlnaHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFNwZWFrZXJMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB7IGRhcmtUaGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzcGVha2Vyc0xvYWRlZFwiOlxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIHNwZWFrZXJzOiBhY3Rpb24uc3BlYWtlcnMgfTtcbiAgICAgIGNhc2UgXCJzZXRMb2FkaW5nU3RhdHVzXCI6XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgICBjYXNlIFwidXBkYXRlU3BlYWtlclwiOlxuICAgICAgICBjb25zdCBzcGVha2Vyc1VwZGF0ZWQgPSBzdGF0ZS5zcGVha2Vycy5tYXAoKHJlYykgPT5cbiAgICAgICAgICBhY3Rpb24uc3BlYWtlci5pZCA9PT0gcmVjLmlkID8gYWN0aW9uLnNwZWFrZXIgOiByZWNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNwZWFrZXJzOiBzcGVha2Vyc1VwZGF0ZWQgfTtcblxuICAgICAvKiBjYXNlIFwiZmlsdGVyU3BlYWtlcnNcIjpcbiAgICAgICAgICBjb25zdCBzcGVha2VyUmVzdWx0ID0gc3BlYWtlcnMuZmlsdGVyKFxuICAgICAgICAgICAgc3BlYWtlciA9PiBzcGVha2VyLmZpcnN0TmFtZS5pbmNsdWRlcyhzZWFyY2hJdGVtKVxuICAgICAgICAgIClcbiAgICAgICAgICBzZXRTcGVha2VycyhzcGVha2VyUmVzdWx0KTsqL1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBjYXNlIGZhaWx1cmUuICB0eXBlOiAke2FjdGlvbi50eXBlfWApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzcGVha2VyczogW10sXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICB1cGRhdGVJdGVtOiAoKSA9PiB7fSxcbiAgICBzZWFyY2hJdGVtIDogXCJcIlxuICB9O1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGFBc3luYygpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzZXRMb2FkaW5nU3RhdHVzXCIgfSk7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zcGVha2Vyc1wiKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzcGVha2Vyc0xvYWRlZFwiLCBzcGVha2VyczogcmVzdWx0cy5kYXRhIH0pO1xuICAgIH1cbiAgICBnZXREYXRhQXN5bmMoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNwZWFrZXIoc3BlYWtlclJlYykge1xuICAgIGNvbnN0IHNwZWFrZXJVcGRhdGVkID0gc3BlYWtlcnMubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiBzcGVha2VyUmVjLmlkID09PSByZWMuaWQgPyBzcGVha2VyUmVjIDogcmVjO1xuICAgIH0pO1xuICAgIHNldFNwZWFrZXJzKHNwZWFrZXJVcGRhdGVkKTtcbiAgfVxuXG4gIFxuXG4gIGlmIChzdGF0ZS5sb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2RhcmtUaGVtZSA/IFwidGhlbWUtZGFya1wiIDogXCJ0aGVtZS1saWdodFwifT5cbiAgICAgIDxMaXN0IHN0YXRlPXtzdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7XG4iXSwibmFtZXMiOlsiU3BlYWtlckxpbmUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiVGhlbWVDb250ZXh0IiwiYXhpb3MiLCJMaXN0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInRvZ2dsZUZhdm9yaXRlU3BlYWtlciIsInNwZWFrZXJSZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwidHlwZSIsInNwZWFrZXIiLCJ1cGRhdGVBc3luYyIsInJlYyIsInNldFVwZGF0aW5nSWQiLCJpZCIsInB1dCIsInVwZGF0aW5nSWQiLCJpc1BlbmRpbmciLCJzcGVha2VycyIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJmaWx0ZXJTcGVha2VycyIsInBsYWNlaG9sZGVyIiwiaSIsIm1hcCIsImhpZ2hsaWdodCIsInVwZGF0aW5nIiwiU3BlYWtlckxpc3QiLCJyZWR1Y2VyIiwiYWN0aW9uIiwibG9hZGluZyIsInNwZWFrZXJzVXBkYXRlZCIsIkVycm9yIiwidXBkYXRlU3BlYWtlciIsInNwZWFrZXJVcGRhdGVkIiwic2V0U3BlYWtlcnMiLCJkYXJrVGhlbWUiLCJpbml0aWFsU3RhdGUiLCJ1cGRhdGVJdGVtIiwic2VhcmNoSXRlbSIsImdldERhdGFBc3luYyIsInJlc3VsdHMiLCJnZXQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});