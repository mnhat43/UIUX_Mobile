import { Image } from 'antd';
import './index.scss'
import { AppstoreOutlined, ScheduleOutlined, ProfileOutlined, QuestionCircleOutlined, } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import useTheme from 'hooks/useTheme'

const HomePage = () => {
    const navigate = useNavigate();
    const { locati, setLocati } = useTheme();


    const handleClickOverview = () => {
        setLocati('')
        navigate('/overview')
    }
    const handleClickSchedule = () => {
        setLocati('')
        navigate('/schedule')
    }
    const handleClickManageTask = () => {
        setLocati('')
        navigate('/manage-task')
    }
    const handleClickHelp = () => {
        setLocati('')
        navigate('/help')
    }

    return (
        <div className="homepage">
            <div className="homepage__content">
                <div className='img-home' style={{ marginBottom: "50px" }}>
                    <Image
                        style={{ width: '70vw' }}
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dbeef3522f9afe1a7bc243b498b029d0f9d19d0a808ff210df8a4599493b635?apiKey=10b1e221f97543f5b056ca1fc29636cb&"
                        alt="Descriptive alt text"
                        preview={false}
                    />
                </div>

                <div className='row' style={{ marginBottom: '30px', marginTop: '15px' }}>
                    <div className='col' onClick={() => handleClickOverview()} >
                        <div className='icon'>
                            <AppstoreOutlined style={{ fontSize: '65px', color: '#209EA6' }} />
                        </div>
                        <div className='text'>
                            Tổng quan
                        </div>
                    </div>
                    <div className='col' onClick={() => handleClickSchedule()}>
                        <div className='icon'>
                            <ScheduleOutlined style={{ fontSize: '65px', color: '#209EA6' }} />
                        </div>
                        <div className='text'>
                            Lịch
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col' onClick={() => handleClickManageTask()}>
                        <div className='icon'>
                            <ProfileOutlined style={{ fontSize: '65px', color: '#209EA6' }} />
                        </div>
                        <div className='text'>
                            Công việc
                        </div>
                    </div>
                    <div className='col' onClick={() => handleClickHelp()}>
                        <div className='icon'>
                            <QuestionCircleOutlined style={{ fontSize: '65px', color: '#209EA6' }} />
                        </div>
                        <div className='text'>
                            Hỗ trợ
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePage;