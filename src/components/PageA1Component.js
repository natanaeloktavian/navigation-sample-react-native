import React, { Component } from 'react'
import {Text,TouchableHighlight,Image} from 'react-native'
import PropertyListComponent from '../components/PropertyListComponent'
import styles from '../styles/Styles'

class PageA1Component extends PropertyListComponent {
  static navigationOptions = ({ navigation }) => ({
    title:'Brighton',
    headerLeft :
    <TouchableHighlight onPress={() => {navigation.navigate('DrawerOpen')}}>
      <Image
        style={styles.hamburgerIcon}
        source={require('../images/menu.png')}
      />
    </TouchableHighlight>
  });

  componentDidMount(){
    this.registerPNS();
    this.getData('Brighton');
    super.componentDidMount();
  }

  componentWillUnmount() {
      this.notificationListener.remove();
      this.refreshTokenListener.remove();
  }
}

export default PageA1Component
