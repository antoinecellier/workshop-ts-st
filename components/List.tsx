import React from 'react';
import {FlatList} from 'react-native';

import datasFromServer from '../fixtures/data';
import ListItem from './ListItem';

const List = () => {
  return (
    <FlatList
      data={datasFromServer}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <ListItem item={item} />}
    />
  );
};

export default List;
