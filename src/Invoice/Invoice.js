import { Table } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import http from '../Axios/Config'
import InvoiceTable from '../Components/InvoiceComponent/InvoiceTable'
import Header from '../Header'
import './Invoice.css'
import Footer from '../Footer'

const Invoice = () => {
    const headerInvoiceTable = ['No', 'No. Invoice', 'Date', 'Total Course', 'Total Price', 'Action']
    const [dataInvoice, setDataInvoice] = useState([])
    const userId = localStorage.getItem('user')

    useEffect(() => {
        getDataCourse()
    }, [])

    const getDataCourse = () => {
        http.get('/Invoice/invoice/' + userId + ':int')
            .then((res) => {
                console.log(res.data)
                setDataInvoice(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    function CurrencyConvert(currency) {
        var data = currency.toString()
        if (data.length > 6) {
            data = data.substring(0, 3) + '.' + data.substring(3, 6) + '.' + data.substring(6, data.length)
        } else if (data.length > 3) {
            data = data.substring(0, 3) + '.' + data.substring(3, data.length)
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

    return (
        <div>
            <Header></Header>
            <div className='invoice'>
                <p>
                    <Link to='/'>Home {'>'}</Link>
                    <Link to='/invoice'> Invoice</Link>
                </p>
                <h1>
                    Menu Invoice
                </h1>
                <InvoiceTable
                    headerList={headerInvoiceTable}
                    dataList={dataInvoice}
                    id={dataInvoice.idInvoice}
                    CurrencyConvert={CurrencyConvert}
                    dateConvert={dateConvert}>
                </InvoiceTable>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Invoice