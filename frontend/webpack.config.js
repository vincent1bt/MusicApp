module.exports = {
  entry: __dirname,
  output: {
    filename: "main.js",
    path: "./../assets"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  resolve: {
    root: __dirname,
    extensions: ["", ".js"],
    moduleDirectories: ["node_modules"]
  },
  debug: true,
  devtool: "source-map"
}
