import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from '../components/layout/quadrado'

export default props => {
  return (
     <View  style={S.FlexV1}>
        <Quadrado />
        <Quadrado cor="green" />
        <Quadrado cor="purple" />
        <Quadrado cor="brown" />
     </View>
   )
}

const S = StyleSheet.create({
    FlexV1: {
        
    }
})