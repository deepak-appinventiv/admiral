import React, { memo } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Fold } from 'react-native-animated-spinkit';
import Utils from '../utils';

export default memo(() => (
  <View style={styles.container}>
    <Fold color={Utils.Constant.color.primaryColor} />
  </View>
));

export const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Utils.Constant.color.transparent,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
  
