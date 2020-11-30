import React, { createContext, useReducer } from "react";
import { CartReducer } from "../components/CartReducer";

export const CartContext = createContext();

const initialState = {
  shoppingCart: [],
  totalPrice: 0,
  qty: 0,
};

function CartProvider(props) {
  const [cart, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
