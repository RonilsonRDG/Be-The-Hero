import axios from 'axios';

const api = axios.create({
    baseURL: 'http://45.229.158.228:56060',
})

export default api;

