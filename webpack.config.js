const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },

 
mode: 'development',
  module: {
      
    
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
    },
    {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
    },
    {
      test: /\.(png|svg|jpe?g|)$/i,
      loader: 'file-loader',
    } 
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
}

,

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new CleanWebpackPlugin(),

    
  ],
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    open: true,
    historyApiFallback: true,

},
devtool: 'eval-cheap-source-map'
}