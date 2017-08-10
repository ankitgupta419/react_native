import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
let menuImage = require('../images/menu.png');
let searchImage = require('../images/search.png');
export default class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
        searchQuery:''
      }
    }
    input(event){
      this.setState({
        searchQuery:event.nativeEvent.text
      })
    }
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <TouchableOpacity style={styles.headerLeft}><Image source = {menuImage} ></Image></TouchableOpacity>
          <TouchableOpacity style={styles.titleMid}><Text style={{color:'#000',textAlign: 'center'}}>Title</Text></TouchableOpacity>
          <TouchableOpacity style={styles.headerRight}><Image source = {searchImage} ></Image></TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.searchStyle}>
              <Image  source = {searchImage}></Image>
              <TextInput 
              style={styles.textStyle}
              underlineColorAndroid = "transparent"
              placeholder="Search For Venues"
              onChange={(event) => this.input(event)}
              />
              

          </View>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerStyle:{
    height:60,
    flexDirection:'row',
    backgroundColor: 'red',
    padding:5,
    top: 0
  },
  headerLeft:{
    flex:1,
    flexDirection:'column',
  },
  titleMid:{
    flex:3,
    flexDirection:'column',
  },
  headerRight:{
    flex:1,
    flexDirection:'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
     searchStyle:{ 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height:40,
        margin:10
    },
    textStyle: {
        width:200,
        marginLeft:10,
        fontSize: 16,
        color:'rgb(64,64,64)',
    }
});
