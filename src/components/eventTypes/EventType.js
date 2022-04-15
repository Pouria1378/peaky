import React, { useState } from "react";
import { Call, Delete, Edit, MoreSquare, PaperPlus, Show, TimeCircle, User } from "react-iconly";
import { copyToClipboard, statusCodeMessage, toFarsiNumber } from "../functions";
import Image from 'next/image';
import { Popover } from 'antd';
import Link from "next/link";
import { Menu, Dropdown, Switch } from 'antd';
import { apiDeleteEventType, apiEditEventType } from "../../apis/apiEventType";
import useIsMounted from "../useIsMounted";
import Loading from "../loading/Loading";

const EventType = ({ data, setEventTypes }) => {
    const { _id, title, duration, type, color, link, status } = data
    const [loading, setLoading] = useState(false)

    const isMounted = useIsMounted();

    const deleteEventType = () => {
        setLoading(true)
        if (!_id) return;
        const _data = {
            id: _id
        }
        apiDeleteEventType(_data)
            .then((result) => {
                if (!isMounted()) return;
                setLoading(false)
                const { success, statusCode } = result

                if (success) {
                    statusCodeMessage(statusCode)
                    setEventTypes(oldValue => oldValue.filter(eventType => eventType._id !== _id))
                    return
                }
                statusCodeMessage(601)
            })
            .catch((err) => {
                if (!isMounted()) return;
                setLoading(false)
                statusCodeMessage(600)
                console.error(err)
            })
    }

    const editEventType = (editKey, editValue) => {
        setLoading(true)
        data[editKey] = editValue

        apiEditEventType(data)
            .then((result) => {
                if (!isMounted()) return;
                setLoading(false)
                const { success, statusCode } = result

                if (success) {
                    statusCodeMessage(statusCode)
                    setEventTypes(oldValue => oldValue.filter(eventType => {
                        if (eventType._id !== _id) return eventType
                        return data
                    }))
                    return
                }
                statusCodeMessage(601)
            })
            .catch((err) => {
                if (!isMounted()) return;
                setLoading(false)
                statusCodeMessage(600)
                console.error(err)
            })
    }

    const menu = (
        <Menu
            onClick={({ key }) => {
                if (key === "delete") {
                    deleteEventType()
                    return
                }

                if (key === "status") {
                    editEventType("status", !status)
                    return
                }
            }}
        >
            <Menu.Item key="edit">
                <div>
                    ویرایش
                    <Edit />
                </div>
            </Menu.Item>
            <Menu.Item key="delete">
                <div>
                    حذف
                    <Delete />
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="status">
                <div>
                    وضعیت
                    <Switch
                        checkedChildren={<span>فعال</span>}
                        unCheckedChildren={<span>غیر فعال</span>}
                        checked={status}
                    />
                </div>
            </Menu.Item>
        </Menu>
    );

    const typeTypes = {
        "byPerson":
            <React.Fragment>
                حضوری
                <User />
            </React.Fragment>,

        "phone":
            <React.Fragment>
                تلفنی
                <Call />
            </React.Fragment>,

        "skype":
            <React.Fragment>
                <Image
                    src="/images/skype.png"
                    alt="skype"
                    layout='fixed'
                    width={50}
                    height={20}
                />
            </React.Fragment>,

        "googleMeet":
            <React.Fragment>
                <Image
                    src="/images/meet.png"
                    alt="google meet"
                    layout='fixed'
                    width={80}
                    height={20}
                />
            </React.Fragment>,
    }

    return (
        <React.Fragment>
            {
                loading && <Loading />

            }
            <div className={`eventType ${!status && "inactive"}`}>
                <div className="header">
                    <span className="title">
                        <Popover
                            placement="bottomRight"
                            content={title}
                            trigger="hover"
                        >
                            {title}
                        </Popover>
                    </span>

                    <Dropdown
                        overlay={menu}
                        trigger={['click']}
                        overlayClassName="dropdownMenuEventTypes"
                    >
                        <span
                            className="cursor-pointer"
                        >
                            <MoreSquare />
                        </span>
                    </Dropdown>


                </div>

                <div className={`body ${color}`}>
                    <div className="duration">
                        <TimeCircle />
                        <span>
                            {toFarsiNumber(duration)}
                        </span>
                    </div>

                    <span className="type">
                        {typeTypes[type]}
                    </span>
                </div>

                <div className="footer">
                    <span className="link">
                        <Link href={"event/" + link}>
                            {"/" + link}
                        </Link>
                    </span>

                    {
                        status ?
                            <button
                                onClick={() => copyToClipboard(link, "لینک رویداد کپی شد")}
                                className="mainColor1Button"
                            >
                                <PaperPlus />
                                کپی لینک
                            </button>
                            :
                            <button
                                onClick={() => editEventType("status", true)}
                                className="activeEvent"
                            >
                                <Show />
                                فعال کردن
                            </button>
                    }

                </div>
            </div>
        </React.Fragment>

    );
}

export default EventType;