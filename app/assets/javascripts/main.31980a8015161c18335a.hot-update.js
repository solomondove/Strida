webpackHotUpdate("main",{

/***/ "./frontend/components/app.jsx":
/*!*************************************!*\
  !*** ./frontend/components/app.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav_bar_nav_bar_right_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav_bar/nav_bar_right_container */ "./frontend/components/nav_bar/nav_bar_right_container.jsx");
/* harmony import */ var _session_login_form_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session/login_form_container */ "./frontend/components/session/login_form_container.jsx");
/* harmony import */ var _session_signup_form_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session/signup_form_container */ "./frontend/components/session/signup_form_container.jsx");
/* harmony import */ var _session_splash_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session/splash_container */ "./frontend/components/session/splash_container.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/route_util */ "./frontend/util/route_util.jsx");
/* harmony import */ var _routes_create_route_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/create_route_container */ "./frontend/components/routes/create_route_container.jsx");
/* harmony import */ var _nav_bar_nav_bar_left_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav_bar/nav_bar_left_container */ "./frontend/components/nav_bar/nav_bar_left_container.jsx");
/* harmony import */ var _routes_route_index_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/route_index_container */ "./frontend/components/routes/route_index_container.jsx");
/* harmony import */ var _routes_update_route_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/update_route_container */ "./frontend/components/routes/update_route_container.jsx");
/* harmony import */ var _workouts_create_workout_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./workouts/create_workout_container */ "./frontend/components/workouts/create_workout_container.jsx");
/* harmony import */ var _workouts_workouts_index_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./workouts/workouts_index_container */ "./frontend/components/workouts/workouts_index_container.jsx");
/* harmony import */ var _workouts_update_workout_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workouts/update_workout_container */ "./frontend/components/workouts/update_workout_container.jsx");
/* harmony import */ var _dashboard_dashboard_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard_container */ "./frontend/components/dashboard/dashboard_container.jsx");
















var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/dashboard",
    className: "header-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_bar_nav_bar_left_container__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_bar_nav_bar_right_container__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["AuthRoute"], {
    path: "/login",
    component: _session_login_form_container__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["AuthRoute"], {
    path: "/signup",
    component: _session_signup_form_container__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["DashRoute"], {
    exact: true,
    path: "/dashboard",
    component: _dashboard_dashboard_container__WEBPACK_IMPORTED_MODULE_14__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["ProtectedRoute"], {
    exact: true,
    path: "/routes",
    component: _routes_route_index_container__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["ProtectedRoute"], {
    path: "/routes/create",
    component: _routes_create_route_container__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["ProtectedRoute"], {
    path: "/routes/edit/:id",
    component: _routes_update_route_container__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["ProtectedRoute"], {
    exact: true,
    path: "/workouts",
    component: _workouts_workouts_index_container__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["ProtectedRoute"], {
    path: "/workouts/create",
    component: _workouts_create_workout_container__WEBPACK_IMPORTED_MODULE_11__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["ProtectedRoute"], {
    path: "/workouts/edit/:id",
    component: _workouts_update_workout_container__WEBPACK_IMPORTED_MODULE_13__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["AuthRoute"], {
    path: "/",
    component: _session_splash_container__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "app-information"
  }, "This is a clone of Strava by Solomon Dove and intended for demonstration purposes only. It was made using Google Maps API for route creation, full CRUD features for workout tracking based on user created routes, and secure user authentication practices to protect user sign in details.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/solomondove/Strida.git"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "footer-icon fab fa-github fa-2x"
  }, "  "), "Github"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "linkedin.com/in/solomon-dove"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "footer-icon fab fa-linkedin-in fa-2x"
  }, "  "), "LinkedIn")))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.31980a8015161c18335a.hot-update.js.map