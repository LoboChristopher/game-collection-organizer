webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");


var _jsxFileName = "D:\\Meus documentos\\Programacao\\Front\\React\\game-collection-organizer\\src\\pages\\index.js";



function HomePage({
  projects
}) {
  const project = projects.project;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Teste"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: project.map(proj => {
        {
          console.log(proj.description);
        }

        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: proj.description
        }, proj._id, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = HomePage;

HomePage.getInitialProps = async () => {
  const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].get("/projects");
  return {
    projects: response.data
  };
};

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvamVjdHMiLCJwcm9qZWN0IiwibWFwIiwicHJvaiIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiIsIl9pZCIsImdldEluaXRpYWxQcm9wcyIsInJlc3BvbnNlIiwiYXBpIiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQWdDO0FBQzdDLFFBQU1DLE9BQU8sR0FBR0QsUUFBUSxDQUFDQyxPQUF6QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQ0dBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhQyxJQUFELElBQVU7QUFDckI7QUFDRUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLFdBQWpCO0FBQ0Q7O0FBQ0Q7QUFBQTtBQUFBLG9CQUFvQkgsSUFBSSxDQUFDRztBQUF6QixXQUFTSCxJQUFJLENBQUNJLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNELE9BTEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQWFEO0tBZnVCUixROztBQWlCeEJBLFFBQVEsQ0FBQ1MsZUFBVCxHQUEyQixZQUFZO0FBQ3JDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxxREFBRyxDQUFDQyxHQUFKLENBQVEsV0FBUixDQUF2QjtBQUVBLFNBQU87QUFBRVgsWUFBUSxFQUFFUyxRQUFRLENBQUNHO0FBQXJCLEdBQVA7QUFDRCxDQUpEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA5MzBmMDBhMmU3NTQ4MTQ2NmI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgcHJvamVjdHMgfSkge1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5wcm9qZWN0O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8cD5UZXN0ZTwvcD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwcm9qZWN0Lm1hcCgocHJvaikgPT4ge1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxsaSBrZXk9e3Byb2ouX2lkfT57cHJvai5kZXNjcmlwdGlvbn08L2xpPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXCIvcHJvamVjdHNcIik7XHJcblxyXG4gIHJldHVybiB7IHByb2plY3RzOiByZXNwb25zZS5kYXRhIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=