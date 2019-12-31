import routers from '@/router/router'
const route = {
  state: {
    getroutes: []
  },
  mutations: {
    GETROUTES (state) {
      state.getroutes = []
      routers.forEach((item) => {
        // if (!item.hidden) {
        //   item.children.map(v => {
        //     if (v.children) {
        //       state.getroutes.push({
        //         path: v.path,
        //         meta: {
        //           name: v.name,
        //           icon: v.icon
        //         },
        //         children: []
        //       })
        //       state.getroutes.forEach((q, i) => {
        //         if (q.children) {
        //           v.children.forEach((w, e) => {
        //             q.children.push({
        //               path: q.path + w.path,
        //               name: w.name
        //             })
        //           })
        //         }
        //       })
        //     } else {
        //       state.getroutes.push({
        //         path: v.path,
        //         name: v.name,
        //         icon: v.icon
        //       })
        //     }
        //   })
        // }
        if (item.meta) {
          if (item.children) {
            state.getroutes.push({
              path: item.path,
              meta: {
                name: item.meta.title,
                icon: item.meta.icon
              },
              children: item.children.map(c => {
                return {
                  path: item.path + c.path,
                  name: c.meta.title
                }
              })
            })
          }
        } else {
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
