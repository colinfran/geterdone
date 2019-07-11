"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _reactRouterDom = require("react-router-dom");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _reactComponentCountdownTimer = _interopRequireDefault(require("react-component-countdown-timer"));

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

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

var Completed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Completed, _React$Component);

  function Completed(props) {
    var _this;

    _classCallCheck(this, Completed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Completed).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "removeReminder", function (val) {
      var rem = JSON.stringify(_this.state.completed);
      rem = JSON.parse(rem); // var j = rem[val].cron;
      // j.cancel();

      delete rem[val];
      localStorage.setItem('completed', JSON.stringify(rem));

      _this.setState({
        completed: rem
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderDate", function (val) {
      return "Due: ".concat((0, _dateFns["default"])(new Date(), 'dddd MMMM do, YYYY'));
    });

    _defineProperty(_assertThisInitialized(_this), "unsetCompleted", function (key) {
      var compl = _this.state.completed;
      compl[key].completed = false;

      _this.setState({
        completed: compl
      });

      setTimeout(function () {
        var rem = localStorage.getItem('reminders') || '{}';
        rem = JSON.parse(rem);
        rem[key] = compl[key];
        localStorage.setItem('reminders', JSON.stringify(rem));
        delete compl[key];

        _this.setState({
          completed: compl
        });

        localStorage.setItem('completed', JSON.stringify(compl));
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "renderList", function () {
      if (Object.keys(_this.state.completed).length === 0) {
        return _react["default"].createElement("div", null, "No Completed Reminders");
      } else {
        return _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], {
          transitionName: "fade",
          transitionEnterTimeout: 1000,
          transitionLeaveTimeout: 300
        }, Object.keys(_this.state.completed).map(function (val, i) {
          return _react["default"].createElement("div", {
            key: val,
            style: {
              paddingLeft: 10,
              paddingRight: 10,
              height: 50,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              borderRadius: 2,
              boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)'
            }
          }, _react["default"].createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }
          }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
            className: "round"
          }, _react["default"].createElement("input", {
            style: {
              alignSelf: 'center',
              width: 25,
              height: 25
            },
            type: "checkbox",
            id: "checkbox".concat(val),
            checked: _this.state.completed[val].completed,
            onChange: function onChange() {
              return _this.unsetCompleted(val);
            }
          }), _react["default"].createElement("label", {
            htmlFor: "checkbox".concat(val)
          })))), _react["default"].createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center'
            }
          }, _react["default"].createElement("div", {
            style: {
              alignSelf: 'center',
              fontWeight: 600
            }
          }, _this.state.completed[val].title), _react["default"].createElement("div", {
            style: {
              alignSelf: 'center',
              fontSize: 14
            }
          }, _this.state.completed[val].description), _react["default"].createElement("div", {
            style: {
              alignSelf: 'center',
              fontSize: 10
            }
          }, _react["default"].createElement(_reactMoment["default"], {
            format: "dddd, MMMM Do YYYY"
          }, _this.state.completed[val].date))), _react["default"].createElement("div", {
            style: {
              alignSelf: 'center'
            }
          }, _react["default"].createElement(_Button["default"], {
            size: "small",
            variant: "contained",
            color: "secondary",
            onClick: function onClick() {
              return _this.removeReminder(val);
            }
          }, _react["default"].createElement(_Delete["default"], null))));
        }));
      }
    });

    _this.state = {
      completed: {}
    };
    return _this;
  }

  _createClass(Completed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rem = localStorage.getItem('completed') || '{}';
      rem = JSON.parse(rem);
      this.setState({
        completed: rem
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        }
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }
      }, _react["default"].createElement("h3", {
        style: {
          justifySelf: 'center'
        }
      }, "Completed Tasks")), _react["default"].createElement("div", {
        style: {
          marginLeft: 25,
          marginRight: 25,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }
      }, this.renderList()));
    }
  }]);

  return Completed;
}(_react["default"].Component);

exports["default"] = Completed;
//# sourceMappingURL=index.js.map
