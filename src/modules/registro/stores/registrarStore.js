import { defineStore } from "pinia"

import { ref } from "vue";

export const useRegistrarStore = defineStore('registrar', () => {
    const name = ref('');
    const email = ref('');

    const saveRegister = (nameForm, emailForm) => {
            name.value = nameForm;
            email.value = emailForm;
        };

    return { name, email, saveRegister };
        

});