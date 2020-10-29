import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };

    this.openCart = this.openCart.bind(this);
  }

  openCart() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {

    const {results} = this.props.data;

    return (
      
      <div>
        <button onClick={this.openCart}>
          <span>icon</span>
        </button>
        {this.state.opened && (
          <div>
            <button onClick={this.openCart}>x</button>
            <h1>Carrinho de Compras</h1>
            {results.map((item) => {
              return (
                <div key={item.id}>
                  <h1>{item.title}</h1>
                  <p>Quantidade: {Math.floor(Math.random()*10)}</p>
                  <p>R${item.price}</p>
                </div>
              );
            })}
            <Link to="/">Ir para o Carrinho</Link>
          </div>
        )}
      </div>
    );
  }
}

export default CartIcon;
