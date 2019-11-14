const SizePlugin = require('size-plugin')
module.exports = (api, options) => {
  api.chainWebpack( config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('size').use(SizePlugin).init((Plugin) => new Plugin(options))
    }

    if ( process.env.NODE_ENV === 'development' && options.development ) {
      config.plugin('size').use(SizePlugin).init((Plugin) => new Plugin(options))
    }
  })
}

module.exports.defaultOptions = () => ( {
  writeFile: false,
  development: false
})
