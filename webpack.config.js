const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const { webpack } = require("webpack");

module.exports = {
  mode: 'development',
  // entry: path.join(__dirname, "src", "index.tsx"),
  entry: ['react-hot-loader/patch', './src'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "~/src/styles/variables";',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      inject: 'body',
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
};
