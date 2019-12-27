import Layout from '@/layout/layout/layout'
import Login from '@/views/login/login'
import Home from '@/views/home/home'
import Admin from '@/views/manage/admin/admin'
import UserSuper from '@/views/manage/user/user'

export default [
  { path: '/login', name: 'login', title: '登录', component: Login, hidden: true },
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: '首页',
        icon: 'fa-home',
        component: Home
      }
    ]
  },
  {
    path: '/user/',
    name: '管理中心',
    icon: 'fa-ravelry',
    meta: {
      activeMenu: '/user'
    },
    component: Layout,
    children: [
      {
        path: 'admin',
        name: '后台管理',
        component: Admin
      },
      {
        path: 'user',
        name: '用户管理',
        meta: {
          activeMenu: '/user', // 主菜单 的 接口文档 高亮
          apiActiveMenu: '/user/user' // 接口文档的子菜单高亮
        },
        component: UserSuper
      }
    ]
  },
  {
    path: '/:userid',
    meta: {
      activeMenu: '/user',
      apiActiveMenu: '/user/user' // 接口文档的子菜单高亮
    },
    component: Layout,
    children: [
      {
        path: '/:userid',
        name: '用户id',
        icon: 'fa-home',
        component: () => import('@/views/manage/user/userid')
      }
    ],
    hidden: true
  }
]
