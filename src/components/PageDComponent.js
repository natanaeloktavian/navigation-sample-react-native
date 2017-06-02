import React, { Component } from 'react'
import {Text} from 'react-native'
import PropertyListComponent from '../components/PropertyListComponent'

class PageDComponent extends PropertyListComponent {
  static navigationOptions = {
    title:'Page D',
  };

  render() {
    return (
      <Text>
        Page D
      </Text>
    );
  }

}

export default PageDComponent
