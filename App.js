/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Home from './src/components/pages/Home';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
      <Home />
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
