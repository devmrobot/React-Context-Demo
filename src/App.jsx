import { Route, Routes } from "react-router-dom";

import CartProvider from "./contexts/CartProvider";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import NavBar from "./components/navbar/NavBar";
import User from "./pages/user/User";

import './App.css';

function App() {
  return (
    <div className="App">
      <CartProvider >
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/produits" element={<Products />}/>
        <Route path="/compte" element={<User />}/>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
