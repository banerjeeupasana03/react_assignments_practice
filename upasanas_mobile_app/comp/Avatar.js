import React from 'react';
import {View, Image} from 'react-native';
import styles from '../styles/AvatarStyles';

function Avatar() {
  return (
    <View style={styles.avatar}>
      <Image
        style={styles.avatarImg}
        source={require('../images/bird.jpg')}
        resizeMode="cover"
       />
    </View>
  )
}

export default Avatar;
