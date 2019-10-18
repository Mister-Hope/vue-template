/**
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: store配置文件
 * @Date: 2019-02-24 22:21:25
 * @LastEditTime: 2019-03-07 13:14:57
 */

import Vue from 'vue';
import Vuex from 'vuex';
import myMutation from './mutation';
import myState from './state';

Vue.use(Vuex);// 使用Vuex

export default new Vuex.Store({
  state: myState,
  modules: {},
  mutations: myMutation
});
