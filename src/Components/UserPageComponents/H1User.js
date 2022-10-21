import * as React from 'react';
import { styled } from '@mui/material/styles';
import '@fontsource/montserrat/400.css'
import { Typography, Stack } from '@mui/material';

const Typograph = styled(Typography)({
    fontSize: '24px',
    fontFamily: 'Montserrat'
});

export default function H1User(props) {
    const { text, marginB } = props
    return (
        <Stack marginBottom={marginB}>
            <Typograph>{text}</Typograph>
        </Stack>
    );
};
