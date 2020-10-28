import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";

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
            render={() => <MainPage searchText={searchText} onSearchText={this.onSearchText} />}
          />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
