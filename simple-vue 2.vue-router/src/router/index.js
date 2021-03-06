import  { createRouter, createWebHashHistory } from 'vue-router';

export const menuRoutes = [
    { 
      path: '/', 
      component: ()=> import('@/views/Home.vue'), 
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
      component: ()=> import('@/views/Home.vue'), 
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

// 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes:routes.concat(menuRoutes), // `routes: routes` 的缩写
  })

export default router