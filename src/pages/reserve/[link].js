import React, { useEffect, useState } from "react";
import { apiGetReserveEventData } from "../../apis/apiReserveEvent";
import Reserve from "../../components/reserveEvent/Reserve";
import { useRouter } from "next/router";
import { statusCodeMessage } from "../../components/functions";

const ReserveEvent = () => {
    const router = useRouter()
    const [eventData, setEventData] = useState({})

    console.log('====================================');
    console.log("router.query", router.query);
    console.log('====================================');

    useEffect(() => {
        if (!router.query.link) return
        apiGetReserveEventData(router.query)
            .then(result => {
                const { statusCode, success, data } = result
                if (statusCode === 200 || success) setEventData(data)
                else statusCodeMessage(601)
            })
            .catch(err => {
                console.error("error", err)
                statusCodeMessage(600)
            })
    }, [router])

    return (
        <Reserve
            eventData={eventData}
        />
    );
}

export default ReserveEvent;