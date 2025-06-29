import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem('cartCount');
    return stored ? parseInt(stored, 10) : 0;
  });

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  // Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
