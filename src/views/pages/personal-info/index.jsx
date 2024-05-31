import { Button, Avatar, Form, Input } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import './personal-info.scss'
import useAuth from 'hooks/useTheme'
import { useState } from 'react'
import { LoadingOutlined, PhoneOutlined, ScheduleOutlined, DeploymentUnitOutlined } from '@ant-design/icons'
import { toast } from 'react-toastify'
import auth from 'api/auth'
import {
  AutoComplete,
  Cascader,
  Checkbox,
  InputNumber,
  Row,
  Col,
  Select,
} from 'antd'

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

const PersonalInfo = () => {
  const { userData, updateUserData } = useAuth()
  const [isSending, setIsSending] = useState(false);

  const handleChangePassword = async () => {

  };

  const handleSubmit = (values) => {
    updateUserData(values)
    toast.success("Cập nhật thành công")
  }


  return (
    <div className="personal-info-wrapper">
      <div className='title'>Thông tin cá nhân</div>
      <div className="personal-info__avatar">
        <Avatar size={90} icon={<UserOutlined />} />
        <Button
          htmlType="avarta"
          style={{
            backgroundColor: 'rgb(32, 158, 166)',
            color: 'white',
          }}
        >
          Thay ảnh đại diện
        </Button>
      </div>
      <Form
        onFinish={handleSubmit}
        initialValues={{
          email: 'admin@gmail.com',
          fullname: 'admin',
          phone: '0987654321',
          birth: '11/11/2003',
          role: 'Sinh viên',
        }}
      >
        <Form.Item
          name="email"
          className="form-item"
          label="Địa chỉ email"
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            style={{ background: "#F6F8FE" }}
          />
        </Form.Item>

        <Form.Item
          label="Họ và tên"
          className="form-item"
          name="fullname"
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            style={{ background: "#F6F8FE" }}
          />
        </Form.Item>
        <Form.Item
          className="form-item"
          name="phone"
          label="Số điện thoại"
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            style={{ background: "#F6F8FE" }}
          />
        </Form.Item>

        <Form.Item
          label="Ngày sinh"
          className="form-item"
          name="birth"
        >
          <Input
            prefix={<ScheduleOutlined className="site-form-item-icon" />}
            style={{ background: "#F6F8FE" }}
          />
        </Form.Item>

        <Form.Item
          name="role"
          label="Vai trò"
          className="form-item"
        >
          <Input
            prefix={<DeploymentUnitOutlined className="site-form-item-icon" />}
            style={{ background: "#F6F8FE" }}
          />
        </Form.Item>

        <Form.Item
          // wrapperCol={{
          //   offset: 10,
          //   span: 16,
          // }}
          style={{ textAlign: 'center' }}
        >
          <Button
            htmlType="submit"
            style={{
              backgroundColor: 'rgb(32, 158, 166)',
              color: 'white',
              marginTop: '30px'
            }}
          >
            Chỉnh sửa
          </Button>
        </Form.Item>
      </Form>
    </div >
  )
}

export default PersonalInfo
