import React from 'react'

const Card = ({nombre, color}) => {
  return (
    <div className='cardStyle'>
      
      <h3>Hola {nombre}!</h3>
      <p>Sabemos que tu color favorito es: </p>
      <div className='resultadoColor'>{color}</div>
    </div>
  )
}

export default Card