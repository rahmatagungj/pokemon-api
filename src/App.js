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

  useEffect(() => {
    setLoading(true)
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100").then(res => {
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
          <React.Fragment key={idx+1}>
            <Route path="/" exact>
              <LINK to={"/" + (idx +1)}>{r.name}</LINK>  
            </Route>
              <Route path={"/" + (idx +1)} exact>
                <Details id={idx+1}/>
              </Route>
            </React.Fragment>
          )) 
        : <H3>Memuat Data ...</H3>
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
margin: 10px;
&:hover {
  transform: scale(1.08)
}
`

const H3 = styled.h3`
 color: white;
 font-size: 1.2em;
 display: flex;
 flex-direction: column;
 justify-content: center;
 text-align: center;
 align-items: center;
 margin: 0px auto;
 height: 80vh;
`

export default App;
