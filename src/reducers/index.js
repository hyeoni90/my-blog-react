import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as BoardReducer from '../reduers/BoardReducer';

export const rootReducer = combineReducers({
  stores: combineReducers({
    boardStore: combineReducers(BoardReducer),
  }),
  routing: routerReducer
});
