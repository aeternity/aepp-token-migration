const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
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
  },
  chainWebpack: (config) => config
    .plugin('html')
    .tap(args => {
      // inline all js files in index.html
      args[0]['inlineSource'] = '.(js)$'
      return args
    })
}
