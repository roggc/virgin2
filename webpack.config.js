//wbclient.config.js

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin= require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports =
{
  entry:'./index.js',
  module:
  {
    rules:
    [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico|webmanifest)$/,
        use:
        [
          {
            loader: 'file-loader',
            options:
            {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders:
        [
          MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options:
            {
              modules:true
            }
          },
          'sass-loader'
        ]
      },
    ]
  },
  plugins:
  [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin
    (
      {
        template: './index.html'
      }
    ),
    new MiniCssExtractPlugin()
  ],
  resolve:
  {
    modules:
    [
      "node_modules",
      path.resolve("./")
    ],
    extensions: ['.js','.jsx','.css','.scss','.sass','.ico','.png','.webmanifest']
  }
}
