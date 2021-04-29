import React from 'react'
import Cards from "./Cards"
import styled from 'styled-components'
const {useState, useEffect} = React;


const Details = ({id}) => {
    const [results,setResults] = useState({})
    const [show,setShow] = useState(false)

    const fetchDetails = async (id) => {
        setShow(false)
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
           if (res.status === 200) return res.json();
        }).then(resJson => {
          setResults({...resJson})
          setShow(true)
        })
      }

    useEffect(() => {
        fetchDetails(id)
        return () => {
            console.log("clean up details ..");
        }
    }, [id])

    return (
        <>
        <Center>
            {show ? 
           <Cards weight={results.weight} images={results.sprites.front_default} name={results.name}/>
            : <H3>Memuat Data ...</H3>
            }
        </Center>
        </>
    )
}

const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto auto;
height: 80vh;
`

const H3 = styled.h3`
 color: white;
 font-size: 1.2em;
`
export default Details
