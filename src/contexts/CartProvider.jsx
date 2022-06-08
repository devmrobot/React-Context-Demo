import {useState, useEffect,createContext,useContext} from 'react';
const CartContext = createContext(null);

const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    return (
        <CartContext.provider value={{cart,setCart}}>
            {children}
        </CartContext.provider>
    )
}
export const useCart=()=>useContext(CartContext);
export default CartProvider;