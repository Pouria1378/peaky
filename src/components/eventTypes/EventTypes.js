import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { apiGetAllEventTypes } from '../../apis/apiEventType';
import { statusCodeMessage } from "../functions";
import useIsMounted from "../useIsMounted";
import EventType from "./EventType"
import Loading from "../loading/Loading";
import Empty from "../empty/Empty";

const EventTypes = () => {
    const isMounted = useIsMounted();
    const [eventTypes, setEventTypes] = useState([]);
    const [eventTypesLoading, setEventTypesLoading] = useState(false);

    const getEventTypes = () => {
        setEventTypesLoading(true);
        apiGetAllEventTypes()
            .then((result) => {
                if (!isMounted()) return;
                const { success, eventTypes, statusCode } = result
                setEventTypesLoading(false);
                if (success) {
                    if (statusCode !== 200) statusCodeMessage(statusCode)
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
                eventTypesLoading && <Loading />
            }
            <div className="eventTypes">
                {
                    eventTypes?.length ?
                        eventTypes.map(eventType => (
                            <EventType
                                key={eventType._id}
                                data={eventType}
                                setEventTypes={setEventTypes}
                            />
                        ))
                        : <Empty />
                }
            </div>
        </Layout>
    );
}

export default EventTypes;