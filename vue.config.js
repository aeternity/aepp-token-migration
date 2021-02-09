const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
  publicPath: process.env.BASE_URL || '.',
  productionSourceMap: false,
  configureWebpack: {
    devtool: false,
    performance: {
      hints: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inlineSource: '.(js|css)$' // embed all javascript and css inline
      }),
      new HtmlWebpackInlineSourcePlugin()
    ]
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "@/style/index.scss";'
      }
    }
  }
}
