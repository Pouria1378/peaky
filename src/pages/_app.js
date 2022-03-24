import React from "react"
import "../../public/style/main.css"

const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
}

export default App;