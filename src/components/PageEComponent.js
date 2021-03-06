import React, { Component } from 'react'
import {Text,TouchableHighlight,Image} from 'react-native'
import styles from '../styles/Styles'

class PageEComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title:'Page E',
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
        Page E
      </Text>
    );
  }

}

export default PageEComponent
