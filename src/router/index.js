import { createRouter, createWebHistory } from "vue-router";
import WdViewIndex from "../components/WdViewIndex.vue";

const routes = [
  {
    path: "/",
    component: WdViewIndex,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
