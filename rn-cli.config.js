const blacklist = require('metro-config/src/defaults/blacklist')

module.exports = {
  resolver: {
    // unstable - Each react-native versions has some difference APIs
    // https://github.com/facebook/react-native/blob/7a69f1aa272a9b71755033a80f6f4aa5e9dcbaf6/local-cli/util/Config.js#L71
    blacklistRE: blacklist([/packages\/.*\/node_modules\/react-native\/.*/])
  },
}