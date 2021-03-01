<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">主页</RouterLink> |
      <RouterLink to="/about">关于</RouterLink>
    </div>
    <RouterView />
    <SWUpdatePopup />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import SWUpdatePopup from "@/service-worker/SWUpdatePopup.vue";

export default defineComponent({
  name: "App",

  components: {
    SWUpdatePopup,
  },

  setup() {
    const router = useRouter();

    // set title
    router.afterEach((to) => {
      if (to.meta.title) document.title = to.meta.title as string;
    });
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
