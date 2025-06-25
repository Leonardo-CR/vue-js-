<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor">

    <ResultadoSection v-if="mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
    <div v-else-if="isNaN(valor)">No ingresaste un numero</div>
    <div v-else>Aqui se muestra si el if no se cumple</div>
    
</template>

<script setup>
import { ref,computed } from 'vue';
import ResultadoSection from '../components/ResultadoSection.vue';

const valor = ref('');
const valorCalculado = computed(()=>{ 
    return valor.value * 3;
});

const mostrarElemento = computed(() => {
    return valor.value > 10;
});


</script>

<style scoped>

</style>