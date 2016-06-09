export const LOAD_RECORD = 'LOAD_RECORD';
export const SAVE_RECORD = 'SAVE_RECORD';
export const REQUEST_REPORT = 'LOAD_REPORT';
export const SAVE_REPORT = 'SAVE_REPORT';
export const UPDATE_REPORT = 'UPDATE_REPORT';
export const CLEAR_REPORT = 'CLEAR_REPORT';
export const UPDATE_CREDENTIALS = 'UPDATE_CREDS';

import { AsyncStorage } from 'react-native';

const API_URI = 'https://cockpit-production-abctotaal.herokuapp.com/overview.json';
const getOverview = (token) => {
  let headers = new Headers({ 'Authorization': `Basic ${token}` });
  return fetch(API_URI, { headers });
};

// NOTE: Often I will get or fetch some information asyncronously, to call an
// update action on success upon which the application state is mutated.
export function addRecord(price, currency = 'XTS', description, category, image, datetime = (new Date).toISOString()) {
  return {
    type: SAVE_RECORD,
    content: {
      price: {
        currency: currency,
        value: price,
      },
      description: description,
      datetime: datetime,
      attachment: image,
      category: category,
    }
  };
};

export function requestReport() {
  console.log('requestReport');
  return {
    type: REQUEST_REPORT,
  }
};

// update state (sync)
export function updateReport(report) {
  console.log('updateReport');
  return {
    type: UPDATE_REPORT,
    report,
  }
};

// persist to storage (async)
export function saveReport(content) {
  return (dispatch, getState) => {
    const success = () => {
      console.log('report saved');
      dispatch(viewReport(content));
    };
    const failure = reason => {
      console.log('report save failed because', reason);
    };

    const data = {
      organization: {
        shortname: content.shortname,
        name: content.organization,
      },
      comment: content.comment,
      updatedAt: content.updated_at,
      receivedAt: Date.now(),
      data: content.data,
    };

    console.log('json stringified', JSON.stringify(data));
    AsyncStorage.setItem('report', JSON.stringify(data), (res, err) => {
      console.log('res', res);
      console.log('err', err);
      dispatch(updateReport(data));
    }).then(
      x => console.log('then w/', x),
      y => console.log('failed w/', y)
    );
  }
};

// get report from local storage (async)
export function getReport() {
  return (dispatch, getState) => {
    console.log('getReport');
    AsyncStorage.getItem('report', (err, res) => {
      console.log('loaded report', JSON.parse(res));
      dispatch(updateReport(JSON.parse(res)));
    }).then(
      x => console.log('load then w/', x),
      y => console.log('load failed w/', y)
    );
  }
}

// fetch from source (async)
export function fetchReport(passed, failed) {
  return (dispatch, getState) => {
    const fail = response => {
      console.log('fail w/', response);
      dispatch(clearReport());
    };

    const proceed = response => {
      console.log('proceed w/', response);
      if(response.ok) {
        console.log('response is ok');
        const parsed = json => {
          console.log('return dispatch -> saveReport');
          dispatch(saveReport(json));
          if(passed) {
            console.log('passed()', json);
            passed();
          }
        };

        const unparsed = err => {
          if(failed) {
            console.log('failed()', err);
            failed();
          }
        };

        response.json().then(parsed, unparsed);
      }

      console.log('return dispatch -> clearReport');
      dispatch(clearReport());
    };

    dispatch(requestReport());
    getOverview(getState().auth.token).then(proceed, fail);
  }
};

// clear report in state (sync)
export function clearReport(payload) {
  console.log('clearReport', payload);
  return { type: CLEAR_REPORT, content: {} };
};

// update auth creds state (sync)
export function updateBasicAuthCredentials(handle, secret) {
  return { type: UPDATE_CREDENTIALS, handle, secret };
};

// save auth creds (async)
export function saveBasicAuthCredentials(handle, secret) {
  const data = { basic: { handle, secret } };
  return (dispatch, getState) => {
    AsyncStorage.setItem('creds_basic', JSON.stringify(data), (res, err) => {
      console.log('set something from AsyncStorage: res', res, 'err', err);
      if(!err) { dispatch(updateBasicAuthCredentials(handle, secret)); }
    }).then(
      res => console.log('stored creds', res),
      err => console.log('err creds', err)
    );
  }
};

export function authenticate(handle, secret, pass=undefined, fail=undefined) {
  console.log('authenticate', handle, secret, pass == undefined, fail == undefined);
  return (dispatch, getState) => {
    dispatch(saveBasicAuthCredentials(handle, secret));
    dispatch(fetchReport(pass, fail));
  };
};
