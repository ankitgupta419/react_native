import React, { Component } from 'react';
import {
  View,
  Platform,
} from 'react-native';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';
let menuImage = require('./images/menu.png');
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import Menu from './components/menu.js';
import Search from './components/search.js';
const App = () => {
      return (
          <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 20 : 0, backgroundColor: '#FFF',borderWidth: Platform.OS === 'ios' ? 2 : 0,borderTopColor: 'green' }}>
            <Router>
              <Scene key="root" navBar={NavBar}>
                <Scene key="home" component={Home}  initial/>
                <Scene key="search" hideNavBar component={Search} />
                <Scene key="menu" component={Menu}/>
              </Scene>
            </Router>
          </View>
    );
}

export default App;
