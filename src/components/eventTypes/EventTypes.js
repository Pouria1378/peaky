import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { apiGetAllEventTypes } from '../../apis/apiGetAllEventTypes';
import { Form, Input, Button, Select } from 'antd';
import { Delete, Plus, TickSquare } from "react-iconly";
import { statusCodeMessage } from "../functions";
import useIsMounted from "../useIsMounted";
import EventType from "./EventType"
import Loading from "../loading/Loading";

const CreateEventType = () => {
    const isMounted = useIsMounted();
    const [eventTypes, setEventTypes] = useState([]);
    const [eventTypesLoading, setEventTypesLoading] = useState(false);

    const getEventTypes = () => {
        setEventTypesLoading(true);
        apiGetAllEventTypes()
            .then((result) => {
                if (!isMounted()) return;
                const { success, eventTypes } = result
                setEventTypesLoading(false);
                if (success) {
                    setEventTypes(eventTypes)
                    return
                }
                statusCodeMessage(600)
            })
            .catch((err) => {
                if (!isMounted()) return;
                statusCodeMessage(600)
                setEventTypesLoading(false);
                console.error(err)
            })
    }

    useEffect(() => {
        getEventTypes()
    }, [])

    return (
        <Layout
            bodyIdStyle="EventTypes"
            sideBar={true}
        >
            {
                eventTypesLoading ?
                    <Loading />
                    : <div className="eventTypes">
                        {
                            eventTypes.map(eventType => (
                                <EventType data={eventType} />
                            ))
                        }
                    </div>
            }
        </Layout>
    );
}

export default CreateEventType;