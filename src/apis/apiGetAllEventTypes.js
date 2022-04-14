import baseApi, { instanceAxios } from './baseApi';

export const apiGetAllEventTypes = () => {
    return instanceAxios({ ...baseApi.getAllEventTypes() })
        .then(({ data }) => data)
        .catch(err => Promise.reject(err))
};