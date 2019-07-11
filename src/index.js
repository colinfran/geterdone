import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import setCron from './cron.js';

function run(){
  var rem = localStorage.getItem('reminders') || '{}';
  rem = JSON.parse(rem);
  if (Object.keys(rem).length === 0){
    return;
  }
  Object.keys(rem).map(function(key, index) {
    var j = setCron(rem[key]);
    rem[key].cron = j;
    localStorage.setItem('reminders', JSON.stringify(rem))
  });
}

ReactDOM.render(<App />, document.getElementById('app'));
