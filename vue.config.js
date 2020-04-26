module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // @/ is an alias to src/
        prependData: `@import "~@/styles/variables.scss";`,
      },
    },
  },
};
