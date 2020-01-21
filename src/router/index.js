import Vue from 'vue'
import Router from 'vue-router'
// routers 是路由
import routers from './router'
import Main from '@/layout/layout/layout'
import _import from '@/fileView'
// 引入插件
import Cookie from 'js-cookie'

Vue.use(Router)
const router = new Router({
  mode: 'history', // 是否去掉#号
  routes: routers
})

let GetToken
let getRouter
// 设置localStorage
let localRoutes = JSON.parse(localStorage.getItem('_routers'))
router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  GetToken = Cookie.get('token')
  if (!GetToken) {
    if (to.path === '/login') { // 如果是登录页面路径，就直接next()
      next()
    } else { // 不然就跳转到登录
      next('/login')
    }
  } else {
    if (to.path === '/login') {
      next({name: 'home'})
    } else {
      document.title = to.meta.title
      next()
    }
    if (!getRouter && getRouter === undefined) {
      getRouter = _AddRouters(localRoutes)
      router.addRoutes(localRoutes)
      router.addRoutes([{ path: '*', redirect: '/404', hideInMenu: true }]) // 添加404及重定向路由规则
      next({ ...to, replace: true })
    }
    next()
  }
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
  // iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
