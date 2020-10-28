import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Categorias from "../components/Categorias";
import OrderItems from "../components/OrderItems";
import ItemList from "../components/ItemList";

class Searchpage extends Component {
  render() {
    return (
      <div>
        <Categorias />
        <SearchBar
          searchText={this.props.searchText}
          onSearchData={this.props.onSearchData}
        />
        <h1>Order Items</h1>
        <h1>Cart</h1>
        <h1>Item List</h1>
      </div>
    );
  }
}

export default Searchpage;
