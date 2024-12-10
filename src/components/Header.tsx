import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { calculateItemCount } from '../utils/cart';

export const Header: React.FC = () => {
  const { state } = useCart();
  const itemCount = calculateItemCount(state.items);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            TechStore
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};