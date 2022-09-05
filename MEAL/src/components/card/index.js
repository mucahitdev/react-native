import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

export const Card = ({strMeal, strMealThumb, idMeal, handlePress}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handlePress(idMeal)}>
      <View style={styles.container}>
        <Image source={{uri: strMealThumb}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#FFA500',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textContainer: {
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
