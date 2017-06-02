import React, { Component } from 'react'
import {Text,TouchableHighlight,Image} from 'react-native'
import PropertyListComponent from '../components/PropertyListComponent'
import styles from '../styles/Styles'

class PageA3Component extends PropertyListComponent {
  static navigationOptions = ({ navigation }) => ({
    title:'Rome',
    headerLeft :
    <TouchableHighlight onPress={() => {navigation.navigate('DrawerOpen')}}>
      <Image
        style={styles.hamburgerIcon}
        source={require('../images/menu.png')}
      />
    </TouchableHighlight>
  });

  componentDidMount(){
    this.getData('Rome');
    super.componentDidMount();
  }
}

export default PageA3Component
