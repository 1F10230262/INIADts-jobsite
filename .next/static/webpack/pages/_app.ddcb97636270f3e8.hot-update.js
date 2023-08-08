"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/SideBar/SideBar.tsx":
/*!********************************************!*\
  !*** ./src/components/SideBar/SideBar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideBar: function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar.module.css */ \"./src/components/SideBar/SideBar.module.css\");\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Spacer = (props)=>Boolean(props.space) && [\n        ...Array(props.space)\n    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer)\n        }, \"\".concat(i), false, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 13,\n            columnNumber: 41\n        }, undefined));\n_c = Spacer;\nconst SideBar = (props)=>{\n    var _this = undefined;\n    _s();\n    const addId = (obj)=>{\n        obj.id = String(Math.random());\n        obj.body.forEach((o)=>{\n            typeof o !== \"string\" && addId(o);\n        });\n    };\n    addId(props.inSide);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.inSide);\n    let isAlreadyDelete = false;\n    const deleteTab = (name)=>{\n        console.log(name);\n        const searchSide = JSON.parse(JSON.stringify(side));\n        const deleteTabRecursive = (obj, id)=>{\n            if (obj.id === id && !isAlreadyDelete) {\n                obj.isDisplay = obj.isDisplay === true ? false : true;\n                setSide(searchSide);\n                isAlreadyDelete = true;\n            } else {\n                obj.body.forEach((s)=>typeof s !== \"string\" && deleteTabRecursive(s, id));\n            }\n        };\n        deleteTabRecursive(searchSide, name);\n    };\n    const mapper = function(obj) {\n        let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;\n        obj.depth = depth + 1;\n        var _obj_id, _obj_depth, _obj_depth1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                    onClick: ()=>deleteTab((_obj_id = obj.id) !== null && _obj_id !== void 0 ? _obj_id : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                            space: obj.depth\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer),\n                            style: {\n                                backgroundColor: \"#000\",\n                                clipPath: obj.isDisplay ? \"polygon(30% 45%, 50% 65%, 30% 85%, 25% 85%, 45% 65%, 25% 45%)\" : \"polygon(45% 30% , 65% 50%, 85% 30%, 85% 85%, 45% 65%, 25% 45%)\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        obj.directoryName\n                    ]\n                }, \"\".concat(obj, \"-1\"), true, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                obj.isDisplay === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: obj.body.map((o, i)=>typeof o !== \"string\" ? mapper(o, (_obj_depth = obj.depth) !== null && _obj_depth !== void 0 ? _obj_depth : 1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                                        space: ((_obj_depth1 = obj.depth) !== null && _obj_depth1 !== void 0 ? _obj_depth1 : 0) + 1\n                                    }, void 0, false, {\n                                        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 21\n                                    }, _this),\n                                    o\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 19\n                            }, _this)\n                        }, \"\".concat(o, \"-\").concat(i), false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, _this))\n                }, \"\".concat(obj, \"-2\"), false, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, \"\".concat(obj), true, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: mapper(side)\n    }, void 0, false, {\n        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n        lineNumber: 75,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SideBar, \"L14vjkoMI7oEp7If65IXdlYv47c=\");\n_c1 = SideBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"Spacer\");\n$RefreshReg$(_c1, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25ELEVBQUU7R0E5RFdYO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci50c3g/NDgyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlQmFyLm1vZHVsZS5jc3MnO1xuZXhwb3J0IHR5cGUgRGlyZWN0b3J5TW9kZWwgPSB7XG4gIGRpcmVjdG9yeU5hbWU6IHN0cmluZztcbiAgYm9keTogKHN0cmluZyB8IERpcmVjdG9yeU1vZGVsKVtdO1xuICBpc0Rpc3BsYXk/OiBib29sZWFuO1xuICBkZXB0aD86IG51bWJlcjtcbiAgaWQ/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBTcGFjZXIgPSAocHJvcHM6IHsgc3BhY2U6IG51bWJlciB9KSA9PlxuICBCb29sZWFuKHByb3BzLnNwYWNlKSAmJlxuICBbLi4uQXJyYXkocHJvcHMuc3BhY2UpXS5tYXAoKF8sIGkpID0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VyfSBrZXk9e2Ake2l9YH0gLz4pO1xuZXhwb3J0IGNvbnN0IFNpZGVCYXIgPSAocHJvcHM6IHsgaW5TaWRlOiBEaXJlY3RvcnlNb2RlbCB9KSA9PiB7XG4gIGNvbnN0IGFkZElkID0gKG9iajogRGlyZWN0b3J5TW9kZWwpID0+IHtcbiAgICBvYmouaWQgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgb2JqLmJvZHkuZm9yRWFjaCgobykgPT4ge1xuICAgICAgdHlwZW9mIG8gIT09ICdzdHJpbmcnICYmIGFkZElkKG8pO1xuICAgIH0pO1xuICB9O1xuICBhZGRJZChwcm9wcy5pblNpZGUpO1xuICBjb25zdCBbc2lkZSwgc2V0U2lkZV0gPSB1c2VTdGF0ZTxEaXJlY3RvcnlNb2RlbD4ocHJvcHMuaW5TaWRlKTtcbiAgbGV0IGlzQWxyZWFkeURlbGV0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlbGV0ZVRhYiA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICBjb25zdCBzZWFyY2hTaWRlOiBEaXJlY3RvcnlNb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2lkZSkpO1xuICAgIGNvbnN0IGRlbGV0ZVRhYlJlY3Vyc2l2ZSA9IChvYmo6IERpcmVjdG9yeU1vZGVsLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAob2JqLmlkID09PSBpZCAmJiAhaXNBbHJlYWR5RGVsZXRlKSB7XG4gICAgICAgIG9iai5pc0Rpc3BsYXkgPSBvYmouaXNEaXNwbGF5ID09PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBzZXRTaWRlKHNlYXJjaFNpZGUpO1xuICAgICAgICBpc0FscmVhZHlEZWxldGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqLmJvZHkuZm9yRWFjaCgocykgPT4gdHlwZW9mIHMgIT09ICdzdHJpbmcnICYmIGRlbGV0ZVRhYlJlY3Vyc2l2ZShzLCBpZCkpO1xuICAgICAgfVxuICAgIH07XG4gICAgZGVsZXRlVGFiUmVjdXJzaXZlKHNlYXJjaFNpZGUsIG5hbWUpO1xuICB9O1xuICBjb25zdCBtYXBwZXIgPSAob2JqOiBEaXJlY3RvcnlNb2RlbCwgZGVwdGggPSAtMSkgPT4ge1xuICAgIG9iai5kZXB0aCA9IGRlcHRoICsgMTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2Ake29ian1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59IGtleT17YCR7b2JqfS0xYH0gb25DbGljaz17KCkgPT4gZGVsZXRlVGFiKG9iai5pZCA/PyAnJyl9PlxuICAgICAgICAgIDxTcGFjZXIgc3BhY2U9e29iai5kZXB0aH0gLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAgICAgY2xpcFBhdGg6IG9iai5pc0Rpc3BsYXlcbiAgICAgICAgICAgICAgICA/ICdwb2x5Z29uKDMwJSA0NSUsIDUwJSA2NSUsIDMwJSA4NSUsIDI1JSA4NSUsIDQ1JSA2NSUsIDI1JSA0NSUpJ1xuICAgICAgICAgICAgICAgIDogJ3BvbHlnb24oNDUlIDMwJSAsIDY1JSA1MCUsIDg1JSAzMCUsIDg1JSA4NSUsIDQ1JSA2NSUsIDI1JSA0NSUpJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7b2JqLmRpcmVjdG9yeU5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7b2JqLmlzRGlzcGxheSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2Ake29ian0tMmB9PlxuICAgICAgICAgICAge29iai5ib2R5Lm1hcCgobzogc3RyaW5nIHwgRGlyZWN0b3J5TW9kZWwsIGk6IG51bWJlcikgPT5cbiAgICAgICAgICAgICAgdHlwZW9mIG8gIT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgICAgICAgIG1hcHBlcihvLCBvYmouZGVwdGggPz8gMSlcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7b30tJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIHNwYWNlPXsob2JqLmRlcHRoID8/IDApICsgMX0gLz5cbiAgICAgICAgICAgICAgICAgICAge299XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e21hcHBlcihzaWRlKX08L2Rpdj47XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiU3BhY2VyIiwicHJvcHMiLCJCb29sZWFuIiwic3BhY2UiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhY2VyIiwiU2lkZUJhciIsImFkZElkIiwib2JqIiwiaWQiLCJTdHJpbmciLCJNYXRoIiwicmFuZG9tIiwiYm9keSIsImZvckVhY2giLCJvIiwiaW5TaWRlIiwic2lkZSIsInNldFNpZGUiLCJpc0FscmVhZHlEZWxldGUiLCJkZWxldGVUYWIiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInNlYXJjaFNpZGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJkZWxldGVUYWJSZWN1cnNpdmUiLCJpc0Rpc3BsYXkiLCJzIiwibWFwcGVyIiwiZGVwdGgiLCJjb2x1bW4iLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGlwUGF0aCIsImRpcmVjdG9yeU5hbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SideBar/SideBar.tsx\n"));

/***/ })

});