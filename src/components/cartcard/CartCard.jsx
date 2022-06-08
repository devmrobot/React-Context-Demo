import React from 'react'
import { useCart } from '../../contexts/CartProvider';

const CartCard = () => {
  const {cart}=useCart();
  let totalCartItem=0;
  cart.forEach((item)=>{
      totalCartItem+=item.qty;
  });

  return (
    <div>contenu du panier : {totalCartItem}</div>
  )
}

export default CartCard