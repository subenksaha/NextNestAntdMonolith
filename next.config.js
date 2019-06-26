const withLess = require('@zeit/next-less')
const withTypescript = require('@zeit/next-typescript');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withTypescript(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    // theme antd here
    modifyVars: {
      '@primary-color': '#7157D9'
    }
  },
  useFileSystemPublicRoutes: false,
}));