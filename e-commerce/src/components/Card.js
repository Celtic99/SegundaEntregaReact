import React from 'react'

const Card = ({img, name, price, description}) => {
  return (
    <div>
      <img src={img} alt="hola" />
      <h1>{name}</h1>
      <h3>{price}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
