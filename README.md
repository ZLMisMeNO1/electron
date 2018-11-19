
# electron 脚手架

> 看到electron不能用MySQL数据库的时候，我的心都碎了

## 打包成exe方法

1. 首先确定electron的版本
```
electron -v // 得到 v3.0.9

```
2. 在package.json中添加
```json
    "devDependencies": {
        "electron": "~3.0.9"
    }
```
3. 执行安装
```
    cnpm install
```

4. 安装electron-packager

```
    cnpm install electron-packager -g
```
5. 执行命令
 ```
    electron-packager . 'HelloWorld' --platform=win32 --arch=x64  --out=./out --asar --app-version=0.0.1 --icon=icon.ico
 ```

 得到的exe文件包比较大，后续要研究如何压缩
