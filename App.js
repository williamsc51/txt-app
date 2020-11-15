/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';

import Nav from './src/components/nav';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Nav />
    </>
  );
};

export default App;
