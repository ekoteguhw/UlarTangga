import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Platform } from 'react-native'

class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'UlarTangga'
  }

  constructor() {
    super()
    this.state = {
      nama: ''
    }

    this.goToGame = this.goToGame.bind(this)
  }

  getNama(nama) {
    this.setState({ nama: nama })
  }

  goToGame() {
    let nama = this.state.nama
    if (nama == '') {
      alert('Anda belum memasukkan nama!')
    } else {
      this.props.navigation.navigate('Papan', { nama: nama })
    }
  }

  render() {
    const { nama } = this.state
    return (
      <View style={styles.container}>
        <Text
          style={styles.title}>Masukkan Nama Anda</Text>
        <TextInput
          style={styles.input}
          onChangeText={(nama) => this.getNama(nama)} />
        <Button
          title="Mulai"
          onPress={this.goToGame} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  input: {
    height: 40,
    width: 280,
    fontSize: 18,
    padding: 10,
    marginBottom: 10,
    ...Platform.select(
      {
        ios: {
          borderColor: 'gray',
          borderWidth: 1,
        }
      }
    )
  },
})

export default LoginScreen
