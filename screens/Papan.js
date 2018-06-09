import React from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native'

class PapanScreen extends React.Component {

  static navigationOptions = {
    title: 'Game'
  }

  constructor() {
    super()
    this.state = {
      timer: 20,
      posisi: 0,
      random: 0,
      status: false,
      pesan: ''
    }

    this.hitungMundur = this.hitungMundur.bind(this)
    this.lemparDadu = this.lemparDadu.bind(this)
  }

  componentDidMount() {
    /*
    setInterval(() => {
      this.hitungMundur(this.state.timer)
    }, 1000);
    */
  }

  componentWillMount() {
    //this.hitungMundur(this.state.timer)
  }

  hitungMundur(timer) {
    if (timer <= 0) {
      alert('Game Over! Anda gagal memenangkan game ini.')
      this.props.navigation.navigate('Login')
      this.setState({
        timer: 20
      })
    } else {
      this.setState({
        timer: timer - 1
      })
    }
  }

  lemparDadu() {
    let posisi = this.state.posisi
    let status = this.state.status
    let timer = this.state.timer
    let pesan = this.state.pesan
    let random = Math.floor(Math.random() * 6 + 1)
    posisi += random

    if (posisi == 20) {
      status = true
      pesan = `Selamat, Anda berhasil mencapai 20!`
    } else if (posisi > 20) { // kembali dari 20 ke 19, 18, dst
      pesan = `Anda harus mundur ${random - (posisi - 20)} langkah`
      posisi = 20 - ((posisi - 20))
      if (posisi == 6 || posisi == 12 || posisi == 18) {
        posisi -= 5
        pesan += `\nAnda harus kembali mundur ${random} langkah`
      } else {
        pesan += `\nAnda kembali di posisi ${posisi}`
      }
      status = false
    } else if (posisi < 20) {
      if (posisi == 6 || posisi == 12 || posisi == 18) {
        posisi -= 5
        pesan = `Anda harus mundur ${random} langkah`
      } else {
        pesan = `Anda sudah maju ${random} langkah`
      }
      status = false
    }

    this.setState({
      posisi: posisi,
      random: random,
      status: status,
      posisi: posisi,
      pesan: pesan
    })

    if (status == true && timer <= 20) {
      alert('Selamat! Anda berhasil memenangkan game ini.')
      this.props.navigation.navigate('Login')
      this.setState({
        posisi: 0,
        random: 0,
        status: false,
        posisi: 0,
        pesan: ''
      })
    }
  }

  jumlahKotak() {
    const numbers = []
    let index = 1;

    while (index <= 20) {
      numbers.push(index)
      index++
    }

    return numbers;
  }

  render() {

    const nama = this.props.navigation.getParam('nama', 'Anonymous')
    const { posisi, random, timer, pesan, status } = this.state
    const numbers = []
    let index = 1;

    while (index <= 20) {
      numbers.push(index)
      index++
    }

    return (
      <View style={styles.container}>
        <View style={styles.containerNama}>
          <Text style={styles.nama}>{nama}</Text>
        </View>
        <View style={styles.containerKotak}>
          {
            numbers.map(number => {
              <View style={styles.kotak}>
                {
                  posisi == number ? <Text style={styles.posisiNow}>{number}</Text>
                    :
                    <Text style={styles.number}>{number}</Text>
                }
              </View>
            })
          }
        </View>
        {
          status == false && <View style={styles.containerPesan}>
            <Text style={styles.pesan}>{pesan}</Text>
          </View>
        }
        <View style={styles.containerDadu}>
          <Text style={styles.dadu}>Dadu {'\n'}{random}</Text>
          <Text style={styles.timer}>{'\n'}{timer}</Text>
          <Text style={styles.posisi}>Posisi {'\n'}{posisi}</Text>
        </View>
        <View style={styles.containerButton}>
          <Button
            style={styles.button}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNama: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  nama: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  containerKotak: {
    flex: 5,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'gray',
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'stretch',
    padding: 10,
  },
  containerDadu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  dadu: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  timer: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  posisi: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 10
  },
  button: {
    color: 'white',
    borderWidth: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerPesan: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 10
  },
  pesan: {
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white'
  },
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
  posisiNow: {
    fontSize: 18,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: 'red'
  }
})

export default PapanScreen
