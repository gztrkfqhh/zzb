const header = {
  state: {
    isCollapse: false,
    BtnclassName: '',
    homeStyle: ''
  },
  mutations: {
    GETCOLLAPSE (state) {
      state.isCollapse = !state.isCollapse
      if (state.isCollapse === true) {
        state.BtnclassName = 'fa fa-indent'
        state.homeStyle = {paddingLeft: '39px'}
      } else {
        state.BtnclassName = 'fa fa-outdent'
        state.homeStyle = {paddingLeft: '200px'}
      }
    }
  },
  actions: {
    getCollapse: context => context.commit('GETCOLLAPSE')
  },
  getters: {
    //
  }
}
export default header
