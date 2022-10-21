import React from 'react'

const CurrencyConvert = (props) => {
    var data = props.value.toString()
    if (data.length > 3){
        data = data.substring(0,3) + '.' + data.substring(3, data.length)
    }
    return (
        <div>{data}</div>
    )
}

export default CurrencyConvert