module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ["es2015", "es2016", "babel-preset-react"],
        plugins: [
          "syntax-trailing-function-commas",
          "syntax-async-functions",
          "transform-class-properties",
          "transform-object-rest-spread",
          "transform-regenerator",
          ["transform-runtime", {
            helpers: false,
            polyfill: false,
            regenerator: true
          }]
        ]
      }
    }]
  }
};