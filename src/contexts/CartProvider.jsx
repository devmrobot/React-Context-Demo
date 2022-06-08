import {useState, useEffect,createContext,useContext} from 'react';
const CartContext = createContext(null);

const CartProvider=({children})=>{

}
export const useCart=()=>useContext(CartContext);
export default CartProvider;