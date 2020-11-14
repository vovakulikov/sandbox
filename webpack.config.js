const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  mode: "development",
  devtool: 'source-map',
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx",] },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules\/(?!(@wrike-kit)\/).*/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'static/media/[name].[hash:8].[ext]' }
          },
        ],
      },
      {
        test: /\.(scss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      template: './web/index.html'
    }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};
