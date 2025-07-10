import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import { router } from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Suspense fallback={<div className="spinner" aria-label="Loading"></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </CartProvider>
  </StrictMode>
);
