import { Module } from "vuex";
import { BaseState } from "../state";

export interface SWState {
  status: string; // service-worker 状态
}

const swState: SWState = { status: "" };

export const swModule: Module<SWState, BaseState> = {
  namespaced: true,

  state: swState,

  mutations: {
    state(state: SWState, status: string): void {
      state.status = status;
    },
  },
};
