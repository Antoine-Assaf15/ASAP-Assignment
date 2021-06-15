import React from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const Tile = ({title, description}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.title}>{title}</Text>
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    fontFamily: 'OpenSans-Regular',
    color: '#4E4E4E',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: width * 0.0693,
    marginTop: height * 0.018,
  },
  description: {
    textAlign: 'left',
    fontFamily: 'OpenSans-Regular',
    color: '#4E4E4E',
    fontSize: 16,
    marginLeft: width * 0.0693,
    marginTop: height * 0.0049,
  },
});

export default Tile;
