import { Button, Form, Input, Select, Badge } from 'antd';
import './setting.scss'
import { KeyOutlined, GlobalOutlined, BellOutlined, MoonOutlined } from '@ant-design/icons';
import { useState } from 'react';
import useTheme from 'hooks/useTheme'
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const [isOpenPW, setIsOpenPW] = useState(false);
    const { dark, setDark, handleDark } = useTheme();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(values);
        setIsOpenPW(false);
    }

    const logout = () => {
        navigate('/login')
    }

    return (
        <div className={dark === 'off' ? "setting-container" : "setting-container dark"} >
            <div className="setting-title">Cài đặt</div>
            <div className="setting-content">
                <div className='setting-item'>
                    <div className='text-info'>
                        <div className='logo'>
                            <KeyOutlined />
                        </div>
                        <div className='text'>
                            <h4 style={{ marginBottom: '5px' }}>Mật khẩu</h4>
                            <p >Bạn nên dùng mật khẩu khó đoán để tăng tính bảo mật</p>
                            {
                                isOpenPW &&
                                <Form
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    autoComplete="off"
                                >

                                    <Form.Item className='form-item'
                                        label="Nhập mật khẩu hiện tại"
                                        name="password1"
                                        style={{ marginBottom: '10px', marginTop: '20px' }}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item className='form-item'
                                        label="Nhập mật khẩu mới"
                                        name="password2"
                                        style={{ marginBottom: '10px' }}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item className='form-item'
                                        label="Nhập lại mật khẩu mới"
                                        name="password3"
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item className='form-item' style={{ marginTop: "20px" }}>
                                        <Button
                                            htmlType="submit"
                                            className="btn-resetPw"
                                            onClick={() => onFinish()}
                                        >
                                            Thay đổi mật khẩu
                                        </Button>

                                    </Form.Item>


                                </Form>
                            }


                        </div>
                    </div>
                    <div className='setting-option' style={{ marginLeft: '20px' }}>
                        <Button onClick={() => setIsOpenPW(!isOpenPW)}>{isOpenPW ? 'Hủy' : 'Đổi mật khẩu'}</Button>
                    </div>
                </div>
                <div className='setting-item'>
                    <div className='text-info'>
                        <div className='logo'>
                            <GlobalOutlined />
                        </div>
                        <div className='text'>
                            <h4 style={{ marginBottom: '5px' }}>Ngôn ngữ</h4>
                            <p>Ngôn ngữ bạn muốn sử dụng trên giao diện</p>
                        </div>
                    </div>
                    <div className='setting-option'>
                        <Select defaultValue={'vietnam'}>
                            <Option value="vietnam">Tiếng Việt</Option>
                            <Option value="english">English</Option>
                            <Option value="japan">日本</Option>
                        </Select>
                    </div>
                </div>
                <div className='setting-item'>
                    <div className='text-info'>
                        <div className='logo'>
                            <BellOutlined />
                        </div>
                        <div className='text'>
                            <h4 style={{ marginBottom: '5px' }}>Thông báo</h4>
                            <p>Khuyến khích bạn nên bật để sử dụng hiệu quả nhất</p>
                        </div>
                    </div>
                    <div className='setting-option'>
                        <Select defaultValue={'on'}>
                            <Option value="on">Bật</Option>
                            <Option value="off">Tắt</Option>
                        </Select>
                    </div>
                </div>
                <div className='setting-item'>
                    <div className='text-info'>
                        <div className='logo'>
                            <MoonOutlined />
                        </div>
                        <div className='text'>
                            <h4 style={{ marginBottom: '5px' }}>Chế độ tối</h4>
                            <p>Thay đổi đề phù hợp với môi trường</p>
                        </div>
                    </div>
                    <div className='setting-option'>
                        <Select defaultValue={'off'} onChange={(value) => handleDark(value)}>
                            <Option value="on">Bật</Option>
                            <Option value="off">Tắt</Option>
                        </Select>
                    </div>
                </div>
                <div className='logout'>
                    <Button onClick={() => logout()}>Đăng xuất</Button>
                </div>

            </div>
        </div >
    )
}

export default Setting;