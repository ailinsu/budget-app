import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import firebase from 'firebase';

export default class OverviewScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>OverviewScreen</Text>
        <Button title="Sign Out" onPress={() => firebase.auth().signOut()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
