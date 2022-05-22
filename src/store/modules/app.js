export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true
  }),
  mutations: {
    triggerSiderbarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  }
}
