import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import http from '../Axios/Config'
import DetailTable from '../Components/InvoiceComponent/DetailTable'
import Header from '../Header'
import './DetailInvoice.css'
import Footer from '../Footer'

const DetailInvoice = () => {
    const headerInvoiceTable = ['No', 'Course Name', 'Type', 'Schedule', 'Price']
    const [dataInvoice, setDataInvoice] = useState([])
    var { id } = useParams()

    useEffect(() => {
        getDataInvoice()
    }, [])

    const getDataInvoice = () => {
        http.get('/Invoice/detail_invoice/' + id + ':int')
            .then((res) => {
                setDataInvoice(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
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

    return (
        <div >
            <Header></Header>
            <div className='detail_invoice'>
                <div className='letterhead'>
                    <p>
                        <Link to='/landingpage'>Home {'>'}</Link>
                        <Link to='/invoice'> Invoice {'>'}</Link>
                        <Link to=''> Details Invoice</Link>
                    </p>
                    <h1>
                        Details Invoice
                    </h1>
                    {
                        dataInvoice.map((data, index) => {
                            if (index === 0) {
                                return (
                                    <div className='info_table'>
                                        <div className='no_date'>
                                            <div>
                                                <h5>No. Invoice:</h5>
                                                <h5>Date:</h5>
                                            </div>

                                            <div>
                                                <h5>{data.invNum}</h5>
                                                <h5>{dateConvert(data.date)}</h5>
                                            </div>
                                        </div>

                                        <div className='total'>
                                            <h4>Total Price</h4>
                                            <h4>IDR {currencyConvert(data.totalPrice)}</h4>
                                        </div>
                                    </div>
                                )
                            }
                        }

                        )}
                </div>

                <DetailTable
                    headerList={headerInvoiceTable}
                    dataList={dataInvoice}
                    id={dataInvoice.idInvoice}
                    CurrencyConvert={currencyConvert}
                    dateConvert={dateConvert}
                    monthConvert={monthConvert}>
                </DetailTable>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default DetailInvoice




