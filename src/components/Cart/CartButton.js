import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import the shopping cart icon
import './CartButton.css';

export default function CartButton() {
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span>Your Cart</span>
      <span id="count">0</span>
    </div>
  );
}
