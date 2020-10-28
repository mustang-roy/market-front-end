import React, { Component } from 'react';

class SearchBar extends Component {
    render() { 
        return <input onChange={this.props.onSearchData} value={this.props.searchText}/>;
    }
}
 
export default SearchBar;
