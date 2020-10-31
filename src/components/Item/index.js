import React, { Component } from 'react';
import './style.css'

class Item extends Component {
    constructor(props) {
        super(props);
        this.onClickComprar = this.onClickComprar.bind(this);
        this.showAe = this.showAe.bind(this);
    }
    
    onClickComprar() {
        const stringCarrinho = localStorage.getItem('carrinho')
        const arrayCarrinho = JSON.parse(stringCarrinho)

       


        if (!stringCarrinho) {
            localStorage.setItem('carrinho', JSON.stringify([this.props.data]))
        } else {
            arrayCarrinho.push(this.props.data)
            console.log(arrayCarrinho)
            localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho))
        }

        //     localStorage.setItem('carrinho', arrayCarrinho)
        
        // ? localStorage.setItem('carrinho', Math.floor(Math.random()*10))
        // : localStorage.setItem('carrinho', [arrayCarrinho, Math.floor(Math.random()*10)])

      }
    
    showAe(){
        const arrayCarrinho = localStorage.getItem('carrinho')
        console.log(typeof arrayCarrinho)
        console.log(arrayCarrinho.split(','))
        console.log(typeof arrayCarrinho.split(','))
    }

    render() { 
        const item = this.props.data;

        return (
            <div className="item" data-testid="product">
              <p>{item.title}</p>
              <img className="img-item" src={item.thumbnail} alt={item.title}/>
              <p>R${item.price}</p>
              <p>{item.shipping.free_shipping && 'Free'}</p>
              <button onClick={this.onClickComprar}>Adicionar</button>
              <button onClick={this.showAe}>Mostrae</button>
            </div>
        );
    }
}
 
export default Item;