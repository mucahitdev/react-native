import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Button,
  Switch,
} from 'react-native';
import styles from './App.style';
import {Search, Card} from './components';

const todoData = [
  {id: 1, title: 'Learn React Native', isComlated: true},
  {id: 2, title: 'Learn React Navigation', isComlated: false},
  {id: 3, title: 'Learn React Hooks', isComlated: false},
  {id: 4, title: 'Learn React Redux', isComlated: false},
  {id: 5, title: 'Learn React Redux Hooks', isComlated: false},
  {id: 6, title: 'Learn React Redux Saga', isComlated: false},
  {id: 7, title: 'Learn React Redux Thunk', isComlated: false},
  {id: 8, title: 'Learn React Redux Persist', isComlated: false},
  {id: 9, title: 'Learn React Redux Form', isComlated: false},
  {id: 10, title: 'Learn React Redux Form', isComlated: false},
];

export default App = () => {
  const [search, setSearch] = useState('');
  const [todo, setTodo] = useState(todoData);
  const [newTodo, setNewTodo] = useState('');
  const [showActive, setShowActive] = useState(false);

  const switchChange = id => {
    const newTodo = todo.map(item => {
      if (item.id === id) {
        return {...item, isComlated: !item.isComlated};
      }
      return item;
    });
    setTodo(newTodo);
  };

  const filteredTodo = todo.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  const addTodo = () => {
    if (newTodo.trim().length < 1) {
      alert('Please enter a todo');
      return;
    }
    const newTodoItem = {
      id: todo.length + 1,
      title: newTodo.trim(),
      isComlated: false,
    };
    setTodo([...todo, newTodoItem]);
    setNewTodo('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <Search search={search} setSearch={setSearch} />
      <View style={styles.resCont}>
        <Text style={styles.resContText}>Total Todo: {todo.length}</Text>
        <Text style={styles.resContText}>
          Active Todo: {todo.filter(item => !item.isComlated).length}
        </Text>
      </View>
      <FlatList
        data={filteredTodo}
        renderItem={({item}) => <Card {...item} switchChange={switchChange} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.add}>
        <TextInput
          style={styles.add_input}
          placeholder="Add todo..."
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button style={styles.button} title="Add" onPress={addTodo} />
      </View>
    </SafeAreaView>
  );
};
