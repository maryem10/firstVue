import Vue from 'vue'
import App from './App.vue'

// import App from './App2.vue'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.min.css"
new Vue({
  render: h => h(App),
}).$mount('#app');
