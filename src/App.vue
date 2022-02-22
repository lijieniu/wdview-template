<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const menuList = ref([
  {
    text: "首页",
    icon: "bi-house-door",
    submenu: [],
  },
  {
    text: "系统设置",
    icon: "bi-sliders",
    submenu: [
      {
        text: "退出",
        icon: "bi-box-arrow-in-right",
        path: "/",
      },
    ],
  },
]);
const router = useRouter();
const menuClickHandler = (menuItem) => {
  router.push({
    path: menuItem.path,
  });
};
</script>

<template>
  <div class="container">
    <wd-layout>
      <wd-layout-header> 这里是header </wd-layout-header>
      <wd-layout has-sider="true">
        <wd-layout-sider>
          <wd-menu
            :menu-list="menuList"
            theme="dark"
            @click="menuClickHandler"
          />
        </wd-layout-sider>
        <wd-layout-content>
          <router-view></router-view>
        </wd-layout-content>
      </wd-layout>
      <wd-layout-footer> @footer </wd-layout-footer>
    </wd-layout>
  </div>
</template>

<style>
#app {
  height: 100%;
}
.container {
  height: 100%;
}
.wd-layout {
  height: 100%;
}
</style>
