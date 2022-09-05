import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Loading, Error, Card} from '../../components';
import {useFetch} from '../../hooks';

export const MealsScreen = ({navigation, route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`/filter.php?c=${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handlePress = id => {
    navigation.navigate('Detail', {id});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={({item}) => <Card {...item} handlePress={handlePress}/>}
        keyExtractor={item => item.idMeal}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    paddingHorizontal: 5,
  },
});
