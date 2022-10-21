import { Box, Grid } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './MenuGrid.css'

const MenuGrid = (props) => {
    const { dataList, id, category } = props

    return (
        <div className='menugrid'>
            <h1 className='menugrid_anothertitle'>
                Another menu in this class
            </h1>

            <Box margin='0px 120px' sx={{ flexGrow: 1 }}>
                <Grid container
                    rowspacing={{ md: 12, lg: 12 }}
                    columnSpacing={{ md: 0, lg: 0 }}>
                    {
                        dataList.map((data, index) => {
                            if (data.idCourse != id) {
                                return (
                                    <Grid item sm={10} md={6} lg={4} key={data.idCourse}>
                                        <Link to={'/' + category + '/' + data.idCourse} alt=''>
                                            <img className='menugrid_img'
                                                src={data.img}
                                                alt={data.name}>
                                            </img>

                                            <h1 className='menugrid_category'>{category}</h1>
                                            <h2 className='menugrid_title'>{data.name}</h2>
                                            <h3 className='menugrid_price'>IDR {data.price}</h3>
                                        </Link>
                                    </Grid>
                                )
                            }
                        })}
                </Grid>
            </Box>
        </div>
    )
}

export default MenuGrid