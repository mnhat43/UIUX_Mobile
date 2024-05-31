
import './index.scss'
import * as React from "react";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useTheme from 'hooks/useTheme'

function FooterRender() {
  const navigate = useNavigate();
  const { locati, setLocati, dark } = useTheme();

  const handleHomePage = () => {
    setLocati('home')
    navigate('/homepage')
  }
  const handleUser = () => {
    setLocati('user')
    navigate('/personal-info')
  }
  const handleBell = () => {
    setLocati('setting')
    navigate('/setting')
  }

  return (

    <div className={` ${dark === 'on' ? 'footer dark' : "footer"}`}>
      <div className="footer-content">
        <div className='item' onClick={() => handleHomePage()}>
          <HomeOutlined
            className={locati === 'home' ? 'iconnn activee' : 'icon'}
            style={{ fontSize: "27px" }}
          />
          <div className={locati === 'home' ? 'title activee' : 'title'}>Trang chủ</div>
        </div>
        <div className='item' onClick={() => handleUser()}>
          <UserOutlined
            className={locati === 'user' ? 'iconnn activee' : 'icon'}
            style={{ fontSize: "27px" }}
          />
          <div className={locati === 'user' ? 'title activee' : 'title'}>Hồ sơ</div>

        </div>
        <div className='item' onClick={() => handleBell()}>
          <SettingOutlined
            className={locati === 'setting' ? 'iconnn activee' : 'icon'}
            style={{ fontSize: "27px" }}
          />
          <div className={locati === 'setting' ? 'title activee' : 'title'}>Cài đặt</div>

        </div>
      </div>
    </div>
  );
}

export default FooterRender;
