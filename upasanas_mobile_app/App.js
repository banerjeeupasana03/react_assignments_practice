/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/MyStyles';
import Status from './comp/Status'

function App() {
  return (
      <View style={styles.foo}>
        <Text style={styles.apptext}> Upasana Mukherjee's App</Text>
        <Status />
      </View>
    );
}

export default App;
