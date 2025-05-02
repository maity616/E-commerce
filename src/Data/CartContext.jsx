import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (data) => {
    setCart((prev) => [...prev, data]);
    setCartCount(prev => prev + 1);
    console.log('cart item' + cart)
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, cartCount,addToCart, removeFromCart, clearCart, }}>
      {children}
    </CartContext.Provider>
  );
};