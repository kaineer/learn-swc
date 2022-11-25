// config/webpack/output.js

const {join} = require('path');

module.exports = ({cwd}) => ({
  output: {
    filename: "bundle.js",
    path: join(cwd, "build")
  }
});
