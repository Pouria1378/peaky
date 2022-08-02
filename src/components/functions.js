import { message } from 'antd'
import React from 'react'
import { Call, User } from 'react-iconly'
import Image from "next/image"
import Cookies from 'universal-cookie';

export const tokenCheckExists = () => {
    const cookies = new Cookies();
    const token = cookies.get('peakyToken')
    if (token) {
        return token
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
    navigator.clipboard.writeText(text.toString())
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