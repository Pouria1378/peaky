import React from "react";
import { ArrowRightSquare, Calendar, Plus, TimeSquare } from "react-iconly";
import { useRouter } from 'next/router'
import Image from 'next/image'
import { message } from 'antd'

const Sidebar = () => {

    const router = useRouter()

    return (
        <div id="Sidebar">
            <div className="sidebar">
                <div className="logoWrapper">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        layout="fixed"
                        width={110}
                        height={110}
                    />
                    <h5>Peaky</h5>
                </div>

                <div className="routes">
                    <ul>
                        <li
                            className={`${router.pathname === "/reservedEvents" ? "active" : ""}`}
                            onClick={() => router.push("/reservedEvents")}
                        >
                            <Calendar />رویداد های هماهنگ شده
                        </li>

                        <li
                            className={`${router.pathname === "/eventTypes" ? "active" : ""}`}
                            onClick={() => router.push("/eventTypes")}
                        >
                            <TimeSquare />رویداد های شما
                        </li>

                        <li
                            className={`${router.pathname === "/createEventType" ? "active" : ""}`}
                            onClick={() => router.push("/createEventType")}
                        >
                            <Plus />ایجاد نوع رویداد جدید
                        </li>

                        <li onClick={() => {
                            message.success("خارج شدید")
                            localStorage.removeItem("token");
                            router.push("/")
                        }}>
                            <ArrowRightSquare />
                            خروج
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;