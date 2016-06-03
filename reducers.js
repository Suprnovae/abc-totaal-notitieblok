import { combineReducers } from 'redux';
import { LOAD_RECORD, SAVE_RECORD } from './actions';

function records(state = [], action) {
//function records(state = InitinalState, action) {
  console.log('state:'+state);
  switch(action.type) {
  case SAVE_RECORD:{
    return [
      action.content,
      ...state
    ]
  }
  case LOAD_RECORD:{
      return action.content
    }
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
