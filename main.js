const { app, BrowserWindow } = require('electron');
const path = require('path');


if (!app.isPackaged) {
  try {
    require('electron-reload')(__dirname, {
      ignored: /node_modules|[\/\\]\./
    });
  } catch (e) {
    console.warn('electron-reload no disponible en prod:', e.message);
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 350,
    height: 540,
    frame: true,
    title: "Music Player",
    backgroundColor: '#f6e7ee',
    titleBarStyle: 'default',
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();
});
