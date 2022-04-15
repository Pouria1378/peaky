import baseApi, { instanceAxios } from './baseApi';

export const apiDeleteEventType = (data) => {
    return instanceAxios({ ...baseApi.deleteEventType(), data })
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};