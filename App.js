import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FacebookScreen from './facebookscreen'
import IgScreen from './igscreen'


export default class App extends React.Component {
  render(){
  return (
   
     <AppContainer/>
 
  );
}
}

const TabNavigator = createBottomTabNavigator({
  FacebookScreen:FacebookScreen,
  IgScreen:IgScreen,
  
});
const AppContainer = createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
