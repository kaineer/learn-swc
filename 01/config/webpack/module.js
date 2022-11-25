// config/webpack/module.js

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(mjs|js|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader"
        }
      }
    ]
  },
});
