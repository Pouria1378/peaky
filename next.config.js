module.exports = {
    env: {
        API_URL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000' : 'https://peaky-backend-pouria-seifi.herokuapp.com/',
    },
}