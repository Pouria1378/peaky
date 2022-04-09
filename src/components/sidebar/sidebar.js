import React from "react";
import { ArrowRightSquare, Calendar, Plus, TimeSquare } from "react-iconly";
import { useRouter } from 'next/router'
import Image from 'next/image'

const Sidebar = () => {

    const router = useRouter()

    return (
        <div className="sidebar">
            <div>
                <Image
                    src="/images/logo2.png"
                    alt="logo"
                    layout="responsive"
                    width={"100%"}
                    height={190}
                />
                <h5>Peaky</h5>
            </div>

            <div className="routes">
                <ul>
                    <li
                        className={`${router.pathname === "/" ? "active" : ""}`}
                        onClick={() => router.push("/reservedEvents")}
                    >
                        <Calendar set="curved" />رویداد های هماهنگ شده
                    </li>

                    <li
                        className={`${router.pathname === "/" ? "active" : ""}`}
                        onClick={() => router.push("/yourEvents")}
                    >
                        <TimeSquare set="curved" />رویداد های شما
                    </li>

                    <li
                        className={`${router.pathname === "/createEventType" ? "active" : ""}`}
                        onClick={() => router.push("/createEventType")}
                    >
                        <Plus set="curved" />ایجاد نوع رویداد جدید
                    </li>

                    <li
                        className={`${router.pathname === "/" ? "active" : ""}`}
                        onClick={() => router.push("/")}
                    >
                        <ArrowRightSquare set="curved" />خروج
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;