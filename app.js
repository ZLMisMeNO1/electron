
const { remote, ipcRenderer } = require('electron');
const { Menu } = remote;
const channelEnum = require('./constant');
window.onload = () => {
    console.log('abc')
    initMenu();
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        console.log('abc')
    })
    ipcRenderer.on(channelEnum.menuClickResulrChannel, (event,arg) => {
        console.log(arg);
    });
}

function initMenu() {
    const menuList = [
        {
            'label': '首页',
            'role': 'reload'

        },
        {
            'label': '第二个菜单',
            'submenu': [
                {
                    'label': 'abc', click() { ipcRenderer.send(channelEnum.menuClickChannel, '我被点击了') }
                }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(menuList);
    Menu.setApplicationMenu(menu);
}