const development = process.env.NODE_ENV === 'development';

module.exports = {
  outputDir: 'docs',
  // for hosting on https://ubclaunchpad.github.io/new/
  publicPath: development ? undefined : '/new',
  css: {
    loaderOptions: {
      scss: {
        // @/ is an alias to src/
        prependData: `@import "~@/styles/variables.scss";`,
      },
    },
  },
};
