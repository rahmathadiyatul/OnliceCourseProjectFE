import React from 'react'
import { Link, Typography } from '@mui/material';


const ClassBox = (props) => {
    const { index, item } = props
    return (
        <Link href={item.category + '/' + item.idCourse} sx={{
            margin: 0,
            padding: 0,
            width: '350px',
            display: 'flex',
            flexFlow: 'column wrap',
            alignItems: 'flex-start',
            textDecoration: 'none'
        }}>
            <img style={{ boxShadow: '2px 2px rgba(150,150,150,.75)' }} margin={0} width={'350px'} height={'233.33px'} src={item.img} alt={index}></img>
            <Typography sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#828282',
                margin: '8px 0px',
                padding: '0 8px'
            }}>{item.category}</Typography>
            <Typography sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#5B4947',
                padding: '0 8px'
            }}>{item.name}</Typography>
            <Typography sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FABC1D',
                margin: '40px 0',
                padding: '0 8px'
            }}>{item.price}</Typography>
        </Link>
    )
}

export default ClassBox