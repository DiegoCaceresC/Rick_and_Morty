import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar"; 
import axios from axios;

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    //    if (data.name) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //    } else {
    //       window.alert('¡No hay personajes con este ID!');
    //    }
    // });
 }

  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
