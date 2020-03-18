/**
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: Vuex ServiceWorker Module
 * @Date: 2019-03-24 23:50:48
 * @LastEditTime: 2019-03-25 10:10:26
 */
import { Module } from 'vuex';
import { BaseState } from '../state';

export interface SWState {
  status: string; // service-worker 状态
  error?: any;
}

const swState: SWState = { status: '' };

const swModule: Module<SWState, BaseState> = {
  state: swState,
  mutations: {
    /**
     * @description: 设置ServiceWorker状态
     *
     * @param state swState
     * @param status ServiceWorker状态
     */
    setList(state: SWState, status: string) {
      state.status = status;
    },

    /**
     * @description: 设置ServiceWorker错误
     *
     * @param state imagestate
     * @param error 遇到的错误
     */
    index(state: SWState, error: any) {
      state.status = 'error';
      state.error = error;
    }
  }
};

export default swModule;
