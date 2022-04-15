import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Image from 'next/image'
import { User, Password } from 'react-iconly'
import { apiLogin } from '../../apis/apiRegister';
import { Form, Input, Button } from 'antd';
import { statusCodeMessage } from "../../components/functions";
import { useRouter } from 'next/router'
import useIsMounted from "../useIsMounted"

const Register = () => {
    const isMounted = useIsMounted();
    const [loginLoading, setLoginLoading] = useState(false)


    const router = useRouter()

    const postLoginData = (data) => {
        setLoginLoading(true)
        apiLogin(data)
            .then((result) => {
                if (!isMounted()) return;
                const { statusCode, success, token } = result
                setLoginLoading(false)
                if (success) {
                    statusCodeMessage(statusCode)
                    localStorage.setItem("token", token)
                    router.push("/createEventType")
                    return
                }
                statusCodeMessage(600)
            })
            .catch((err) => {
                if (!isMounted()) return;
                statusCodeMessage(600)
                setLoginLoading(false)
                console.error(err)
            })
    }

    return (
        <Layout
            bodyIdStyle="LoginPage"
        >
            <div className="row w-100 h-100">
                <section className="col-12 col-md-6">
                    <div className="formWrapper">
                        <Form
                            name="registerForm"
                            onFinish={postLoginData}
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
                                    prefix={<User />}
                                />
                            </Form.Item>

                            <Form.Item
                                label="رمز عبور"
                                name="password"
                                rules={[{ required: true, message: 'این فیلد الزامی است' }]}
                            >
                                <Input.Password
                                    prefix={<Password />}
                                />
                            </Form.Item>

                            <Form.Item
                                className="mb-2"
                            >
                                <Button
                                    className="mainColor1Button"
                                    htmlType="submit"
                                    disabled={loginLoading}
                                >ورود
                                </Button>
                            </Form.Item>
                            <p>حساب کاربری ندارید؟
                                <span
                                    onClick={() => router.push("/register")}
                                    className="colorMaincolor1 cursor-pointer"
                                >ثبت نام کنید</span>
                            </p>
                        </Form>
                    </div>
                </section>

                <section className="col-12 col-md-6 h-100 illusWrapper">
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