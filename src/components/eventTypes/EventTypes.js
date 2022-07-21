import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { apiGetAllEventTypes } from '../../apis/apiEventType';
import useIsMounted from "../useIsMounted";
import EventType from "./EventType"
import Loading from "../loading/Loading";
import Empty from "../empty/Empty";
import CreateEditEventType from "../createEventType/CreateEditEventType";
import { message } from "antd";

const EventTypes = () => {
    const isMounted = useIsMounted();
    const [eventTypes, setEventTypes] = useState([]);
    const [eventTypesLoading, setEventTypesLoading] = useState(false);
    const [EditEventType, setEditEventType] = useState(false)

    const getEventTypes = () => {
        setEventTypesLoading(true);
        apiGetAllEventTypes()
            .then((result) => {
                if (!isMounted()) return;
                setEventTypesLoading(false);
                const { success, eventTypes, statusCode, msg } = result

                if (success && statusCode === 200) {
                    setEventTypes(eventTypes)
                    return
                }

                message.error(msg)
            })
            .catch((err) => {
                if (!isMounted()) return;
                message.error("ارتباط با سرور با مشکل مواجه شد")
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
            {
                EditEventType &&
                <CreateEditEventType
                    title='ویرایش نوع رویداد'
                    backButton={() => setEditEventType(null)}
                    EditEventType={EditEventType}
                />
            }
            <div
                className={`eventTypes ${Object.keys(EditEventType || []).length ? "d-none" : ""}`}
            >
                {
                    eventTypes?.length ?
                        eventTypes.map(eventType => (
                            <EventType
                                key={eventType._id}
                                data={eventType}
                                setEventTypes={setEventTypes}
                                setEditEventType={setEditEventType}
                            />
                        ))
                        : <Empty />
                }
            </div>
        </Layout>
    );
}

export default EventTypes;