import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https://192.168.0.15:3000/api',
    headers: {
        'Content-Type:': 'application/json'
    }
})
export {ApiDelivery};