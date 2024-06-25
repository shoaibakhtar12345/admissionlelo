import React from 'react'
import './Title.css'

const Title = ({ Title, SUbTitle }) => {
    return (
        <div className='title-section'>
            <p>{SUbTitle}</p>
            <h2>{Title}</h2>
        </div>
    )
}

export default Title
