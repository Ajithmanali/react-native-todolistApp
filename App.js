/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {TodosList} from './src/screens/TodosList';
const App: () => React$Node = () => {
  return <TodosList />;
};

export default App;
