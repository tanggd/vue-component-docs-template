import TAlert from './components/alert'
import TButton from './components/button'

const components = {
  TAlert,
  TButton
}

const install = (Vue) => {
  if (install.installed) return

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

export default {
  install
}
