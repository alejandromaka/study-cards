// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Navigator } from 'react-native';
import type { Dispatch } from 'redux';
import type { View } from './actions';
import type { Card } from './Cards/actions';
import { loadNavigation } from './actionCreators';
import Add from './Add';
import Cards from './Cards';
import Lists from './Lists';
import EditCard from './Add/EditCard';

type Props = {
  +currentView: View,
  +dispatch: Dispatch,
  +navigator: Navigator
};

class Route extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(loadNavigation(this.props.navigator));
  }
  render() {
    const { currentView, navigator } = this.props;
    switch (currentView) {
      case 'add':
        return <Add />;
      case 'cards':
        return <Cards />;
      case 'lists':
        return <Lists />;
      default:
        return null;
    }
  }
}

export default connect(state => {
  return {
    currentView: state.route.currentView
  };
})(Route);
