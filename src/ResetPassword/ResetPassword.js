import React, { useState } from 'react'
import Header from '../Header'
import '../Components/UserPageComponents/User.css'
import { FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DoubleButtons from '../Components/UserPageComponents/DoubleButtons';
import H1User from '../Components/UserPageComponents/H1User';
import H2User from '../Components/UserPageComponents/H2User';
import InputUser from '../Components/UserPageComponents/InputUser';
import Http from '../Axios/Config.js';

const ResetPassword = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [stateEmail, setStateEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setEmail(value)
        }
    }

    const clearData = () => {
        setErrorMsg('')
        setEmail('')
    }
    const handleSubmit = () => {
        const userData = {
            email: email
        }
        let stateData = {
            email: '',
            password: ''
        }
        clearData()
        Http.post('User/ResetPassword', userData)
            .then((res) => {
                stateData = res.data
                navigate('/resetpassword/newpass', { state: stateData })
            }
            ).catch((err) => {
                if (err.response.status == 401) {
                    setErrorMsg('Email or Password Invalid')
                    console.log('HELP!', err)
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <div className='card'>
                <H1User text={'Reset Password'}></H1User>
                <H2User text={'Send OTP code to your email address'}></H2User>
                <FormControl>
                    <InputUser id='email' type="email" text='Email' value={email} onChange={(e) => handleInputChange(e)}></InputUser>
                    <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
                    <DoubleButtons linkW='/login' onClick={() => handleSubmit()} type='submit' stack='40px' whiteButton={'Cancel'} orangeButton={'Confirm'}></DoubleButtons>
                </FormControl>
            </div>
        </div >
    )
}

export default ResetPassword;