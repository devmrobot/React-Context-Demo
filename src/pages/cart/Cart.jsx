import React from 'react'
import './Cart.scss';

const Cart = () => {
  let TotalPrice=0;

  return (
    <div className="Cart">
      <h2>Votre panier</h2>
      <div className="cartContent">
        <p>Votre panier est vide</p>
      </div>
    </div>
  )
}

export default Cart