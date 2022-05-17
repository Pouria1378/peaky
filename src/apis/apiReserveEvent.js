import baseApi, { instanceAxios } from './baseApi';

export const apiGetReserveEventData = (data) => {
    return instanceAxios({ ...baseApi.getReserveEventData(), data })
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};