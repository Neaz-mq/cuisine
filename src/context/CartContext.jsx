// context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  // Derive total quantity count
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (item) => {
    const exists = cartItems.some(cartItem => cartItem.title === item.title);
    if (exists) return { success: false, message: 'Item already in cart' };

    const updated = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updated);
    return { success: true };
  };

  const increaseQty = (title) => {
    const updated = cartItems.map(item =>
      item.title === title ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const decreaseQty = (title) => {
    const updated = cartItems
      .map(item => {
        if (item.title === title) {
          const newQty = item.quantity - 1;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean); // remove nulls when quantity reaches 0
    setCartItems(updated);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context easily
export const useCart = () => useContext(CartContext);
