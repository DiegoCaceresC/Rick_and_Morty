import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe");
          } else {
            setCharacters((oldChars) => {
              console.log([...oldChars, data]);
              return [...oldChars, data];
            });
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(params) {
    setCharacters((oldChars) => {
      console.log(params)
      return oldChars.filter((ch)=>ch.id !== params);
    });
    // setCharacters((oldChars) => {
    //   return oldChars.map((ch) => {
    //     console.log(id)
    //     return ch
    //   });
    // });
  }

  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;
