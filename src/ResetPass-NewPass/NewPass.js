import React, { useState, useEffect } from 'react'
import '../Components/UserPageComponents/User.css'
import { FormControl } from '@mui/material';
import DoubleButtons from '../Components/UserPageComponents/DoubleButtons';
import H1User from '../Components/UserPageComponents/H1User';
import InputUser from '../Components/UserPageComponents/InputUser';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Http from '../Axios/Config';
import { Email } from '@mui/icons-material';

const NewPass = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    let mail = ''

    useEffect(() => {
        getEmail()
    }, [])

    const getEmail = () => {
        mail = location.state[0].email
        setEmail(mail)
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "confirmPassword") {
            setConfirmPassword(value)
        }
        if (id === "password") {
            setPassword(value)
        }
    }

    const clearData = () => {
        setErrorMsg('')
        setConfirmPassword('')
        setPassword('')
    }

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setErrorMsg('Password Does Not Match')
            return;
        }
        const userData = {
            email: email,
            password: password,
        }
        clearData()
        Http.put('/User/ResetPassword/NewPass', userData)
            .then((res) => {
                if (res.status === 200) {
                    console.log(userData)
                    navigate('/successemail')
                }
            }
            ).catch((err) => {
                if (err.response.status == 401) {
                    console.log('HELP!', err)
                }
            })
    }
    return (
        <div>
            <header>
                <Link to='/'>
                    <img className='logo' src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1665861626/SoupProject/image_1_1_tj3sdx.png" alt="logo"></img>
                </Link>
            </header>
            <div className='card'>
                <H1User marginB='40px' text={'Create Password'}></H1User>
                <InputUser id='password' type="password" text='New Password' value={password} onChange={(e) => handleInputChange(e)}></InputUser>
                <FormControl>
                    <InputUser id='confirmPassword' type="password" text='Confirm New Password' value={confirmPassword} onChange={(e) => handleInputChange(e)}></InputUser>
                    <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
                    <DoubleButtons linkW='/resetpassword' onClick={() => handleSubmit()} type='submit' stack='40px' whiteButton={'Cancel'} orangeButton={'Submit'}></DoubleButtons>
                </FormControl>
            </div>
        </div >
    )
}

export default NewPass;