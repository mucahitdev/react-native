import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Card({
  title,
  price,
  description,
  category,
  image,
  rating,
  id,
  handleClick,
}) {
  const titleSM = title.length > 20 ? title.substring(0, 20) + '...' : title;
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(id)}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{titleSM}</Text>
        </View>
        <View style={styles.foooterContainer}>
          <View style={styles.cardFooter}>
            <Text style={styles.price}>${price}</Text>
            <Text
              style={[
                styles.rating,
                rating.rate > 3 ? styles.rateGreen : styles.rateRed,
              ]}>
              {rating.rate}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 5,
    marginTop: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  foooterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  rateGreen: {
    color: 'green',
  },
  rateRed: {
    color: 'red',
  },
});
