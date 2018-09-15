import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import '../assets/app.styl'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
