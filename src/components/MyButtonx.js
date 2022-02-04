import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MyButtonx = ({
    Mytext = '',
    mycolor={},
    myPress = () => {}
 

}) => {
  return (
    <TouchableOpacity
      style={{...styles.ButtonStyle,...mycolor}}
      onPress={myPress}
      activeOpacity={0.8}>
      <Text style={{color: 'white', fontWeight: '600'}}>{Mytext}</Text>
    </TouchableOpacity>
  );
};

export default MyButtonx;

const styles = StyleSheet.create({
  ButtonStyle: {
    height: 45,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
