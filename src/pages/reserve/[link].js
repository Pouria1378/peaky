import React from "react";
import { apiGetReserveEventData } from "../../apis/apiReserveEvent";
import Reserve from "../../components/reserveEvent/Reserve";


const ReserveEvent = ({ eventData }) => {

    console.log('====================================');
    console.log("propsprops", eventData);
    console.log('====================================');
    return (
        <Reserve
            eventData={eventData}
        />
    );
}


export async function getServerSideProps(context) {
    let eventData = null
    const { link } = context.params;
    await apiGetReserveEventData({ link })
        .then(result => {
            const { statusCode, success, data } = result
            if (statusCode === 200 || success) eventData = data
            else eventData = {}
        })
        .catch(err => console.log("error", err))

    return { props: { eventData } }
}

export default ReserveEvent;