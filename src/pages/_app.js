import React from "react"
import "../../public/style/main.css"
import "../../node_modules/antd/dist/antd.css";
import { IconlyProvider } from 'react-iconly'

const App = ({ Component, pageProps }) => {
    return (
        <IconlyProvider set='curved'>
            <Component {...pageProps} />
        </IconlyProvider>
    );
}

export default App;