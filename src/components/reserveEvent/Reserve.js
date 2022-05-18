import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { TimeCircle } from "react-iconly";
import { toFarsiNumber, typeOfEvent } from "../functions";

const Reserve = ({ eventData }) => {
    const [selectedDay, setSelectedDay] = useState(null);

    console.log('====================================');
    console.log("eventData", eventData);
    console.log('====================================');

    const { title, duration, type, description } = eventData


    return (
        <Layout
            bodyIdStyle="Reserve"
            sideBar={false}
        >
            <div className="wrpapper">
                <div>
                    {title}
                    <div className="duration">
                        <TimeCircle />
                        <span>
                            {toFarsiNumber(duration || "-")}
                        </span>
                    </div>

                    <span className="type">
                        {typeOfEvent(type)}
                    </span>

                    <span>
                        {description}
                    </span>
                </div>
                <div>
                    <Calendar
                        value={selectedDay}
                        onChange={setSelectedDay}
                        // minimumDate={minimumDate}
                        // maximumDate={selectedDayRange.to}
                        // calendarClassName="responsive-calendar startCalender" 
                        locale="fa"
                        colorPrimary="#9c88ff"
                        calendarClassName="custom-calendar"
                        calendarTodayClassName="custom-today-day"
                        shouldHighlightWeekends
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Reserve;