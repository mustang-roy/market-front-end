import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';

class App extends Component {
  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <SearchPage />} />
          <Route path="/cart" component={CartPage} />
          <Route path="/detail" component={DetailPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
