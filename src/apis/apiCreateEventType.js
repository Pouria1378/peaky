import baseApi, { instanceAxios } from './baseApi';

export const apiCreateEventType = (data) => {
    return instanceAxios({ ...baseApi.createEventType(), data })
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};