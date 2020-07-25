import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import routes from "./modules/no-auth.js";

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
