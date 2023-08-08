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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideBar: function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar.module.css */ \"./src/components/SideBar/SideBar.module.css\");\n/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Spacer = (props)=>Boolean(props.space) && [\n        ...Array(props.space)\n    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer2)\n        }, \"\".concat(i), false, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 13,\n            columnNumber: 41\n        }, undefined));\n_c = Spacer;\nconst SideBar = (props)=>{\n    var _this = undefined;\n    _s();\n    const addId = (obj)=>{\n        obj.id = String(Math.random());\n        obj.body.forEach((o)=>{\n            typeof o !== \"string\" && addId(o);\n        });\n    };\n    addId(props.inSide);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.inSide);\n    let isAlreadyDelete = false;\n    const deleteTab = (name)=>{\n        console.log(name);\n        const searchSide = JSON.parse(JSON.stringify(side));\n        const deleteTabRecursive = (obj, id)=>{\n            if (obj.id === id && !isAlreadyDelete) {\n                obj.isDisplay = obj.isDisplay === true ? false : true;\n                setSide(searchSide);\n                isAlreadyDelete = true;\n            } else {\n                obj.body.forEach((s)=>typeof s !== \"string\" && deleteTabRecursive(s, id));\n            }\n        };\n        deleteTabRecursive(searchSide, name);\n    };\n    const [a, b, c, d, e, f, g, h, i, j, k, l] = [\n        5,\n        25,\n        15,\n        15,\n        55,\n        55,\n        15,\n        95,\n        5,\n        85,\n        35,\n        55\n    ];\n    const [aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ll] = [\n        5,\n        25,\n        15,\n        15,\n        45,\n        45,\n        75,\n        15,\n        85,\n        25,\n        45,\n        55\n    ];\n    const mapper = function(obj) {\n        let depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;\n        obj.depth = depth + 1;\n        var _obj_id, _obj_depth, _obj_depth1;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                    onClick: ()=>deleteTab((_obj_id = obj.id) !== null && _obj_id !== void 0 ? _obj_id : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                            space: obj.depth\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().spacer),\n                            style: {\n                                backgroundColor: \"#000\",\n                                clipPath: obj.isDisplay === true ? \" polygon(\".concat(a, \"% \").concat(b, \"% , \").concat(c, \"% \").concat(d, \"%, \").concat(e, \"% \").concat(f, \"%, \").concat(g, \"% \").concat(h, \"%, \").concat(i, \"% \").concat(j, \"%, \").concat(k, \"% \").concat(l, \"%) \") : \" polygon(\".concat(aa, \"% \").concat(bb, \"% , \").concat(cc, \"% \").concat(dd, \"%, \").concat(ee, \"% \").concat(ff, \"%, \").concat(gg, \"% \").concat(hh, \"%, \").concat(ii, \"% \").concat(jj, \"%, \").concat(kk, \"% \").concat(ll, \"%) \")\n                            }\n                        }, void 0, false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        obj.directoryName\n                    ]\n                }, \"\".concat(obj, \"-1\"), true, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                obj.isDisplay === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: obj.body.map((o, i)=>typeof o !== \"string\" ? mapper(o, (_obj_depth = obj.depth) !== null && _obj_depth !== void 0 ? _obj_depth : 1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().column),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {\n                                        space: ((_obj_depth1 = obj.depth) !== null && _obj_depth1 !== void 0 ? _obj_depth1 : 0) + 1\n                                    }, void 0, false, {\n                                        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 21\n                                    }, _this),\n                                    o\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 19\n                            }, _this)\n                        }, \"\".concat(o, \"-\").concat(i), false, {\n                            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, _this))\n                }, \"\".concat(obj, \"-2\"), false, {\n                    fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, \"\".concat(obj), true, {\n            fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: mapper(side)\n    }, void 0, false, {\n        fileName: \"/root/INIADts-jobsite/src/components/SideBar/SideBar.tsx\",\n        lineNumber: 81,\n        columnNumber: 10\n    }, undefined);\n};\n_s(SideBar, \"L14vjkoMI7oEp7If65IXdlYv47c=\");\n_c1 = SideBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"Spacer\");\n$RefreshReg$(_c1, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUUsU0FDdEYsWUFBbUJFLE9BQVBELElBQUcsTUFBYUUsT0FBVEQsSUFBRyxRQUFhRSxPQUFQRCxJQUFHLE1BQVlFLE9BQVJELElBQUcsT0FBWUUsT0FBUEQsSUFBRyxNQUFZRSxPQUFSRCxJQUFHLE9BQVlFLE9BQVBELElBQUcsTUFBWUUsT0FBUkQsSUFBRyxPQUFZRSxPQUFQRCxJQUFHLE1BQVlFLE9BQVJELElBQUcsT0FBWUUsT0FBUEQsSUFBRyxNQUFPLE9BQUhDLElBQUc7NEJBQzFHOzs7Ozs7d0JBRUQ3QyxJQUFJc0QsYUFBYTs7bUJBWmdCLEdBQU8sT0FBSnRELEtBQUk7Ozs7O2dCQWMxQ0EsSUFBSXFCLFNBQVMsS0FBSyxzQkFDakIsOERBQUMxQjs4QkFDRUssSUFBSUssSUFBSSxDQUFDYixHQUFHLENBQUMsQ0FBQ2UsR0FBNEJiLElBQ3pDLE9BQU9hLE1BQU0sV0FDWHVDLE9BQU92QyxHQUFHUCxDQUFBQSxhQUFBQSxJQUFJK0MsS0FBSyxjQUFUL0Msd0JBQUFBLGFBQWEsbUJBRXZCLDhEQUFDTDtzQ0FDQyw0RUFBQ0E7Z0NBQUlDLFdBQVdWLG1FQUFhOztrREFDM0IsOERBQUNDO3dDQUFPRyxPQUFPLENBQUNVLENBQUFBLGNBQUFBLElBQUkrQyxLQUFLLGNBQVQvQyx5QkFBQUEsY0FBYSxLQUFLOzs7Ozs7b0NBQ2pDTzs7Ozs7OzsyQkFISyxHQUFRYixPQUFMYSxHQUFFLEtBQUssT0FBRmI7Ozs7O21CQUxkLEdBQU8sT0FBSk0sS0FBSTs7Ozs7O1dBaEJYLEdBQU8sT0FBSkE7Ozs7O0lBaUNqQjtJQUNBLHFCQUFPLDhEQUFDTDtRQUFJQyxXQUFXVixzRUFBZ0I7a0JBQUc0RCxPQUFPckM7Ozs7OztBQUNuRCxFQUFFO0dBcEVXWDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIudHN4PzQ4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2lkZUJhci5tb2R1bGUuY3NzJztcbmV4cG9ydCB0eXBlIERpcmVjdG9yeU1vZGVsID0ge1xuICBkaXJlY3RvcnlOYW1lOiBzdHJpbmc7XG4gIGJvZHk6IChzdHJpbmcgfCBEaXJlY3RvcnlNb2RlbClbXTtcbiAgaXNEaXNwbGF5PzogYm9vbGVhbjtcbiAgZGVwdGg/OiBudW1iZXI7XG4gIGlkPzogc3RyaW5nO1xufTtcblxuY29uc3QgU3BhY2VyID0gKHByb3BzOiB7IHNwYWNlOiBudW1iZXIgfSkgPT5cbiAgQm9vbGVhbihwcm9wcy5zcGFjZSkgJiZcbiAgWy4uLkFycmF5KHByb3BzLnNwYWNlKV0ubWFwKChfLCBpKSA9PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlcjJ9IGtleT17YCR7aX1gfSAvPik7XG5leHBvcnQgY29uc3QgU2lkZUJhciA9IChwcm9wczogeyBpblNpZGU6IERpcmVjdG9yeU1vZGVsIH0pID0+IHtcbiAgY29uc3QgYWRkSWQgPSAob2JqOiBEaXJlY3RvcnlNb2RlbCkgPT4ge1xuICAgIG9iai5pZCA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICBvYmouYm9keS5mb3JFYWNoKChvKSA9PiB7XG4gICAgICB0eXBlb2YgbyAhPT0gJ3N0cmluZycgJiYgYWRkSWQobyk7XG4gICAgfSk7XG4gIH07XG4gIGFkZElkKHByb3BzLmluU2lkZSk7XG4gIGNvbnN0IFtzaWRlLCBzZXRTaWRlXSA9IHVzZVN0YXRlPERpcmVjdG9yeU1vZGVsPihwcm9wcy5pblNpZGUpO1xuICBsZXQgaXNBbHJlYWR5RGVsZXRlID0gZmFsc2U7XG5cbiAgY29uc3QgZGVsZXRlVGFiID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgIGNvbnN0IHNlYXJjaFNpZGU6IERpcmVjdG9yeU1vZGVsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzaWRlKSk7XG4gICAgY29uc3QgZGVsZXRlVGFiUmVjdXJzaXZlID0gKG9iajogRGlyZWN0b3J5TW9kZWwsIGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChvYmouaWQgPT09IGlkICYmICFpc0FscmVhZHlEZWxldGUpIHtcbiAgICAgICAgb2JqLmlzRGlzcGxheSA9IG9iai5pc0Rpc3BsYXkgPT09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIHNldFNpZGUoc2VhcmNoU2lkZSk7XG4gICAgICAgIGlzQWxyZWFkeURlbGV0ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmouYm9keS5mb3JFYWNoKChzKSA9PiB0eXBlb2YgcyAhPT0gJ3N0cmluZycgJiYgZGVsZXRlVGFiUmVjdXJzaXZlKHMsIGlkKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkZWxldGVUYWJSZWN1cnNpdmUoc2VhcmNoU2lkZSwgbmFtZSk7XG4gIH07XG4gIGNvbnN0IFthLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpLCBqLCBrLCBsXSA9IFs1LCAyNSwgMTUsIDE1LCA1NSwgNTUsIDE1LCA5NSwgNSwgODUsIDM1LCA1NV07XG4gIGNvbnN0IFthYSwgYmIsIGNjLCBkZCwgZWUsIGZmLCBnZywgaGgsIGlpLCBqaiwga2ssIGxsXSA9IFtcbiAgICA1LCAyNSwgMTUsIDE1LCA0NSwgNDUsIDc1LCAxNSwgODUsIDI1LCA0NSwgNTUsXG4gIF07XG5cbiAgY29uc3QgbWFwcGVyID0gKG9iajogRGlyZWN0b3J5TW9kZWwsIGRlcHRoID0gLTEpID0+IHtcbiAgICBvYmouZGVwdGggPSBkZXB0aCArIDE7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtgJHtvYmp9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufSBrZXk9e2Ake29ian0tMWB9IG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhYihvYmouaWQgPz8gJycpfT5cbiAgICAgICAgICA8U3BhY2VyIHNwYWNlPXtvYmouZGVwdGh9IC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VyfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICAgIGNsaXBQYXRoOlxuICAgICAgICAgICAgICAgIG9iai5pc0Rpc3BsYXkgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgID8gYCBwb2x5Z29uKCR7YX0lICR7Yn0lICwgJHtjfSUgJHtkfSUsICR7ZX0lICR7Zn0lLCAke2d9JSAke2h9JSwgJHtpfSUgJHtqfSUsICR7a30lICR7bH0lKSBgXG4gICAgICAgICAgICAgICAgICA6IGAgcG9seWdvbigke2FhfSUgJHtiYn0lICwgJHtjY30lICR7ZGR9JSwgJHtlZX0lICR7ZmZ9JSwgJHtnZ30lICR7aGh9JSwgJHtpaX0lICR7amp9JSwgJHtra30lICR7bGx9JSkgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7b2JqLmRpcmVjdG9yeU5hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7b2JqLmlzRGlzcGxheSA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2Ake29ian0tMmB9PlxuICAgICAgICAgICAge29iai5ib2R5Lm1hcCgobzogc3RyaW5nIHwgRGlyZWN0b3J5TW9kZWwsIGk6IG51bWJlcikgPT5cbiAgICAgICAgICAgICAgdHlwZW9mIG8gIT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgICAgICAgIG1hcHBlcihvLCBvYmouZGVwdGggPz8gMSlcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7b30tJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2x1bW59PlxuICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIHNwYWNlPXsob2JqLmRlcHRoID8/IDApICsgMX0gLz5cbiAgICAgICAgICAgICAgICAgICAge299XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e21hcHBlcihzaWRlKX08L2Rpdj47XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiU3BhY2VyIiwicHJvcHMiLCJCb29sZWFuIiwic3BhY2UiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhY2VyMiIsIlNpZGVCYXIiLCJhZGRJZCIsIm9iaiIsImlkIiwiU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsImJvZHkiLCJmb3JFYWNoIiwibyIsImluU2lkZSIsInNpZGUiLCJzZXRTaWRlIiwiaXNBbHJlYWR5RGVsZXRlIiwiZGVsZXRlVGFiIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hTaWRlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZGVsZXRlVGFiUmVjdXJzaXZlIiwiaXNEaXNwbGF5IiwicyIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsImciLCJoIiwiaiIsImsiLCJsIiwiYWEiLCJiYiIsImNjIiwiZGQiLCJlZSIsImZmIiwiZ2ciLCJoaCIsImlpIiwiamoiLCJrayIsImxsIiwibWFwcGVyIiwiZGVwdGgiLCJjb2x1bW4iLCJvbkNsaWNrIiwic3BhY2VyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGlwUGF0aCIsImRpcmVjdG9yeU5hbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SideBar/SideBar.tsx\n"));

/***/ })

});