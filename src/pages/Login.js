/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';



import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  AppRegistry,
  Dimensions
} from 'react-native';
 


export default class Login extends Component {
   constructor(props, context) {
    super(props, context);
  }
  _handlePressLogin() {
    console.log('Pressed!');
    this.props.navigator.push({
      id: 'MainPage',
       });
  }
  _handlePressCancel() {
    console.log('Pressed!');
    this.props.navigator.push({
      id: 'Login',
       });
  }

  render() {
    return (
  
        <ScrollView style={styles.scroll}>  
  
      <Container>
       <Button 
        label="Forgot Login/Pass"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={() => this._handlePressCancel()} />
       </Container>
       <Container>
    <Label text="Username or Email" />
    <TextInput
        style={styles.textInput}/>
        </Container>
        <Container>
        <Label text="Password" />
        <TextInput
        secureTextEntry={true}
        style={styles.textInput}/>
        </Container>


<View style={styles.footer}>
    <Container>
        <Button 
            label="Sign In"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
          onPress={() => this._handlePressLogin()} />
    </Container>
    <Container>
        

        <Button 
            label="CANCEL"
            styles={{label: styles.buttonBlackText}} 
          onPress={() => this._handlePressCancel()} />
    </Container>
</View>
      


        </ScrollView>
      
    );
  }
}




const styles = StyleSheet.create({
  
 scroll: {                         // Style till scroll view
    backgroundColor: 'seashell',
    padding: 30,
    flexDirection: 'column'
},

label: {
    color: '#0d8898',
    fontSize: 20
},
alignRight: {
    alignSelf: 'flex-end'
},
textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: 'whitesmoke'
},
buttonWhiteText: {
    fontSize: 20,
    color: 'whitesmoke',
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
primaryButton: {
    backgroundColor: '#34A853'
},
footer: {
   marginTop: 100
}

});

/*
   <Container>
      <Button 
        label="Forgot Login/Pass"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={this.press.bind(this)} />
    </Container>

<Container>
    <Label text="Username or Email" />
    <TextInput
        style={styles.textInput}/>
</Container>
<Container>
    <Label text="Password" />
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}/>
</Container>
*/

module.exports = Login;