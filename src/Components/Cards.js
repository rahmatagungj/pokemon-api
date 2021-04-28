import React from 'react'
import styled from 'styled-components'
const Cards = ({name,images}) => {
    return (
        <Smooth>
            <img src={images} alt={name}/>
        </Smooth>
    )
}

const Smooth = styled.div`
transition: all 0.5s ease;
`
export default Cards
