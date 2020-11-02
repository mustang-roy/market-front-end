import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function CartIcon(props) {
  return (
    <div>
      <Link to="/cart" data-testid="shopping-cart-button">
        Cart
      </Link>
      {props.cartItems && <p data-testid="shopping-cart-size">{props.cartItems}</p>}
    </div>
  )
}

export default CartIcon