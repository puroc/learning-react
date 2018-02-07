var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: "./src/js/index.js",
  module: {
    loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['react-html-attrs'] //添加组件的插件配置
      }
    },
    //下面是使用 ant-design 的配置文件
    { test: /\.css$/, loader: 'style-loader!css-loader' },
    // //下面是添加的 css 的 loader，也即是 css 模块化的配置方法，大家可以拷贝过去直接使用
    // {
    //   test: /\.css$/,
    //   loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    // }
    ]
  },    
  output: {
    path: __dirname,
    filename: "./src/out/bundle.js"
  }
};