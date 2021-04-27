webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");

var _jsxFileName = "D:\\Meus documentos\\Programacao\\Front\\React\\game-collection-organizer\\src\\pages\\index.js";




const HomePage = ({
  projects
}) => {
  const project = projects.project;
  const arr = [2, 3, 4, 5];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Teste"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined); // return (
  //   <div>
  //     {console.log(project)}
  //     <p>TESTEZINHO</p>
  //     {project.map((proj) => {
  //       <>
  //         {console.log(proj._id)}
  //         <li key={proj._id}>
  //           <h2>{proj.description}</h2>
  //         </li>
  //       </>
  //     })}
  //     {arr.map(teste => {
  //       {console.log(teste)}
  //       <p>{teste}</p>
  //     })}
  //   </div>
  // )
};

_c = HomePage;

HomePage.getInitialProps = async () => {
  const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].get("/projects");
  return {
    projects: response.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvamVjdHMiLCJwcm9qZWN0IiwiYXJyIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJhcGkiLCJnZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNqQyxRQUFNQyxPQUFPLEdBQUdELFFBQVEsQ0FBQ0MsT0FBekI7QUFDQSxRQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQVo7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBSGlDLENBUWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBM0JEOztLQUFNSCxROztBQTZCTkEsUUFBUSxDQUFDSSxlQUFULEdBQTJCLFlBQVk7QUFDckMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLHFEQUFHLENBQUNDLEdBQUosQ0FBUSxXQUFSLENBQXZCO0FBRUEsU0FBTztBQUFFTixZQUFRLEVBQUVJLFFBQVEsQ0FBQ0c7QUFBckIsR0FBUDtBQUNELENBSkQ7O0FBTWVSLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2ZTMxNDdjMmViMjQ5NTRlN2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHsgcHJvamVjdHMgfSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5wcm9qZWN0O1xyXG4gIGNvbnN0IGFyciA9IFsyLCAzLCA0LCA1XTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+VGVzdGU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIC8vIHJldHVybiAoXHJcbiAgLy8gICA8ZGl2PlxyXG4gIC8vICAgICB7Y29uc29sZS5sb2cocHJvamVjdCl9XHJcbiAgLy8gICAgIDxwPlRFU1RFWklOSE88L3A+XHJcbiAgLy8gICAgIHtwcm9qZWN0Lm1hcCgocHJvaikgPT4ge1xyXG4gIC8vICAgICAgIDw+XHJcbiAgLy8gICAgICAgICB7Y29uc29sZS5sb2cocHJvai5faWQpfVxyXG4gIC8vICAgICAgICAgPGxpIGtleT17cHJvai5faWR9PlxyXG4gIC8vICAgICAgICAgICA8aDI+e3Byb2ouZGVzY3JpcHRpb259PC9oMj5cclxuICAvLyAgICAgICAgIDwvbGk+XHJcbiAgLy8gICAgICAgPC8+XHJcbiAgLy8gICAgIH0pfVxyXG5cclxuICAvLyAgICAge2Fyci5tYXAodGVzdGUgPT4ge1xyXG4gIC8vICAgICAgIHtjb25zb2xlLmxvZyh0ZXN0ZSl9XHJcbiAgLy8gICAgICAgPHA+e3Rlc3RlfTwvcD5cclxuICAvLyAgICAgfSl9XHJcbiAgLy8gICA8L2Rpdj5cclxuICAvLyApXHJcbn07XHJcblxyXG5Ib21lUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KFwiL3Byb2plY3RzXCIpO1xyXG5cclxuICByZXR1cm4geyBwcm9qZWN0czogcmVzcG9uc2UuZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=