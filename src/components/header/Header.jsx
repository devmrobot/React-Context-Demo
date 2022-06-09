import React from 'react'
import NavBar from '../navbar/NavBar';
import background from "../../assets/tent.jpg";
import './Header.scss';
import logo from '../../assets/camping.png';
import CartCard from '../cartcard/CartCard';
const Header = () => {
  return (
      <>
    <div
    className="Header"
    style={{ backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
          }}
    >
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