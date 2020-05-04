import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function AddTransactionScreen() {

  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="0.00"
        placeholderTextColor='gray'
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFAF0',
    padding: 32
  },
  title: {
    marginBottom: 6
  },
  input: {
    height: 40,
    padding: 6,
    borderColor: 'gray', 
    borderWidth: 1,
    backgroundColor: 'white'
  }
});