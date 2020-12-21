import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class IgScreen extends React.Component {
    render(){
  return (
    < View >
   
    <Text style = {{backgroundColor:"green",width:1500,height:60,fontSize:"xxx-large",textAlign:"center"}}>Buzz App</Text>
    <Text style = {{color:"purple",width:1500,height:60,fontSize:"xx-large",textAlign:"center",marginTop:300}}>Instagram</Text>
    </View>
       
  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });