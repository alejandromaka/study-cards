// @flow
import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { Lists } from './actions';
import { loadLists } from './actionCreators';
import ListItem from './ListItem';

type Props = {
  +dispatch: Dispatch,
  lists: Lists
};

class List extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(loadLists());
  }
  render() {
    const { lists } = this.props;
    return (
      <FlatList
        data={lists}
        renderItem={({item}) => <ListItem key={item.name} item={item} />}
      />
    );
  }
}

export default connect((state) => {
  return {
    lists: state.lists
  };
})(List);
