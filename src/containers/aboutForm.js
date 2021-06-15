import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import Tile from '../components/tile';

const {width, height} = Dimensions.get('window');

const AboutForm = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Tile title={'Version'} description={'Version 5.0.0'} />
      <View style={styles.separator} />
      <Tile title={'Rate Us'} description={'Do you like using BarCloud Pro?'} />
      <TouchableOpacity style={{...styles.button, ...styles.rating}}>
        <View style={styles.buttonTextView}>
          <Text style={styles.ratingText}>Rate Us</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
      <Tile title={'Account'} description={'Asap123@asapsystems.com'} />
      <View style={styles.separator} />
      <Tile
        title={'Database name'}
        description={'BarcloudWeb_3782ighdjksbc682893'}
      />
      <View style={styles.separator} />
      <Tile title={'Device ID'} description={'123efg5689whvmv8rw90'} />
      <View style={styles.separator} />
      <Tile title={'Device Name'} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Choose your Device Name'}
        />
      </View>
      <View style={styles.separator} />
      <Tile
        title={'Contact Us'}
        description={'355 Piercy Rd, San Jose, CA 95138'}
      />
      <TouchableOpacity style={{...styles.button, ...styles.contact}}>
        <View style={styles.buttonTextView}>
          <Text style={styles.mapsText}>Find Us on Google Map</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
      <Text style={styles.credits}>
        ASAP Systems 2021 © All Rights Reserved
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#EAEAEA',
    borderRadius: 25,
    height: height * 0.8978,
    width: width * 0.933,
    elevation: 3,
  },
  separator: {
    backgroundColor: '#DEDEDE',
    width: 0.86 * width,
    alignSelf: 'center',
    marginTop: 0.01 * height,
    height: 2,
  },
  credits: {
    textAlign: 'left',
    fontSize: 12,
    color: '#4E4E4E',
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'italic',
    marginLeft: width * 0.0693,
    marginTop: height * 0.0184,
  },
  buttonTextView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#F4FAF5',
    borderColor: '#7AC793',
    borderWidth: 1,
    borderRadius: 29,
  },
  rating: {
    width: width * 0.504,
    height: height * 0.0567,
    marginTop: height * 0.0185,
    marginBottom: height * 0.01,
    marginLeft: width * 0.03467,
  },
  ratingText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#7AC793',
    fontWeight: 'bold',
  },
  contact: {
    width: width * 0.8373,
    height: height * 0.0431,
    marginTop: height * 0.0185,
    marginBottom: height * 0.01,
    marginLeft: width * 0.0693,
  },
  mapsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#7AC793',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: width * 0.8373,
    height: height * 0.0466,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    elevation: 5,
    marginLeft: width * 0.056,
    marginTop: height * 0.011,
    marginBottom: height * 0.01,
  },
  input: {
    color: '#A3A3A3',
    fontSize: 15,
    fontStyle: 'italic',
    fontFamily: 'OpenSans-Regular',
    marginLeft: width * 0.0267,
  },
});

export default AboutForm;
