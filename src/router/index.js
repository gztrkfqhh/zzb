import Vue from 'vue'
import Router from 'vue-router'
// routers 是路由
import routers from './router'
import Main from '@/layout/layout/layout'
import Store from '@/store'
import _import from '@/fileView'
Vue.use(Router)
const router = new Router({
  mode: 'history', // 是否去掉#号
  routes: routers
})

Store.dispatch('setRoutes')
let getRouter

// 设置localStorage
let localRoutes = JSON.parse(localStorage.getItem('_routers'))
router.beforeEach((to, from, next) => {
  if (!getRouter && getRouter === undefined) {
    getRouter = _AddRouters(localRoutes)
    router.addRoutes(localRoutes)
    router.addRoutes([{ path: '*', redirect: '/404', hideInMenu: true }]) // 添加404及重定向路由规则
    next({ ...to, replace: true })
  }
  next()
})
function _AddRouters (Ele) {
  Ele.forEach(item => {
    item.component = Main
    zzz(item)
  })

  return Ele
}
function zzz (item) {
  if (item.children) {
    item.children.forEach((a, b) => {
      a.component = _import(a.name)
      if (a.children) {
        zzz(a.children)
      }
    })
  } else {
    item.forEach((a, b) => {
      a.component = _import(a.path)
    })
  }
  // console.log(item)
}

router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router
