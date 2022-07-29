import React, { useEffect, useState } from "react";
import { apiGetReserveEventData } from "../../../apis/apiReserveEvent";
import Reserve from "../../../components/reserveEvent/Reserve";
import { useRouter } from "next/router";
import { message } from "antd";

const ReserveEvent = () => {
    const router = useRouter()
    const [eventData, setEventData] = useState({})
    const [loading, setLoading] = useState(true)

    const getReserveEventData = () => {
        setLoading(true)
        apiGetReserveEventData(router.query)
            .then(result => {
                const { statusCode, success, data, msg } = result
                if (statusCode === 200 && success) setEventData(data)
                else message.warn(msg)
                setLoading(false)
            })
            .catch(err => {
                console.error("error", err)
                message.error("ارتباط با سرور با مشکل مواجه شد")
                setLoading(false)
            })
    }
    useEffect(() => {
        if (!router.query.link || !router.query.username) return
        getReserveEventData()
    }, [router])

    return (
        <Reserve
            eventData={eventData}
            loading={loading}
        />
    );
}

export default ReserveEvent;