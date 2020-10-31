import React, { Component } from "react";
// import { Link } from "react-router-dom";

class CartIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      cartItems: [],
    };

    this.openCart = this.openCart.bind(this);
  }

  openCart() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  componentDidMount() {
    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    if (arrayCarrinho !== null) {
      this.setState({ cartItems: arrayCarrinho });
    }
  }

  render() {

    // const { results } = this.props.data;

    return (

      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>

        {
          this.state.cartItems.length > 0 && (
            <div>
              {this.state.cartItems.map((item) => {
                return (
                  <div key={item.id}>
                    <h1 data-testid="shopping-cart-product-name">{item.title}</h1>
                    <p data-testid="shopping-cart-product-quantity">
                      Quantidade: 1
                    </p>
                    <p>R${item.price}</p>
                  </div>
                );
              })}
              {/* <Link to="/">Ir para o Carrinho</Link> */}
            </div>
          )
        }
        {/* <button onClick={this.openCart}>
          <span>icon</span>
        </button> */}
        {/* {this.state.opened && (
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
        )} */}
      </div>
    );
  }
}

export default CartIcon;
