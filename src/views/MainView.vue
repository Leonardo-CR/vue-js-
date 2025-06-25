<template>
    <div class="container">
        <SideBar></SideBar>
        <div class="content">
            <!-- Inicia el valor de una vista que se haya iniciado a travez de una router link -->
            <router-view> </router-view>
        </div>
    </div>
</template>

<script setup>

    import SideBar from '@/components/SideBar.vue';
import router from '@/router';

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