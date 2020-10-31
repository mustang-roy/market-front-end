import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

function ShoppingDetails({ item }) {
  const { title, price } = item;

  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(price * quantity);

  const { pathname: page } = window.location;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 0 && setQuantity(quantity - 1);

  const addToCart = () => {
    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    if (stringCarrinho === null) {
      localStorage.setItem('carrinho', JSON.stringify([item]));
    } else {
      arrayCarrinho.push(item);
      localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
    }
  };

  const increaseButton = <button onClick={increaseQuantity}>+</button>;
  const decreaseButton = <button onClick={decreaseQuantity}>-</button>;

  const addToCartButton = (
    <button onClick={addToCart}
      data-testid="product-detail-add-to-cart">
      Adicionar
    </button>
  );

  useEffect(() => {
    setTotal(price * quantity);
  }, [price, quantity]);

  return (
    <Wrapper>
      <div>{title}</div>

      {page === 'cart' && increaseButton}

      <div>{quantity}</div>

      {page === 'cart' && decreaseButton}

      <div>R$ {price}</div>
      <div>R$ {total}</div>

      {page !== 'cart' && addToCartButton}
    </Wrapper>
  );
}

ShoppingDetails.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShoppingDetails;
