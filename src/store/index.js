import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { inject, provide } from '@vue/composition-api'
import projectConfig from '@/config'

// modules
import config from './module/config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config
  },
  plugins: [
    createPersistedState({
      reducer(state) {
        return {
          config: state.config
        }
      }
    })
  ]
})

const StoreSymbol = Symbol(`${projectConfig.projectName}-store`)
export const provideStore = (store) => {
  provide(StoreSymbol, store)
}
export const useStore = () => {
  return inject(StoreSymbol)
}
