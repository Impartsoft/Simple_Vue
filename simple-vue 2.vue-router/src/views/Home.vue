<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <div v-for="menu in getShowMenuRoutes" :key="menu.name">
          <a-menu-item :key="menu.name" v-if="!(menu.children&&menu.children.length>0)">
              <router-link :to="menu.path" ></router-link>
              <icon-font  v-bind:type="menu.meta.icon" />
              <span> {{menu.meta.title}}</span>
          </a-menu-item>
          <a-sub-menu  :key="menu.name"  v-if="menu.children&&menu.children.length>0">
            <template #title>
              <span>
                <icon-font v-bind:type="menu.meta.icon" />
                <span >{{menu.meta.title}}</span>
              </span>
            </template>
            <a-menu-item v-for="subMenu in menu.children" :key="subMenu.name"  > 
              <router-link :to="subMenu.path" ></router-link>
              <icon-font  v-bind:type="subMenu.meta.icon" />
              <span> {{subMenu.meta.title}}</span>
            </a-menu-item>
          </a-sub-menu>
        </div>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
              <a-breadcrumb-item v-for="(item,index) of $route.matched" :key="index" style="padding:5px">
                {{item.meta.title}}
              </a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
              <!--路由-->
              <router-view/>
          </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>

import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
import { defineComponent, ref } from 'vue';
import { menuRoutes } from '.././router'
export default defineComponent({

  components: {
    IconFont,
  },

  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
      menuRoutes:menuRoutes,
    };
  },
  computed:{
    getShowMenuRoutes:function(){
     const showMenuRoutes = [];
     (this.menuRoutes).forEach(menuRoute => {
        const subMenuRoutes = [];
        (menuRoute.children).forEach(subMenuRoute => {
          if(menuRoute.redirect !== subMenuRoute.path)
            subMenuRoutes.push(subMenuRoute);
        });
        
        menuRoute.children = subMenuRoutes;
           showMenuRoutes.push(menuRoute);
      });
      return showMenuRoutes;
    }
  },
  methods: {
  }
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>

