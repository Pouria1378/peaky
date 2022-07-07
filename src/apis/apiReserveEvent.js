import baseApi, { instanceAxios } from './baseApi';

export const apiGetReserveEventData = (data) => {
    return instanceAxios({ ...baseApi.getReserveEventData(), data })
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};

export const apiPostReserveEventData = (data) => {
    return instanceAxios({ ...baseApi.postReserveEventData(), data })
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};

export const apiGetReservedEvents = () => {
    return instanceAxios({ ...baseApi.getReservedEvents()})
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};