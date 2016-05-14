import { combineReducers } from 'redux';
import { LOAD_RECORD, SAVE_RECORD } from './actions';

function records(state = [], action) {
  switch(action.type) {
  case SAVE_RECORD:
      return [
        action.content,
        ...state
      ]
  default:
    return state
  }
}

function token(state = null, action) {
  switch(action.type) {
  default:
    return state
  }
}

const basicApp = combineReducers({
  token,
  records
});

export default basicApp;
