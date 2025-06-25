<template>
  <h1>Hola mundo</h1>
  <p> {{ contador }} </p>

  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>


</template>

<script setup>

  import { ref } from 'vue';

  const contador = ref(0);

  function incrementar() {
    contador.value++;
  };

  function decrementar() {
    contador.value--;
  };



</script>

<style scoped>

  p{
    color: red;
  }

</style>
