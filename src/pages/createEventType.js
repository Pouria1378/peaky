import Layout from "../layout/Layout";
import React from "react";
import CreateEventType from "../components/createEventType/CreateEditEventType";


const CreateEventTypePage = () => {
    return (
        <Layout
            sideBar={true}
        >
            <CreateEventType
                title={"ایجاد نوع رویداد جدید"}
            />
        </Layout>
    );
}

export default CreateEventTypePage;