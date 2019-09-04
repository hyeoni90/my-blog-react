import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as BoardActions from '../actions/BoardActions';

const Actions = {
  boardActions: BoardActions,
};

const bindConnects = (mapper) => {
  return connect(reducer => {
    let obj = {};

    mapper.forEach((item) => {
      obj[item.storeName] = reducer.stores[item.storeName];
    });

    return obj;

  }, (dispatch) => {
    let obj = {dispatch: dispatch};

    mapper.forEach((item) => {
      obj[item.actionName] = bindActionCreators(_.assign({}, Actions[item.actionName]), dispatch)
    });

    return obj;
  }, null, {
    pure: false
  })
};

export { bindConnects };
