import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
let searchImage = require('../images/search.png');
export default class Search extends Component {
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
          <Text>Search</Text>
          <View style={styles.searchStyle}>
                <Image  source = {searchImage}></Image>
                <TextInput 
                style={styles.textStyle}
                underlineColorAndroid = "transparent"
                placeholder="Search For Venues"
                onChange={(event) => this.input(event)}
                />
          </View>
          <Text>Inheritance of scene attributes allow you to avoid any code/attribute duplications. Adding rightTitle to a scene will apply to all child scenes. See example app. Access to your app navigations state as simple as</Text>
          <TouchableOpacity onPress={() => Actions.menu()}><Text style={{color:'#000',textAlign: 'center',backgroundColor:'green'}}>Menu</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.pop()}><Text style={{color:'#000',textAlign: 'center',backgroundColor:'red'}}>Back</Text></TouchableOpacity> 
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
