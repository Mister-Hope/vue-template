<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      如果需要一份指南，或想要了解如何编写/自定义这个APP
      <br />请访问
      <a href="https://cli.vuejs.org/zh/" rel="noopener" target="_blank">vue-cli 文档</a>.
    </p>
    <h3>已安装的插件</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          rel="noopener"
          target="_blank"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          rel="noopener"
          target="_blank"
        >typescript</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          rel="noopener"
          target="_blank"
        >pwa</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
          rel="noopener"
          target="_blank"
        >unit-mocha</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
          rel="noopener"
          target="_blank"
        >e2e-cypress</a>
      </li>
    </ul>
    <h3>其他链接</h3>
    <ul>
      <li>
        <a href="https://vuejs.org/zh/" rel="noopener" target="_blank">核心文档</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org/c/chinese" rel="noopener" target="_blank">论坛</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" rel="noopener" target="_blank">News</a>
      </li>
    </ul>
    <h3>生态系统</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org/zh/" rel="noopener" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org/zh/" rel="noopener" target="_blank">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          rel="noopener"
          target="_blank"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org/zh/" rel="noopener" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" rel="noopener" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
