import React, { useState } from "react";
import Layout from "../layout";
import Image from 'next/image'
import { User, Password } from 'react-iconly'
import { apiLogin } from '../../apis/apiRegister';
import { Form, Input, Button } from 'antd';
import { statusCodeMessage } from "../../components/functions";
import { useRouter } from 'next/router'
import useIsMounted from "../useIsMounted"

const Register = () => {
    const isMounted = useIsMounted();
    const [registerLoading, setRegisterLoading] = useState(false)


    const router = useRouter()

    const postLoginData = (data) => {
        setRegisterLoading(true)
        apiLogin(data)
            .then((result) => {
                if (!isMounted()) return;
                const { statusCode, success } = result
                setRegisterLoading(false)
                if (success) {
                    statusCodeMessage(statusCode)
                    router.push("/login")
                }
                statusCodeMessage(600)
            })
            .catch((err) => {
                if (!isMounted()) return;
                statusCodeMessage(600)
                setRegisterLoading(false)
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
                                className="mb-2"
                            >
                                <Button
                                    className="mainColor1Button"
                                    htmlType="submit"
                                    disabled={registerLoading}
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