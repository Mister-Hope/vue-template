import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import registerServiceWorker from "./service-worker";
import VConsole from "vconsole";

if (process.env.VUE_APP_DEBUG) {
  const vconsole = new VConsole();

  vconsole.showSwitch();
}

registerServiceWorker(store);

createApp(App).use(store).use(router).mount("#app");
