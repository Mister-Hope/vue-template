/*
 * @Author: Mr.Hope
 * @Date: 2019-06-13 21:32:08
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-10-18 16:15:50
 * @Description: 主脚本文件
 */
import Vue from 'vue';
import App from './App.vue';

// 引入配置好的VueRouter与Vuex
import router from './router';
import store from './store';

// 引入Service-Worker
import registerSW from './service-worker/registerSW';

// 注册service worker
registerSW(store);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
