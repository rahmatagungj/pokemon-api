import React from 'react'

const Cards = ({name,images}) => {
    return (
        <div>
            <img src={images} alt="" srcset=""/>
            <h2>{name}</h2>
        </div>
    )
}

export default Cards
