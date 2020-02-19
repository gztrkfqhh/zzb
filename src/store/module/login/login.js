const Login = {
  state: {
    LoginI18n: 'zh'
  },
  mutations: {
    LOGINI18N (state, value) {
      console.log(value)
      state.LoginI18n = value.val
    }
  },
  actions: {
    LoginI18n: (context, val) => context.commit('LOGINI18N', {val})
  },
  getters: {
    LoginI18n: state => state.LoginI18n
  }
}
export default Login
