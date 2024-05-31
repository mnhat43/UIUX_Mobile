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

import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/')
    }

    return (
        <div className="LandingPage">
            <Button onClick={handleLogin}>Login</Button>
        </div>
    )
}

export default LandingPage;