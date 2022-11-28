import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfoView from "../views/InfoView.vue";

const routes = [
  { name: "home", path: "/", component: HomeView },
  { name: "info", path: "/:id", component: InfoView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
