webpackHotUpdate("main",{

/***/ "./frontend/strida.jsx":
/*!*****************************!*\
  !*** ./frontend/strida.jsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store */ "./frontend/store/store.js");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/root */ "./frontend/components/root.jsx");
/* harmony import */ var _util_workout_api_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/workout_api_util */ "./frontend/util/workout_api_util.js");
/* harmony import */ var _actions_workout_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/workout_actions */ "./frontend/actions/workout_actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //testing imports only 


 //testing imports only 

document.addEventListener("DOMContentLoaded", function () {
  debugger;
  var store;

  if (window.currentUser) {
    var preloadedState = {
      entities: {
        users: _defineProperty({}, window.currentUser.id, window.currentUser)
      },
      session: {
        id: window.currentUser.id
      }
    };
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])(preloadedState);
    delete window.currentUser;
  } else {
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } //testing purposes only 


  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.workoutActions = _actions_workout_actions__WEBPACK_IMPORTED_MODULE_5__;
  window.workoutApiUtil = _util_workout_api_util__WEBPACK_IMPORTED_MODULE_4__; //testing purposes only 

  var root = document.getElementById("root");
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_root__WEBPACK_IMPORTED_MODULE_3__["default"], {
    store: store
  }), root);
});

/***/ })

})
//# sourceMappingURL=main.1624e7c46c765f9f1ef5.hot-update.js.map