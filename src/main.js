import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import router, { provideRouter } from './router'
import store, { provideStore } from './store'

// components
import App from './App.vue'

// styles
import '@/style/index.scss'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)

new Vue({
  setup() {
    provideRouter(router)
    provideStore(store)
  },
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
