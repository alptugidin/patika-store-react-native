import {Text, View} from 'react-native';
import React from 'react';
import {style} from 'app/components/Header.style';

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.headerText}>News</Text>
    </View>
  );
};

export default Header;
