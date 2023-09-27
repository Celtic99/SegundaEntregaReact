import React from 'react' 
import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import arrayProductos from '../JSON/array-Productos.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {     //prop
  
  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(()=> {
    const fetchData = async()=>{
      try{
        const data = await new Promise((resolve)=>{
          setTimeout( () => {
            resolve(id ? arrayProductos.filter(i => i.category === id) : arrayProductos)  // si me tiene que mostrar todos los productos o si me tiene que mostrar uno en especifico
          }, 5000);
        })
        setItem(data);
      }catch(error){   //por si hay algun error
        console.log('Error:', error);
      }
    }
    fetchData()
  }, [id])


  return (
    <div className='container'>
      <div className='row'>
        <ItemList items= {item} />
      </div>
      
    </div>
  )
}

export default ItemListContainer
