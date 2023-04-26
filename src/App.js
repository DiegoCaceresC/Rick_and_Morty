import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Favorites from "./components/Favorites"
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "Model101@";

  function login(inputs) {
    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      console.log("entroallogin");
      setAccess(true);
      navigate("/home");
      return alert("Ok")
    } 
    // else if (inputs.password !== PASSWORD || inputs.email !== EMAIL) {
    //   return alert ("No existe ese usuario");
    // }
  }

  function logout() {
    console.log("tedeslogeaste");
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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
      console.log(params);
      return oldChars.filter((ch) => ch.id !== params);
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
      {/* {location.pathname === "/" ? null : (
        <NavBar onSearch={onSearch} />
      )} */}
      {location.pathname === "/" ? null : (
        <NavBar logout={logout} onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favorites" element={<Favorites onClose={onClose} />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
