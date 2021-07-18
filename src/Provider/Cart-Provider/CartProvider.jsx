import React, { useState, useEffect, useContext, createContext } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartItemsCountTotal,
} from "./cartUtils-Provider";

export const CartContext = createContext({
  hidden: true,
  toggleCartHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  total: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));
  const toggleCartHidden = () => setHidden(!hidden);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setTotal(getCartItemsCountTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleCartHidden,
        cartItems,
        addItem,
        removeItem,
        cartItemsCount,
        clearItemFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
