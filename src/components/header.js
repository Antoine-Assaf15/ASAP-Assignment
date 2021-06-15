import React from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import {HeaderBackButton} from '@react-navigation/stack';

const {width, height} = Dimensions.get('window');

const NavBar = ({title}) => {
  return (
    <View style={styles.backgroundStyle}>
      <HeaderBackButton style={styles.backButton} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#DEDEDE',
    flexDirection: 'row',
    height: 0.0698 * height,
    width: width,
    elevation: 5,
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    color: '#4E4E4E',
    fontFamily: 'OpenSans-Regular',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 0.1387 * width,
  },
  backComponent: {
    flexDirection: 'column',
  },
  backText: {
    fontSize: 6,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    color: '#4E4E4E',
  },
  backButton: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default NavBar;
