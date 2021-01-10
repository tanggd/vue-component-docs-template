import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Kv from '../packages/index'
import '../packages/styles/src/index.scss'
import './styles/index.scss'

import demoBlock from './components/demo-block.vue'
Vue.component('demo-block', demoBlock)
Vue.use(Kv)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
