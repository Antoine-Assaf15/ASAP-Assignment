import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import NavBar from './src/components/header';
import AboutForm from './src/containers/aboutForm';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.backgroundStyle}>
      <NavBar title={'About'} />
      <View style={styles.form}>
        <AboutForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F4F4F4',
    height: height,
    width: width,
  },
  form: {
    alignSelf: 'center',
    marginTop: height * 0.016,
  },
});

export default App;
