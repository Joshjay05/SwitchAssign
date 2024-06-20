'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeFromCart, updateQuantity } from '@/cartSlice';
import { Product } from '@/constant';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleContinueShopping = () => {
    // Implement navigation to the product list page
  };

  const handleProceedToCheckout = () => {
    // Implement navigation to the checkout page
  };

  const cartItems = Object.values(cart);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item: Product & { quantity: number }) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                      className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleContinueShopping}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Continue Shopping
            </button>
            <button
              onClick={handleProceedToCheckout}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              disabled={cartItems.some((item: Product & { quantity: number }) => item.quantity < item.minimumOrderQuantity)}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
