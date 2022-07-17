const workaround = require('next-translate/lib/cjs/plugin/utils.js')

workaround.defaultLoader =
  '(l, n) => import(`@next-translate-root/locales/${l.replace(/-.+/, x => x.toUpperCase())}/${n}.json`).then(m => m.default)'

module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'zh-cn'],
  pages: {
    '*': ['common'],
    '/': ['index']
  }
}
