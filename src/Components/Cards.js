import React from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
const Cards = ({name,images,weight}) => {
    return (
        <Smooth>
            <Helmet>
            <title>Pokemon {name} - Rahmat Agung Julians</title>
            </Helmet>
            <IMG src={images} alt={name}/>
            <H2>{name}</H2>
            <p>Berat : {weight} kg</p>
        </Smooth>
    )
}

const Smooth = styled.div`
transition: all 0.5s ease;
background: white;
padding: 10px;
border-radius: 10px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
`
const H2 = styled.h2`
text-transform: capitalize;
`
const IMG = styled.img`
width: 200px;
`
export default Cards
