import React, { Component } from 'react';

class Categorias extends Component {
    
    render() { 
        const {data} = this.props;


        return ( 
            <div>
                <h1>Categorias</h1>
                {data.map(categoria => { return (
                <div key={categoria.id}>
                    <input onClick={this.props.onSetCategories}type="checkbox" value={categoria.name}/>
                    <p data-testid="category">{categoria.name}</p>
                </div>
                )})}
            </div>
         );
    }
}
 
export default Categorias;