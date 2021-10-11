module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8888,
    disableHostCheck: true,
    proxy: 'http://localhost:8000'
  }
}
