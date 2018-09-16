import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import SvgIcon from 'vue-svgicon'
import Vuelidate from 'vuelidate'
import '../assets/app.styl'

Vue.use(SvgIcon)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
