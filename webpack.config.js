const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let config = {
  entry: './src/index.tsx',
  mode: "development",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.gif$/,
        type: 'asset/inline',
      },
      {
        test: /\.(ttf|eot|svg|png)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 5500,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;
  if (argv.mode === 'development') {
    config.module.rules.push({
      test: /\.(s[ac]|c)ss$/i,
      use: [styleLoader, 'css-loader', 'sass-loader'],
    });
  }

  return config;
};
