import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions,ScrollView} from 'react-native';
import {useAxios} from '../hooks';
import Config from 'react-native-config';
import Loading from '../components/Loading';
import Error from '../components/Error';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
function DetailsScreen({route}) {
  const {id} = route.params;
  const {data, loading, error} = useAxios(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  const {title, price, description, category, image, rating} = data;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.foooterContainer}>
        <View style={styles.cardFooter}>
          <Text style={styles.price}>${price}</Text>
          <View
            style={[
              styles.ratingContainer,
              rating.rate > 3 ? styles.rateGreen : styles.rateRed,
            ]}>
            <Text style={styles.rating}>{rating.rate}</Text>
          </View>
        </View>
      </View>
      <View style={styles.lastContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.count}>Total: {rating.count}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: deviceHeight / 3,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  foooterContainer: {
    padding: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  ratingContainer: {
    borderRadius: 10,
    padding: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 10,
    color: 'white',
  },
  rateGreen: {
    backgroundColor: 'green',
  },
  rateRed: {
    backgroundColor: 'red',
  },
  lastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  categoryContainer: {
    backgroundColor: '#80deea',
    borderRadius: 10,
    padding: 5,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  count: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default DetailsScreen;
