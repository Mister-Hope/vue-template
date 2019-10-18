<!--
 * @Author: Mr.Hope
 * @Date: 2019-06-13 21:32:08
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-10-18 16:52:22
 * @Description: 主页
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="~|/logo.png" />
    <HelloWorld msg="欢迎来到你的Vue with TS APP" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({ components: { HelloWorld } })
export default class Main extends Vue { }
</script>
