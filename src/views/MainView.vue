<template>
    <Header :mensaje="texto"></Header>
    <div class="container">
        <SideBar></SideBar>
        <div class="content">
            <!-- Inicia el valor de una vista que se haya iniciado a travez de una router link -->
             <input type="text" v-model="texto">
             {{ texto }}
            <router-view> </router-view>
        </div>
    </div>
</template>

<script setup>

import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
import router from '@/router';
import { ref } from 'vue';

const texto = ref('');


</script>

<style scoped>


    .container{ 
        display: flex;
    }
    .content{
        flex:1;
        padding: 20px;
    }


</style>