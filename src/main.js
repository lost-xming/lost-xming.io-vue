import Vue from 'vue'
import App from './App'
import router from './router'
import '../lib/font-awesome.min.css';
import '../lib/index.css'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
