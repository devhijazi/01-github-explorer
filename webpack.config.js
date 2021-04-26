const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // importação do fast refresh

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'; // definindo o estado da aplicação

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // source map para melhor debugar de erros apresentados no console
  entry: path.resolve(__dirname, 'src', 'index.tsx'), // Define o arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'), // Define o arquivo a ser gerado pelo webpack
    filename: 'bundle.js', // define o nome do arquivo que vai ser buildado
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // define as extensões de arquivo para realizar a leitura
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // definindo o HTML estatico
    }),
  ].filter(Boolean), // hackzinho para filtrar qualquer valor condicional

  /**
   * Module
   * Regras
   * Definindo as regras do webpack
   *
   */
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/, // importação do tipo do arquivo
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',

          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        }, // Integração do webpack com o babel
      },
      {
        test: /\.scss$/, // importação do tipo do arquivo
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Integração do webpack com o babel
      },
    ],
  },
};
