import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Kotak = (props) => {

  const { numbers, posisi } = props

  return (
    <View style={{ flexDirection: 'row' }}>
      {
        numbers.map((number, index) => number == posisi ? <View style={styles.posisi} key={index}>
          <Text style={styles.number}>{number}</Text>
        </View> :
          <View style={styles.kotak} key={index}>
            <Text style={styles.number}>{number}</Text>
          </View>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  kotak: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  number: {
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  posisi: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderColor: 'gray',
    borderWidth: 1,
  }
})

export default Kotak
