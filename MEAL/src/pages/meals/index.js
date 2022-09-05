import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Loading, Error} from '../../components';
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


  // const handlePress = id => {
  //   navigation.navigate('Meals', {id});
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={({item}) => (
          <CategoryCard {...item} handlePress={handlePress} />
        )}
        keyExtractor={item => item.idCategory}
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
