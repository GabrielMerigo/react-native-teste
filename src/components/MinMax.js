import React from 'react';
import { Text, View, Platform } from 'react-native';

export default function MinMax(){
  const platform = Platform.OS === 'android' && 'Android'

  return(
      <View>
        <Text style={{ fontSize: 24 }}>{platform}</Text>
      </View>
  )
}