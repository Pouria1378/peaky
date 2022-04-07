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

    }

    messages[statusCode]()
}