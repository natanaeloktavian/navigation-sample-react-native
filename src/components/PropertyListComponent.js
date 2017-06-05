import React, { Component } from 'react'
import {Text,View,Button,Image,ListView,TouchableNativeFeedback  } from 'react-native'
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

  registerPNS(){
    FCM.getFCMToken().then(token => {
            console.log('Debug Token : '+token)
        });
    this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
        // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
        if(notif.local_notification){
          //this is a local notification
        }
        else {
          this.showLocalNotification(notif);
        }
        if(notif.opened_from_tray){
        }

    });
    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
        console.log(token)
    });
  }

  componentDidMount(){

  }

  showLocalNotification(notif) {
    var data = JSON.parse(notif.data);
    FCM.presentLocalNotification({
      title: data.title,
      body: data.message,
      priority: "high",
      //click_action: notif.click_action,
      show_in_foreground: true,
      local: true
    });
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
    //const rows = this.state.dataSource.cloneWithRows(this.state.datasource||[]);
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
                          {item.bedroom_number}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {item.bathroom_number}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {item.price}
                        </Text>
                      </View>
                   </View>
                 </TouchableNativeFeedback >
              )
           }
           keyExtractor={item => item.title}
           ItemSeparatorComponent={this.renderSeparator}
           initialNumToRender={3}
        />
    );
  }
}

export default PropertyListComponent
