import React from 'react'
import { useCart } from '../../contexts/CartProvider';

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
            <th>Désignation</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Prix total</th>
          </tr>
        {cart.map((item,index)=>{
          return(
            <tr>
              <td>{item.name}</td>
                <td>{item.price} €</td> 
                <td>{item.qty}</td>
                <td>{item.price*item.qty} €</td> 
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