import React from "react";
import { Call, MoreSquare, PaperPlus, TimeCircle, User } from "react-iconly";
import { copyToClipboard, toFarsiNumber } from "../functions";
import Image from 'next/image';
import { Popover } from 'antd';
import Link from "next/link";

const CreateEventType = ({ data }) => {
    const { title, duration, type, color, description, link, freeTimes } = data

    const typeTypes = {
        "byPerson":
            <React.Fragment>
                حضوری
                <User set="curved" />
            </React.Fragment>,

        "phone":
            <React.Fragment>
                تلفنی
                <Call set="curved" />
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
        <div className="eventType">
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

                <MoreSquare set="curved" />
            </div>

            <div className={`body ${color}`}>
                <div className="duration">
                    <TimeCircle set="curved" />
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

                <button
                    onClick={() => copyToClipboard(link, "لینک رویداد کپی شد")}
                    className="mainColor1Button"
                >
                    <PaperPlus set="curved" />
                    کپی لینک
                </button>
            </div>
        </div>
    );
}

export default CreateEventType;