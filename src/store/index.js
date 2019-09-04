import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from '../reduers/index';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const configureStore = (history, initialState = {}) => {
  const enhancer = compose(applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history),
  ));
  return createStore(rootReducer, initialState, enhancer);
};

export const store = configureStore();
export const history = createBrowserHistory();
