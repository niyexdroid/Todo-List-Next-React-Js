webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/style.js":
/*!*****************************!*\
  !*** ./components/style.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Niyexdroid/Documents/WEB PROJECTS/nextjs-todo-list/components/style.js";


var Style = function Style(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "\n      .App {\n        text-align: center;\n      }\n      \n      .todo-wrapper{\n        margin: 20px auto 20px auto;\n        width: 500px;\n        min-height:600px;\n        border: 5px solid rgba(73,286, 145, 1.0);\n        padding: 20px;\n      } \n\n      .btn {\n        outline: none;\n        box-shadow: none;\n        border-width: 2px;\n        border-radius: 3px;\n        border-style: solid;\n        padding: 8px;\n      }\n\n      .btn-success {\n        color: rgb(73, 255, 145);\n        border-color: rgb(73, 255, 145);\n        background-color: transparent;\n      }\n\n      input {\n        width: 80%;\n        border: none;\n        border-color: none;\n        border-top: 2px solid rgb(73, 255, 145);\n        border-bottom: 2px solid rgb(73, 255, 145);\n        margin-right: 10px;\n        padding: 5px;\n        line-height: 17px;\n      }\n\n      input:focus {\n        outline: none;\n        box-shadow: none;\n        border-top: 2px solid rgb(73, 255, 145);\n        border-bottom: 2px solid rgb(73, 255, 145);\n      }\n    ");
};

/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/style */ "./components/style.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_todoin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/todoin */ "./components/todoin.js");






var _jsxFileName = "/Users/Niyexdroid/Documents/WEB PROJECTS/nextjs-todo-list/pages/index.js";





var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {
      todos: [{
        id: 0,
        text: 'Pray to Allah in the morning'
      }, {
        id: 1,
        text: 'Cook for the house'
      }, {
        id: 2,
        text: 'Do the rest of the house choirs'
      }],
      nextId: 3
    };
    _this.addTodo = _this.addTodo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.removeTodo = _this.removeTodo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "addTodo",
    value: function addTodo(todoText) {
      console.log('Todo added; ', todoText);
    }
  }, {
    key: "removeTodo",
    value: function removeTodo(id) {
      console.log('removing: ', id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "todo-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_todoin__WEBPACK_IMPORTED_MODULE_9__["default"], {
        todoText: "",
        addTodo: this.addTodo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.todos.map(function (map) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TodoItem, {
          todo: todo,
          key: todo.id,
          id: todo.id,
          removeTodo: _this2.removeTodo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.f8685d2b3cba8918e629.hot-update.js.map