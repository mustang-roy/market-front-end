import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function cartIcon(props) {

  const [cartValue, setCart] = useState('asdasdas')

  // useEffect(() => {
  //   const carrinho = JSON.parse(localStorage.carrinho)
  //   console.log(carrinho)
  // })

  return (
    <div>
      <Link to="/cart" data-testid="shopping-cart-button">
        Cart
      </Link>
      <p>{cartValue.length}</p>
    </div>

  )
}

export default cartIcon