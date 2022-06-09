import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from 'app/components/Header';
import Slider from 'app/components/Slider';
import Content from 'app/components/Content';

const App = () => {
  return (
    <View style={style.app}>
      <Header />
      <Content headerComponent={<Slider />} />
    </View>
  );
};

const style = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default App;
