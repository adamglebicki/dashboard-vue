import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Team from "./views/Team.vue";
import New from "./views/New";
import SignIn from "./views/Autentication/SignIn";
import Request from "./views/Autentication/Request";
import Recover from "./views/Autentication/Recover";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/new",
      name: "new",
      component: New
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/request",
      name: "request",
      component: Request
    },
    {
      path: "/recover",
      name: "recover",
      component: Recover
    }
  ]
});
