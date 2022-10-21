import { FormControlLabel } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import React from 'react'

const CheckboxLabel = (props) => {
    return (
        <div style={{
            margin: '0px 61px',
            borderBottom: '1px solid #BDBDBD'
        }}>
            <FormControlLabel 
                control={<Checkbox 
                    id = {props.id}
                    style={{
                        color:'#5B4947',
                        marginRight:'35px'
                    }} 
                    disableRipple
                    onChange={props.handleChange}
                    checked={props.isChecked}
                />} 
                label={props.label}> 
            </FormControlLabel>
        </div>
  )
}

export default CheckboxLabel