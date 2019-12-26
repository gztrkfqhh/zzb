import axios from 'axios'

// import store from '../vuex/store'
// import { Message } from 'element-ui'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// POST传参序列化
axios.interceptors.request.use((config) => {
  // 单个网站的admin用户
  config.headers.common['Gw-Admin-Access-Token'] = 'adminAccessToken'
  // 整个网点user
  config.headers.common['Gw-User-Access-Token'] = 'userAccessToken'
  return config
}, (err) => {
  console.log('参数错误')
  return Promise.reject(err)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  const response = res.data
  if (response.msg) {
    if (response.code === 0) {
      console.log(response.msg)
    } else {
      console.log(response.msg)
    }
  }
  return response
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 401:
        console.log('未授权，请登录')
        window.location.href = '/#/auth/login'
        break
      case 404:
        console.log('接口请求异常: ' + err.response.config.url + ', 请重试')
        break
      default:
        console.log('Oops, 出错啦')
    }
  }
  return Promise.reject(err)
})

export default function request (method, url, data) {
  // 处理请求的url和数据
  data = method === 'get' ? { params: data } : data
  // 发送请求
  return new Promise((resolve, reject) => {
    axios[method](url, data)
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
      .catch(error => {
        reject(error)
      })
  })
    .catch(error => {
      console.log(error)
    })
}
