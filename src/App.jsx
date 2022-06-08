import { Route, Routes } from "react-router-dom";

import CartProvider from "./contexts/CartProvider";

import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";

import './App.css';
import Products from "./pages/products/Products";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      Hello
      <CartProvider >
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/cart" element={<Cart />} />
        <Route path="produits" element={<Products />}/>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
