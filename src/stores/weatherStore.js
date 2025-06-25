import { defineStore } from "pinia"

import { ref } from "vue";

export const useWeatherStore = defineStore( 'clima',() => {

   const temperatura = ref(0);
   const setTemperatura = (temp) => {
        temperatura.value = temp;
   };

   return { temperatura, setTemperatura };

} );

