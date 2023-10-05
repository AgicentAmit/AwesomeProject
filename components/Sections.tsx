import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Sections = props => {
  const {tags, title, icon, OnPress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={tags} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={OnPress}>
        <Image source={icon} resizeMode="contain" style={{width:20}} />
      </TouchableOpacity>
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE8E7',
    padding: '4%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    // marginVertical: '2%',
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginLeft: '4%',
  },
});
