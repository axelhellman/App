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

const timing = 10000;


class MainPage extends Component {

constructor () {
    super()
    this.spinValue = new Animated.Value(0);
    this.spinValue2 = new Animated.Value(0);
  }
  componentDidMount () {
    this.spin();
    this.spin2();
  }
  spin () {
    this.spinValue.setValue(0) //Här ändras värdet på hur snabbt solen ska snurra
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: timing,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  spin2 () {
    this.spinValue2.setValue(0) //Här ändras värdet på hur snabbt kugghjulet ska snurra
    Animated.timing(
      this.spinValue2,
      {
        toValue: 1,
        duration: timing,
        easing: Easing.linear

      }
    ).start(() => this.spin2())
  }

  render() {
     /* This also works, to show functions instead of strings */
    // const getStartValue = () => '0deg'
    // const getEndValue = () => '360deg'
    // const spin = this.spinValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [getStartValue(), getEndValue()]
    // })
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

     const spin2 = this.spinValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
       /*  <ScrollableTabView
      renderTabBar={() => <DefaultTabBar />}
      ref={(tabView) => { this.tabView = tabView;}}>
      <View tabLabel='Tab #1'> 
      <View style={styles.mainPageLogo}><Text>asd oasdkljg klaskln öjasjnl jöasfnjk mjmm m</Text>
       <View style={styles.consumption}>
                <Animated.Image
          style={{ width: 70, height: 70, transform: [{rotate: spin2}] }}
          source={require('./kugg.png')}/>
              </View>
                <View style={styles.solarCell}>
                <Animated.Image
          style={{ width: 70, height: 70, transform: [{rotate: spin}] }}
          source={require('./sun2.png')}/>
              </View>
              </View>
      

      </View>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
      <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
        <Text>Lets go back!</Text>
      </TouchableOpacity>
    </ScrollableTabView> */

      <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.mainPageLogo}>

            </View>
            <View style={styles.mainPageContent}>
              
              <View style={styles.solarCell}>
                <Animated.Image
          style={{ width: 70, height: 70, transform: [{rotate: spin}] }}
          source={require('./sun2.png')}/>
              </View>

              <View style={styles.consumption}>
                <Animated.Image
          style={{ width: 70, height: 70, transform: [{rotate: spin2}] }}
          source={require('./kugg.png')}/>
              </View>


            </View>
        </View>

      
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },

  content: {
    //flex:7,
    marginBottom: 0,
  },

  mainPageLogo:{
    flex:1,
    backgroundColor:'yellow',
  },

  mainPageContent:{
    //flex:3,
    backgroundColor: 'black',
    flexDirection: 'row',
  },

  solarCell:{
    flex:1,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center'
  },

  consumption:{
    flex:1,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center'
  },

  navbarContainer:{
    //flex:1,
    backgroundColor: 'black',
  },
});

module.exports = MainPage;