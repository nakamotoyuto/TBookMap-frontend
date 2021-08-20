module.exports = {
  reactStrictMode: true,
}
const withLinaria = require('next-linaria')
module.exports = withLinaria({
  linaria: {
    evaluate: true,
    // displayName: false,
  }
})
