import Vue from 'vue'
import App from './App.vue'
import vmodal from 'vue-js-modal'

Vue.use(vmodal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
