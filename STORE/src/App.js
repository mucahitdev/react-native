import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import Card from './components/card/Card';
import {products} from './data';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState(products);

  const search = text => {
    setText(text);
    const newData = products.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Product..."
        onChangeText={search}
        placeholderTextColor="#CDD0D4"
      />
      <FlatList
        data={data}
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#ECEFF1',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
