import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './index.style';

export const Search = ({search, setSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};
