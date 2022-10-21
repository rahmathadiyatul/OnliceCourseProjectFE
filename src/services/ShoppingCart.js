import { MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OrangeButton from '../Components/CourseComponent/OrangeButton'
import WhiteButton from '../Components/CourseComponent/WhiteButton'

const ShoppingCart = (props) => {
    const { dataList, id, click } = props

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December']
    const date = []
    var name, category, price, img

    var current_date = new Date()
    for (var i = 1; i <= 7; i++) {
        var next_date = new Date(current_date)
        next_date.setDate(next_date.getDate() + i)
        date.push(next_date)
    }

    function convertInputDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
    }

    function convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [convertDay(d.getDay()), pad(d.getDate()), converMonth(d.getMonth()), d.getFullYear()].join(' ')
    }

    function convertDay(inputFormat) {
        return (weekday[inputFormat] + ',')
    }

    function converMonth(inputFormat) {
        return (month[inputFormat])
    }

    var dateChoose = ''
    function handleChange(e) {
        dateChoose = e.target.value + 1
    }

    function handleClick() {
        var schedule = new Date(current_date)
        schedule.setDate(schedule.getDate() + (dateChoose))
        var scheduleInput = convertInputDate(schedule)
        console.log(scheduleInput)
        props.click({
            idCourse: id,
            schedule: scheduleInput,
            name: name,
            category: category,
            price: price,
            img: img
        })
    }

    return (
        <div>
            {
                dataList.map((data, index) => {
                    if (data.idCourse == id) {
                        name = data.name
                        category = data.category
                        price = data.price
                        img = data.img
                        return (
                            <div className='detailkelas' key={data.idCourse}>
                                <img className='detailkelas_img'
                                    src={data.img}
                                    alt=''>
                                </img>
                                <div>
                                    <h1 className='detailkelas_category'>{data.category}</h1>
                                    <h2 className='detailkelas_title'>{data.name}</h2>
                                    <h3 className='detailkelas_price'>IDR {data.price}</h3>
                                    <Select
                                        className='detailkelas_select'
                                        label='Date'
                                        defaultValue={convertDate(date[0])}
                                        onChange={handleChange}>
                                        {
                                            date.map((now, index_now) =>
                                                <MenuItem
                                                    value={index_now}
                                                    disableRipple>
                                                    {convertDate(now)}
                                                </MenuItem>
                                            )}
                                    </Select>
                                    <div className='detailkelas_button'>
                                        <WhiteButton title='Add to Cart' click={handleClick}></WhiteButton>
                                        <Link to='/checkout'>
                                            <OrangeButton title='Buy Now'></OrangeButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
        </div>
    )
}

export default ShoppingCart