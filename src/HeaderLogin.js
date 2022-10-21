import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import './HeaderLogin.css'

const HeaderLogin = () => {
    return (
        <div>
            <header>
                <img className='logo' src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1665861626/SoupProject/image_1_1_tj3sdx.png" alt=""></img>
                <nav>
                    <ul className='nav_links'>
                        <li>
                            <Link to='/login'>
                                <Button
                                    variant="outlined"
                                    disableRipple>
                                        Login
                                </Button>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to='/register'>
                                <Button 
                                    variant='contained'
                                    disableRipple>
                                    Register
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default HeaderLogin