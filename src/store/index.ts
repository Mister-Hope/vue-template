import { createStore } from "vuex";
import myMutation from "./mutation";
import myState from "./state";
import serviceWorker from "./module/service-worker";

export default createStore({
  state: myState,
  modules: {
    serviceWorker,
  },
  mutations: myMutation,
});
