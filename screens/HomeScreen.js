import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';
import styles from '../styles';
import {useState} from 'react';

export default function HomeScreen({navigation}) {
  const[counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="Go to List View" onPress={()=>{
          navigation.navigate("Details");
        }}/>
    <View style={{marginTop:10}}></View>
    <Button title="Increase counter" onPress={()=>{
      setCounter(counter+1);
    }}/>
    <View style={{marginTop:10}}></View>
      <Button title="Decrease counter" onPress={()=>{
        setCounter(counter-1);
      }}/>
    <Text style={{marginBottom: 20}}> Counter value: {counter}</Text>
    </View>
  );
}
