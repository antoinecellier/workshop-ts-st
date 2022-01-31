import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Item = ({item}) => (
  <View style={styles.item}>
    {Object.values(item).map(value => (
      <Text style={styles.title}>{value}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
  },
});

export default Item;
