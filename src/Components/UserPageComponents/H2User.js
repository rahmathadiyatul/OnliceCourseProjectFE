import * as React from 'react';
import { styled } from '@mui/material/styles';
import '@fontsource/montserrat/400.css'
import { Typography, Stack } from '@mui/material';

const Typograph2 = styled(Typography)({
    color: '#4F4F4F',
    fontSize: '16px',
    fontFamily: 'Montserrat'
});

export default function H2User(props) {
    const { text } = props
    return (
        <Stack marginTop='12px' marginBottom='35px' >
            <Typograph2>{text}</Typograph2>
        </Stack >
    );
};
