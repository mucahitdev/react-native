import React from 'react';
import Lottie from 'lottie-react-native';

export const Loading = () => {
  return (
    <Lottie source={require('../../assets/loadingMeal.json')} autoPlay loop />
  );
};
