<template>
    <div class="sidebar">
        <h2>Menu</h2>
        <ul>
        <li><router-link to="/lista-tareas">Lista de Tareas </router-link></li>
        <li><router-link to="/contador">Contador</router-link></li>
        </ul>
    </div>
</template>

<script setup>



</script>

<style scoped>

    .sidebar{
        width: 200px;
        background-color: rgb(62, 62, 151);
        padding: 20px;
    }

</style>