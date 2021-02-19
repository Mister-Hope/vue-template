import { register } from "register-service-worker";
import { Store } from "vuex";
import { BaseState } from "@/store";
import { pwaEvent } from "./event";

const registerServiceWorker = (store: Store<BaseState>): void => {
  if (process.env.NODE_ENV === "production")
    register(`${process.env.BASE_URL || "/"}service-worker.js`, {
      registered(registration) {
        if (process.env.NODE_ENV === "development" || process.env.VUE_APP_DEBUG)
          console.log("Service worker 已注册");

        store.commit("sw/state", "registered");
        pwaEvent.emit("registered", registration);
      },

      ready(registration) {
        if (process.env.NODE_ENV === "development" || process.env.VUE_APP_DEBUG)
          console.log("Service worker 已激活");

        store.commit("sw/state", "ready");
        pwaEvent.emit("ready", registration);
      },

      cached(registration) {
        if (process.env.NODE_ENV === "development" || process.env.VUE_APP_DEBUG)
          console.log("内容已经被缓存以供离线显示");

        store.commit("sw/state", "cached");
        pwaEvent.emit("cached", registration);
      },

      updatefound(registration) {
        if (process.env.NODE_ENV === "development" || process.env.VUE_APP_DEBUG)
          console.log("正在下载新内容");

        store.commit("sw/state", "updatefound");
        pwaEvent.emit("updatefound", registration);
      },

      updated(registration) {
        if (process.env.NODE_ENV === "development" || process.env.VUE_APP_DEBUG)
          console.log("内容已更新，请刷新");

        store.commit("sw/state", "updated");
        pwaEvent.emit("updated", registration);
      },

      offline() {
        if (process.env.NODE_ENV === "development" || process.env.VUE_APP_DEBUG)
          console.log("未检测到网络连接，APP 以离线模式启动");

        store.commit("sw/state", "offline");
      },

      error(error) {
        console.error("Service worker 注册出现错误:", error);

        store.commit("sw/error", error);
      },
    });
};

export default registerServiceWorker;
