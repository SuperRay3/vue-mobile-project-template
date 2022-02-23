import Vue from 'vue'
import Vuex from 'vuex'
import { inject, provide } from '@vue/composition-api'
import projectConfig from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 1111
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

const StoreSymbol = Symbol(`${projectConfig.projectName}-store`)
export const provideStore = (store) => {
  provide(StoreSymbol, store)
}
export const useStore = () => {
  return inject(StoreSymbol)
}
