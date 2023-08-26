import React from 'react';
import CartContext from './CartContext';

export default function CartProvide(props) {
    const addItemToCartHandler = item => {};
    const removeItemToCartHandler = item => {};
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }
  return (
    <div>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </div>
  )
}
