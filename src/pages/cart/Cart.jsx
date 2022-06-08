import React from 'react'
import { useCart } from '../../contexts/CartProvider';
import './Cart.scss';

const Cart = () => {
  const {cart}=useCart();

  let TotalPrice=0;

  cart.forEach((item)=>{
    let middlePrice=item.qty*item.price;
    TotalPrice+=middlePrice;
  });

  return (
    <div className="Cart">
      <h1>Votre panier</h1>
      <div className="cartContent">
        {cart.length!==0&&
        <div className="CartTable">
        <table>
          <tr>
            <th>&nbsp;</th>
            <th className='CartCell'>Désignation</th>
            <th className='CartCell'>Prix unitaire</th>
            <th className='CartCell'>Quantité</th>
            <th className='CartCell'>Prix total</th>
          </tr>
        {cart.map((item,index)=>{
          return(
            <tr key={item.id}>
              <td>{index+1}</td>
              <td className='CartCell'>{item.name}</td>
                <td className='CartCell'>{item.price} €</td> 
                <td className='CartCell'>{item.qty}</td>
                <td className='CartCell'>{item.price*item.qty} €</td> 
            </tr>  
          )
        })}
        </table>
        <p>Prix total : {TotalPrice} €</p>
        </div>}
        {cart.length==0&&<p>Votre panier est vide</p>}
      </div>
    </div>
  )
}

export default Cart