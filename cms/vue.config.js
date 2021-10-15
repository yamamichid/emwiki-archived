module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8888,
    disableHostCheck: true,
    proxy: 'http://localhost:8000'
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  }
}
