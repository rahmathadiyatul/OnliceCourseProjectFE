import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '@fontsource/montserrat/400.css'
import { Link } from 'react-router-dom';


const WhiteButton = styled(Link)({
    fontWeight: 500,
    textTransform: 'none',
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5B4947',
    backgroundColor: '#FFFFFF',
    width: '140px',
    height: '38px',
    fontSize: 15,
    padding: '6px 12px',
    border: '1px solid #5B4947',
    borderRadius: '8px',
    fontFamily: 'Montserrat',
    '&:hover': {
        color: '#5B4947',
        backgroundColor: '#FFFFFF',
        borderColor: '#5B4947',
        boxShadow: '2px 2px rgba(150,150,150,.75)',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#FFFFFF',
        borderColor: '#5B4947',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(150,150,150,.5)',
    },
});
const OrangeButton = styled(Link)({
    fontWeight: 500,
    textTransform: 'none',
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5B4947',
    backgroundColor: '#EA9E1F',
    width: '140px',
    height: '38px',
    fontSize: 15,
    padding: '6px 12px',
    border: '1px solid #EA9E1F',
    borderRadius: '8px',
    fontFamily: 'Montserrat',
    '&:hover': {
        color: '#5B4947',
        backgroundColor: '#EA9E1F',
        borderColor: '#EA9E1F',
        boxShadow: '2px 2px rgba(150,150,150,.75)',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#EA9E1F',
        borderColor: '#EA9E1F',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(150,150,150,.5)',
    },
});

export default function DoubleButtons(props) {
    const { whiteButton, orangeButton, stack, linkW, linkO, onClick, type } = props
    return (
        <Stack marginTop={stack} spacing={2} justifyContent='flex-end' direction="row">
            <WhiteButton to={linkW}>{whiteButton}</WhiteButton>
            <OrangeButton onClick={onClick} type={type} to={linkO}>{orangeButton}</OrangeButton>
        </Stack>
    );
};
