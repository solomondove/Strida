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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_bar_nav_bar_left_container__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_bar_nav_bar_right_container__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_6__["AuthRoute"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
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

/***/ }),

/***/ "./frontend/components/dashboard/dashboard.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/dashboard/dashboard.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard_workout_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard_workout_index_item */ "./frontend/components/dashboard/dashboard_workout_index_item.jsx");
/* harmony import */ var _dashboard_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard_profile */ "./frontend/components/dashboard/dashboard_profile.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Dashboard = /*#__PURE__*/function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _super.apply(this, arguments);
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchWorkouts(this.props.userId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var workoutsReversed = this.props.workouts.reverse();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "profile-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
        user: this.props.user,
        workouts: this.props.workouts,
        routesObj: this.props.routesObj,
        routesArr: this.props.routesArr
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "workout-dash-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "feed-header"
      }, "Your Activities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "tile-container",
        className: "workout-dash-container"
      }, workoutsReversed.map(function (workout) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_workout_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          workout: workout,
          user: _this.props.user,
          key: workout.id,
          deleteWorkout: _this.props.deleteWorkout,
          route: _this.props.routesObj[workout.route_id]
        });
      }))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./frontend/components/dashboard/dashboard_container.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/dashboard/dashboard_container.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ "./frontend/components/dashboard/dashboard.jsx");
/* harmony import */ var _actions_workout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/workout_actions */ "./frontend/actions/workout_actions.js");




var mapSTP = function mapSTP(state) {
  return {
    workouts: Object.values(state.entities.workouts),
    userId: state.session.id,
    user: state.entities.users[state.session.id],
    routesArr: Object.values(state.entities.routes),
    routesObj: Object.assign({}, state.entities.routes)
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    fetchWorkouts: function fetchWorkouts(userId) {
      return dispatch(Object(_actions_workout_actions__WEBPACK_IMPORTED_MODULE_2__["fetchWorkouts"])(userId));
    },
    deleteWorkout: function deleteWorkout(workoutId) {
      return dispatch(Object(_actions_workout_actions__WEBPACK_IMPORTED_MODULE_2__["deleteWorkout"])(workoutId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_dashboard__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/dashboard/dashboard_profile.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/dashboard/dashboard_profile.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var DashboardProfile = /*#__PURE__*/function (_React$Component) {
  _inherits(DashboardProfile, _React$Component);

  var _super = _createSuper(DashboardProfile);

  function DashboardProfile() {
    _classCallCheck(this, DashboardProfile);

    return _super.apply(this, arguments);
  }

  _createClass(DashboardProfile, [{
    key: "calculateMilesTraveled",
    value: function calculateMilesTraveled() {
      var _this = this;

      var routesTraveled = [];
      this.props.workouts.forEach(function (workout) {
        if (workout.route_id !== null) routesTraveled.push(workout.route_id);
      });
      var metersTraveled = 0;
      routesTraveled.forEach(function (route_id) {
        if (_this.props.routesObj[route_id]) {
          metersTraveled += _this.props.routesObj[route_id].distance;
        }
      });
      var milesTraveled = (metersTraveled * 0.000621371).toFixed(2);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "stat-total"
      }, milesTraveled);
    }
  }, {
    key: "calculateTimeSpentExercising",
    value: function calculateTimeSpentExercising() {
      var minutesTotal = 0;
      this.props.workouts.forEach(function (workout) {
        minutesTotal += workout.time_elapsed;
      });
      var minutes = minutesTotal % 60;
      var hours = Math.floor(minutesTotal / 60);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "stat-total"
      }, hours, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "denomination"
      }, "h "), minutes);
    }
  }, {
    key: "ageOfUser",
    value: function ageOfUser() {
      var date = new Date(this.props.user.created_at);
      return "".concat(date.getMonth() + 1, "/").concat(date.getDate(), "/").concat(date.getFullYear());
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard-profile"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-summary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-user-circle fa-4x",
        id: "profile-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "profile-header"
      }, this.props.user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-tile-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "profile-stat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/workouts",
        className: "profile-subtext"
      }, "Workouts", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "profile-text"
      }, this.props.workouts.length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "profile-stat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/routes",
        className: "profile-subtext"
      }, "Routes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "profile-text"
      }, this.props.routesArr.length))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard-totals"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-shoe-prints fa-3x",
        id: "stat-block-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "stat-block-label"
      }, "Total Distance Traveled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.calculateMilesTraveled(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "denomination"
      }, "mi"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block-icon icon3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-stopwatch fa-3x",
        id: "stat-block-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "stat-block-label"
      }, "Total Time Spent Exercising"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.calculateTimeSpentExercising(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "denomination"
      }, "m"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block-icon icon3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-pagelines fa-3x",
        id: "stat-block-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stat-block-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "stat-block-label"
      }, "Member Since"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.ageOfUser()))));
    }
  }]);

  return DashboardProfile;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardProfile);

/***/ }),

/***/ "./frontend/components/dashboard/dashboard_workout_index_item.jsx":
/*!************************************************************************!*\
  !*** ./frontend/components/dashboard/dashboard_workout_index_item.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var DashboardWorkoutIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DashboardWorkoutIndexItem, _React$Component);

  var _super = _createSuper(DashboardWorkoutIndexItem);

  function DashboardWorkoutIndexItem() {
    _classCallCheck(this, DashboardWorkoutIndexItem);

    return _super.apply(this, arguments);
  }

  _createClass(DashboardWorkoutIndexItem, [{
    key: "handleDelete",
    value: function handleDelete() {
      this.props.deleteWorkout(this.props.workout.id);
    }
  }, {
    key: "workoutIcon",
    value: function workoutIcon() {
      var workoutType = this.props.workout.activity_type;

      switch (workoutType) {
        case "Running":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-running fa-5x",
            id: "index-icon"
          });

        case "Cycling":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-biking fa-5x",
            id: "index-icon"
          });

        case "Hiking":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-hiking fa-5x",
            id: "index-icon"
          });

        case "Yoga":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-praying-hands fa-5x",
            id: "index-icon"
          });

        case "Strength Training":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-dumbbell fa-5x",
            id: "index-icon"
          });

        default:
          break;
      }
    }
  }, {
    key: "routeStats",
    value: function routeStats() {
      var _this$props = this.props,
          workout = _this$props.workout,
          user = _this$props.user,
          route = _this$props.route;

      if (route === undefined) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-tile-section-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-stat-section-header"
        }, "Time:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "stat"
        }, workout.time_elapsed), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "denomination"
        }, "m")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-stat-section-header"
        }, "Date:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "stat"
        }, this.dateInfo())));
      } else {
        var routeDistance = route.distance * 0.00062371;
        var workoutPacePerMinute = (workout.time_elapsed / routeDistance).toFixed(2);
        var seconds = (workoutPacePerMinute % 1 * 60).toFixed(0);
        var minutes = Math.floor(workoutPacePerMinute);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-tile-section-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-stat-section-header"
        }, "Time:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "dash-stat"
        }, workout.time_elapsed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "denomination"
        }, "m")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-stat-section-header"
        }, "Distance:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "dash-stat"
        }, routeDistance.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "denomination"
        }, "mi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-stat-section-header"
        }, "Pace:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "dash-stat"
        }, minutes, ":", seconds), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "denomination"
        }, "/mi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dash-stat-section-header"
        }, "Date:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "stat"
        }, this.dateInfo())));
      }
    }
  }, {
    key: "dateInfo",
    value: function dateInfo() {
      var date = new Date(this.props.workout.created_at);
      return "".concat(date.getMonth() + 1, "/").concat(date.getDate(), "/").concat(date.getFullYear());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          workout = _this$props2.workout,
          user = _this$props2.user,
          route = _this$props2.route;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard-workout-tile"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dash-index-tile-left"
      }, this.workoutIcon(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/workouts/edit/".concat(workout.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "session-button",
        id: "workout-index-button"
      }, "Edit Workout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleDelete,
        className: "session-button",
        id: "workout-index-button"
      }, "Delete Workout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dash-index-tile-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "dash-workout-title"
      }, user.email, " went ", workout.activity_type.toLowerCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "tile-section-header"
      }, "Description:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "dash-description-content"
      }, workout.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.routeStats()));
    }
  }]);

  return DashboardWorkoutIndexItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardWorkoutIndexItem);

/***/ }),

/***/ "./frontend/components/nav_bar/nav_bar_left.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/nav_bar/nav_bar_left.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var currentUser = _ref.currentUser;
  var display = currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-left route-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-menu-trigger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "nav-menu-anchor"
  }, "Routes \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-angle-down"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-menu-link",
    to: "/routes"
  }, "My Routes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-menu-link",
    to: "/routes/create"
  }, "Create Route"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-menu-trigger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "nav-menu-anchor"
  }, "Workouts \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-angle-down"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-menu-link",
    to: "/workouts"
  }, "My Workouts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-menu-link",
    to: "/workouts/create"
  }, "Create Workout")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-left"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, display);
});

/***/ }),

/***/ "./frontend/components/nav_bar/nav_bar_left_container.jsx":
/*!****************************************************************!*\
  !*** ./frontend/components/nav_bar/nav_bar_left_container.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _nav_bar_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav_bar_left */ "./frontend/components/nav_bar/nav_bar_left.jsx");



var mapSTP = function mapSTP(state) {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_nav_bar_left__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/nav_bar/nav_bar_right.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/nav_bar/nav_bar_right.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var currentUser = _ref.currentUser,
      logout = _ref.logout;
  var display = currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "session-button",
    id: "submit-logout",
    onClick: function onClick() {
      return logout();
    }
  }, "Logout")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "session-button",
    to: "/signup"
  }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "session-button",
    to: "/login"
  }, "Log In"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, display);
});

/***/ }),

/***/ "./frontend/components/nav_bar/nav_bar_right_container.jsx":
/*!*****************************************************************!*\
  !*** ./frontend/components/nav_bar/nav_bar_right_container.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _nav_bar_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav_bar_right */ "./frontend/components/nav_bar/nav_bar_right.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");




var mapSTP = function mapSTP(state) {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    logout: function logout() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_nav_bar_right__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/routes/create_route_container.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/routes/create_route_container.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_route_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/route_actions */ "./frontend/actions/route_actions.js");
/* harmony import */ var _route_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route_map */ "./frontend/components/routes/route_map.jsx");




var mapSTP = function mapSTP(state, ownProps) {
  return {
    name: "",
    distance: 0,
    user_id: state.session.id,
    waypoints: [],
    formType: "Create Route"
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    action: function action(route) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_1__["createRoute"])(route));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_route_map__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/routes/route_index.jsx":
/*!****************************************************!*\
  !*** ./frontend/components/routes/route_index.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _route_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route_index_item */ "./frontend/components/routes/route_index_item.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var RouteIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(RouteIndex, _React$Component);

  var _super = _createSuper(RouteIndex);

  function RouteIndex() {
    _classCallCheck(this, RouteIndex);

    return _super.apply(this, arguments);
  }

  _createClass(RouteIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRoutes(this.props.user.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var routesReversed = this.props.routes.reverse();
      return this.props.routes.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-heading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "index-heading-header"
      }, "My Routes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/routes/create",
        className: "session-button create-route"
      }, "Create New Route")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "tile-container",
        className: "map-tile-container"
      }, routesReversed.map(function (route) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_route_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          route: route,
          key: route.id,
          removeRoute: _this.props.removeRoute
        });
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index"
      }, "Please Create a Route!");
    }
  }]);

  return RouteIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RouteIndex);

/***/ }),

/***/ "./frontend/components/routes/route_index_container.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/routes/route_index_container.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _route_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route_index */ "./frontend/components/routes/route_index.jsx");
/* harmony import */ var _actions_route_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/route_actions */ "./frontend/actions/route_actions.js");




var mapSTP = function mapSTP(state) {
  return {
    user: state.entities.users[state.session.id],
    routes: Object.values(state.entities.routes)
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    fetchRoutes: function fetchRoutes(userId) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_2__["fetchRoutes"])(userId));
    },
    fetchRoute: function fetchRoute(routeId) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_2__["fetchRoute"])(routeId));
    },
    removeRoute: function removeRoute(routeId) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_2__["removeRoute"])(routeId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_route_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/routes/route_index_item.jsx":
/*!*********************************************************!*\
  !*** ./frontend/components/routes/route_index_item.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RouteIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(RouteIndexItem, _React$Component);

  var _super = _createSuper(RouteIndexItem);

  function RouteIndexItem(props) {
    var _this;

    _classCallCheck(this, RouteIndexItem);

    _this = _super.call(this, props);
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RouteIndexItem, [{
    key: "handleDelete",
    value: function handleDelete(e) {
      e.preventDefault();
      this.props.removeRoute(this.props.route.id);
    }
  }, {
    key: "render",
    value: function render() {
      var route = this.props.route;
      var distance = (route.distance * 0.000621371).toFixed(2);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "route-index-tile"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "route-list-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-route fa-5x",
        id: "index-icon"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "route-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "route-name"
      }, route.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "distance"
      }, distance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mi"
      }, "mi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "dist"
      }, "Distance"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/routes/edit/".concat(route.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "session-button",
        id: "index-button"
      }, "Edit Route")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleDelete,
        className: "session-button",
        id: "index-button"
      }, "Delete Route"));
    }
  }]);

  return RouteIndexItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RouteIndexItem);

/***/ }),

/***/ "./frontend/components/routes/route_map.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/routes/route_map.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_route_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_selectors */ "./frontend/util/route_selectors.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var RouteMap = /*#__PURE__*/function (_React$Component) {
  _inherits(RouteMap, _React$Component);

  var _super = _createSuper(RouteMap);

  function RouteMap(props) {
    var _this;

    _classCallCheck(this, RouteMap);

    _this = _super.call(this, props);
    _this.directionsService = new google.maps.DirectionsService();
    _this.directionsRenderer = new google.maps.DirectionsRenderer();
    _this.state = {
      name: _this.props.name,
      distance: _this.props.distance,
      waypoints: _this.props.waypoints,
      user_id: _this.props.user_id,
      id: _this.props.id
    };
    _this.center = _this.state.waypoints.length === 0 ? {
      lat: 37.7758,
      lng: -122.435
    } : _this.state.waypoints[_this.state.waypoints.length - 1];
    _this.mapOptions = {
      center: _this.center,
      zoom: 14
    };
    _this.markers = [];
    _this.mapDirectionsFromMarkers = _this.mapDirectionsFromWaypoints.bind(_assertThisInitialized(_this));
    _this.renderCallback = _this.renderCallback.bind(_assertThisInitialized(_this));
    _this.undoLastWaypoint = _this.undoLastWaypoint.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.updateStateWaypoints = _this.updateStateWaypoints.bind(_assertThisInitialized(_this));
    _this.placeFirstMarker = _this.placeFirstMarker.bind(_assertThisInitialized(_this));
    _this.createMarker = _this.createMarker.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RouteMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.map = new google.maps.Map(this.mapNode, this.mapOptions);
      this.directionsRenderer.setMap(this.map);
      this.map.addListener('click', function (e) {
        _this2.createMarker(e.latLng);
      });

      if (this.state.waypoints.length > 1) {
        this.mapDirectionsFromWaypoints(this.state.waypoints);
      }

      if (this.props.formType === "Update Route") {
        this.props.fetchRoute(this.props.id).then(function (result) {
          _this2.updateStateWaypoints(Object.values(result.payload.waypoints));
        });
      }
    }
  }, {
    key: "updateStateWaypoints",
    value: function updateStateWaypoints(waypoints) {
      this.setState({
        waypoints: waypoints
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.waypoints.length !== this.state.waypoints.length) {
        this.markers.forEach(function (marker) {
          marker.setMap(null);
        });

        if (this.state.waypoints.length > 1) {
          this.mapDirectionsFromWaypoints(this.state.waypoints);
        } else if (this.state.waypoints.length === 1) {
          this.directionsRenderer.setMap(null);
          this.placeFirstMarker();
        }
      }
    }
  }, {
    key: "placeFirstMarker",
    value: function placeFirstMarker() {
      var pos = this.state.waypoints[0];
      var marker = new google.maps.Marker({
        position: pos,
        map: this.map
      });
      this.markers.push(marker);
    } //calculates state.distance of route based on results from directions_changed event listener

  }, {
    key: "computeTotalDistance",
    value: function computeTotalDistance(result) {
      var total = 0;
      var thisRoute = result.routes[0];
      thisRoute.legs.forEach(function (leg) {
        total += leg.distance.value;
      });
      this.setState({
        distance: total
      });
    } //takes in a position formatted as a LatLng Maps object, creates marker on map and adds to local state. 

  }, {
    key: "createMarker",
    value: function createMarker(position) {
      var newCoordinates = {
        lat: position.lat(),
        lng: position.lng()
      };
      var newWaypoints = Object.assign([], this.state.waypoints);
      newWaypoints.push(newCoordinates);
      this.setState({
        waypoints: newWaypoints
      });
    } //helper function for mapDirectionsFromMarkers

  }, {
    key: "renderCallback",
    value: function renderCallback(result, status) {
      if (status === 'OK') {
        this.directionsRenderer.setMap(null);
        this.directionsRenderer.setMap(this.map);
        this.directionsRenderer.setDirections(result);
        this.computeTotalDistance(result);
      }
    } //helper function for mapDirectionsFromMarkers

  }, {
    key: "createWaypoint",
    value: function createWaypoint(position) {
      return {
        location: position
      };
    }
  }, {
    key: "mapDirectionsFromWaypoints",
    value: function mapDirectionsFromWaypoints(positions) {
      var _this3 = this;

      var travelMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "WALKING";
      var origin;
      var destination;
      var waypoints;

      if (positions.length === 1) {
        origin = positions[0];
        destination = positions[0];
      } else {
        origin = positions[0];
        destination = positions[positions.length - 1];
        var middlePosArray = positions.slice(1, positions.length - 1);
        waypoints = middlePosArray.map(function (pos) {
          return _this3.createWaypoint(pos);
        });
      }

      var request = {
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        travelMode: travelMode
      };
      this.directionsService.route(request, this.renderCallback);
    }
  }, {
    key: "undoLastWaypoint",
    value: function undoLastWaypoint() {
      var newWaypoints = this.state.waypoints.slice(0);
      newWaypoints.pop();
      this.setState(function (state, props) {
        return {
          waypoints: newWaypoints
        };
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this4 = this;

      e.preventDefault();
      this.props.action(this.state).then(function (response) {
        var that = _this4;
        that.props.history.push('/routes');
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this5 = this;

      return function (e) {
        return _this5.setState(_defineProperty({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var distance = (this.state.distance * 0.000621371).toFixed(2);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "map-header"
      }, this.props.formType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "form-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Route name (required) ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.name,
        placeholder: "Name",
        onChange: this.update("name")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "session-button",
        id: "map-submit"
      }, this.props.formType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this6.undoLastWaypoint();
        },
        className: "form-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-undo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-form-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "map-header"
      }, "Route Stats"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "map-distance"
      }, "Distance: ", distance, " miles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-nav"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        className: "maps-link",
        to: "/routes"
      }, "My Routes"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "map-container",
        ref: function ref(map) {
          return _this6.mapNode = map;
        }
      })));
    }
  }]);

  return RouteMap;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RouteMap);

/***/ }),

/***/ "./frontend/components/routes/update_route_container.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/routes/update_route_container.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _route_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route_map */ "./frontend/components/routes/route_map.jsx");
/* harmony import */ var _util_route_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/route_selectors */ "./frontend/util/route_selectors.js");
/* harmony import */ var _actions_route_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/route_actions */ "./frontend/actions/route_actions.js");





var mapSTP = function mapSTP(state, ownProps) {
  var routeId = ownProps.match.params.id;
  var route = state.entities.routes[routeId];
  return {
    id: routeId,
    name: route.name,
    distance: route.distance,
    user_id: route.user_id,
    waypoints: Object.values(state.entities.waypoints),
    formType: 'Update Route'
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    action: function action(route) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_3__["updateRoute"])(route));
    },
    fetchRoute: function fetchRoute(routeId) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_3__["fetchRoute"])(routeId));
    },
    removeRoute: function removeRoute(routeId) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_3__["removeRoute"])(routeId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_route_map__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/session/login_form_container.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/session/login_form_container.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _session_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_form */ "./frontend/components/session/session_form.jsx");




var mapSTP = function mapSTP(state, ownProps) {
  return {
    errors: state.errors,
    formType: 'Log In'
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    action: function action(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["login"])(user));
    },
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["login"])(user));
    },
    clearSessionErrors: function clearSessionErrors() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["clearSessionErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_session_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/session/session_form.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/session/session_form.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SessionForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SessionForm, _React$Component);

  var _super = _createSuper(SessionForm);

  function SessionForm(props) {
    var _this;

    _classCallCheck(this, SessionForm);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      password: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.demoSubmit = _this.demoSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SessionForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.clearSessionErrors();
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.action(this.state);
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "demoSubmit",
    value: function demoSubmit(e) {
      e.preventDefault();
      var demo = {
        email: 'strider@wingfoot.com',
        password: 'password'
      };
      this.props.login(demo);
    }
  }, {
    key: "render",
    value: function render() {
      var label = this.props.formType === "Sign Up" ? "Join Strida today, it's Free." : "Log In";
      console.log(this.props.errors.session.responseJSON);
      var errorMessages = this.props.errors.session.responseJSON === undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "errors"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.props.errors.session.responseJSON.map(function (error, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: idx
        }, error);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-background",
        id: "form-background"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "form-type"
      }, label), errorMessages, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-field",
        type: "text",
        value: this.state.email,
        placeholder: "Email",
        onChange: this.update("email")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-field",
        type: "password",
        value: this.state.password,
        placeholder: "Password",
        onChange: this.update("password")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "session-button",
        id: "submit-session",
        type: "submit"
      }, this.props.formType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.demoSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "session-button",
        id: "submit-session-demo",
        type: "submit"
      }, "Demo Login"))));
    }
  }]);

  return SessionForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SessionForm);

/***/ }),

/***/ "./frontend/components/session/signup_form_container.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/session/signup_form_container.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _session_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_form */ "./frontend/components/session/session_form.jsx");




var mapSTP = function mapSTP(state, ownProps) {
  return {
    errors: state.errors,
    formType: 'Sign Up'
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    action: function action(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["signup"])(user));
    },
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["login"])(user));
    },
    clearSessionErrors: function clearSessionErrors() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["clearSessionErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_session_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/session/splash.jsx":
/*!************************************************!*\
  !*** ./frontend/components/session/splash.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SplashPage = /*#__PURE__*/function (_React$Component) {
  _inherits(SplashPage, _React$Component);

  var _super = _createSuper(SplashPage);

  function SplashPage(props) {
    var _this;

    _classCallCheck(this, SplashPage);

    _this = _super.call(this, props);
    _this.demoSubmit = _this.demoSubmit.bind(_assertThisInitialized(_this));
    _this.redirectToLogin = _this.redirectToLogin.bind(_assertThisInitialized(_this));
    _this.redirectToSignup = _this.redirectToSignup.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SplashPage, [{
    key: "demoSubmit",
    value: function demoSubmit(e) {
      e.preventDefault();
      var demo = {
        email: 'strider@wingfoot.com',
        password: 'password'
      };
      this.props.login(demo);
    }
  }, {
    key: "redirectToLogin",
    value: function redirectToLogin(e) {
      e.preventDefault();
      this.props.history.push('/login');
    }
  }, {
    key: "redirectToSignup",
    value: function redirectToSignup(e) {
      e.preventDefault();
      this.props.history.push('/signup');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "splash-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "splash-header"
      }, "The #1 app for runners and cyclists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "splash-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "splash-image"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "splash-menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "splash-dividing-border"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "splash-form",
        onSubmit: this.redirectToLogin
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "splash-demo",
        className: "session-button",
        type: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-user-alt fa-1x splash-icon"
      }), " Log In With Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "splash-form",
        onSubmit: this.redirectToSignup
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "splash-demo",
        className: "session-button",
        type: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-envelope fa-1x splash-icon"
      }), " Sign Up With Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "splash-dividing-or"
      }, "or"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.demoSubmit,
        className: "splash-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "session-button",
        id: "splash-demo",
        type: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-id-card fa-1x splash-icon"
      }), "Log In As A Demo User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "By signing up for Strida, you agree to the Terms of Service. We don't have a Privacy Policy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Already a member? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/login",
        className: "splash-link"
      }, "Log In"), " ")))));
    }
  }]);

  return SplashPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SplashPage);

/***/ }),

/***/ "./frontend/components/session/splash_container.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/session/splash_container.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash */ "./frontend/components/session/splash.jsx");




var mapDTP = function mapDTP(dispatch) {
  return {
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["login"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDTP)(_splash__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/workouts/create_workout_container.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/workouts/create_workout_container.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_workout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/workout_actions */ "./frontend/actions/workout_actions.js");
/* harmony import */ var _workout_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workout_form */ "./frontend/components/workouts/workout_form.jsx");
/* harmony import */ var _actions_route_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/route_actions */ "./frontend/actions/route_actions.js");





var mapSTP = function mapSTP(state) {
  return {
    user_id: state.session.id,
    time_elapsed: 0,
    description: '',
    activity_type: 'Running',
    route_id: "no route",
    formType: 'Create Workout',
    routes: Object.values(state.entities.routes)
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    action: function action(workout) {
      return dispatch(Object(_actions_workout_actions__WEBPACK_IMPORTED_MODULE_1__["createWorkout"])(workout));
    },
    fetchRoutes: function fetchRoutes(userId) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_3__["fetchRoutes"])(userId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_workout_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/workouts/update_workout_container.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/workouts/update_workout_container.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_workout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/workout_actions */ "./frontend/actions/workout_actions.js");
/* harmony import */ var _workout_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workout_form */ "./frontend/components/workouts/workout_form.jsx");
/* harmony import */ var _actions_route_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/route_actions */ "./frontend/actions/route_actions.js");





var mapSTP = function mapSTP(state, ownProps) {
  var workoutId = ownProps.match.params.id;
  var workout = state.entities.workouts[workoutId];
  return {
    id: workoutId,
    user_id: workout.user_id,
    time_elapsed: workout.time_elapsed,
    description: workout.description,
    activity_type: workout.activity_type,
    route_id: workout.route_id,
    formType: 'Update Workout',
    routes: Object.values(state.entities.routes)
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    action: function action(workout) {
      return dispatch(Object(_actions_workout_actions__WEBPACK_IMPORTED_MODULE_1__["updateWorkout"])(workout));
    },
    fetchRoutes: function fetchRoutes(userId) {
      return dispatch(Object(_actions_route_actions__WEBPACK_IMPORTED_MODULE_3__["fetchRoutes"])(userId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_workout_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/workouts/workout_form.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/workouts/workout_form.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var WorkoutForm = /*#__PURE__*/function (_React$Component) {
  _inherits(WorkoutForm, _React$Component);

  var _super = _createSuper(WorkoutForm);

  function WorkoutForm(props) {
    var _this;

    _classCallCheck(this, WorkoutForm);

    _this = _super.call(this, props);
    _this.state = {
      user_id: _this.props.user_id,
      time_elapsed: _this.props.time_elapsed,
      description: _this.props.description,
      activity_type: _this.props.activity_type,
      route_id: _this.props.route_id,
      id: _this.props.id
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.updateInteger = _this.updateInteger.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WorkoutForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRoutes(this.props.user_id);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.action(this.state).then(function (result) {
        var that = _this2;
        that.props.history.push('/workouts');
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this3 = this;

      return function (e) {
        return _this3.setState(_defineProperty({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "updateInteger",
    value: function updateInteger(field) {
      var _this4 = this;

      return function (e) {
        return _this4.setState(_defineProperty({}, field, parseInt(e.currentTarget.value)));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var routeOptions = Object.values(this.props.routes);
      var routeSelector = routeOptions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "form-label"
      }, "Route:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        name: "route-id",
        id: "route-id",
        className: "input-field form-dropdown",
        value: this.state.route_id,
        onChange: this.updateInteger('route_id')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "null"
      }, "Select Route(optional)"), routeOptions.map(function (route, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: route.id,
          key: idx
        }, route.name);
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "form-label"
      }, "Route:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Please create a route!"));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-background"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "form-type"
      }, this.props.formType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "form-label"
      }, "Activity Type:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        name: "activity-type",
        id: "activity-type",
        className: "input-field form-dropdown",
        value: this.state.activity_type,
        onChange: this.update('activity_type')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Running"
      }, "Running"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Cycling"
      }, "Cycling"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Hiking"
      }, "Hiking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Yoga"
      }, "Yoga"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Strength Training"
      }, "Strength Training"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "form-label"
      }, "Description:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "input-field",
        value: this.state.description,
        onChange: this.update("description"),
        cols: "30",
        rows: "10",
        placeholder: "How'd it go?"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), routeSelector, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "form-label"
      }, "Duration(minutes):", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        className: "input-field",
        value: this.state.time_elapsed,
        onChange: this.updateInteger("time_elapsed")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "session-button",
        id: "submit-session"
      }, this.props.formType))));
    }
  }]);

  return WorkoutForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WorkoutForm);

/***/ }),

/***/ "./frontend/components/workouts/workout_index.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/workouts/workout_index.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _workout_index_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout_index_item */ "./frontend/components/workouts/workout_index_item.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var WorkoutIndex = /*#__PURE__*/function (_React$Component) {
  _inherits(WorkoutIndex, _React$Component);

  var _super = _createSuper(WorkoutIndex);

  function WorkoutIndex() {
    _classCallCheck(this, WorkoutIndex);

    return _super.apply(this, arguments);
  }

  _createClass(WorkoutIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchWorkouts(this.props.userId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var workoutsReversed = this.props.workouts.reverse();
      return this.props.workouts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-heading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "index-heading-header"
      }, "My Workouts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/workouts/create",
        className: "session-button create-workout"
      }, "Create New Workout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "tile-container",
        className: "workout-tile-container"
      }, workoutsReversed.map(function (workout) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_workout_index_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          workout: workout,
          user: _this.props.user,
          key: workout.id,
          deleteWorkout: _this.props.deleteWorkout,
          route: _this.props.routes[workout.route_id]
        });
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index"
      }, "Please Create A Workout!");
    }
  }]);

  return WorkoutIndex;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WorkoutIndex);

/***/ }),

/***/ "./frontend/components/workouts/workout_index_item.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/workouts/workout_index_item.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var WorkoutIndexItem = /*#__PURE__*/function (_React$Component) {
  _inherits(WorkoutIndexItem, _React$Component);

  var _super = _createSuper(WorkoutIndexItem);

  function WorkoutIndexItem(props) {
    var _this;

    _classCallCheck(this, WorkoutIndexItem);

    _this = _super.call(this, props);
    _this.handleDelete = _this.handleDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WorkoutIndexItem, [{
    key: "handleDelete",
    value: function handleDelete() {
      this.props.deleteWorkout(this.props.workout.id);
    }
  }, {
    key: "workoutIcon",
    value: function workoutIcon() {
      var workoutType = this.props.workout.activity_type;

      switch (workoutType) {
        case "Running":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-running fa-5x",
            id: "index-icon"
          });

        case "Cycling":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-biking fa-5x",
            id: "index-icon"
          });

        case "Hiking":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-hiking fa-5x",
            id: "index-icon"
          });

        case "Yoga":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-praying-hands fa-5x",
            id: "index-icon"
          });

        case "Strength Training":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-dumbbell fa-5x",
            id: "index-icon"
          });

        default:
          break;
      }
    }
  }, {
    key: "routeStats",
    value: function routeStats() {
      var _this$props = this.props,
          workout = _this$props.workout,
          user = _this$props.user,
          route = _this$props.route;

      if (route === undefined) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tile-section-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "tile-section-header"
        }, "Time:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "stat"
        }, workout.time_elapsed), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "denomination"
        }, "m")));
      } else {
        var routeDistance = route.distance * 0.00062371;
        var workoutPacePerMinute = (workout.time_elapsed / routeDistance).toFixed(2);
        var seconds = (workoutPacePerMinute % 1 * 60).toFixed(0);
        var minutes = Math.floor(workoutPacePerMinute);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tile-section-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tile-section-header"
        }, "Time:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "stat"
        }, workout.time_elapsed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "denomination"
        }, "m")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tile-section-header"
        }, "Distance:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "stat"
        }, routeDistance.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "denomination"
        }, "mi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tile-section-header"
        }, "Pace:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "stat"
        }, minutes, ":", seconds), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "denomination"
        }, "/mi")));
      }
    }
  }, {
    key: "dateInfo",
    value: function dateInfo() {
      var date = new Date(this.props.workout.created_at);
      return "on ".concat(date.getMonth() + 1, "/").concat(date.getDate(), "/").concat(date.getFullYear());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          workout = _this$props2.workout,
          user = _this$props2.user,
          route = _this$props2.route;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "workout-index-tile"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-tile-left"
      }, this.workoutIcon(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/workouts/edit/".concat(workout.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "session-button",
        id: "workout-index-button"
      }, "Edit Workout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleDelete,
        className: "session-button",
        id: "workout-index-button"
      }, "Delete Workout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index-tile-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "workout-title"
      }, user.email, " went ", workout.activity_type.toLowerCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "tile-section-header"
      }, "Description:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "description-content"
      }, workout.description)), this.routeStats(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "index-time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "tile-section-header"
      }, this.dateInfo()))));
    }
  }]);

  return WorkoutIndexItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WorkoutIndexItem);

/***/ }),

/***/ "./frontend/components/workouts/workouts_index_container.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/workouts/workouts_index_container.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _workout_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout_index */ "./frontend/components/workouts/workout_index.jsx");
/* harmony import */ var _actions_workout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/workout_actions */ "./frontend/actions/workout_actions.js");
/* harmony import */ var _actions_route_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/route_actions */ "./frontend/actions/route_actions.js");





var mapSTP = function mapSTP(state) {
  return {
    workouts: Object.values(state.entities.workouts),
    userId: state.session.id,
    user: state.entities.users[state.session.id],
    routes: Object.assign({}, state.entities.routes)
  };
};

var mapDTP = function mapDTP(dispatch) {
  return {
    fetchWorkouts: function fetchWorkouts(userId) {
      return dispatch(Object(_actions_workout_actions__WEBPACK_IMPORTED_MODULE_2__["fetchWorkouts"])(userId));
    },
    deleteWorkout: function deleteWorkout(workoutId) {
      return dispatch(Object(_actions_workout_actions__WEBPACK_IMPORTED_MODULE_2__["deleteWorkout"])(workoutId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapSTP, mapDTP)(_workout_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/util/route_selectors.js":
/*!******************************************!*\
  !*** ./frontend/util/route_selectors.js ***!
  \******************************************/
/*! exports provided: sortByOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByOrder", function() { return sortByOrder; });
var sortByOrder = function sortByOrder(points) {
  if (points.length === 0) return [];
  var sorted = false;

  while (sorted === false) {
    sorted = true;

    for (var i = 0; i < points.length - 1; i++) {
      if (points[i].route_order > points[i + 1].route_order) {
        var holder = points[i];
        points[i] = points[i + 1];
        points[i + 1] = holder;
        sorted = false;
      }
    }
  }

  return points;
};

/***/ }),

/***/ "./frontend/util/route_util.jsx":
/*!**************************************!*\
  !*** ./frontend/util/route_util.jsx ***!
  \**************************************/
/*! exports provided: AuthRoute, ProtectedRoute, DashRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedRoute", function() { return ProtectedRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashRoute", function() { return DashRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var Auth = function Auth(_ref) {
  var Component = _ref.component,
      path = _ref.path,
      loggedIn = _ref.loggedIn,
      exact = _ref.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: path,
    exact: exact,
    render: function render(props) {
      return !loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/dashboard"
      });
    }
  });
};

var mapSTP = function mapSTP(state) {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

var AuthRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapSTP, null)(Auth));

var Protected = function Protected(_ref2) {
  var Component = _ref2.component,
      path = _ref2.path,
      loggedIn = _ref2.loggedIn,
      exact = _ref2.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: path,
    exact: exact,
    render: function render(props) {
      return !loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/login"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
    }
  });
};

var ProtectedRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapSTP, null)(Protected));

var Dash = function Dash(_ref3) {
  var Component = _ref3.component,
      path = _ref3.path,
      loggedIn = _ref3.loggedIn,
      exact = _ref3.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: path,
    exact: exact,
    render: function render(props) {
      return !loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
    }
  });
};

var DashRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapSTP, null)(Dash));

/***/ })

})
//# sourceMappingURL=main.77778b5e9ce1a53cb0fb.hot-update.js.map