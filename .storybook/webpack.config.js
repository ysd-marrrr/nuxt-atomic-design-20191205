const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath
  
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
            sourceMap: true,
          }
        }
      ]
  });
  config.plugins.push(new MiniCssExtractPlugin({
    filename: 'css/mystyles.css'
  }));
  return config
}