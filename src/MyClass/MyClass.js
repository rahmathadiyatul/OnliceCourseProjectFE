import React, { useContext } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import { Box, Typography } from '@mui/material';
import { TokenContext } from '../Context/TokenContext'

const MyClass = () => {
    const { token } = useContext(TokenContext)

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header></Header>
            <Box sx={{ flex: 1, margin: 0, padding: 0 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: '1px solid rgba(0,0,0,0.5)',
                    margin: '3.45% 5%',
                    paddingBottom: '2%'
                }}>
                    <img alt='myclass' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1665649451/SoupProject/Asian/TomYumThailand_e31mqk.png' ></img>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        margin: '0 3%'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#828282',
                            flex: 'none',
                            order: 0,
                            flexGrow: 0
                        }}>Asian</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '36px',
                            color: '#333333',
                            flex: 'none',
                            order: 1,
                            flexGrow: 0,
                            marginY: '5%'
                        }}>Tom Yum Thailand</Typography>
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '24px',
                            color: '#FABC1D',
                            flex: 'none',
                            order: 1,
                            flexGrow: 0
                        }}>Schedule : Wednesday, 27 July 2022</Typography>
                    </Box>
                </Box>
            </Box>
            <Footer></Footer>
        </div>
    )
}

export default MyClass
