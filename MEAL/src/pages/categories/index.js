import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Loading, Error, CategoryCard} from '../../components';
import {useFetch} from '../../hooks';

export const CategoriesScreen = ({navigation}) => {
  const {data, loading, error} = useFetch('/categories.php');

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handlePress = id => {
    navigation.navigate('Meals', {id});
  };

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
