/*
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: router配置文件
 * @Date: 2019-02-26 23:43:23
 * @LastEditTime: 2019-10-18 15:55:32
 */

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router); // 使用官方Router

/**
 * @description: 暴露Router对象
 * @param {router} router配置
 * @return: router对象
 */
export default new Router({
  // 设置路由配置
  routes,

  // 使用html5的history API
  mode: 'history',

  // 设置根目录为环境变量BASE_URL
  base: process.env.BASE_URL,

  /**
   * 保存滚动位置
   *
   * @param to 新页面route对象
   * @param from 旧页面route对象
   * @param savedPosition 上次保存的滚动位置
   * @returns 返回网页滚动位置
   */
  scrollBehavior: (_to, _from, savedPosition) => savedPosition || { x: 0, y: 0 }
});
