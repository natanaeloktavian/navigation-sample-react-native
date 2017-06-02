import React, { Component } from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'
import styles from '../styles/Styles'

class Page1Component extends Component {
  static navigationOptions = {
    title:'Page1',
    drawerLabel: 'Page1',
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
        Page 1
      </Text>
    );
  }
}

export default Page1Component
