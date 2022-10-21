import http from '../Axios/Config'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MenuGrid from '../Components/CourseComponent/MenuGrid'
import Description from '../Components/CourseComponent/Description'
import Header from '../Header'
import './DetailKelas.css'
import ShoppingCart from '../services/ShoppingCart'
import Footer from '../Footer'

const DetailKelas = ({ cart, setCart }) => {
    const [dataCourse, setDataCourse] = useState([])
    const { id, category } = useParams()

    useEffect(() => {
        getDataCourse()
    }, [])

    const getDataCourse = () => {
        http.get('Course/getbycategory/' + category)
            .then((res) => {
                setDataCourse(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleClick(item) {
        console.log(item)
        setCart([...cart, item])
        console.log(cart)
    }

    return (
        <div>
            <Header></Header>
            <ShoppingCart
                dataList={dataCourse}
                id={id}
                click={handleClick}>
            </ShoppingCart>

            <Description
                title='Description'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'>
            </Description>

            <MenuGrid
                dataList={dataCourse}
                id={id}
                category={category}>
            </MenuGrid>
            <Footer></Footer>
        </div>
    )
}

export default DetailKelas