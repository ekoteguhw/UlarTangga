import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Kotak extends React.Component {
  render() {
    const { posisi } = this.props
    const numbers = []
    let index = 1;

    while (index <= 20) {
      numbers.push(index)
      index++
    }

    return (
      <View>
        {
          numbers.map(number => {
            <View row>
              <View style={styles.kotak}>
                {
                  posisi == number ? <Text style={styles.posisi}>{number}</Text>
                    :
                    <Text style={styles.number}>{number}</Text>
                }
              </View>
            </View>
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  kotak: {
    width: 55,
    height: 55,
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
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: 'red'
  }
})
