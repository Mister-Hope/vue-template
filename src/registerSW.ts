import { register } from "register-service-worker";
import { Store } from "vuex";
import { BaseState } from "@/store/state";

const registerServiceWorker = (store: Store<BaseState>): void => {
  if (process.env.NODE_ENV === "production")
    register(`${process.env.BASE_URL || "/"}service-worker.js`, {
      ready() {
        store.commit("swState", "ready");
        console.log("APP已被service worker接管缓存");
      },
      cached() {
        store.commit("swState", "cached");
        console.log("内容已经被缓存以离线显示");
      },
      updated() {
        store.commit("swState", "updated");
        console.log("内容已更新，请刷新");
      },
      offline() {
        store.commit("swState", "offline");
        console.log("未检测到网络连接，APP以离线模式启动");
      },
      error(error) {
        store.commit("swError", error);
        console.error("Service worker注册出现错误:", error);
      },
    });
};

export default registerServiceWorker;
