import  { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/views/Layout.vue'

export const menuRoutes = [
    { 
      path: '/', 
      component: Layout, 
      redirect: "/home/index",
      meta:{
        title:"首页",
        icon:"icon-twitter",
      },
      children:[
      {
        path: "/home/index",
        name: 'index',
        component: () => import('@/views/Index.vue'),
      }
      ] 
    },
    { 
      path: '/test1', 
      component: Layout, 
      name: "menu1",
      meta:{
        title:"测试树1  ",
        icon:"icon-twitter",
      },
      children:[
      {
        path: '/home/treeTest',
        name: 'menu1SubMenu1',
        component: () => import('@/views/TreeTest1.vue'),
        meta:{
          title:"子菜单1",
          icon:"icon-facebook", 
        },
      },
      {
        path: '/home/treeTest2',
        name: 'menu1SubMenu2',
        component: () => import('@/views/TreeTest2.vue'),
        meta:{
          title:"子菜单2",
          icon:"icon-tuichu",
        },
      },
      ] 
    },
    {
      path: '/test2',
      component: Layout, 
      name: "menu2",
      meta:{
        title:"测试树2",
        icon:"icon-twitter",
      },
      children:[
        {
          path: '/home/treeTest4',
          name: 'menu2SubMenu4',
          component: () => import('@/views/TreeTest3.vue'),
          meta:{
            title:"子菜单3",
            icon:"icon-facebook", 
          },
        },
        {
          path: '/home/treeTest5',
          name: 'menu2SubMenu5',
          component: () => import('@/views/TreeTest4.vue'),
          meta:{
            title:"子菜单4",
            icon:"icon-tuichu",
          },
        },
      ] 
    },
  ]

const routes = [
    { path: '/login', component: () => import('@/views/Login.vue') },
]

const router = createRouter({
    // 使用 hash 模式。
    history: createWebHashHistory(),
    routes:routes.concat(menuRoutes),
  })

export default router