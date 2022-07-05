import { Modal } from 'antd';
import React from 'react'

const MoreDetailsModal = ({ data, handleCancel }) => {

    console.log("=>", data);
    const { date, show, title, username } = data
    console.log('====================================');
    console.log("MoreDetailsModal");
    console.log('====================================');

    return (
        <Modal
            title="جزییات رویداد هماهنگ شده"
            visible={show}
            onCancel={handleCancel}
            footer={null}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default MoreDetailsModal