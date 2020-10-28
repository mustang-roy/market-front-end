import React, { Component } from "react";

import data from "../__mocks__/query";

import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";

class MainPage extends Component {
  render() {
    const { searchText, onSearchData } = this.props;
    return (
      <div>
        <SearchBar searchText={searchText} onSearchData={onSearchData} />
        <Cart data={data} />
      </div>
    );
  };
}

export default MainPage;
