import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { apiPostReserveEventData } from '../../apis/apiReserveEvent';
import { statusCodeMessage } from '../functions';
import useIsMounted from '../useIsMounted';

const UserInformation = ({ selectedDay, selectedHour }) => {
    const router = useRouter()
    const isMounted = useIsMounted();
    const [loading, setLoading] = useState(false)

    const onFinish = (formData) => {
        const { selectedHour, selectedDay, link } = router.query

        const data = {
            username: formData.username,
            userEmail: formData.userEmail,
            date: selectedDay.year + "/" + selectedDay.month + "/" + selectedDay.day,
            hour: selectedHour,
            link: link
        }

        apiPostReserveEventData(data)
            .then((result) => {
                if (!isMounted()) return;
                const { statusCode, success } = result
                setLoading(false)
                if (success) {
                    statusCodeMessage(statusCode)
                    router.push("/succesfullyReservedEvent")
                    return
                }
                statusCodeMessage(600)
            })
            .catch((err) => {
                if (!isMounted()) return;
                statusCodeMessage(600)
                setLoading(false)
                console.error(err)
            })
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

                <Form.Item>
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