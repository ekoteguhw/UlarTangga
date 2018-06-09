import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Kotak from './Kotak'

const ListKotak = (props) => {
  const { posisi } = props
  const numbers = [[20, 19, 18, 17, 16],
  [11, 12, 13, 14, 15], [10, 9, 8, 7, 6], [1, 2, 3, 4, 5]]

  return (
    <View style={{ marginTop: 5 }}>
      {
        numbers.map((number, index) => <Kotak posisi={posisi} numbers={number} key={index} />)
      }
    </View>
  )
}

export default ListKotak
