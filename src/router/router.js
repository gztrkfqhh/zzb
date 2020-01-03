import Layout from '@/layout/layout/layout'
import Login from '@/views/login/login'
import Home from '@/views/home/home'
// import Test from '@/views/manage/test/test'
// import Admin from '@/views/manage/admin/admin'
// import UserSuper from '@/views/manage/user/user'
// import UserId from '@/views/manage/user/userid'
// import UserName from '@/views/manage/user/username'
// const dynamic = 'dynamic'
export default [
  { path: '/login', name: 'login', title: '登录', component: Login, hidden: true },
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/',
    name: '_home',
    title: '首页',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          icon: 'fa-home',
          title: '首页'
        },
        component: Home
      }
    ]
  }
  // {
  //   path: '/user/',
  //   meta: {
  //     title: '管理中心',
  //     icon: 'fa-ravelry'
  //   },
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'admin',
  //       name: 'back',
  //       meta: {
  //         title: '后台管理'
  //       },
  //       component: Admin
  //     },
  //     {
  //       path: 'user',
  //       name: 'user',
  //       meta: {
  //         title: '用户管理'
  //       },
  //       component: UserSuper
  //     }
  //   ]
  // },
  // {
  //   path: `/user/user/`,
  //   name: '_userid',
  //   title: '用户ID',
  //   hidden: true,
  //   component: Layout,
  //   children: [
  //     {
  //       path: ':id',
  //       name: 'userid',
  //       meta: {
  //         activeMenu: '/user/user',
  //         title: '用户ID'
  //       },
  //       component: UserId
  //     }
  //   ]
  // },
  // {
  //   path: `/user/user/:id/`,
  //   name: '_username',
  //   title: '用户名',
  //   hidden: true,
  //   component: Layout,
  //   children: [
  //     {
  //       path: ':name',
  //       name: 'username',
  //       meta: {
  //         activeMenu: '/user/user',
  //         title: '用户名'
  //       },
  //       component: UserName
  //     }
  //   ]
  // },
  // {
  //   path: '/t',
  //   title: '测试',
  //   name: '_test',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/test',
  //       name: 'test',
  //       meta: {
  //         title: '测试',
  //         icon: 'fa-qq'
  //       },
  //       component: Test
  //     }
  //   ]
  // }
]
