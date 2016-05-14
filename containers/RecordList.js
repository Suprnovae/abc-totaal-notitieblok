// TODO: refactor all import statements in codebase to ES6

import { connect } from 'react-redux';

import MockData from '../data/records';

const mapStateToProps = (state) => {
  return {
    token: state.token,
    records: state.records
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
