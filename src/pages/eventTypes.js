import React from "react";
import { apiGetAllEventTypes } from "../apis/apiEventType";
import EventTypes from "../components/eventTypes/EventTypes";
import Cookies from 'universal-cookie';

const EventTypesPage = ({ data }) => {
    return (
        <EventTypes
            data={data}
        />
    );
}

export async function getServerSideProps({ req = {} }) {
    const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();

    const token = cookies.get("peakyToken")
    const data = await apiGetAllEventTypes({ token })
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

export default EventTypesPage;