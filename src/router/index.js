import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    // The journey reveals its sections before scrolling to a hash.
    if (to.hash) return false;
    return { top: 0 };
  },
});
