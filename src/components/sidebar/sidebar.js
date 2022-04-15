import React from "react";
import { ArrowRightSquare, Calendar, Plus, TimeSquare } from "react-iconly";
import { useRouter } from 'next/router'
import Image from 'next/image'

const Sidebar = () => {

    const router = useRouter()

    return (
        <div id="Sidebar">
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

                        <li
                            className={`${router.pathname === "/" ? "active" : ""}`}
                            onClick={() => router.push("/")}
                        >
                            <ArrowRightSquare />خروج
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;