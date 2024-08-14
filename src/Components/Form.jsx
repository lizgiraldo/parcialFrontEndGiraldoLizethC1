import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.startsWith(" ") || color.length < 6) {
      setError(true);
      setSubmmited(false);
    } else {
      setError(false);
      setSubmmited(true);
    }
  };

  return (
<div>
    <form className="formStyleDos" onSubmit={handleSubmit} >    
    <label>Ingresa tu Nombre: </label>
    <input 
    type="text"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)} />

    <label>Ingresa tu color Favorito (formato HEX): </label>
    <input 
    type="text"
    value={color}
    onChange={(e) => setColor(e.target.value)} />
    
    <button className="botonEnviar" type="submit">Enviar</button>
    </form>
    {error && <p className="error">Por favor chequea que la información sea correcta</p>}
    {submitted && !error && <Card nombre={nombre} color={color}/>}
  </div>
  ) 
};

export default Form;
