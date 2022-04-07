import React, { useState } from "react";
import Layout from "../layout";
import Image from 'next/image'
import { User, Password } from 'react-iconly'
import { apiRegister } from '../../apis/apiRegister';
import { message } from 'antd'
import { Form, Input, Button } from 'antd';
import { statusCodeMessage } from "../../components/functions";
import { useRouter } from 'next/router'

const Register = () => {
    const [registerLoading, setRegisterLoading] = useState(false)


    const router = useRouter()

    const postRegisterData = (data) => {
        setRegisterLoading(true)
        if (data.repeatPassword !== data.password) {
            message.warning('رمز عبور با تکرار آن مطابقت ندارد')
            setRegisterLoading(false)
            return
        }
        console.log("data", data);
        apiRegister(data)
            .then((result) => {
                const { statusCode, success } = result
                setRegisterLoading(false)
                if (success) {
                    statusCodeMessage(statusCode)
                    router.push("/login")
                }
            })
            .catch((err) => {
                setRegisterLoading(false)
                console.error(err)
            })
    }

    return (
        <Layout
            bodyIdStyle="RegisterPage"
        >
            <div className="row w-100 h-100">
                <section className="col-6">
                    <div className="formWrapper">
                        <Form
                            name="registerForm"
                            onFinish={postRegisterData}
                            // onFinishFailed={postRegisterData}
                            autoComplete="off"
                            layout="vertical"
                            className="registerForm"
                        >
                            <p>به Peaky خوش آمدید</p>
                            <Form.Item
                                label="نام کاربری"
                                name="username"
                                rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                            >
                                <Input
                                    prefix={<User set="curved" />}
                                />
                            </Form.Item>

                            <Form.Item
                                label="رمز عبور"
                                name="password"
                                rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                            >
                                <Input.Password
                                    prefix={<Password set="curved" />}
                                />
                            </Form.Item>

                            <Form.Item
                                label="تکرار رمز عبور"
                                name="repeatPassword"
                                rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                            >
                                <Input.Password
                                    prefix={<Password set="curved" />}
                                />
                            </Form.Item>


                            <Form.Item>
                                <Button
                                    className="mainColor1Button"
                                    htmlType="submit"
                                    disabled={registerLoading}
                                > ثبت نام
                                </Button>
                            </Form.Item>
                            <p>حساب کاربری دارید؟
                                <span
                                    onClick={() => router.push("/login")}
                                    className="colorMaincolor1 cursor-pointer"
                                >وارد شوید</span>
                            </p>
                        </Form>
                    </div>
                </section>

                <section className="col-6 h-100">
                    <div className="illus">
                        <Image
                            src="/illus/login-bro.svg"
                            alt="Picture of the author"
                            layout='fill'
                        />
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Register;