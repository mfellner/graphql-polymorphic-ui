const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/main.js',
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { browsers: ['> 5% in alt-EU'] },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './server/template.ejs',
    }),
  ],
};
