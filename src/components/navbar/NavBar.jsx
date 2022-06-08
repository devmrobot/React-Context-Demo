import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul className="NavList">
        <li className="NavItem"><Link to="/" className='NavbarLink'>Accueil</Link> </li>
        <li className="NavItem"><Link to="/produits" className='NavbarLink'>Produits</Link> </li>
        <li className="NavItem"><Link to="/compte" className='NavbarLink'>Votre compte</Link> </li>
        <li className="NavItem"><Link to="/cart" className='NavbarLink'>Votre panier</Link> </li>
      </ul>
    </nav>
    
  )
}

export default NavBar