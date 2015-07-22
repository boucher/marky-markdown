var MD = require('markdown-it')

module.exports = function (html, options) {
  var mdOptions = {
    html: true
  }

  return MD(mdOptions).render(html)
}
