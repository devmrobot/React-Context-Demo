import React from 'react'
import NavBar from '../navbar/NavBar';

import './Header.scss';
import logo from '../../assets/camping.png';
import CartCard from '../cartcard/CartCard';
const Header = () => {
  return (
      <>
    <div className="Header">
        <div className="LogoContainer">
            <img src={logo} alt="logo" />
            <p className='LogoTitle'>Au campeur fou !</p>
        </div>
        <h1>Au campeur Fou !</h1>
        <CartCard />           
    </div>
    <NavBar />
    </>
  )
}

export default Header