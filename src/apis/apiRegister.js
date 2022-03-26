import baseApi, { instanceAxios } from './baseApi';

export const apiRegister = (data) => {
    return instanceAxios({ ...baseApi.register(), data })
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};