import React, { Component } from 'react'
import {Text,TouchableHighlight,Image} from 'react-native'
import styles from '../styles/Styles'

class PageFComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title:'Page F',
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
        Page F
      </Text>
    );
  }

}

export default PageFComponent
