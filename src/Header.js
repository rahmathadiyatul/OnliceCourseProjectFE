import React, { useContext } from 'react'
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import DoubleButtons from './Components/UserPageComponents/DoubleButtons';
import { TokenContext } from './Context/TokenContext';

const Header = () => {
  const { token, setToken } = useContext(TokenContext)
  const navigate = useNavigate()

  const handleClick = () => {
    setToken('')
    localStorage.removeItem('tl')
    navigate('/login')
  }
  return (
    <div>
      <header>
        <Link to='/'>
          <img className='logo' src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1665861626/SoupProject/image_1_1_tj3sdx.png" alt="logo"></img>
        </Link>
        {token &&
          <nav>
            <ul className='nav_links'>
              <li><Link to='/checkout'>
                <ShoppingCartIcon></ShoppingCartIcon>
              </Link></li>
              <li><Link to='/myclass'>My Class</Link></li>
              <li><Link to='/invoice'>Invoice</Link></li>
              <li><Link to=''>
                <PersonIcon></PersonIcon>
              </Link></li>
              <li><Link to='/login' onClick={() => handleClick()}>
                <LogoutIcon></LogoutIcon>
              </Link></li>
            </ul>
          </nav>
        }{!token &&
          <DoubleButtons linkW='/login' linkO='/register' stack='0px' whiteButton='Login' orangeButton='Register'></DoubleButtons>
        }
      </header>
    </div >
  )
}

export default Header