import routers from '@/router/router'
const route = {
  state: {
    getroutes: []
  },
  mutations: {
    GETROUTES (state) {
      routers.forEach((item) => {
        if (item.meta) {
          state.getroutes.push({
            path: item.path,
            meta: {
              name: item.name
            },
            children: item.children.map(c => {
              return {
                path: item.path + c.path,
                name: c.name
              }
            })
          })
        } else {
          if (!item.hidden) {
            item.children.forEach(child => {
              state.getroutes.push({
                path: child.path,
                name: child.name
              })
            })
          }
        }
      })
    }
  },
  actions: {
    getRoutes: context => context.commit('GETROUTES')
  },
  getters: {
    //
  }
}
export default route
