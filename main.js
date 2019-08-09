import {app, BrowserWindow, ipcMain, Tray, Menu} from 'electron';
import path from 'path';
import url from 'url';
import isDevelopment from 'electron-is-dev';


// Replace '..' with 'about-window'
const openAboutWindow = require('about-window').default;



let tray = undefined
let mainWindow = undefined

// Don't show the app in the doc
// app.dock.hide()


app.on('ready', () => {
  createTray()
  createWindow()
})

const createTray = () => {
  tray = new Tray(path.join(__dirname, 'assets/logo.png'))
  tray.setIgnoreDoubleClickEvents(true);
  tray.on('right-click', function (event) {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'About This App',
        click: () => openAboutWindow({
          description: "About",
          icon_path:  path.join(__dirname, 'assets/image-black.png'),
          copyright: 'Copyright (c) 2019 Colin Franceschini',
          package_json_dir: "..",
          bug_report_url: "https://github.com/colinfran/geterdone/issues",
          show_close_button: "Close"
        }),
      },
      { label: 'Quit', click: () => { app.quit(); } },
    ]);
    tray.popUpContextMenu(contextMenu);
  });

  tray.on('click', function (event) {
    toggleWindow()
  });

}

const getWindowPosition = () => {
  const windowBounds = mainWindow.getBounds();
  const trayBounds = tray.getBounds();

  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));

  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4);

  return {x: x, y: y};
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
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
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  if (isDevelopment) {
      mainWindow.webContents.openDevTools();
  }

  // Hide the window when it loses focus
  mainWindow.on('blur', () => {
    if (!mainWindow.webContents.isDevToolsOpened()) {
      mainWindow.hide()
    }
  })
}

const toggleWindow = () => {
  mainWindow.isVisible() ? mainWindow.hide() : showWindow();
}

const showWindow = () => {
  const position = getWindowPosition();
  mainWindow.setPosition(position.x, position.y, false);
  mainWindow.show();
}

ipcMain.on('show-window', () => {
  showWindow()
})
