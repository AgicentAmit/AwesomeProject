import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SliderCard = () => {
  return (
    <ImageBackground
      source={require('../assests/slider.jpg')}
      resizeMode="cover"
      borderRadius={6}
      style={styles.container}>
      <Text style={styles.text}>NEW</Text>
      <Text style={styles.textSession}>Extending a session</Text>
      <Text style={styles.textDescription}>
        We recommend 10 min before the session ends to ask
      </Text>
    </ImageBackground>
  );
};

export default SliderCard;

const styles = StyleSheet.create({
  container: {
    // margin: '2%',
    padding: '6%',
  },
  text: {
    fontSize: 16,
    color: 'orange',
  },
  textSession: {
    fontSize: 18,
    color: 'black',
  },
  textDescription: {
    fontSize: 14,
    width: '55%',
    marginTop: '2%',
  },
});
