/*
  只有二级菜单的路由的 'menuName' 为 '/', 一级菜单没有 '/'
  //
  页面的动态路由 ':id:name' 路由里面的 'router' 用 'active' 来区分两边的 父级默认路由和 activeMenu,    -------  'activeMenu' 代表高亮的菜单
  子级的 router 是路由,
  子级的 menuName 是路径.
  不能和高亮的 'router'路径一样，如果高亮路由是 '/user/user' 动态路由可以写成 '/user' 子级写成 'user/:id'。
*/
export default [
  {
    id: '180',
    parentId: null,
    name: '测试',
    menuName: '_test',
    orderNo: 1,
    router: '/test'
  },
  {
    id: '1801',
    parentId: '180',
    name: '测试',
    menuName: 'test',
    iconClass: 'fa-qq',
    router: '/test'
  },
  {
    id: '181',
    parentId: null,
    name: '管理中心',
    menuName: '/',
    orderNo: 2,
    iconClass: 'fa-ravelry',
    router: '/user/'
  },
  {
    id: '1811',
    parentId: '181',
    name: '后台管理',
    menuName: 'admin',
    orderNo: 1,
    iconClass: '',
    router: 'admin'
  },
  {
    id: '1812',
    parentId: '181',
    name: '用户管理',
    orderNo: 2,
    iconClass: '',
    menuName: 'user',
    router: 'user'
  },
  {
    id: '182',
    parentId: null,
    name: '查询ID',
    menuName: '_userid',
    router: '/user/active/user/user'
  },
  {
    id: '1821',
    parentId: '182',
    name: '查询ID',
    menuName: 'userid',
    router: 'user/:id'
  },
  {
    id: '183',
    parentId: null,
    name: '年龄ID',
    menuName: '_ageid',
    router: '/user/active/user/user'
  },
  {
    id: '1831',
    parentId: '183',
    name: '年龄ID',
    menuName: 'ageid',
    router: 'user/:id/:age'
  }
]
