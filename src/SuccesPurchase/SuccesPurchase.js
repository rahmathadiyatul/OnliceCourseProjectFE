import React from 'react'
import OrangeButton from '../Components/CourseComponent/OrangeButton'
import WhiteButton from '../Components/CourseComponent/WhiteButton'
import HomeIcon from '@mui/icons-material/Home';
import EastIcon from '@mui/icons-material/East';
import './SuccesPurchase.css'
import { Link } from 'react-router-dom';

const SuccesPurchase = () => {
    return (
        <div>
            <header>
                <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1665861626/SoupProject/image_1_1_tj3sdx.png' alt=''></img>
            </header>

            <div className='successclass'>
                <img className='character' src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1666174265/SoupProject/a_npcjsd.png" alt=''></img>
                <h1>Purchase Successfully</h1>
                <h2>Horay!! Let’s cook and become a professional cheff</h2>
                <div className='successclass_button'>
                    <Link to='/'>
                        <WhiteButton title='Back to Home'
                            icon={
                                <HomeIcon className='successclass-homeicon' style={{
                                    height: '20px',
                                    width: '20px',
                                    background: 'rgba(0,0,0,0)'
                                }}>
                                </HomeIcon>}>
                        </WhiteButton>
                    </Link>

                    <Link to='/invoice/'>
                        <OrangeButton title='Open Invoice'
                            icon={
                                <EastIcon className='successclass-homeicon' style={{
                                    height: '20px',
                                    width: '20px',
                                    background: 'rgba(0,0,0,0)'
                                }}>
                                </EastIcon>}>
                        </OrangeButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SuccesPurchase