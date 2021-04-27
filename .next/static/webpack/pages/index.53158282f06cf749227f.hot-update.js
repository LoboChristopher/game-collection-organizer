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




function HomePage({
  projects
}) {
  const project = projects.project;
  const arr = [2, 3, 4, 5]; // return (
  //   <div>
  //     <p>Teste</p>
  //   </div>
  // );

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [console.log(project), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "TESTEZINHO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), project.map(proj => {
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [console.log(proj._id), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: proj.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, proj._id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
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
        lineNumber: 28,
        columnNumber: 9
      }, this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_c = HomePage;
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvamVjdHMiLCJwcm9qZWN0IiwiYXJyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInByb2oiLCJfaWQiLCJkZXNjcmlwdGlvbiIsInRlc3RlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJhcGkiLCJnZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQW1CO0FBQUVDO0FBQUYsQ0FBbkIsRUFBaUM7QUFDL0IsUUFBTUMsT0FBTyxHQUFHRCxRQUFRLENBQUNDLE9BQXpCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFaLENBRitCLENBRy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0U7QUFBQSxlQUNHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWixDQURILGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHQSxPQUFPLENBQUNJLEdBQVIsQ0FBYUMsSUFBRCxJQUFVO0FBQ3JCO0FBQUE7QUFBQSxtQkFDR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQUksQ0FBQ0MsR0FBakIsQ0FESCxlQUVFO0FBQUEsaUNBQ0U7QUFBQSxzQkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFTRixJQUFJLENBQUNDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBTUQsS0FQQSxDQUhILEVBWUdMLEdBQUcsQ0FBQ0csR0FBSixDQUFRSSxLQUFLLElBQUk7QUFDaEI7QUFBQ04sZUFBTyxDQUFDQyxHQUFSLENBQVlLLEtBQVo7QUFBbUI7O0FBQ3BCO0FBQUE7QUFBQSxrQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsS0FIQSxDQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztLQTNCUVYsUTtBQTJCUjs7QUFFREEsUUFBUSxDQUFDVyxlQUFULEdBQTJCLFlBQVk7QUFDckMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLHFEQUFHLENBQUNDLEdBQUosQ0FBUSxXQUFSLENBQXZCO0FBRUEsU0FBTztBQUFFYixZQUFRLEVBQUVXLFFBQVEsQ0FBQ0c7QUFBckIsR0FBUDtBQUNELENBSkQ7O0FBTWVmLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUzMTU4MjgyZjA2Y2Y3NDkyMjdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlICh7IHByb2plY3RzIH0pIHtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdDtcclxuICBjb25zdCBhcnIgPSBbMiwgMywgNCwgNV07XHJcbiAgLy8gcmV0dXJuIChcclxuICAvLyAgIDxkaXY+XHJcbiAgLy8gICAgIDxwPlRlc3RlPC9wPlxyXG4gIC8vICAgPC9kaXY+XHJcbiAgLy8gKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2NvbnNvbGUubG9nKHByb2plY3QpfVxyXG4gICAgICA8cD5URVNURVpJTkhPPC9wPlxyXG4gICAgICB7cHJvamVjdC5tYXAoKHByb2opID0+IHtcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2NvbnNvbGUubG9nKHByb2ouX2lkKX1cclxuICAgICAgICAgIDxsaSBrZXk9e3Byb2ouX2lkfT5cclxuICAgICAgICAgICAgPGgyPntwcm9qLmRlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHthcnIubWFwKHRlc3RlID0+IHtcclxuICAgICAgICB7Y29uc29sZS5sb2codGVzdGUpfVxyXG4gICAgICAgIDxwPnt0ZXN0ZX08L3A+XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChcIi9wcm9qZWN0c1wiKTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvamVjdHM6IHJlc3BvbnNlLmRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9