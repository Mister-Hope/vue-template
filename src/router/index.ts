import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

export default createRouter({
  routes,

  history: createWebHistory(process.env.BASE_URL),

  scrollBehavior: (_to, _from, savedPosition) =>
    savedPosition || { top: 0, left: 0 },
});
