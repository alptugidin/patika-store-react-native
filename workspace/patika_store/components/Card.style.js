import {Dimensions, StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
  },
  card: {
    backgroundColor: '#ECEFF1',
    height: 310,
    borderRadius: 10,
    padding: 10,
  },
  cardBody: {
    flex: 1,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  cardFooter: {
    height: 75,
  },

  img: {
    borderRadius: 10,
    flex: 1,
    resizeMode: 'contain',
  },

  description: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
  },
  inStock: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
  },
});
