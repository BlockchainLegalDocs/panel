import { RouterOptions } from "vue-router";

const routes: RouterOptions["routes"] = [
  {
    path: "/auth/login",
    component: () => import("@@/auth/Login.vue"),
  },
  {
    path: "/.*",
    redirect: "/auth/login",
  },
];

export default routes;
