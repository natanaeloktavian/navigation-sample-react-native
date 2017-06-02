import React, { Component } from 'react'
import {Text,TouchableHighlight,Image} from 'react-native'
import PropertyListComponent from '../components/PropertyListComponent'
import styles from '../styles/Styles'

class PageCComponent extends PropertyListComponent {
  static navigationOptions = ({ navigation }) => ({
    title:'Page C',
    headerLeft :
    <TouchableHighlight onPress={() => {navigation.navigate('DrawerOpen')}}>
      <Image
        style={styles.hamburgerIcon}
        source={require('../images/menu.png')}
      />
    </TouchableHighlight>
  });

  render() {
    return (
      <Text>
        Page C
      </Text>
    );
  }

}

export default PageCComponent
