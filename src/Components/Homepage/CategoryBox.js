import React from 'react';
import { Link, Typography } from '@mui/material';
import '@fontsource/inter';

const CategoryBox = (props) => {
    const { index, item } = props
    return (
        <Link href={'/kelas/' + item.category} sx={{
            margin: 0,
            padding: 0,
            width: '200px',
            display: 'flex',
            flexFlow: 'column wrap',
            alignItems: 'center',
            gap: '15px',
            textDecoration: 'none'
        }}>
            <img style={{
                boxShadow: '2px 2px rgba(150,150,150,.75)',
                border: '1px solid #BDBDBD',
                borderRadius: '8px'
            }} margin={0} width={'200px'} height={'133.33px'} src={item.img} alt={index}></img>
            <Typography sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '29px',
                color: '#000000',
                margin: '8px 0px',
                padding: '0 8px',
                marginBottom: '50px'
            }}>{item.category}</Typography>
        </Link>
    )
}

export default CategoryBox