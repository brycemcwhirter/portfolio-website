module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
};
