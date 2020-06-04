import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

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
      <>
        {isLoggedIn ? <MainStackNavigator /> : <LoginScreen />}
      </>
    );
  }
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Overview'

  switch (routeName) {
    case 'Overview':
      return 'Overview'
    case 'Add Transaction':
      return 'Add Transaction'
    case 'Transactions':
      return 'Transactions'
    case 'Settings':
      return 'Settings'
  }
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#D6ACEB',
        inactiveTintColor: '#FFA5D6',
        style: {
          backgroundColor: '#DBFFFF',
          paddingTop: 10
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          switch(route.name) {
            case 'Overview':
              iconName = 'chart-pie';
              break;
            case 'Add Transaction':
              iconName = "plus-circle";
              break;
            case 'Transactions':
              iconName = 'receipt'
              break;
            case 'Settings':
              iconName = 'cog';
              break;
            default:
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        }
      })}>
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Add Transaction" component={AddTransactionScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Overview'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#DBFFFF'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#81B2AE',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Overview'
          component={MainTabNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route)
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}