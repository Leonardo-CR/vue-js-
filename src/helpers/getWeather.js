import axios from 'axios';

const API_ENDPOINT = 'https://api.open-meteo.com/v1/forecast?latitude=19.4285&longitude=-99.1277&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperature = async () => {
    const  respuesta = await axios.get(API_ENDPOINT);

    const nuevaTemperatura = respuesta.data.current.temperature_2m;

    return nuevaTemperatura;

}