const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // For minize code
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Default config = production mode
var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      filename: 'index.html',
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash:8].css'
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
  }
};

module.exports = (env, agrv) => {
  if (isDevMode(agrv.mode)) {
    // Source map
    config.devtool = 'eval-source-map';
    config.output.filename = 'index.js';
    // DevServer
    config.devServer = {
      contentBase: path.join(__dirname, './dist'),
      port: 3000,
      hot: true,
      stats: true
    };
    // performance
    config.performance = {
      hints: 'warning'
    };
  }

  if (isProductionMode(agrv.mode)) {
    config.performance = {
      hints: 'error',
      maxEntrypointSize: 500000
    };
  }

  return config;
};

var isProductionMode = (env) => {
  return 'production' === env;
};

var isDevMode = (env) => {
  return 'development' === env;
};
