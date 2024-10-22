const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const baseConfig = require('../webpack.base.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  target: 'web',
  devServer: {
    hot: true,
    open: true
  },
  // 注意如果不声明文件扩展名，eslint默认只会检查js结尾的文件
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new ESLintPlugin({ extensions: ['js', 'ts', 'vue'] }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
