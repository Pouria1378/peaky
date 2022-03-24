import React from "react";
import Layout from "../layout";
import Image from 'next/image'


const Register = () => {
    return (
        <Layout
            bodyIdStyle="RegisterPage"
        >
            <div className="row w-100 h-100">
                <section className="col-5">
                    <h1>col5</h1>
                </section>

                <section className="col-7 h-100">
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