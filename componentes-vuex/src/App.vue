<template>
  <div id="app">
    <input type="text" placeholder="nome" v-model="nome"><br>
    <input type="text" placeholder="idade" v-model="idade"><br>
    <button @click="cadastraFuncionario">Cadastrar</button>

    <lista-funcionarios/>
  </div>
</template>

<script>   

import ListaFuncionarios from "./components/ListaFuncionarios.vue"

export default {
  name: 'App',
  components: {
    ListaFuncionarios
  }, methods:{
    cadastraFuncionario: function(){
      this.$store.commit('cadastrar', {
        nome: this.nome,
        idade:this.idade
      })
    }
  }, data:function(){
    return{
      nome:'',
      idade:''
    }
  }
}
</script>

<style>
</style>
