import { ShoppingCart } from 'lucide-react';
import useCart from '../hooks/useCart';

const CartIcon = () => {
  const { cartCount } = useCart();

  return (
    <div className="relative ml-6">
      <a href="/carts">
        <div className="relative w-9 h-9 rounded-full bg-white border border-[#FF4C15] flex items-center justify-center shadow-md transition duration-200 hover:scale-105">
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-[#FF4C15]" strokeWidth={2.2} />
          <div className="absolute -top-1.5 -right-1.5 bg-[#FF4C15] text-white text-[10px] md:text-[11px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
            {cartCount}
          </div>
        </div>
      </a>
    </div>
  );
};

export default CartIcon;
