"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _reactRouterDom = require("react-router-dom");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _history = _interopRequireDefault(require("../history.js"));

var _cron = _interopRequireDefault(require("../cron.js"));

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

var uuidv1 = require('uuid/v1');

var Add =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Add, _React$Component);

  function Add(props) {
    var _this;

    _classCallCheck(this, Add);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Add).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function () {
      var obj = {
        info: _this.state.inputVal,
        time: _this.state.time,
        on: _this.state.on,
        completed: false // var j = setCron(obj);
        // obj.cron = j;

      };
      var rem = localStorage.getItem('reminders') || '{}';
      rem = JSON.parse(rem);
      rem[uuidv1()] = obj;
      localStorage.setItem('reminders', JSON.stringify(rem));

      _this.setState({
        inputVal: "",
        time: "",
        on: false
      });

      _history["default"].goBack();
    });

    _this.state = {
      inputVal: "",
      time: "",
      on: false
    };
    return _this;
  }

  _createClass(Add, [{
    key: "render",
    value: function render() {
      var _ref,
          _this2 = this;

      return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/"
      }, _react["default"].createElement(_IconButton["default"], {
        "aria-label": "Back",
        size: "medium",
        style: {
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10
        }
      }, _react["default"].createElement(_ArrowBack["default"], {
        fontSize: "inherit"
      }))), _react["default"].createElement("div", {
        style: (_ref = {
          display: 'flex',
          flexDirection: 'column',
          margin: 25,
          marginTop: 0,
          height: 202
        }, _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, "flexDirection", 'column'), _ref)
      }, _react["default"].createElement("div", null, _react["default"].createElement(_TextField["default"], {
        id: "outlined-multiline-static",
        label: "Reminder info",
        value: this.state.inputVal,
        onChange: function onChange(event) {
          _this2.setState({
            inputVal: event.target.value
          });
        },
        margin: "dense",
        variant: "outlined",
        style: {
          width: '100%'
        }
      })), _react["default"].createElement("div", null, _react["default"].createElement(_FormControl["default"], {
        variant: "outlined",
        style: {
          width: '100%'
        },
        margin: "dense"
      }, _react["default"].createElement(_InputLabel["default"], {
        style: {
          backgroundColor: "#fff"
        },
        htmlFor: "time-native-helper"
      }, "How often you want the reminder."), _react["default"].createElement(_Select["default"], {
        value: this.state.time,
        onChange: function onChange(event) {
          _this2.setState({
            time: event.target.value
          });
        },
        input: _react["default"].createElement(_OutlinedInput["default"], {
          name: "How often you want the reminder.",
          id: "outlined-age-simple"
        })
      }, _react["default"].createElement(_MenuItem["default"], {
        value: ""
      }, _react["default"].createElement("em", null, "None")), _react["default"].createElement(_MenuItem["default"], {
        value: 15
      }, "Every 15 minutes"), _react["default"].createElement(_MenuItem["default"], {
        value: 30
      }, "Every 30 minutes"), _react["default"].createElement(_MenuItem["default"], {
        value: 45
      }, "Every 45 minutes"), _react["default"].createElement(_MenuItem["default"], {
        value: 60
      }, "Every 60 minutes"), _react["default"].createElement(_MenuItem["default"], {
        value: 120
      }, "Every 120 minutes")))), _react["default"].createElement("div", null, _react["default"].createElement(_FormControlLabel["default"], {
        control: _react["default"].createElement(_Switch["default"], {
          checked: this.state.on,
          onChange: function onChange() {
            return _this2.setState({
              on: !_this2.state.on
            });
          },
          value: "checkedB",
          color: "primary"
        }),
        label: this.state.on ? "On" : "Off"
      })), _react["default"].createElement("div", null, _react["default"].createElement(_Button["default"], {
        variant: "contained",
        onClick: this.onSubmit
      }, "Add"))));
    }
  }]);

  return Add;
}(_react["default"].Component);

exports["default"] = Add;
//# sourceMappingURL=index.js.map
