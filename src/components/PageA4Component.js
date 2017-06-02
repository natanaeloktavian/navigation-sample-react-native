import React, { Component } from 'react'
import {Text,TouchableHighlight,Image} from 'react-native'
import PropertyListComponent from '../components/PropertyListComponent'
import styles from '../styles/Styles'

class PageA4Component extends PropertyListComponent {
  static navigationOptions = ({ navigation }) => ({
    title:'Oxford',
    headerLeft :
    <TouchableHighlight onPress={() => {navigation.navigate('DrawerOpen')}}>
      <Image
        style={styles.hamburgerIcon}
        source={require('../images/menu.png')}
      />
    </TouchableHighlight>
  });

  componentDidMount(){
    this.getData('Oxford');
    super.componentDidMount();
  }
}

export default PageA4Component
