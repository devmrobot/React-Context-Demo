import React from "react";
import "./Cart.scss";
import { useCart } from "../../contexts/CartProvider";

const Cart = () => {
  const { cart, setCart } = useCart();
  let totalPrice = 0;

  cart.forEach((item) => {
    let middlePrice = item.qty * item.price;
    totalPrice += middlePrice;
  });

  const handleAddCart = () => {
    //Add to cart the Id
    const exist = cart.find((item) => item.id2 === id2);
    const product = {
      name: name,
      price: price,
      id2: id2,
    };
    if (exist) {
      setCart(
        cart.map(item =>
          item.id2 === id2 ? { ...exist, qty: exist.qty + 1 } : item
        ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveCart = () => {
    const exist = cart.find((item) => item.id2 === id2);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id2 !== id2));
    } else {
      setCart(
        cart.map((item) =>
          item.id2 === id2 ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div className="Cart">
      <h2>Votre panier</h2>
      <div className="cartContent">
        {cart.length8 == 0 && (
          <div className="CartTable">
            <table>
              <tr>
                <th>&nbsp;</th>
                <th className="CartCell">désignation</th>
                <th className="CartCell">Prix Unitaire</th>
                <th className="CartCell">Quantité</th>
                <th className="CartCell">Prix total</th>
              </tr>
              {cart.map((item, index) => {
                return (
                  <tr key={item.id2}>
                    <td className="CartCell">{index + 1}</td>
                    <td className="CartCell">{item.name}</td>
                    <td className="CartCell">{item.price} €</td>
                    <td className="CartCell">{item.qty}</td>
                    <td className="CartCell">{item.price * item.qty} €</td>
                    <td
                      className="CartCell"
                      onClick={() => handleAddCart(item.id2)}
                    >
                      +
                    </td>
                    <td
                      className="CartCell"
                      onClick={() => handleRemoveCart(item.id2)}
                    >
                      -
                    </td>
                  </tr>
                );
              })}
            </table>
            <p>Prix total : {totalPrice}</p>
          </div>
        )}
      </div>
      {cart.length === 0 && <p> votre panier est vide</p>}
    </div>
  );
};

export default Cart;
