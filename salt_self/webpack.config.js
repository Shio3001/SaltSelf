// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.ts$/, use: "ts-loader" },
      // { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.wasm$/,
        type: "javascript/auto",
        loader: "file-loader",
      },
      { test: /\.js$/, use: "babel-loader" },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      // {
      //   test: /\.jsx?$/, // 拡張子がjsxで
      //   exclude: /node_modules/, // node_modulesフォルダ配下でなければ
      //   loader: 'babel-loader', // babel-loaderを使って変換する
      // },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  plugins: [new HtmlWebpackPlugin()]
  //https://utamaro.hatenablog.jp/entry/2019/11/24/174339 これやっても治らない
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  config.mode = "development";
  // config.mode = "production";

  return config;
};
