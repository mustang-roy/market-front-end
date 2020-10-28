import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from "./pages/Mainpage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: 'Faz ae Luiz',
      searchText: ''
    };

    this.onSearchData = this.onSearchData.bind(this)
  }

  onSearchData(event) {
    this.setState({
      searchText: event.target.value 
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Mainpage
                searchText={this.state.searchText}
                searchData={this.state.searchData}
                onSearchData={this.onSearchData}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
