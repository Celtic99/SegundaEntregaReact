import {useState} from 'react'

const Estado = () => {
    const [contador,setContador] = useState(0); // o porq es el punto de partida

    const sumar = ()=> {
        setContador(contador +1);
    }

    const restar = ()=> {
        setContador(contador -1);
    }

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </div>
  )
}

export default Estado

