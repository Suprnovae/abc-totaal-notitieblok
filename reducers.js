import { combineReducers } from 'redux';
import {
  LOAD_RECORD, SAVE_RECORD,
  REQUEST_REPORT, SAVE_REPORT, CLEAR_REPORT, UPDATE_REPORT,
  UPDATE_CREDENTIALS,
} from './actions';

function records(state = [], action) {
  switch(action.type) {
  case SAVE_RECORD:
    return [
      action.content,
      ...state
    ]
  default: return state;
  }
}

function overview(state = {}, action) {
  switch(action.type) {
    case UPDATE_REPORT:
      console.log('received update for report', action.content);
      return {
        stamp: action.report.updatedAt,
        content: action.report.data,
        comment: action.report.comment,
        organization: action.report.organization.name,
        shortname: action.report.organization.shortname,
      };
    case CLEAR_REPORT:
      return {
        stamp: Date.now(),
        content: [],
        comment: null,
        organization: null,
        shortname: null,
      };
    default: return state;
  }
}

function auth(state = null, action) {
  console.log("Handling auth at", state);
  switch(action.type) {
  case UPDATE_CREDENTIALS:
    console.log(`${action.handle}:${action.secret}`);
    return {
      token: require('buffer').Buffer(`${action.handle}:${action.secret}`).toString('base64'),
    }
  default:
    return state
  }
}

const basicApp = combineReducers({
  auth,
  records,
  overview,
});

export default basicApp;
