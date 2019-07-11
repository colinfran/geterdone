"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MaterialUIPickers;

require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/core/styles");

var _dateFns2 = _interopRequireDefault(require("@date-io/date-fns"));

var _pickers = require("@material-ui/pickers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)({
  grid: {
    width: '100%'
  }
});

function MaterialUIPickers(props) {
  // The first commit of Material-UI
  var _React$useState = _react["default"].useState(props.state),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedDate = _React$useState2[0],
      setSelectedDate = _React$useState2[1];

  var classes = useStyles();

  function handleDateChange(date) {
    setSelectedDate(date);
    props.setDate(date);
  }

  return _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns2["default"]
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    className: classes.grid
  }, _react["default"].createElement(_pickers.DatePicker, {
    style: {
      width: '100%'
    },
    format: "EEEE MMMM dd, yyyy",
    label: "Due date",
    margin: "dense",
    id: "mui-pickers-date",
    value: selectedDate,
    onChange: handleDateChange,
    variant: "outlined",
    disableToolbar: true
  })));
}
//# sourceMappingURL=datepicker.js.map
