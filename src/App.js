import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from "./Components/Details";
import styled from "styled-components";

const {useEffect,useState} = React;

function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( async () => {
    setLoading(true)
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=100").then(res => {
       if (res.status === 200) return res.json();
    }).then(resJson => {
      setPokemons(resJson.results)
      setLoading(false)
    })
    return () => {
      console.log("cleaning up ...")
    }
  }, [])

  return (
    <>
    <Router>
    <Switch>
    <Apps>
      {
        !loading ?
        pokemons.map((r,idx) => (
          <H2 key={idx} computedMatch={undefined}>
            <LINK to={"/" + idx}>{r.name}</LINK>  
            <Route path={"/" + idx}>
              <Details id={idx}/>
            </Route>
          </H2>
          )) 
        : "loading ..."
      }
      </Apps>
      </Switch>
      </Router>
    </>
  );
}

const Apps = styled.div`
display: flex;
flex-wrap: wrap;
text-decoration: none;
`

const LINK = styled(Link)`
text-decoration: none;
color: #575757;
background-color: white;
padding: 10px;
border-radius: 10px;
transition: all 0.2s ease;
&:hover {
  transform: scale(2)
}
`

const H2 = styled.h2`
padding: 10px;
`

export default App;
