<template>
    <div class="sidebar">
        <h2>Menu</h2>
        <h3>Welcome: {{ registrarStore.name }}</h3>
        <h3>Email: {{ registrarStore.email }}</h3>
        <ul>
        <li><router-link to="/lista-tareas">Lista de Tareas </router-link></li>
        <li><router-link to="/contador">Contador</router-link></li>
        <li><router-link to="/registrar">Registro de usuarios</router-link></li>
        <li><router-link to="/calcular">Calculos</router-link></li>
        </ul>
    </div>
</template>

<script setup>

    import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';

    const registrarStore = useRegistrarStore();

</script>

<style scoped>

    .sidebar{
        width: 200px;
        background-color: rgb(62, 62, 151);
        padding: 20px;
    }
    li{
        background-color: white;
    }
</style>