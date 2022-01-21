// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path_require = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path_require.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "main.js",
  },
  devServer: {
    historyApiFallback: true, //これで複数ページ
  },
  
  plugins: [
    // [new HtmlWebpackPlugin({template: path_require.resolve(__dirname, "/public/index.html")})]
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
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
      // {
      //   test: /\.wasm$/,
      //   type: "javascript/auto",
      //   loader: "file-loader",
      // },
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
