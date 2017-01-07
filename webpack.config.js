var HtmlWebpackPlugin = require('html-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
var path = require('path');
module.exports = {
  entry: './main.js',
  output: {
    path: process.cwd() + '/build',
    publicPath: "http://github.com/sasaqx/vue-less/",
    filename: 'build.[chunkhash].js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: "file-loader",
        query: {
          name: "[name].[hash].[ext]"
        }
      }, {
          test: /\.scss$/,
          loader: 'style!css!sass'
      }, {
          test: /\.less$/,
          include: /css/,
          loader: 'style!css!less'
      }, {
          test: /\.css$/,
          loader: 'style!css'
      } ]
  },
  resolve: {
    alias : {
      'css' : __dirname + '/css',
      'js'  : __dirname + '/js',
      //'store' : __dirname + '/vuex/store',
      'entry' : __dirname + '/vuex/components/entry',
      // 'blusher' : path.resolve(__dirname, '../blusher')
    }
  },
  extensions: ['', '.js', '.vue'],
  plugins: [
    new Clean(['build']),
    new OfflinePlugin({
        caches : 'all',
        relativePaths : false,
        publicPath: "http://github.com/sasaqx/vue-less/"
    }),
    new HtmlWebpackPlugin({
      filename : 'index.html',
      template: 'entry.html',
      //inject: 'head',
      hash : false
    })
  ]
  // devtool: 'source-map'
};
