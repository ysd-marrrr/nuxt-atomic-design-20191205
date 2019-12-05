const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = ({ config }) => {
  config.resolve.alias['@'] = path.resolve(__dirname, '../')
  config.module.rules.push({
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
  });
  config.plugins.push(new MiniCssExtractPlugin({
    filename: 'css/mystyles.css'
  }));
  return config
}