import React, { Component } from 'react'
import {Text,View,Image} from 'react-native'
import styles from '../styles/Styles'

class Page2Component extends Component {
  static navigationOptions = {
    title:'Page2',
    drawerLabel: 'Page2',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/icon_settings.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Text>
        Page 2
      </Text>
    );
  }
}

export default Page2Component
