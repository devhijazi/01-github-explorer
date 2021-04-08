module.exports = {
  presets: [
    '@babel/preset-env', // Identifica o ambiente de produção da aplicação
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // resolve o problema de importação da lib react
      },
    ], // Identifica sintaxe HTML dentro do codigo Javascript
  ],
};
