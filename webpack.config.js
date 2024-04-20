const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "nosources-source-map",
};
