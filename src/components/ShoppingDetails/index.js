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

  const increaseButton = <button onClick={increaseQuantity}>+</button>;
  const decreaseButton = <button onClick={decreaseQuantity}>-</button>;

  useEffect(() => {
    setTotal(price * quantity)
  }, [price, quantity]);

  return (
    <Wrapper>
      <div>{title}</div>

      {page === 'cart' && increaseButton}

      <div>{quantity}</div>

      {page === 'cart' && decreaseButton}

      <div>R$ {price}</div>
      <div>R$ {total}</div>
    </Wrapper>
  );
}

ShoppingDetails.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoppingDetails;
