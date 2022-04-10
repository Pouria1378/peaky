import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { apiCreateEventType } from '../../apis/apiCreateEventType';
import { Form, Input, Button, Select } from 'antd';
import { Delete, Plus, TickSquare } from "react-iconly";


const CreateEventType = () => {
    const { Option } = Select;
    const { TextArea } = Input;
    const [eventColor, setEventColor] = useState('');
    const [userFreeTime, setUserFreeTime] = useState({
        saturday: [{ from: "09:00", to: "17:00" }],
        sunday: [{ from: "09:00", to: "17:00" }],
        monday: [{ from: "09:00", to: "17:00" }],
        tuesday: [{ from: "09:00", to: "17:00" }],
        wednesday: [{ from: "09:00", to: "17:00" }],
        thursday: [{ from: "09:00", to: "17:00" }],
        friday: [{ from: "09:00", to: "17:00" }]
    });

    const weekDays = [
        { faLabel: "شنبه", label: "saturday" },
        { faLabel: "یک شنبه", label: "sunday" },
        { faLabel: "دو شنبه", label: "monday" },
        { faLabel: "سه شنبه", label: "tuesday" },
        { faLabel: "چهار شنبه", label: "wednesday" },
        { faLabel: "پنج شنبه", label: "thursday" },
        { faLabel: "جمعه", label: "friday" },
    ]

    const eventColors = [
        { className: "eventColorMainColor1", color: "#6A6EF4" },   
        { className: "eventColorMainColor2", color: "#54C1FB" },   
        { className: "eventColorDarkMainColor2", color: "#17A2B8" },   
        { className: "eventColorGreen", color: "#11CE8C" },   
        { className: "eventColorDarkGreen", color: "#28A745" },   
        { className: "eventColorYellow", color: "#FFC107" },   
        { className: "eventColorDarkYellow", color: "#FFA94D" },   
        { className: "eventColorRed", color: "#FF7070" },   
        { className: "eventColorDarkRed", color: "#DC3545" },   
    ]
    const postEventTypeForm = (data) => {

    }


    const options = () => {
        return (
            <React.Fragment>
                <Option value="08:00">08:00</Option>
                <Option value="08:30">08:30</Option>
                <Option value="09:00">09:00</Option>
                <Option value="09:30">09:30</Option>
                <Option value="10:00">10:00</Option>
                <Option value="10:30">10:30</Option>
                <Option value="11:00">11:00</Option>
                <Option value="11:30">11:30</Option>
                <Option value="12:00">12:00</Option>
                <Option value="12:30">12:30</Option>
                <Option value="13:00">13:00</Option>
                <Option value="13:30">13:30</Option>
                <Option value="14:00">14:00</Option>
                <Option value="14:30">14:30</Option>
                <Option value="15:00">15:00</Option>
                <Option value="15:30">15:30</Option>
                <Option value="16:00">16:00</Option>
                <Option value="16:30">16:30</Option>
                <Option value="17:00">17:00</Option>
                <Option value="17:30">17:30</Option>
                <Option value="18:00">18:00</Option>
                <Option value="18:30">18:30</Option>
                <Option value="19:00">19:00</Option>
                <Option value="19:30">19:30</Option>
                <Option value="20:00">20:00</Option>
                <Option value="20:30">20:30</Option>
                <Option value="21:00">21:00</Option>
                <Option value="21:30">21:30</Option>
            </React.Fragment>
        )
    }
    const freeTimeSelect = (dayLabel) => {
        if (!userFreeTime[dayLabel].length) {
            return (
                <div>خارج از دسترس</div>
            )
        }
        return (
            <div className="selectTime">
                {
                    userFreeTime[dayLabel].map((time, index) => (
                        <div className="mb-3" key={index}>
                            <Select
                                value={time.from}
                                onChange={(e) => {
                                    setUserFreeTime((prevState) => {
                                        prevState[dayLabel][index].from = e
                                        return { ...prevState }
                                    })
                                }}
                            >
                                {options()}
                            </Select>
                            <span className="m-2">-</span>
                            <Select
                                value={time.to}
                                onChange={(e) => {
                                    setUserFreeTime((prevState) => {
                                        prevState[dayLabel][index].to = e
                                        return { ...prevState }
                                    })
                                }}
                            >
                                {options()}
                            </Select>
                            <Delete
                                set="curved"
                                className="cursor-pointer mr-2"
                                primaryColor="#FF7070"
                                onClick={() => {
                                    setUserFreeTime((prevState) => {
                                        prevState[dayLabel].splice(index, 1)
                                        return { ...prevState }
                                    })
                                }}
                            />
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <Layout
            bodyIdStyle="CreateEventType"
            sideBar={true}
        >
            <div className="createEventTypeWrapper">

                <div className="CreateEventTypeHeader">
                    <span>ایجاد نوع رویداد جدید</span>
                </div>

                <Form
                    // name="createEventTypeForm"
                    onFinish={postEventTypeForm}
                    autoComplete="off"
                    layout="vertical"
                    className="createEventTypeForm"
                >

                    <Form.Item
                        label="عنوان"
                        name="title"
                        rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                    >
                        <Input />
                    </Form.Item>

                    <div className="row">
                        <Form.Item
                            className="col-6"
                            label="مدت زمان"
                            name="minute"
                            rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                        >
                            <Input
                                addonBefore="MM"
                                className="ltr"
                            />
                        </Form.Item>

                        <Form.Item
                            className="col-6"
                            label=" "
                            name="hour"
                        // rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                        >
                            <Input
                                addonBefore="HH"
                                className="ltr"
                            />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="روش برگزاری"
                        name="eventType"
                        rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                    >
                        <Select className="ltr">
                            <Option value="byPerson">حضوری</Option>
                            <Option value="phone">تماس تلفنی</Option>
                            <Option value="skype">skype</Option>
                            <Option value="googleMeet">Google meet</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="رنگ رویداد"
                        name="eventColor"
                    >
                        <div className="eventColors">
                            <div className="eventColor colorPicker">
                                <Input
                                    type={"color"}
                                    onChange={(e) => setEventColor(e.target.value)}
                                />
                            </div>

                            {
                                eventColors.map(({className, color}) =>
                                    <div
                                        className={`eventColor ${className} 
                                            ${eventColor === `${color}` ? "activeEventColor" : ""}`}
                                        onClick={() => setEventColor(color)}
                                    >
                                        <TickSquare
                                            className="h-100 m-auto"
                                            set="curved"
                                            primaryColor="white"
                                        />
                                    </div>)
                            }

                        </div>
                    </Form.Item>

                    <Form.Item
                        label="توضیحات"
                        name="description"
                        rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                    >
                        <TextArea
                            rows={4}
                            placeholder="توضیحات"
                        />
                    </Form.Item>

                    <Form.Item
                        label="لینک رویداد"
                        name="eventLink"
                        rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                        className="eventLink"
                    >
                        <Input
                            addonBefore="Peaky/username/"
                            className="ltr"
                        />
                    </Form.Item>

                    <div>
                        <label>تعیین زمان های آزاد</label>
                        <div className="freeTime">
                            {
                                weekDays.map(day => (
                                    <div className="days">
                                        <div className="dayLabel">
                                            <label>{day.faLabel}</label>
                                            <Plus
                                                set="curved"
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    setUserFreeTime((prevState) => {
                                                        prevState[day.label].push({ from: "09:00", to: "17:00" })
                                                        return { ...prevState }
                                                    })
                                                }}
                                            />
                                        </div>

                                        {
                                            freeTimeSelect(day.label)
                                        }
                                    </div>
                                ))
                            }

                            {/* <div className="days">
                                <div className="dayLabel">
                                    <label>یک شنبه</label>
                                    <Plus
                                        set="curved"
                                        onClick={() => { }}
                                    />
                                </div>

                                {
                                    freeTimeSelect("sunday")
                                }
                            </div>

                            <div className="days">
                                <div className="dayLabel">
                                    <label>دو شنبه</label>
                                    <Plus
                                        set="curved"
                                        onClick={() => { }}
                                    />
                                </div>

                                {
                                    freeTimeSelect("monday")
                                }
                            </div>

                            <div className="days">
                                <div className="dayLabel">
                                    <label>سه شنبه</label>
                                    <Plus
                                        set="curved"
                                        onClick={() => { }}
                                    />
                                </div>

                                {
                                    freeTimeSelect("tuesday")
                                }
                            </div>

                            <div className="days">
                                <div className="dayLabel">
                                    <label>چهار شنبه</label>
                                    <Plus
                                        set="curved"
                                        onClick={() => { }}
                                    />
                                </div>

                                {
                                    freeTimeSelect("wednesday")
                                }
                            </div>

                            <div className="days">
                                <div className="dayLabel">
                                    <label>پنج شنبه</label>
                                    <Plus
                                        set="curved"
                                        onClick={() => { }}
                                    />
                                </div>

                                {
                                    freeTimeSelect("thursday")
                                }
                            </div>

                            <div className="days">
                                <div className="dayLabel">
                                    <label>جمعه</label>
                                    <Plus
                                        set="curved"
                                        onClick={() => { }}
                                    />
                                </div>

                                {
                                    freeTimeSelect("friday")
                                }
                            </div> */}


                        </div>
                    </div>

                    <Form.Item
                        className="saveEventTypeButton"
                    >
                        <Button
                            className="mainColor1Button m-auto"
                            htmlType="submit"
                        // disabled={registerLoading}
                        >ذخیره
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout>
    );
}

export default CreateEventType;