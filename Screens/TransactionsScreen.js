import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TransactionsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TransactionsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFAF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});