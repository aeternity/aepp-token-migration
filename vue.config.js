module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @import "@/style/variables.scss"; 
          @import "@/style/mixins.scss";
          @import "@/style/assets/fonts/fonts.scss";
        `
      }
    }
  }
}