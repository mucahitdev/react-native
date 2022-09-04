import {View, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

export default function RegisterScreen({navigation}) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleNameChange = name => {
    setUser({...user, name});
  };

  const handleEmailChange = email => {
    setUser({...user, email});
  };

  const handlePasswordChange = password => {
    setUser({...user, password});
  };

  const handleSubmit = () => {
    if (user.name && user.email && user.password) {
      navigation.navigate('Details', {user});
    } else {
        Alert.alert('Please fill all the fields');
    }
  };

  return (
    <View style={styles.container}>
      <Input label="Name" value={user.name} onChangedText={handleNameChange} />
      <Input
        label="Email"
        value={user.email}
        onChangedText={handleEmailChange}
      />
      <Input
        label="Password"
        value={user.password}
        onChangedText={handlePasswordChange}
        secureTextEntry
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
