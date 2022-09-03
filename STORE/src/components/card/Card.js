import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

export default function Card({title, imgURL, price, inStock}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imgURL}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.view}>
        <Text style={styles.price}>{price}</Text>
        {!inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
}
