import React, {useEffect} from 'react';
import {Text, TextInput, View} from 'react-native';
import {style} from 'app/workspace/patika_store/components/Header.style';
import {useInput} from 'app/workspace/patika_store/context/inputContext';
import data from 'app/workspace/patika_store/data/data.json';
const Header = () => {
  const context = useInput();

  const filtered = () => {
    const regex = new RegExp(context.input, 'gi');

    context.setFiltered(
      data.filter(item => {
        return item.title.match(regex);
      }),
    );
  };

  useEffect(() => {
    if (context.input.length === 0) {
      context.setFiltered(data);
    }
  }, [context]);

  const handleOnChange = text => {
    context.setInput(text);
    filtered();
  };
  return (
    <View style={style.header}>
      <Text style={style.headerText}>Patika Store</Text>
      <TextInput
        onChangeText={text => handleOnChange(text)}
        value={context.input}
        placeholder="Ara..."
        style={style.textInput}
      />
    </View>
  );
};

export default Header;
