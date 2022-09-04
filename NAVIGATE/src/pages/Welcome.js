import {View, Text} from 'react-native';
import React from 'react';
import Button from '../components/Button';

export default function WelcomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome</Text>
      <Button
        title="Go to Register"
        onPress={() => props.navigation.navigate('Register')}
      />
    </View>
  );
}
