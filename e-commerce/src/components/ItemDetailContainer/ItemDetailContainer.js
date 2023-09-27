import React from 'react'
import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import arrayProductos from '../JSON/array-Productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();
  
    useEffect(()=> {
    const promesa= new Promise((resolve) => {
        setTimeout(() => {
        resolve(arrayProductos.find(item => item.id === parseInt(id)));  // paseInt sirve para que reconozca la cadena de texto 
    }, 2000)
    })
    promesa.then((data)=>{
        setItem(data)
    })
    }, [id])

  return (
    <div className='container'>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
