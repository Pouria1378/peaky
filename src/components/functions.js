import { message } from 'antd'

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
    if (localStorage.getItem('token'))
        return localStorage.getItem('token')

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

export const copyToClipboard = (text, messageText = "متن کپی شد") => {
    navigator.clipboard.writeText(text)
        .then(() => message.success(messageText))
        .catch(() => message.error("کپی متن با مشکل مواجه شد"))

}