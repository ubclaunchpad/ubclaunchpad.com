
module.exports = {
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        // @/ is an alias to src/
        prependData: `@import "~@/variables.scss";`,
      },
    },
  },
};
