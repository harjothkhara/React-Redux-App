import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
// mapping state from our redux store to the props of this component
const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects
  };
};
// connect is a HOC that returns this component(Dashboard) supercharged with props from our store.
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(Dashboard);
