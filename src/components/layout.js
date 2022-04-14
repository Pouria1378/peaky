import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from "../components/sidebar/sidebar";

const Layout = ({ children, bodyIdStyle, sideBar }) => {



    return (
        <React.Fragment>
            <main id={bodyIdStyle}>
                {
                    sideBar && <Sidebar />
                }
                {children}
            </main>
        </React.Fragment>
    );
}

export default Layout;