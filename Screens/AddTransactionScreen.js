import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AddTransactionScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AddTransactionScreen</Text>
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