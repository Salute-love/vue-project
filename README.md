# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## 修改首页tabBar图标

1. 找到mui的扩展图标库
2. 将扩展图标库拷贝到项目中(连带字体文件一起拷贝)
3. 在main.js中引入字体图标的样式文件
4. 使用字体图标

## 设置当前选中的tab栏高亮

- 结合路由的`linkActiveClass`属性完成使用`mui-active`类样式的高亮