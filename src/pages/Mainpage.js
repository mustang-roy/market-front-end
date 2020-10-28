import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";
import data from "../__mocks__/query";

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.props.searchText}
          onSearchData={this.props.onSearchData}
        />
        <Cart data={data} />
      </div>
    );
  }
}

export default Mainpage;
