import { FormGroup, IconButton } from '@mui/material'
import React from 'react'
import CheckboxLabel from '../CourseComponent/CheckboxLabel'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CheckoutCard = ({data, deleteItem, handleChange, isChecked, currencyConvert, dateConvert}) => {

    return (
        <div>
            <CheckboxLabel 
                id = {data.idCourse}
                handleChange = {handleChange}
                isChecked = {isChecked}
                label=
                {
                <div className='checkbox-icon'>
                    <div className='checkbox'>
                        <img src={data.img}></img>
                        <div>
                            <h1>{data.category}</h1>
                            <h2>{data.name}</h2>
                            <h3>schedule: {dateConvert(data.schedule)}</h3>
                            <h4>IDR {currencyConvert(data.price)}</h4>
                        </div>
                    </div>

                    <IconButton
                    onClick={deleteItem}
                    disableRipple>
                        <DeleteForeverIcon 
                        style={{
                            color:'#EB5757',
                            height: '30px',
                            width: '23px',
                            marginLeft:'275px'
                        }}>
                        </DeleteForeverIcon>
                    </IconButton>
                </div>
                }
                >
            </CheckboxLabel>
        </div>
    )
}

export default CheckoutCard