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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideBar: function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar.module.css */ \"./src/components/SideBar/SideBar.module.css\");\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Spacer = (props)=>Boolean(props.space) && [\n        ...Array(props.space)\n    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer2)\n        }, \"\".concat(i), false, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 13,\n            columnNumber: 41\n        }, undefined));\n_c = Spacer;\nconst SideBar = (props)=>{\n    var _this = undefined;\n    _s();\n    const addId = (obj)=>{\n        obj.id = String(Math.random());\n        obj.body.forEach((o)=>{\n            typeof o !== \"string\" && addId(o);\n        });\n    };\n    addId(props.inSide);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.inSide);\n    let isAlreadyDelete = false;\n    const deleteTab = (name)=>{\n        console.log(name);\n        const searchSide = JSON.parse(JSON.stringify(side));\n        const deleteTabRecursive = (obj, id)=>{\n            if (obj.id === id && !isAlreadyDelete) {\n                obj.isDisplay = obj.isDisplay === true ? false : true;\n                setSide(searchSide);\n                isAlreadyDelete = true;\n            } else {\n                obj.body.forEach((s)=>typeof s !== \"string\" && deleteTabRecursive(s, id));\n            }\n        };\n        deleteTabRecursive(searchSide, name);\n    };\n    const [a, b, c, d, e, f, g, h, i, j, k, l] = [\n        5,\n        25,\n        15,\n        15,\n        55,\n        55,\n        15,\n        95,\n        5,\n        85,\n        35,\n        55\n    ];\n    const [aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll] = [\n        5,\n        25,\n        15,\n        15\n    ];\n    const mapper = function(obj) {\n        let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;\n        obj.depth = depth + 1;\n        var _obj_id, _obj_depth, _obj_depth1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                    onClick: ()=>deleteTab((_obj_id = obj.id) !== null && _obj_id !== void 0 ? _obj_id : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                            space: obj.depth\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer),\n                            style: {\n                                backgroundColor: \"#000\",\n                                clipPath: obj.isDisplay === true ? \" polygon(\".concat(a, \"% \").concat(b, \"% , \").concat(c, \"% \").concat(d, \"%, \").concat(e, \"% \").concat(f, \"%, \").concat(g, \"% \").concat(h, \"%, \").concat(i, \"% \").concat(j, \"%, \").concat(k, \"% \").concat(l, \"%) \") : \" polygon(\".concat(aa, \"% \").concat(bb, \"% , \").concat(cc, \"% \").concat(cc, \"%, \").concat(ee, \"% \").concat(ff, \"%, \").concat(gg, \"% \").concat(gg, \"%, \").concat(gg, \"% \").concat(gg, \"%, \").concat(gg, \"% \").concat(gg, \"%) \")\n                            }\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        obj.directoryName\n                    ]\n                }, \"\".concat(obj, \"-1\"), true, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this),\n                obj.isDisplay === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: obj.body.map((o, i)=>typeof o !== \"string\" ? mapper(o, (_obj_depth = obj.depth) !== null && _obj_depth !== void 0 ? _obj_depth : 1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                                        space: ((_obj_depth1 = obj.depth) !== null && _obj_depth1 !== void 0 ? _obj_depth1 : 0) + 1\n                                    }, void 0, false, {\n                                        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 21\n                                    }, _this),\n                                    o\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 19\n                            }, _this)\n                        }, \"\".concat(o, \"-\").concat(i), false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, _this))\n                }, \"\".concat(obj, \"-2\"), false, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, \"\".concat(obj), true, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: mapper(side)\n    }, void 0, false, {\n        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n        lineNumber: 79,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SideBar, \"L14vjkoMI7oEp7If65IXdlYv47c=\");\n_c1 = SideBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"Spacer\");\n$RefreshReg$(_c1, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUcsUUFBYUMsT0FBUEEsSUFBRyxNQUFZRSxPQUFSRixJQUFHLE9BQVlHLE9BQVBELElBQUcsTUFBWUUsT0FBUkQsSUFBRyxPQUFZQyxPQUFQQSxJQUFHLE1BQVlBLE9BQVJBLElBQUcsT0FBWUEsT0FBUEEsSUFBRyxNQUFZQSxPQUFSQSxJQUFHLE9BQVlBLE9BQVBBLElBQUcsTUFBTyxPQUFIQSxJQUFHOzRCQUMxRzs7Ozs7O3dCQUVEeEMsSUFBSXNELGFBQWE7O21CQVpnQixHQUFPLE9BQUp0RCxLQUFJOzs7OztnQkFjMUNBLElBQUlxQixTQUFTLEtBQUssc0JBQ2pCLDhEQUFDMUI7OEJBQ0VLLElBQUlLLElBQUksQ0FBQ2IsR0FBRyxDQUFDLENBQUNlLEdBQTRCYixJQUN6QyxPQUFPYSxNQUFNLFdBQ1h1QyxPQUFPdkMsR0FBR1AsQ0FBQUEsYUFBQUEsSUFBSStDLEtBQUssY0FBVC9DLHdCQUFBQSxhQUFhLG1CQUV2Qiw4REFBQ0w7c0NBQ0MsNEVBQUNBO2dDQUFJQyxXQUFXVixtRUFBYTs7a0RBQzNCLDhEQUFDQzt3Q0FBT0csT0FBTyxDQUFDVSxDQUFBQSxjQUFBQSxJQUFJK0MsS0FBSyxjQUFUL0MseUJBQUFBLGNBQWEsS0FBSzs7Ozs7O29DQUNqQ087Ozs7Ozs7MkJBSEssR0FBUWIsT0FBTGEsR0FBRSxLQUFLLE9BQUZiOzs7OzttQkFMZCxHQUFPLE9BQUpNLEtBQUk7Ozs7OztXQWhCWCxHQUFPLE9BQUpBOzs7OztJQWlDakI7SUFDQSxxQkFBTyw4REFBQ0w7UUFBSUMsV0FBV1Ysc0VBQWdCO2tCQUFHNEQsT0FBT3JDOzs7Ozs7QUFDbkQsRUFBRTtHQWxFV1g7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyLnRzeD80ODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGVCYXIubW9kdWxlLmNzcyc7XG5leHBvcnQgdHlwZSBEaXJlY3RvcnlNb2RlbCA9IHtcbiAgZGlyZWN0b3J5TmFtZTogc3RyaW5nO1xuICBib2R5OiAoc3RyaW5nIHwgRGlyZWN0b3J5TW9kZWwpW107XG4gIGlzRGlzcGxheT86IGJvb2xlYW47XG4gIGRlcHRoPzogbnVtYmVyO1xuICBpZD86IHN0cmluZztcbn07XG5cbmNvbnN0IFNwYWNlciA9IChwcm9wczogeyBzcGFjZTogbnVtYmVyIH0pID0+XG4gIEJvb2xlYW4ocHJvcHMuc3BhY2UpICYmXG4gIFsuLi5BcnJheShwcm9wcy5zcGFjZSldLm1hcCgoXywgaSkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXIyfSBrZXk9e2Ake2l9YH0gLz4pO1xuZXhwb3J0IGNvbnN0IFNpZGVCYXIgPSAocHJvcHM6IHsgaW5TaWRlOiBEaXJlY3RvcnlNb2RlbCB9KSA9PiB7XG4gIGNvbnN0IGFkZElkID0gKG9iajogRGlyZWN0b3J5TW9kZWwpID0+IHtcbiAgICBvYmouaWQgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgb2JqLmJvZHkuZm9yRWFjaCgobykgPT4ge1xuICAgICAgdHlwZW9mIG8gIT09ICdzdHJpbmcnICYmIGFkZElkKG8pO1xuICAgIH0pO1xuICB9O1xuICBhZGRJZChwcm9wcy5pblNpZGUpO1xuICBjb25zdCBbc2lkZSwgc2V0U2lkZV0gPSB1c2VTdGF0ZTxEaXJlY3RvcnlNb2RlbD4ocHJvcHMuaW5TaWRlKTtcbiAgbGV0IGlzQWxyZWFkeURlbGV0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlbGV0ZVRhYiA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICBjb25zdCBzZWFyY2hTaWRlOiBEaXJlY3RvcnlNb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2lkZSkpO1xuICAgIGNvbnN0IGRlbGV0ZVRhYlJlY3Vyc2l2ZSA9IChvYmo6IERpcmVjdG9yeU1vZGVsLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAob2JqLmlkID09PSBpZCAmJiAhaXNBbHJlYWR5RGVsZXRlKSB7XG4gICAgICAgIG9iai5pc0Rpc3BsYXkgPSBvYmouaXNEaXNwbGF5ID09PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBzZXRTaWRlKHNlYXJjaFNpZGUpO1xuICAgICAgICBpc0FscmVhZHlEZWxldGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqLmJvZHkuZm9yRWFjaCgocykgPT4gdHlwZW9mIHMgIT09ICdzdHJpbmcnICYmIGRlbGV0ZVRhYlJlY3Vyc2l2ZShzLCBpZCkpO1xuICAgICAgfVxuICAgIH07XG4gICAgZGVsZXRlVGFiUmVjdXJzaXZlKHNlYXJjaFNpZGUsIG5hbWUpO1xuICB9O1xuICBjb25zdCBbYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaiwgaywgbF0gPSBbNSwgMjUsIDE1LCAxNSwgNTUsIDU1LCAxNSwgOTUsIDUsIDg1LCAzNSwgNTVdO1xuICBjb25zdCBbYWEsIGJiLCBjYywgZGQsIGVlLCBmZiwgZ2csIGhoLCBpaSwgamosIGtrLCBsbF0gPSBbNSwgMjUsIDE1LCAxNSxdO1xuXG4gIGNvbnN0IG1hcHBlciA9IChvYmo6IERpcmVjdG9yeU1vZGVsLCBkZXB0aCA9IC0xKSA9PiB7XG4gICAgb2JqLmRlcHRoID0gZGVwdGggKyAxO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17YCR7b2JqfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0ga2V5PXtgJHtvYmp9LTFgfSBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYWIob2JqLmlkID8/ICcnKX0+XG4gICAgICAgICAgPFNwYWNlciBzcGFjZT17b2JqLmRlcHRofSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlcn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgICBjbGlwUGF0aDpcbiAgICAgICAgICAgICAgICBvYmouaXNEaXNwbGF5ID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICA/IGAgcG9seWdvbigke2F9JSAke2J9JSAsICR7Y30lICR7ZH0lLCAke2V9JSAke2Z9JSwgJHtnfSUgJHtofSUsICR7aX0lICR7an0lLCAke2t9JSAke2x9JSkgYFxuICAgICAgICAgICAgICAgICAgOiBgIHBvbHlnb24oJHthYX0lICR7YmJ9JSAsICR7Y2N9JSAke2NjfSUsICR7ZWV9JSAke2ZmfSUsICR7Z2d9JSAke2dnfSUsICR7Z2d9JSAke2dnfSUsICR7Z2d9JSAke2dnfSUpIGAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge29iai5kaXJlY3RvcnlOYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge29iai5pc0Rpc3BsYXkgPT09IHRydWUgJiYgKFxuICAgICAgICAgIDxkaXYga2V5PXtgJHtvYmp9LTJgfT5cbiAgICAgICAgICAgIHtvYmouYm9keS5tYXAoKG86IHN0cmluZyB8IERpcmVjdG9yeU1vZGVsLCBpOiBudW1iZXIpID0+XG4gICAgICAgICAgICAgIHR5cGVvZiBvICE9PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgICBtYXBwZXIobywgb2JqLmRlcHRoID8/IDEpXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake299LSR7aX1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlciBzcGFjZT17KG9iai5kZXB0aCA/PyAwKSArIDF9IC8+XG4gICAgICAgICAgICAgICAgICAgIHtvfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PnttYXBwZXIoc2lkZSl9PC9kaXY+O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNwYWNlciIsInByb3BzIiwiQm9vbGVhbiIsInNwYWNlIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsImRpdiIsImNsYXNzTmFtZSIsInNwYWNlcjIiLCJTaWRlQmFyIiwiYWRkSWQiLCJvYmoiLCJpZCIsIlN0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJib2R5IiwiZm9yRWFjaCIsIm8iLCJpblNpZGUiLCJzaWRlIiwic2V0U2lkZSIsImlzQWxyZWFkeURlbGV0ZSIsImRlbGV0ZVRhYiIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoU2lkZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImRlbGV0ZVRhYlJlY3Vyc2l2ZSIsImlzRGlzcGxheSIsInMiLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJnIiwiaCIsImoiLCJrIiwibCIsImFhIiwiYmIiLCJjYyIsImRkIiwiZWUiLCJmZiIsImdnIiwiaGgiLCJpaSIsImpqIiwia2siLCJsbCIsIm1hcHBlciIsImRlcHRoIiwiY29sdW1uIiwib25DbGljayIsInNwYWNlciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xpcFBhdGgiLCJkaXJlY3RvcnlOYW1lIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SideBar/SideBar.tsx\n"));

/***/ })

});