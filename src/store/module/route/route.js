import routers from '@/router/router'
const route = {
  state: {
    getroutes: []
  },
  mutations: {
    GETROUTES (state) {
      state.getroutes = []
      routers.forEach((item) => {
        if (item.meta) {
          if (item.children) {
            state.getroutes.push({
              path: item.path,
              meta: {
                name: item.name,
                icon: item.icon
              },
              children: item.children.map(c => {
                return {
                  path: item.path + c.path,
                  name: c.name
                }
              })
            })
          }
        } else {
          if (!item.hidden) {
            item.children.forEach(child => {
              state.getroutes.push({
                path: child.path,
                name: child.name,
                icon: child.icon
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
