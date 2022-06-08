import React from 'react'
import { useCart } from '../../contexts/CartProvider';
import './CartCard.scss';
import cartIcon from '../../assets/LogoCart.png';
const CartCard = () => {
  const {cart}=useCart();
  let totalCartItem=0;

  cart.forEach((item)=>{
      totalCartItem+=item.qty;
  });
  if (totalCartItem<10){
    totalCartItem='0'+totalCartItem;
  }

  return (
    <div className="CartCard">
      <div className="CartLogoContainer">
        <img src={cartIcon} alt="panier" />
      </div>
      <p className='TotalItems'>{totalCartItem}</p>
    </div>
  )
}

export default CartCard