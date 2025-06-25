<template>
    <div class="header">
        {{ mensajeRecibido }}
        <h3>La temperatura actual es: <Weather></Weather></h3>

    </div>
</template>

<script setup>

import Weather from './Weather.vue';

import { defineProps, ref, watch } from 'vue'; 

const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje);

watch(()=> props.mensaje, (newValue)=>{
    mensajeRecibido.value = newValue;
});

</script>

<style scoped>
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        
        
        
        background-color: rgb(65, 65, 78);
        color: white;
    }
    h1{
        margin: 0;
    }
</style>