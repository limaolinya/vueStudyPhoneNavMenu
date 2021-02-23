import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import phoneNavMenu from "@/components/phoneNavMenu";
Vue.component("phoneNavMenu", phoneNavMenu);

import topNavMenu from "@/components/topNavMenu";
Vue.component("topNavMenu", topNavMenu);

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");






// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });