import React from 'react';
import { createStackNavigator } from 'react-navigation'
import PapanScreen from './screens/Papan'
import LoginScreen from './screens/Login'

const RootStack = createStackNavigator({
  Login: LoginScreen,
  Papan: PapanScreen
}, { initialRouteName: 'Login' })

export default RootStack
