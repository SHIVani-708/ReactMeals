import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the shopping cart icon

export default function Header() {
  return (
    <div className="header">
      <div className="heading">ReactMeals</div>
      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span>Your Cart</span>
        <span>0</span>
      </div>
    </div>
  );
}
