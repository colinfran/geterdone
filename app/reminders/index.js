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

var _reactAddonsCssTransitionGroup = _interopRequireDefault(require("react-addons-css-transition-group"));

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _reactMoment = _interopRequireDefault(require("react-moment"));

var _reactComponentCountdownTimer = _interopRequireDefault(require("react-component-countdown-timer"));

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

var Reminders =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Reminders, _React$Component);

  function Reminders(props) {
    var _this;

    _classCallCheck(this, Reminders);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reminders).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "removeReminder", function (val) {
      var rem = JSON.stringify(_this.state.reminders);
      rem = JSON.parse(rem); // var j = rem[val].cron;
      // j.cancel();

      delete rem[val];
      localStorage.setItem('reminders', JSON.stringify(rem));

      _this.setState({
        reminders: rem
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setCompleted", function (key) {
      var rem = _this.state.reminders;
      rem[key].completed = true;

      _this.setState({
        reminders: rem
      });

      setTimeout(function () {
        var compl = localStorage.getItem('completed') || '{}';
        compl = JSON.parse(compl);
        compl[key] = rem[key];
        localStorage.setItem('completed', JSON.stringify(compl));
        delete rem[key];

        _this.setState({
          reminders: rem
        });

        localStorage.setItem('reminders', JSON.stringify(rem));
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "renderList", function () {
      if (Object.keys(_this.state.reminders).length === 0) {
        return _react["default"].createElement("div", null, "No Reminders");
      } else {
        return _react["default"].createElement(_reactAddonsCssTransitionGroup["default"], {
          transitionName: "fade",
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300
        }, Object.keys(_this.state.reminders).map(function (val, i) {
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
            id: val,
            onChange: function onChange() {
              _this.setCompleted(val);
            }
          }), _react["default"].createElement("label", {
            htmlFor: val
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
          }, _this.state.reminders[val].title), _react["default"].createElement("div", {
            style: {
              alignSelf: 'center',
              fontSize: 14
            }
          }, _this.state.reminders[val].description), _react["default"].createElement("div", {
            style: {
              alignSelf: 'center',
              fontSize: 10
            }
          }, _react["default"].createElement(_reactMoment["default"], {
            format: "dddd, MMMM Do YYYY"
          }, _this.state.reminders[val].date))), _react["default"].createElement("div", {
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
      reminders: {}
    };
    return _this;
  }

  _createClass(Reminders, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var rem = localStorage.getItem('reminders') || '{}';
      rem = JSON.parse(rem);
      this.setState({
        reminders: rem
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
      }, this.renderList());
    }
  }]);

  return Reminders;
}(_react["default"].Component);

exports["default"] = Reminders;
//# sourceMappingURL=index.js.map
