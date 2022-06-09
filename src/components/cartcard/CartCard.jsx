import React from 'react'
import './CartCard.scss';
import cartIcon from '../../assets/LogoCart.png';

const CartCard = () => {
  let totalCartItem=0;

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