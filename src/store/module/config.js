export default {
  namespaced: true,
  state: {
    config: {
      vconsole: false
    }
  },
  mutations: {
    SET_CONFIG(state, config) {
      state.config = config
    }
  }
}
