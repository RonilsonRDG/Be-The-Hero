import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:56060',
})

export default api;

