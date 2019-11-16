const webpack = require("webpack");
const GLOBALS = require("../config/globals/dev");
const base = require("./base.config");

module.exports = {
  ...base,
  mode: "development",
  devtool: "source-map",
  plugins: [new webpack.DefinePlugin({ GLOBALS })],
  devServer: {
    port: 7777,
    host: "0.0.0.0",
    contentBase: "./dist",
    historyApiFallback: {
      disableDotRule: true
    },
    publicPath: "/"
  }
};
