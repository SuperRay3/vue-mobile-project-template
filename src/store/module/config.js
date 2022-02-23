export default {
  namespaced: true,
  state: {
    config: {}
  },
  mutations: {
    SET_CONFIG(state, config) {
      state.config = config
    }
  }
}
