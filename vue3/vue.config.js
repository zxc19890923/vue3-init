module.exports = {
  // 基本路径
  publicPath: './',
  // 构建时的输出目录
  outputDir: 'dist',
  // 放置静态资源的目录
  assetsDir: 'static',
  // html 的输出路径
  indexPath: 'index.html',
  //文件名哈希
  filenameHashing: true,
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: true,
  // 是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  // babel-loader 默认会跳过 node_modules 依赖。
  transpileDependencies: [ /* string or regex */ ],
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel='stylesheet'> 和 <script> 标签的 crossorigin 属性。
  crossorigin: '',
  // 在生成的 HTML 中的 <link rel='stylesheet'> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  integrity: false,
  // 调整内部的 webpack 配置
  configureWebpack: () => {}, //(Object | Function)
  chainWebpack: () => {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: true,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      // 接口地址代理
      '/service-core': {
        target: 'https://pingtai.test.bangying.org', // 接口的域名
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: { "^/service-core": "service-core" }
      },
      //微信二维码登录
      "/wechat": {
        target: "https://pingtai.test.bangying.org/service-core",
        secure: true,
        changeOrigin: true
      }
    }
  },
  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}