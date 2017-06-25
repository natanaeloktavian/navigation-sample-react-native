import React, { Component } from 'react'
import {Text,TouchableHighlight,Image} from 'react-native'
import PropertyListComponent from '../components/PropertyListComponent'
import styles from '../styles/Styles'
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

class PageA1Component extends Component {
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

  componentDidMount(){
    this.registerPNS();
  }

  render(){
    return(
      <PropertyListComponent city={'Brighton'} navigation={this.props.navigation}/>
    )
  }

  componentWillUnmount() {
      this.notificationListener.remove();
      this.refreshTokenListener.remove();
  }
}

export default PageA1Component
