import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from 'app/workspace/patika_store/components/Header';
import Content from 'app/workspace/patika_store/components/Content';
import {InputProvider} from 'app/workspace/patika_store/context/inputContext';
const StoreApp = () => {
  return (
    <View style={style.main}>
      <Header />
      <Content />
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default StoreApp;
