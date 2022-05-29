import React from 'react'
import { View, Text, FlatList } from 'react-native'

const list = [
  { name: 'mr.gabriel', age: 27 },
  { name: 'iza', age: 19 }
];

export default props => {
  return (
    <FlatList
      data={list}
      keyExtractor={(_, index) => index}
      renderItem={({ item }) => <Text>{item.age}</Text>}
    />
  )
}