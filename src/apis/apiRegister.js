import baseApi, { instanceAxios } from './baseApi';

export const apiRegister = (bid, data) => {
    return instanceAxios({ ...baseApi.register(bid), data })
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};