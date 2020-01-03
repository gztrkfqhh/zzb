import routers from '@/router/router'
import apiRouter from '@/api/_addrouter'
const route = {
  state: {
    getroutes: [],
    setroutes: [],
    breList: []
  },
  mutations: {
    GETROUTES (state, Rdata) {
      state.getroutes = []
      let getLoStRoute = JSON.parse(localStorage.getItem('_routers'))
      if (getLoStRoute) {
        routers.concat(getLoStRoute).forEach((item) => {
          if (item.meta) { // 二级菜单
            if (item.children) {
              state.getroutes.push({
                path: item.path,
                meta: {
                  name: item.meta.title,
                  icon: item.meta.icon
                },
                children: item.children.map(c => {
                  console.log(c)
                  return {
                    path: item.path + c.path,
                    name: c.meta.title
                  }
                })
              })
            }
          } else { // 一级菜单
            if (!item.hidden) {
              item.children.forEach(child => {
                if (!child.hidden) {
                  state.getroutes.push({
                    path: child.path,
                    name: child.meta.title,
                    icon: child.meta.icon
                  })
                }
              })
            } else {
            }
          }
        })
      }
    },
    SETROUTES: (state) => {
      const Data = apiRouter
      const routersArr = []
      let parentRoute = Data.filter(i => {
        return i.parentId === null
      })
      parentRoute.map(item => {
        item.children = [...Data.filter(k => {
          return k.parentId === item.id
        })]
        item.children.map(l => {
          l.children = [...Data.filter(b => {
            if (b.router !== '') {
              return b.parentId === l.id
            }
          })]
        })
      })
      filterAsyncRouter(parentRoute)

      function filterAsyncRouter (asyncRouterMap) {
        // 下面是一级菜单
        asyncRouterMap.forEach((route, index) => {
          if (route.menuName !== '/') {
            console.log(route)
            routersArr[index] = {
              id: route.id,
              path: route.router,
              name: route.menuName,
              orderNo: route.orderNo,
              children: []
            }
            // 下面是一级菜单的children
            if (route.children.length) {
              // 有就添加
              route.children.forEach((i) => {
                routersArr[index].children.push(
                  {
                    id: i.id,
                    path: i.router,
                    name: i.menuName,
                    orderNo: i.orderNo,
                    meta: {
                      title: i.name,
                      icon: i.iconClass
                    }
                  }
                )
              })
            }
          } else {
            // 下面是二级菜单
            routersArr[index] = {
              id: route.id,
              path: route.router,
              meta: {
                title: route.name,
                icon: route.iconClass
              },
              orderNo: route.orderNo,
              children: []
            }
            // 下面是二级菜单的children
            if (route.children.length) {
              // 有就添加
              route.children.forEach((i) => {
                routersArr[index].children.push(
                  {
                    id: i.id,
                    path: i.router,
                    name: i.menuName,
                    orderNo: i.orderNo,
                    meta: {
                      title: i.name
                    }
                  }
                )
              })
            }
          }
        })
        routersArr.sort(compare('orderNo'))
        routersArr.forEach(child => {
          child.children.sort(compare('orderNo'))
        })
        function compare (prop) {
          return function (a, b) {
            let val1 = a[prop]
            let val2 = b[prop]
            return val1 - val2
          }
        }
        localStorage.setItem('_routers', JSON.stringify(routersArr))
        state.setroutes = routersArr
      }
    }
  },
  actions: {
    getRoutes: context => context.commit('GETROUTES'),
    setRoutes: context => context.commit('SETROUTES')
  },
  getters: {
  }
}
export default route
