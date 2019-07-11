"use strict";

var _electron = require("electron");

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _electronIsDev = _interopRequireDefault(require("electron-is-dev"));

var _cron = _interopRequireDefault(require("./cron.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Replace '..' with 'about-window'
var openAboutWindow = require('about-window')["default"];

var tray = undefined;
var mainWindow = undefined; // Don't show the app in the doc

_electron.app.dock.hide();

_electron.app.on('ready', function () {
  createTray();
  createWindow();
});

var createTray = function createTray() {
  tray = new _electron.Tray(_path["default"].join(__dirname, 'assets/logo.png'));
  tray.setIgnoreDoubleClickEvents(true);
  tray.on('right-click', function (event) {
    var contextMenu = _electron.Menu.buildFromTemplate([{
      label: 'About This App',
      click: function click() {
        return openAboutWindow({
          description: "About",
          icon_path: _path["default"].join(__dirname, 'assets/image-black.png'),
          copyright: 'Copyright (c) 2019 Colin Franceschini',
          package_json_dir: "..",
          bug_report_url: "https://github.com/colinfran/geterdone/issues",
          show_close_button: "Close"
        });
      }
    }, {
      label: 'Quit',
      click: function click() {
        _electron.app.quit();
      }
    }]);

    tray.popUpContextMenu(contextMenu);
  });
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
    height: 400,
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
