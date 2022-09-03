import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    margin: 10,
    padding: 10,
    width: '45%',
    borderRadius: 5,
  },
  imageContainer: {
    height: 200,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#808080',
  },
  inStock: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'red',
  },
});
