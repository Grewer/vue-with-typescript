// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import './class-components-hooks'
import router from './router'
import store from './vuex/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'


//
// router.beforeEach((route, redirect, next) => {
//   console.log('路由切换之间 判断是否登录')
//   next();s
// })

import fetch from './api/fetch'



let GrewerFetch = new fetch(router)

GrewerFetch.bind(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
