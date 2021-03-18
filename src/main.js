import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import VueRouter from "vue-router";
const apps =  require('./apps');
import common from './assets/js/common'


Vue.config.productionTip = false
let mainRouter = [];
let mainStore = {};
let type = process.env.VUE_APP_TYPE;
if(type){
  const appMain = require(`../apps/${type}/main.js`).default;
  mainRouter = appMain.router;
  mainStore = appMain.store;
}else{
  let routerAll = [];
  apps.forEach(v => {
    const appMain = require(`../apps/${v}/main.js`).default;
    let router = appMain.router;
    mainStore = common.assignStore(mainStore, appMain.store)
    router = common.routerChangeName(router, v);
    routerAll = routerAll.concat(router)
  })
  const masterMain = require('./masterMain').default;
  let masterMainRouter = masterMain.router;
  routerAll = routerAll.concat(masterMainRouter)
  mainStore = common.assignStore(mainStore, masterMain.store)
  mainRouter = routerAll;
}
const store = new Vuex.Store(mainStore);
const router = new VueRouter({
  routes: mainRouter
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
