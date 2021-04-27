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
    children: [console.log(project), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "TESTEZINHO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), project.map(proj => {
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [console.log(proj._id), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: proj.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, proj._id, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true);
    }), arr.map(teste => {
      {
        console.log(teste);
      }

      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: teste
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvamVjdHMiLCJwcm9qZWN0IiwiYXJyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInByb2oiLCJfaWQiLCJkZXNjcmlwdGlvbiIsInRlc3RlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJhcGkiLCJnZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDakMsUUFBTUMsT0FBTyxHQUFHRCxRQUFRLENBQUNDLE9BQXpCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFaO0FBQ0Esc0JBQ0U7QUFBQSxlQUNHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWixDQURILGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFHR0EsT0FBTyxDQUFDSSxHQUFSLENBQWFDLElBQUQsSUFBVTtBQUNyQjtBQUFBO0FBQUEsbUJBQ0dILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFJLENBQUNDLEdBQWpCLENBREgsZUFFRTtBQUFBLGlDQUNFO0FBQUEsc0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU0YsSUFBSSxDQUFDQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQU1ELEtBUEEsQ0FISCxFQVlHTCxHQUFHLENBQUNHLEdBQUosQ0FBUUksS0FBSyxJQUFJO0FBQ2hCO0FBQUNOLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSyxLQUFaO0FBQW1COztBQUNwQjtBQUFBO0FBQUEsa0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNELEtBSEEsQ0FaSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQXRCRDs7S0FBTVYsUTs7QUF3Qk5BLFFBQVEsQ0FBQ1csZUFBVCxHQUEyQixZQUFZO0FBQ3JDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxxREFBRyxDQUFDQyxHQUFKLENBQVEsV0FBUixDQUF2QjtBQUVBLFNBQU87QUFBRWIsWUFBUSxFQUFFVyxRQUFRLENBQUNHO0FBQXJCLEdBQVA7QUFDRCxDQUpEOztBQU1lZix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZDRhMGE5Y2Q1OThmNjAxMDA3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiXHJcblxyXG5cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHsgcHJvamVjdHMgfSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5wcm9qZWN0XHJcbiAgY29uc3QgYXJyID0gWzIsMyw0LDVdXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjb25zb2xlLmxvZyhwcm9qZWN0KX1cclxuICAgICAgPHA+VEVTVEVaSU5ITzwvcD5cclxuICAgICAge3Byb2plY3QubWFwKChwcm9qKSA9PiB7XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9qLl9pZCl9XHJcbiAgICAgICAgICA8bGkga2V5PXtwcm9qLl9pZH0+XHJcbiAgICAgICAgICAgIDxoMj57cHJvai5kZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7YXJyLm1hcCh0ZXN0ZSA9PiB7XHJcbiAgICAgICAge2NvbnNvbGUubG9nKHRlc3RlKX1cclxuICAgICAgICA8cD57dGVzdGV9PC9wPlxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChcIi9wcm9qZWN0c1wiKVxyXG5cclxuICByZXR1cm4geyBwcm9qZWN0czogcmVzcG9uc2UuZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=