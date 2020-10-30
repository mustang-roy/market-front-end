import React, { Component } from "react";
import { Link } from 'react-router-dom';

import SearchBar from "../components/SearchBar";
import Categorias from "../components/Categorias";
import Button from '../components/Button';
import * as API from "../services/api"
// import categoriasData from "../__mocks__/categories"
// // import OrderItems from "../components/OrderItems";
// // import Cart from "../components/Cart";
// // import data from "../__mocks__/query";
// // import Item from "../components/Item";
// // import dataSearch from "../__mocks__/query"

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCategories: [],
    }

    //  this.onSortToggle = this.onSortToggle.bind(this);
    //  this.onSetCategories = this.onSetCategories.bind(this);
  }

  // onSortToggle(event) {
  //   this.setState({sort: event.target.value});
  // }

  // onSetCategories(event) {
  //   const {categories} = this.state;
  //   const checkbox = event.target.value

  //   categories.includes(checkbox)
  //   ? this.setState(prevState => ({ categories:[...prevState.categories.filter(category => category !== checkbox)] }))
  //   : this.setState(prevState => ({ categories: [...prevState.categories, checkbox]}))
  // }

  componentDidMount() {
    API.getCategories().
      then((result) => this.setState({ listCategories: result }))
  }

  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma
      categoria.</h1>
        <Categorias data={this.state.listCategories} />
        <SearchBar
          searchText={this.props.searchText}
          onSearchData={this.props.onSearchData}
        />
        {/* <OrderItems onSortToggle={this.onSortToggle} value={this.state.sort}/>
        <Cart data={data} /> */}
        {/* <div>

          {dataSearch.results.map(item => <Item data={item} key={item.id} onClickComprar={this.onClickComprar}/>)}
        </div> */}
        <Button as={Link} to="/cart" data-testid="shopping-cart-button">
          Cart
        </Button>
      </div>
    );
  }
}


export default SearchPage;
