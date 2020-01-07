const header = {
  state: {
    isCollapse: false,
    elMenuLeftClass: '',
    elMenuRightClass: '',
    BtnclassName: '',
    homeStyle: '',
    breadcrumb: []
  },
  mutations: {
    GETCOLLAPSE (state) {
      state.isCollapse = !state.isCollapse
      if (state.isCollapse === true) {
        state.BtnclassName = 'fa fa-indent'
        state.elMenuLeftClass = 'elMenuLeftClass'
        state.elMenuRightClass = 'elMenuRightClass'
        state.homeStyle = {paddingLeft: '39px'}
      } else {
        state.BtnclassName = 'fa fa-outdent'
        state.elMenuLeftClass = ''
        state.elMenuRightClass = ''
        state.homeStyle = {marginLeft: '195px'}
      }
    },
    GETBREUMB (state, val) {
      console.log(val)
      state.breadcrumb = val
    }
  },
  actions: {
    getCollapse: context => context.commit('GETCOLLAPSE'),
    getTbreumb: (context, val) => context.commit('GETBREUMB', val)
  },
  getters: {
    //
  }
}
export default header
