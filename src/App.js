import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from "./Components/Details";


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
    <div className="App">
      {
        !loading ?
        pokemons.map((r,idx) => (
          <h2 key={idx} computedMatch={undefined}>
            <Link to={"/" + idx}>{r.name}</Link>  
            <Route path={"/" + idx}>
              <Details id={idx}/>
            </Route>
          </h2>
          )) 
        : "loading ..."
      }
      </div>
      </Switch>
      </Router>
    </>
  );
}

export default App;
