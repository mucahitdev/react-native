import React from 'react';
import Lottie from 'lottie-react-native';

export default function Error() {
  return (
    <Lottie
      source={require('../assets/error.json')}
      autoPlay
      loop
    />
  );
}