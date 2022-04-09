import { message } from 'antd'

export const statusCodeMessage = (statusCode) => {
    const messages = {
        201: () => {
            message.success("ثبت نام با موفقیت انجام شد لطفا وارد شوید")
        },
        400: 'Bad Request',
        409: () => {
            message.warning("قبلا ثبت نام کرده اید لطفا وارد شوید")
        },
        600: () => {
            message.error("ارتباط با سرور با مشکل مواجه شد")
        }

    }

    messages[statusCode]()
}

export const tokenCheckExists = () => {
    if (localStorage.getItem('token'))
        return localStorage.getItem('token')

    return false
}