import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import  { createRouter, createWebHashHistory } from 'vue-router';
import 'ant-design-vue/dist/antd.css';

import Home from './views/Home.vue'
import Login from './views/Login.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
  ]

// 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

//创建并挂载根实例
//确保 _use_ 路由实例使
//整个应用支持路由。
createApp(App).use(Antd).use(router).mount('#app')