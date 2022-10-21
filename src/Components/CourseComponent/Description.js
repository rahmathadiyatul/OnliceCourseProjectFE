import React from 'react'
import './Description.css'

const Description = (props) => {
    const { title, desc} = props

    return (
        <div className='desc'>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Description