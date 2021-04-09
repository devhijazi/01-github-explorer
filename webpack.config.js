const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'; // definindo o estado da aplicação

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // source map para melhor debugar de erros apresentados no console
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // Define o arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'), // Define o arquivo a ser gerado pelo webpack
    filename: 'bundle.js', // define o nome do arquivo que vai ser buildado
  },

  resolve: {
    extensions: ['.js', '.jsx'], // define as extensões de arquivo para realizar a leitura
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // definindo o HTML estatico
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
      {
        test: /\.scss$/, // importação do tipo do arquivo
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Integração do webpack com o babel
      },
    ],
  },
};
