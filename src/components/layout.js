import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const Layout = ({ children, bodyIdStyle }) => {
    return (
        <React.Fragment>
            <main id={bodyIdStyle}>
                {children}
            </main>
        </React.Fragment>
    );
}

export default Layout;