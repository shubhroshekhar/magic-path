const path = require('path');

module.exports = {
  mode: 'production',
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Regular expression 
        exclude: /(node_modules|bower_components)/,//excluded node_modules 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]  //Preset used for env setup
          }
        }
      }
    ]
  }
};