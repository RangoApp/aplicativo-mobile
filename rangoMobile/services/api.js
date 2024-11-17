import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.22:8080', // URL base do seu backend (ajuste para o endereço IP da sua máquina)
    headers: {
        'Content-Type': 'multipart/form-data', // Para enviar dados com imagens
    },
});

export default api;

