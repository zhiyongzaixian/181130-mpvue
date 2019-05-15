## mpvue
## mpvue简介
  1. 市面上用的最多的两个小程序框架，mpvue，wepy
  2. mpvue美团推出的，wepy腾讯
## mpvue特点
  1. 基于Vue.js开发
  2. 除了支持vue生命周期函数同时也支持小程序生命周期函数，不建议使用原生小程序生命周期函数
  3. mpvue支持Vuex但是对Vue-router支持不是太好
## mpvue文件分类
  1. app.vue ---> app.js + app.wxss
  2. app.$mount === App({}) ---> 挂载整个应用
  3. App.mpType = 'app' 声明当前组件代表整个应用
  4. 组件页面中的挂载： index.$mount === Page({}) --->挂载当前页面
  