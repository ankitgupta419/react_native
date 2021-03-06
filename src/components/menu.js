import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Home extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        
        <ScrollView style={styles.container}>
          
          <Text style={styles.welcome}>
            Welcome to Menu Items
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
