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
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <TodosList />
    </Provider>
  );
};

export default App;
