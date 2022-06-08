import React from 'react'
import { useCart } from '../../contexts/CartProvider';

const User = () => {
  const {cart}=useCart();
  let totalItem=0;
  let totalPrice=0;
  cart.forEach((item)=>{
    totalItem+=item.qty;
    totalPrice+=item.qty*item.price;
  })

  return (
    <div className="User">
        <h2>Compte Utilisateur</h2>
        Votre panier comporte {totalItem} éléments pour un montant de {totalPrice} euros.
    </div>
  )
}

export default User