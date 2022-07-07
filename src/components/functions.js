import { message } from 'antd'
import React from 'react'
import { Call, User } from 'react-iconly'
import Image from "next/image"

export const statusCodeMessage = (statusCode) => {
    const messages = {
        200: () => {
            message.success("عملیات با موفقیت انجام شد")
        },
        201: () => {
            message.success("ثبت نام با موفقیت انجام شد لطفا وارد شوید")
        },
        // 400: 'Bad Request',
        401: () => {
            message.warning("لطفا ابتدا وارد شوید")
            window.location.href = "/login"
        },
        409: () => {
            message.warning("قبلا ثبت نام کرده اید لطفا وارد شوید")
        },
        600: () => {
            message.error("ارتباط با سرور با مشکل مواجه شد")
        },
        601: () => {
            message.error("انجام عملیات با مشکل مواجه شد")
        },
        602: () => {
            message.error("لینک رویداد تکراری است")
        },

    }

    messages[statusCode]()
}

export const tokenCheckExists = () => {
    if (localStorage) {
        if (localStorage.getItem('token'))
            return localStorage.getItem('token')
    }


    return false
}

export const toFarsiNumber = (number) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return number
        .toString()
        .split('')
        .map(x => {
            //for clock times
            if (x === ":") return ":"

            return farsiDigits[x]
        })
        .join('');
}

export const toEnglishNumber = (number) => {
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return number
        .toString()
        .split('')
        .map(x => {
            //for clock times
            if (x === ":") return ":"

            return englishDigits['۰۱۲۳۴۵۶۷۸۹'.indexOf(x)]
        })
        .join('');
}

export const copyToClipboard = (text, messageText = "متن کپی شد") => {
    navigator.clipboard.writeText(text)
        .then(() => message.success(messageText))
        .catch(() => message.error("کپی متن با مشکل مواجه شد"))

}

export const typeOfEvent = (type) => {
    const typesOfEvent = {
        "byPerson":
            <React.Fragment>
                حضوری
                <User />
            </React.Fragment>,

        "phone":
            <React.Fragment>
                تلفنی
                <Call />
            </React.Fragment>,

        "skype":
            <React.Fragment>
                <Image
                    src="/images/skype.png"
                    alt="skype"
                    layout='fixed'
                    width={50}
                    height={20}
                />
            </React.Fragment>,

        "googleMeet":
            <React.Fragment>
                <Image
                    src="/images/meet.png"
                    alt="google meet"
                    layout='fixed'
                    width={80}
                    height={20}
                />
            </React.Fragment>,
    }

    return typesOfEvent[type]
}