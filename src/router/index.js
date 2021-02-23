import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import item1 from "../components/item1";
import item2 from "../components/item2";
import item3 from "../components/item3";
import item11 from "../components/item11";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/item1",
    name: "item1",
    component: item1
  },
  {
    path: "/item2",
    name: "item2",
    component: item2
  },
  {
    path: "/item3",
    name: "item3",
    component: item3
  },
  {
    path: "/item11",
    name: "item11",
    component: item11
  }
];

const router = new VueRouter({
  routes
});

export default router;
