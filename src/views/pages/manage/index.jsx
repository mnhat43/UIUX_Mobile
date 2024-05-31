import './index.scss'
import { PlusOutlined } from '@ant-design/icons'
import CardCPN from './CardPattern';
import React, { useEffect, useState } from 'react';
import {
    Modal, AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Tabs
} from 'antd';
import ModalAddCard from './ModalAddCard';


const items = [
    {
        key: '1',
        label: 'Đang tiến hành',
        children: <></>,
    },
    {
        key: '2',
        label: 'Đã hoàn thành',
        children: <></>,
    },
    {
        key: '3',
        label: 'Quá hạn',
        children: <></>,
    },
];

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
}

function Manage() {

    let listCardDefault = [
        { id: "1", status: "Đang tiến hành", badge: "Tự học", title: "Học Tiếng Nhật", target: "Từ vựng + Ngữ pháp + Đọc + Nghe", date: "30/05/2024", time: "08:30 AM", doneTask: "2", totalTask: "4", dateAdd: "28 tháng 4" },
        { id: "2", status: "Đã hoàn thành", badge: "Học tập", title: "Báo cáo GR1", target: "Demo + báo cáo", date: "28/04/2024", time: "10:30 AM", doneTask: "3", totalTask: "3", dateAdd: "20 tháng 4" },
        { id: "3", status: "Đã hoàn thành", badge: "Gia đình", title: "Quét dọn nhà cửa", target: "Mua hoa + Quà", date: "01/05/2024", time: "08:30 AM", doneTask: "2", totalTask: "2", dateAdd: "29 tháng 4" },
        { id: "4", status: "Quá hạn", badge: "Sức khỏe", title: "Khám bệnh", target: "Khám tại bệnh viện bạch mai", date: "25/04/2024", time: "08:30 AM", doneTask: "0", totalTask: "1", dateAdd: "23 tháng 4" },
        { id: "5", status: "Đang tiến hành", badge: "Công việc", title: "Thực tập", target: "Thực tập tại công ty A", date: "30/07/2024", time: "08:30 AM", doneTask: "3", totalTask: "10", dateAdd: "1 tháng 5" },
        { id: "6", status: "Đang tiến hành", badge: "Học tập", title: "Báo cáo ITSS", target: "Video demo + Báo cáo", date: "30/05/2024", time: "23:59 PM", doneTask: "3", totalTask: "5", dateAdd: "12 tháng 5" },
    ]

    const [listCard, setListCard] = useState(listCardDefault);
    const [keyItem, setKeyItem] = useState('1');
    const [show, setShow] = useState(true);

    const newList = listCard.reverse();

    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [form] = Form.useForm();
    const onChange = (key) => {
        setShow(false);
        setKeyItem(key);
    };

    const showModalAdd = () => {
        setIsModalAddOpen(true);
    };

    const handleModalAddOk = () => {
        setIsModalAddOpen(false);
        form.resetFields();

    };

    const handleModalAddCancel = () => {
        setIsModalAddOpen(false);
        form.resetFields();
    };

    const handleAddCard = () => {
        showModalAdd();
    }

    const removeCard = (value) => {
        const listCardNew = listCard.filter((item) => {
            return item.id !== value
        })
        setListCard(listCardNew);
    }

    return (
        <div className="manage">
            <div className='content'>
                <div className='manage-title'>
                    Quản lý công việc
                </div>
                <div className='add' onClick={() => handleAddCard()}>
                    <Button className='btn-add-card'>
                        <PlusOutlined style={{ fontSize: "12px" }} /> Thêm thẻ
                    </Button>
                </div>
                <div className='row'>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    {
                        (
                            keyItem === '1' &&
                            <div className='col'>
                                <div className='list-card'>
                                    {
                                        newList && newList.length > 0 &&
                                        newList.map((item, index) => {
                                            if (item.status === 'Đang tiến hành') {
                                                return (
                                                    <div key={index}>
                                                        < CardCPN
                                                            dataCard={item}
                                                            removeCard={removeCard}
                                                        />
                                                    </div>
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        )
                        ||
                        (
                            keyItem === '2' &&
                            <div className='col'>
                                <div className='list-card'>
                                    {
                                        newList && newList.length > 0 &&
                                        newList.map((item, index) => {
                                            console.log(item);
                                            if (item.status === 'Đã hoàn thành') {
                                                return (
                                                    <div key={index}>
                                                        < CardCPN
                                                            dataCard={item}
                                                            removeCard={removeCard}
                                                        />
                                                    </div>
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        )
                        ||
                        (
                            keyItem === '3' &&
                            <div className='col'>
                                <div className='list-card'>
                                    {
                                        newList && newList.length > 0 &&
                                        newList.map((item, index) => {
                                            console.log(item);
                                            if (item.status === 'Quá hạn') {
                                                return (
                                                    <div key={index}>
                                                        < CardCPN
                                                            dataCard={item}
                                                            removeCard={removeCard}
                                                        />
                                                    </div>
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>

            <ModalAddCard
                className="modaladdcard"
                open={isModalAddOpen}
                onOk={handleModalAddOk}
                onCancel={handleModalAddCancel}
                form={form}
                formItemLayout={formItemLayout}
                listCard={listCard}
            />
        </div >
    )
}
export default Manage;