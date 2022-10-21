import React, { useState, useContext } from 'react'
import Header from '../Header'
import Http from '../Axios/Config.js';
import '../Components/UserPageComponents/User.css'
import SingleButton from '../Components/UserPageComponents/SingleButton';
import H1User from '../Components/UserPageComponents/H1User';
import H2User from '../Components/UserPageComponents/H2User';
import InputUser from '../Components/UserPageComponents/InputUser';
import '@fontsource/montserrat/400.css';
import { useNavigate } from 'react-router-dom';
import { ValidateEmail } from '../Components/RegisterPage/Validation';
import { TokenContext } from '../Context/TokenContext'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const { setToken } = useContext(TokenContext)

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setEmail(value)
        }
        if (id === "password") {
            setPassword(value)
        }
    }

    const clearData = () => {
        setErrorMsg('')
        setEmail('')
        setPassword('')
    }

    const handleSubmit = () => {
        if (ValidateEmail(email) === false) {
            setErrorMsg('Email Invalid!')
            return;
        }
        const userData = {
            email: email,
            password: password
        }
        clearData()
        Http.post('User/Login', userData)
            .then((res) => {
                if (res.status === 200) {
                    setToken(res.data.token)
                    localStorage.setItem('user', res.data.idUser)
                    navigate('/')
                }
            }
            ).catch((err) => {
                if (err.response.status === 401) {
                    setErrorMsg('Email or Password Invalid')
                    console.log('HELP!', err)
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <div className='card'>
                <H1User text={'Welcome Back! Cheff'}></H1User>
                <H2User text={'Please login first'}></H2User>
                <InputUser id='email' type="email" text='Email' value={email} onChange={(e) => handleInputChange(e)}></InputUser>
                <InputUser id='password' type="password" text='Password' value={password} onChange={(e) => handleInputChange(e)}></InputUser>
                <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
                <p className='par'>Forgot Password? <a style={{
                    textDecoration: 'none'
                }} href='/resetpassword'>Click Here</a></p>
            </div>
            <div className='card3'>
                <SingleButton onClick={() => handleSubmit()} type='submit' orangeButton={'Login'}></SingleButton>
                <div className='card4'>
                    <p>Don't have account? <a style={{
                        textDecoration: 'none'
                    }} href='/register'>Sign Up here</a></p>
                </div>
            </div>
        </div >
    )
}

export default Login;