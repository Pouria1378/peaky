import React, { useEffect } from "react";
import Layout from "../layout";
import Image from 'next/image'
// import { Profile } from 'react-iconly'
import { apiRegister } from '../../apis/apiRegister';


const Register = () => {

    useEffect(() => {
        apiRegister()
            .then((data) => { console.log("then register ", data); })
            .catch((err) => { console.error("catch register ", err); });
    }, [])


    return (
        <Layout
            bodyIdStyle="RegisterPage"
        >
            <div className="row w-100 h-100">
                <section className="col-6">
                    <div className="registerFormWrapper">
                        <form className="registerForm">
                            <div className="title">
                                به Peaky خوش آمدید
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="userName"
                                >
                                    نام کاربری
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userName"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="password"
                                >
                                    رمز عبور
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="repeatPassword"
                                >
                                    تکرار رمز عبور
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="repeatPassword"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mainColor1Button"
                            >
                                ثبت نام
                            </button>
                            <p>
                                حساب کاربری دارید؟
                                <span className="colorMaincolor1 cursor-pointer">وارد شوید</span>
                            </p>
                        </form>
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