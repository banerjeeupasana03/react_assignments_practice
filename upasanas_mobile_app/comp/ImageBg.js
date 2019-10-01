import React from 'react';
import {
  ImageBackground,
  Text
} from 'react-native';

function ImageBg() {
  return ( <
    ImageBackground source = {
      {
        uri: 'https://www.pinclipart.com/picdir/middle/367-3676898_report-abuse-cute-ice-cream-drawing-clipart.png'
      }
    }
    style = {
      {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      }
    } >
    <Text> The first component is image background < /Text>
    </ImageBackground>
  );
}

export default ImageBg;
