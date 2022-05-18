import React from "react"
import "../../public/style/main.css"
import "../../node_modules/antd/dist/antd.css";
import { IconlyProvider } from 'react-iconly'
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    return (
        <IconlyProvider set='curved'>
            <Head>
                <link
                    rel="shortcut icon"
                    href="/images/logo.png"
                />
            </Head>

            <Component {...pageProps} />
        </IconlyProvider>
    );
}

export default App;