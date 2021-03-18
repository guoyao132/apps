const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir)
}
const {initApps} =  require('./src/assets/js/appsFun');


let config = initApps();
console.log(config);
//配置  项目之间独立打包↑
// const DXSRC = 'http://39.100.139.247:10300';
let port = config.port;
delete config.port;
module.exports = {
  filenameHashing: true,
  productionSourceMap: false,
  // chunkFilename: 'js/[chunkname].[chunkhash].chunk.js',
  // pages: obj,
  ...config,
  devServer: {
    port: port,
    // historyApiFallback: false,
    // proxy: {
      // '/': {
      //   target: DXSRC,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/': '/'
      //   }
      // },
    // }
  },
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.module.rules
      .delete('eslint')
      .end()
    config.resolve.alias
      .set('@', resolve('src'))
  }
};
