import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import news from '../news_source/news_data.json';
import {style} from 'app/components/Content.style';

const renderItem = item => {
  console.log(item);
  return (
    <View style={style.flatItem} key={item.id}>
      <Text style={style.title}>{item.title}</Text>
      <Image style={style.image} source={{uri: item.imageUrl}} />
      <Text style={style.description}>{item.description}</Text>
      <Text style={style.author}>-{item.author}</Text>
    </View>
  );
};
const Content = ({headerComponent}) => {
  return (
    <View style={style.main}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={news}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

export default Content;
