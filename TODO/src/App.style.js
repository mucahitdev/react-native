import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  add: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  add_input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  button : {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    color: 'black',
  },
  resCont : {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
