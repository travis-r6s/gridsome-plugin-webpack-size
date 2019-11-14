const SizePlugin = require('size-plugin')
module.exports = api => {
  api.chainWebpack( config => {
    if (process.env.NODE_ENV === 'production') {
      const options = { writeFile: false }
      config.plugin('size').use(SizePlugin).init((Plugin) => new Plugin(options))
    }
  })
}
