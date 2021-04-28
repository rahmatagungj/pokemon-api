import './App.css';
import React from "react";
import MediaCard from "./Components/Card";

const {useEffect,useState} = React;

function App() {
  const [datas,setDatas] = useState({})
  const [pokemons, setPokemons] = useState([])

  useEffect( async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=100").then(res => {
       if (res.status === 200) return res.json();
    }).then(resJson => {
      console.log(resJson);
      setPokemons([{data : resJson.results}])
      setDatas({...resJson})
    })
    return () => {
      console.log("cleaning up ...")
    }
  }, [])

  return (
    <div className="App">
      {
      pokemons.map((r,idx) => {
        console.log(r.data[idx].name);
      })}
    </div>
  );
}

export default App;
