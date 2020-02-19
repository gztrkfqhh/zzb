import Vue from 'vue'
import Vuex from 'vuex'
import route from './module/route/route'
import header from './module/header/header'
import Login from './module/login/login'
// import user from './module/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    route,
    header,
    Login
    // user
  }
})
