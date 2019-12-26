import { login, logout, getUserInfo } from '@/api/user'
import { setToken, getToken } from '@/libs/util'
import Cookis from 'js-cookie'
export default {
  state: {
    username: '',
    userId: '',
    tableData: [],
    avatorImgPath: '',
    token: getToken(),
    access: '',
    hasGetInfo: false
  },
  mutations: {
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setusername (state, name) {
      state.username = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, {username, password}) {
      console.log(username)
      return new Promise((resolve, reject) => {
        let TokenId = 'lt:eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ6MSIsInVzZXJJZCI6IjEiLCJuYW1lIjoiejEiLCJleHAiOjE1NzAwMDMyNjZ9.hPZoqFhcct-8GweMCLjGsvw3BIiCuEfaUJvNq5KYIbIkYI88Lk1S8NK3KOPxEL1sWNLoomsE92ite5Nt74DS4mWxEi2PPDNXRoTjWZ2uxrtv8Ee0sd2PUaZGb1id4MVsmTteLM6obmIYHt4pLYJ3LktOTNFJJRYXIYIIMN8Z5v4'
        Cookis.set('TokenId', TokenId)
        commit('setToken', username)
        location.reload()
        resolve()
        // login({
        //   username,
        //   password
        // }).then(res => {
        //   console.log(res)
        //   Cookis.set('TokenId', res.data.data.token)
        //   commit('setToken', username)
        //   location.reload()
        //   resolve()
        // }).catch(err => {
        //   reject(err)
        //   if (err) {
        //     commit('setToken', '')
        //     commit('setAccess', [])
        //     resolve()
        //   }
        // })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        //   commit('setToken', '')
        //   commit('setAccess', [])
        //   resolve()
        // }).catch(err => {
        //   reject(err)
        // })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        commit('setToken', '')
        commit('setAccess', [])
        resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.token).then(res => {
            console.log(res)
            const data = res.data
            // https://dev-file.iviewui.com/userinfoUgdSyCi1athTzPW4JyvsAKrUdPRxrj8i/avatar
            // 头像
            // commit('setAvator', data.avator)
            commit('setAvator', 'https://dev-file.iviewui.com/userinfoUgdSyCi1athTzPW4JyvsAKrUdPRxrj8i/avatar')
            commit('setusername', data.name)
            commit('setUserId', data.user_id)
            commit('setAccess', data.access)
            commit('setHasGetInfo', true)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
