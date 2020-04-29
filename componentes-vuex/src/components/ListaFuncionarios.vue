<template>
  <ul>
      <li v-for="(func, key) in funcionarios" :key="key">
          {{func.nome}}-{{func.idade}}
      </li>
  </ul>
</template>

<script>
export default {
    computed:{
        funcionarios(){
            return this.$store.state.funcionarios
        }
    }

}
</script>

<style>

</style>