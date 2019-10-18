/*
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: serviceWorker配置
 * @Date: 2019-05-02 14:20:56
 * @LastEditTime: 2019-05-18 18:46:03
 */
/* eslint-disable */

// @ts-ignore
workbox.core.setCacheNameDetails({ prefix: 'website' });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// @ts-ignore
self.__precacheManifest = [].concat(self.__precacheManifest || []);

// @ts-ignore
workbox.precaching.suppressWarnings();

// @ts-ignore
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
