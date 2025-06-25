<template>
    <div class="sidebar">
        <h2>Menu</h2>
        <h3>Welcome: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <ul>
        <li><router-link to="/lista-tareas">Lista de Tareas </router-link></li>
        <li><router-link to="/contador">Contador</router-link></li>
        <li><router-link to="/registrar">Registro de usuarios</router-link></li>
        </ul>
    </div>
</template>

<script setup>

    import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
    import { ref, watch } from 'vue';
    const registrarStore = useRegistrarStore();

    const nombre  = ref(registrarStore.name.value);
    const email = ref(registrarStore.email.value);

    watch(() => registrarStore.name, (newValue) => {
        nombre.value = newValue;
    });

    watch(() => registrarStore.email, (newValue) => {
        email.value = newValue;
    });

    

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