import React from 'react'
import ReservedEvents from '../components/reservedEvents/ReservedEvents'
import Cookies from 'universal-cookie';
import { apiGetReservedEvents } from '../apis/apiReserveEvent';

const ReservedEventsPage = ({ data }) => {
    return (
        <ReservedEvents
            data={data}
        />
    );
}

export async function getServerSideProps({ req = {} }) {
    const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();

    const token = cookies.get("peakyToken")
    const data = await apiGetReservedEvents({ token })
        .then((result) => ({
            ...result
        }))
        .catch((err) => ({
            eventTypes: null
        }))

    return {
        props: {
            data
        },
    }
}

export default ReservedEventsPage