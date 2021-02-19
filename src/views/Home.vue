<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/logo.png" />
    <HelloWorld msg="欢迎来到你的 Vue3 with TS APP" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
