import React from 'react';
import {FlatList, View} from 'react-native';
import Card from 'app/workspace/patika_store/components/Card';
import {style} from 'app/workspace/patika_store/components/Content.style';
import data from 'app/workspace/patika_store/data/data.json';
import LastCard from 'app/workspace/patika_store/components/LastCard';
import {useInput} from 'app/workspace/patika_store/context/inputContext';

const Content = () => {
  const context = useInput();
  const renderItem = (item, index) => {
    return index < data.length - 1 ? (
      <Card data={item} />
    ) : (
      <LastCard data={item} />
    );
  };

  return (
    <View style={style.main}>
      <FlatList
        style={style.flatList}
        numColumns={2}
        data={context.filtered}
        contentContainerStyle={{paddingBottom: 50}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
  );
};

export default Content;
