// webpack.config.js

module.exports = require("glob").sync("./config/webpack/*.js")
  .reduce((config, path) => {
    const ctx = {cwd: __dirname};
    return {
      ...config,
      ...(require(path)(ctx))
    };
  }, { devtool: false });
