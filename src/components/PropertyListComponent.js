import React, { Component } from 'react'
import {Text,View,Button,Image,ListView,ScrollView,TouchableNativeFeedback } from 'react-native'
import styles from '../styles/Styles'
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
import realm from './realm';

class PropertyListComponent extends Component {
  static navigationOptions = {
    title:'Brighton',
  };

  constructor(props) {
     super(props);
     console.log = () => {};
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
        datasource:ds.cloneWithRows([]),
        dataSource:ds
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

  render() {
    const rows = this.state.dataSource.cloneWithRows(this.state.datasource||[])
    return (
      <ScrollView>
        <ListView
           style = {styles.listContainer}
           dataSource = {rows}
           renderRow = {
              (rowData) => (
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Detail', { data: rowData})}>
                  <View>
                  <View style={styles.propertyListContainer}>
                      <View style={styles.propertyImageContainer}>
                        <Image
                          source={{uri: rowData.thumb_url}}
                          style={styles.propertyIcon}
                        />
                      </View>
                      <View style = {styles.propertyDetailContainer}>
                        <Text style={styles.propertyListText}>
                          {rowData.title}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {rowData.summary}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {rowData.bedroom_number}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {rowData.bathroom_number}
                        </Text>
                        <Text style={styles.propertyListText}>
                          {rowData.price}
                        </Text>
                      </View>
                   </View>
                   <View style={styles.line}>
                   </View>
                   </View>
                 </TouchableNativeFeedback >
              )
           }
        />
      </ScrollView>
    );
  }
}

export default PropertyListComponent
