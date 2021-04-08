const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // Define o arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'), // Define o arquivo a ser gerado pelo webpack
    filename: 'bundle.js', // define o nome do arquivo que vai ser buildado
  },

  resolve: {
    extensions: ['.js', '.jsx'], // define as extensões de arquivo para realizar a leitura
  },

  plugins: [
    new HTMLWebpackPlugin({
      path: path.resolve(__dirname, 'public', 'index.html'), // definindo o HTML estatico
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },

  /**
   * Module
   * Regras
   * Definindo as regras do webpack
   *
   */
  module: {
    rules: [
      {
        test: /\.jsx$/, // importação do tipo do arquivo
        exclude: /node_modules/,
        use: 'babel-loader', // Integração do webpack com o babel
      },
    ],
  },
};
