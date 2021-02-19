import { createStore } from "vuex";
import { baseState } from "./state";
import { baseMutation } from "./mutation";
import { swModule } from "./module";

import type { BaseState } from "./state";
import type { SWState } from "./module";

export type { BaseState } from "./state";
export type { SWState } from "./module";

export interface State extends BaseState {
  sw: SWState;
}

export default createStore({
  state: baseState,

  mutations: baseMutation,

  modules: {
    sw: swModule,
  },
});
