import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import Cart from './pages/Cart';

class App extends Component {
  // constructor(props) {
  //   super(props);

  // };
  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <SearchPage />} />
          <Route path="/cart" component={Cart} />
          <Route path="/detail-page" component={DetailPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
