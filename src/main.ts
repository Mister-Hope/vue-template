import Vue, { VNode } from "vue";
import App from "./App.vue";

// 引入配置好的VueRouter与Vuex
import router from "./router";
import store from "./store";

// 引入Service-Worker
import registerSW from "./registerSW";

// 注册service worker
registerSW(store);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h): VNode => h(App),
}).$mount("#app");
