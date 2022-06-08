import React from 'react'
import Card from '../../components/cards/Card';
import './Products.scss';

import datas from '../../utils/data';

const Products = () => {
  return (
    <div className="Products">
       <h2>Nos produits</h2>
       <div className="ProductContainer">
         { datas.map((item)=>{
           return <Card
              key={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              picture={item.picture}
              id={item.id}
           />
         } )}
       </div>
    </div>
  )
}

export default Products