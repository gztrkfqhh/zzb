import Layout from '@/layout/layout/layout'
import Login from '@/views/login/login'
import Home from '@/views/home/home'
import Test from '@/views/test/test'
import Admin from '@/views/manage/admin/admin'
import UserSuper from '@/views/manage/user/user'
import UserId from '@/views/manage/user/userid'

export default [
  { path: '/login', name: 'login', title: '登录', component: Login, hidden: true },
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'fa-home'
        },
        component: Home
      }
    ]
  },
  {
    path: '/user/',
    meta: {
      title: '管理中心',
      icon: 'fa-ravelry'
    },
    component: Layout,
    children: [
      {
        path: 'admin',
        name: 'houtai',
        meta: {
          title: '后台管理'
        },
        component: Admin
      },
      {
        path: 'user',
        name: 'yonghu',
        meta: {
          title: '用户管理'
        },
        component: UserSuper
      }
    ]
  },
  {
    path: '/user/user/',
    hidden: true,
    component: Layout,
    children: [
      {
        path: ':id',
        name: 'userid',
        meta: {
          activeMenu: '/user/user',
          title: '用户ID'
        },
        component: UserId
      }
    ]
  },
  {
    path: '/t',
    component: Layout,
    children: [
      {
        path: '/test',
        name: 'test',
        meta: {
          title: '测试',
          icon: 'fa-qq'
        },
        component: Test
      }
    ]
  }
]
