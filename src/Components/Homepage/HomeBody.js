import React, { useEffect, useState, useContext } from 'react'
import { Box, Typography } from '@mui/material'
import '@fontsource/montserrat'
import '@fontsource/inter'
import Http from '../../Axios/Config.js';
import ClassBox from './ClassBox.js'
import CategoryBox from './CategoryBox.js'

const HomeBody = () => {
    const [classList, setClassList] = useState([])
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getClasses()
    }, [])

    const getClasses = () => {
        Http.get('Course')
            .then((res) => {
                console.log(localStorage.getItem('tl'))
                if (res.status === 200) {
                    const dataClass = res.data.map(item => {
                        return { ...item }
                    })
                    let classes = []
                    let categories = []
                    for (let i = 0; i < 72; i += 12) {
                        classes.push(dataClass[i])
                    }
                    setClassList(classes)
                    for (let i = 0; i < 72; i += 9) {
                        categories.push(dataClass[i])
                    }
                    setCategoryList(categories)
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <Box sx={{
            flex: 1,
            minHeight: '100vh',
            margin: 0,
            position: 'relative',
            textAlign: 'center'
        }}>
            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1665945852/SoupProject/image_3_qz1bbf.png' alt='homeImage'></img>
            <Box sx={{
                position: 'absolute',
                top: '5%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(0,0,0,0)',
            }}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    background: 'rgba(0,0,0,0)',
                    color: '#ffffff',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    padding: '20px 0'
                }}>Be the next great chef</Typography>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    background: 'rgba(0,0,0,0)',
                    color: '#ffffff',
                    fontSize: '24px',
                    width: '843px'

                }}>We are able to awaken your cooking skills to become a classy chef and
                    ready to dive into the professional world</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '40px'
            }}>
                <Box sx={{
                    margin: '0 30px',
                    border: '1px solid #D3D3D3',
                    borderRadius: '20px',
                    width: '25%',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}>
                    <Typography sx={{
                        marginTop: '15px',
                        fontFamily: 'Montserrat',
                        background: 'rgba(0,0,0,0)',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '48px',
                        color: '#FABC1D'
                    }}>200+</Typography>
                    <Typography sx={{
                        marginTop: '10px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '20px',
                        textAlign: 'center',
                    }}>Various cuisines available in professional class</Typography>
                </Box>
                <Box sx={{
                    margin: '0 30px',
                    border: '1px solid #D3D3D3',
                    borderRadius: '20px',
                    width: '25%',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}>
                    <Typography sx={{
                        marginTop: '15px',
                        fontFamily: 'Montserrat',
                        background: 'rgba(0,0,0,0)',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '48px',
                        color: '#FABC1D'
                    }}>50+</Typography>
                    <Typography sx={{
                        marginTop: '10px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '20px',
                        textAlign: 'center',
                    }}>A chef who is reliable and has his own characteristics in cooking</Typography>
                </Box>
                <Box sx={{
                    margin: '0 30px',
                    border: '1px solid #D3D3D3',
                    borderRadius: '20px',
                    width: '25%',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}>
                    <Typography sx={{
                        marginTop: '15px',
                        fontFamily: 'Montserrat',
                        background: 'rgba(0,0,0,0)',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '48px',
                        color: '#FABC1D'
                    }}>30+</Typography>
                    <Typography sx={{
                        marginTop: '10px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '20px',
                        textAlign: 'center',
                    }}>Cooperate with trusted and upscale restaurants</Typography>
                </Box>
            </Box>
            <Box sx={{
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '32px',
                    lineHeight: '39px',
                    color: '#5B4947',
                    marginBottom: '80px'
                }}>More professional class</Typography>
                <Box sx={{
                    margin: '0 0',
                    display: 'flex',
                    flexFlow: 'column wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: '1098px',
                    height: '800px',
                    gap: 0,
                    padding: '0 0'
                }}>
                    {
                        classList.map((item, i) =>
                            <ClassBox key={i} item={item} index={i}></ClassBox>
                        )
                    }
                </Box>
            </Box>
            <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1665998667/SoupProject/image_4_rxl8kr.png' alt='homeImage'></img>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'absolute',
                top: '65.25%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(0,0,0,0)',
            }}>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    background: 'rgba(0,0,0,0)',
                    color: '#ffffff',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    padding: '20px 0'
                }}>Gets your best benefit</Typography>
                <Typography sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: 500,
                    background: 'rgba(0,0,0,0)',
                    color: '#ffffff',
                    fontSize: '16px',
                    width: '1120px',
                    textAlign: 'justify'
                }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</Typography>
            </Box>
            <Box sx={{
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '32px',
                    lineHeight: '39px',
                    color: '#5B4947',
                    marginY: '80px'
                }}>More food type as you can choose</Typography>
                <Box sx={{
                    margin: '0 0',
                    display: 'flex',
                    flexFlow: 'column wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: '872px',
                    height: '500px',
                    gap: 0,
                    padding: '0 0'
                }}>
                    {
                        categoryList.map((item, i) =>
                            <CategoryBox key={i} item={item} index={i}></CategoryBox>
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default HomeBody