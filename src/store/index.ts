import Vue from "vue";
import Vuex from "vuex";
import myMutation from "./mutation";
import myState from "./state";

Vue.use(Vuex); // 使用Vuex

export default new Vuex.Store({
  state: myState,
  modules: {},
  mutations: myMutation,
});
