import React from 'react'
import { useNavigate } from 'react-router-dom';
import H1User from '../Components/UserPageComponents/H1User';
import H2User from '../Components/UserPageComponents/H2User';
import SingleButton from '../Components/UserPageComponents/SingleButton';

import '../Components/UserPageComponents/User.css'

const SuccessEmail = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/login')
    }
    return (
        <div>
            <img className='logo2' alt='logo' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1665861626/SoupProject/image_1_1_tj3sdx.png'></img>
            <div className='card'>
                <div className='card2'>
                    <img className='suc' width={'250px'} alt='logo' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1666174265/SoupProject/a_npcjsd.png'></img>
                    <H1User text={'Email Confirmation Success'}></H1User>
                    <H2User text={'Congratulations! your email has already used.'}></H2User>
                    <SingleButton onClick={() => handleClick()} orangeButton='Login Here'></SingleButton>
                </div>
            </div>
        </div >
    )
}

export default SuccessEmail;