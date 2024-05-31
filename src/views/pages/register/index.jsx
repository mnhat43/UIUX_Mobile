import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Select,
} from 'antd'
import './register.scss'
import { useNavigate } from 'react-router-dom'
import auth from 'api/auth'
import { toast } from 'react-toastify'
const { Option } = Select
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { Grid }
  from
  "antd"
  ;
function Register() {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  // const { setToken } = useAuth()
  const handleSubmit = async (dataUser) => {
    try {
      navigate('/login')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const handleToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="register-container">
      <div className="register-container__sub">
        <div className="register-container__sub__logo">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a7ec8b021aa8f242c74c6fefb029d66b5c28ea7be26ba07593ea659c8fd3147?apiKey=10b1e221f97543f5b056ca1fc29636cb&"
            alt="eTracking logo"
          />
          <div className="textLogo">eTracking</div>
          <div className="textLogo2">HI10</div>
        </div>
        <div className="register-container__sub__content">
          <div className="register-container__sub__content__right">
            <Form
              layout="vertical"
              // {...formItemLayout}
              form={form}
              name="register"
              onFinish={handleSubmit}
              initialValues={{
                prefix: '84',
              }}
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
            >
              <div className="register-container__sub__content__form__header" style={{ marginBottom: "18px" }}>
                <div className="register-container__sub__content__form__header__title">
                  Đăng ký
                </div>
              </div>

              <Form.Item
                className="form-item"
                name="fullname"
                rules={[
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Họ và tên"
                  style={{ background: "#F6F8FE", height: '50px', width: '300px' }}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  style={{ background: "#F6F8FE", height: '50px', width: '300px' }}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  style={{ background: "#F6F8FE", height: '50px', width: '300px' }}
                  placeholder="Mật khẩu"
                />
              </Form.Item>

              <Form.Item
                name="password2"
                rules={[

                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  style={{ background: "#F6F8FE", height: '50px', width: '300px' }}
                  placeholder="Nhập lại mật khẩu"
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error('Hãy chấp nhận điều khoản!')),
                  },
                ]}
              >
                <Checkbox className="checkbox-agreement">
                  Tôi đồng ý với các điều khoản của <a href="" style={{ color: "#09C4AE" }}>eTrackingHI10</a>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-register" style={{ background: "#209EA6", height: '50px', width: '300px' }}>
                  Tạo tài khoản
                </Button>
              </Form.Item>
            </Form>
            <div className="to-login">
              Bạn đã có tài khoản?{' '}
              <span className="login-link" onClick={() => handleToLogin()}>
                Đăng nhập
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
