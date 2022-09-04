import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

function Input({label, value, onChangedText, secureTextEntry}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangedText}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
  },
});

export default Input;
