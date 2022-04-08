import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from "../components/sidebar/sidebar";

const Layout = ({ children, bodyIdStyle, sideBar }) => {



    return (
        <React.Fragment>
            {
                sideBar && <Sidebar />
            }
            <main id={bodyIdStyle}>
                {children}
            </main>
        </React.Fragment>
    );
}

export default Layout;