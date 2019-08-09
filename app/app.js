"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _add = _interopRequireDefault(require("./add"));

var _home = _interopRequireDefault(require("./home"));

var _completed = _interopRequireDefault(require("./completed"));

var _reactRouterDom = require("react-router-dom");

var _history = _interopRequireDefault(require("./history.js"));

var _reactLoading = _interopRequireDefault(require("react-loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onHover", function (val) {
      _this.setState({
        hover: val
      });
    });

    _defineProperty(_assertThisInitialized(_this), "linkOnClick", function (val) {
      _this.setState({
        active: val
      });
    });

    _this.state = {
      active: 'home',
      hover: '',
      loading: true
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          loading: false
        });
      }, 2000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.loading) {
        return _react["default"].createElement("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30%'
          }
        }, _react["default"].createElement(_reactLoading["default"], {
          type: "spin",
          color: "#000",
          height: 100,
          width: 100
        }));
      } else {
        return _react["default"].createElement(_reactRouterDom.HashRouter, {
          hashHistory: _history["default"]
        }, _react["default"].createElement("div", {
          className: "topnav"
        }, _react["default"].createElement("div", {
          className: "topnav-centered"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          className: this.state.hover === "home" && this.state.active !== "home" ? "hover" : "",
          onMouseEnter: function onMouseEnter() {
            return _this3.onHover("home");
          },
          onMouseLeave: function onMouseLeave() {
            return _this3.onHover("");
          },
          style: this.state.active === "home" ? {
            backgroundColor: '#fff',
            color: '#000',
            pointerEvents: 'none'
          } : {},
          to: "/",
          onClick: function onClick() {
            return _this3.linkOnClick("home");
          }
        }, "Home"), _react["default"].createElement(_reactRouterDom.Link, {
          className: this.state.hover === "completed" ? "hover" : "",
          onMouseEnter: function onMouseEnter() {
            return _this3.onHover("completed");
          },
          onMouseLeave: function onMouseLeave() {
            return _this3.onHover("");
          },
          style: this.state.active === "completed" ? {
            backgroundColor: '#fff',
            color: '#000',
            pointerEvents: 'none'
          } : {},
          replace: "/completed" === location.pathname,
          to: "/completed",
          onClick: function onClick() {
            return _this3.linkOnClick("completed");
          }
        }, "Done"))), _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Route, {
          path: "/",
          exact: true,
          component: _home["default"]
        }), _react["default"].createElement(_reactRouterDom.Route, {
          path: "/add",
          component: _add["default"]
        }), _react["default"].createElement(_reactRouterDom.Route, {
          path: "/completed",
          component: _completed["default"]
        })));
      }
    }
  }]);

  return App;
}(_react["default"].Component);

exports["default"] = App;
//# sourceMappingURL=app.js.map
