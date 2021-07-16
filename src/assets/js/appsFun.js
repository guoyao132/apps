const apps =  require('../../apps');
let appsFun = {
  initApps(){
    let appsConfig = appsFun.getAppsConfig();
    let proType = appsFun.getProType()
    let obj = {
      // pages: {
      //   index: {
      //     entry: './src/main.js',
      //     template: './public/index.html',
      //     filename: 'index.html',
      //   }
      // },
      publicPath: './',
      // publicPath: '/app1/',
      outputDir: (proType && (proType != 'all')) ? './' + (process.env.outputDir || 'dict') + '/' + proType : './' + (process.env.outputDir || 'dict') ,
      port: (proType && (proType != 'all')) ? appsConfig[proType].port : 8000
    }
    // if(proType != '' && appsConfig[proType].name && appsConfig[proType].port){
    //   obj = {
        // pages: {
        //   [appsConfig[proType].name]: {
        //     entry: `./apps/${proType}/main.js`,
        //     // entry: './src/main.js',
        //     // template: `./src/apps/${proType}/index.html`,
        //     template: './public/index.html',
        //     filename: 'index.html',
        //   }
        // },
        // publicPath: './',
        // publicPath: './' + proType + '/',
        // outputDir: './' + (process.env.outputDir || 'dict') + '/' + proType,
        // port: appsConfig[proType].port
      // }
    // }
    return obj;
  },
  getProType(){
    let appsConfig = appsFun.getAppsConfig();
    let proType = '';
    if(JSON.stringify(appsConfig) != '{}'){
      proType = appsFun.getProjectType();
    }
    (!appsConfig[proType]) && (proType = '');
    process.env.VUE_APP_TYPE = proType;
    return proType;
  },
  getAppsConfig(){
    let appsConfig = {};
    apps.forEach(v => {
      appsConfig[v] = {
        name: process.env[`npm_package_apps_${v}_name`],
        port: process.env[`npm_package_apps_${v}_port`],
      }
    })
    return appsConfig;
  },
  getProjectType(){
    let npm_config_argv = JSON.parse(process.env.npm_config_argv);
    let cooked1 = npm_config_argv.cooked[1];
    if(cooked1.indexOf('app') != -1){
      return npm_config_argv.remain[0] || '';
    }else{
      return '';
    }
  },
}
module.exports = appsFun