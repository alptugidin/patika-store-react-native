import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  flatItem: {
    padding: 8,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 13,
    marginHorizontal: 10,
  },
  main: {
    flex: 1,
  },

  author: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 13,
    marginVertical: 5,
  },
  description: {},
});
