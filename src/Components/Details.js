import React from 'react'
import Cards from "./Cards"

const {useState, useEffect} = React;

const Details = ({id}) => {
    const [results,setResults] = useState({})
    const [show,setShow] = useState(false)

    const fetchDetails = async (id) => {
        setShow(false)
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id+1}`).then(res => {
           if (res.status === 200) return res.json();
        }).then(resJson => {
          setResults({...resJson})
          setShow(true)
        })
      }

    useEffect(async () => {
        await fetchDetails(id)
        return () => {
            console.log("clean up details ..");
        }
    }, [id])

    return (
        <div>
            {show ? 
           <Cards images={results.sprites.front_default} name={results.name}/>
            : ""
            }
        </div>
    )
}

export default Details
