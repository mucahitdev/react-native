import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../components/Button';

export default function DetailsScreen({route,navigation}) {
  const {user} = route.params;
  const {name, email, password} = user;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.value}>{password}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Welcome"
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 18,
  },
  button: {
    marginTop: 20,
  },
});
