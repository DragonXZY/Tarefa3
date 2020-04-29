import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funcionarios:[],
  },
  mutations: {
    cadastrar:function(state, funcionario){
      this.state.funcionarios.push(funcionario)
    }
  },
  actions: {
  },
  modules: {
  }
})
