import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from './index.style';

export const Card = ({title, isComlated, switchChange, id}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,isComlated && styles.titleCompleted ]}>{title}</Text>
      <Switch value={isComlated} onValueChange={() => switchChange(id)} />
    </View>
  );
};
