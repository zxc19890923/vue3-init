import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    loginState: 1
  },
  mutations: {
    changeLoginState (state) {
      state.loginState++
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
