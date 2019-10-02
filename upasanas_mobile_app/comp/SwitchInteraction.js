import React, {
  Component
} from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet
} from 'react-native';

function SwitchInteraction() {
  return ( < Switch style = {
      {
        marginTop: 30
      }
    }
    onValueChange = {()=>{
      if(this.state.value){
        this.setState({value: false});
        console.log("whatever false");
      } else {
        this.setState({value: true});
        console.log("whatever true");
      }
    }}
    / >
  )
}

export default SwitchInteraction;
