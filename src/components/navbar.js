import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
let menuImage = require('../images/menu.png');
let searchImage = require('../images/search.png');
export default class NavBar extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <TouchableOpacity style={styles.headerLeft} onPress={() => Actions.menu()}><Image source = {menuImage} ></Image></TouchableOpacity>
          <TouchableOpacity style={styles.titleMid} onPress={() => Actions.home()}><Text style={{color:'#000',textAlign: 'center',fontSize: 18}}>Home</Text></TouchableOpacity>
          <TouchableOpacity style={styles.headerRight} onPress={() => Actions.search()}><Image source = {searchImage} ></Image></TouchableOpacity>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
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
  }
});