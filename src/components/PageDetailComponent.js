import React, { Component } from 'react'
import {Text,View,Image} from 'react-native'
import Mixpanel from 'react-native-mixpanel-bridge';

class PageDetailComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: `Property Detail`,
  });

  componentDidMount(){
    this.sendEventToMixpanel();
  }

  sendEventToMixpanel(){
    const { params } = this.props.navigation.state;
    Mixpanel.sharedInstanceWithToken('ca9b3ee163d6b5627272f45350f4a606');
    Mixpanel.trackWithProperties('Opened Property Detail', {title: params.data.title});
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{alignItems: 'center',marginTop:16}}>
        <Image
          source={{uri: params.data.img_url}}
          style={{ width:250, height: 150}}
        />
        <Text style={{marginTop: 8}}>
          {params.data.title}
        </Text>
        <Text style={{marginTop: 8}}>
          {params.data.summary}
        </Text>
      </View>
    );
  }
}

export default PageDetailComponent
