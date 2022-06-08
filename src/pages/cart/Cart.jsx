import React from 'react'
import { useCart } from '../../contexts/CartProvider';

const Cart = () => {
  const {cart}=useCart();
  return (
    <div className="Cart">
      <h1>Votre panier</h1>
      <div className="cartContent">
        {cart.map((item,index)=>{
          return(
            <p
              key={index}>
                {item.name} - {item.price} - {item.qty}
              </p>
          )
        })}
      </div>
    </div>
  )
}

export default Cart