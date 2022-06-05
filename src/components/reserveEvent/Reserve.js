import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { TimeCircle } from "react-iconly";
import { toEnglishNumber, toFarsiNumber, typeOfEvent } from "../functions";
import ReserveHourModal from "./ReserveHourModal";

const Reserve = ({ eventData = {} }) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [showReserveHourModal, setShowReserveHourModal] = useState(false);

    const {
        title = "",
        duration = "",
        type = "",
        description = "",
        className = "",
        freeTimes = ""
    } = eventData

    const date = new Date()
    const jalaliDate = date.toLocaleDateString("fa").split("/")
    const minimumDate = {
        year: +toEnglishNumber(jalaliDate[0]),
        month: +toEnglishNumber(jalaliDate[1]),
        day: +toEnglishNumber(jalaliDate[2])
    };


    return (
        <Layout
            bodyIdStyle="Reserve"
            sideBar={false}
        >
            <div className={className}>
                <div className="wrapper">
                    <div>
                        <div>
                            <h4>
                                {title}
                            </h4>
                        </div>

                        <div className="body">
                            <div className="duration">
                                <TimeCircle />
                                <span>
                                    {toFarsiNumber(duration || "-")}
                                </span>
                            </div>

                            <span className="type">
                                {typeOfEvent(type)}
                            </span>
                        </div>

                        <div className="description">
                            {description}
                        </div>
                    </div>
                    <div>
                        <Calendar
                            value={selectedDay}
                            onChange={e => {
                                setSelectedDay(e)
                                setShowReserveHourModal(o => !o)
                            }}
                            minimumDate={minimumDate}
                            // calendarClassName="responsive-calendar startCalender" 
                            locale="fa"
                            calendarClassName="custom-calendar"
                            calendarTodayClassName="custom-today-day"
                            shouldHighlightWeekends
                        />
                    </div>
                </div>
            </div>
            <ReserveHourModal
                show={showReserveHourModal}
                setShow={setShowReserveHourModal}
                freeTimes={freeTimes}
                selectedDay={selectedDay}
            />
        </Layout>
    )
}

export default Reserve;