import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class OverviewScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>OverviewScreen</Text>
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
