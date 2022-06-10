import { Button, Form, Input } from 'antd';
import React from 'react'
import { apiPostReserveEventData } from '../../apis/apiReserveEvent';

const UserInformation = ({ selectedDay, selectedHour }) => {

    const onFinish = () => {
        console.log('====================================');
        console.log("onFinish");
        console.log('====================================');

        const data = {
            username: "pouria",
            userEmail: "email@test.com",
            date: "1401/3/12",
            hour: "09:00",
            eventDataTitle: "",
            eventDataType: ""
        }
        apiPostReserveEventData(data)
    }

    return (
        <section className='userInformationForm'>
            <Form
                name="userInformationForm"
                // labelCol={{ span: 80 }}
                // wrapperCol={{ span: 60 }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                // autoComplete="off"

                layout={"vertical"}
            >
                <Form.Item
                    label="نام"
                    name="username"
                    rules={[{
                        required: true,
                        message: 'لطفا نام خود را وارد کنید.'
                    }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="شماره تلفن / ایمیل"
                    name="userEmail"
                    rules={[{
                        required: true,
                        message: 'لطفا ایمیل یا شماره تلفن خود را وارد کنید'
                    }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        className="mainColor1Button"
                        htmlType="submit"
                    >
                        هماهنگ کردن رویداد
                    </Button>
                </Form.Item>
            </Form>
        </section>
    )
}

export default UserInformation