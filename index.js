const SizePlugin = require('size-plugin')
module.exports = api => {
  api.chainWebpack( config => {
    config.plugin('size').use(SizePlugin)
  })
}
