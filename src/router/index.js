import Vue from "vue";
import Router from "vue-router";
import finDust from "../view/fineDust.vue";
import weatherView from "../view/weatherView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/finedust",
    },
    {
      path: "/finedust",
      component: finDust,
    },
    {
      path: "/weather",
      component: weatherView,
    },
  ],
});
