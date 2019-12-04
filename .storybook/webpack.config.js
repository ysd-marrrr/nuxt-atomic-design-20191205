const path = require('path');
 
module.exports = ({ config }) => {
  config.resolve.alias['@'] = path.resolve(__dirname, '../')
  return config
}