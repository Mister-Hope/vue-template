<template>
  <div class="home">
    <img alt="Vue logo" src="~|/logo.png" />
    <HelloWorld msg="欢迎来到你的Vue with TS APP" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({ components: { HelloWorld } })
export default class Main extends Vue {}
</script>
