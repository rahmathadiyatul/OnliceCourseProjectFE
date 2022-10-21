import React, { useState, useEffect, useContext } from 'react'
import http from '../Axios/Config'
import Header from '../Header'
import './ListMenuKelas.css'
import MenuGrid from '../Components/CourseComponent/MenuGrid'
import Description from '../Components/CourseComponent/Description'
import { useParams } from 'react-router-dom'
import Footer from '../Footer'

const ListMenuKelas = () => {
    const [dataCourse, setDataCourse] = useState([])
    let { category } = useParams()

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

    return (
        <div>
            <Header></Header>
            <img className='img_header' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1666256813/SoupProject/Asian/category_asian_h3dbmk.png'></img>

            <Description
                title={category}
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'>
            </Description>

            <MenuGrid
                dataList={dataCourse}
                id=''
                category={category}>
            </MenuGrid>
            <Footer></Footer>
        </div>
    )
}

export default ListMenuKelas