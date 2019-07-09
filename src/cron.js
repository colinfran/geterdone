import {schedule} from 'node-schedule';

export function setCron(val) {
  var cronStr = "";
  if (val.time === 15 ||
    val.time === 30 ||
    val.time === 45) {
    cronStr = `*/${val.time} * * * *`
  }
  else if (val.time === 60) {
    cronStr = `0 * * * *`
  }
  else if (val.time === 120) {
    cronStr = `0 */2 * * *`
  }
  var j = schedule.scheduleJob(cronStr, function() {
    const notifier = require('node-notifier');
    const path = require('path');

    notifier.notify({
        title: "Reminder Notification",
        message: val.info,
        icon: path.join(__dirname, './assets/image.png')
      },
      function(err, response) {
        // Response is response from notification
      });
  });
  console.log(j);
  return j;
}

export function updateCron(j){
  j.cancel();
  var j = schedule.scheduleJob(cronStr, function() {
    const notifier = require('node-notifier');
    const path = require('path');

    notifier.notify({
        title: "Reminder Notification",
        message: val.info,
        icon: path.join(__dirname, './assets/image.png')
      },
      function(err, response) {
        // Response is response from notification
      });
  });
  return j;

}
