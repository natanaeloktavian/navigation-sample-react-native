import React, { Component } from 'react'
import {Text,View,Image,ListView,TouchableNativeFeedback} from 'react-native'
import styles from '../styles/Styles'
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
import realm from './realm';
import FlatList from 'react-native/Libraries/Lists/FlatList';

class PropertyListComponent extends Component {
  static navigationOptions = {
    title:'Brighton',
  };

  constructor(props) {
     super(props);
     console.log = () => {};
     this.state = {
        datasource:[]
     }
  }

  componentDidMount(){
    if(this.props.city!=null)
      this.getData(this.props.city);
  }

 getData(city) {
   //Load From Realm
   this.setState({
      datasource: realm.objects('Property').filtered('property_city = $0',city.toString())
   });

   //Then Load From Server
   return fetch('https://api.nestoria.co.uk/api/?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name='+city, {
      method: 'GET'
   })
   .then((response) => response.json())
   .then((responseJson) => {
      this.setState({
         datasource: responseJson.response.listings
      })
      this.state.datasource.map((value)=>
        {
          if(value.price==null)
            value.price='0';
          realm.write(() => {
             realm.create('Property', {
               title:value.title.toString(),
               bathroom_number: value.bathroom_number.toString(),
               bedroom_number:value.bedroom_number.toString(),
               summary:value.summary.toString(),
               price:value.price.toString(),
               img_url:value.img_url.toString(),
               thumb_url:value.thumb_url.toString(),
               property_city:city.toString()},true);
          });
        }
      );
   })
   .catch((error) => {
      console.error(error);
   });
}

  renderSeparator = () => {
    return (
      <View style={styles.line}/>
    );
  };

  render() {
    return (
        <FlatList
           data = {this.state.datasource}
           renderItem = {({item}) => (
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Detail', { data: item})}>
                  <View style={styles.propertyListContainer}>
                      <View style={styles.propertyImageContainer}>
                        <Image
                          source={{uri: item.thumb_url}}
                          style={styles.propertyIcon}
                        />
                      </View>
                      <View style = {styles.propertyDetailContainer}>
                        <Text style={styles.propertyListText}>
                          {item.title}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {item.summary}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {'Bedroom : '+item.bedroom_number}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {'Bathroom : '+item.bathroom_number}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {'Price : '+item.price}
                        </Text>
                      </View>
                   </View>
                 </TouchableNativeFeedback >
              )
           }
           keyExtractor={item => item.thumb_url}
           ItemSeparatorComponent={this.renderSeparator}
           initialNumToRender={3}
        />
    );
  }
}

export default PropertyListComponent
