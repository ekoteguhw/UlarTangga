import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Kotak = (props) => {
  return (
    <View style={styles.kotak}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  kotak: {
    width: 100,
    height: 100,
    backgroundColor: 'grey'
  },
  number: {
    fontSize: 24,
    justifyContent: 'center'
  }
})

export default Kotak
