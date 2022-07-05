import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { apiGetReservedEvents } from '../../apis/apiReserveEvent';
import Layout from '../../layout/Layout'
import { statusCodeMessage, typeOfEvent } from '../functions';
import useIsMounted from '../useIsMounted';
import MoreDetailsModal from './MoreDetailsModal';

const ReservedEvents = () => {
    const isMounted = useIsMounted();
    const [loading, setLoading] = useState(false)
    const [reservedEvents, setReservedEvents] = useState([])
    const [moreDetailsModal, setMoreDetailsModal] = useState({ show: false })


    const getReservedEvents = () => {
        setLoading(true)

        apiGetReservedEvents()
            .then((result) => {
                if (!isMounted()) return;
                const { statusCode, success, data } = result
                setLoading(false)
                if (success || statusCode === 200) {
                    const tableData = data.map(({ _id, title, date, username, type, hour }) => {
                        return {
                            _id,
                            title,
                            "date": hour + " - " + date,
                            username,
                            "type": <span id={type} className="type">
                                {typeOfEvent(type)}
                            </span>
                        }
                    })
                    setReservedEvents(tableData)
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
            title: 'مهمان',
            dataIndex: 'username',
        },
        {
            title: 'محل رویداد',
            dataIndex: 'type',
        },
        {
            title: '',
            dataIndex: 'address',
            render: (s) => (
                <div size="middle">
                    <a>جزییات بیشتر</a>
                    <p>{s}</p>
                </div>
            ),
        },
    ];


    return (
        <Layout
            sideBar={true}
            bodyIdStyle="ReservedEvents"
        >
            <Table
                columns={columns}
                dataSource={reservedEvents}
                pagination={false}
                className="reservedEventsTable"
                size="middle"
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            setMoreDetailsModal({
                                ...record,
                                show: !moreDetailsModal.show
                            })
                            // console.log('====================================');
                            // console.log(record.type.props.id);
                            // console.log(record);
                            // console.log('====================================');
                        }
                    };
                }}
            />

            <MoreDetailsModal
                data={moreDetailsModal}
                handleCancel={() => setMoreDetailsModal(oldValue => {
                    return {
                        ...oldValue,
                        show: !oldValue.show
                    }
                })}
            />
        </Layout>
    )
}

export default ReservedEvents