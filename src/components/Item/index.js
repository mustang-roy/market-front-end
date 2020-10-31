import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css'
import Button from '../Button';

class Item extends Component {
  constructor(props) {
    super(props);

    this.onClickComprar = this.onClickComprar.bind(this);
  }

  onClickComprar() {
    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    if (!stringCarrinho) {
      localStorage.setItem('carrinho', JSON.stringify([this.props.data]));
    } else {
      arrayCarrinho.push(this.props.data)
      localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
    }
  }

  render() {
    const item = this.props.data;

    return (
      <div className="item" data-testid="product">
        <p>{item.title}</p>
        <img className="img-item" src={item.thumbnail} alt={item.title} />
        <p>R${item.price}</p>
        <p>{item.shipping.free_shipping && 'Free'}</p>
        <button data-testid="product-add-to-cart" onClick={this.onClickComprar}>Adicionar</button>
        <Button
          as={Link}
          to={{
            pathname: '/detail-page',
            state: item,
          }}
          data-testid="product-detail-link">
          Detalhes
              </Button>
      </div>
    );
  }
}

export default Item;