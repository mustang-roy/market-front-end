import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';


class App extends Component {
  constructor(props) {
    super(props);

    this.onSearchText = this.onSearchText.bind(this);

    this.state = { searchText: '' };
  };

  onSearchText(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  };

  render() {
    const { searchText } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <SearchPage searchText={searchText} onSearchText={this.onSearchText} />}
          />
          <Route path="/detail-page" component={DetailPage}/>
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
