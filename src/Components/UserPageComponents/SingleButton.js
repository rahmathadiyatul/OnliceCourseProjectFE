import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '@fontsource/montserrat/400.css'

const OrangeButton = styled(Button)({
    fontWeight: 500,
    textTransform: 'none',
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'flex-start',
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

export default function CustomizedButtons(props) {
    const { orangeButton, type, onClick } = props
    return (
        <Stack marginTop='20px' spacing={2} justifyContent='center' direction="row">
            <OrangeButton onClick={onClick} type={type} variant="contained" disableRipple>{orangeButton}</OrangeButton>
        </Stack>
    );
};
