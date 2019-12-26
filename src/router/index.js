import Vue from 'vue'
import Router from 'vue-router'
// routers 是路由
import routers from './router'

// 引入插件
import Cookie from 'js-cookie'

Vue.use(Router)
const router = new Router({
  // mode: 'history', // 是否去掉#号
  routes: routers
})

let GetToken
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
      document.title = to.name
      next()
    }
    next()
  }
})

router.afterEach(to => {
  // iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
