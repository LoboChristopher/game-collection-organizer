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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: project.map(proj => {
      {
        console.log(proj.description);
      }

      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: proj.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvamVjdHMiLCJwcm9qZWN0IiwibWFwIiwicHJvaiIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiIsImdldEluaXRpYWxQcm9wcyIsInJlc3BvbnNlIiwiYXBpIiwiZ2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCO0FBQUVDO0FBQUYsQ0FBbEIsRUFBZ0M7QUFDN0MsUUFBTUMsT0FBTyxHQUFHRCxRQUFRLENBQUNDLE9BQXpCO0FBQ0Esc0JBQ0U7QUFBQSxjQUNHQSxPQUFPLENBQUNDLEdBQVIsQ0FBYUMsSUFBRCxJQUFVO0FBQ3JCO0FBQUNDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLFdBQWpCO0FBQThCOztBQUMvQjtBQUFBO0FBQUEsa0JBQUtILElBQUksQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsS0FIQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEO0tBVnVCUCxROztBQVl4QkEsUUFBUSxDQUFDUSxlQUFULEdBQTJCLFlBQVk7QUFDckMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLHFEQUFHLENBQUNDLEdBQUosQ0FBUSxXQUFSLENBQXZCO0FBRUEsU0FBTztBQUFFVixZQUFRLEVBQUVRLFFBQVEsQ0FBQ0c7QUFBckIsR0FBUDtBQUNELENBSkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmNlMTFlYzg1OGVjMGY2ZjdmMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoeyBwcm9qZWN0cyB9KSB7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLnByb2plY3Q7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bD5cclxuICAgICAge3Byb2plY3QubWFwKChwcm9qKSA9PiB7XHJcbiAgICAgICAge2NvbnNvbGUubG9nKHByb2ouZGVzY3JpcHRpb24pfVxyXG4gICAgICAgIDxsaT57cHJvai5kZXNjcmlwdGlvbn08L2xpPjtcclxuICAgICAgfSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXCIvcHJvamVjdHNcIik7XHJcblxyXG4gIHJldHVybiB7IHByb2plY3RzOiByZXNwb25zZS5kYXRhIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=