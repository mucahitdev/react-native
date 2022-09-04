import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Config from 'react-native-config';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {useAxios} from '../hooks';

export default function HomeScreen({navigation}) {
  const {data, loading, error} = useAxios(Config.API_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleClick = (id) => {
    navigation.navigate('Details', {id});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Card {...item} handleClick={handleClick} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
