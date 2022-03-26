import axios from 'axios';

export const instanceAxios = axios.create();

const baseApi = {
    register: () => ({
        url: `/register`,
        method: 'POST',
        // headers: {"Authorization": `Bearer ${tokenCheckExists()}`},
    }),
}

// Request interceptor for API calls
instanceAxios.interceptors.request.use(
    async config => {
        config.baseURL = process.env.API_URL
        config.headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${tokenCheckExists()}`,
            "app-name": "Peaky",
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


export default baseApi