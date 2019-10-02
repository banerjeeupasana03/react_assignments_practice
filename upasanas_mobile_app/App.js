/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {DatePickerIOS,StyleSheet, ProgressBarAndroid} from 'react-native';
import styles from './styles/MyStyles';
import Status from './comp/Status';
import Avatar from './comp/Avatar';
import ImageBg from './comp/ImageBg';
import UsageOfTextInput from './comp/UsageOfTextInput';
import SwitchInteraction from './comp/SwitchInteraction';

function App() {
  return (
      <View style={styles.foo}>
        <Text style={styles.apptext}> Upasana Mukherjee's App</Text>
        <Status />
        <Avatar />
        <ImageBg />
        <UsageOfTextInput />
        <SwitchInteraction/>
      </View>
    );
}

export default App;
