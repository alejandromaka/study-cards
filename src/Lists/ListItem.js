// @flow
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import type { ListItem } from './actions';

type Props = {
  item: ListItem
};

function ListItemView({ item }: Props) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
}

export default ListItemView;
