const path = require('path')

module.exports = {
  publicPath: '/vue-component-docs-template',
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('md-loader')
      .loader(path.resolve(__dirname, './build/md-loader/index.js'))
      .end()
  },
  lintOnSave: false,
  // 运行时版本是否需要编译
  // 模式
  // Runtime Only
  // Runtime+Compiler
  runtimeCompiler: true
}
