import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from 'react-native';
import {Loading, Error} from '../../components';
import {useFetch} from '../../hooks';

export const DetailScreen = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`/lookup.php?i=${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {strMeal, strArea, strInstructions, strMealThumb, strYoutube, strTags} =
    data?.meals[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{uri: strMealThumb}} />
        <Text style={styles.title}>{strMeal}</Text>
        <Text style={styles.subtitle}>{strArea}</Text>
        <View style={styles.hr} />
        <Text style={styles.description}>{strInstructions}</Text>
        <Text style={styles.description}>{strTags}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(strYoutube)}>
            <Text style={styles.buttonText}>Watch on Youtube</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A5292A',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#A5292A',
    marginTop: 10,
  },
  hr: {
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
