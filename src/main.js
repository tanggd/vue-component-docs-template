import Vue from 'vue'
import Components from '../packages/index'
import '../packages/styles/src/index.scss'
import App from './App.vue'
import demoBlock from './components/demo-block.vue'
import router from './router'
import './styles/index.scss'

Vue.component('demo-block', demoBlock)
Vue.use(Components)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
