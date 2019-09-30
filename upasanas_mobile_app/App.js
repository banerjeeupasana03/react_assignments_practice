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

function App() {
  return (
      <View style={styles.foo}>
        <Text style={styles.apptext}> Upasana Mukherjee's App</Text>
        <Status />
        <Avatar />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    );
}

function ImageBg(){
  return (
  <ImageBackground source={'https://www.pinclipart.com/picdir/middle/367-3676898_report-abuse-cute-ice-cream-drawing-clipart.png'}
  style={{width: '100%', height: '100%'}}>
    <Text>The first component is image background</Text>
  </ImageBackground>
);
}

export default function UsageOfTextInput() {
  const [value, onChangeText] = React.useState('Input test here');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    );

export default App;
export default ImageBg;
