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
    id: '184',
    parentId: null,
    name: '管理中心',
    menuName: '/',
    orderNo: 2,
    iconClass: 'fa-ravelry',
    router: '/user/'
  },
  {
    id: '1841',
    parentId: '184',
    name: '后台管理',
    menuName: 'admin',
    orderNo: 1,
    iconClass: '',
    router: 'admin'
  },
  {
    id: '1842',
    parentId: '184',
    name: '用户管理',
    orderNo: 2,
    iconClass: '',
    menuName: 'user',
    router: 'user'
  }
]
