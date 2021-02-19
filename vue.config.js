const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// 判断环境
const isProduction = process.env.NODE_ENV === "production";

/**
 * @description: Webpack配置
 * @param {object} config Webpack配置
 * @returns {void}
 */
const configureWebpack = (config) => {
  // 配置模块解析方式，可加快解析速度
  config.resolve.modules = [path.resolve(__dirname, "src"), "node_modules"];

  // 生产环境配置
  if (isProduction) {
    // 使用 CDN 外部引入组件

    // config.externals = {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex'
    // };

    // 提出性能要求
    config.performance = {
      hints: "warning",
      maxEntrypointSize: 1048576,
      maxAssetSize: 1048576,
    };

    config.optimization = {
      // 为 webpack 运行时代码创建单独的 chunk
      runtimeChunk: { name: "manifest" },
    };
  } else config.devtool = "source-map";

  // 分析打包后代码
  if (process.env.ANALYZE)
    config.plugins.push(
      // 使用 webpack 分析插件
      new BundleAnalyzerPlugin({
        analyzerPort: 0, // 让 node 使用随机端口
        defaultSizes: "gzip", // 默认展示 gzip 大小
      })
    );
};

/**
 * @description: vue输出配置
 *
 * @property {string} publicPath @default '/' 网站在服务器上的部署位置
 * @property {string} outputDir @default 'dist' 编译输出目录
 * @property {string} assetsDir @default '' 放置生成的静态资源相对于outputDir的目录
 * @property {string} indexPath @default 'index.html' 指定生成的主页文件相对于outputDir的输出路径，也可以是一个绝对路径。
 * @property {string} filenameHashing @default true 文件名 hash 处理
 * @property {boolean|'error'} lintOnSave @default true 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
 * @property {boolean} runtimeCompiler @default false 是否使用包含运行时编译器的 Vue 构建版本
 * @property {boolean} productionSourceMap @default true 生产环境是否生产 SourceMap
 * @property {string} crossorigin CORS 设置
 * @property {function} chainWebpack 链式处理 Webpack
 * @property {function|object} configureWebpack Webpack 配置
 * @property {object} devServer 开发服务器配置
 * @property {object} pwa Progressive App 支持
 */
module.exports = {
  publicPath: process.env.DeployAddress || "/",

  assetsDir: "./assets",

  configureWebpack,

  devServer: {
    // 启用 gzip 压缩
    compress: true,
    // 浮层
    overlay: {
      warnings: false,
      errors: true,
    },
    // 开发环境打开浏览器
    open: "Google Chrome",
  },

  pwa: {
    name: "vue demo", // SW 注册后的应用名称
    themeColor: "#42b983", // 主题色
    msTileColor: "#42b983", // 微软磁贴颜色
    appleMobileWebAppCapable: "yes", // iOS 启用 SW
    appleMobileWebAppStatusBarStyle: "default", // iOS 状态栏样式,可选 "black-translucent","black","default"
    // 图标路径
    iconPaths: {
      favicon32: "assets/icon/favicon-32.png",
      favicon16: "assets/icon/favicon-16.png",
      appleTouchIcon: "assets/icon/apple-icon-152.png",
      maskIcon: "assets/icon/safari-pinned-tab.svg",
      msTileImage: "assets/icon/mstile-150.png",
    },
    // 配置 workbox 插件
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      swDest: "service-worker.js", // service-worker 文件存放路径
    },
    // 定义 manifest.json
    manifestOptions: {
      name: "vue demo",
      short_name: "vue demo",
      description: "vue + ts + router + vuex 项目模板",
      icons: [
        {
          src: "/assets/icon/chrome-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/assets/icon/chrome-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      start_url: "./index.html",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#42b983",
    },
  },
};
