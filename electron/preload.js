const { ipcRenderer } = require('electron');

console.log("running preload");
window.ipcRenderer = ipcRenderer;
