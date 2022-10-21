import React from 'react';
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import '@fontsource/poppins';



const Footer = () => {
    return (
        <div>
            <Box sx={{
                display: 'flex',
                marginTop: 0,
                bottom: 0,
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'space-around',
                boxSizing: 'border-box',
                backgroundColor: '#5B4947',
                height: '220px',
                padding: '24px 95px',
                flexWrap: 'wrap',
            }}>
                <Box
                    sx={{
                        width: '30%',
                        background: 'rgba(0,0,0,0)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#FABC1D',
                        background: 'rgba(0,0,0,0)',
                        textAlign: 'justify',
                        marginBottom: '10px'
                    }}>About Us</Typography>
                    <Typography sx={{
                        background: 'rgba(0,0,0,0)',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '21px',
                        textAlign: 'justify',
                        color: '#FFFFFF'
                    }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Typography>
                </Box>
                <Box sx={{
                    background: 'rgba(0,0,0,0)',
                    displax: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '20%'
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        textAlign: 'left',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#FABC1D',
                        background: 'rgba(0,0,0,0)',
                    }}>Product</Typography>
                    <ul style={{
                        marginTop: '17px',
                        marginLeft: '25px',
                        alignItems: 'flex-start',
                        gap: '10px',
                        maxHeight: '140px',
                        width: '200px',
                        display: 'flex',
                        flexFlow: 'column wrap',
                        background: 'rgba(0,0,0,0)',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        textAlign: 'justify',
                        color: '#FFFFFF',
                    }}>
                        <li style={{
                            background: 'rgba(0,0,0,0)'
                        }}>Asian</li>
                        <li style={{
                            background: 'rgba(0,0,0,0)'
                        }}>Cold Drink</li>
                        <li style={{
                            background: 'rgba(0,0,0,0)'

                        }}>Cookies</li>
                        <li style={{
                            background: 'rgba(0,0,0,0)'

                        }}>Desert</li>
                        <li style={{
                            background: 'rgba(0,0,0,0)'

                        }}>Eastern</li>
                        <li style={{
                            background: 'rgba(0,0,0,0)'

                        }}>Hot Drink</li>
                        <li style={{
                            background: 'rgba(0,0,0,0)'

                        }}>Junk Food</li>
                        <li style={{
                            background: 'rgba(0,0,0,0)'
                        }}>Western</li>
                    </ul>
                </Box>
                <Box sx={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    background: 'rgba(0,0,0,0)',
                    gap: '20px',
                }}>
                    <Box sx={{
                        background: 'rgba(0,0,0,0)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '10px'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#FABC1D',
                            background: 'rgba(0,0,0,0)',
                        }}>Address</Typography>
                        <Typography sx={{
                            background: 'rgba(0,0,0,0)',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '21px',
                            textAlign: 'justify',
                            color: '#FFFFFF'
                        }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</Typography>
                    </Box>
                    <Box sx={{
                        background: 'rgba(0,0,0,0)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',

                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#FABC1D',
                            background: 'rgba(0,0,0,0)',
                        }}>Contact Us</Typography>
                        <Box sx={{
                            background: 'rgba(0,0,0,0)'
                        }}>
                            <ImageList sx={{
                                background: 'rgba(0,0,0,0)',
                                display: 'flex',
                                flexDirection: 'row',
                            }}>
                                <ImageListItem sx={{
                                    background: 'rgba(0,0,0,0)',
                                    width: '48px',
                                    maxHeight: '48px',
                                    marginTop: '7px',
                                    marginRight: '10px'
                                }}>
                                    <img alt='phone' style={{
                                        background: 'rgba(0,0,0,0)'
                                    }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1666031100/SoupProject/1-removebg-preview_k2zcbk.png'></img>
                                </ImageListItem>
                                <ImageListItem sx={{
                                    background: 'rgba(0,0,0,0)',
                                    width: '48px',
                                    maxHeight: '48px',
                                    marginTop: '7px',
                                    marginRight: '10px'
                                }}>
                                    <img alt='instagram' style={{
                                        background: 'rgba(0,0,0,0)'
                                    }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1666031100/SoupProject/2-removebg-preview_b2oukf.png'></img>
                                </ImageListItem>
                                <ImageListItem sx={{
                                    background: 'rgba(0,0,0,0)',
                                    width: '48px',
                                    maxHeight: '48px',
                                    marginTop: '7px',
                                    marginRight: '10px'
                                }}>
                                    <img alt='youtube' style={{
                                        background: 'rgba(0,0,0,0)'
                                    }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1666031100/SoupProject/3-removebg-preview_pynukn.png'></img>
                                </ImageListItem>
                                <ImageListItem sx={{
                                    background: 'rgba(0,0,0,0)',
                                    width: '48px',
                                    maxHeight: '48px',
                                    marginTop: '7px',
                                    marginRight: '10px'
                                }}>
                                    <img alt='telegram' style={{
                                        background: 'rgba(0,0,0,0)'
                                    }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1666031100/SoupProject/4-removebg-preview_gdj7sp.png'></img>
                                </ImageListItem>
                                <ImageListItem sx={{
                                    background: 'rgba(0,0,0,0)',
                                    width: '48px',
                                    maxHeight: '48px',
                                    marginTop: '7px',
                                    marginRight: '10px'
                                }}>
                                    <img alt='mail' style={{
                                        background: 'rgba(0,0,0,0)'
                                    }} src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1666031100/SoupProject/5-removebg-preview_aqry7f.png'></img>
                                </ImageListItem>
                            </ImageList>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}

export default Footer
