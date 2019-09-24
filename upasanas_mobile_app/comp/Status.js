import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/StatusStyles';

function Status() {
  return (
    <View style={styles.status}>
      <Text style={styles.statusText}> This is a bottom status bar</Text>
    </View>
  )
}

export default Status;
