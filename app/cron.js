"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCron = setCron;
exports.updateCron = updateCron;

var _nodeSchedule = require("node-schedule");

function setCron(val) {
  var cronStr = "";

  if (val.time === 15 || val.time === 30 || val.time === 45) {
    cronStr = "*/".concat(val.time, " * * * *");
  } else if (val.time === 60) {
    cronStr = "0 * * * *";
  } else if (val.time === 120) {
    cronStr = "0 */2 * * *";
  }

  var j = _nodeSchedule.schedule.scheduleJob(cronStr, function () {
    var notifier = require('node-notifier');

    var path = require('path');

    notifier.notify({
      title: "Reminder Notification",
      message: val.info,
      icon: path.join(__dirname, './assets/image.png')
    }, function (err, response) {// Response is response from notification
    });
  });

  console.log(j);
  return j;
}

function updateCron(j) {
  j.cancel();

  var j = _nodeSchedule.schedule.scheduleJob(cronStr, function () {
    var notifier = require('node-notifier');

    var path = require('path');

    notifier.notify({
      title: "Reminder Notification",
      message: val.info,
      icon: path.join(__dirname, './assets/image.png')
    }, function (err, response) {// Response is response from notification
    });
  });

  return j;
}
//# sourceMappingURL=cron.js.map
