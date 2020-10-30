import React, { Component } from 'react';

class SearchBar extends Component {
    render() { 
        return <input data-testid="query-input" onChange={this.props.onSearchText} value={this.props.searchText}/>;
    }
}
 
export default SearchBar;
