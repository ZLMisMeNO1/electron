const { remote, ipcRenderer } = require('electron');
const { dialog } = remote;
const channelEnum = require('../../../constant');
const $ = require('jquery');
const crypto = require('crypto');
window.onload = () => {

    let btnCommit = document.getElementById('btnCommit');

    btnCommit.addEventListener('click', () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        tologin(username, password);

    })
    //监听是否登录成功
    ipcRenderer.on(channelEnum.loginResultChannel, (event, arg) => {
        if (arg === 'error') {
            dialog.showErrorBox(
                "用户名或密码错误",
                "请检查用户名或密码是否输入正确"
            );
        }
    });
}

//登录
function tologin(username, password) {
    if ($.isEmptyObject(username) || $.isEmptyObject(password)) {
        console.log('用户名或密码为空');
        return;
    }
    const hash = crypto.createHash('md5');
    hash.update(password);
    const pwdHash = hash.digest('hex').toString();
    ipcRenderer.send(channelEnum.loginChannel, { 'username': username, 'password': pwdHash })
}