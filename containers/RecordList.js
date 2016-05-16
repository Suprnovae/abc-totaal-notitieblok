// TODO: refactor all import statements in codebase to ES6

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log("mapStateToProps");
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
