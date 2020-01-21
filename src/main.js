// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import requrst from '@/api/requrst'
import cookie from 'js-cookie'
import store from './store'
import '@/resetstyle/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

import Qs from 'qs'
// 引入全局定义
import Global from '../config/global'
import Bus from '@/libs/bus/bus'
import FontsIcon from './components/fonticons/'
const Mock = require('mockjs')

Vue.use(requrst)
Vue.use(Vant)
Vue.use(ElementUI)

// 注册全局
Vue.component('font-icon', FontsIcon)

Vue.config.productionTip = false

// Vue 挂载原型
Vue.prototype.$hs = Global.HOST
Vue.prototype.$qs = Qs
Vue.prototype.$ajax = requrst
Vue.prototype.$mock = Mock
Vue.prototype.$cookies = cookie
Vue.prototype.$store = store
Vue.prototype.$bus = Bus

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
