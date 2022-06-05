import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import moment from "jalali-moment"

function ReserveHourModal({ show, setShow, freeTimes, selectedDay }) {
    const [selectedHour, setSelectedHour] = useState(null);
    const [dayFreeTime, setDayFreeTime] = useState([]);
    const [freeHours, setHreeHours] = useState([]);

    useEffect(() => {
        if (!selectedDay) return
        const dayname = moment.from(selectedDay.year + "/" + selectedDay.month + "/" + selectedDay.day, 'fa', 'YYYY/MM/DD').format('dddd').toLowerCase()
        const parsedFreeTimes = JSON.parse(freeTimes)
        setDayFreeTime(parsedFreeTimes[dayname])
    }, [freeTimes, selectedDay])

    useEffect(() => {
        showFreeDayTimes()
    }, [dayFreeTime])

    const showFreeDayTimes = () => {
        const fromHour = []
        for (let freeTime of dayFreeTime) {
            let from = freeTime.from.split(":")
            let to = freeTime.to.split(":")
            while (+from[0] <= +to[0]) {
                fromHour.push(from.join(":"))
                if (+from[0] === +to[0] && +from[1] === +to[1]) break
                if (+from[1] === 0) from[1] = "30"
                else {
                    from[0] = +from[0] + 1
                    from[1] = "00"
                }
            }
        }
        setHreeHours(fromHour)
    }

    return (
        <Modal
            title="Basic Modal"
            className='ReserveHourModal'
            visible={show}
            onCancel={() => setShow(o => !o)}
            footer={null}
        >
            {
                freeHours.map(hour => {
                    return <div
                        className='hour'
                        key={hour}
                    >
                        {hour}
                    </div>
                })
            }
        </Modal >
    );
}

export default ReserveHourModal;