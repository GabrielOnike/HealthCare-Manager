const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
//the below is to enable chrome extensions such as React Dev tools
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer'); //to enable chrome extensions such as React Dev tools

//require(('electron-reload')(__dirname));
let mainWindow;
function createWindow() {
mainWindow = new BrowserWindow({ width: 1400, height: 780 });
mainWindow.loadURL(
isDev
? "http://localhost:3000"
: `file://${path.join(__dirname, "../build/index.html#")}`
);
mainWindow.on("closed", () => (mainWindow = null));
}
//enable React dev tools extensions as below... To install multiple extensions, installExtension takes an array, remember to append the related import/const above  
app.whenReady().then(() => {
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
});
app.on("ready", createWindow);
app.on("window-all-closed", () => {
if (process.platform !== "darwin") {
app.quit();
}
});
app.on("activate", () => {
if (mainWindow === null) {
createWindow();
}
});
app.on("activate",() => { require('electron-reload')(__dirname)}); //to automate every change to update our dom on save instead of 'npm start' everytime 
//require(('electron-reload')(__dirname));