/**
 * Created by user on 02.06.16.
 */
import { createStore } from 'redux';
import { addRecord, initRecord } from './actions';
import basicApp from './reducers';
import MockData from './data/records';

let initialState = {
  token: 'YouReallyDidntExpectMeToHardcodeThatOrDidYou?',
  records: [] //MockData.records
};

export default createStore(basicApp, initialState);