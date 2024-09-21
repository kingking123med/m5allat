import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SectionList,ListView,Row,Column} from 'react-native';
import React from "react";



const Header = (props) => {
  return (
    <View style={{marginLeft:.5}}>
      <Text style={{fontWeight:'bold',fontSize:20,color: "white"}}>{props.name} </Text>
      
    </View>
  );
};


export default Header;
