import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/price';
import { Button } from './ui/Button';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            dispatch({
              type: 'UPDATE_QUANTITY',
              payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
            })
          }
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            dispatch({
              type: 'UPDATE_QUANTITY',
              payload: { id: item.id, quantity: item.quantity + 1 },
            })
          }
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
          className="ml-2"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};