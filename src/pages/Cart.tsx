import React from 'react';
import { CartItem } from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { calculateTotal } from '../utils/cart';
import { formatPrice } from '../utils/price';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Cart: React.FC = () => {
  const { state } = useCart();
  const total = calculateTotal(state.items);

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
      <Card className="p-6">
        {state.items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold">{formatPrice(total)}</span>
          </div>
          <Button size="lg" className="w-full mt-4">
            Proceed to Checkout
          </Button>
        </div>
      </Card>
    </div>
  );
};