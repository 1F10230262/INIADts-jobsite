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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideBar: function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar.module.css */ \"./src/components/SideBar/SideBar.module.css\");\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Spacer = (props)=>Boolean(props.space) && [\n        ...Array(props.space)\n    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer)\n        }, \"\".concat(i), false, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 13,\n            columnNumber: 41\n        }, undefined));\n_c = Spacer;\nconst SideBar = (props)=>{\n    var _this = undefined;\n    _s();\n    const addId = (obj)=>{\n        obj.id = String(Math.random());\n        obj.body.forEach((o)=>{\n            typeof o !== \"string\" && addId(o);\n        });\n    };\n    addId(props.inSide);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.inSide);\n    let isAlreadyDelete = false;\n    const deleteTab = (name)=>{\n        console.log(name);\n        const searchSide = JSON.parse(JSON.stringify(side));\n        const deleteTabRecursive = (obj, id)=>{\n            if (obj.id === id && !isAlreadyDelete) {\n                obj.isDisplay = obj.isDisplay === true ? false : true;\n                setSide(searchSide);\n                isAlreadyDelete = true;\n            } else {\n                obj.body.forEach((s)=>typeof s !== \"string\" && deleteTabRecursive(s, id));\n            }\n        };\n        deleteTabRecursive(searchSide, name);\n    };\n    const mapper = function(obj) {\n        let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;\n        obj.depth = depth + 1;\n        var _obj_id, _obj_depth, _obj_depth1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                    onClick: ()=>deleteTab((_obj_id = obj.id) !== null && _obj_id !== void 0 ? _obj_id : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                            space: obj.depth\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer),\n                            style: {\n                                backgroundColor: \"#000\",\n                                clipPath: obj.isDisplay === true ? \"polygon(45% 30% , 45% 50%, 65% 30%, 65% 25%, 45% 45%, 25% 25%)\" : \"polygon(30% 45%, 50% 65%, 30% 85%, 25% 85%, 45% 65%, 25% 45%)\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        obj.directoryName\n                    ]\n                }, \"\".concat(obj, \"-1\"), true, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                obj.isDisplay === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: obj.body.map((o, i)=>typeof o !== \"string\" ? mapper(o, (_obj_depth = obj.depth) !== null && _obj_depth !== void 0 ? _obj_depth : 1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                                        space: ((_obj_depth1 = obj.depth) !== null && _obj_depth1 !== void 0 ? _obj_depth1 : 0) + 1\n                                    }, void 0, false, {\n                                        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 21\n                                    }, _this),\n                                    o\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 19\n                            }, _this)\n                        }, \"\".concat(o, \"-\").concat(i), false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 17\n                        }, _this))\n                }, \"\".concat(obj, \"-2\"), false, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, \"\".concat(obj), true, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: mapper(side)\n    }, void 0, false, {\n        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n        lineNumber: 76,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SideBar, \"L14vjkoMI7oEp7If65IXdlYv47c=\");\n_c1 = SideBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"Spacer\");\n$RefreshReg$(_c1, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUFDbkQsRUFBRTtHQS9EV1g7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyLnRzeD80ODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGVCYXIubW9kdWxlLmNzcyc7XG5leHBvcnQgdHlwZSBEaXJlY3RvcnlNb2RlbCA9IHtcbiAgZGlyZWN0b3J5TmFtZTogc3RyaW5nO1xuICBib2R5OiAoc3RyaW5nIHwgRGlyZWN0b3J5TW9kZWwpW107XG4gIGlzRGlzcGxheT86IGJvb2xlYW47XG4gIGRlcHRoPzogbnVtYmVyO1xuICBpZD86IHN0cmluZztcbn07XG5cbmNvbnN0IFNwYWNlciA9IChwcm9wczogeyBzcGFjZTogbnVtYmVyIH0pID0+XG4gIEJvb2xlYW4ocHJvcHMuc3BhY2UpICYmXG4gIFsuLi5BcnJheShwcm9wcy5zcGFjZSldLm1hcCgoXywgaSkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9IGtleT17YCR7aX1gfSAvPik7XG5leHBvcnQgY29uc3QgU2lkZUJhciA9IChwcm9wczogeyBpblNpZGU6IERpcmVjdG9yeU1vZGVsIH0pID0+IHtcbiAgY29uc3QgYWRkSWQgPSAob2JqOiBEaXJlY3RvcnlNb2RlbCkgPT4ge1xuICAgIG9iai5pZCA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICBvYmouYm9keS5mb3JFYWNoKChvKSA9PiB7XG4gICAgICB0eXBlb2YgbyAhPT0gJ3N0cmluZycgJiYgYWRkSWQobyk7XG4gICAgfSk7XG4gIH07XG4gIGFkZElkKHByb3BzLmluU2lkZSk7XG4gIGNvbnN0IFtzaWRlLCBzZXRTaWRlXSA9IHVzZVN0YXRlPERpcmVjdG9yeU1vZGVsPihwcm9wcy5pblNpZGUpO1xuICBsZXQgaXNBbHJlYWR5RGVsZXRlID0gZmFsc2U7XG5cbiAgY29uc3QgZGVsZXRlVGFiID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgIGNvbnN0IHNlYXJjaFNpZGU6IERpcmVjdG9yeU1vZGVsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzaWRlKSk7XG4gICAgY29uc3QgZGVsZXRlVGFiUmVjdXJzaXZlID0gKG9iajogRGlyZWN0b3J5TW9kZWwsIGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChvYmouaWQgPT09IGlkICYmICFpc0FscmVhZHlEZWxldGUpIHtcbiAgICAgICAgb2JqLmlzRGlzcGxheSA9IG9iai5pc0Rpc3BsYXkgPT09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIHNldFNpZGUoc2VhcmNoU2lkZSk7XG4gICAgICAgIGlzQWxyZWFkeURlbGV0ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmouYm9keS5mb3JFYWNoKChzKSA9PiB0eXBlb2YgcyAhPT0gJ3N0cmluZycgJiYgZGVsZXRlVGFiUmVjdXJzaXZlKHMsIGlkKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkZWxldGVUYWJSZWN1cnNpdmUoc2VhcmNoU2lkZSwgbmFtZSk7XG4gIH07XG4gIGNvbnN0IG1hcHBlciA9IChvYmo6IERpcmVjdG9yeU1vZGVsLCBkZXB0aCA9IC0xKSA9PiB7XG4gICAgb2JqLmRlcHRoID0gZGVwdGggKyAxO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17YCR7b2JqfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0ga2V5PXtgJHtvYmp9LTFgfSBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYWIob2JqLmlkID8/ICcnKX0+XG4gICAgICAgICAgPFNwYWNlciBzcGFjZT17b2JqLmRlcHRofSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlcn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICBjbGlwUGF0aDpcbiAgICAgICAgICAgICAgICBvYmouaXNEaXNwbGF5ID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICA/ICdwb2x5Z29uKDQ1JSAzMCUgLCA0NSUgNTAlLCA2NSUgMzAlLCA2NSUgMjUlLCA0NSUgNDUlLCAyNSUgMjUlKSdcbiAgICAgICAgICAgICAgICAgIDogJ3BvbHlnb24oMzAlIDQ1JSwgNTAlIDY1JSwgMzAlIDg1JSwgMjUlIDg1JSwgNDUlIDY1JSwgMjUlIDQ1JSknLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtvYmouZGlyZWN0b3J5TmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtvYmouaXNEaXNwbGF5ID09PSB0cnVlICYmIChcbiAgICAgICAgICA8ZGl2IGtleT17YCR7b2JqfS0yYH0+XG4gICAgICAgICAgICB7b2JqLmJvZHkubWFwKChvOiBzdHJpbmcgfCBEaXJlY3RvcnlNb2RlbCwgaTogbnVtYmVyKSA9PlxuICAgICAgICAgICAgICB0eXBlb2YgbyAhPT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAgICAgbWFwcGVyKG8sIG9iai5kZXB0aCA/PyAxKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtvfS0ke2l9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFjZXIgc3BhY2U9eyhvYmouZGVwdGggPz8gMCkgKyAxfSAvPlxuICAgICAgICAgICAgICAgICAgICB7b31cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57bWFwcGVyKHNpZGUpfTwvZGl2Pjtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJTcGFjZXIiLCJwcm9wcyIsIkJvb2xlYW4iLCJzcGFjZSIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFjZXIiLCJTaWRlQmFyIiwiYWRkSWQiLCJvYmoiLCJpZCIsIlN0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJib2R5IiwiZm9yRWFjaCIsIm8iLCJpblNpZGUiLCJzaWRlIiwic2V0U2lkZSIsImlzQWxyZWFkeURlbGV0ZSIsImRlbGV0ZVRhYiIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoU2lkZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImRlbGV0ZVRhYlJlY3Vyc2l2ZSIsImlzRGlzcGxheSIsInMiLCJtYXBwZXIiLCJkZXB0aCIsImNvbHVtbiIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsaXBQYXRoIiwiZGlyZWN0b3J5TmFtZSIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SideBar/SideBar.tsx\n"));

/***/ })

});