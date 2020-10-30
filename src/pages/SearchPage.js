import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Categorias from "../components/Categorias";
import categoriasData from "../__mocks__/categories"
import OrderItems from "../components/OrderItems";
import Cart from "../components/Cart";
import data from "../__mocks__/query";
import Item from "../components/Item";
import dataSearch from "../__mocks__/query"
import {getCategories, getProductsFromCategoryAndQuery} from "../services/api"

class Searchpage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sort: false,
      categories: []
     }

     this.onSortToggle = this.onSortToggle.bind(this);
     this.onSetCategories = this.onSetCategories.bind(this);
  }

  onSortToggle(event) {
    this.setState({sort: event.target.value});
  }

  onSetCategories(event) {
    const {categories} = this.state;
    const checkbox = event.target.value

    categories.includes(checkbox)
    ? this.setState(prevState => ({ categories:[...prevState.categories.filter(category => category !== checkbox)] }))
    : this.setState(prevState => ({ categories: [...prevState.categories, checkbox]}))
  }

  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma
      categoria.</h1>
        <Categorias data={categoriasData} onSetCategories={this.onSetCategories}/>
        <SearchBar
          searchText={this.props.searchText}
          onSearchData={this.props.onSearchData}
        />
        <OrderItems onSortToggle={this.onSortToggle} value={this.state.sort}/>
        <Cart data={data} />
        <div>

          {dataSearch.results.map(item => <Item data={item} key={item.id} onClickComprar={this.onClickComprar}/>)}
        </div>
      </div>
    );
  }
}


export default Searchpage;
