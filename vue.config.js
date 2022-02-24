const path = require('path')
const yargs = require('yargs')

const { defineConfig } = require('@vue/cli-service')

// plugins
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const { outputDir } = yargs.argv

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  outputDir: outputDir ? path.join('dist', outputDir) : 'dist',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.html$|\.css/, // 匹配文件名
          threshold: 10240, // 对10K以上的数据进行压缩
          // minRatio: 0.8,
          deleteOriginalAssets: false // 是否删除源文件
        })
      )
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = process.env.VUE_APP_PROJECT_NAME
      return args
    })

    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        vconsole: {
          name: 'chunk-vconsole', // split elementUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?vconsole(.*)/ // in order to adapt to cnpm
        }
      }
    })
  }
})
