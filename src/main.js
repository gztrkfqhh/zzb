// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import requrst from '@/api/requrst'
import cookie from 'js-cookie'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/resetstyle/reset.css'
// 引入font-awesome
import 'font-awesome/css/font-awesome.css'

import Qs from 'qs'
// 引入全局定义
import Global from '../config/global'

Vue.use(requrst)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.productionTip = false

// Vue 挂载原型
Vue.prototype.$hs = Global.HOST
Vue.prototype.$qs = Qs
Vue.prototype.$ajax = requrst
Vue.prototype.$cookies = cookie
Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
