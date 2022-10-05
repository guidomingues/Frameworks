import './App.css';
import React, { useState } from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import VerNome from './VerNome';

export default function App() {
  function displayData() {
    const name = document.getElementById("name").value;
    console.log(name);
    localStorage.setItem("name", name);
    alert(`Um nome foi enviado: ${name}`);
  }
  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        displayData();
      }}>
        <label>
          Nome:&nbsp;
          <input type="text" id="name" name="name" />
        </label>&nbsp;
        <input type="submit" value="Enviar" required/>
        &nbsp;
        <input type="reset" value="Limpar" />
      </form>
      <br/>
      <Link to="/VerNome">VerNome</Link>
    </div>
  );
}
