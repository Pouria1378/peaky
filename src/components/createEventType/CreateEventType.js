import React, { useState } from "react";
import Layout from "../layout";
import { apiCreateEventType } from '../../apis/apiCreateEventType';
import { Form, Input, Button, Select } from 'antd';


const CreateEventType = () => {
    const { Option } = Select;
    const { TextArea } = Input;
    const [eventColor, setEventColor] = useState('');

    const postEventTypeForm = (data) => {
        console.log("bbb", data);
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
                                defaultValue="00"
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
                                defaultValue="01"
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

                            <div
                                className={`eventColor eventColorMainColor1 
                                ${eventColor === "#6A6EF4" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#6A6EF4")}
                            />
                            <div
                                className={`eventColor eventColorMainColor2 
                                ${eventColor === "#54C1FB" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#54C1FB")}
                            />
                            <div
                                className={`eventColor eventColorDarkMainColor2 
                                ${eventColor === "#17A2B8" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#17A2B8")}
                            />
                            <div
                                className={`eventColor eventColorGreen 
                                ${eventColor === "#11CE8C" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#11CE8C")}
                            />
                            <div
                                className={`eventColor eventColorDarkGreen 
                                ${eventColor === "#28A745" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#28A745")}
                            />
                            <div
                                className={`eventColor eventColorYellow 
                                ${eventColor === "#FFC107" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#FFC107")}
                            />
                            <div
                                className={`eventColor eventColorDarkYellow 
                                ${eventColor === "#FFA94D" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#FFA94D")}
                            />
                            <div
                                className={`eventColor eventColorRed 
                                ${eventColor === "#FF7070" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#FF7070")}
                            />
                            <div
                                className={`eventColor eventColorDarkRed 
                                ${eventColor === "#DC3545" ? "activeEventColor" : ""}`}
                                onClick={() => setEventColor("#DC3545")}
                            />

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