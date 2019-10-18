<!--
 * @Author: Mr.Hope
 * @LastEditors: Mr.Hope
 * @Description: 404界面
 * @Date: 2019-03-25 12:39:59
 * @LastEditTime: 2019-05-08 13:18:34
-->
<template>
  <div class="container">
    <h1 mt-1>未找到界面</h1>
    <p>很抱歉，您打开的网页不存在。这可能是由于您输入了错误的路径，或者网页尚未制作。</p>
    <p>同时，这也可能是一个bug。</p>
    <p>
      您可以将此错误反馈给
      <router-link
        to="http://wpa.qq.com/msgrd?v=3&amp;uin=1178522294&amp;site=qq&amp;menu=yes"
      >Mr.Hope</router-link>
    </p>
    <h1 mt-1>Page not found</h1>
    <p>
      We are sorry. The page you are looking for does not exist.
      This can be caused by inputing the wrong url, or the website is not made yet.
    </p>
    <p>Also, this can be a bug.</p>
    <p>
      You can report this error to
      <router-link
        to="http://wpa.qq.com/msgrd?v=3&amp;uin=1178522294&amp;site=qq&amp;menu=yes"
      >Mr.Hope</router-link>.
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Page404 extends Vue {}
</script>
