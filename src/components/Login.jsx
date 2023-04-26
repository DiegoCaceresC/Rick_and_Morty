import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css" 
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;

export default function Login({login}) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });


  function validate(inputs) {
    const errors = {};
    if (!inputs.email) {
      errors.email = "Debe haber un email";
    } else if (!inputs.password) {
      errors.password = "Debe haber un password";
    } else if (!regexEmail.test(inputs.email)) {
      errors.email = "Debe ser un email valido";
    } else if (!regexPassword.test(inputs.password)) {
      errors.password = "Debe ser un password valido";
    }
    return errors;
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }


  function handleSubmit(e) {
    e.preventDefault()
    const aux = Object.keys(errors)
    if (aux.length === 0){
      setInputs({
        email:"",
        password:""
      })
      setErrors({
        email:"",
        password:""
      })
      login(inputs)
      // return alert("ok")
      // login(inputs)
    }
    console.log(aux.length);
    // return alert("debe llenar todos los campos")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="on">
        <label>Email: </label>
        <input
          name="email"
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && "warning"}
          placeholder="Escribe tu email..."
        ></input>
        <p className="danger">{errors.email}</p>
        <label>Password: </label>
        <input
          name="password"
          value={inputs.password}
          onChange={handleChange}
          className={errors.password && "warning"}
          placeholder="Escribe tu password..."
        ></input>
        <p className="danger">{errors.password}</p>
        {/* {Object.keys(errors).length === 0 ? (
          <Link to="/home">
            <button type="submit">Ingresar</button>
          </Link>
        ) : null} */}
        {/* <Link to="/home">
            <button type="submit">Ingresar</button>
          </Link> */}
            <button type="submit">Ingresar</button>

      </form>
    </div>
  );
}
