#  sdc-ui

基于`@vant/cli`搭建的组件库开发环境，目前仅支持移动端组件开发




```
pc文档：http://132.232.54.229:9000
mobile文档: http://132.232.54.229:9000/mobile.html
源码地址：https://gitee.com/willcode/sdc-ui
```

### 安装

```bash
# 通过 npm 安装
npm i sdc-ui -S  
npm i git+ssh://git@gitlab.com:someone/sdc-ui  -S
```
> 组件开发完成后，运行`npm run build`生成`es`、`lib`文件夹，push到git远程仓库


### 按需加载

```javascript
# babel.config.js
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      { libraryName: "sdc-ui", libraryDirectory: "es", style: true },
      "sdc-ui"
    ]
  ]
}


```