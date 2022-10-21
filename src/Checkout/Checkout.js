import { FormGroup } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import CheckboxLabel from '../Components/CourseComponent/CheckboxLabel'
import OrangeButton from '../Components/CourseComponent/OrangeButton'
import './Checkout.css'
import { CartContext } from '../App'
import CheckoutCard from '../Components/InvoiceComponent/CheckoutCard'
import http from '../Axios/Config'

const Checkout = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const scheduleList = []
    const idCourseList = []
    const idUser = localStorage.getItem('user')

    const cartData = useContext(CartContext)
    const [checkout, setCheckout] = useState([]);
    var total = 0;

    useEffect(() => {
        getDataCourse()
        console.log('test')
    }, []);

    const getDataCourse = () => {
        for (var i = 0; i < cartData.length; i++) {
            addNewData(cartData[i])
        }
    };

    const addNewData = (newData) => {
        setCheckout((prevState) => {
            return [...prevState, newData]
        })
    };

    const deleteItem = (index) => {
        const listItemTemp = [...checkout]
        listItemTemp.splice(index, 1)
        console.log(listItemTemp)
        setCheckout(listItemTemp)
    };

    const handleSelectAll = (e) => {
        setIsCheckAll(!isCheckAll)
        if (isCheckAll) {
            setIsCheck(false)
        }
        else {
            setIsCheck(true)
        }
    }

    function handleChange() {
    }

    function handleClick() {
        checkout.map((data) => {
            scheduleList.push(data.schedule)
            idCourseList.push(parseInt(data.idCourse))
        })

        console.log(scheduleList)
        console.log(idCourseList)
        const postData = {
            idInvoice: 0,
            invNum: "test",
            date: "2022-10-24",
            userId: idUser,
            schedule: scheduleList,
            course: idCourseList,
            totalCourse: 0,
            totalPrice: 0
        }

        console.log(postData)
        http.post('Invoice', postData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function currencyConvert(currency) {
        var data = currency.toString()
        if (data.length > 6) {
            data = data.substring(0, data.length - 6) + '.' + data.substring(data.length - 6, data.length - 3) + '.' + data.substring(data.length - 3, data.length)
        } else if (data.length > 3) {
            data = data.substring(0, data.length - 3) + '.' + data.substring(data.length - 3, data.length)
        }
        return (data)
    }

    function dateConvert(date) {
        var data = date.toString()
        data = data.substring(0, 10)
        data = data.substring(8, 10) + ' ' + monthConvert(data.substring(5, 7)) + ' ' + data.substring(0, 4)
        return (data)
    }

    function monthConvert(month) {
        const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December']

        var data = parseInt(month)
        return (monthList[data - 1])
    }

    const children = checkout.map((data, index) => {
        total += data.price
        return (
            <CheckoutCard
                data={data}
                deleteItem={() => deleteItem(index)}
                handleChange={() => handleChange(index)}
                isChecked={isCheck}
                index={index + 1}
                currencyConvert={currencyConvert}
                dateConvert={dateConvert}
            >
            </CheckoutCard>
        )
    });

    return (
        <div>
            <Header></Header>
            <FormGroup>
                <CheckboxLabel
                    id='selectAll'
                    handleChange={handleSelectAll}
                    isChekced={isCheckAll}
                    label={
                        <p
                            className='select_all_checkbox'
                        >
                            Pilih Semua
                        </p>
                    }>
                </CheckboxLabel>
                {children}
            </FormGroup>

            {/* ----TotalPrice---- */}
            <div className='footer'>
                <div className='totalprice'>
                    <p className='totalstyle'>TotalPrice</p>
                    <p className='pricestyle'>IDR {currencyConvert(total)}</p>
                </div>
                <Link to='succespurchase'>
                    <OrangeButton title='Pay Now' onClick={handleClick}></OrangeButton>
                </Link>
            </div>
        </div>
    );
};

export default Checkout