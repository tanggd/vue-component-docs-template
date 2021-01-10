const path = require('path')

module.exports = {
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
  // 在vue create 时是不是应该选择另外一个模式
  // Runtime Only
  // Runtime+Compiler
  runtimeCompiler: true
}
