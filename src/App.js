import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';


class App extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <SearchPage />}
          />
          <Route path="/detail-page" component={DetailPage}/>
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
