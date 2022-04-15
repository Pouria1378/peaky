import axios from 'axios';
import { tokenCheckExists } from '../components/functions';

export const instanceAxios = axios.create();

const baseApi = {
    register: () => ({
        url: `/register`,
        method: 'POST',
    }),

    login: () => ({
        url: `/login`,
        method: 'POST',
    }),

    createEventType: () => ({
        url: `/createEventType`,
        method: 'POST',
        headers: { "x-access-token": `Bearer ${tokenCheckExists()}` },
    }),

    getAllEventTypes: () => ({
        url: `/getAllEventTypes`,
        method: 'GET',
        headers: { "x-access-token": `Bearer ${tokenCheckExists()}` },
    }),

    deleteEventType: () => ({
        url: `/deleteEventType`,
        method: 'DELETE',
        headers: { "x-access-token": `Bearer ${tokenCheckExists()}` },
    }),
}

// Request interceptor for API calls
instanceAxios.interceptors.request.use(
    async config => {
        config.baseURL = process.env.API_URL
        config.headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `${tokenCheckExists()}`,
            "app-name": "Peaky",
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


export default baseApi