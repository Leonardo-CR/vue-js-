<template>
    <div>
        <h2>Lista de Taras</h2>
        <input type="text" name="task" id="task" @keyup.enter="addTask" v-model="tarea">
        
        <ul>
            <li v-for="(tarea, index) in listaTareas" :key='index'>
                {{ tarea }}
            <button @click="deleteTask(index)">Tarea Finalizada</button>
            </li>
        </ul>


    </div>
</template>

<script setup>

    import { ref } from 'vue';

    const tarea = ref('');
    const listaTareas = ref([]);

    function addTask() {

        if(tarea.value === ''){
            alert('La tarea es invalida');
        }else{
            listaTareas.value.push(tarea.value);
            tarea.value = ''; 
        }
    }
    function deleteTask(index) {
        listaTareas.value.splice(index,1);
    }
    
</script>

<style scoped>

</style>