import React,{Component} from 'react'
var ReactNative = require('react-native');
var {
/* View,
  Text,
  StyleSheet,
  AppRegistry,
  Animated,
  Image*/
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} = ReactNative;

const timing = 4000

class MainPage extends Component {

constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: timing,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render () {
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
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
          source={{uri: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/sun-303773_1280.png'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


  /*render() {
    return (

      <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.mainPageLogo}>
            </View>
            <View style={styles.mainPageContent}>
              <View style={styles.solarCell}>
              </View>
              <View style={styles.consumption}>
              </View>



            </View>
        </View>

        <View style={styles.navbarContainer}>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex:7,
    marginBottom: 0,
  },
  mainPageLogo:{
    flex:1,
    backgroundColor:'yellow',
  },
  mainPageContent:{
    flex:3,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  solarCell:{
    flex:1,
    backgroundColor:'pink',
  },
  consumption:{
    flex:1,
    backgroundColor:'white',
  },
  navbarContainer:{
    flex:1,
    backgroundColor: 'black',
  }
});*/

module.exports = MainPage;