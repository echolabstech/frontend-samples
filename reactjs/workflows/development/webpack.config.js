var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev/scripts");
var OUTPUT = path.resolve(__dirname, "static");

var config = {
  entry: DEV + "/app.jsx",
  output: {
    path: OUTPUT,
    filename: "script.js"
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel-loader",
    }]
  }
};

module.exports = config;
