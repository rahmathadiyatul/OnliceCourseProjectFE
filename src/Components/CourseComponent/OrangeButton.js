import { Button } from '@mui/material'
import React from 'react'
import './ButtonStyle.css'

const OrangeButton = (props) => {
    return (
        <div className='buttonstyle'>
            <Button 
                className='orangebutton' 
                variant='contained' 
                onClick={props.onClick}
                disableRipple>
                    {props.icon}{props.title}
            </Button>
        </div>
    )
}

export default OrangeButton