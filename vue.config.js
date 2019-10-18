
/**
 * @description: vue输出配置
 *
 * @property {string} publicPath @default '/' 网站在服务器上的部署位置
 * @property {string} outputDir @default 'dist' 编译输出目录
 * @property {string} assetsDir @default '' 放置生成的静态资源相对于outputDir的目录
 * @property {string} indexPath @default 'index.html' 指定生成的主页文件相对于outputDir的输出路径，也可以是一个绝对路径。
 * @property {string} filenameHashing @default true 文件名hash处理
 * @property {boolean|'error'} lintOnSave @default true 是否在开发环境下通过eslint-loader在每次保存时lint代码
 * @property {boolean} runtimeCompiler @default false 是否使用包含运行时编译器的 Vue 构建版本
 * @property {boolean} productionSourceMap @default true 生产环境是否生产SourceMap
 * @property {string} crossorigin CORS设置
 * @property {function} chainWebpack 链式处理Webpack
 * @property {function|object} configureWebpack Webpack配置
 * @property {object} devServer 开发服务器配置
 * @property {object} pwa Progressive App支持
 */
module.exports = {
  publicPath: process.env.DeployAddress || '/',
  productionSourceMap: false,
  crossorigin: 'anonymous',
  // chainWebpack,
  // configureWebpack,
  devServer: {
    compress: true, // 启用gzip压缩
    overlay: { // 浮层
      warnings: false,
      errors: true
    },
    open: 'Google Chrome' // 开发环境打开浏览器
  },
  pwa: {
    name: 'vue demo', // SW注册后的应用名称
    themeColor: '#42b983', // 主题色
    msTileColor: '#42b983', // 微软磁贴颜色
    appleMobileWebAppCapable: 'yes', // iOS启用SW
    appleMobileWebAppStatusBarStyle: 'default', // iOS状态栏样式,可选"black-translucent","black","default"
    iconPaths: { // 图标路径
      favicon32: 'img/icons/favicon-32.png',
      favicon16: 'img/icons/favicon-16.png',
      appleTouchIcon: 'img/icons/apple-icon-152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150.png'
    },
    // 配置 workbox 插件
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker/serviceWorker.js', // Service-worker脚本路径
      swDest: 'service-worker/service-worker.js', // serviceworker存放地点
      importWorkboxFrom: 'local', // service worker引入方式
      importsDirectory: 'service-worker', // service-worker文件存放路径
      maximumFileSizeToCacheInBytes: '10485760'
    },
    manifestOptions: { // 定义 manifest.json
      name: 'vuets',
      short_name: 'vuets',
      description: 'vue + ts + router + vuex 项目模板',
      icons: [
        {
          src: '/img/icons/chrome-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/img/icons/chrome-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      start_url: './index.html',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#42b983'
    }
  }
};
