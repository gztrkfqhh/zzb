// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import VueI18n from 'vue-i18n'
import requrst from '@/api/requrst'
import store from './store'
import '@/resetstyle/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import megEn from './vuei18n/megen/index'
import megZh from './vuei18n/megzh/index'
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

Vue.use(VueI18n)
Vue.locale = () => {}
const messages = {
  EN: Object.assign(megEn, enLocale),
  ZH: Object.assign(megZh, zhLocale)
}
const i18n = new VueI18n({
  locale: Cookies.get('loginI18n') ? Cookies.get('loginI18n') : 'ZH',
  messages,
  silentTranslationWarn: true
})
Vue.use(requrst)
Vue.use(Vant)
Vue.use(ElementUI, {
  i18n: function (path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) return value
    return ''
  }
})

// 注册全局
Vue.component('font-icon', FontsIcon)

Vue.config.productionTip = false

// Vue 挂载原型
Vue.prototype.$hs = Global.HOST
Vue.prototype.$i18 = i18n
Vue.prototype.$qs = Qs
Vue.prototype.$ajax = requrst
Vue.prototype.$mock = Mock
Vue.prototype.$cookies = Cookies
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
  i18n,
  components: { App },
  template: '<App/>'
})
