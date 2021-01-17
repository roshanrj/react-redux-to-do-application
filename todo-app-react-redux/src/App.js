import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './actions';
import TaskBar from './components/TaskBar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className="App">
        <TaskBar {...this.props} />
      </div>
    );
  }
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  tasks: PropTypes.array,
};

App.defaultProps = {
  tasks: [],
};

const mapStateToProps = (state) => {
  return {
    taskList: state.tasks.taskList,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators({ ...appActions, }, dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
