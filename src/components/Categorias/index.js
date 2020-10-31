import React, { Component } from "react";
import "./style.css";
class Categorias extends Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <h1>Categorias</h1>
        <div className="category-list-items">
          {data.map((categoria) => {
            return (
              <div key={categoria.id} className='item-category'>
                <input
                  className="checkbox"
                  onClick={this.props.onSetCategories}
                  type="checkbox"
                  value={categoria.name}
                />
                <p className="text-category" data-testid="category">
                  {categoria.name}
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Categorias;
