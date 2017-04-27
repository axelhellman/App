import React,{Component} from 'react'
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  ScrollView,
} = ReactNative;

import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
var MainPage = require('./MainPage')

class Tabs extends Component {
   render(){
    return(
        <ScrollableTabView
      renderTabBar={() => <DefaultTabBar />}
      ref={(tabView) => { this.tabView = tabView;}}>
      <View tabLabel='SolEL'><MainPage /></View>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
      <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
        <Text>Lets go back!</Text>
      </TouchableOpacity>
    </ScrollableTabView> 
      );
   }
  }


  module.exports = Tabs;