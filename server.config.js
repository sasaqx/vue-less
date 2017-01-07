
module.exports = {
  entry: './main.js',
  output: {
    path: process.cwd(),
    filename: 'build.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/
      },{
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: "file-loader",
        query: {
          name: "[name].[hash].[ext]"
        }
      }, {
          test: /\.less$/,
          loader: 'style!css!less'
      }, {
          test: /\.css$/,
          loader: 'style!css'
      }]
  },
  resolve: {
    alias : {
      'css' : __dirname + '/css',
      'js'  : __dirname + '/js',
      'store' : __dirname + '/vuex/store',
      'entry' : __dirname + '/vuex/components/entry'
    }
  },
  extensions: ['', '.js', '.vue'],
  // devtool: '#source-map'
};
