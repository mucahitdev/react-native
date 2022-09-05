import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';

export const CategoryCard = ({
  strCategory,
  strCategoryThumb,
  id,
  handlePress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handlePress(strCategory)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: strCategoryThumb}} style={styles.image} />
        </View>
        <Text style={styles.text}>{strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    marginVertical: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});
