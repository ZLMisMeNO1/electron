const {  BrowserWindow} = require('electron');

let indexWindow;
function createIndexWindow() {
    // 创建浏览器窗口。
    indexWindow = new BrowserWindow({
      width: 800,
      height: 600,
      frame: true,
      center: true,
      minimizable: false,
      maximizable: true
    })
    indexWindow.show();
    // 然后加载应用的 index.html。
    indexWindow.loadFile('./app/page/index/index.html');
    // indexWindow.setApplicationMenu(null);
    // 打开开发者工具
    indexWindow.webContents.openDevTools();
    // 当 window 被关闭，这个事件会被触发。
    indexWindow.on('closed', () => {
      // 取消引用 window 对象，如果你的应用支持多窗口的话，
      // 通常会把多个 window 对象存放在一个数组里面，
      // 与此同时，你应该删除相应的元素。
      indexWindow = null
    })
  
  }

  module.exports = {
    createIndexWindow
}