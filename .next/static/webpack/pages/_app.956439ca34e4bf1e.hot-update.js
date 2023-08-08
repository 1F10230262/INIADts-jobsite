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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideBar: function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar.module.css */ \"./src/components/SideBar/SideBar.module.css\");\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Spacer = (props)=>Boolean(props.space) && [\n        ...Array(props.space)\n    ].map((_, i1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer2)\n        }, \"\".concat(i1), false, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 13,\n            columnNumber: 41\n        }, undefined));\n_c = Spacer;\nconst SideBar = (props)=>{\n    var _this = undefined;\n    _s();\n    const addId = (obj)=>{\n        obj.id = String(Math.random());\n        obj.body.forEach((o)=>{\n            typeof o !== \"string\" && addId(o);\n        });\n    };\n    addId(props.inSide);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.inSide);\n    let isAlreadyDelete = false;\n    const deleteTab = (name)=>{\n        console.log(name);\n        const searchSide = JSON.parse(JSON.stringify(side));\n        const deleteTabRecursive = (obj, id)=>{\n            if (obj.id === id && !isAlreadyDelete) {\n                obj.isDisplay = obj.isDisplay === true ? false : true;\n                setSide(searchSide);\n                isAlreadyDelete = true;\n            } else {\n                obj.body.forEach((s)=>typeof s !== \"string\" && deleteTabRecursive(s, id));\n            }\n        };\n        deleteTabRecursive(searchSide, name);\n    };\n    const mapper = function(obj) {\n        let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;\n        obj.depth = depth + 1;\n        var _obj_id, _obj_depth, _obj_depth1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                    onClick: ()=>deleteTab((_obj_id = obj.id) !== null && _obj_id !== void 0 ? _obj_id : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                            space: obj.depth\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer),\n                            style: {\n                                backgroundColor: \"#000\",\n                                clipPath: obj.isDisplay === true ? \" polygon(\".concat(a, \"% \").concat(b, \"% , \").concat(c, \"% \").concat(d, \"%, \").concat(e, \"% \").concat(f, \"%, \").concat(g, \"% \").concat(h, \"%, \").concat(i, \"% \").concat(j, \"%, \").concat(k, \"% \").concat(l, \"%) \") : \" polygon(30% 45%, 50% 65%, 30% 85%, 25% 85%, 45% 65%, 25% 45%) \"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this),\n                        obj.directoryName\n                    ]\n                }, \"\".concat(obj, \"-1\"), true, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                obj.isDisplay === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: obj.body.map((o, i1)=>typeof o !== \"string\" ? mapper(o, (_obj_depth = obj.depth) !== null && _obj_depth !== void 0 ? _obj_depth : 1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                                        space: ((_obj_depth1 = obj.depth) !== null && _obj_depth1 !== void 0 ? _obj_depth1 : 0) + 1\n                                    }, void 0, false, {\n                                        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, _this),\n                                    o\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 19\n                            }, _this)\n                        }, \"\".concat(o, \"-\").concat(i1), false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, _this))\n                }, \"\".concat(obj, \"-2\"), false, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, \"\".concat(obj), true, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: mapper(side)\n    }, void 0, false, {\n        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n        lineNumber: 77,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SideBar, \"L14vjkoMI7oEp7If65IXdlYv47c=\");\n_c1 = SideBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"Spacer\");\n$RefreshReg$(_c1, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLGNBQUFBLElBQUl3QixLQUFLLGNBQVR4Qix5QkFBQUEsY0FBYSxLQUFLOzs7Ozs7b0NBQ2pDTzs7Ozs7OzsyQkFISyxHQUFRYixPQUFMYSxHQUFFLEtBQUssT0FBRmI7Ozs7O21CQUxkLEdBQU8sT0FBSk0sS0FBSTs7Ozs7O1dBaEJYLEdBQU8sT0FBSkE7Ozs7O0lBaUNqQjtJQUNBLHFCQUFPLDhEQUFDTDtRQUFJQyxXQUFXVixzRUFBZ0I7a0JBQUdxQyxPQUFPZDs7Ozs7O0FBQ25ELEVBQUU7R0FoRVdYO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci50c3g/NDgyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlQmFyLm1vZHVsZS5jc3MnO1xuZXhwb3J0IHR5cGUgRGlyZWN0b3J5TW9kZWwgPSB7XG4gIGRpcmVjdG9yeU5hbWU6IHN0cmluZztcbiAgYm9keTogKHN0cmluZyB8IERpcmVjdG9yeU1vZGVsKVtdO1xuICBpc0Rpc3BsYXk/OiBib29sZWFuO1xuICBkZXB0aD86IG51bWJlcjtcbiAgaWQ/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBTcGFjZXIgPSAocHJvcHM6IHsgc3BhY2U6IG51bWJlciB9KSA9PlxuICBCb29sZWFuKHByb3BzLnNwYWNlKSAmJlxuICBbLi4uQXJyYXkocHJvcHMuc3BhY2UpXS5tYXAoKF8sIGkpID0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VyMn0ga2V5PXtgJHtpfWB9IC8+KTtcbmV4cG9ydCBjb25zdCBTaWRlQmFyID0gKHByb3BzOiB7IGluU2lkZTogRGlyZWN0b3J5TW9kZWwgfSkgPT4ge1xuICBjb25zdCBhZGRJZCA9IChvYmo6IERpcmVjdG9yeU1vZGVsKSA9PiB7XG4gICAgb2JqLmlkID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgIG9iai5ib2R5LmZvckVhY2goKG8pID0+IHtcbiAgICAgIHR5cGVvZiBvICE9PSAnc3RyaW5nJyAmJiBhZGRJZChvKTtcbiAgICB9KTtcbiAgfTtcbiAgYWRkSWQocHJvcHMuaW5TaWRlKTtcbiAgY29uc3QgW3NpZGUsIHNldFNpZGVdID0gdXNlU3RhdGU8RGlyZWN0b3J5TW9kZWw+KHByb3BzLmluU2lkZSk7XG4gIGxldCBpc0FscmVhZHlEZWxldGUgPSBmYWxzZTtcblxuICBjb25zdCBkZWxldGVUYWIgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgY29uc3Qgc2VhcmNoU2lkZTogRGlyZWN0b3J5TW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNpZGUpKTtcbiAgICBjb25zdCBkZWxldGVUYWJSZWN1cnNpdmUgPSAob2JqOiBEaXJlY3RvcnlNb2RlbCwgaWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKG9iai5pZCA9PT0gaWQgJiYgIWlzQWxyZWFkeURlbGV0ZSkge1xuICAgICAgICBvYmouaXNEaXNwbGF5ID0gb2JqLmlzRGlzcGxheSA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgc2V0U2lkZShzZWFyY2hTaWRlKTtcbiAgICAgICAgaXNBbHJlYWR5RGVsZXRlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iai5ib2R5LmZvckVhY2goKHMpID0+IHR5cGVvZiBzICE9PSAnc3RyaW5nJyAmJiBkZWxldGVUYWJSZWN1cnNpdmUocywgaWQpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRlbGV0ZVRhYlJlY3Vyc2l2ZShzZWFyY2hTaWRlLCBuYW1lKTtcbiAgfTtcblxuICBjb25zdCBtYXBwZXIgPSAob2JqOiBEaXJlY3RvcnlNb2RlbCwgZGVwdGggPSAtMSkgPT4ge1xuICAgIG9iai5kZXB0aCA9IGRlcHRoICsgMTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2Ake29ian1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59IGtleT17YCR7b2JqfS0xYH0gb25DbGljaz17KCkgPT4gZGVsZXRlVGFiKG9iai5pZCA/PyAnJyl9PlxuICAgICAgICAgIDxTcGFjZXIgc3BhY2U9e29iai5kZXB0aH0gLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAgICAgY2xpcFBhdGg6XG4gICAgICAgICAgICAgICAgb2JqLmlzRGlzcGxheSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgPyBgIHBvbHlnb24oJHthfSUgJHtifSUgLCAke2N9JSAke2R9JSwgJHtlfSUgJHtmfSUsICR7Z30lICR7aH0lLCAke2l9JSAke2p9JSwgJHtrfSUgJHtsfSUpIGBcbiAgICAgICAgICAgICAgICAgIDogYCBwb2x5Z29uKDMwJSA0NSUsIDUwJSA2NSUsIDMwJSA4NSUsIDI1JSA4NSUsIDQ1JSA2NSUsIDI1JSA0NSUpIGAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge29iai5kaXJlY3RvcnlOYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge29iai5pc0Rpc3BsYXkgPT09IHRydWUgJiYgKFxuICAgICAgICAgIDxkaXYga2V5PXtgJHtvYmp9LTJgfT5cbiAgICAgICAgICAgIHtvYmouYm9keS5tYXAoKG86IHN0cmluZyB8IERpcmVjdG9yeU1vZGVsLCBpOiBudW1iZXIpID0+XG4gICAgICAgICAgICAgIHR5cGVvZiBvICE9PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgICBtYXBwZXIobywgb2JqLmRlcHRoID8/IDEpXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake299LSR7aX1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlciBzcGFjZT17KG9iai5kZXB0aCA/PyAwKSArIDF9IC8+XG4gICAgICAgICAgICAgICAgICAgIHtvfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PnttYXBwZXIoc2lkZSl9PC9kaXY+O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNwYWNlciIsInByb3BzIiwiQm9vbGVhbiIsInNwYWNlIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsImRpdiIsImNsYXNzTmFtZSIsInNwYWNlcjIiLCJTaWRlQmFyIiwiYWRkSWQiLCJvYmoiLCJpZCIsIlN0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJib2R5IiwiZm9yRWFjaCIsIm8iLCJpblNpZGUiLCJzaWRlIiwic2V0U2lkZSIsImlzQWxyZWFkeURlbGV0ZSIsImRlbGV0ZVRhYiIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoU2lkZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImRlbGV0ZVRhYlJlY3Vyc2l2ZSIsImlzRGlzcGxheSIsInMiLCJtYXBwZXIiLCJkZXB0aCIsImNvbHVtbiIsIm9uQ2xpY2siLCJzcGFjZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsaXBQYXRoIiwiYiIsImEiLCJjIiwiZCIsImUiLCJmIiwiZyIsImgiLCJqIiwiayIsImwiLCJkaXJlY3RvcnlOYW1lIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SideBar/SideBar.tsx\n"));

/***/ })

});