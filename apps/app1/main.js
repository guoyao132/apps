import Vue from 'vue'
import App from '../../src/App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.ROUTER_TYPE = process.env.VUE_APP_TYPE == '' ? 'app1-' : '';

export default {
  router,
  store,
}
