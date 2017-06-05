import React, { Component } from 'react'
import { DrawerNavigator,StackNavigator,TabNavigator,TabView,DrawerItems } from 'react-navigation';
import {Image,Button,Text,View,TouchableHighlight,TouchableOpacity} from 'react-native'
import styles from '../styles/Styles'
import PageA1Component from '../components/PageA1Component'
import PageA2Component from '../components/PageA2Component'
import PageA3Component from '../components/PageA3Component'
import PageA4Component from '../components/PageA4Component'
import PageA5Component from '../components/PageA5Component'
import PageB1Component from '../components/PageB1Component'
import PageB2Component from '../components/PageB2Component'
import PageDetailComponent from '../components/PageDetailComponent'
import PageCComponent from '../components/PageCComponent'
import PageDComponent from '../components/PageDComponent'
import PageEComponent from '../components/PageEComponent'
import PageFComponent from '../components/PageFComponent'

const MenuATabNavigator = TabNavigator({
  Page1: {
    screen: PageA1Component,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/home_icon_inactive.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  Page2: {
    screen: PageA2Component,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/home_icon_inactive.png')}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  Page3: {
    screen: PageA3Component,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/home_icon_inactive.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  Page4: {
    screen: PageA4Component,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/home_icon_inactive.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  Page5: {
    screen: PageA5Component,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/home_icon_inactive.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
}, {
  tabBarOptions: {
    animationEnabled: false,
    activeTintColor: '#000000',
    inactiveTintColor:'#808080',
    scrollEnabled: false,
    showIcon:false,
    style: {
      backgroundColor: '#ffffff',
    },
    indicatorStyle: {
      backgroundColor: '#FF4081',
    },
  },
  backBehavior: 'none',
});

const MenuBTabNavigator = TabNavigator({
  Page1: {
    screen: PageB1Component,
  },
  Page2: {
    screen: PageB2Component,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor:'#808080',
    style: {
      backgroundColor: '#ffffff',
    },
    indicatorStyle: {
      backgroundColor: '#FF4081',
    },
  },
  tabBarPosition: 'bottom',
  backBehavior: 'none',
});

const TestTabNavigator = TabNavigator({
  Page1: {
    screen: PageCComponent,
  },
  Page2: {
    screen: PageDComponent,
  },
  Page3: {
    screen: PageEComponent,
  },
  Page4: {
    screen: PageFComponent,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor:'#808080',
    style: {
      backgroundColor: '#ffffff',
    },
    indicatorStyle: {
      backgroundColor: '#FF4081',
    },
  },
  animationEnabled: false,
  backBehavior: 'none',
});

const TestStackNavigator = StackNavigator({
  Home: { screen: TestTabNavigator }
});

const MenuButton = (
	<View>
    <TouchableHighlight
        underlayColor='rgba(94, 3, 67, 0.5)'
        onPress={() => {
            navigate('DrawerOpen')
        }}/>
	</View>
);

const MenuAStackNavigator = StackNavigator({
  Home: { screen: MenuATabNavigator },
  Detail: { screen: PageDetailComponent },
},{
    navigationOptions : {
      headerStyle:{backgroundColor:'#3F51B5'},
      headerTitleStyle:{color:'#ffffff'},
      headerTintColor:'#ffffff'
    }
});

const MenuBStackNavigator = StackNavigator({
  Home: { screen: MenuBTabNavigator },
  Detail: { screen: PageDetailComponent },
},{
    navigationOptions : {
      headerStyle:{backgroundColor:'#3F51B5'},
      headerTitleStyle:{color:'#ffffff'},
      headerTintColor:'#ffffff'
    }
});

const MenuCStackNavigator = StackNavigator({
  Home: { screen: TestTabNavigator }
},{
    navigationOptions : {
      headerStyle:{backgroundColor:'#3F51B5'},
      headerTitleStyle:{color:'#ffffff'},
      headerTintColor:'#ffffff'
    }
});

const DrawerPageNavigator = DrawerNavigator({
  MenuADrawer: {
    screen: MenuAStackNavigator,
    navigationOptions:{
      drawerLabel: 'Menu A',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon_settings.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  MenuBDrawer: {
    screen: MenuBStackNavigator,
    navigationOptions:{
      drawerLabel: 'Menu B',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon_settings.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
  MenuCDrawer: {
    screen: MenuCStackNavigator,
    navigationOptions:{
      drawerLabel: 'Menu C',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon_settings.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    },
  },
},{
  contentComponent: props =>
    <View style={{marginTop:16}}>
      <Image
        source={require('../images/placeholder.png')}
        style={{width:64, height:64,marginLeft:16}}
      />
      <Text style={{marginLeft:16,marginTop:8}}>Natanael Oktavian</Text>
      <Text style={{marginLeft:16,marginTop:8,marginBottom:8}}>natan@qlapa.com</Text>
      <DrawerItems {...props} />
    </View>
});

export default DrawerPageNavigator
//export default TestStackNavigator
