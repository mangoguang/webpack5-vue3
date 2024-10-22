const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './main.ts',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff2?|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash][ext]'
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: 'asset',
        generator: {
          filename: 'images/[name]-[hash][ext]'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader', 'sass-loader']
      },
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack5-ts-vue',
      template: './index.html'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}
