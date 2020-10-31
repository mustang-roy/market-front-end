import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

function ShoppingDetails({ item }) {
  const { title, price, id } = item;

  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(item.total);
  // const [total, setTotal] = useState(price * quantity);

  const { pathname: page } = window.location;

  // const increaseQuantity = () => {
  //   // setQuantity(quantity + 1)
  //   const stringCarrinho = localStorage.getItem('carrinho');
  //   const arrayCarrinho = JSON.parse(stringCarrinho);
  //   const produdo = arrayCarrinho.find(item => id == item.id)
  //   produdo.quantity += 1
  //   localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
  // }
  // const decreaseQuantity = () => {
    
  //   const stringCarrinho = localStorage.getItem('carrinho');
  //   const arrayCarrinho = JSON.parse(stringCarrinho);
  //   const produdo = arrayCarrinho.find(item => id == item.id)
  //   produdo.quantity -= 1
  //   localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
  // };

  const changeQuantity = (event) => {
    
    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);
    const produdo = arrayCarrinho.find(item => id == item.id)
    if (event.target.value === '+') {
      produdo.quantity += 1
      produdo.total = produdo.quantity*produdo.price
      setQuantity(quantity + 1)
      setTotal(produdo.quantity*produdo.price)
      console.log('+')
    } else {
      produdo.quantity -= 1
      produdo.total = produdo.quantity*produdo.price
      setQuantity(quantity - 1)
      setTotal(produdo.quantity*produdo.price)
      console.log(event.target.value)

    }
    localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
  };
  // const decreaseQuantity = () => quantity > 0 && setQuantity(quantity - 1);



  // const addToCart = () => {
  //   const stringCarrinho = localStorage.getItem('carrinho');
  //   const arrayCarrinho = JSON.parse(stringCarrinho);

  //   if (stringCarrinho === null) {
  //     localStorage.setItem('carrinho', JSON.stringify([item]));
  //   } else {
  //     arrayCarrinho.push(item);
  //     localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
  //   }
  // };

  const addToCart = () => {
    const {id, title, thumbnail,price} = item;
    const pattern = {
      id,
      title,
      thumbnail,
      price,
      total: price,
      quantity: 1,
    }

    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    if (!stringCarrinho) {
      localStorage.setItem('carrinho', JSON.stringify([pattern]));
    } else {

      const produdo = arrayCarrinho.find(item => id == item.id)

      if (produdo) {
        produdo.quantity += 1
        produdo.total = produdo.quantity*produdo.price
        localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
      } else {
        arrayCarrinho.push(pattern);
        localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
      }
    }
  }

  const increaseButton = <input value='+' type='button' data-testid="product-increase-quantity" onClick={changeQuantity}/>;
  const decreaseButton = <input value='-' type='button'data-testid="product-decrease-quantity" onClick={changeQuantity}/>

  

  const addToCartButton = (
    <button onClick={addToCart}
      data-testid="product-detail-add-to-cart">
      Adicionar
    </button>
  );

  // useEffect(() => {
  //   setTotal(price * quantity);
  // }, [price, quantity]);

  return (
    <Wrapper>
      <h1 data-testid="shopping-cart-product-name">{title}</h1>

      {/* {page === '/cart' && decreaseButton} */}
      {/* {page === '/cart' && (()=> changeQuantity(0))} */}
      {page === '/cart' && decreaseButton}

      <div data-testid="shopping-cart-product-quantity">{quantity}</div>

      {page === '/cart' && increaseButton}
      {/* {page === '/cart' && increaseButton} */}

      <div data-testid="shopping-cart-product-price">R$ {price}</div>
      <div>R$ {total}</div>
      {/* <div>R$ {total.toFixed(2)}</div> */}

      {page !== '/cart' && addToCartButton}
    </Wrapper>
  );
}

ShoppingDetails.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShoppingDetails;
