webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/home-page/form.tsx":
/*!***************************************!*\
  !*** ./components/home-page/form.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/context/context */ \"./context/context.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/umd/index.production.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbook/Documents/blog/components/home-page/form.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Form = function Form(_ref) {\n  _s();\n\n  var initialData = _ref.initialData;\n\n  var _ref2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_context__WEBPACK_IMPORTED_MODULE_5__[\"Context\"]),\n      setAllPosts = _ref2.setAllPosts,\n      setData = _ref2.setData,\n      data = _ref2.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    title: (initialData === null || initialData === void 0 ? void 0 : initialData.title) || '',\n    body: (initialData === null || initialData === void 0 ? void 0 : initialData.body) || ''\n  }),\n      formData = _useState[0],\n      setFormData = _useState[1];\n\n  var title = formData.title,\n      body = formData.body;\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setData({\n      title: (initialData === null || initialData === void 0 ? void 0 : initialData.title) || '',\n      body: (initialData === null || initialData === void 0 ? void 0 : initialData.body) || ''\n    });\n  }, []);\n\n  var handleChange = function handleChange(e) {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, e.target.name, e.target.value)));\n    setData(_objectSpread(_objectSpread({}, data), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  var mutation = Object(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var response;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(\"https://jsonplaceholder.typicode.com/posts\", {\n              title: title,\n              body: body,\n              userId: 1\n            }, {\n              headers: {\n                \"Content-type\": \"application/json; charset=UTF-8\"\n              }\n            });\n\n          case 3:\n            response = _context.sent;\n            return _context.abrupt(\"return\", response.data);\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            throw _context.t0;\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  })), {\n    onSuccess: function onSuccess(data) {\n      console.log(\"Successful\", {\n        data: data\n      });\n      setFormData({\n        title: \"\",\n        body: \"\"\n      });\n    },\n    onError: function onError(error) {\n      console.log(\"Failed\", {\n        error: error\n      });\n    },\n    onSettled: function onSettled(res) {\n      setAllPosts(function (prev) {\n        return [res].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev));\n      });\n      console.log(\"Mutation completed.\");\n      setFormData({\n        title: \"\",\n        body: \"\"\n      });\n    }\n  });\n\n  function handleSubmitPost(_x) {\n    return _handleSubmitPost.apply(this, arguments);\n  }\n\n  function _handleSubmitPost() {\n    _handleSubmitPost = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault();\n              _context2.next = 3;\n              return mutation.mutateAsync();\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _handleSubmitPost.apply(this, arguments);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmitPost,\n    className: \"w-full\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"flex-grow px-2 pt-3 pb-1 relative\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"px-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"title\",\n    placeholder: \"title post\",\n    value: title,\n    onChange: handleChange,\n    className: \"bg-transparent w-full focus:outline-none text-white bg-dark-lighter text-lg py-2 px-2 rounded-md\",\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: \"px-2 mt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, __jsx(\"textarea\", {\n    name: \"body\",\n    placeholder: \"description\",\n    value: body,\n    onChange: handleChange,\n    className: \"bg-transparent w-full focus:outline-none text-white bg-dark-lighter text-lg pb-1 px-2 py-1 rounded-md\",\n    rows: 4,\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  })), !initialData && __jsx(\"div\", {\n    className: \"flex flex-wrap justify-end mt-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 25\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    disabled: title.length === 0 || body.length === 0,\n    className: \"text-white px-4 py-2 shadow-sm focus:outline-none font-bold bg-primary rounded-lg \".concat(title.length === 0 || body.length === 0 ? \"cursor-not-allowed opacity-50\" : \"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 29\n    }\n  }, \"Post\")))));\n};\n\n_s(Form, \"LvIfxcjgxl2iiBylvE7ZKbHqnrs=\", false, function () {\n  return [_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"]];\n});\n\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUtcGFnZS9mb3JtLnRzeD83YjZhIl0sIm5hbWVzIjpbIkZvcm0iLCJpbml0aWFsRGF0YSIsInVzZUNvbnRleHQiLCJDb250ZXh0Iiwic2V0QWxsUG9zdHMiLCJzZXREYXRhIiwiZGF0YSIsInVzZVN0YXRlIiwidGl0bGUiLCJib2R5IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJtdXRhdGlvbiIsInVzZU11dGF0aW9uIiwiYXhpb3MiLCJwb3N0IiwidXNlcklkIiwiaGVhZGVycyIsInJlc3BvbnNlIiwib25TdWNjZXNzIiwiY29uc29sZSIsImxvZyIsIm9uRXJyb3IiLCJlcnJvciIsIm9uU2V0dGxlZCIsInJlcyIsInByZXYiLCJoYW5kbGVTdWJtaXRQb3N0IiwicHJldmVudERlZmF1bHQiLCJtdXRhdGVBc3luYyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1BLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLE9BQW1CO0FBQUE7O0FBQUEsTUFBakJDLFdBQWlCLFFBQWpCQSxXQUFpQjs7QUFBQSxjQUNaQyx3REFBVSxDQUFDQyx3REFBRCxDQURFO0FBQUEsTUFDekNDLFdBRHlDLFNBQ3pDQSxXQUR5QztBQUFBLE1BQzdCQyxPQUQ2QixTQUM3QkEsT0FENkI7QUFBQSxNQUNyQkMsSUFEcUIsU0FDckJBLElBRHFCOztBQUFBLGtCQUdqQkMsc0RBQVEsQ0FBVztBQUMvQ0MsU0FBSyxFQUFFLENBQUFQLFdBQVcsU0FBWCxJQUFBQSxXQUFXLFdBQVgsWUFBQUEsV0FBVyxDQUFFTyxLQUFiLEtBQXNCLEVBRGtCO0FBRS9DQyxRQUFJLEVBQUUsQ0FBQVIsV0FBVyxTQUFYLElBQUFBLFdBQVcsV0FBWCxZQUFBQSxXQUFX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Q0FBQzJCLE1BQUwsS0FBZ0IsQ0FBdEMsR0FDTSwrQkFETixHQUVNLEVBSEQsQ0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosQ0FESixDQXhCUixDQURKLENBREo7QUE2Q0gsQ0ExSEQ7O0dBQU1wQyxJO1VBZ0NlbUIsaUU7OztLQWhDZm5CLEk7QUE0SFNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lLXBhZ2UvZm9ybS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRleHR9IGZyb20gXCJ+L2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHtDb250ZXh0VHlwZSxGb3JtRGF0YX0gZnJvbSBcIn4vdHlwZXMvc3RhdGljXCI7XG5pbXBvcnQge3VzZU11dGF0aW9ufSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBGb3JtUHJvcHMge1xuICAgIG9uU3VibWl0PzogKGRhdGE6IEZvcm1EYXRhKSA9PiB2b2lkO1xuICAgIGluaXRpYWxEYXRhPzogYW55W107XG59XG5jb25zdCBGb3JtOiBSZWFjdC5GQzxGb3JtUHJvcHM+ID0gKHtpbml0aWFsRGF0YX0pID0+IHtcbiAgICBjb25zdCB7IHNldEFsbFBvc3RzLHNldERhdGEsZGF0YSB9ID0gdXNlQ29udGV4dChDb250ZXh0KSBhcyBDb250ZXh0VHlwZTtcblxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcbiAgICAgICAgdGl0bGU6IGluaXRpYWxEYXRhPy50aXRsZSB8fCAnJyxcbiAgICAgICAgYm9keTogaW5pdGlhbERhdGE/LmJvZHl8fCAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgdGl0bGUsIGJvZHkgfSA9IGZvcm1EYXRhO1xuXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgICB0aXRsZTogaW5pdGlhbERhdGE/LnRpdGxlIHx8ICcnLFxuICAgICAgICAgICAgYm9keTogaW5pdGlhbERhdGE/LmJvZHkgfHwgJydcbiAgICAgICAgfSlcbiAgICB9LFtdKVxuXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXG4gICAgICAgIGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKFxuICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYXRjaFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bFwiLCB7ZGF0YX0pO1xuICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHt0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJcIix9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZFwiLCB7ZXJyb3J9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNldHRsZWQocmVzKSB7XG4gICAgICAgICAgICAgICAgc2V0QWxsUG9zdHMoKHByZXYpPT5bcmVzLC4uLnByZXZdKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTXV0YXRpb24gY29tcGxldGVkLlwiKTtcbiAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7dGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFwiXCIsfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0UG9zdChlOlJlYWN0LkZvcm1FdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF3YWl0IG11dGF0aW9uLm11dGF0ZUFzeW5jKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFBvc3R9IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHgtMiBwdC0zIHBiLTEgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0aXRsZSBwb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtd2hpdGUgYmctZGFyay1saWdodGVyIHRleHQtbGcgcHktMiBweC0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgbXQtM1wiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwiYm9keVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGJnLWRhcmstbGlnaHRlciB0ZXh0LWxnIHBiLTEgcHgtMiBweS0xIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyFpbml0aWFsRGF0YSAmJihcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWVuZCBtdC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aXRsZS5sZW5ndGggPT09IDAgfHwgYm9keS5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgcHgtNCBweS0yIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9udC1ib2xkIGJnLXByaW1hcnkgcm91bmRlZC1sZyAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUubGVuZ3RoID09PSAwIHx8IGJvZHkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImN1cnNvci1ub3QtYWxsb3dlZCBvcGFjaXR5LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home-page/form.tsx\n");

/***/ })

})