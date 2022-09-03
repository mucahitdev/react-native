import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#ccc',
  },
});
