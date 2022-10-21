import { Button } from '@mui/material'
import React from 'react'
import './ButtonStyle.css'

const WhiteButton = (props) => {
    return (
        <div className='buttonstyle'>
            <Button 
                className='whitebutton' 
                variant='contained'
                onClick={props.click}
                disableRipple>
                    {props.icon}{props.title}
            </Button>
        </div>
  )
}

export default WhiteButton