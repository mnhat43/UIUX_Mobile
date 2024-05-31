import React, { useState } from 'react';
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
    DatePicker,
    TimePicker,
    Space,
    Flex, Progress
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './ModalDetailCard.scss'
import { toast } from 'react-toastify';

const ModalDetailCard = (props) => {

    const { form, formItemLayout, open, onOk, onCancel } = props;

    const onFinish = (values) => {
        console.log(values);
        toast.success('Lưu thay đổi thành công!')
        onOk();
    }
    return (
        <Modal
            title="Học Tiếng Nhật"
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            footer={<></>}
            centered
            width={800}
            style={{ position: "relative" }}

        >
            <div className='modall'>
                <div className='modalDetail-content'>
                    <div className='modalDetail-content__left'>
                        <div className='title'>
                            Thông tin thẻ
                        </div>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="addCard"
                            onFinish={onFinish}
                            style={{ maxWidth: 700, margin: '0 auto' }}
                            scrollToFirstError
                        >
                            <Form.Item style={{ marginBottom: "10px" }}
                                name="target"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Mục tiêu</p>}
                            >
                                <div>
                                    300 từ vựng tiếng nhật <br />
                                    30 cấu trúc ngữ pháp <br />
                                    30 bài nghe <br />
                                    30 bài đọc
                                </div>
                            </Form.Item>
                            <Form.Item style={{ marginBottom: "10px" }}
                                name="status"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Trạng thái</p>}
                            // rules={[{ required: true, message: 'Please select service!' }]}
                            >
                                <Select
                                    placeholder="Lựa chọn trạng thái"
                                    defaultValue={'status_1'}
                                >
                                    <Option value="status_1" >Đang tiến hành</Option>
                                    <Option value="status_2">Đã hoàn thành</Option>
                                    <Option value="status_3">Quá hạn</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item style={{ marginBottom: "10px" }}

                                name="type"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Loại thẻ</p>}
                            // rules={[{ required: true, message: 'Please select service!' }]}
                            >
                                <Select
                                    placeholder="Lựa chọn loại thẻ"
                                    defaultValue={'type_1'}

                                >
                                    <Option value="type_1">Tự học</Option>
                                    <Option value="type_2">Học tập(Hust)</Option>
                                    <Option value="type_3">Gia đình</Option>
                                    <Option value="type_4">Chăm sóc sức khỏe</Option>
                                    <Option value="type_5">Việc</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item style={{ marginBottom: "10px" }}

                                name="dealine"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Hạn chót</p>}
                            >
                                <div>08:30 AM - 30/05/2024</div>
                            </Form.Item>

                            <Form.Item style={{ marginBottom: "10px" }}

                                name="remind"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Nhắc nhở</p>}
                            >
                                <Select
                                    placeholder="Lựa chọn loại thẻ"
                                    defaultValue={'remind_2'}
                                >
                                    <Option value="remind_1">Không</Option>
                                    <Option value="remind_2">Mỗi ngày</Option>
                                    <Option value="remind_3">3 ngày</Option>
                                    <Option value="remind_4">7 ngày</Option>
                                    <Option value="remind_5">1 tháng</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item style={{ marginBottom: "10px" }}

                                name="description"
                                label={<p style={{ fontSize: "15px", fontWeight: "bold" }}>Mô tả</p>}
                            >
                                <Checkbox checked="true">10 từ vựng/ngày</Checkbox>
                                <Checkbox>1 ngữ pháp/ngày</Checkbox>
                                <Checkbox checked="true">1 bài nghe/ngày</Checkbox>
                                <Checkbox>1 bài đọc/ngày</Checkbox>

                            </Form.Item>
                        </Form >
                    </div>
                    <div className='modalDetail-content__right'>
                        <div className='modalDetail-progress'>
                            <div className='title'>
                                Tiến độ
                            </div>
                            <div className='list-task'>
                                <div className='task-item'>
                                    <p>Việc 1: 300 từ vựng</p>
                                    <Flex vertical gap="middle">
                                        <Progress
                                            percent={60}
                                            status="active"
                                            strokeColor={{
                                                from: '#108ee9',
                                                to: '#87d068',
                                            }}
                                            style={{ height: "100px" }}
                                        />
                                    </Flex>
                                </div>
                                <div className='task-item'>
                                    <p>Việc 2: 30 cấu trúc</p>
                                    <Flex vertical gap="middle">
                                        <Progress
                                            percent={50}
                                            status="active"
                                            strokeColor={{
                                                from: '#108ee9',
                                                to: '#87d068',
                                            }}
                                            style={{ height: "100px" }}
                                        />
                                    </Flex>
                                </div>
                                <div className='task-item'>
                                    <p>Việc 3: 30 bài nghe</p>
                                    <Flex vertical gap="middle">
                                        <Progress
                                            percent={70}
                                            status="active"
                                            strokeColor={{
                                                from: '#108ee9',
                                                to: '#87d068',
                                            }}
                                            style={{ height: "100px" }}
                                        />
                                    </Flex>
                                </div>
                                <div className='task-item'>
                                    <p>Việc 4: 30 bài đọc</p>
                                    <Flex vertical gap="middle">
                                        <Progress
                                            percent={30}
                                            status="active"
                                            strokeColor={{
                                                from: '#108ee9',
                                                to: '#87d068',
                                            }}
                                            style={{ height: "100px" }}
                                        />
                                    </Flex>
                                </div>

                            </div>
                        </div>
                        <div className='modalDetail-cmt'>
                            <div className='title'>
                                Nhận xét
                            </div>
                            <div>
                                - Việc 1 đang đúng tiến độ <br />
                                - Việc 2 đang chậm tiến độ<br />
                                - Việc 3 đang vượt tiến độ<br />
                                - Việc 4 đang quá chậm tiến độ
                            </div>
                        </div>


                    </div>
                </div>
                <div className='modalbtn'>
                    <Button type="primary" htmlType="submit"
                        style={{
                            marginRight: "10px", background: "#209EA6",
                        }}
                    >
                        Lưu
                    </Button>
                    <Button onClick={() => onCancel()}
                    >
                        Hủy
                    </Button>
                </div>
            </div>

        </Modal >
    )
}

export default ModalDetailCard;