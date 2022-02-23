const path = require('path')
const yargs = require('yargs')

const { defineConfig } = require('@vue/cli-service')

const { outputDir } = yargs.argv

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  outputDir: outputDir ? path.join('dist', outputDir) : 'dist'
})
