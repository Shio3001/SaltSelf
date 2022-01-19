// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
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

      {
        test: [/\.ts$/], 
        loader: "ts-loader"
      },
      {
        test: /draw\.js$/,
        loader: "exports-loader"
      },
      {
        test: /draw\.wasm$/,
        type: "javascript/auto",
        loader: "file-loader"
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },

  target: "electron-main"
  //https://utamaro.hatenablog.jp/entry/2019/11/24/174339 これやっても治らない
};

module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";
//   } else {
//     config.mode = "development";
//   }
    config.mode = "development";
  return config;
};
