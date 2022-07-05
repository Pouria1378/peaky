import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { apiGetReservedEvents } from '../../apis/apiReserveEvent';
import Layout from '../../layout/Layout'
import { statusCodeMessage, typeOfEvent } from '../functions';
import useIsMounted from '../useIsMounted';
import Loading from "../loading/Loading";

const ReservedEvents = () => {
    const isMounted = useIsMounted();
    const [loading, setLoading] = useState(false)
    const [reservedEvents, setReservedEvents] = useState([])


    const getReservedEvents = () => {
        setLoading(true)

        apiGetReservedEvents()
            .then((result) => {
                if (!isMounted()) return;
                const { statusCode, success, data } = result
                setLoading(false)
                if (success || statusCode === 200) {
                    const tableData = data.map(({ _id, title, date, username, userEmail, type, hour }) => {
                        return {
                            _id,
                            title,
                            "date": hour + " - " + date,
                            username,
                            userEmail,
                            "type": <span id={type} className="type">
                                {typeOfEvent(type)}
                            </span>
                        }
                    })
                    setReservedEvents(tableData.reverse())
                }
            })
            .catch((err) => {
                if (!isMounted()) return;
                statusCodeMessage(600)
                setLoading(false)
                console.error(err)
            })
    }

    useEffect(() => {
        getReservedEvents()
    }, [])

    const columns = [
        {
            title: 'ردیف',
            dataIndex: '_id',
            render: (__, _, index) => (
                <div size="middle">
                    <p>{index + 1}</p>
                </div>
            ),
        },
        {
            title: 'رویداد',
            dataIndex: 'title',
        },
        {
            title: 'تاریخ',
            dataIndex: 'date',
        },
        {
            title: 'اسم مهمان',
            dataIndex: 'username',
        },
        {
            title: 'شماره تلفن/ایمیل مهمان',
            dataIndex: 'userEmail',
        },
        {
            title: 'محل رویداد',
            dataIndex: 'type',
        },
    ];


    return (
        <Layout
            sideBar={true}
            bodyIdStyle="ReservedEvents"
        >
            {
                loading && <Loading />
            }
            <Table
                columns={columns}
                dataSource={reservedEvents}
                pagination={false}
                className="reservedEventsTable"
                size="middle"
            />
        </Layout>
    )
}

export default ReservedEvents