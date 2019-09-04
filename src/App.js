import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Switch, Router, Route } from "react-router-dom";
import { store, history } from '../src/store/index';

import Board from "./components/board/Board";

const App = () => {
  return (
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Board} />
            </Switch>
          </Router>
        </Provider>
      </div>
  )
};

export default App;
