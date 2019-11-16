const path = require("path");
const dest = path.resolve(__dirname, "../dist");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    app: ["babel-polyfill", "./packages/index.js"]
  },
  output: {
    path: dest,
    publicPath: "/",
    filename: "[name].js"
  }
};
