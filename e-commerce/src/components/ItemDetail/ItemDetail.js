import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {    // este es cuando se abre la card
  return (
    <div className='row'>
        <div className="col-md-4 offset-md-4">
        <img src={item.image} className='img-fliud' alt={item.name} />
        <h2>{item.nombre}</h2>
        <p>{item.description}</p>
        <p> $ {item.price}</p>
        <p>{item.stock}</p>
        </div>
        <div>
           <ItemCount stockItems={10}/> 
        </div>
    </div>
  )
}

export default ItemDetail
