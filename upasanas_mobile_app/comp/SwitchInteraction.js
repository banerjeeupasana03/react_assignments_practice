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
  let changeSwitchState = () => {
    if(this.state.switchValue){
      this.setState({switchValue: false});
      console.log("whatever false");
    } else {
      this.setState({switchValue: true});
      console.log("whatever true");
    }
  };

  return ( < Switch style = {
      {
        marginTop: 30
      }
    }
    onValueChange = {()=>{
      this.changeSwitchState()
    }}
    / >
  )
}

export default SwitchInteraction;
