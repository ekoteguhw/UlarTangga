import React from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import { Kotak } from '../components/Kotak'

class PapanScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      timer: 20,
      posisi: 0,
      random: 0,
      status: false
    }

    this.lemparDadu = this.lemparDadu.bind(this)
    this.hitungMundur = this.hitungMundur.bind(this)
  }

  hitungMundur() {
    this.setState({
      timer: timer - 1
    })
  }

  lemparDadu() {
    let posisi = this.state.posisi
    let status = this.state.status
    let timer = this.state.timer
    let random = Math.floor(Math.random() * 6 + 1)
    posisi += random

    if (posisi == 20) {
      status = true
    } else if (posisi > 20) { // kembali dari 20 ke 19, 18, dst
      posisi -= random
      if (posisi == 6 || posisi == 12 || posisi == 18) {
        posisi -= 5
        status = false
      }
    } else if (posisi < 20) {
      if (posisi == 6 || posisi == 12 || posisi == 18) {
        posisi -= 5
        status = false
      }
    }

    this.setState({
      posisi: posisi,
      random: random,
      status: status
    })

    if (status == true && timer <= 20) {
      alert('Selamat! Anda berhasil memenangkan game ini.')
      this.props.navigation.navigate('Login')
      this.setState({
        posisi: 0,
        random: 0,
        status: false
      })
    } else if (timer == 0) {
      alert('Game Over! Anda gagal memenangkan game ini.')
    }
  }

  printKotak(index) {
    return (
      <Kotak index={index} />
    )
  }

  render() {

    const nama = this.props.navigation.getParam('nama', 'anonymous')
    const { posisi, random } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.containerNama}>
          <Text style={styles.nama}>{nama}</Text>
        </View>
        <View style={styles.containerKotak}>

        </View>
        <View style={styles.containerDadu}>
          <Text style={styles.dadu}>Dadu: {random}</Text>
          <Text style={styles.posisi}>Posisi: {posisi}</Text>
        </View>
        <View style={styles.containerButton}>
          <Button
            title="Lempar Dadu"
            onPress={this.lemparDadu} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNama: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    height: 100,
  },
  nama: {
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center'
  },
  containerKotak: {
    flex: 3,
    flexDirection: 'row',
    margin: 20,
    height: 300,
  },
  containerDadu: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    height: 100
  },
  dadu: {
    fontSize: 24,
    textAlign: 'left'
  },
  posisi: {
    fontSize: 24,
    textAlign: 'right'
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 10
  },
})

export default PapanScreen
