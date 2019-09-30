/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
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

export default App;
export default ImageBg;
