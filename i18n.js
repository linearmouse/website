const { isMainlandChinaCluster } = require('./utils/config')

let defaultLocale = 'en'

if (isMainlandChinaCluster) {
  defaultLocale = 'zh-CN'
  locales = [defaultLocale]
}

module.exports = {
  defaultLocale,
  pages: {
    '*': ['common'],
    '/': ['index']
  }
}
