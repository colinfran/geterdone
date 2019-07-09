"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _app = _interopRequireDefault(require("./app.js"));

var _cron = _interopRequireDefault(require("./cron.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function run() {
  var rem = localStorage.getItem('reminders') || '{}';
  rem = JSON.parse(rem);

  if (Object.keys(rem).length === 0) {
    return;
  }

  Object.keys(rem).map(function (key, index) {
    var j = (0, _cron["default"])(rem[key]);
    rem[key].cron = j;
    localStorage.setItem('reminders', JSON.stringify(rem));
  });
}

window.onload = function () {
  // run();
  _reactDom["default"].render(_react["default"].createElement(_app["default"], null), document.getElementById('app'));
};
//# sourceMappingURL=index.js.map
