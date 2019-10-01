import React from 'react';
import {
  TextInput
} from 'react-native';


function UsageOfTextInput() {
  const [value, onChangeText] = React.useState('Input test here');

  return ( <
    TextInput style = {
      {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }
    }
    onChangeText = {
      text => onChangeText(text)
    }
    value = {
      value
    }
    />
  );

  export default UsageOfTextInput;
