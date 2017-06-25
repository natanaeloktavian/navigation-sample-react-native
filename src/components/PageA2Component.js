import React, { Component } from 'react'
import {Text,TouchableHighlight,Image} from 'react-native'
import PropertyListComponent from '../components/PropertyListComponent'
import styles from '../styles/Styles'

class PageA2Component extends Component {
  static navigationOptions = ({ navigation }) => ({
    title:'London',
    headerLeft :
    <TouchableHighlight onPress={() => {navigation.navigate('DrawerOpen')}}>
      <Image
        style={styles.hamburgerIcon}
        source={require('../images/menu.png')}
      />
    </TouchableHighlight>
  });

  render(){
    return(
      <PropertyListComponent city={'London'} navigation={this.props.navigation}/>
    )
  }
}

export default PageA2Component
