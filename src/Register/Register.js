import React, { useState, useContext } from 'react'
import '../Components/UserPageComponents/User.css'
import SingleButton from '../Components/UserPageComponents/SingleButton';
import H1User from '../Components/UserPageComponents/H1User';
import H2User from '../Components/UserPageComponents/H2User';
import InputUser from '../Components/UserPageComponents/InputUser';
import '@fontsource/montserrat/400.css';
import Http from '../Axios/Config.js';
import { Navigate, Link } from 'react-router-dom';
import { ValidateEmail } from '../Components/RegisterPage/Validation';
import Header from '../Header';
import { TokenContext } from '../Context/TokenContext'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const { setToken } = useContext(TokenContext)

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value)
        }
        if (id === "email") {
            setEmail(value)
        }
        if (id === "password") {
            setPassword(value)
        }
        if (id === "confirm") {
            setConfirmPassword(value)
        }
    }
    const clearData = () => {
        setErrorMsg('')
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }
    // Http.post('User/Register', article)
    // .then(res => this.setState({ articleId: res.data.id })).catch((err) => {
    //     console.error('There was an error!', err)
    // })

    const handleSubmit = () => {
        if (name === '' || email === '' || password === '') {
            setErrorMsg('Field Cannot Be Empty!')
            return;
        }
        if (password !== confirmPassword) {
            setErrorMsg('Password Does Not Match!')
            return;
        }
        if (ValidateEmail(email) === false) {
            setErrorMsg('Email Format Invalid!')
            return;
        }
        const userData = {
            name: name,
            email: email,
            password: password
        }
        console.log(userData)
        clearData()
        Http.post('User/Register', userData)
            .then((res) => {
                if (res.status === 200) {
                    Http.post('User/Login', userData)
                        .then((response) => {
                            if (response.status === 200) {
                                setToken(response.data.token)
                                Navigate('/')
                            }
                        }
                        ).catch((error) => {
                            if (error) {
                                console.log(error)
                            }
                        })
                }
            }).catch((err) => {
                console.log('There was an error!', err)
            })
    }

    return (
        <div>
            <Header></Header>
            <div className='card'>
                <H1User text={'Are you ready become a professional cheff?'}></H1User>
                <H2User text={'Please register first'}></H2User>
                <InputUser id="name" type="text" text='Name' value={name} onChange={(e) => handleInputChange(e)}></InputUser>
                <InputUser id='email' type="email" text='Email' value={email} onChange={(e) => handleInputChange(e)}></InputUser>
                <InputUser id='password' type="password" text='Password' value={password} onChange={(e) => handleInputChange(e)}></InputUser>
                <InputUser id='confirm' type="password" text='Confirm Password' value={confirmPassword} onChange={(e) => handleInputChange(e)}></InputUser>
                <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
            </div>
            <div className='card3'>
                <Link to='/'>
                    <SingleButton onClick={() => handleSubmit()} type='submit' orangeButton={'Sign Up'}></SingleButton>
                </Link>
                <div className='card4'>
                    <p>Have account? <a style={{
                        textDecoration: 'none'
                    }} href='/login'>Login Here</a></p>
                </div>
            </div>
        </div >
    )
}

export default Register;