const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "./assets/scss/main.scss";
        `
      }
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, 'src/assets/images')
      }
    }
  },
})
