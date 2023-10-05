import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Images from '../../../assests/images';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Images.logoIcon} />
      <Text style={styles.title}>Profile</Text>
      <View style={styles.notification}>
        <Image source={Images.messageIcon} />
        <View style={styles.notificationBadge}>
          <Text style={styles.text}>1</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 33,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
  },
  notification: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -8,
    right: -5,
    width: 20,
    height: 20,
    backgroundColor: 'purple',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
