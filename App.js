import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import OverviewScreen from './Screens/OverviewScreen';
import AddTransactionScreen from './Screens/AddTransactionScreen';

import firebase from 'firebase';
import { firebaseConfig } from './config';
import TransactionsScreen from './Screens/TransactionsScreen';
import SettingsScreen from './Screens/SettingsScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged( user => {
        if (user) {
          this.setState({
            isLoggedIn: true
          });
        } else {
          this.setState({
            isLoggedIn: false
          });
        }
    })
  }
  render() {
    const {isLoggedIn} = this.state;
    return (
      <NavigationContainer>
        {isLoggedIn ? (<StackNav />) : <LoginScreen />}
      </NavigationContainer>
    );
  }
}

const Tab = createBottomTabNavigator();

//TODO: Add icons
const TabNav = () => {
  return(
      <Tab.Navigator>
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Add Transaction" component={AddTransactionScreen} />
        <Tab.Screen name="Transactions" component={TransactionsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

//TODO: make header match tab name
const StackNav = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen name="Overview" component={TabNav} />
      </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
