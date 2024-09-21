import React from 'react';
import {ImageBackground,Image, StyleSheet, Text, View} from 'react-native';
import Metro from '../assets/monastir/Metro.jpg';

const MetroUri = Image.resolveAssetSource(Metro).uri;

const Forum = () => (
  <View style={styles.container}>
    <ImageBackground source={{uri :MetroUri}} resizeMode="cover" style={styles.image}>
      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default Forum;