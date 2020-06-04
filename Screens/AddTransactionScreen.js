import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';

export default function AddTransactionScreen() {

  const [value, onChangeText] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState("Expense");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <Text style={styles.title}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              placeholderTextColor='gray'
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </View>
          <View>
            <Text style={styles.title}>Category</Text>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Expense" value="expense" />
              <Picker.Item label="Income" value="Income" />
            </Picker>
          </View>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    backgroundColor: 'white'
  },
  picker: {
    height: 40,
    backgroundColor: 'white'
  }
}); 