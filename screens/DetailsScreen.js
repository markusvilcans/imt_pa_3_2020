import * as React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles';

const John_Does = [
  {
    id: 'id-1',
    title: 'John Doe 1',
  },
  {
    id: 'id-2',
    title: 'John Doe 2',
  },
  {
    id: 'id-3',
    title: 'John Doe 3',
  },
  {
    id: 'id-4',
    title: 'John Doe 4',
  },
  {
    id: 'id-5',
    title: 'John Doe 5',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function DetailsScreen() {

   const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={John_Does}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      );
}
