import React from 'react'

const User = () => {
  let totalItem=0;
  let totalPrice=0;

  return (
    <div className="User">
        <h2>Compte Utilisateur</h2>
        Votre panier comporte {totalItem} éléments pour un montant de {totalPrice} euros.
    </div>
  )
}

export default User