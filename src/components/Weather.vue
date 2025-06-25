<template>
    La temperaturaactual es: {{ weatherStore.temperatura }}
</template>

<script setup>
import { useWeather } from '../composables/useWeather';
import { useWeatherStore } from '@/stores/weatherStore';
import { onMounted } from 'vue'; 

const weatherStore = useWeatherStore();

onMounted(() => {
    useWeather();
});
</script>

<style scoped>

</style>