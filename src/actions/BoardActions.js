import axios            from 'axios';
import { createAction } from 'redux-actions';

import * as boardTypes from '../constants/BoardActionTypes';

const fetchBoardList = () => {
  return dispatch => {
    axios.get('/api/boards')
    .then((res) => {
      dispatch(createAction(boardTypes.FETCH_BOARDS)({
        boardList: res.data
      }));
      console.log(res.data);
    })
    .catch((res) => {
      console.log(res);
    })
  };
};

export default {
  fetchBoardList,
};

// export function fetchBoardList() {
//   return {
//     type: boardTypes.FETCH_BOARDS, // Request Success
//     payload: axios.get('/api/boards'),
//   };
// }
