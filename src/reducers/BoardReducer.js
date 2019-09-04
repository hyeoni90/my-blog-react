import * as boardTypes from '../constants/BoardActionTypes'
import _ from 'lodash';

const initialState = {
  boardList: [],
};

export default function boards (state = initialState, action) {
  switch (action.type) {
    case boardTypes.FETCH_BOARDS: {
      return _.assign({}, state, {boardList: action.payload.data});
    }

    default:
      return state;
  }
};
