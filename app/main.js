"use strict";

var _electron = require("electron");

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _electronIsDev = _interopRequireDefault(require("electron-is-dev"));

var _cron = _interopRequireDefault(require("./cron.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('electron-reload')(__dirname);

var tray = undefined;
var mainWindow = undefined; // Don't show the app in the doc

_electron.app.dock.hide();

_electron.app.on('ready', function () {
  createTray();
  createWindow();
});

var createTray = function createTray() {
  tray = new _electron.Tray(_path["default"].join('./assets/logo.png'));
  tray.setIgnoreDoubleClickEvents(true);
  tray.on('click', function (event) {
    toggleWindow();
  });
};

var getWindowPosition = function getWindowPosition() {
  var windowBounds = mainWindow.getBounds();
  var trayBounds = tray.getBounds(); // Center window horizontally below the tray icon

  var x = Math.round(trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2); // Position window 4 pixels vertically below the tray icon

  var y = Math.round(trayBounds.y + trayBounds.height + 4);
  return {
    x: x,
    y: y
  };
};

var createWindow = function createWindow() {
  mainWindow = new _electron.BrowserWindow({
    width: 400,
    height: 300,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    transparent: false,
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(_url["default"].format({
    pathname: _path["default"].join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  })); // if (isDevelopment) {
  //     mainWindow.webContents.openDevTools();
  // }
  // Hide the window when it loses focus

  mainWindow.on('blur', function () {
    if (!mainWindow.webContents.isDevToolsOpened()) {
      mainWindow.hide();
    }
  });
};

var toggleWindow = function toggleWindow() {
  mainWindow.isVisible() ? mainWindow.hide() : showWindow();
};

var showWindow = function showWindow() {
  var position = getWindowPosition();
  mainWindow.setPosition(position.x, position.y, false);
  mainWindow.show();
};

_electron.ipcMain.on('show-window', function () {
  showWindow();
});
//# sourceMappingURL=main.js.map
